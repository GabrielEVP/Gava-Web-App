import { useForm, SubmitHandler } from 'react-hook-form'
import { MapPin, User } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/index'
import { FieldInput, FieldSelect } from '@components/fields/index'
import { COUNTRIES, TYPE_CONTACT_SELECT } from '@constants/index'
import ClientSchema, {
  FormClientValues,
  DEFAULTCLIENTFORMVALUES,
} from '@schemas/ClientSchema'

const CompactFormClient = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormClientValues>({
    resolver: zodResolver(ClientSchema),
    defaultValues: DEFAULTCLIENTFORMVALUES as FormClientValues,
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<FormClientValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger className="flex items-center gap-2" value="general">
            <User className="h-4 w-4" />
            <span className="hidden lg:inline">Básico</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="address">
            <MapPin className="h-4 w-4" />
            <span className="hidden lg:inline">Dirección</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent className="space-y-4" value="general">
          <div className="w-full">
            <FieldInput
              name="legal_name"
              control={control}
              label="Nombre Legal"
              type="text"
              error={errors.legal_name}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FieldInput
              name="code_number"
              control={control}
              label="Codigo"
              type="text"
              error={errors.code_number}
            />
            <FieldInput
              name="registration_number"
              control={control}
              label="Numero de Registro"
              type="text"
              error={errors.registration_number}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FieldSelect
              name="type_client"
              label="Tipo de Cliente"
              placeholder="Seleccione un tipo de cliente"
              selectLabel="Tipo de cliente"
              options={TYPE_CONTACT_SELECT}
            />
            <FieldSelect
              name="country"
              label="País"
              placeholder="Seleccione un País"
              selectLabel="País"
              options={COUNTRIES}
            />
          </div>
        </TabsContent>
        <TabsContent className="space-y-4" value="address">
          <FieldInput
            name="address"
            control={control}
            label="Dirección"
            type="text"
            error={errors.addresses?.[0]?.address}
          />
          <div className="grid gap-4 md:grid-cols-3">
            <FieldInput
              name="state"
              control={control}
              label="Dirección"
              type="text"
              error={errors.addresses?.[0]?.state}
            />
            <FieldInput
              name="city"
              control={control}
              label="Ciudad"
              type="text"
              error={errors.addresses?.[0]?.city}
            />
            <FieldInput
              name="municipality"
              control={control}
              label="Municipio"
              type="text"
              error={errors.addresses?.[0]?.municipality}
            />
          </div>
        </TabsContent>
      </Tabs>
    </form>
  )
}

export default CompactFormClient
