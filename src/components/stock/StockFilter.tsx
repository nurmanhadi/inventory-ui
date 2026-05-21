import { Component } from "solid-js";
import { StockPeriod, StockType } from "../../helpers/stock-type";

const StockFilter: Component<{
    type: StockType, onTypeChange: (type?: StockType) => void, period: StockPeriod, onPeriodChange: (period?: StockPeriod) => void
}> = (props) => {

    return (
        <div class="flex justify-end gap-6">
            {/* type */}
            <div class="flex items-center gap-1">
                <label>Type</label>
                <select
                    value={props.type}
                    onchange={(e) => {
                        const value = e.currentTarget.value
                        props.onTypeChange(
                            value ? value as StockType : undefined
                        )
                    }}
                    class="select select-xs w-24">
                    <option disabled selected>Type</option>
                    <option value={StockType.All}>{StockType.All}</option>
                    <option value={StockType.In}>{StockType.In}</option>
                    <option value={StockType.Out}>{StockType.Out}</option>
                </select>
            </div>

            {/* period */}
            <div class="flex items-center gap-1">
                <label >Period</label>
                <select
                    value={props.period}
                    onchange={(e) => {
                        const value = e.currentTarget.value
                        props.onPeriodChange(
                            value ? value as StockPeriod : undefined
                        )
                    }}
                    class="select select-xs w-32">
                    <option disabled selected>Period</option>
                    <option value={StockPeriod.Current}>{StockPeriod.Current}</option>
                    <option value={StockPeriod.Last7Days}>{StockPeriod.Last7Days}</option>
                    <option value={StockPeriod.Last30Days}>{StockPeriod.Last30Days}</option>
                    <option value={StockPeriod.Last90Days}>{StockPeriod.Last90Days}</option>
                    <option value={StockPeriod.Yearly}>{StockPeriod.Yearly}</option>
                </select>
            </div>
        </div>
    );
};

export default StockFilter;