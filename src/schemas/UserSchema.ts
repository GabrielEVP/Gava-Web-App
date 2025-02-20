import { z } from 'zod'

const UserSchema = z.object({
    name: z.string().min(1, 'el nombre es obligatorio'),
    email: z.string().email('debe ser un email válido'),
    password: z.string().min(6, 'debe tener al menos 6 caracteres'),
})

type FormUserValues = z.infer<typeof UserSchema>

export default UserSchema
export type { FormUserValues }
