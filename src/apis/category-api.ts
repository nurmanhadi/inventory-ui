import { API_URL } from "../configs/environtment";
import { CategoryRequest, CategoryResponse } from "./dtos/category-dto";
import { WebResponse } from "./dtos/web-dto";

export const apiAddCategory = async (category: CategoryRequest): Promise<WebResponse<CategoryResponse>> => {
    const response = await fetch(`${API_URL}/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    });
    const web: WebResponse<CategoryResponse> = await response.json()
    if (response.status !== 201) {
        throw new Error(web.message)
    }
    return web
}
export const apiUpdateCategory = async (id: string, category: CategoryRequest): Promise<WebResponse<null>> => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    });
    const web: WebResponse<null> = await response.json()
    if (response.status !== 200) {
        throw new Error(web.message)
    }
    return web
}
export const apiDeleteCategory = async (id: string): Promise<WebResponse<null>> => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "DELETE",
    });
    const web: WebResponse<null> = await response.json()
    if (response.status !== 200) {
        throw new Error(web.message)
    }
    return web
}
export const apiGetCategories = async (): Promise<WebResponse<CategoryResponse[]>> => {
    const response = await fetch(`${API_URL}/categories`, {
        method: "GET",
    });
    const web: WebResponse<CategoryResponse[]> = await response.json();
    if (response.status !== 200) {
        throw new Error(web.message);
    }
    return web
}
export const apiGetCategory = async (id: string): Promise<WebResponse<CategoryResponse>> => {
    const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "GET",
    });
    const web: WebResponse<CategoryResponse> = await response.json();
    if (response.status !== 200) {
        throw new Error(web.message);
    }
    return web
} 