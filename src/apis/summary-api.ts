import { API_URL } from "../configs/environtment";
import { SummaryResponse } from "./dtos/summary-dto";
import { WebResponse } from "./dtos/web-dto";

export const apiGetSummary = async (): Promise<WebResponse<SummaryResponse>> => {
    const response = await fetch(`${API_URL}/summary`, {
        method: "GET",
    });
    const web: WebResponse<SummaryResponse> = await response.json();
    if (response.status !== 200) {
        throw new HttpError(web.message, response.status);
    }
    return web
}