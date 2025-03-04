import { Address, Email, Phone, BankAccount } from "@models/index"

class Client {
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

    constructor(
        id: number,
        registration_number: string,
        legal_name: string,
        type: 'NT' | 'JU' | 'GB' | 'OT',
        website: string,
        country: string,
        tax_rate: number,
        discount: number,
        notes: string,
        user_id: number,
        address: Address[],
        emails: Email[],
        phones: Phone[],
        bankAccounts: BankAccount[]
    ) {
        this.id = id
        this.registration_number = registration_number
        this.legal_name = legal_name
        this.type = type
        this.website = website
        this.country = country
        this.tax_rate = tax_rate
        this.discount = discount
        this.notes = notes
        this.user_id = user_id
        this.address = address
        this.emails = emails
        this.phones = phones
        this.bankAccounts = bankAccounts

        this.validateClient()
    }

    public validateClient(): void {
        this.validateRegistrationNumber()
        this.validateLegalName()
        this.validateTaxRate()
        this.validateDiscount()
        this.validateEmails()
        this.validatePhones()
        this.validateBankAccounts()
    }

    private validateRegistrationNumber(): void {
        if (!this.registration_number || this.registration_number.trim() === "") {
            throw new Error("The registration number is required.");
        }
    }

    private validateLegalName(): void {
        if (!this.legal_name || this.legal_name.trim() === "") {
            throw new Error("The legal name is required.");
        }
    }

    private validateTaxRate(): void {
        if (this.tax_rate < 0 || this.tax_rate > 100) {
            throw new Error("Invalid tax rate. It should be between 0 and 100.")
        }
    }
    private validateDiscount() {
        if (this.discount < 0 || this.discount > 100) {
            throw new Error("Invalid discount. It should be between 0 and 100.")
        }
    }

    private validateEmails(): void {
        this.emails.forEach((email) => {
            if (!(email instanceof Email)) {
                throw new Error("Invalid email format")
            }
        })
    }

    private validatePhones(): void {
        this.phones.forEach((phone) => {
            if (!(phone instanceof Phone)) {
                throw new Error("Invalid phone number format")
            }
        })
    }

    private validateBankAccounts(): void {
        this.bankAccounts.forEach((account) => {
            if (!(account instanceof BankAccount)) {
                throw new Error("Invalid bank account format")
            }
        })
    }
}

export default Client
