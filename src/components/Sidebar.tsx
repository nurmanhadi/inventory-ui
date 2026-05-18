import { Component } from "solid-js";

const Sidebar: Component<{}> = (props) => {

    return (
        <aside class="w-64 bg-gray-800 text-white p-4">
            {/* logo */}
            <div class="text-2xl text-center font-bold mb-6">Inventory UI</div>
            {/* dashboard */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300 hover:text-black">Dashboard</a>
            {/* products */}
            <a href="/products" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300 hover:text-black">Products</a>
            {/* categories */}
            <a href="/categories" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300 hover:text-black">Categories</a>
            {/* transactions */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300 hover:text-black">Transactions</a>
            {/* reports */}
            <a href="" class="flex items-center px-4 py-2 rounded-lg hover:bg-base-300 hover:text-black">Reports</a>

        </aside>
    );
};

export default Sidebar;