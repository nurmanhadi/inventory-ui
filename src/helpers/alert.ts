import Swal from "sweetalert2";

export const showAlertSuccess = (message: string) => {
    return Swal.fire({
        title: 'Success',
        theme: 'material-ui-light',
        icon: 'success',
        text: message,
        timer: 2000,
        showConfirmButton: false,
    })
}

export const showAlertError = (message: string) => {
    return Swal.fire({
        title: 'Error',
        theme: 'material-ui-light',
        icon: 'error',
        text: message,
        timer: 2000,
        showConfirmButton: false,
    })
} 