import { useRef } from "react";
import styled from "styled-components";

const Group = styled.label`
  width: fit-content;
  display: flex;
  gap: 5px;
`;

const Label = styled.span`
  display: block;
  position: relative;
  padding: 0.5em;
  padding-left: 4em;
  max-width: calc(100% - 2em);
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  white-space: nowrap;

  &:focus + ${Label}::before, &:hover + ${Label}::before {
    box-shadow: 0 0 0.5em rgb(var(--color-primary));
  }

  & + ${Label}::before, & + ${Label}::after {
    content: "";
    position: absolute;
    height: 1.5em;
    transition: all 0.25s ease;
    cursor: pointer;
  }

  & + ${Label}::before {
    left: 0;
    top: 0.2em;
    width: 3em;
    border: 0.2em solid #767676;
    background: #767676;
    border-radius: 1.1em;
  }

  & + ${Label}::after {
    left: 0;
    top: 0.25em;
    background-color: #fff;
    background-position: center center;
    border-radius: 50%;
    width: 1.5em;
    border: 0.15em solid #767676;
  }

  :checked + ${Label}::after {
    left: 1.6em;
    border-color: rgb(var(--color-primary));
    color: rgb(var(--color-primary));
  }

  :indeterminate + ${Label}::after {
    left: 0.8em;
  }

  :indeterminate + ${Label}::before {
    background-color: #ddd;
  }

  :checked + ${Label}::before {
    background-color: rgb(var(--color-primary));
    border-color: rgb(var(--color-primary));
  }

  :disabled + ${Label}::before, :disabled + ${Label}::after {
    cursor: default;
  }
  :disabled + ${Label}::before {
    background-color: #ddd;
    border-color: #ddd;
  }

  :disabled + ${Label}::after {
    border-color: #ddd;
  }

  :disabled:hover + ${Label}::before {
    box-shadow: none;
  }

  :disabled:hover + ${Label}::after {
    background-image: none;
  }
`;

function Switch({ label, ...props }) {
  const checkbox = useRef();
  const onKeyDown = (evt) => {
    if (["enter", "arrowleft", "arrowright"].includes(evt.key.toLowerCase())) {
      checkbox.current.click();
    }
  };
  return (
    <Group onKeyDown={onKeyDown}>
      <Checkbox ref={checkbox} {...props} />
      <Label>{label}</Label>
    </Group>
  );
}

export default Switch;
