import { Control, FieldError } from 'react-hook-form'
import FieldInput from '@components/fields/FieldInput'

interface BillingProps {
  control: Control
  errors: {
    legal_name?: FieldError
    code_number?: FieldError
    registration_number?: FieldError
    type_client?: FieldError
    country?: FieldError
  }
}

const ClientInformation: React.FC<BillingProps> = ({ control, errors }) => {
  return (
    <div>
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
    </div>
  )
}

export default ClientInformation
