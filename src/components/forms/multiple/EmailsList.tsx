import { FC } from 'react'
import { useFieldArray, Control, FieldErrors } from 'react-hook-form'
import { FieldInput } from '@components/fields/index'
import { Button } from '@components/ui/button'
import { Trash2, Plus } from 'lucide-react'
import { FormClientValues } from '@schemas/ClientSchema'

interface EmailsListProps {
  control: Control<FormClientValues>
  errors: FieldErrors<FormClientValues>
}

const EmailsList: FC<EmailsListProps> = ({ control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'emails',
  })

  return (
    <>
      <Button
        variant="outline"
        onClick={() => append({ email: '' })}
        className="mt-2"
      >
        <Plus className="h-4 w-4 mr-2" /> Añadir Emails
      </Button>
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Emails {index + 1}</h3>
            {fields.length > 1 && (
              <Button
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
              name={`phones.${index}.name`}
              control={control}
              label="Nombre"
              type="text"
              error={errors.emails?.[index]?.email}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default EmailsList
