import { Component, createSignal, onMount, Show } from "solid-js";
import { CategoryResponse } from "../apis/dtos/category-dto";
import { useParams } from "@solidjs/router";
import { apiGetCategory } from "../apis/category-api";
import Loading from "../components/Loading";
import CategoryDetail from "../components/category/CategoryDetail";
import UpdateCategory from "../components/category/UpdateCategory";
import { catchError } from "../helpers/catch-error";

const CategoryDetailPage: Component<{}> = (props) => {
    const params = useParams()
    const [category, setCategory] = createSignal<CategoryResponse>()
    const fetchCategory = async (id: string) => {
        try {
            const web = await apiGetCategory(id)
            setCategory(web.data)
        } catch (error) {
            await catchError(error)
        }
    }
    onMount(() => {
        fetchCategory(params.id!)
    })
    return (
        <Show when={category()} fallback={<Loading />}>
            <CategoryDetail category={category()!} />
            <hr class="my-6" />
            <UpdateCategory id={params.id!} onSuccess={() => fetchCategory(params.id!)} />
        </Show>
    );
};

export default CategoryDetailPage;