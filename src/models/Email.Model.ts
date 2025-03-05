export class Email {
    id: number
    email: string
    type: 'Work' | 'Personal'

    constructor(id: number, email: string, type: 'Work' | 'Personal') {
        this.id = id
        this.email = email
        this.type = type

        if (!this.isValidEmail(email)) {
            throw new Error('Invalid Email')
        }
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }
}
