import { Component } from "solid-js";

const NotfoundPage: Component<{}> = (props) => {

    return (
        <div class="flex flex-col items-center justify-center h-screen" >
            <h1 class="text-6xl font-bold mb-4">404</h1>
            <p class="text-xl text-gray-600">Page Not Found</p>
        </div >
    );
};

export default NotfoundPage;