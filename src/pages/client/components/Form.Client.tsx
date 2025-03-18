import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Client from '@pages/client/Clients'
import {
  ClientSchema,
  FormClient,
  DEFAULTCLIENTFORMVALUES,
} from '@pages/client/schemas/index'
import { COUNTRIES, TYPE_CONTACT_SELECT } from '@constants/index'
import {
  Card,
  CardContent,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@components/ui'
import {
  AdressesList,
  PhonesList,
  EmailsList,
  BankAccountsList,
} from '@components/forms/'
import { FieldInput, FieldTextArea, FieldSelect } from '@components/fields'
import {
  Building2,
  Contact,
  CreditCard,
  FileText,
  MapPin,
  User,
} from 'lucide-react'

export const FullFormClient = () => {
  const { id } = useParams()

  const methods = useForm<FormClient>({
    resolver: zodResolver(ClientSchema),
    defaultValues: DEFAULTCLIENTFORMVALUES as FormClient,
    mode: 'onBlur',
  })

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  useEffect(() => {}, [id, setValue])

  const onSubmit: SubmitHandler<FormClient> = (data) => {
    console.log(data)
  }

  return (
    <Client>
      <div className="container">
        <Card>
          <CardContent className="p-6 shadow-xl">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Tabs defaultValue="general" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger
                      className="flex items-center gap-2"
                      value="general"
                    >
                      <User className="h-4 w-4" />
                      <span className="hidden lg:inline">Básico</span>
                    </TabsTrigger>
                    <TabsTrigger
                      className="flex items-center gap-2"
                      value="address"
                    >
                      <MapPin className="h-4 w-4" />
                      <span className="hidden lg:inline">Dirección</span>
                    </TabsTrigger>
                    <TabsTrigger
                      className="flex items-center gap-2"
                      value="contact"
                    >
                      <Contact className="h-4 w-4" />
                      <span className="hidden lg:inline">Contacto</span>
                    </TabsTrigger>
                    <TabsTrigger
                      className="flex items-center gap-2"
                      value="bankAccount"
                    >
                      <Building2 className="h-4 w-4" />
                      <span className="hidden lg:inline">Cuentas</span>
                    </TabsTrigger>
                    <TabsTrigger
                      className="flex items-center gap-2"
                      value="credit"
                    >
                      <CreditCard className="h-4 w-4" />
                      <span className="hidden lg:inline">Crédito</span>
                    </TabsTrigger>
                    <TabsTrigger
                      className="flex items-center gap-2"
                      value="notes"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="hidden lg:inline">Notas</span>
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
                        label="Código"
                        type="text"
                        error={errors.code_number}
                      />
                      <FieldInput
                        name="registration_number"
                        control={control}
                        label="Número de Registro"
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
                    <AdressesList />
                  </TabsContent>
                  <TabsContent className="space-y-4" value="contact">
                    <PhonesList />
                    <EmailsList />
                  </TabsContent>
                  <TabsContent className="space-y-4" value="bankAccount">
                    <BankAccountsList />
                  </TabsContent>
                  <TabsContent className="space-y-4" value="credit">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FieldInput
                        name="credit_days"
                        control={control}
                        label="Días de Crédito"
                        type="number"
                        error={errors.credit_days}
                      />
                      <FieldInput
                        name="limit_credit"
                        control={control}
                        label="Límite de Crédito"
                        type="number"
                        error={errors.limit_credit}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <FieldInput
                        name="tax_rate"
                        control={control}
                        label="Tasa de Impuesto por Defecto"
                        type="number"
                        error={errors.tax_rate}
                      />
                      <FieldInput
                        name="discount"
                        control={control}
                        label="Descuento por Defecto"
                        type="number"
                        error={errors.discount}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent className="space-y-4" value="notes">
                    <FieldTextArea name="notes" label="Notas" />
                  </TabsContent>
                </Tabs>
              </form>
            </FormProvider>
            <hr className="mt-10 border-gray-200 dark:border-gray-700" />
            <div className="flex gap-2 justify-end pt-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Aceptar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Client>
  )
}
