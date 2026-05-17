import { Component, createSignal } from "solid-js";
import { apiAddCategory } from "../../apis/category-api";
import { CategoryRequest } from "../../apis/dtos/category-dto";
import LoadingSm from "../LoadingSm";

const AddCategory: Component<{}> = (props) => {
    const [name, setName] = createSignal<string>("")
    const [load, setLoad] = createSignal<boolean>(false)
    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        try {
            setLoad(true)
            const category: CategoryRequest = {
                name: name()
            }
            const web = await apiAddCategory(category)
            alert(web.message)
            setName("")
        } catch (error) {
            console.error(error);
        } finally {
            setLoad(false)
        }
    }

    const showModal3 = () => {
        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
        if (modal) {
            modal.showModal()
        }
    }
    return (
        <div>
            <button class="btn" onClick={showModal3}>Add</button>
            <dialog id="my_modal_3" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit}>
                        <fieldset class="fieldset">
                            <legend class="fieldset-legend">Name</legend>
                            <input
                                disabled={load()}
                                value={name()}
                                onInput={(e) => setName(e.target.value)}
                                type="text"
                                class="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        <div class="flex justify-center mt-3 px-6">
                            <button
                                disabled={load()}
                                type="submit"
                                class="btn btn-primary font-bold text-white w-full">
                                {!load() ? "Submit" : <LoadingSm />}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddCategory;