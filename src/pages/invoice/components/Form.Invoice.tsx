import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Client from '@pages/client/presentation/Clients' // Asegúrate de que la ruta esté correcta
import ClientSchema, {
  FormClientValues,
  DEFAULTCLIENTFORMVALUES,
} from '@pages/client/presentation/schemas/Client.Schemas'
import { FieldInput } from '@components/fields'
import InvoiceLineDrawer from '@components/fields/SheetLine'

const FullFormClient = () => {
  const { id } = useParams() // Captura el id de la URL
  const [loading, setLoading] = useState(false)

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

  if (loading) return <p>Cargando...</p>

  return (
    <Client>
      <div className="flex justify-center w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-full">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2 mb-4">
                  Información de la Factura
                </h2>
                <div className="space-y-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <FieldInput
                      name="legal_name"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                    <FieldInput
                      name="legal_name"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                    <FieldInput
                      name="legal_name"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <FieldInput
                      name="legal_name"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                  </div>
                  <InvoiceLineDrawer />
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <FieldInput
                      name="legal_name"
                      control={control}
                      label="Nombre Legal"
                      type="text"
                      error={errors.legal_name}
                    />
                  </div>
                  <FieldInput
                    name="legal_name"
                    control={control}
                    label="Nombre Legal"
                    type="text"
                    error={errors.legal_name}
                  />
                  <FieldInput
                    name="legal_name"
                    control={control}
                    label="Nombre Legal"
                    type="text"
                    error={errors.legal_name}
                  />
                </div>{' '}
                {/* Se cierra correctamente el div de className="space-y-4" */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </Client>
  )
}

export default FullFormClient
