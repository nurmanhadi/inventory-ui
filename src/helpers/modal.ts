export const showModal = (name: string) => {
    const modal = document.getElementById(name) as HTMLDialogElement
    modal?.showModal()
}
export const closeModal = (name: string) => {
    const modal = document.getElementById(name) as HTMLDialogElement
    modal?.close()
}