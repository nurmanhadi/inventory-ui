export type ProductResponse = {
    id: bigint;
    name: string;
    sku: string;
    stock: number;
    price: number;
    created_at: string;
    category_id: bigint;
}
export type ProductMinimalResponse = {
    id: bigint;
    name: string;
    sku: string;
}
export type ProductAddRequest = {
    name: string;
    sku: string;
    stock: number;
    price: number;
    category_id: bigint;
}
export type ProductUpdateRequest = {
    name: string;
    sku: string;
    stock: number;
    price: number;
    category_id: bigint;
}