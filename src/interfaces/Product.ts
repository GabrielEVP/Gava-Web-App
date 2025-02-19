export interface Product {
    id: number;
    name: string;
    description: string;
    barcode: string;
    reference_code: string;
    purchase_price: number;
    vat_rate: number;
    stock_quantity: number;
    units_per_box: number;
    notes: string;
    company_id: number;
    supplier_id: number;
    prices: ProductPrice[];
}

export interface ProductsCategories {
    id: number;
    category_id: number;
    product_id: number;
}

export interface Category {
    id?: number;
    name: string;
    description: string;
    company_id: number;
}

export interface ProductPrice {
    id?: number;
    name: string;
    price: number;
    product_id: number;
}
