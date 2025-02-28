'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@components/ui/sheet'

interface InvoiceLine {
  id: number
  description: string
  quantity: number
  unitPrice: number
  vatRate: number
  totalWithVat: number
}

export default function InvoiceLineDrawer() {
  const [open, setOpen] = useState(false)
  const [invoiceLines, setInvoiceLines] = useState<InvoiceLine[]>([
    {
      id: 1,
      description: '',
      quantity: 0,
      unitPrice: 0,
      vatRate: 0,
      totalWithVat: 0,
    },
  ])
  const [nextId, setNextId] = useState(2)

  const handleAddLine = () => {
    setInvoiceLines([
      ...invoiceLines,
      {
        id: nextId,
        description: '',
        quantity: 0,
        unitPrice: 0,
        vatRate: 0,
        totalWithVat: 0,
      },
    ])
    setNextId(nextId + 1)
  }

  const handleRemoveLine = (id: number) => {
    if (invoiceLines.length > 1) {
      setInvoiceLines(invoiceLines.filter((line) => line.id !== id))
    }
  }

  const handleInputChange = (
    id: number,
    field: keyof InvoiceLine,
    value: string
  ) => {
    setInvoiceLines(
      invoiceLines.map((line) => {
        if (line.id === id) {
          const updatedLine = {
            ...line,
            [field]:
              field === 'description' ? value : Number.parseFloat(value) || 0,
          }

          if (
            field === 'quantity' ||
            field === 'unitPrice' ||
            field === 'vatRate'
          ) {
            const subtotal = updatedLine.quantity * updatedLine.unitPrice
            updatedLine.totalWithVat =
              subtotal + (subtotal * updatedLine.vatRate) / 100
          }

          return updatedLine
        }
        return line
      })
    )
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => setOpen(true)}
      >
        Líneas de Factura
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="sm:max-w-md w-[90vw] overflow-y-auto">
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle>Líneas de Facturas</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {invoiceLines.map((line, index) => (
              <div
                key={line.id}
                className="space-y-4 pb-6 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-medium">Línea {index + 1}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 h-8 w-8"
                    onClick={() => handleRemoveLine(line.id)}
                    disabled={invoiceLines.length === 1}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`description-${line.id}`}>Descripción</Label>
                  <Input
                    id={`description-${line.id}`}
                    placeholder="Ingrese la descripción"
                    value={line.description}
                    onChange={(e) =>
                      handleInputChange(line.id, 'description', e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`quantity-${line.id}`}>Cantidad</Label>
                    <div className="relative">
                      <Input
                        id={`quantity-${line.id}`}
                        type="number"
                        min="0"
                        value={line.quantity}
                        onChange={(e) =>
                          handleInputChange(line.id, 'quantity', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`unitPrice-${line.id}`}>
                      Precio Unitario
                    </Label>
                    <div className="relative">
                      <Input
                        id={`unitPrice-${line.id}`}
                        type="number"
                        min="0"
                        value={line.unitPrice}
                        onChange={(e) =>
                          handleInputChange(
                            line.id,
                            'unitPrice',
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`vatRate-${line.id}`}>Tasa IVA (%)</Label>
                    <div className="relative">
                      <Input
                        id={`vatRate-${line.id}`}
                        type="number"
                        min="0"
                        value={line.vatRate}
                        onChange={(e) =>
                          handleInputChange(line.id, 'vatRate', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`totalWithVat-${line.id}`}>
                      Total con IVA
                    </Label>
                    <div className="relative">
                      <Input
                        id={`totalWithVat-${line.id}`}
                        type="number"
                        readOnly
                        value={line.totalWithVat.toFixed(2)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button
              className="w-full flex items-center justify-center gap-2"
              onClick={handleAddLine}
            >
              <Plus className="h-5 w-5" /> Agregar Nueva Línea
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
