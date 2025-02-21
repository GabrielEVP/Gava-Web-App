import { Control, Controller, FieldError } from 'react-hook-form'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
interface props {
  name: string
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
}

const FieldInput = ({ name, control, label, type, error }: props) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        className="grid w-full max-w-sm items-center gap-1.5"
        htmlFor={name}
      >
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
