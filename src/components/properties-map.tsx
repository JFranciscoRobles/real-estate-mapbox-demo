import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import { useAppStore, selectDisplayGeoJSON, findPropertyById } from '@/store/useAppStore'
import { MAP_CONFIG, CLUSTER_COLORS, STATUS_COLORS, INDUSTRIAL_ZONES, getMapboxAccessToken } from '@/lib/constants'
import { PropertyPopup } from "@/components/property-popup"
import { createRoot } from "react-dom/client"
import 'mapbox-gl/dist/mapbox-gl.css';

// Set Mapbox access token from environment or localStorage at runtime.
const runtimeMapboxToken = getMapboxAccessToken()
if (runtimeMapboxToken) {
    mapboxgl.accessToken = runtimeMapboxToken
} else {
    console.warn('[map] Mapbox access token not provided via env or localStorage')
}

/**
 * PropertiesMap
 * Main map component that renders a Mapbox GL map and synchronizes
 * interactions with the global Zustand store. Responsibilities:
 * - Initialize Mapbox, sources and layers
 * - Wire click/hover behaviors to update selected/hovered property in the store
 * - Emit visible property ids (clusters + unclustered) to the store
 */
export function PropertiesMap() {
    const mapContainer = useRef<HTMLDivElement>(null)
    const map = useRef<mapboxgl.Map | null>(null)
    const prevHoverRef = useRef<string | null>(null)
    const prevSelectedRef = useRef<string | null>(null)
    const popupRef = useRef<mapboxgl.Popup | null>(null)
    const [mapLoaded, setMapLoaded] = useState(false)
    const [showIndustrialZones, setShowIndustrialZones] = useState(true)

    // Store actions & state
    const setVisiblePropertyIds = useAppStore(s => s.setVisiblePropertyIds)
    const setSelectedProperty = useAppStore(s => s.setSelectedProperty)
    const setHoveredProperty = useAppStore(s => s.setHoveredProperty)
    const selectedPropertyId = useAppStore(s => s.selectedProperty)
    const hoveredPropertyId = useAppStore(s => s.hoveredProperty)
    const statusFilter = useAppStore(s => s.statusFilter)
    const divisionFilter = useAppStore(s => s.divisionFilter)
    const typeFilter = useAppStore(s => s.typeFilter)
    const filters = useAppStore(s => s.filters)

    // --- Initialize map ---
    useEffect(() => {
        if (!mapContainer.current) return

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: MAP_CONFIG.style,

            center: MAP_CONFIG.center,
            zoom: MAP_CONFIG.zoom,
        })

        map.current.on("load", () => {
            console.info('[map] loaded')
            setMapLoaded(true)
            // If a place was selected before the map loaded, fly to it now
            try {
                const place = useAppStore.getState().selectedPlace as any
                if (place) {
                    const lat = place.geometry?.location?.lat()
                    const lng = place.geometry?.location?.lng()
                    if (lat && lng) {
                        map.current!.flyTo({ center: [lng, lat], zoom: 14 })
                        setTimeout(emitVisible, 250)
                    }
                }
            } catch (e) {
                console.warn('[map] failed to flyTo selectedPlace on load', e)
            }
        })
        // SearchBox is initialized by the `GooglePlacesSearch` component; don't create it here to avoid double-loading

        return () => map.current?.remove()
    }, [])

    // React to selectedPlace from the store (Google Places selection)
    useEffect(() => {
        let prev: any = null
        const unsub = useAppStore.subscribe((s) => {
            const place = s.selectedPlace
            if (!place || place === prev || !map.current) {
                prev = place
                return
            }
            // store current zoom
            try { useAppStore.setState({ mapZoom: map.current!.getZoom() }) } catch (_) { }
            prev = place
            try {
                const p: any = place
                const lat = p.geometry?.location?.lat()
                const lng = p.geometry?.location?.lng()
                if (!lat || !lng) return
                map.current!.flyTo({ center: [lng, lat], zoom: 14 })
                setTimeout(emitVisible, 250)
            } catch (e) {
                console.warn('[map] failed to flyTo selectedPlace', e)
            }
        })
        return () => unsub()
    }, [])

    // React to selectedProperty changes (card click or map click)
    useEffect(() => {
        let prevId: string | null = null
        const unsub = useAppStore.subscribe((s) => {
            const id = s.selectedProperty
            if (!id || id === prevId || !map.current) {
                prevId = id
                return
            }
            prevId = id
            try {
                const property = findPropertyById(useAppStore.getState(), id)
                if (!property) return
                const coords: [number, number] = [property.coordinates.lng, property.coordinates.lat]
                map.current!.flyTo({ center: coords, zoom: 14 })
                const zSel = map.current!.getZoom()
                showPropertyPopup(map.current!, property, coords, zSel)
                setTimeout(emitVisible, 200)
            } catch (e) {
                console.warn('[map] failed handling selectedProperty', e)
            }
        })
        return () => unsub()
    }, [])

    // SearchBox and selectedPlace handling is managed by the GooglePlacesSearch component; this map listens via the store

    // SearchBox validation is handled in places-search.tsx

    // --- Map layers and sources ---
    useEffect(() => {
        if (!mapLoaded || !map.current) return
        const mapInstance = map.current

        loadCustomIcon(mapInstance)
        setupMapSource(mapInstance)
        setupMapLayers(mapInstance)
        setupMapInteractions(mapInstance)

        return () => cleanupMapLayers(mapInstance)
    }, [mapLoaded])

    const loadCustomIcon = async (mapInstance: mapboxgl.Map) => {
        try {
            const img = await loadSvgIcon('/icons/home.svg')
            mapInstance.addImage('home', img)
            addHomeIconLayer(mapInstance)
        } catch (e) { console.warn('Failed to load icon', e) }
    }

    const loadSvgIcon = (url: string): Promise<HTMLImageElement> => new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = () => resolve(img)
        img.onerror = reject
    })

    const setupMapSource = (mapInstance: mapboxgl.Map) => {
        try {
            let hasPropsSource = false
            try { hasPropsSource = !!(mapInstance && typeof mapInstance.getSource === 'function' && mapInstance.getSource("properties")) } catch (_) { hasPropsSource = false }
            if (!hasPropsSource) {
                const data = selectDisplayGeoJSON(useAppStore.getState())
                console.info('[map] adding source properties, features=', (data as any)?.features?.length)
                try {
                    mapInstance.addSource("properties", {
                        type: "geojson",
                        data: data as any,
                        cluster: true,
                        clusterMaxZoom: MAP_CONFIG.clusterMaxZoom,
                        clusterRadius: MAP_CONFIG.clusterRadius,
                    })
                } catch (e) { console.warn('[map] addSource(properties) failed', e) }
            }

            let hasZones = false
            try { hasZones = !!(mapInstance && typeof mapInstance.getSource === 'function' && mapInstance.getSource("industrial-zones")) } catch (_) { hasZones = false }
            if (!hasZones) {
                try { mapInstance.addSource("industrial-zones", { type: "geojson", data: INDUSTRIAL_ZONES }) } catch (e) { console.warn('[map] addSource(industrial-zones) failed', e) }
            }
        } catch (e) {
            console.warn('[map] setupMapSource failed', e)
        }
    }

    const setupMapLayers = (mapInstance: mapboxgl.Map) => {
        addIndustrialZonesLayer(mapInstance)
        addClusterLayer(mapInstance)
        addClusterCountLayer(mapInstance)
        addUnclusteredPointLayer(mapInstance)
        addPriceLabelLayer(mapInstance)
    }

    const cleanupMapLayers = (mapInstance: mapboxgl.Map) => {
        try {
            if (!mapInstance || typeof mapInstance.getLayer !== 'function') return
            const layers = ["industrial-zones-labels", "industrial-zones-outline", "industrial-zones-fill", "clusters", "cluster-count", "unclustered-point-base", "unclustered-point", "unclustered-label"]
            layers.forEach(l => {
                try {
                    if (mapInstance.getLayer(l)) mapInstance.removeLayer(l)
                } catch (e) { /* ignore individual layer removal errors */ }
            })
            try { if (mapInstance.getSource("properties")) mapInstance.removeSource("properties") } catch (e) { /**/ }
            try { if (mapInstance.getSource("industrial-zones")) mapInstance.removeSource("industrial-zones") } catch (e) { /**/ }
        } catch (e) {
            console.warn('[map] cleanupMapLayers failed', e)
        }
    }

    const addHomeIconLayer = (mapInstance: mapboxgl.Map) => {
        if (!hasLayer(mapInstance, "unclustered-point")) {
            mapInstance.addLayer({
                id: "unclustered-point",
                type: "symbol",
                source: "properties",
                filter: ["!", ["has", "point_count"]],
                layout: {
                    "icon-image": "home",
                    "icon-size": 1,
                    "icon-allow-overlap": true,
                    "icon-ignore-placement": true
                }
            })
        }
    }

    const addIndustrialZonesLayer = (mapInstance: mapboxgl.Map) => {
        if (!hasLayer(mapInstance, "industrial-zones-fill")) {
            mapInstance.addLayer({
                id: "industrial-zones-fill",
                type: "fill",
                source: "industrial-zones",
                paint: { "fill-color": ["get", "color"], "fill-opacity": 0.15 }
            })
            mapInstance.addLayer({
                id: "industrial-zones-outline",
                type: "line",
                source: "industrial-zones",
                paint: { "line-color": ["get", "color"], "line-width": 2, "line-opacity": 0.6 }
            })
            mapInstance.addLayer({
                id: "industrial-zones-labels",
                type: "symbol",
                source: "industrial-zones",
                layout: { "text-field": ["get", "name"], "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"], "text-size": 12 },
                paint: { "text-color": "#1f2937", "text-halo-color": "#ffffff", "text-halo-width": 2 }
            })
        }
    }

    const addClusterLayer = (mapInstance: mapboxgl.Map) => {
        if (!hasLayer(mapInstance, "clusters")) {
            mapInstance.addLayer({
                id: "clusters",
                type: "circle",
                source: "properties",
                filter: ["has", "point_count"],
                paint: {
                    "circle-color": ["step", ["get", "point_count"], CLUSTER_COLORS.small, 10, CLUSTER_COLORS.medium, 30, CLUSTER_COLORS.large],
                    "circle-radius": ["step", ["get", "point_count"], 25, 10, 32, 30, 40],
                    "circle-opacity": 0.85,
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#ffffff",
                },
            })
        }
    }

    const addClusterCountLayer = (mapInstance: mapboxgl.Map) => {
        if (!hasLayer(mapInstance, "cluster-count")) {
            mapInstance.addLayer({
                id: "cluster-count",
                type: "symbol",
                source: "properties",
                filter: ["has", "point_count"],
                layout: { "text-field": ["get", "point_count"], "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"], "text-size": 13 },
                paint: { "text-color": "#ffffff", "text-halo-color": "rgba(0,0,0,0.3)", "text-halo-width": 1 }
            })
        }
    }

    const addUnclusteredPointLayer = (mapInstance: mapboxgl.Map) => {
        if (!hasLayer(mapInstance, "unclustered-point-base")) {
            mapInstance.addLayer({
                id: "unclustered-point-base",
                type: "circle",
                source: "properties",
                filter: ["!", ["has", "point_count"]],
                paint: {
                    "circle-radius": ["case", ["boolean", ["feature-state", "hover"], false], 16, ["boolean", ["feature-state", "selected"], false], 16, 12],
                    "circle-color": ["match", ["get", "status"], "For Sale", STATUS_COLORS["For Sale"], "For Rent", STATUS_COLORS["For Rent"], "Sold", STATUS_COLORS["Sold"], STATUS_COLORS.default],
                    "circle-opacity": 0.9,
                    "circle-stroke-color": "#ffffff",
                    "circle-stroke-width": 2,
                }
            })
        }
    }

    const addPriceLabelLayer = (mapInstance: mapboxgl.Map) => {
        if (!hasLayer(mapInstance, "unclustered-label")) {
            mapInstance.addLayer({
                id: "unclustered-label",
                type: "symbol",
                source: "properties",
                filter: ["!", ["has", "point_count"]],
                layout: {
                    "text-field": [
                        "case",
                        ["<", ["get", "price"], 1000], // si el precio es menor que 1000
                        ["concat", "$", ["to-string", ["get", "price"]]], // mostrar el valor completo
                        // si es 1000 o más
                        ["concat",
                            "$",
                            [
                                "to-string",
                                [
                                    "/",
                                    ["round", ["*", ["/", ["get", "price"], 1000], 10]],
                                    10
                                ]
                            ],
                            "K"
                        ]
                    ],
                    "text-size": 11,
                    "text-offset": [0, -2],
                    "text-allow-overlap": false,
                    "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                },
                paint: {
                    "text-color": "#1f2937",
                    "text-halo-color": "#ffffff",
                    "text-halo-width": 2,
                    "text-halo-blur": 1
                }
            });
        }
    };



    // --- Map interactions ---
    const setupMapInteractions = (mapInstance: mapboxgl.Map) => {
        setupClusterClick(mapInstance)
        setupPointClick(mapInstance)
        setupHoverEffects(mapInstance)
        mapInstance.on("moveend", emitVisible)
        setTimeout(() => {
            console.info('[map] initial emitVisible')
            emitVisible()
        }, 200)
    }

    // Safe wrapper for queryRenderedFeatures that ignores missing layers
    const safeQueryRenderedFeatures = (mapInstance: mapboxgl.Map, arg1?: any, arg2?: any) => {
        try {
            let point: any = undefined
            let options: any = undefined
            if (arg1 && arg1.layers && !arg2) {
                options = { ...arg1 }
            } else {
                point = arg1
                options = { ...(arg2 || {}) }
            }

            if (options && options.layers) {
                options.layers = options.layers.filter((l: string) => hasLayer(mapInstance, l))
                if (!options.layers.length) return []
            }

            if (point !== undefined) return mapInstance.queryRenderedFeatures(point, options)
            return mapInstance.queryRenderedFeatures(options)
        } catch (e) {
            console.warn('[map] safeQueryRenderedFeatures failed', e)
            return []
        }
    }

    const hasLayer = (mapInstance: mapboxgl.Map | null | undefined, id: string) => {
        try {
            if (!mapInstance) return false
            if (typeof mapInstance.getLayer !== 'function') return false
            return !!mapInstance.getLayer(id)
        } catch (e) {
            return false
        }
    }

    const setupClusterClick = (mapInstance: mapboxgl.Map) => {
        if (hasLayer(mapInstance, "clusters")) {
            mapInstance.on("click", "clusters", (e) => {
                const features = safeQueryRenderedFeatures(mapInstance, e.point, { layers: ["clusters"] })
                if (!features.length) return
                const clusterId = features[0].properties!.cluster_id
                const source = mapInstance.getSource("properties") as any
                source.getClusterExpansionZoom(clusterId, (err: any, zoom: number) => {
                    if (err) return
                    mapInstance.easeTo({ center: (features[0].geometry as any).coordinates, zoom })
                })
            })
        }
    }

    const setupPointClick = (mapInstance: mapboxgl.Map) => {
        const handleClick = (e: any) => {
            const features = safeQueryRenderedFeatures(mapInstance, e.point, { layers: ["unclustered-point-base", "unclustered-point"] })
            if (!features.length) return
            const feat = features[0]

            // Try to obtain an id from feature.id or properties
            let id: string | undefined = feat.id !== undefined ? String(feat.id) : undefined
            if (!id && feat.properties) {
                // sometimes id is stored in properties under different keys
                id = (feat.properties.id || feat.properties.ID || feat.properties.propertyId || feat.properties._id) as string | undefined
            }

            // Fallback: try to match by coordinates
            let property: any | undefined
            if (id) {
                setSelectedProperty(id as string)
                property = findPropertyById(useAppStore.getState(), id)
            }

            if (!property) {
                const coordsFromFeature = (feat.geometry as any)?.coordinates
                if (coordsFromFeature && Array.isArray(coordsFromFeature)) {
                    // find property by matching coordinates (loose match)
                    const [lng, lat] = coordsFromFeature
                    property = useAppStore.getState().properties.find((p: any) => {
                        return Math.abs(p.coordinates.lat - lat) < 1e-6 && Math.abs(p.coordinates.lng - lng) < 1e-6
                    })
                    if (property) {
                        id = property.id
                        setSelectedProperty(id as string)
                    }
                }
            }

            if (!property) return

            const coords = e.lngLat ? [e.lngLat.lng, e.lngLat.lat] : (feat.geometry as any).coordinates.slice()

            // remove previous popup if any, then show the new one
            try { popupRef.current?.remove() } catch (_) { /** ignore */ }
            console.info('[map] point click -> id=', id, 'property=', property?.title)
            const zClick = mapInstance.getZoom ? mapInstance.getZoom() : undefined
            showPropertyPopup(mapInstance, property, coords, zClick)
            setTimeout(emitVisible, 50)
        }
        if (hasLayer(mapInstance, "unclustered-point-base")) mapInstance.on("click", "unclustered-point-base", handleClick)
        if (hasLayer(mapInstance, "unclustered-point")) mapInstance.on("click", "unclustered-point", handleClick)
    }

    const showPropertyPopup = (mapInstance: mapboxgl.Map, property: any, coords: [number, number], zoom?: number) => {
        /**
         * Render a React popup into a Mapbox Popup container.
         * If `zoom` is not provided, the popup reads `mapZoom` from the store.
         */
        const popupNode = document.createElement("div")
        const finalZoom = typeof zoom === 'number' ? zoom : useAppStore.getState().mapZoom
        createRoot(popupNode).render(<PropertyPopup property={property} zoom={finalZoom} />)
        if (!popupRef.current) popupRef.current = new mapboxgl.Popup({ offset: 25 })
        popupRef.current.setLngLat(coords).setDOMContent(popupNode).addTo(mapInstance)
    }

    const setupHoverEffects = (mapInstance: mapboxgl.Map) => {
        const handleHover = (e: any) => {
            const features = safeQueryRenderedFeatures(mapInstance, e.point, { layers: ["unclustered-point-base", "unclustered-point"] })
            if (!features.length) return
            const id = String(features[0].id)
            setHoveredProperty(id)
            try { const c = mapInstance.getCanvas(); if (c && c.style) c.style.cursor = 'pointer' } catch (_) { }
        }

        const handleLeave = () => {
            setHoveredProperty(null)
            try { const c = mapInstance.getCanvas(); if (c && c.style) c.style.cursor = '' } catch (_) { }
        }

        if (hasLayer(mapInstance, "unclustered-point-base")) {
            mapInstance.on("mousemove", "unclustered-point-base", handleHover)
            mapInstance.on("mouseleave", "unclustered-point-base", handleLeave)
        }
        if (hasLayer(mapInstance, "unclustered-point")) {
            mapInstance.on("mousemove", "unclustered-point", handleHover)
            mapInstance.on("mouseleave", "unclustered-point", handleLeave)
        }

        if (hasLayer(mapInstance, "clusters")) {
            mapInstance.on("mouseenter", "clusters", () => { try { const c = mapInstance.getCanvas(); if (c && c.style) c.style.cursor = 'pointer' } catch (_) { } })
            mapInstance.on("mouseleave", "clusters", () => { try { const c = mapInstance.getCanvas(); if (c && c.style) c.style.cursor = '' } catch (_) { } })
        }
    }

    // --- Emit visible properties ---
    /**
     * Debounced, rate-limited emitVisible
     * Computes a list of visible property ids (unclustered + a limited set of cluster leaves)
     * and writes them to the store. The implementation intentionally caps work per run
     * to avoid UI slowdowns on large datasets.
     */
    const emitVisibleTimer = useRef<number | null>(null)
    const EMIT_DEBOUNCE_MS = 200
    const MAX_CLUSTER_EXPAND = 8 // max number of clusters to expand per run
    const MAX_LEAVES_PER_CLUSTER = 50 // cap leaves fetched per cluster

    const emitVisible = () => {
        if (!map.current) return
        // debounce frequently occurring calls (flyTo triggers moveend + manual calls)
        if (emitVisibleTimer.current) window.clearTimeout(emitVisibleTimer.current)
        emitVisibleTimer.current = window.setTimeout(() => {
            try {
                if (!map.current) return
                const mapInstance = map.current
                const unclustered = safeQueryRenderedFeatures(mapInstance, { layers: ["unclustered-point-base"] }) || []
                const clusterFeatures = safeQueryRenderedFeatures(mapInstance, { layers: ["clusters"] }) || []

                const ids: string[] = unclustered.map(f => String(f.id))

                let src: any = null
                try { if (mapInstance && typeof mapInstance.getSource === 'function') src = mapInstance.getSource("properties") as any } catch (_) { src = null }

                // If the source is not yet available, just emit the unclustered ids
                if (!src) {
                    const uniq = Array.from(new Set(ids))
                    console.info('[map] emitVisible ids=', uniq.length, uniq.slice(0, 20), '(no source)')
                    setVisiblePropertyIds(uniq)
                    return
                }

                // Limit the number of clusters we expand to avoid long-running work
                const clustersToExpand = clusterFeatures.slice(0, MAX_CLUSTER_EXPAND)

                const clusterPromises = clustersToExpand.map(cf => {
                    const clusterId = cf.properties?.cluster_id
                    if (!clusterId) return Promise.resolve([] as string[])
                    return new Promise<string[]>(resolve => {
                        // cap leaves fetched per cluster to avoid fetching thousands
                        src.getClusterLeaves(clusterId, MAX_LEAVES_PER_CLUSTER, 0, (err: any, leaves: any[]) => {
                            if (err || !leaves) return resolve([])
                            resolve(leaves.map(l => String(l.id)).filter(Boolean))
                        })
                    })
                })

                Promise.all(clusterPromises).then(results => {
                    results.forEach(arr => ids.push(...arr))
                    const uniq = Array.from(new Set(ids))
                    console.info('[map] emitVisible ids=', uniq.length, uniq.slice(0, 20))
                    setVisiblePropertyIds(uniq)
                }).catch(e => console.warn('[map] emitVisible cluster expansion failed', e))
            } catch (e) {
                console.warn('[map] emitVisible failed', e)
            }
        }, EMIT_DEBOUNCE_MS)
    }

    // --- Hover and selected states ---
    useEffect(() => {
        if (!mapLoaded || !map.current) return
        const mapInstance = map.current

        if (prevHoverRef.current && prevHoverRef.current !== hoveredPropertyId) {
            mapInstance.setFeatureState({ source: "properties", id: prevHoverRef.current }, { hover: false })
        }
        if (hoveredPropertyId) {
            mapInstance.setFeatureState({ source: "properties", id: hoveredPropertyId }, { hover: true })
            prevHoverRef.current = hoveredPropertyId
        } else prevHoverRef.current = null

        if (prevSelectedRef.current && prevSelectedRef.current !== selectedPropertyId) {
            mapInstance.setFeatureState({ source: "properties", id: prevSelectedRef.current }, { selected: false })
        }
        if (selectedPropertyId) {
            mapInstance.setFeatureState({ source: "properties", id: selectedPropertyId }, { selected: true })
            prevSelectedRef.current = selectedPropertyId
        }
    }, [hoveredPropertyId, selectedPropertyId, mapLoaded])

    // --- Update source data on filters ---
    useEffect(() => {
        if (!mapLoaded || !map.current) return
        const mapInstance = map.current
        const source = mapInstance.getSource("properties") as any
        if (!source) return
        source.setData(selectDisplayGeoJSON(useAppStore.getState()) as any)
        setTimeout(emitVisible, 50)
    }, [statusFilter, divisionFilter, typeFilter, filters, mapLoaded])

    // --- Fit to markers ---
    const fitToMarkers = () => {
        if (!map.current) return
        const mapInstance = map.current
        const src = mapInstance.getSource("properties") as any
        const data = src?._data
        if (!data?.features?.length) return
        const bounds = new mapboxgl.LngLatBounds()
        data.features.forEach((f: any) => f.geometry?.coordinates && bounds.extend(f.geometry.coordinates))
        mapInstance.fitBounds(bounds, { padding: 60, maxZoom: 12 })
    }

    return (
        <div className="flex-1 relative ">
            <div ref={mapContainer} id="map-container" className="w-full h-full" />

            <div className="absolute z-30 top-6 right-6 bg-white/95 dark:bg-black/90 rounded-lg shadow-lg p-3">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={showIndustrialZones}
                        onChange={(e) => setShowIndustrialZones(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Zonas Industriales</span>
                </label>
            </div>

            <button
                aria-label="Fit to markers"
                onClick={fitToMarkers}
                className="absolute z-30 right-6 bottom-6 bg-white/90 dark:bg-black/80 text-sm px-3 py-2 rounded shadow-md hover:bg-white dark:hover:bg-black transition-colors"
            >
                Restablecer
            </button>
        </div>
    )
}
