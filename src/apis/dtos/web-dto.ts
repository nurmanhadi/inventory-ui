export type WebResponse<T> = {
    data: T;
    message: string;
};

export type WebPagination<T> = {
    contents: T;
    page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
};