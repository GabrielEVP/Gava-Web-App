import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import UserSchema, { FormUserValues } from '@schemas/UserSchema'
import FormField from '@components/fields/FormField'

const FormRegister = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUserValues>({
    resolver: zodResolver(UserSchema),
  })

  const onSubmit: SubmitHandler<FormUserValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="email"
        control={control}
        label="Email"
        type="email"
        error={errors.email}
      />
      <FormField
        name="password"
        control={control}
        label="Contraseña"
        type="password"
        error={errors.password}
      />
    </form>
  )
}

export default FormRegister
