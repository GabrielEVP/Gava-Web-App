import { z } from 'zod'

export const ClientSchema = z.object({
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
    tax_rate: z.number(),
    discount: z.number(),
    notes: z.string().optional(),
    addresses: z.array(
        z.object({
            address: z
                .string()
                .max(255, 'La direccion solo puede tener como maximo 255 Caracteres'),
            state: z
                .string()
                .max(255, 'el estado solo puede tener como maximo 255 caracteres'),
            city: z
                .string()
                .max(255, 'La ciudad solo puede tener como maximo 255 Caracteres'),
            municipality: z
                .string()
                .max(255, 'El municipio solo puede tener como maximo 255 Caracteres'),
            postalCode: z
                .string()
                .max(15, 'El codigo postal solo puede tener como maximo 15 Caracteres'),
            isBilling: z.boolean()
        }),
    ),
    bankAccounts: z.array(
        z.object({
            name: z.string().max(50, 'El nombre tiene como maximo 50 Caracteres'),
            accountNumber: z
                .string()
                .max(50, 'El numero de cuenta tiene como maximo 50 Caracteres'),
            type: z.enum(['AH', 'CO', 'OT']),
        })
    ),
    emails: z.array(
        z.object({
            email: z
                .string()
                .email('Debe ser un correo válido')
                .max(255, 'El correo electrónico no puede tener más de 255 caracteres'),
            type: z.enum(['work', 'personal']),
        })
    ),
    phones: z.array(
        z.object({
            name: z
                .string()
                .max(20, 'El nombre del teléfono no puede tener más de 20 caracteres'),
            phone: z
                .string()
                .max(20, 'El número de teléfono no puede tener más de 20 caracteres'),
            type: z.enum(['work', 'personal']),
        })
    ),
})

export type FormClient = z.infer<typeof ClientSchema>

export const DEFAULTCLIENTFORMVALUE = {
    legal_name: '222',
    registration_number: '',
    type: 'OT' as 'NT' | 'JU' | 'GB' | 'OT',
    country: '',
    tax_rate: 5,
    discount: 0,
    notes: '',
    addresses: [],
    bankAccounts: [{
        name: '',
        accountNumber: '',
        type: 'OT' as 'AH' | 'CO' | 'OT'
    }],
    phones: [{
        name: '',
        phone: '',
        type: 'work' as 'work' | 'personal'
    }],
    emails: [{
        email: '',
        type: 'work' as 'work' | 'personal'
    }],
}

