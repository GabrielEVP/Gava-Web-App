import { z } from 'zod'

export const EmailSchema = z.object({
  email: z
    .string()
    .email('Debe ser un correo válido')
    .max(255, 'El correo electrónico no puede tener más de 255 caracteres'),
  type: z.enum(['work', 'personal']),
})

export type FormEmailSchema = z.infer<typeof EmailSchema>

export const DEFAULTEMAILFORMVALUE = {
  email: '',
  type: 'work',
}

