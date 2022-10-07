import styled from "styled-components";

const Bar = styled.div.attrs(({ $progress }) => ({
  role: "progressbar",
  "aria-valuenow": $progress,
}))`
  box-shadow: 2px -2px 0 black;
  border-radius: 0.5em;
  background: white;
  flex-grow: 1;
  height: 2em;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to right, hotpink 80%, black 80%, black);
  background-repeat: repeat;
  background-size: 1% 100%;

  &::after {
    content: "";
    display: block;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${({ $progress }) => 100 - $progress}%;
    background: white;
    position: absolute;
  }
`;

function Progress({ value }) {
  return <Bar $progress={value} />;
}

export default Progress;
