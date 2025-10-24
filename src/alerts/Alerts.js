import Swal from "sweetalert2";

// Center Success Popup
export const successAlert = (message = "Success!") => {
    return Swal.fire({
        title: "Success 🎉",
        text: message,
        icon: "success",
        confirmButtonColor: "#403F3F",
    });
};

// Center Error Popup
export const errorAlert = (message = "Something went wrong!") => {
    return Swal.fire({
        title: "Error ❌",
        text: message,
        icon: "error",
    });
};

// Top-Right Toast for shoart notifications
export const toastAlert = (message = "Done!") => {
    return Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
    });
};
