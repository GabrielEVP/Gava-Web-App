import { FC } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { FieldInput } from '@components/fields/index'
import { Label, Button, Checkbox } from '@components/ui/index'
import { Trash2, Plus } from 'lucide-react'
import { FormAddress, DEFAULTADDRESSFORMVALUE } from '@schemas/index'

export const AdressesList: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormAddress>()

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'addresses',
  })

  const handleBillingChange = (index: number, checked: boolean) => {
    fields.forEach((item, idx) => {
      update(idx, {
        ...item,
        isBilling: idx === index ? checked : false,
      })
    })
  }

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        onClick={() => append(DEFAULTADDRESSFORMVALUE)}
        className="mt-2"
      >
        <Plus className="h-4 w-4 mr-2" /> Añadir Dirección
      </Button>
      <div className="max-h-96 overflow-y-auto mt-4">
        {fields.map((item, index) => (
          <div key={item.id} className="space-y-4 border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Dirección {index + 1}</h3>
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="space-y-2">
              <FieldInput
                name={`addresses.${index}.address`}
                control={control}
                label="Dirección"
                type="text"
                error={errors.addresses?.[index]?.address}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <FieldInput
                name={`addresses.${index}.state`}
                control={control}
                label="Estado"
                type="text"
                error={errors.addresses?.[index]?.state}
              />
              <FieldInput
                name={`addresses.${index}.city`}
                control={control}
                label="Ciudad"
                type="text"
                error={errors.addresses?.[index]?.city}
              />
              <FieldInput
                name={`addresses.${index}.municipality`}
                control={control}
                label="Municipio"
                type="text"
                error={errors.addresses?.[index]?.municipality}
              />
              <FieldInput
                name={`addresses.${index}.postalCode`}
                control={control}
                label="Código Postal"
                type="text"
                error={errors.addresses?.[index]?.postalCode}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`billing-${index}`}
                checked={item.isBilling}
                onCheckedChange={(checked) =>
                  handleBillingChange(index, Boolean(checked))
                }
              />
              <Label htmlFor={`billing-${index}`}>
                Usar como dirección de facturación
              </Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
