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
import { FormBankAccount, DEFAULTBANKACCOUNTFORMVALUE } from '@schemas/index'
import { TYPE_BANK_ACCOUNT } from '@constants/index'

export const BankAccountsList: FC = () => {
  const methods = useForm()

  const {
    control,
    formState: { errors },
  } = useFormContext<FormBankAccount>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'BankAccounts',
  })

  return (
    <FormProvider {...methods}>
      <Button
        type="button"
        variant="outline"
        onClick={() => append(DEFAULTBANKACCOUNTFORMVALUE)}
        className="mt-2"
      >
        <Plus className="h-4 w-4 mr-2" /> Añadir Cuenta Bancaría
      </Button>
      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Cuenta {index + 1}</h3>
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
              name={`BankAccounts.${index}.name`}
              control={control}
              label="Nombre del Banco"
              type="text"
              error={errors.BankAccounts?.[index]?.name}
            />
            <FieldInput
              name={`BankAccounts.${index}.accountNumber`}
              control={control}
              label="Numero de cuenta"
              type="text"
              error={errors.BankAccounts?.[index]?.accountNumber}
            />
            <FieldSelect
              name="country"
              label="Tipo de cuenta"
              placeholder="Selecciona una cuenta"
              selectLabel="Cuenta Bancaría"
              options={TYPE_BANK_ACCOUNT}
            />
          </div>
        </div>
      ))}
    </FormProvider>
  )
}
