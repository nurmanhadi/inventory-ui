import { StockType } from "../../helpers/stock-type";
import { ProductMinimalResponse } from "./product-dto";

export type StockResponse = {
    id: number;
    type: StockType
    quantity: number;
    created_at: string;
    product: ProductMinimalResponse;
}
export type StockRequest = {
    product_id: number;
    quantity: number;
}
