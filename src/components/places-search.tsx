
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useAppStore } from '@/store/useAppStore'
import { Search } from "lucide-react"
import { getGoogleMapsApiKey } from "@/lib/constants"

/**
 * GooglePlacesSearch
 * Wraps the Google Places SearchBox and writes the selected place into the
 * global store (`setSelectedPlace`). The component ensures the Google script
 * is only injected once and validates that selected locations are within Baja California.
 */

interface GooglePlacesSearchProps {
    placeholder?: string
    className?: string

}

export const GooglePlacesSearch = forwardRef<HTMLInputElement, GooglePlacesSearchProps>(
    ({ placeholder = "Buscar lugar en Baja California", className = "" }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null)
        const setSelectedPlace = useAppStore(s => s.setSelectedPlace)

        // Expose the input ref to parent
        useImperativeHandle(ref, () => inputRef.current!)

        useEffect(() => {
            // Load Google Places API if not loaded
            const loadGooglePlaces = () => {
                if ((window as any).google?.maps?.places) return

                // Avoid injecting the script multiple times
                const existing = document.querySelector('script[data-google-maps="true"]')
                if (existing) return

                const script = document.createElement("script")
                script.setAttribute('data-google-maps', 'true')
                const key = getGoogleMapsApiKey()
                script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
                script.async = true
                script.defer = true
                document.head.appendChild(script)
            }

            loadGooglePlaces()

            // Initialize SearchBox when Google is ready
            const initSearchBox = () => {
                if (!(window as any).google?.maps?.places || !inputRef.current) return

                const google = (window as any).google
                const searchBox = new google.maps.places.SearchBox(inputRef.current, {
                    bounds: new google.maps.LatLngBounds(
                        new google.maps.LatLng(23.5, -118.5), // SW Baja California
                        new google.maps.LatLng(33.0, -112.5)  // NE Baja California
                    ),
                    componentRestrictions: { country: 'mx' }
                })

                searchBox.addListener('places_changed', () => {
                    const places = searchBox.getPlaces()
                    if (!places || places.length === 0) return

                    const place = places[0]
                    if (!place.geometry || !place.geometry.location) return

                    // Validate location is in Baja California
                    const lat = place.geometry.location.lat()
                    const lng = place.geometry.location.lng()
                    const address = place.formatted_address || ''

                    const inBajaBounds = lng >= -118.5 && lng <= -112.5 && lat >= 23.5 && lat <= 33.0
                    const hasBajaInAddress = address.toLowerCase().includes('baja california') ||
                        address.toLowerCase().includes('b.c.') ||
                        address.toLowerCase().includes('bc')

                    if (!inBajaBounds || !hasBajaInAddress) {
                        alert('Por favor selecciona una ubicación dentro de Baja California')
                        if (inputRef.current) inputRef.current.value = ''
                        return
                    }

                    // Store the selected place in the global store
                    try {
                        const p: any = place
                        const lat = p.geometry?.location?.lat()
                        const lng = p.geometry?.location?.lng()
                        console.info('[places-search] selected place', { lat, lng, address: place.formatted_address })
                    } catch (e) {
                        console.info('[places-search] selected place (no geometry)', place)
                    }
                    setSelectedPlace(place)
                })
            }

            // Try to initialize, or wait for Google to load
            const googleInterval = setInterval(() => {
                if ((window as any).google?.maps?.places) {
                    initSearchBox()
                    clearInterval(googleInterval)
                }
            }, 300)

            return () => clearInterval(googleInterval)
        }, [setSelectedPlace])

        return (
            <div className={`relative ${className}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    className="w-full pl-4 pr-24 py-2 text-sm border border-border rounded-full bg-background/80 backdrop-blur-sm
                   focus:outline-none focus:ring-2 focus:ring-primary/50"   />
            </div>
        )
    }
)

GooglePlacesSearch.displayName = "GooglePlacesSearch"