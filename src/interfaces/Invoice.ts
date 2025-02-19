export interface Invoice {
    id: number;
    number: string;
    date: string;
    status: 'pending' | 'paid' | 'overdue';
    total_amount: number;
    notes: string;
    client_id: number;
    company_id: number;
    lines: InvoiceLine[],
    payments: InvoicePayment[],
    due_dates: InvoiceDueDate[],
}

export interface InvoiceLine {
    id: number;
    description: string;
    quantity: number;
    unit_price: number;
    vat_rate: number;
    total_amount: number;
    invoice_id?: number;
    product_id?: number;
}

export interface InvoicePayment {
    id?: number;
    date: string;
    amount: number;
}

export interface InvoiceDueDate {
    id?: number;
    date: string;
    amount: number;
}
