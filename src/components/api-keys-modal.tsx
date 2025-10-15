import { useState } from 'react'
import { getMapboxAccessToken, getGoogleMapsApiKey } from '@/lib/constants'

interface Props { onClose(success?: boolean): void }

export default function ApiKeysModal({ onClose }: Props) {
    const [mapboxKey, setMapboxKey] = useState(() => getMapboxAccessToken())
    const [googleKey, setGoogleKey] = useState(() => getGoogleMapsApiKey())
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const validateMapbox = async (key: string) => {
        if (!key) return false
        try {
            const res = await fetch(`https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=${key}`, { method: 'GET' })
            return res.ok
        } catch (_) { return false }
    }

    const validateGoogle = async (key: string) => {
        if (!key) return false
        // Try to load the script and listen for google.maps
        return new Promise<boolean>((resolve) => {
            const existing = document.querySelector('script[data-google-maps="true"]') as HTMLScriptElement | null
            if (existing && (window as any).google?.maps?.places) return resolve(true)
            const script = document.createElement('script')
            script.setAttribute('data-google-maps', 'true')
            script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
            script.async = true
            script.defer = true
            script.onload = () => {
                resolve(!!(window as any).google?.maps?.places)
            }
            script.onerror = () => resolve(false)
            document.head.appendChild(script)
        })
    }

    const saveKeys = async () => {
        setLoading(true)
        setError(null)
        try {
            const okMap = await validateMapbox(mapboxKey)
            if (!okMap) { setError('Invalid Mapbox token'); setLoading(false); return }
            const okGoogle = await validateGoogle(googleKey)
            if (!okGoogle) { setError('Invalid Google Maps key or Places not available'); setLoading(false); return }

            // Persist to localStorage so runtime getters pick them up
            try { window.localStorage.setItem('VITE_MAPBOX_ACCESS_TOKEN', mapboxKey) } catch (_) { }
            try { window.localStorage.setItem('VITE_GOOGLE_MAPS_API_KEY', googleKey) } catch (_) { }

            onClose(true)
        } catch (e: any) {
            setError(e?.message || 'Validation failed')
        } finally { setLoading(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-2">Enter API keys</h3>
                <p className="text-sm text-muted-foreground mb-4">Provide Mapbox and Google Maps (Places) API keys to continue.</p>
                <label className="block text-sm mb-2">Mapbox Access Token</label>
                <input className="w-full mb-3 p-2 border rounded" value={mapboxKey} onChange={(e) => setMapboxKey(e.target.value)} />
                <label className="block text-sm mb-2">Google Maps API Key (Places)</label>
                <input className="w-full mb-3 p-2 border rounded" value={googleKey} onChange={(e) => setGoogleKey(e.target.value)} />
                {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
                <div className="flex gap-2 justify-end">
                    <button className="px-3 py-1" onClick={() => onClose(false)} disabled={loading}>Cancel</button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={saveKeys} disabled={loading}>{loading ? 'Validating...' : 'Save'}</button>
                </div>
            </div>
        </div>
    )
}
