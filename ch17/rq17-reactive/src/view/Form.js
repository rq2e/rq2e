import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  border: 3px solid;
  border-radius: 0.25em;
  margin: 0;
  font: inherit;
  padding: 0.25em 0.5em;
  box-shadow: -2px 2px 0 black;
  position: relative;
  left: 2px;
  bottom: 2px;

  &:focus {
    outline: none;
    box-shadow: -4px 4px 0 black;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: stretch;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  input {
    width: 70%;
  }
`;
