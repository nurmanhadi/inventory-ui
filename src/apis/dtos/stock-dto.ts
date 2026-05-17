import { StockType } from "../../helpers/stock-type";
import { ProductMinimalResponse } from "./product-dto";

export type StockResponse = {
    id: bigint;
    type: StockType
    quantity: Number;
    created_at: string;
    product: ProductMinimalResponse;
}
export type StockRequest = {
    product_id: bigint;
    quantity: Number;
}
