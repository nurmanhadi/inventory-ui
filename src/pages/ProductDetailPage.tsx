import { Component, createEffect, createResource, createSignal, onMount, Show } from "solid-js";
import ProductDetail from "../components/products/ProductDetail";
import { useParams } from "@solidjs/router";
import { ProductResponse } from "../apis/dtos/product-dto";
import { apiGetProductById } from "../apis/products-api";
import Loading from "../components/Loading";
import UpdateProduct from "../components/products/UpdateProduct";
import StockHistoryList from "../components/stock/StockHistoryList";
import { catchError } from "../helpers/catch-error";

const ProductDetailPage: Component<{}> = (props) => {
    const params = useParams();
    const [product, setProduct] = createSignal<ProductResponse>();
    const fetchproduct = async (id: string) => {
        try {
            const web = await apiGetProductById(id);
            setProduct(web.data);
        } catch (error) {
            await catchError(error)
        }
    }
    onMount(() => {
        fetchproduct(params.id!);
    })
    return (
        <Show when={product()} fallback={<Loading />}>
            <ProductDetail product={product()!} />
            <hr class="my-6" />
            <UpdateProduct id={params.id!} product={product()!} onSuccess={() => fetchproduct(params.id!)} />
            <hr class="my-6" />
            <StockHistoryList id={params.id!} />
        </Show>
    );
};

export default ProductDetailPage;