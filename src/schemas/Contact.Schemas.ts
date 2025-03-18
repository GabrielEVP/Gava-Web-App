import { z } from 'zod'

export const ContactShema = z.object({
    legal_name: z
        .string()
        .min(1, 'El nombre legal es obligatorio')
        .max(255, 'El nombre legal no puede tener más de 255 caracteres'),
    registration_number: z
        .string()
        .min(1, 'El número de registro es obligatorio')
        .max(255, 'El número de registro no puede tener más de 255 caracteres'),
    type: z.enum(['NT', 'JU', 'GB', 'OT']),
    website: z.string().max(255, 'El sitio web no puede tener más de 255 caracteres').optional(),
    country: z.string().max(100, 'El país no puede tener más de 100 caracteres').optional(),
    notes: z.string().optional()
})

export type FormContact = z.infer<typeof ContactShema>

export const DEFAULTCONTACTFORMVALUE = {
    legal_name: '',
    registration_number: '',
    type: 'OT' as 'NT' | 'JU' | 'GB' | 'OT',
    country: '',
    credit_days: 0,
    limit_credit: 0,
    notes: '',
}