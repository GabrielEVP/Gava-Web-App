import { Control, Controller, FieldError } from 'react-hook-form'
import { Input, Label } from '@components/ui'

interface Props {
  name: string
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
}

const FieldInput = ({ name, control, label, type = 'text', error }: Props) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={name}
            type={type}
            {...field} // Propaga value, onChange, onBlur, y ref
          />
        )}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  )
}

export default FieldInput
