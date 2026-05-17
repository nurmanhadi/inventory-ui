import { Component } from "solid-js";

const Loading: Component<{}> = (props) => {

    return (
        <div class="min-h-screen flex items-center justify-center">
            <span class="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default Loading;