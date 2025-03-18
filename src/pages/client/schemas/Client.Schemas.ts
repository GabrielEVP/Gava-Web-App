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

export const ClientSchema = z.object({
    ContactShema,
    addresses: AddressSchema.shape.addresses,
    bankAccounts: BankAccountSchema.shape.bankAccounts,
    emails: EmailSchema.shape.emails,
    phones: PhoneSchema.shape.phones
})

export type FormClient = z.infer<typeof ClientSchema>

export const DEFAULTCLIENTFORMVALUE = {
    DEFAULTCONTACTFORMVALUE,
    addresses: [DEFAULTADDRESSFORMVALUE],
    bankAccounts: [DEFAULTBANKACCOUNTFORMVALUE],
    phones: [DEFAULTPHONEFORMVALUE],
    emails: [DEFAULTEMAILFORMVALUE],
}

