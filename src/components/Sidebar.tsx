import { Component } from "solid-js";

const Sidebar: Component<{}> = (props) => {

    return (
        <aside class="w-64 bg-gray-800 text-white p-4">
            {/* logo */}
            <div class="text-2xl text-center font-bold mb-6">Inventory UI</div>
            {/* dashboard */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300">Dashboard</a>
            {/* products */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300">Products</a>
            {/* categories */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300">Categories</a>
            {/* transactions */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300">Transactions</a>
            {/* reports */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300">Reports</a>

        </aside>
    );
};

export default Sidebar;