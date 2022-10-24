import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { memo } from "react";

const ToastElement = styled.article`
  width: 500px;
  height: auto;
  border: 1px solid rgb(var(--color-primary));
  ${({ $isOutline }) =>
    $isOutline
      ? `
      background-color: white;
      color: rgb(var(--color-primary));
      `
      : `
      background-color: rgb(var(--color-primary));
      color: white;
      `}
  text-align: left;
  padding: 6px 12px;
  border-radius: 6px;
  min-height: 40px;
  font-size: 90%;
  position: relative;
`;

const Dismiss = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  position: absolute;
  right: 3px;
  top: 3px;
  color: inherit;
  cursor: pointer;
  line-height: 1;

  &:hover,
  &:focus {
    outline: 1px dotted;
  }
`;

function Toast({
  id,
  message,
  canDismiss = false,
  isPersistent = false,
  isOutline,
  removeToast,
}) {
  useEffect(() => {
    if (isPersistent && canDismiss) {
      return;
    }
    const timeout = setTimeout(() => removeToast(id), 3000);
    return () => clearTimeout(timeout);
  }, [canDismiss, id, isPersistent, removeToast]);
  return (
    <ToastElement $isOutline={isOutline}>
      {canDismiss && (
        <Dismiss aria-label="Dismiss" onClick={() => removeToast(id)}>
          <FaTimes />
        </Dismiss>
      )}
      {message}
    </ToastElement>
  );
}

export default memo(Toast);
