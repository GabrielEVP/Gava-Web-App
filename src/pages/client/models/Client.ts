export interface Client {
    id: number;
    code_number: string;
    registration_number: string;
    legal_name: string;
    type_client: string;
    website: string;
    address: string;
    city: string;
    state: string;
    municipality: string;
    postal_code: string;
    country: string;
    credit_day_limit: number;
    limit_credit: number;
    tax_rate: number;
    discount: number;
    notes: string;
    company_id: number;
    emails: ClientEmail[];
    phones: ClientPhone[];
    bank_accounts: ClientAccountBank[];
}

export interface ClientEmail {
    id?: number;
    email: string;
}

export interface ClientPhone {
    id?: number;
    name: string;
    phone: string;
}

export interface ClientAccountBank {
    id?: number;
    bank_name: string;
    account_number: string;
}
