import styled from "styled-components";
import Toast from "./Toast";

const ToastsElement = styled.section`
  position: fixed;
  bottom: 6px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transition: top 0.3s ease-out;
`;

function ToastMaster({ toasts, removeToast }) {
  return (
    <ToastsElement aria-live="polite">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} removeToast={removeToast} />
      ))}
    </ToastsElement>
  );
}

export default ToastMaster;
