import { z } from 'zod'

export const ClientSchema = z.object({
    code_number: z
        .string()
        .min(1, 'El número de código es obligatorio')
        .max(255, 'El número de código no puede tener más de 255 caracteres'),
    registration_number: z
        .string()
        .min(1, 'El número de registro es obligatorio')
        .max(255, 'El número de registro no puede tener más de 255 caracteres'),
    legal_name: z
        .string()
        .min(1, 'El nombre legal es obligatorio')
        .max(255, 'El nombre legal no puede tener más de 255 caracteres'),
    type_client: z
        .string()
        .min(1, 'El tipo de cliente es obligatorio')
        .max(255, 'El tipo de cliente no puede tener más de 255 caracteres'),
    website: z.string().max(255, 'El sitio web no puede tener más de 255 caracteres').optional(),
    postal_code: z.string().max(20, 'El código postal no puede tener más de 20 caracteres').optional(),
    country: z.string().max(100, 'El país no puede tener más de 100 caracteres').optional(),
    credit_days: z.number().min(0, 'El límite de días de crédito no puede ser menor que 0').optional(),
    credit_day_limit: z.number().min(0, 'El límite de días de crédito no puede ser menor que 0').optional(),
    limit_credit: z.number().min(0, 'El límite de crédito no puede ser menor que 0').optional(),
    tax_rate: z
        .number()
        .min(0, 'La tasa de impuestos no puede ser menor que 0')
        .max(100, 'La tasa de impuestos no puede ser mayor que 100')
        .optional(),
    discount: z
        .number()
        .min(0, 'El descuento no puede ser menor que 0')
        .max(100, 'El descuento no puede ser mayor que 100')
        .optional(),
    notes: z.string().optional(),
})

export type FormClient = z.infer<typeof ClientSchema>

export const DEFAULTCLIENTFORMVALUES = {
    legal_name: '',
    code_number: '',
    registration_number: '',
    type_client: '',
    country: '',
    tax_rate: 0,
    discount: 0,
    notes: '',
}

