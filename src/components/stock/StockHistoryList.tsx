import { Component, createSignal, For, onMount, Show } from "solid-js";
import { StockResponse } from "../../apis/dtos/stock-dto";
import LoadingLg from "../LoadingLg";
import { apiStockHistory } from "../../apis/stock-api";
import { StockPeriod, StockType } from "../../helpers/stock-type";
import { dateFormated } from "../../helpers/date-format";

const StockHistoryList: Component<{ id: string }> = (props) => {
    const [transaction, setTransaction] = createSignal<StockResponse[]>()
    const fetchStockHistory = async (id: string) => {
        try {
            const web = await apiStockHistory(1, 10, StockType.All, StockPeriod.Current, id)
            setTransaction(web.data.contents)
        } catch (error) {
            console.error(error);
        }
    }
    onMount(() => {
        fetchStockHistory(props.id)
    })
    return (
        <div>
            <h2 class="text-xl font-bold mb-3">Transaction</h2>
            <Show when={transaction()} fallback={<LoadingLg />}>
                <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <For each={transaction()}>
                                {(item, index) => (
                                    <tr>
                                        <td>{dateFormated(item.created_at)}</td>
                                        <td><span class={`badge ${item.type == StockType.In ? "badge-success" : "badge-error"}`}>
                                            {item.type}
                                        </span></td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )}
                            </For>
                        </tbody>
                    </table>
                </div>
            </Show>
        </div>
    );
};

export default StockHistoryList;