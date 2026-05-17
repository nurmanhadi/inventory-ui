import { Component, createEffect, createResource, createSignal, onMount, Show } from "solid-js";
import ProductDetail from "../components/products/ProductDetail";
import { useParams } from "@solidjs/router";
import { ProductResponse } from "../apis/dtos/product-dto";
import { apiGetProductById } from "../apis/products-api";
import Loading from "../components/Loading";

const ProductDetailPage: Component<{}> = (props) => {
    const params = useParams();
    const [product, setProduct] = createSignal<ProductResponse>();
    const fetchproduct = async (id: string) => {
        try {
            const data = await apiGetProductById(id);
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    }
    onMount(() => {
        fetchproduct(params.id!);
    })
    return (
        <Show when={product()} fallback={<Loading />}>
            <ProductDetail product={product()!} />
            <hr class="my-6" />
        </Show>
    );
};

export default ProductDetailPage;