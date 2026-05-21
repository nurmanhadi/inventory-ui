export const dateFormated = (date: string): string => {
    const newDate = new Date(date)
    const formatted = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Jakarta"
    }).format(newDate)
    return formatted
}