import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Maximize, MapPin, ExternalLink } from "lucide-react"
import type { Property } from "@/lib/data"

interface PropertyPopupProps {
    property: Property
    zoom?: number
}

/**
 * PropertyPopup
 * Rendered into a Mapbox Popup container. Displays basic property information
 * and sizes itself according to the provided `zoom` prop (or a default zoom).
 *
 * Props:
 * - property: Property object with display fields
 * - zoom?: optional numeric map zoom used to compute popup dimensions
 */
export function PropertyPopup({ property, zoom }: PropertyPopupProps) {
    const z = typeof zoom === "number" ? zoom : 12

    // Nuevo algoritmo de escala: más gradual
    // A zoom 8 → ancho ≈ 480px, zoom 12 → ≈ 380px, zoom 18 → ≈ 260px
    const width = Math.round(520 - Math.pow(z, 1.3) * 12)
    const clampedWidth = Math.max(240, Math.min(500, width))

    // Imagen ajustada proporcionalmente
    const imageHeight = Math.round(clampedWidth * 0.55)

    return (
        <div
            style={{ width: `${clampedWidth}px` }}
            className="rounded-lg shadow-lg bg-white transition-all duration-200"
        >
            <div
                style={{ height: `${imageHeight}px` }}
                className="relative overflow-hidden rounded-t-lg w-full"
            >
                <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                    {property.status}
                </Badge>
            </div>

            <div className="p-4 flex flex-col gap-3">
                <div>
                    <h3
                        className="font-semibold text-lg text-foreground break-words line-clamp-2 leading-tight"
                    >
                        {property.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        <span className="break-words">{property.location}</span>
                    </div>
                </div>

                <div className="text-2xl font-bold text-primary">
                    ${property.price.toLocaleString()} Dlls
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        <span>{property.sqft} m</span>
                    </div>
                </div>

                <a
                    href={`https://probien.com.mx/propiedades/${property.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        size="sm"
                        className="w-full bg-green-600 text-white hover:bg-green-700 mt-2 transition-colors"
                    >
                        Ver detalles
                        <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                </a>
            </div>
        </div>
    )
}
