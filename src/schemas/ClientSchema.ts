import { z } from 'zod'

const ClientSchema = z.object({
    code_number: z.string().min(1, 'El número de código es obligatorio').max(255, 'El número de código no puede tener más de 255 caracteres'),
    registration_number: z.string().min(1, 'El número de registro es obligatorio').max(255, 'El número de registro no puede tener más de 255 caracteres'),
    legal_name: z.string().min(1, 'El nombre legal es obligatorio').max(255, 'El nombre legal no puede tener más de 255 caracteres'),
    type_client: z.string().min(1, 'El tipo de cliente es obligatorio').max(255, 'El tipo de cliente no puede tener más de 255 caracteres'),
    website: z.string().max(255, 'El sitio web no puede tener más de 255 caracteres').optional(),
    address: z.string().max(255, 'La dirección no puede tener más de 255 caracteres').optional(),
    city: z.string().max(100, 'La ciudad no puede tener más de 100 caracteres').optional(),
    state: z.string().max(100, 'El estado no puede tener más de 100 caracteres').optional(),
    municipality: z.string().max(100, 'El municipio no puede tener más de 100 caracteres').optional(),
    postal_code: z.string().max(20, 'El código postal no puede tener más de 20 caracteres').optional(),
    country: z.string().max(100, 'El país no puede tener más de 100 caracteres').optional(),
    credit_days: z.number().min(0, 'El límite de días de crédito no puede ser menor que 0').optional(),
    credit_day_limit: z.number().min(0, 'El límite de días de crédito no puede ser menor que 0').optional(),
    limit_credit: z.number().min(0, 'El límite de crédito no puede ser menor que 0').optional(),
    tax_rate: z.number().min(0, 'La tasa de impuestos no puede ser menor que 0').max(100, 'La tasa de impuestos no puede ser mayor que 100').optional(),
    discount: z.number().min(0, 'El descuento no puede ser menor que 0').max(100, 'El descuento no puede ser mayor que 100').optional(),
    notes: z.string().optional(),
    company_id: z.string().optional(), // Asumimos que el company_id es un string, como el ID de la compañía
    phones: z.array(z.object({
        name: z.string().max(20, 'El nombre del teléfono no puede tener más de 20 caracteres'),
        phone: z.string().max(20, 'El número de teléfono no puede tener más de 20 caracteres'),
    })).optional(),
    emails: z.array(z.object({
        email: z.string().email('Debe ser un correo válido').max(255, 'El correo electrónico no puede tener más de 255 caracteres'),
    })).optional(),
    bank_accounts: z.array(z.object({
        bank_name: z.string().max(255, 'El nombre del banco no puede tener más de 255 caracteres'),
        account_number: z.string().max(255, 'El número de cuenta no puede tener más de 255 caracteres'),
    })).optional(),
})

type FormClientValues = z.infer<typeof ClientSchema>

export default ClientSchema
export type { FormClientValues }
