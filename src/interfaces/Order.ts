export interface Order {
    id: number;
    number: string;
    date: string;
    status: 'pending' | 'accept' | 'refused';
    total_amount: number;
    notes: string;
    client_id: number;
    company_id: number;
    lines: OrderLines[];
}

export interface OrderLines {
    id?: number;
    description: string;
    quantity: number;
    unit_price: number;
    vat_rate: number;
    total_amount: number;
    order_id: number;
    product_id: number;
}

