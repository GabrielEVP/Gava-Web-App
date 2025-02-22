import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ClientSchema, { FormClientValues } from '@schemas/ClientSchema'
import { COUNTRIES, TYPE_CONTACT_SELECT } from '@constants/index'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/index'
import { Button } from '@components/ui/button'
import { Label } from '@components/ui/index'
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
  Trash2,
  Plus,
} from 'lucide-react'

import { Checkbox } from '@components/ui/checkbox'

const FullFormClient = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormClientValues>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      legal_name: '',
      code_number: '',
      registration_number: '',
      type_client: '',
      country: '',
      phones: [{ name: '', phone: '' }],
      emails: [{ email: '' }],
      bank_accounts: [{ bank_name: '', account_number: '' }],
      addresses: [
        {
          address: '',
          state: '',
          city: '',
          municipality: '',
          isBilling: false,
        },
      ],
      credit_days: 0,
      limit_credit: 0,
      tax_rate: 0,
      discount: 0,
      notes: '',
    },
  })

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control,
    name: 'phones',
  })

  const {
    fields: emailFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control,
    name: 'emails',
  })

  const {
    fields: bankAccountFields,
    append: appendBankAccount,
    remove: removeBankAccount,
  } = useFieldArray({
    control,
    name: 'bank_accounts',
  })

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
    update: updateAddress,
  } = useFieldArray({
    control,
    name: 'addresses',
  })

  const onSubmit: SubmitHandler<FormClientValues> = (data) => {
    console.log(data)
  }

  const handleBillingChange = (index: number, checked: boolean) => {
    addressFields.forEach((item, idx) => {
      updateAddress(idx, {
        ...item,
        isBilling: idx === index ? checked : false,
      })
    })
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

        {/* Sección Básica/General */}
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

        {/* Sección de Contacto */}
        <TabsContent className="space-y-4" value="contact">
          <div className="space-y-2">
            <Label>Teléfonos</Label>
            {phoneFields.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 mb-2">
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
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removePhone(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => appendPhone({ name: '', phone: '' })}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" /> Añadir Teléfono
            </Button>
          </div>
          <div className="space-y-2">
            <Label>Emails</Label>
            {emailFields.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 mb-2">
                <FieldInput
                  name={`emails.${index}.email`}
                  control={control}
                  label="Email"
                  type="email"
                  error={errors.emails?.[index]?.email}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeEmail(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => appendEmail({ email: '' })}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" /> Añadir Email
            </Button>
          </div>
        </TabsContent>

        {/* Sección de Cuentas Bancarias */}
        <TabsContent className="space-y-4" value="bankAccount">
          <div className="space-y-2">
            <Label>Cuentas Bancarias</Label>
            {bankAccountFields.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 mb-2">
                <FieldInput
                  name={`bankAccounts.${index}.name`}
                  control={control}
                  label="Nombre"
                  type="text"
                  error={errors.bank_accounts?.[index]?.bank_name}
                />
                <FieldInput
                  name={`bankAccounts.${index}.number`}
                  control={control}
                  label="Cuenta Bancaria"
                  type="text"
                  error={errors.bank_accounts?.[index]?.account_number}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeBankAccount(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() =>
                appendBankAccount({ bank_name: '', account_number: '' })
              }
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" /> Añadir Cuenta Bancaria
            </Button>
          </div>
        </TabsContent>

        {/* Sección de Direcciones */}
        <TabsContent className="space-y-4" value="address">
          {addressFields.map((item, index) => (
            <div key={item.id} className="space-y-4 border p-4 rounded-md">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Dirección {index + 1}</h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeAddress(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <FieldInput
                  name={`addresses.${index}.address`}
                  control={control}
                  label="Dirección"
                  type="text"
                  error={errors.addresses?.[index]?.address}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <FieldInput
                    name={`addresses.${index}.state`}
                    control={control}
                    label="Estado"
                    type="text"
                    error={errors.addresses?.[index]?.state}
                  />
                </div>
                <div className="space-y-2">
                  <FieldInput
                    name={`addresses.${index}.municipality`}
                    control={control}
                    label="Municipio"
                    type="text"
                    error={errors.addresses?.[index]?.municipality}
                  />
                </div>
                <div className="space-y-2">
                  <FieldInput
                    name={`addresses.${index}.city`}
                    control={control}
                    label="Ciudad"
                    type="text"
                    error={errors.addresses?.[index]?.city}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`billing-${index}`}
                  checked={item.isBilling}
                  onCheckedChange={(checked) =>
                    handleBillingChange(index, Boolean(checked))
                  }
                />
                <Label htmlFor={`billing-${index}`}>
                  Usar como dirección de facturación
                </Label>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              appendAddress({
                address: '',
                state: '',
                city: '',
                municipality: '',
                isBilling: false,
              })
            }
            className="mt-2"
          >
            <Plus className="h-4 w-4 mr-2" /> Añadir Dirección
          </Button>
        </TabsContent>

        {/* Sección de Crédito */}
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

        {/* Sección de Notas */}
        <TabsContent className="space-y-4" value="notes">
          <FieldTextArea name="notes" label="Notas" />
        </TabsContent>
      </Tabs>
    </form>
  )
}

export default FullFormClient
