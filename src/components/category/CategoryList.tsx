import { Component, For } from "solid-js";
import { CategoryResponse } from "../../apis/dtos/category-dto";

const CategoryList: Component<{ categories: CategoryResponse[] }> = (props) => {

    return (
        <div class="flex flex-wrap gap-4">
            <For each={props.categories}>
                {(item, index) => (
                    <a href={`/categories/${item.id}`} class="btn btn-outline btn-sm">
                        {item.name}
                    </a>
                )}
            </For>
        </div>
    );
};

export default CategoryList;