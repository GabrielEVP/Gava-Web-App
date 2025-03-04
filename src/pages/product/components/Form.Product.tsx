import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Client from '@pages/client/presentation/Clients' // Asegúrate de que la ruta esté correcta
import ClientSchema, {
  FormClientValues,
  DEFAULTCLIENTFORMVALUES,
} from '@pages/client/presentation/schemas/Client.Schemas'
import { FieldInput, FieldTextArea } from '@components/fields'
import { Button } from '@components/ui'
import CategoryMultiSelect from '@pages/product/components/section/Category'
import Price from '@pages/product/components/section/Price'
const FullFormClient = () => {
  const { id } = useParams() // Captura el id de la URL

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormClientValues>({
    resolver: zodResolver(ClientSchema),
    defaultValues: DEFAULTCLIENTFORMVALUES as FormClientValues,
    mode: 'onBlur',
  })

  useEffect(() => {}, [id, setValue])

  const onSubmit: SubmitHandler<FormClientValues> = (data) => {
    console.log(data)
  }

  return (
    <Client>
      <div className="flex justify-center w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-full m-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2 mb-4">
                  Información del Producto
                </h2>
                <div className="space-y-4">
                  <FieldInput
                    name="legal_name"
                    control={control}
                    label="Nombre Legal"
                    type="text"
                    error={errors.legal_name}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FieldInput
                      name="Barcode"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                    <FieldInput
                      name="Codigo de referencia"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                  </div>
                  <div>
                    <CategoryMultiSelect />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FieldInput
                      name="Stock"
                      control={control}
                      label="Stock"
                      type="text"
                      error={errors.legal_name}
                    />
                    <FieldInput
                      name="Unidades por cajas"
                      control={control}
                      label="Unidades por cajas"
                      type="text"
                      error={errors.legal_name}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <Price />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FieldInput
                      name="Unidades por cajas"
                      control={control}
                      label="IVA"
                      type="text"
                      error={errors.legal_name}
                    />
                  </div>
                  <FieldTextArea name="notes" label="Notas" />
                </div>
                <Button variant="outline">Cancelar</Button>
                <Button>Aceptar</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Client>
  )
}

export default FullFormClient
