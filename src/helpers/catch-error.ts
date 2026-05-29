import { showAlertError } from "./alert";

export const catchError = async (error: unknown): Promise<number> => {
    if (error instanceof HttpError) {
        await showAlertError(error.message)
        return error.statusCode
    } else {
        await showAlertError("An unexpected error occurred")
        console.error("unexpected error", error)
        return 500
    }
}