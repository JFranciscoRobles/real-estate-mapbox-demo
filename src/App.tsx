
import { useEffect } from 'react'
import { TopBar } from './components/top-bar-fllters'
import { PropertiesMap } from './components/properties-map'
import { PropertiesList } from './components/properties-list'
import { initStoreSubscriptions, useAppStore } from './store/useAppStore'
import { cn } from './lib/utils'
import ApiKeysModal from './components/api-keys-modal'
import { getMapboxAccessToken, getGoogleMapsApiKey } from './lib/constants'

/**
 * App
 * Top-level application layout. Initializes store subscriptions and
 * renders the TopBar, the map (conditionally) and the properties list.
 */
import './globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  useEffect(() => {
    initStoreSubscriptions()
  }, [])

  const mapSearchEnabled = useAppStore((s) => s.mapSearchEnabled)
  const needKeys = !(getMapboxAccessToken() && getGoogleMapsApiKey())

  const handleModalClose = (success?: boolean) => {
    if (success) {
      window.location.reload()
    }
  }

  // ===== RENDER =====
  if (needKeys) {
    return <ApiKeysModal onClose={handleModalClose} />
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      <TopBar />

      <div className="flex w-full flex-1">
        <div className={cn(mapSearchEnabled ? 'w-1/2 flex' : 'w-full flex')}>
          <PropertiesList />
        </div>

        {mapSearchEnabled && (
          <div className="w-1/2 flex">
            <PropertiesMap />
          </div>
        )}
      </div>
    </div>
  )
}

export default App