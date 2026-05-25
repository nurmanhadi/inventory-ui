import { Component, For } from "solid-js";
import { ProductResponse } from "../../apis/dtos/product-dto";

const ProductMinimalList: Component<{ products: ProductResponse[], onProductId: (id: number) => void }> = (props) => {

    return (
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Sku</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={props.products}>
                        {(item, index) => (
                            <tr onClick={() => props.onProductId(item.id)}>
                                <th>{index() + 1}</th>
                                <td>{item.sku}</td>
                                <td>{item.name}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    );
};

export default ProductMinimalList;