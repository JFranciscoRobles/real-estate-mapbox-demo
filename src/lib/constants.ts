// Read secrets from Vite environment variables (VITE_ prefix required)
// These can be defined in a local `.env` file or in your deployment environment.
export function getMapboxAccessToken(): string {
    if (import.meta.env.VITE_MAPBOX_ACCESS_TOKEN) return import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string
    if (typeof window !== 'undefined') {
        const fromStorage = window.localStorage.getItem('VITE_MAPBOX_ACCESS_TOKEN')
        if (fromStorage) return fromStorage
    }
    return ''
}

export function getGoogleMapsApiKey(): string {
    if (import.meta.env.VITE_GOOGLE_MAPS_API_KEY) return import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string
    if (typeof window !== 'undefined') {
        const fromStorage = window.localStorage.getItem('VITE_GOOGLE_MAPS_API_KEY')
        if (fromStorage) return fromStorage
    }
    return ''
}

export const BAJA_CALIFORNIA_BOUNDS = {
    SW: { lat: 23.5, lng: -118.5 },
    NE: { lat: 33.0, lng: -112.5 }
}
export const MAP_CONFIG = { style: "mapbox://styles/mapbox/streets-v11", center: [-116.76817110705323, 32.354101254006196] as [number, number], zoom: 9, clusterMaxZoom: 14, clusterRadius: 50 }

export const CLUSTER_COLORS = {
    small: "#3b82f6",
    medium: "#8b5cf6",
    large: "#ec4899"
}
export const STATUS_COLORS = {
    "For Sale": "#10b981",
    "For Rent": "#3b82f6",
    "Sold": "#6b7280",
    default: "#ffffff"
}
export const INDUSTRIAL_ZONES = { type: "FeatureCollection" as const, features: [{ type: "Feature" as const, properties: { name: "Zona Otay", color: "#10B981" }, geometry: { type: "Polygon" as const, coordinates: [[[-116.9565, 32.5470], [-116.9360, 32.5475], [-116.9245, 32.5360], [-116.9285, 32.5210], [-116.9440, 32.5155], [-116.9630, 32.5240], [-116.9645, 32.5380], [-116.9565, 32.5470]]] } }, { type: "Feature" as const, properties: { name: "Zona Central (Zona Río / Zona Centro industrializada)", color: "#F59E0B" }, geometry: { type: "Polygon" as const, coordinates: [[[-117.0485, 32.5480], [-117.0260, 32.5480], [-117.0145, 32.5350], [-117.0180, 32.5235], [-117.0355, 32.5190], [-117.0500, 32.5275], [-117.0485, 32.5480]]] } }, { type: "Feature" as const, properties: { name: "Zona Florido (El Florido / Parques Industriales del sureste)", color: "#93C5FD" }, geometry: { type: "Polygon" as const, coordinates: [[[-116.8905, 32.4615], [-116.8675, 32.4605], [-116.8600, 32.4490], [-116.8700, 32.4395], [-116.8925, 32.4405], [-116.9010, 32.4525], [-116.8905, 32.4615]]] } }, { type: "Feature" as const, properties: { name: "Zona Rosarito (polígonos industriales al sur/Playas de Rosarito)", color: "#6D28D9" }, geometry: { type: "Polygon" as const, coordinates: [[[-117.0700, 32.3900], [-117.0470, 32.3925], [-117.0350, 32.3780], [-117.0435, 32.3665], [-117.0670, 32.3650], [-117.0805, 32.3755], [-117.0700, 32.3900]]] } }, { type: "Feature" as const, properties: { name: "Zona Pacífico (Parque Industrial Pacífico / La Joya / Sánchez Taboada)", color: "#ec4899" }, geometry: { type: "Polygon" as const, coordinates: [[[-116.9995, 32.4720], [-116.9765, 32.4725], [-116.9700, 32.4595], [-116.9850, 32.4510], [-117.0015, 32.4540], [-117.0090, 32.4635], [-116.9995, 32.4720]]] } }] }
