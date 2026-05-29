import { useNavigate } from "@solidjs/router";
import { showAlertError } from "./alert";

export const catchError = async (error: unknown): Promise<number> => {
    const nav = useNavigate()
    if (error instanceof HttpError) {
        await showAlertError(error.message)
        return error.statusCode
    } else {
        nav("/500")
        console.error("unexpected error", error)
        return 500
    }
}