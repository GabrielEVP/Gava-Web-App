import { Control, Controller, FieldError } from 'react-hook-form'

interface props {
  name: string
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
}

const FormField = ({ name, control, label, type, error }: props) => {
  return (
    <label
      className="block text-sm font-medium text-black dark:text-white mb-1"
      htmlFor={name}
    >
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 border-gray-600 dark:text-white text-black ${error ? 'border-red-500' : ''}`}
          />
        )}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </label>
  )
}

export default FormField
