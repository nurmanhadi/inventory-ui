import { Component, createSignal, For, onMount, Show } from "solid-js";
import { CategoryResponse } from "../../apis/dtos/category-dto";
import { closeModal, showModal } from "../../helpers/modal";
import { apiUpdateProduct } from "../../apis/products-api";
import { apiGetCategories } from "../../apis/category-api";
import { ProductResponse, ProductUpdateRequest } from "../../apis/dtos/product-dto";
import LoadingLg from "../LoadingLg";

const UpdateProduct: Component<{ id: string, product: ProductResponse, onSuccess: () => Promise<void> }> = (props) => {
    const [name, setName] = createSignal<string>("")
    const [sku, setSku] = createSignal<string>("")
    const [price, setPrice] = createSignal<number>(0)
    const [categoryId, setCategoryId] = createSignal<number>()
    const [load, setLoad] = createSignal<boolean>(false)
    const [categories, setCategories] = createSignal<CategoryResponse[]>()
    const fetchCategories = async () => {
        try {
            const web = await apiGetCategories()
            setCategories(web.data)
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        try {
            setLoad(true)
            const request: ProductUpdateRequest = {
                ...(name().trim() && { name: name().trim() }),
                ...(sku().trim() && { sku: sku().trim() }),
                ...(price() != null && { price: price() }),
                ...(categoryId() != null && { category_id: categoryId() }),
            }
            const web = await apiUpdateProduct(props.id, request)
            alert(web.message)
            await props.onSuccess()
            closeModal("my_modal_3")
            setName("")
            setSku("")
            setPrice(0)
            setCategoryId()
        } catch (error) {
            console.error(error);
        } finally {
            setLoad(false)
        }
    }
    onMount(() => {
        fetchCategories()
    })
    return (
        <div>
            <button class="btn" onClick={() => showModal("my_modal_3")}>Add</button>
            <dialog id="my_modal_3" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit}>
                        {/* name */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Name</legend>
                            <input
                                disabled={load()}
                                value={props.product.name}
                                onInput={(e) => setName(e.target.value)}
                                type="text"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* sku */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Sku</legend>
                            <input
                                disabled={load()}
                                value={props.product.sku}
                                onInput={(e) => setSku(e.target.value)}
                                type="text"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* price */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Price</legend>
                            <input
                                disabled={load()}
                                value={props.product.price}
                                onInput={(e) => setPrice(Number(e.target.value))}
                                type="number"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* category */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Category</legend>
                            <select
                                disabled={load()}
                                value={props.product.category_id}
                                onChange={(e) => setCategoryId(Number(e.target.value))}
                                class="select w-full"
                            >
                                <option disabled value="" selected>Select Category</option>
                                <Show when={categories()} fallback={<LoadingLg />}>
                                    <For each={categories()}>
                                        {(item, intex) => (
                                            <option value={item.id.toString()}>
                                                {item.name}
                                            </option>
                                        )}
                                    </For>
                                </Show>
                            </select>
                        </fieldset>
                        <div class="flex justify-center mt-4 px-6">
                            <button type="submit" class="btn btn-primary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateProduct;