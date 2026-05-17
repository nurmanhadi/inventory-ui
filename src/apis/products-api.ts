import { API_URL } from "../configs/environtment";
import { ProductAddRequest, ProductResponse, ProductUpdateRequest } from "./dtos/product-dto";
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

export const apiGetProductById = async (id: string): Promise<ProductResponse> => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "GET",
    });
    const web: WebResponse<ProductResponse> = await response.json();
    if (response.status !== 200) {
        throw new Error(web.message);
    }
    return web.data;
}

export const apiAddProduct = async (request: ProductAddRequest): Promise<void> => {
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });
    if (response.status !== 200) {
        const web: WebResponse<null> = await response.json();
        throw new Error(web.message);
    }
}

export const apiUpdateProduct = async (id: string, request: ProductUpdateRequest): Promise<void> => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });
    if (response.status !== 200) {
        const web: WebResponse<null> = await response.json();
        throw new Error(web.message);
    }
}

export const apiDeleteProduct = async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
    });
    if (response.status !== 200) {
        const web: WebResponse<null> = await response.json();
        throw new Error(web.message);
    }
}