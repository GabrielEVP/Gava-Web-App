import { z } from 'zod'
import {
    ContactShema,
    DEFAULTCONTACTFORMVALUE,
    AddressSchema,
    DEFAULTADDRESSFORMVALUE,
    BankAccountSchema,
    DEFAULTBANKACCOUNTFORMVALUE,
    EmailSchema,
    DEFAULTEMAILFORMVALUE,
    PhoneSchema,
    DEFAULTPHONEFORMVALUE
} from '@schemas/index'

export const SupplierSchema = z.object({
    ContactShema,
    addresses: AddressSchema.shape.addresses,
    BankAccounts: BankAccountSchema.shape.bankAccounts,
    EmailSchema: EmailSchema.shape.emails,
    PhoneSchema: PhoneSchema.shape.phones
})

export type FormSupplier = z.infer<typeof SupplierSchema>

export const DEFAULTCLIENTFORMVALUE = {
    DEFAULTCONTACTFORMVALUE,
    addresses: [DEFAULTADDRESSFORMVALUE],
    bankAccounts: [DEFAULTBANKACCOUNTFORMVALUE],
    phones: [DEFAULTPHONEFORMVALUE],
    emails: [DEFAULTEMAILFORMVALUE],
}

