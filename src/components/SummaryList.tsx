import { Component } from "solid-js";
import { SummaryResponse } from "../apis/dtos/summary-dto";

const SummaryList: Component<{ summary: SummaryResponse }> = (props) => {

    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Total Product */}
            <div class="rounded-xl shadow-md bg-white p-4 border border-gray-100">
                <p class="text-sm text-gray-500">Total Products</p>
                <h2 class="text-2xl font-bold text-gray-800">
                    {props.summary.total_product}
                </h2>
            </div>

            {/* Total Category */}
            <div class="rounded-xl shadow-md bg-white p-4 border border-gray-100">
                <p class="text-sm text-gray-500">Total Categories</p>
                <h2 class="text-2xl font-bold text-gray-800">
                    {props.summary.total_category}
                </h2>
            </div>

            {/* Stock In Today */}
            <div class="rounded-xl shadow-md bg-green-50 p-4 border border-green-100">
                <p class="text-sm text-green-600">Stock In Today</p>
                <h2 class="text-2xl font-bold text-green-700">
                    {props.summary.stock_in_today}
                </h2>
            </div>

            {/* Stock Out Today */}
            <div class="rounded-xl shadow-md bg-red-50 p-4 border border-red-100">
                <p class="text-sm text-red-600">Stock Out Today</p>
                <h2 class="text-2xl font-bold text-red-700">
                    {props.summary.stock_out_today}
                </h2>
            </div>

            {/* Low Stock */}
            <div class="rounded-xl shadow-md bg-yellow-50 p-4 border border-yellow-100">
                <p class="text-sm text-yellow-600">Low Stock</p>
                <h2 class="text-2xl font-bold text-yellow-700">
                    {props.summary.low_stock}
                </h2>
            </div>

        </div>
    );
};

export default SummaryList;