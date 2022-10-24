import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import ToastContext from "./context";
import ToastMaster from "./ToastMaster";

function getOrCreateRoot(id) {
  const existing = document.getElementById(id);
  if (existing) {
    return existing;
  }
  const div = document.createElement("div");
  div.setAttribute("id", id);
  document.body.appendChild(div);
  return div;
}

function ToastPortal({ children }) {
  const root = getOrCreateRoot("toast-root");
  return createPortal(children, root);
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback(
    (toast) =>
      setToasts((oldToasts) =>
        oldToasts.concat([{ ...toast, id: `toast-${Math.random()}` }])
      ),
    []
  );
  const removeToast = useCallback(
    (id) =>
      setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id)),
    []
  );
  return (
    <ToastContext.Provider value={addToast}>
      <ToastPortal>
        <ToastMaster toasts={toasts} removeToast={removeToast} />
      </ToastPortal>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
