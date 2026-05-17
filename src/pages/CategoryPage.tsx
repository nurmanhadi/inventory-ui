import { Component, createSignal, onMount, Show } from "solid-js";
import { CategoryResponse } from "../apis/dtos/category-dto";
import { apiGetCategories } from "../apis/category-api";
import Loading from "../components/Loading";
import CategoryList from "../components/category/CategoryList";
import AddCategory from "../components/category/AddCategory";

const CategoryPage: Component<{}> = (props) => {
    const [categories, setCategories] = createSignal<CategoryResponse[]>();
    const fetchCategories = async () => {
        try {
            const web = await apiGetCategories()
            setCategories(web.data)
        } catch (error) {
            console.error(error);
        }
    }
    onMount(() => {
        fetchCategories()
    })
    return (
        <Show when={categories()} fallback={<Loading />}>
            <div class="flex gap-4">
                <AddCategory />
            </div>
            <hr class="my-6" />
            <CategoryList categories={categories()!} />
        </Show>);
};

export default CategoryPage;