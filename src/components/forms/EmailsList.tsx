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
import { FormEmail, DEFAULTEMAILFORMVALUE } from '@schemas/index'
import { TYPE_EMAIL } from '@constants/index'

export const EmailsList: FC = () => {
  const methods = useForm()

  const {
    control,
    formState: { errors },
  } = useFormContext<FormEmail>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'emails',
  })

  return (
    <FormProvider {...methods}>
      <Button
        type="button"
        variant="outline"
        onClick={() => append(DEFAULTEMAILFORMVALUE)}
      >
        <Plus className="h-4 w-4 mr-2" /> Añadir Emails
      </Button>
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Emails {index + 1}</h3>
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
          <div className="grid gap-4 md:grid-cols-2">
            <FieldInput
              name={`emails.${index}.email`}
              control={control}
              label="Nombre"
              type="text"
              error={errors.emails?.[index]?.email}
            />
            <FieldSelect
              name="type"
              label="Tipo"
              placeholder="Selecciona un Tipo"
              selectLabel="Tipo"
              options={TYPE_EMAIL}
            />
          </div>
        </div>
      ))}
    </FormProvider>
  )
}
