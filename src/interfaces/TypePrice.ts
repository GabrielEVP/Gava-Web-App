export interface TypePrice {
    id: number;
    name: string;
    description: string;
    type: 'fixed' | 'percentage';
    margin: number;
    company_id: number;
}