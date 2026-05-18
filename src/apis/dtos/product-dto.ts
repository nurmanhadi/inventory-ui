export type ProductResponse = {
    id: number;
    name: string;
    sku: string;
    stock: number;
    price: number;
    created_at: string;
    category_id: number;
}
export type ProductMinimalResponse = {
    id: number;
    name: string;
    sku: string;
}
export type ProductAddRequest = {
    name: string;
    sku: string;
    stock: number;
    price: number;
    category_id: number;
}
export type ProductUpdateRequest = {
    name?: string;
    sku?: string;
    stock?: number;
    price?: number;
    category_id?: number;
}