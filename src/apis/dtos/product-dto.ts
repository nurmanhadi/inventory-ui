export type ProductResponse = {
    id: bigint;
    name: string;
    sku: string;
    stock: number;
    price: number;
    created_at: string;
    category_id: bigint;
}