import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Supplier from '@pages/supplier/Suppliers'
import {
  SupplierSchema,
  FormSupplier,
  DEFAULTSUPPLIERFORMVALUE,
} from '@pages/supplier/schemas/index'
import { COUNTRIES, TYPE_CONTACT_SELECT } from '@constants/select/index'
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
} from '@pages/supplier/components/section/index'
import { FieldInput, FieldTextArea, FieldSelect } from '@components/fields'
import {
  Building2,
  Contact,
  CreditCard,
  FileText,
  MapPin,
  User,
} from 'lucide-react'

export const FullFormSupplier = () => {
  const { id } = useParams()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSupplier>({
    resolver: zodResolver(SupplierSchema),
    defaultValues: DEFAULTSUPPLIERFORMVALUE,
    mode: 'onBlur',
  })

  useEffect(() => {}, [id, setValue])

  const onSubmit: SubmitHandler<FormSupplier> = (data) => {
    console.log(data)
  }

  return (
    <Supplier>
      <div className="container">
        <Card>
          <CardContent className="p-6 shadow-xl">
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
                  <FieldInput
                    name="legal_name"
                    control={control}
                    label="Nombre Legal"
                    type="text"
                    error={errors.legal_name}
                  />
                  <div className="grid gap-4 md:grid-cols-2">
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
                      name="type"
                      label="Tipo de Suppliere"
                      placeholder="Seleccione un tipo de suppliere"
                      selectLabel="Tipo de suppliere"
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
                  <AdressesList control={control} errors={errors} isBilling />
                </TabsContent>
                <TabsContent className="space-y-4" value="contact">
                  <PhonesList control={control} errors={errors} />
                  <EmailsList control={control} errors={errors} />
                </TabsContent>
                <TabsContent className="space-y-4" value="bankAccount">
                  <BankAccountsList control={control} errors={errors} />
                </TabsContent>
                <TabsContent className="space-y-4" value="credit">
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
            <hr className="mt-10 border-gray-200 dark:border-gray-700" />
            <div className="flex gap-2 justify-end pt-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Aceptar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Supplier>
  )
}
