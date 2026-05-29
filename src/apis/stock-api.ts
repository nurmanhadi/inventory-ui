import { API_URL } from "../configs/environtment";
import { StockPeriod, StockType } from "../helpers/stock-type";
import { StockRequest, StockResponse } from "./dtos/stock-dto";
import { WebPagination, WebResponse } from "./dtos/web-dto";

export const apiAddStock = async (stock: StockRequest, type: StockType): Promise<WebResponse<null>> => {
    let query = ""
    if (type === StockType.In) {
        query += "in"
    } else {
        query += "out"
    }
    const response = await fetch(`${API_URL}/stocks/${query}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(stock)
    });
    const web: WebResponse<null> = await response.json();
    if (response.status !== 200) {
        throw new HttpError(web.message, response.status);
    }
    return web
}
export const apiStockHistory = async (page: number, size: number, type: StockType, period: StockPeriod, productId?: string): Promise<WebResponse<WebPagination<StockResponse[]>>> => {
    let query: string = `?page=${page}&size=${size}&period=${period}`
    if (productId) {
        query += `&productId=${productId}`
    }
    if (type !== StockType.All) {
        query += `&type=${type}`
    }
    const response = await fetch(`${API_URL}/stocks/history${query}`, {
        method: "GET",
    });
    const web: WebResponse<WebPagination<StockResponse[]>> = await response.json();
    if (response.status !== 200) {
        throw new HttpError(web.message, response.status);
    }
    return web
}