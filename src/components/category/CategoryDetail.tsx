import { Component } from "solid-js";
import { CategoryResponse } from "../../apis/dtos/category-dto";

const CategoryDetail: Component<{ category: CategoryResponse }> = (props) => {

    return (
        <div>
            <h2>Name: {props.category.name}</h2>
            <p>Id: {props.category.id}</p>
        </div>
    );
};

export default CategoryDetail;