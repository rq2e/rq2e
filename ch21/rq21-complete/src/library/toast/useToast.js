import { useContext } from "react";
import ToastContext from "./context";

function useToast() {
  return useContext(ToastContext);
}

export default useToast;
