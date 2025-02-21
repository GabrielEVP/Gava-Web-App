import { Control, FieldError } from 'react-hook-form'
import FieldInput from '@components/fields/Input'

interface AddressesProps {
  control: Control
  errors: {
    address?: FieldError
    state?: FieldError
    city?: FieldError
    municipality?: FieldError
  }
}

const Addresses: React.FC<AddressesProps> = ({ control, errors }) => {
  return (
    <div>
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
    </div>
  )
}

export default Addresses
