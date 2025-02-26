import React, { useState } from 'react'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { Button } from '@components/ui'

interface Option {
  value: string
  text: string
}

interface SelectField {
  label: string
  options: Option[]
}

interface FilterPopoverProps {
  selectFields: SelectField[]
}

const FieldFilter: React.FC<FilterPopoverProps> = ({ selectFields }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev)
  }

  const applyFilters = () => {
    setIsFilterOpen(false)
    // Agrega aquí tu lógica de filtrado
  }

  return (
    <div className="relative">
      <button
        onClick={toggleFilter}
        className="h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filtros
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isFilterOpen && (
        <div className="absolute right-0 top-12 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-10">
          <div className="space-y-4">
            {selectFields.map((selectField, index) => (
              <div key={index}>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  {selectField.label}
                </label>
                <select className="w-full h-9 px-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-100">
                  {selectField.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={toggleFilter}>
                Cancelar
              </Button>
              <Button onClick={applyFilters}>Aplicar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FieldFilter
