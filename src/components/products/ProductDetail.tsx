import { Component } from "solid-js";
import { ProductResponse } from "../../apis/dtos/product-dto";

const ProductDetail: Component<{ product: ProductResponse }> = (props) => {
    return (
        <div class="flex flex-col md:flex-row gap-3">
            {/* product header */}
            <div class="card p-6 shadow w-full">
                <h1 class="text-2xl font-bold">{props.product.name}</h1>

                <p class="text-gray-500">SKU: {props.product.sku}</p>

                <div class="mt-4">
                    <p class="text-3xl font-semibold">
                        Rp{props.product.price.toFixed(2)}
                    </p>
                </div>

                <div class="mt-4">
                    <span class={`badge ${props.product.stock > 0 ? "badge-success" : "badge-error"}`}>
                        Stock: {props.product.stock}
                    </span>
                </div>
            </div>
            {/* product info */}
            <div class="card p-6 shadow w-full">
                <h2 class="text-lg font-semibold mb-4">Product Info</h2>
                <div class="space-y-2 text-sm">
                    <p>ID: {props.product.id}</p>
                    <p>SKU: {props.product.sku}</p>
                    <p>Stock: {props.product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;