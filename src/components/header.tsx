
import { Building2 } from "lucide-react"

export function Header() {
    return (
        <header className="border-b border-border bg-primary">
            <div className="flex h-16 items-center gap-2 px-6">
                <Building2 className="h-6 w-6 text-primary-foreground" />
                <span className="text-xl text-primary-foreground font-semibold">Real Estate Mapbox Demo</span>
            </div>
        </header>
    )
}
