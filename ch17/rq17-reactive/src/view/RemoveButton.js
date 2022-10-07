import styled from "styled-components";
import { useState } from "react";

import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  gap: 0.25em;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
`;

function SingleThing({ onRemove }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const onKeep = () => setIsRemoving(false);
  const onStart = () => setIsRemoving(true);
  const onConfirm = () => {
    setIsRemoving(false);
    onRemove();
  };
  if (isRemoving) {
    return (
      <Wrapper>
        <Text>Sure?</Text>
        <Button onClick={onConfirm}>Remove</Button>
        <Button onClick={onKeep}>Cancel</Button>
      </Wrapper>
    );
  }
  return <Button onClick={onStart}>🗑 Remove</Button>;
}

export default SingleThing;
