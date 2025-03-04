export class BankAccount {
    id: number;
    name: string;
    accountNumber: string;
    type: 'AH' | 'CO' | 'OT';

    constructor(id: number, name: string, accountNumber: string, type: 'AH' | 'CO' | 'OT') {
        this.id = id;
        this.name = name;
        this.accountNumber = accountNumber;
        this.type = type;

        if (!this.isValidAccountNumber(accountNumber)) {
            throw new Error('Invalid account number');
        }
    }

    private isValidAccountNumber(accountNumber: string): boolean {
        const accountNumberRegex = /^[0-9]{10,20}$/;
        return accountNumberRegex.test(accountNumber);
    }
}

export default BankAccount
