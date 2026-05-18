import { Component, createEffect, createSignal, onMount, Show } from "solid-js";
import ProductList from "../components/products/ProductList";
import { apiGetProducts } from "../apis/products-api";
import { ProductResponse } from "../apis/dtos/product-dto";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import AddProduct from "../components/products/AddProduct";

const ProductPage: Component<{}> = (props) => {
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
    onMount(() => {
        fetchProducts(page());
    })
    return (
        <Show when={products()} fallback={<Loading />}>
            <AddProduct onSuccess={() => fetchProducts(page())} />
            <hr class="my-6" />
            <ProductList products={products()!} />
            <div class="flex justify-end mt-4">
                <Pagination page={page()} totalPages={totalPages()} onPageChange={setPage} />
            </div>
        </Show>
    );
};

export default ProductPage;