import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TableProps {
  headers: string[]
  currentPage: number
  totalPages: number
  startIndex: number
  endIndex: number
  totalItems: number
  children: React.ReactNode
}

const Table = ({
  headers,
  currentPage,
  startIndex,
  endIndex,
  totalItems,
  children,
}: TableProps) => {
  return (
    <div className="rounded-lg pt-6 flex-1 flex flex-col min-h-0">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex-1 flex flex-col">
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead className="top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                {headers.map((header) => {
                  return (
                    <th
                      className="text-left px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300"
                      key={header}
                    >
                      {header}
                    </th>
                  )
                })}
                <th className="text-center px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Mostrando {startIndex + 1} a {endIndex} de {totalItems} resultados
          </div>
          <div className="flex gap-2">
            <button
              disabled={currentPage <= 1}
              className="px-3 h-8 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1.5"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>
            <button className="px-3 h-8 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1.5">
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
