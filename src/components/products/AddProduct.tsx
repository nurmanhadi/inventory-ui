import { Component, createSignal, For, onMount, Show } from "solid-js";
import { ProductAddRequest } from "../../apis/dtos/product-dto";
import { apiAddProduct } from "../../apis/products-api";
import { closeModal, showModal } from "../../helpers/modal";
import { CategoryResponse } from "../../apis/dtos/category-dto";
import { apiGetCategories } from "../../apis/category-api";
import LoadingLg from "../LoadingLg";

const AddProduct: Component<{ onSuccess: () => Promise<void> }> = (props) => {
    const [name, setName] = createSignal<string>("")
    const [sku, setSku] = createSignal<string>("")
    const [stock, setStock] = createSignal<number>(0)
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
            const request: ProductAddRequest = {
                name: name(),
                sku: sku(),
                stock: stock(),
                price: price(),
                category_id: categoryId()!
            }
            const web = await apiAddProduct(request)
            alert(web.message)
            await props.onSuccess()
            closeModal("my_modal_3")
            setName("")
            setSku("")
            setStock(0)
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
                                required
                                disabled={load()}
                                value={name()}
                                onInput={(e) => setName(e.currentTarget.value)}
                                type="text"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* sku */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Sku</legend>
                            <input
                                required
                                disabled={load()}
                                value={sku()}
                                onInput={(e) => setSku(e.currentTarget.value)}
                                type="text"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* stock */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Stock</legend>
                            <input
                                required
                                disabled={load()}
                                value={stock()}
                                onInput={(e) => setStock(Number(e.currentTarget.value))}
                                type="number"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* price */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Price</legend>
                            <input
                                required
                                disabled={load()}
                                value={price()}
                                onInput={(e) => setPrice(Number(e.currentTarget.value))}
                                type="number"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* category */}
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Category</legend>
                            <select
                                required
                                disabled={load()}
                                value={categoryId()?.toString() ?? ""}
                                onChange={(e) => setCategoryId(Number(e.currentTarget.value))}
                                class="select w-full"
                            >
                                <option disabled value="" selected>Select Category</option>
                                <Show when={categories()} fallback={<LoadingLg />}>
                                    <For each={categories()}>
                                        {(item, index) => (
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

export default AddProduct;