import styled from "styled-components";

export default styled.button`
  --height: 2;
  --base: 1px;
  background: transparent;
  border: 3px solid;
  border-radius: 0.5em;
  height: 2em;
  margin: 0;
  font: inherit;
  padding: 0.25em 0.5em;
  box-shadow: calc(-1 * var(--height) * var(--base))
    calc(var(--height) * var(--base)) 0 black;
  position: relative;
  left: calc(var(--height) * var(--base));
  bottom: calc(var(--height) * var(--base));
  transition-property: box-shadow, left, bottom;
  transition-duration: 0.1s;

  &:hover,
  &:focus-visible {
    --height: 3;
  }

  &:active {
    --height: 1;
  }

  &:focus-visible {
    outline: none;
  }
`;
