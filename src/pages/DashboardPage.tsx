import { Component, createSignal, onMount, Show } from "solid-js";
import SummaryList from "../components/SummaryList";
import { SummaryResponse } from "../apis/dtos/summary-dto";
import { apiGetSummary } from "../apis/summary-api";
import Loading from "../components/Loading";

const DashboardPage: Component<{}> = (props) => {
    const [summary, setSummary] = createSignal<SummaryResponse>();

    const fetchSummary = async () => {
        try {
            const web = await apiGetSummary()
            setSummary(web.data)
        } catch (error) {
            console.error(error);
        }
    }

    onMount(() => {
        fetchSummary()
    })

    return (
        <Show when={summary()} fallback={<Loading />}>
            <SummaryList summary={summary()!} />
        </Show>
    );
};

export default DashboardPage;