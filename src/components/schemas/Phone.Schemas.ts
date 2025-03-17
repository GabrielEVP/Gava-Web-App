import { z } from 'zod'

export const PhoneSchema = z.object({
  name: z
    .string()
    .max(20, 'El nombre del teléfono no puede tener más de 20 caracteres'),
  phone: z
    .string()
    .max(20, 'El número de teléfono no puede tener más de 20 caracteres'),
  type: z.enum(['work', 'personal']),
})

export type FormPhoneSchema = z.infer<typeof PhoneSchema>

export const DEFAULTPHONEFORMVALUE = {
  name: '',
  phone: '',
  type: 'work',
}

