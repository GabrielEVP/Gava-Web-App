import { z } from 'zod'

export const AddressSchema = z.object({
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
  isBilling: z.boolean(),
})

export type FormAddressSchema = z.infer<typeof AddressSchema>

export const DEFAULTADDRESSFORMVALUE = {
  address: '',
  state: '',
  city: '',
  municipality: '',
  postalCode: '',
  isBilling: false,
}
