import { Component } from "solid-js";

const InternalServcerErrorPage: Component<{}> = (props) => {

    return (
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-4xl font-bold mb-4">500 Internal Server Error</h1>
            <p class="text-lg text-gray-600">Sorry, something went wrong on our end. Please try again later.</p>
        </div>
    );
};

export default InternalServcerErrorPage;