import { PropertyCard } from "@/components/property-card"
import { useAppStore, selectPageItems, selectFilteredByAttrs } from "@/store/useAppStore"
import PropertiesListPagination from "./properties-list-pagination"

/**
 * PropertiesList
 * Renders the list of properties. When `mapSearchEnabled` is true the list is
 * paginated and shows only visible properties; when false it shows the full
 * filtered list in a 4-column grid.
 */
export function PropertiesList() {
    const mapSearchEnabled = useAppStore((s) => s.mapSearchEnabled)
    const state = useAppStore()

    // If mapSearchEnabled is false we show the full filtered list in a 4-col grid
    const properties = mapSearchEnabled
        ? selectPageItems(state, state.currentPage)
        : selectFilteredByAttrs(state)

    const gridCols = mapSearchEnabled ? 'grid-cols-2' : 'grid-cols-4'

    return (
        <aside className="w-full border-r border-border bg-card overflow-hidden flex flex-col max-h-[100vh]">

            <div className="flex-1 overflow-y-auto">
                <div className={`p-4 grid ${gridCols} gap-3`}>
                    {properties.map((property) => (
                        <div key={property.id}>
                            <PropertyCard property={property} />
                        </div>
                    ))}
                </div>
            </div>

            {mapSearchEnabled && <PropertiesListPagination />}
        </aside>
    )
}
