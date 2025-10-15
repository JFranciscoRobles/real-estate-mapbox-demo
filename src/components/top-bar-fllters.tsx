
import { GooglePlacesSearch } from "./places-search";
import PropertiesFilters from "./properties-filters";
import ToggleFilter from "./properties-toggle";



function InputSearch() {
    return (
        <div className="relative w-full max-w-md">
            <GooglePlacesSearch />
        </div>
    )
}


export function TopBar() {
    return (
        <aside
            className="sticky top-0 z-30 flex items-center justify-between w-full
                 px-6 py-3 bg-background/80 backdrop-blur-md border-b border-border"
        >
            {/* IZQUIERDA: título */}
            <div className="flex flex-col leading-tight">
                <h2 className="text-lg font-semibold text-foreground">Propiedades en Baja California</h2>

            </div>

            {/* CENTRO: buscador */}
            <div className="flex-1 flex justify-center">
                <InputSearch />
            </div>

            {/* DERECHA: filtros y toggle */}
            <div className="flex items-center gap-3">
                <PropertiesFilters />

                <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground font-medium">Mapa</span>
                    <ToggleFilter id="cambiar mapa" />
                </div>
            </div>
        </aside>
    )
}
