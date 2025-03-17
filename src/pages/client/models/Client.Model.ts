import { Address, Email, Phone, BankAccount } from "@models/index"

export interface Client {
    id: number
    registration_number: string
    legal_name: string
    type: 'NT' | 'JU' | 'GB' | 'OT'
    website: string
    country: string
    tax_rate: number
    discount: number
    notes: string
    user_id: number
    address: Address[]
    emails: Email[]
    phones: Phone[]
    bankAccounts: BankAccount[]
}