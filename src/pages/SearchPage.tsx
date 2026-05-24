import { Component, createEffect, createSignal } from "solid-js";
import { apiGetProducts } from "../apis/products-api";
import { ProductResponse } from "../apis/dtos/product-dto";

const SearchPage: Component<{}> = (props) => {
    const [products, setProducts] = createSignal<ProductResponse[]>();
    const [page, setPage] = createSignal<number>(1);
    const [totalPages, setTotalPages] = createSignal<number>(1);

    const fetchProducts = async (page: number) => {
        const size: number = 20;
        try {
            const web = await apiGetProducts(page, size);
            setProducts(web.data.contents);
            setTotalPages(web.data.total_pages);
        } catch (error) {
            console.error(error);
        }
    }
    createEffect(() => {
        fetchProducts(page());
    })
    return (
        <div>
            search
        </div>
    );
};

export default SearchPage;