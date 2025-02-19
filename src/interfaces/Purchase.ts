export interface Purchase {
    id: number;
    number: string;
    date: string;
    status: 'pending' | 'paid' | 'overdue';
    total_amount: number;
    notes: string;
    supplier_id: number;
    company_id: number;
    lines: PurchaseLine[];
    payments: PurchasePayment[];
    due_dates: PurchaseDueDate[];
}

export interface PurchaseLine {
    id: number;
    description: string;
    quantity: number;
    unit_price: number;
    vat_rate: number;
    total_amount: number;
    purchase_id?: number;
    product_id?: number;
}

export interface PurchasePayment {
    id?: number;
    date: string;
    amount: number;
}

export interface PurchaseDueDate {
    id?: number;
    date: string;
    amount: number;
}