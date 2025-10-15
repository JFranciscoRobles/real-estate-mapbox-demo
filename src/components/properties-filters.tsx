import { Button } from '@/components/ui/button'
import { Home, Building } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'

/**
 * PropertiesFilters
 * Provides quick filters for property status and two selects for division and property type.
 * The component reads and writes filter values to the global store.
 */
export default function PropertiesFilters() {
    const statusFilter = useAppStore(s => s.statusFilter)
    const setStatusFilter = useAppStore(s => s.setStatusFilter)
    const divisionFilter = useAppStore(s => s.divisionFilter)
    const setDivisionFilter = useAppStore(s => s.setDivisionFilter)
    const typeFilter = useAppStore(s => s.typeFilter)
    const setTypeFilter = useAppStore(s => s.setTypeFilter)

    const toggleStatus = (value: string | null) => {
        setStatusFilter(statusFilter === value ? null : (value as string))
    }

    const selectBase =
        "flex-1 text-sm rounded-md border transition-all focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer px-3 py-2"

    return (
        <div className="flex items-center gap-3">
            {/* Botones */}
            <Button
                variant={statusFilter === "For Sale" ? "default" : "outline"}
                size="sm"
                className={`flex-1 transition-all ${statusFilter === "For Sale"
                    ? "bg-green-600 hover:bg-green-700 text-white border-green-600"
                    : "border-gray-300 text-gray-600 hover:text-green-700 hover:border-green-500"
                    }`}
                onClick={() => toggleStatus("For Sale")}
            >
                <Home className="h-4 w-4 mr-2" />
                En Venta
            </Button>

            <Button
                variant={statusFilter === "For Rent" ? "default" : "outline"}
                size="sm"
                className={`flex-1 transition-all ${statusFilter === "For Rent"
                    ? "bg-green-600 hover:bg-green-700 text-white border-green-600"
                    : "border-gray-300 text-gray-600 hover:text-green-700 hover:border-green-500"
                    }`}
                onClick={() => toggleStatus("For Rent")}
            >
                <Building className="h-4 w-4 mr-2" />
                En Renta
            </Button>

            {/* Selects */}
            <div className="flex items-center gap-2 flex-1">
                <select
                    value={divisionFilter ?? 'any'}
                    onChange={(e) =>
                        setDivisionFilter(e.target.value === 'any' ? null : e.target.value)
                    }
                    className={`${selectBase} ${divisionFilter && divisionFilter !== "any"
                        ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                        : "border-gray-300 text-gray-600 hover:text-green-700 hover:border-green-500"
                        }`}
                >
                    {divisiones.map((d) => (
                        <option key={d.slug} value={d.slug}>
                            {d.nombre}
                        </option>
                    ))}
                </select>

                <select
                    value={typeFilter ?? 'any'}
                    onChange={(e) =>
                        setTypeFilter(e.target.value === 'any' ? null : e.target.value)
                    }
                    className={`${selectBase} ${typeFilter && typeFilter !== "any"
                        ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                        : "border-gray-300 text-gray-600 hover:text-green-700 hover:border-green-500"
                        }`}
                >
                    {tipos.map((t) => (
                        <option key={t.slug} value={t.slug}>
                            {t.nombre}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export const divisiones = [
    { slug: "any", nombre: "Todas las Divisiones" },
    { slug: "residencial", nombre: "Residencial" },
    { slug: "comercial", nombre: "Comercial" },
    { slug: "industrial", nombre: "Industrial" },
    { slug: "vertice", nombre: "Vértice" },
]

export const tipos = [
    { nombre: "Todos los Tipos de Propiedad", slug: "any" },
    { nombre: "Dreamhomes", slug: "dreamhomes" },
    { nombre: "Casas", slug: "casas" },
    { nombre: "Departamentos", slug: "departamentos" },
    { nombre: "Terrenos Residenciales", slug: "terrenos-residenciales" },
    { nombre: "Terrenos Comerciales", slug: "terrenos-comerciales" },
    { nombre: "Oficinas", slug: "oficinas" },
    { nombre: "Consultorios", slug: "consultorios" },
    { nombre: "Edificios", slug: "edificios" },
    { nombre: "Naves y Bodegas", slug: "naves-y-bodegas" },
    { nombre: "Clínicas", slug: "clinicas" },
    { nombre: "Plazas Comerciales", slug: "plazas-comerciales" },
    { nombre: "Médica", slug: "medica" },
    { nombre: "Locales", slug: "locales" },
    { nombre: "Proyectos", slug: "proyectos" },
    { nombre: "Vida en el Mar", slug: "vida-en-el-mar" },
    { nombre: "Vida en el Campo", slug: "vida-en-el-campo" },
]
