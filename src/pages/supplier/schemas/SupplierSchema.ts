import { z } from 'zod'

const SupplierSchema = z.object({
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
    type_Supplier: z
        .string()
        .min(1, 'El tipo de Suppliere es obligatorio')
        .max(255, 'El tipo de Suppliere no puede tener más de 255 caracteres'),
    website: z.string().max(255, 'El sitio web no puede tener más de 255 caracteres').optional(),
    postal_code: z.string().max(20, 'El código postal no puede tener más de 20 caracteres').optional(),
    country: z.string().max(100, 'El país no puede tener más de 100 caracteres').optional(),
    credit_day_limit: z.number().min(0, 'El límite de días de crédito no puede ser menor que 0').optional(),
    limit_credit: z.number().min(0, 'El límite de crédito no puede ser menor que 0').optional(),
    notes: z.string().optional(),
    company_id: z.string().optional(), // Asumimos que el company_id es un string, como el ID de la compañía
    phones: z
        .array(
            z.object({
                name: z.string().max(20, 'El nombre del teléfono no puede tener más de 20 caracteres'),
                phone: z.string().max(20, 'El número de teléfono no puede tener más de 20 caracteres'),
                type: z.string().max(20, 'El número de teléfono no puede tener más de 20 caracteres'),
            })
        )
        .optional(),
    emails: z
        .array(
            z.object({
                email: z.string().email('Debe ser un correo válido').max(255, 'El correo electrónico no puede tener más de 255 caracteres'),
                type: z.string().email('Debe ser un correo válido').max(255, 'El correo electrónico no puede tener más de 255 caracteres'),
            })
        )
        .optional(),
    bank_accounts: z
        .array(
            z.object({
                bank_name: z.string().max(255, 'El nombre del banco no puede tener más de 255 caracteres'),
                account_number: z.string().max(255, 'El número de cuenta no puede tener más de 255 caracteres'),
                type: z.string().email('Debe ser un correo válido').max(255, 'El correo electrónico no puede tener más de 255 caracteres'),
            })
        )
        .optional(),
    addresses: z
        .array(
            z.object({
                address: z.string().max(255, 'La dirección no puede tener más de 255 caracteres'),
                state: z.string().max(100, 'El estado no puede tener más de 100 caracteres'),
                city: z.string().max(100, 'La ciudad no puede tener más de 100 caracteres'),
                municipality: z.string().max(100, 'El municipio no puede tener más de 100 caracteres'),
                isBilling: z.boolean().optional(),
            })
        )
        .optional(),
})

type FormSupplierValues = z.infer<typeof SupplierSchema>

const DEFAULTSUPPLIERFORMVALUES = {
    legal_name: '',
    code_number: '',
    registration_number: '',
    type_Supplier: '',
    country: '',
    phones: [{ name: '', phone: '', type: '' }],
    emails: [{ email: '', type: '' }],
    bank_accounts: [{ bank_name: '', account_number: '', type: '' }],
    addresses: [
        {
            address: '',
            state: '',
            city: '',
            municipality: '',
            isBilling: false,
        },
    ],
    credit_days: 0,
    limit_credit: 0,
    notes: '',
}

export default SupplierSchema
export { DEFAULTSUPPLIERFORMVALUES, FormSupplierValues }
