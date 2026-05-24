import { Component, createSignal } from "solid-js";
import { CategoryRequest } from "../../apis/dtos/category-dto";
import { apiUpdateCategory } from "../../apis/category-api";
import LoadingSm from "../LoadingSm";

const UpdateCategory: Component<{ id: string, onSuccess: () => Promise<void> }> = (props) => {
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
            alert(web.message)
            await props.onSuccess()
            setName("")
        } catch (error) {
            console.error(error)
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