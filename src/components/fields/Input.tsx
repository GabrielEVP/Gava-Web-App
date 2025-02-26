import { Control, Controller, FieldError } from 'react-hook-form'
import { Input, Label } from '@components/ui'
interface props {
  name: string
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
}

const FieldInput = ({ name, control, label, type, error }: props) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Input id={name} type={type} {...field} />}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
      </Label>
    </div>
  )
}

export default FieldInput
