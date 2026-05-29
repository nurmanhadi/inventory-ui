import { Component, createEffect, createSignal, Show } from "solid-js";
import { StockType } from "../../helpers/stock-type";
import { apiAddStock } from "../../apis/stock-api";
import { StockRequest } from "../../apis/dtos/stock-dto";
import LoadingSm from "../LoadingSm";
import { ProductResponse } from "../../apis/dtos/product-dto";
import { apiGetProducts } from "../../apis/products-api";
import SearchForm from "../SearchForm";
import ProductMinimalList from "../products/ProductMinimalList";
import LoadingLg from "../LoadingLg";
import { showAlertSuccess } from "../../helpers/alert";
import { catchError } from "../../helpers/catch-error";

const AddStock: Component<{ onSuccess: () => Promise<void> }> = (props) => {
    const [quantity, setQuantity] = createSignal<number>()
    const [type, setType] = createSignal<StockType>()
    const [load, setLoad] = createSignal<boolean>(false)
    const [products, setProducts] = createSignal<ProductResponse[]>();
    const [search, setSearch] = createSignal<string>();
    const [productId, setProductId] = createSignal<number>();

    const fetchProducts = async (search?: string) => {
        try {
            const web = await apiGetProducts(1, 5, search);
            setProducts(web.data.contents);
        } catch (error) {
            await catchError(error)
        }
    }

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        try {
            setLoad(true)
            const request: StockRequest = {
                product_id: productId()!,
                quantity: quantity()!
            }
            const web = await apiAddStock(request, type()!)
            await props.onSuccess()
            setQuantity()
            setType()
            await showAlertSuccess(web.message)
        } catch (error) {
            await catchError(error)
        } finally {
            setLoad(false)
        }
    }
    createEffect(() => {
        fetchProducts(search())
    })
    return (
        <div class="grid grid-cols-2 gap-2">
            <div class="shadow p-3">
                <form onSubmit={handleSubmit}>
                    <h2 class="text-md font-bold">Product ID: {productId() || "0"}</h2>
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Quantity</legend>
                        <input
                            required
                            value={quantity()}
                            onInput={(e) => setQuantity(Number(e.currentTarget.value))}
                            type="number"
                            class="input"
                            placeholder="Type here" />
                    </fieldset>
                    <div class="flex gap-2 my-3">
                        <label class="flex gap-1 items-center">
                            <span>IN</span>
                            <input
                                value="IN"
                                checked={type() === "IN"}
                                onChange={(e) => setType(e.currentTarget.value as StockType)}
                                type="radio"
                                name="radio-1"
                                class="radio" />
                        </label>
                        <label class="flex gap-1 items-center">
                            <span>OUT</span>
                            <input
                                value="OUT"
                                checked={type() === "OUT"}
                                onChange={(e) => setType(e.currentTarget.value as StockType)}
                                type="radio"
                                name="radio-1"
                                class="radio" />
                        </label>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit" class="btn btn-primary w-full">
                            {!load() ? "Submit" : <LoadingSm />}
                        </button>
                    </div>
                </form>
            </div>
            <div class="shadow p-3">
                <SearchForm onSearch={setSearch} />
                <Show when={products()} fallback={<LoadingLg />}>
                    <ProductMinimalList products={products()!} onProductId={setProductId} />
                </Show>
            </div>
        </div>
    );
};

export default AddStock;