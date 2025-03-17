export interface BankAccount {
    id: number,
    name: string,
    accountNumber: string,
    type: 'AH' | 'CO' | 'OT';
}