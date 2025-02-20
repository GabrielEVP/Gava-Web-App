import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import { useForm, SubmitHandler } from 'react-hook-form'

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
      <FormField
        name="name"
        control={control}
        label="name"
        type="string"
        error={errors.name}
      />
    </form>
  )
}
