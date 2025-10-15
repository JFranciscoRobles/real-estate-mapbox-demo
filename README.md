# Real Estate Mapbox Demo

This is a small React + TypeScript demo that shows real-estate listings on a Mapbox map with a synchronized list view. The project demonstrates state centralization using Zustand, Mapbox GL JS integration, and an integrated Google Places search.

Main features
- Mapbox map with clustered properties and custom popups
- Synchronized list of properties with pagination and filters
- Global state managed with Zustand (`src/store/useAppStore.ts`)
- Google Places search to jump to locations within Baja California

Quick start
1. Install dependencies:

```bash
npm install
```

# Real Estate Mapbox

Simple demo app that shows real-estate listings on a Mapbox map and a synchronized list. Built with React + TypeScript (Vite) and Zustand for centralized state.

Features
- Mapbox GL JS map with clustering and custom popups
- Synchronized list with pagination and filters
- Google Places search (Places SearchBox) to fly the map to user-selected locations
- Centralized app state via Zustand (`src/store/useAppStore.ts`)
- First-run modal to provide API keys when env vars are not set

Quick start
1. Install dependencies

```bash
npm install
```

2. Copy env example and start dev server

```bash
cp .env.example .env
# edit .env and add your keys
npm run dev
```

3. Open the Vite URL printed in the terminal (usually http://localhost:5173)

Environment variables
- Create a `.env` file (or set platform env vars) with these keys:

```
VITE_MAPBOX_ACCESS_TOKEN=pk.your_mapbox_token
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Notes about keys and the runtime modal
- If either env var is missing, the app shows a modal at first load asking for both keys.
- The modal performs lightweight validation and, on success, stores the keys in `localStorage` (so the app can initialize immediately without changing your build).
- For production you should set the keys as environment variables in your hosting platform (do not rely on localStorage in production).

Important files
- `src/store/useAppStore.ts` — Zustand store and selectors
- `src/components/properties-map.tsx` — Mapbox integration and interactions
- `src/components/properties-list.tsx` — List view and pagination
- `src/components/property-popup.tsx` — Popup UI used inside Mapbox popups
- `src/components/places-search.tsx` — Google Places SearchBox wrapper
- `src/components/api-keys-modal.tsx` — Modal used for first-run API key collection

Development notes
- Keys used in client-side code must use the `VITE_` prefix to be available via `import.meta.env`.
- The project includes defensive guards around Mapbox calls to avoid errors during HMR or fast mount/unmount cycles.

Troubleshooting
- If you see Mapbox layer errors after hot-reload, try a full page refresh.
- If Places search does not work, ensure your Google API key has the Places library enabled and that the key is valid for client use.

Contributing
- Pull requests are welcome. If you plan to add features that require secret keys, prefer server-side proxying or use environment variables on your host.

License
- This repository is provided as-is for demo and learning purposes.
# real-estate-mapbox-demo
# real-estate-mapbox-demo
