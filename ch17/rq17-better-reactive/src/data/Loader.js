import { useIsFetching } from "react-query";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { rotate: 0; }
  to { rotate: 1turn; }
`;

const RingLoader = styled.progress`
  appearance: none;
  background: transparent;
  position: relative;
  --size: 120px;
  --width: 10px;
  --color: #000;
  --circle-size: calc(var(--size) - 2 * var(--width));
  width: var(--size);
  height: var(--size);
  ::-webkit-progress-bar {
    background: transparent;
  }
  ::-moz-progress-bar {
    background: transparent;
  }
  :indeterminate::after {
    content: " ";
    display: block;
    position: absolute;
    inset: 0;
    width: var(--circle-size);
    height: var(--circle-size);
    margin: var(--width);
    border-radius: 50%;
    border: var(--width) solid;
    border-color: var(--color) transparent;
    animation: ${rotate} 1.5s linear infinite;
  }
`;

const Background = styled.section`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255 255 255 / 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

function Loader(props) {
  const isFetching = useIsFetching({
    predicate: (query) => query.status === "loading",
  });
  if (!isFetching) {
    return null;
  }

  return (
    <Background>
      <RingLoader {...props} />
    </Background>
  );
}

export default Loader;
