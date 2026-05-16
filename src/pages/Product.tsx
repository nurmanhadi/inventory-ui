import { Component, createEffect, createSignal } from "solid-js";
import ProductList from "../components/products/ProductList";
import { apiGetProducts } from "../apis/products-api";
import { ProductResponse } from "../apis/dtos/product-dto";
import { WebPagination } from "../apis/dtos/web-dto";
import Pagination from "../components/Pagination";

const Product: Component<{}> = (props) => {
    const [products, setProducts] = createSignal<ProductResponse[]>([]);
    const [page, setPage] = createSignal<number>(1);
    const [totalPages, setTotalPages] = createSignal<number>(1);

    const fetchProducts = async (page: number) => {
        const size: number = 10;
        try {
            const data: WebPagination<ProductResponse[]> = await apiGetProducts(page, size);
            setProducts(data.contents);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error(error);
        }
    }
    createEffect(() => {
        fetchProducts(page());
    })
    return (
        <div>
            <ProductList products={products()} />
            <div class="flex justify-end mt-4">
                <Pagination page={page()} totalPages={totalPages()} onPageChange={setPage} />
            </div>
        </div>
    );
};

export default Product;