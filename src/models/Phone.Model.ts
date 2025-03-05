export class Phone {
    id: number
    name: string
    phone: string
    type: 'Work' | 'Personal'

    constructor(id: number, name: string, phone: string, type: 'Work' | 'Personal') {
        this.id = id
        this.name = name
        this.phone = phone
        this.type = type

        if (!this.isValidPhone(phone)) {
            throw new Error('Invalid phone number')
        }
    }

    private isValidPhone(phone: string): boolean {
        const phoneRegex = /^\+?[0-9]{1,4}?[-.●]?\(?\d{1,3}?\)?[-.●]?\d{1,4}[-.●]?\d{1,4}[-.●]?\d{1,9}$/
        return phoneRegex.test(phone)
    }
}