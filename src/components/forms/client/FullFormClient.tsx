import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
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

type Phone = { name: string; phone: string }
type Email = { email: string }
type BankAccount = { number: string; name: string }

const FullFormClient = () => {
  const [phones, setPhones] = useState<Phone[]>([{ name: '', phone: '' }])
  const [emails, setEmails] = useState<Email[]>([{ email: '' }])
  const [addresses, setAddresses] = useState([
    { address: '', state: '', city: '', municipality: '', isBilling: false },
  ])
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    { number: '', name: '' },
  ])

  const addPhone = () => {
    setPhones([...phones, { name: '', phone: '' }])
  }

  const removePhone = (index: number) => {
    setPhones(phones.filter((_, i) => i !== index))
  }

  const addEmail = () => {
    setEmails([...emails, { email: '' }])
  }
  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index))
  }

  const addBankAccount = () => {
    setBankAccounts([...bankAccounts, { number: '', name: '' }])
  }
  const removeBankAccount = (index: number) => {
    setBankAccounts(bankAccounts.filter((_, i) => i !== index))
  }

  const addAddress = () => {
    setAddresses([
      ...addresses,
      {
        address: '',
        state: '',
        city: '',
        municipality: '',
        isBilling: false,
      },
    ])
  }

  const removeAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index))
  }

  const updateAddress = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const newAddresses = [...addresses]
    newAddresses[index] = { ...newAddresses[index], [field]: value }
    if (field === 'isBilling' && value === true) {
      newAddresses.forEach((addr, i) => {
        if (i !== index) addr.isBilling = false
      })
    }
    setAddresses(newAddresses)
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormClientValues>({
    resolver: zodResolver(ClientSchema),
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
        <TabsContent className="space-y-4" value="contact">
          <div className="space-y-2">
            <Label>Teléfonos</Label>
            {phones.map((phone, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <FieldInput
                  name="name"
                  control={control}
                  label="Nombre"
                  type="text"
                  error={errors.legal_name}
                />
                <FieldInput
                  name="phones"
                  control={control}
                  label="Teléfonos"
                  type="number"
                  error={errors.legal_name}
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
            <Button variant="outline" onClick={addPhone} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Añadir Teléfono
            </Button>
          </div>
          <div className="space-y-2">
            <Label>Emails</Label>
            {emails.map((email, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <FieldInput
                  name="email"
                  control={control}
                  label="Email"
                  type="email"
                  error={errors.legal_name}
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
            <Button variant="outline" onClick={addEmail} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Añadir Email
            </Button>
          </div>
        </TabsContent>
        <TabsContent className="space-y-4" value="bankAccount">
          <div className="space-y-2">
            <Label>Cuentas Bancarias</Label>
            {bankAccounts.map((bankAccount, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <FieldInput
                  name="name"
                  control={control}
                  label="Nombre"
                  type="text"
                  error={errors.legal_name}
                />
                <FieldInput
                  name="phones"
                  control={control}
                  label="Cuenta Bancaria"
                  type="number"
                  error={errors.legal_name}
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
            <Button variant="outline" onClick={addBankAccount} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Añadir Cuenta Bancaria
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="address" className="space-y-4">
          {addresses.map((address, index) => (
            <div key={index} className="space-y-4 border p-4 rounded-md">
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
                  name="name"
                  control={control}
                  label="Dirección"
                  type="text"
                  error={errors.legal_name}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <FieldInput
                    name="name"
                    control={control}
                    label="Estado"
                    type="text"
                    error={errors.legal_name}
                  />
                </div>
                <div className="space-y-2">
                  <FieldInput
                    name="name"
                    control={control}
                    label="Municipio"
                    type="text"
                    error={errors.legal_name}
                  />
                </div>
                <div className="space-y-2">
                  <FieldInput
                    name="name"
                    control={control}
                    label="Ciudad"
                    type="text"
                    error={errors.legal_name}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`billing-${index}`}
                  checked={address.isBilling}
                  onCheckedChange={(checked) =>
                    updateAddress(index, 'isBilling', checked)
                  }
                />
                <Label htmlFor={`billing-${index}`}>
                  Usar como dirección de facturación
                </Label>
              </div>
            </div>
          ))}
          <Button variant="outline" onClick={addAddress} className="mt-2">
            <Plus className="h-4 w-4 mr-2" /> Añadir Dirección
          </Button>
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
  )
}

export default FullFormClient
