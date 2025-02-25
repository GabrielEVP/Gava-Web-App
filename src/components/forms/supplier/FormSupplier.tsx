import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SupplierSchema, {
  FormSupplierValues,
  DEFAULTSUPPLIERFORMVALUES,
} from '@schemas/SupplierSchema'
import { COUNTRIES, TYPE_CONTACT_SELECT } from '@constants/index'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/index'
import {
  AdressesList,
  PhonesList,
  EmailsList,
  BankAccountsList,
} from '@components/forms/multiple/index'

import {
  FieldInput,
  FieldTextArea,
  FieldSelect,
} from '@components/fields/index'
import {
  Building2,
  Contact,
  CreditCard,
  FileText,
  MapPin,
  User,
} from 'lucide-react'

const FullFormSupplier = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSupplierValues>({
    resolver: zodResolver(SupplierSchema),
    defaultValues: DEFAULTSUPPLIERFORMVALUES as FormSupplierValues,
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<FormSupplierValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger className="flex items-center gap-2" value="general">
            <User className="h-4 w-4" />
            <span className="hidden lg:inline">Básico</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="address">
            <MapPin className="h-4 w-4" />
            <span className="hidden lg:inline">Dirección</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="contact">
            <Contact className="h-4 w-4" />
            <span className="hidden lg:inline">Contacto</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="bankAccount">
            <Building2 className="h-4 w-4" />
            <span className="hidden lg:inline">Cuentas</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="credit">
            <CreditCard className="h-4 w-4" />
            <span className="hidden lg:inline">Crédito</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="notes">
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
              name="type_Supplier"
              label="Tipo de Suppliere"
              placeholder="Seleccione un tipo de Suppliere"
              selectLabel="Tipo de Suppliere"
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
              name="credit_days"
              control={control}
              label="Días de Crédito"
              type="number"
              error={errors.credit_day_limit}
            />
            <FieldInput
              name="limit_credit"
              control={control}
              label="Límite de Crédito"
              type="number"
              error={errors.limit_credit}
            />
          </div>
        </TabsContent>
        <TabsContent className="space-y-4" value="notes">
          <FieldTextArea name="notes" label="Notas" />
        </TabsContent>
      </Tabs>
    </form>
  )
}

export default FullFormSupplier
