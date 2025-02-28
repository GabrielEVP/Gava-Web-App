import { useState } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import { Button } from '@components/ui/button'

export default function InvoicePage() {
  const [showDetails, setShowDetails] = useState(true)
  const [showPayments, setShowPayments] = useState(true)
  const [showDueDates, setShowDueDates] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center p-4 border-b bg-white">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="ml-2">Volver</span>
        </Button>
        <div className="ml-auto">
          <Button variant="outline">Acciones</Button>
        </div>
      </header>

      <div className="container mx-auto p-4 grid md:grid-cols-2 gap-6">
        {/* Left column - Invoice details */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h1 className="text-xl font-bold">EMPRESA S.A.</h1>
            <p>Calle Principal 123</p>
            <p>Ciudad, País</p>
            <p>Tel: +1 234 567 890</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-semibold">FACTURA</h2>
              <p className="text-gray-600">#INV-001</p>
              <p className="text-gray-600">Fecha: 2023-06-01</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-2">FACTURAR A:</h2>
            <p>Cliente Example Inc.</p>
            <p>Dirección del Cliente 456</p>
            <p>Ciudad Cliente, País</p>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-4 font-semibold border-b pb-2">
              <div className="col-span-1">DESCRIPCIÓN</div>
              <div className="text-right">CANT.</div>
              <div className="text-right">PRECIO</div>
              <div className="text-right">TOTAL</div>
            </div>
            <div className="grid grid-cols-4 py-2 border-b">
              <div className="col-span-1">Servicio de consultoría</div>
              <div className="text-right">10</div>
              <div className="text-right">$100.00</div>
              <div className="text-right">$1150.00</div>
            </div>
            <div className="grid grid-cols-4 py-2">
              <div className="col-span-2"></div>
              <div className="text-right font-semibold">Subtotal:</div>
              <div className="text-right">$1000.00</div>
            </div>
            <div className="grid grid-cols-4 py-2">
              <div className="col-span-2"></div>
              <div className="text-right font-semibold">IVA (15%):</div>
              <div className="text-right">$150.00</div>
            </div>
            <div className="grid grid-cols-4 py-2 border-t">
              <div className="col-span-2"></div>
              <div className="text-right font-semibold">Total:</div>
              <div className="text-right font-semibold">$1150.00</div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-semibold mb-2">INFORMACIÓN DE PAGO:</h2>
            <p>Banco: Banco Example</p>
            <p>IBAN: ES12 3456 7890 1234 5678 9012</p>
            <p className="mt-4">Gracias por su negocio</p>
          </div>
        </div>

        {/* Right column - Invoice summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Factura #INV-001</h2>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                Pendiente
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Fecha de emisión</p>
                <p>2023-06-01</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Monto total</p>
                <p className="font-semibold">$1150.00</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Líneas de factura</h2>
              <button onClick={() => setShowDetails(!showDetails)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {showDetails && (
              <div>
                <div className="grid grid-cols-4 font-semibold border-b pb-2 text-sm">
                  <div className="col-span-1">DESCRIPCIÓN</div>
                  <div className="text-right">CANTIDAD</div>
                  <div className="text-right">PRECIO UNITARIO</div>
                  <div className="text-right">TOTAL</div>
                </div>
                <div className="grid grid-cols-4 py-2 text-sm">
                  <div className="col-span-1">Servicio de consultoría</div>
                  <div className="text-right">10</div>
                  <div className="text-right">$100.00</div>
                  <div className="text-right">$1150.00</div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Pagos</h2>
              <button onClick={() => setShowPayments(!showPayments)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {showPayments && (
              <div>
                <div className="grid grid-cols-2 font-semibold border-b pb-2 text-sm">
                  <div>FECHA</div>
                  <div className="text-right">MONTO</div>
                </div>
                <div className="grid grid-cols-2 py-2 text-sm">
                  <div>2023-06-15</div>
                  <div className="text-right">$575.00</div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Fechas de vencimiento</h2>
              <button onClick={() => setShowDueDates(!showDueDates)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {showDueDates && (
              <div>
                <div className="grid grid-cols-2 font-semibold border-b pb-2 text-sm">
                  <div>FECHA</div>
                  <div className="text-right">MONTO</div>
                </div>
                <div className="grid grid-cols-2 py-2 text-sm">
                  <div>2023-07-01</div>
                  <div className="text-right">$575.00</div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Notas</h2>
            <p>Gracias por su negocio</p>
          </div>
        </div>
      </div>
    </div>
  )
}
