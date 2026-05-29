import { Component, createSignal } from "solid-js";
import { apiAddCategory } from "../../apis/category-api";
import { CategoryRequest } from "../../apis/dtos/category-dto";
import LoadingSm from "../LoadingSm";
import { closeModal, showModal } from "../../helpers/modal";
import { showAlertSuccess } from "../../helpers/alert";
import { catchError } from "../../helpers/catch-error";

const AddCategory: Component<{ onSuccess: () => Promise<void> }> = (props) => {
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
            await props.onSuccess()
            setName("")
            closeModal("my_modal_3")
            await showAlertSuccess(web.message)
        } catch (error) {
            await catchError(error)
        } finally {
            setLoad(false)
        }
    }
    return (
        <div>
            <button class="btn" onClick={() => showModal("my_modal_3")}>Add</button>
            <dialog id="my_modal_3" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit}>
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