import { API_URL } from "../configs/environtment";
import { StockPeriod, StockType } from "../helpers/stock-type";
import { StockRequest, StockResponse } from "./dtos/stock-dto";
import { WebPagination, WebResponse } from "./dtos/web-dto";

export const apiStockIn = async (stock: StockRequest): Promise<void> => {
    const response = await fetch(`${API_URL}/stocks/in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(stock)
    });
    if (response.status !== 200) {
        const web: WebResponse<null> = await response.json();
        throw new Error(web.message);
    }
}
export const apiStockOut = async (stock: StockRequest): Promise<void> => {
    const response = await fetch(`${API_URL}/stocks/out`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(stock)
    });
    if (response.status !== 200) {
        const web: WebResponse<null> = await response.json();
        throw new Error(web.message);
    }
}
export const apiStockHistory = async (page: Number, size: Number, period: StockPeriod, productId?: string, type?: StockType): Promise<WebPagination<StockResponse[]>> => {
    let query: string = `?page=${page}&size=${size}&period=${period}`
    if (productId) {
        query += `&productId=${productId}`
    }
    if (type) {
        query += `&type=${type}`
    }
    const response = await fetch(`${API_URL}/stocks/history${query}`, {
        method: "GET",
    });
    const web: WebResponse<WebPagination<StockResponse[]>> = await response.json();
    if (response.status !== 200) {
        throw new Error(web.message);
    }
    const data = web.data
    return data
}