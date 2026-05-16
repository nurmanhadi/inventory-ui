import { Component } from "solid-js";
import { ProductResponse } from "../../apis/dtos/product-dto";

const ProductList: Component<{ products: ProductResponse[] }> = (props) => {

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
                    {props.products.map((e, i) => (
                        <tr accessKey={e.id.toString()}>
                            <th>{i + 1}</th>
                            <td>{e.sku}</td>
                            <td>{e.name}</td>
                            <td>{e.stock}</td>
                            <td>{e.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;