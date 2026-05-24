import { Component, createEffect, createSignal, onMount, Show } from "solid-js";
import ProductList from "../components/products/ProductList";
import { apiGetProducts } from "../apis/products-api";
import { ProductResponse } from "../apis/dtos/product-dto";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import AddProduct from "../components/products/AddProduct";
import { useSearchParams } from "@solidjs/router";

const ProductPage: Component<{}> = (props) => {
    const [query, setQuery] = useSearchParams()
    const [products, setProducts] = createSignal<ProductResponse[]>();
    const [page, setPage] = createSignal<number>(1);
    const [totalPages, setTotalPages] = createSignal<number>(1);
    const search = Array.isArray(query.s) ? query.s[0] : query.s


    const fetchProducts = async (page: number, search?: string) => {
        const size: number = 20;
        try {
            const web = await apiGetProducts(page, size, search);
            setProducts(web.data.contents);
            setTotalPages(web.data.total_pages);
        } catch (error) {
            console.error(error);
        }
    }
    createEffect(() => {
        fetchProducts(page(), search);
    })
    return (
        <Show when={products()} fallback={<Loading />}>
            <Show when={!search} fallback>
                <AddProduct onSuccess={() => fetchProducts(page())} />
                <hr class="my-6" />
            </Show>
            <ProductList products={products()!} />
            <div class="flex justify-end mt-4">
                <Pagination page={page()} totalPages={totalPages()} onPageChange={setPage} />
            </div>
        </Show>
    );
};

export default ProductPage;