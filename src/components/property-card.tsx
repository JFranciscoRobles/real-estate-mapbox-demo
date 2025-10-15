import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import type { Property } from "@/lib/data"
import { useAppStore } from "@/store/useAppStore"

interface PropertyCardProps {
    property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
    const localSelected = useAppStore((s) => s.localSelected)
    const setLocalSelected = useAppStore((s) => s.setLocalSelected)
    const setSelectedProperty = useAppStore((s) => s.setSelectedProperty)
    const selectedProperty = useAppStore((s) => s.selectedProperty)
    const hoveredProperty = useAppStore((s) => s.hoveredProperty)
    const setHoveredProperty = useAppStore((s) => s.setHoveredProperty)

    const isSelected = (selectedProperty ?? localSelected) === property.id
    const isHovered = hoveredProperty === property.id

    const onClick = () => {
        setLocalSelected(property.id)
        setSelectedProperty(property.id)
    }

    const onHover = () => setHoveredProperty(property.id)
    const onLeave = () => setHoveredProperty(null)

    return (
        <Card
            className={`cursor-pointer transition-all hover:border-primary/50 overflow-hidden 
            flex flex-col justify-between h-[360px]  /* 👈 altura fija uniforme */
            ${isSelected ? "border-primary ring-2 ring-primary/20" : ""} 
            ${isHovered ? "ring-2 ring-accent/40" : ""}`}
            onClick={onClick}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Imagen */}
            <div className="relative overflow-hidden h-40 flex-shrink-0">
                <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {property.status}
                </Badge>
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col justify-between flex-1">
                {/* Título y precio */}
                <div>
                    <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-lg line-clamp-2 leading-tight max-w-[70%]">
                            {property.title}
                        </h3>
                        <span className="text-xl font-bold text-primary whitespace-nowrap ml-2">
                            ${property.price.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="line-clamp-1">{property.location}</span>
                    </div>
                </div>

                {/* Características */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        <span>{property.sqft} metros cuadrados</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
