import { selectTotalPages, useAppStore } from '@/store/useAppStore'
import { Button } from './ui/button'

function PropertiesListPagination() {
    const currentPage = useAppStore((s) => s.currentPage)
    const setCurrentPage = useAppStore((s) => s.setCurrentPage)
    const totalPages = useAppStore(selectTotalPages)

    return (
        <div className="p-4 border-t border-border flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
                Página {currentPage} / {totalPages}
            </div>
            <div className="flex items-center gap-2">
                <Button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    Atrás
                </Button>
                <Button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </Button>
            </div>
        </div>
    )
}

export default PropertiesListPagination
