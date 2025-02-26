export interface Supplier {
    id: number;
    code_number: string;
    registration_number: string;
    legal_name: string;
    type_supplier: string;
    website: string;
    address: string;
    city: string;
    state: string;
    municipality: string;
    postal_code: string;
    country: string;
    credit_day_limit: number;
    limit_credit: number;
    notes: string;
    company_id: number;
    phones: SupplierPhone[];
    emails: SupplierEmail[];
    bank_accounts: SupplierBankAccount[];
}

export interface SupplierEmail {
    id?: number;
    email: string;
}

export interface SupplierPhone {
    id?: number;
    name: string;
    phone: string;
}

export interface SupplierBankAccount {
    id?: number;
    bank_name: string;
    account_number: string;
}