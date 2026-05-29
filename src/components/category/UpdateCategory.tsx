import { Component, createSignal } from "solid-js";
import { CategoryRequest } from "../../apis/dtos/category-dto";
import { apiUpdateCategory } from "../../apis/category-api";
import LoadingSm from "../LoadingSm";
import { showAlertSuccess } from "../../helpers/alert";
import { catchError } from "../../helpers/catch-error";
import { useNavigate } from "@solidjs/router";

const UpdateCategory: Component<{ id: string, onSuccess: () => Promise<void> }> = (props) => {
    const nav = useNavigate()
    const [name, setName] = createSignal<string>("")
    const [load, setLoad] = createSignal<boolean>(false)
    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        try {
            setLoad(true)
            const request: CategoryRequest = {
                name: name()
            }
            const web = await apiUpdateCategory(props.id, request)
            await props.onSuccess()
            setName("")
            await showAlertSuccess(web.message)
        } catch (error) {
            const code = await catchError(error)
            if (code === 500) {
                nav("/500")
            }
        } finally {
            setLoad(false)
        }
    }

    return (
        <div>
            <h2 class="font-bold text-xl">Update</h2>
            <form onSubmit={handleSubmit}>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Name</legend>
                    <input
                        required
                        disabled={load()}
                        value={name()}
                        onInput={(e) => setName(e.currentTarget.value)}
                        type="text"
                        class="input"
                        placeholder="Type here" />
                </fieldset>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">
                        {!load() ? "Submit" : <LoadingSm />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCategory;