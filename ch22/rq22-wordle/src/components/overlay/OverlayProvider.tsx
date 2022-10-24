import styled from "@emotion/styled";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import OverlayContext from "./context";
import Dialog from "./Dialog";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const MessageWrapper = styled.aside`
  position: absolute;
  left: 0;
  top: 3em;
  right: 0;
  display: flex;
  justify-content: center;
`;
const Message = styled.p`
  padding: 0.5em 1em;
  font-size: 110%;
  background: white;
  color: #111;
`;

function OverlayProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState("");
  const [currentDialog, setCurrentDialog] = useState<ReactNode | null>(null);
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(timeout);
    }
    return;
  }, [message]);

  const value = {
    alert: (msg: string) => setMessage(msg),
    showDialog: (dialog: ReactNode) => setCurrentDialog(dialog),
    closeDialog: () => setCurrentDialog(null),
  };

  return (
    <OverlayContext.Provider value={value}>
      <Wrapper>
        {currentDialog && <Dialog target={currentDialog} />}
        {message && (
          <MessageWrapper>
            <Message aria-live="polite">{message}</Message>
          </MessageWrapper>
        )}
        {children}
      </Wrapper>
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
