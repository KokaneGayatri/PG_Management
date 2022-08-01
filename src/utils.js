import { toast } from "react-toastify";

export const showToast = (msg, variant = "info") => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  !variant ? toast(msg, options) : toast[variant](msg, options);
};
