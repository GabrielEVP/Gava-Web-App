import { useState } from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { z } from 'zod'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'

// Schema for price validation
const priceSchema = z.object({
  standard: z.number().min(0).optional(),
  premium: z.number().min(0).optional(),
  discount: z.number().min(0).optional(),
})

type PriceValues = z.infer<typeof priceSchema>

export default function PriceInput() {
  const [open, setOpen] = useState(false)
  const [prices, setPrices] = useState<PriceValues>({
    standard: undefined,
    premium: undefined,
    discount: undefined,
  })

  const handlePriceChange = (type: keyof PriceValues, value: string) => {
    const numValue = value === '' ? undefined : Number.parseFloat(value)
    setPrices((prev) => ({
      ...prev,
      [type]: numValue,
    }))
  }

  // Format the display value for the main input
  const getDisplayValue = () => {
    return 'Seleccionar precio'
  }

  return (
    <div className="w-full max-w-sm">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {getDisplayValue()}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="standard-price">Precio Estándar</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  id="standard-price"
                  type="number"
                  min="0"
                  step="0.01"
                  className="pl-7"
                  placeholder="0.00"
                  value={prices.standard ?? ''}
                  onChange={(e) =>
                    handlePriceChange('standard', e.target.value)
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="premium-price">Precio Premium</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  id="premium-price"
                  type="number"
                  min="0"
                  step="0.01"
                  className="pl-7"
                  placeholder="0.00"
                  value={prices.premium ?? ''}
                  onChange={(e) => handlePriceChange('premium', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount-price">Precio con Descuento</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  id="discount-price"
                  type="number"
                  min="0"
                  step="0.01"
                  className="pl-7"
                  placeholder="0.00"
                  value={prices.discount ?? ''}
                  onChange={(e) =>
                    handlePriceChange('discount', e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
