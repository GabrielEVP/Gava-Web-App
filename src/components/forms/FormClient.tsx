import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import ClientSchema, { FormClientValues } from '@schemas/ClientSchema'
import FieldInput from '@components/fields/FieldInput'
import FieldTextArea from '@components/fields/FieldTextArea'

const FormRegister = () => {
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
      <FieldInput
        name="legal_name"
        control={control}
        label="Nombre Legal"
        type="text"
        error={errors.legal_name}
      />
      <div className="grid gap-4 grid-cols-2">
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
      <div className="grid gap-4 grid-cols-2">
        <FieldInput
          name="type_client"
          control={control}
          label="Tipo de Cliente"
          type="text"
          error={errors.type_client}
        />
        <FieldInput
          name="country"
          control={control}
          label="País"
          type="text"
          error={errors.country}
        />
      </div>

      <FieldInput
        name="address"
        control={control}
        label="Dirección"
        type="text"
        error={errors.address}
      />
      <div className="grid gap-4 grid-cols-3">
        <FieldInput
          name="state"
          control={control}
          label="Dirección"
          type="text"
          error={errors.state}
        />
        <FieldInput
          name="city"
          control={control}
          label="Ciudad"
          type="text"
          error={errors.city}
        />
        <FieldInput
          name="municipality"
          control={control}
          label="Municipio"
          type="text"
          error={errors.municipality}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FieldInput
          name="credit_days"
          control={control}
          label="Días de Crédito"
          type="text"
          error={errors.credit_days}
        />
        <FieldInput
          name="limit_credit"
          control={control}
          label="Límite de Crédito"
          type="text"
          error={errors.limit_credit}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FieldInput
          name="tax_rate"
          control={control}
          label="Tasa de Impuesto por Defecto"
          type="text"
          error={errors.tax_rate}
        />
        <FieldInput
          name="discount"
          control={control}
          label="Descuento por Defecto"
          type="text"
          error={errors.discount}
        />
      </div>

      <FieldTextArea name="notes" label="Notas" />
    </form>
  )
}

export default FormRegister
