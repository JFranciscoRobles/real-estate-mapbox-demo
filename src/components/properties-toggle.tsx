import { useAppStore } from '@/store/useAppStore'

/**
 * ToggleFilter
 * Small controlled toggle that updates `mapSearchEnabled` in the global store.
 * Props: id - element id for accessibility.
 */
function ToggleFilter({ id }: { id: string }) {
    const mapSearchEnabled = useAppStore((s) => s.mapSearchEnabled)
    const setMapSearchEnabled = useAppStore((s) => s.setMapSearchEnabled)

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                id={id}
                type="checkbox"
                className="sr-only peer"
                checked={mapSearchEnabled}
                onChange={(e) => setMapSearchEnabled(e.target.checked)}
            />
            <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary transition-all
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                      after:bg-background after:h-5 after:w-5 after:rounded-full after:shadow-sm
                      after:transition-all peer-checked:after:translate-x-5"></div>
        </label>
    )
}

export default ToggleFilter