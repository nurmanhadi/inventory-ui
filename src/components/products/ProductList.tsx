import { Component, For } from "solid-js";
import { ProductResponse } from "../../apis/dtos/product-dto";
import { useNavigate } from "@solidjs/router";

const ProductList: Component<{ products: ProductResponse[] }> = (props) => {
    const navigate = useNavigate();
    return (
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Sku</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={props.products}>
                        {(item, index) => (
                            <tr onClick={() => navigate(`/products/${item.id}`)}>
                                <th>{index() + 1}</th>
                                <td>{item.sku}</td>
                                <td>{item.name}</td>
                                <td>{item.stock}</td>
                                <td>{item.price.toFixed(2)}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;