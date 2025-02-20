import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import { Control, Controller, FieldError, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'el nombre es obligatorio'),
  email: z.string().email('debe ser un email válido'),
  password: z.string().min(6, 'debe tener al menos 6 caracteres'),
})

type FormLoginValues = z.infer<typeof schema>

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="name"
        control={control}
        label="name"
        type="string"
        error={errors.name}
      />
    </form>
  )
}

interface props {
  name: string
  control: Control<any>
  label: string
  type?: string
  error?: FieldError
}

const InputForm = ({ name, control, label, type, error }: props) => {
  ;<label htmlFor={name}>
    {label}
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          id={name}
          type={type}
          {...field}
          className={`form-control ${error ? 'text-red' : ''}`}
        />
      )}
    />
    {error.name && <p className="error">{error.message}</p>}
  </label>
}
