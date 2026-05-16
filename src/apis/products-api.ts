import { API_URL } from "../configs/environtment";
import { ProductResponse } from "./dtos/product-dto";
import { WebPagination, WebResponse } from "./dtos/web-dto";

export const apiGetProducts = async (page: number, size: number, search?: string, categoryId?: bigint): Promise<WebPagination<ProductResponse[]>> => {
    let query: string = `?page=${page}&size=${size}`;
    if (search) {
        query += `&search=${search}`;
    }
    if (categoryId) {
        query += `&categoryId=${categoryId}`;
    }
    const response = await fetch(`${API_URL}/products${query}`, {
        method: "GET",
    });
    const web: WebResponse<WebPagination<ProductResponse[]>> = await response.json();
    if (response.status !== 200) {
        throw new Error(web.message);
    }

    const data: WebPagination<ProductResponse[]> = web.data;
    return data;
}