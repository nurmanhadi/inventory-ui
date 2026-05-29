import { API_URL } from "../configs/environtment";
import { ProductAddRequest, ProductResponse, ProductUpdateRequest } from "./dtos/product-dto";
import { WebPagination, WebResponse } from "./dtos/web-dto";

export const apiGetProducts = async (page: number, size: number, search?: string, categoryId?: number): Promise<WebResponse<WebPagination<ProductResponse[]>>> => {
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
        throw new HttpError(web.message, response.status);
    }
    return web;
}

export const apiGetProductById = async (id: string): Promise<WebResponse<ProductResponse>> => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "GET",
    });
    const web: WebResponse<ProductResponse> = await response.json();
    if (response.status !== 200) {
        throw new HttpError(web.message, response.status);
    }
    return web;
}

export const apiAddProduct = async (request: ProductAddRequest): Promise<WebResponse<null>> => {
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });
    const web: WebResponse<null> = await response.json();
    if (response.status !== 201) {
        throw new HttpError(web.message, response.status);
    }
    return web
}

export const apiUpdateProduct = async (id: string, request: ProductUpdateRequest): Promise<WebResponse<null>> => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });
    const web: WebResponse<null> = await response.json();
    if (response.status !== 200) {
        throw new HttpError(web.message, response.status);
    }
    return web
}

export const apiDeleteProduct = async (id: string): Promise<WebResponse<null>> => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
    });
    const web: WebResponse<null> = await response.json();
    if (response.status !== 200) {
        throw new HttpError(web.message, response.status);
    }
    return web
}