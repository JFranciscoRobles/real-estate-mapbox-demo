import { create } from 'zustand'
import { createContext } from 'react'
import { properties, type Property } from '@/lib/data'
import { MAP_CONFIG } from '@/lib/constants'

/**
 * Application-wide Zustand store for the demo.
 *
 * State includes UI filters, the list of properties and a few map-related fields
 * that components read and write (selectedProperty, hoveredProperty, map zoom, etc).
 *
 * Selectors below are defined as pure helpers that accept the full store state.
 */


export interface Filters {
    minPrice: number
    maxPrice: number
    minBeds: number
    minBaths: number
    type: string | null
    searchQuery: string
}

export interface AppState {
    selectedProperty: string | null
    hoveredProperty: string | null
    statusFilter: string | null
    divisionFilter: string | null
    typeFilter: string | null
    mapSearchEnabled: boolean
    visiblePropertyIds: string[] | null
    filters: Filters
    selectedPlace: unknown
    localSelected: string | null
    currentPage: number
    pageSize: number
    properties: Property[]
    mapZoom: number

    // Actions
    setSelectedProperty(id: string | null): void
    setHoveredProperty(id: string | null): void
    setStatusFilter(s: string | null): void
    setDivisionFilter(s: string | null): void
    setTypeFilter(s: string | null): void
    setMapSearchEnabled(v: boolean): void
    setVisiblePropertyIds(ids: string[] | null): void
    setFilters(updater: Partial<Filters> | ((prev: Filters) => Filters)): void
    setSelectedPlace(p: unknown): void
    setLocalSelected(id: string | null): void
    setCurrentPage(p: number): void
    setMapZoom(z: number): void
}

/* ============================
   🧠 Helper de memoización
============================ */
function memoize<T extends (...args: any[]) => any>(fn: T): T {
    let lastArgs: any[] = []
    let lastResult: any
    return ((...args: any[]) => {
        if (
            args.length === lastArgs.length &&
            args.every((a, i) => a === lastArgs[i])
        ) {
            return lastResult
        }
        lastArgs = args
        lastResult = fn(...args)
        return lastResult
    }) as T
}

/**
 * Small reference-equality memoization used for selectors.
 * It caches the last call's args/result and returns the cached value
 * when the next call uses identical argument references. This is
 * intentionally lightweight for the demo.
 */

/* ============================
   🏗️ Store principal
============================ */
export const useAppStore = create<AppState>((set) => ({
    selectedProperty: null,
    hoveredProperty: null,
    statusFilter: null,
    divisionFilter: null,
    typeFilter: null,
    mapSearchEnabled: true,
    visiblePropertyIds: null,
    filters: {
        minPrice: 0,
        maxPrice: 10_000_000,
        minBeds: 0,
        minBaths: 0,
        type: null,
        searchQuery: '',
    },
    selectedPlace: null,
    localSelected: null,
    currentPage: 1,
    pageSize: 4,
    properties,
    mapZoom: MAP_CONFIG?.zoom ?? 12,

    // Actions
    setSelectedProperty: (id) => set({ selectedProperty: id }),
    setHoveredProperty: (id) => set({ hoveredProperty: id }),
    setStatusFilter: (s) => set({ statusFilter: s }),
    setDivisionFilter: (s) => set({ divisionFilter: s }),
    setTypeFilter: (s) => set({ typeFilter: s }),
    setMapSearchEnabled: (v) => set({ mapSearchEnabled: v }),
    setVisiblePropertyIds: (ids) => set({ visiblePropertyIds: ids }),
    setFilters: (updater) =>
        set((state) => ({
            filters:
                typeof updater === 'function'
                    ? updater(state.filters)
                    : { ...state.filters, ...updater },
        })),
    setSelectedPlace: (p) => set({ selectedPlace: p }),
    setLocalSelected: (id) => set({ localSelected: id }),
    setCurrentPage: (p) => set({ currentPage: p }),
    setMapZoom: (z) => set({ mapZoom: z }),
}))

export const AppContext = createContext<AppState | null>(null)

/* ============================
   🧩 Selectores derivados (fuera del store)
============================ */

export const selectFilteredProperties = memoize((s: AppState): Property[] => {
    return s.properties.filter((p) => {
        if (s.statusFilter && s.statusFilter !== 'any' && p.status !== s.statusFilter) return false
        if (s.divisionFilter && s.divisionFilter !== 'any' && p.division !== s.divisionFilter) return false
        if (s.typeFilter && s.typeFilter !== 'any' && p.type !== s.typeFilter) return false
        return true
    })
})

/**
 * selectFilteredByAttrs
 * Filters the base list by the numeric and text filters in state.filters.
 * Inputs: AppState
 * Output: Array<Property> (filtered)
 */

export const selectFilteredByAttrs = memoize((s: AppState): Property[] => {
    const filtered = selectFilteredProperties(s)
    const f = s.filters

    return filtered.filter((p) => {
        if (f.minPrice && p.price < f.minPrice) return false
        if (f.maxPrice && p.price > f.maxPrice) return false
        if (f.minBeds && p.beds < f.minBeds) return false
        if (f.minBaths && p.baths < f.minBaths) return false

        if (f.type && f.type !== '') {
            const t = f.type.toLowerCase()
            if (
                !p.title.toLowerCase().includes(t) &&
                !p.location.toLowerCase().includes(t)
            )
                return false
        }

        if (f.searchQuery.trim() !== '') {
            const q = f.searchQuery.trim().toLowerCase()
            if (
                !p.location.toLowerCase().includes(q) &&
                !p.title.toLowerCase().includes(q)
            )
                return false
        }

        return true
    })
})

export const selectDisplayProperties = memoize((s: AppState): Property[] => {
    const filtered = selectFilteredByAttrs(s)

    if (!s.mapSearchEnabled) return filtered

    if (!s.visiblePropertyIds || s.visiblePropertyIds.length === 0) return []

    const visibleSet = new Set(s.visiblePropertyIds)
    return filtered.filter((p) => visibleSet.has(p.id))
})

/**
 * selectTotalPages
 * Compute the total number of pages for the current pageSize and
 * the currently visible properties.
 */

export const selectTotalPages = (s: AppState): number => {
    const total = selectDisplayProperties(s).length
    return Math.max(1, Math.ceil(total / s.pageSize))
}

/**
 * selectPageItems
 * Return the slice of properties for the requested page.
 */

export const selectPageItems = memoize(
    (s: AppState, page: number = s.currentPage): Property[] => {
        const list = selectDisplayProperties(s)
        const start = (page - 1) * s.pageSize
        return list.slice(start, start + s.pageSize)
    }
)

export const selectDisplayGeoJSON = memoize((s: AppState) => {
    const list = selectFilteredByAttrs(s)
    console.info('[store] selectDisplayGeoJSON features=', list.length)
    return {
        type: 'FeatureCollection',
        features: list.map((p) => ({
            type: 'Feature',
            id: p.id,
            properties: {
                title: p.title,
                price: p.price,
                status: p.status,
                location: p.location,
            },
            geometry: {
                type: 'Point',
                coordinates: [p.coordinates.lng, p.coordinates.lat],
            },
        })),
    }
})

export const findPropertyById = (s: AppState, id: string): Property | undefined => {
    return (
        s.properties.find((p) => p.id === id) ||
        s.properties.find((p) => Number(p.id) === Number(id))
    )
}

/* ============================
   🔁 Suscripciones
============================ */
export function initStoreSubscriptions() {
    // Single subscription listener: reset page to 1 when list length changes
    // and ensure currentPage <= totalPages. This avoids using the two-arg
    // subscribe overload which caused TS signature errors in some setups.
    let prevLen: number | undefined
    let prevTotal: number | undefined
    useAppStore.subscribe((s) => {
        const nextLen = selectDisplayProperties(s).length
        if (prevLen !== undefined && nextLen !== prevLen) {
            const state = useAppStore.getState()
            if (state.currentPage !== 1) {
                useAppStore.setState({ currentPage: 1 })
            }
        }
        prevLen = nextLen

        const totalPages = selectTotalPages(s)
        if (prevTotal !== undefined && totalPages !== prevTotal) {
            const state = useAppStore.getState()
            if (state.currentPage > totalPages) {
                useAppStore.setState({ currentPage: totalPages })
            }
        }
        prevTotal = totalPages
    })
}
