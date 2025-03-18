import { FC } from 'react'
import {
  useFieldArray,
  FormProvider,
  useFormContext,
  useForm,
} from 'react-hook-form'
import { FieldInput, FieldSelect } from '@components/fields/index'
import { Button } from '@components/ui/button'
import { Trash2, Plus } from 'lucide-react'
import { FormPhone, DEFAULTPHONEFORMVALUE } from '@schemas/index'
import { TYPE_PHONE } from '@constants/index'

export const PhonesList: FC = () => {
  const methods = useForm()

  const {
    control,
    formState: { errors },
  } = useFormContext<FormPhone>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phones',
  })

  return (
    <FormProvider {...methods}>
      <Button
        type="button"
        variant="outline"
        onClick={() => append(DEFAULTPHONEFORMVALUE)}
        className="mt-2"
      >
        <Plus className="h-4 w-4 mr-2" /> Añadir Teléfono
      </Button>
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Teléfono {index + 1}</h3>
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
          <div className="grid gap-4 md:grid-cols-3">
            <FieldInput
              name={`phones.${index}.name`}
              control={control}
              label="Nombre"
              type="text"
              error={errors.phones?.[index]?.name}
            />
            <FieldInput
              name={`phones.${index}.phone`}
              control={control}
              label="Teléfono"
              type="text"
              error={errors.phones?.[index]?.phone}
            />
            <FieldSelect
              name="type"
              label="Tipo"
              placeholder="Selecciona un Tipo"
              selectLabel="Tipo"
              options={TYPE_PHONE}
            />
          </div>
        </div>
      ))}
    </FormProvider>
  )
}
