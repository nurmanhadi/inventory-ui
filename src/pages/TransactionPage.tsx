import { Component, createEffect, createSignal, Show } from "solid-js";
import StockFilter from "../components/stock/StockFilter";
import { StockPeriod, StockType } from "../helpers/stock-type";
import { apiStockHistory } from "../apis/stock-api";
import Pagination from "../components/Pagination";
import { StockResponse } from "../apis/dtos/stock-dto";
import TransactionList from "../components/stock/TransactionList";
import Loading from "../components/Loading";
import AddStock from "../components/stock/AddStock";
import { catchError } from "../helpers/catch-error";

const TransactionPage: Component<{}> = (props) => {
    const [stock, setStock] = createSignal<StockResponse[]>()
    const [type, setType] = createSignal<StockType>(StockType.All)
    const [period, setPeriod] = createSignal<StockPeriod>(StockPeriod.Current)
    const [page, setPage] = createSignal<number>(1);
    const [totalPages, setTotalPages] = createSignal<number>(1);

    const fetchHistory = async (page: number, period: StockPeriod, type: StockType) => {
        const size: number = 20
        try {
            const web = await apiStockHistory(page, size, type, period)
            setStock(web.data.contents)
            setPage(web.data.page)
            setTotalPages(web.data.total_pages)
        } catch (error) {
            await catchError(error)
        }
    }
    createEffect(() => {
        fetchHistory(page(), period(), type())
    })
    return (
        <div>
            <div>
                <h2 class="mb-3 font-bold text-2xl">Add Stock</h2>
                <AddStock onSuccess={() => fetchHistory(page(), period(), type())} />
            </div>
            <hr class="my-6" />
            <div>
                <div class="flex justify-end mb-3">
                    <StockFilter type={type()} onTypeChange={setType} period={period()} onPeriodChange={setPeriod} />
                </div>
                <Show when={stock()} fallback={<Loading />}>
                    <TransactionList transactions={stock()!} />
                </Show>
                <div class="flex justify-center mt-6">
                    <Pagination page={page()} totalPages={totalPages()} onPageChange={setPage} />
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;