import { Component, For } from "solid-js";
import { dateFormated } from "../../helpers/date-format";
import { StockType } from "../../helpers/stock-type";
import { StockResponse } from "../../apis/dtos/stock-dto";

const TransactionList: Component<{ transactions: StockResponse[] }> = (props) => {

    return (
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
                    <For each={props.transactions}>
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
    );
};

export default TransactionList;