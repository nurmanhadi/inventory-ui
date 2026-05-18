import { Component, createEffect, createSignal, onMount, Show } from "solid-js";
import ProductList from "../components/products/ProductList";
import { apiGetProducts } from "../apis/products-api";
import { ProductResponse } from "../apis/dtos/product-dto";
import { WebPagination } from "../apis/dtos/web-dto";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const ProductPage: Component<{}> = (props) => {
    const [products, setProducts] = createSignal<ProductResponse[]>();
    const [page, setPage] = createSignal<number>(1);
    const [totalPages, setTotalPages] = createSignal<number>(1);

    const fetchProducts = async (page: number) => {
        const size: number = 20;
        try {
            const data: WebPagination<ProductResponse[]> = await apiGetProducts(page, size);
            setProducts(data.contents);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error(error);
        }
    }
    onMount(() => {
        fetchProducts(page());
    })
    return (
        <Show when={products()} fallback={<Loading />}>
            <ProductList products={products()!} />
            <div class="flex justify-end mt-4">
                <Pagination page={page()} totalPages={totalPages()} onPageChange={setPage} />
            </div>
        </Show>
    );
};

export default ProductPage;