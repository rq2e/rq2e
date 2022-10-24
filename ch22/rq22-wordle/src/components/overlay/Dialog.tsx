import styled from "@emotion/styled";
import { ReactNode, useContext, useEffect, useState } from "react";
import OverlayContext from "./context";

const Wrapper = styled.div<{ $show: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(0 0 0 / 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.1s linear;
`;

const Background = styled.div<{ $show: boolean }>`
  background: #444;
  border-radius: 0.5em;
  padding: 1em;
  width: clamp(200px, 90vw, 600px);
  height: auto;
  position: relative;
  color: #ddd;

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  translate: ${({ $show }) => ($show ? "0 0" : "0 20px")};
  transition: 0.3s ease-out;
  transition-property: opacity, translate;
`;

const Close = styled.button`
  background: transparent;
  color: inherit;
  border: 0;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  font-size: 200%;
  padding: 0;
  line-height: 1;
  cursor: pointer;
`;

function Dialog({ target }: { target: ReactNode }) {
  const { closeDialog } = useContext(OverlayContext);
  const [visible, setVisible] = useState(false);
  const onClose = visible ? undefined : () => closeDialog?.();
  const onClosing = () => setVisible(false);
  const [currentDialog, setCurrentDialog] = useState<ReactNode | null>(null);
  useEffect(() => {
    if (target && !currentDialog) {
      setCurrentDialog(target);
      setTimeout(() => setVisible(true), 100);
    }
  }, [currentDialog, target]);
  useEffect(() => {
    const escHandler = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setVisible(false);
      }
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  if (!currentDialog) {
    return null;
  }

  return (
    <Wrapper $show={visible} onTransitionEnd={onClose} onClick={onClosing}>
      <Background $show={visible} onClick={(evt) => evt.stopPropagation()}>
        <Close onClick={onClosing}>×</Close>
        {currentDialog}
      </Background>
    </Wrapper>
  );
}

export default Dialog;
