import { Component } from "solid-js";

const LoadingLg: Component<{}> = (props) => {

    return (
        <div class="flex justify-center items-center">
            <span class="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default LoadingLg;