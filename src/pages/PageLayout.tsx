import { Component, type JSX } from "solid-js";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const PageLayout: Component<{ children?: JSX.Element }> = (props) => {

    return (
        <div>
            <div class="flex min-h-screen">
                <Sidebar />
                <main class="flex-1 p-6">
                    {props.children}
                </main>
            </div>
            <Footer />
        </div >
    );
};

export default PageLayout;