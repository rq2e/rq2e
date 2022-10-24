import styled from "styled-components";
import { Form as RemixForm } from "@remix-run/react";

export const Form = styled(RemixForm)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Title = styled.h1`
  margin: 0.5em 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.25em;
  border: 1px solid ${({ theme }) => theme.colors.quartz};
  border-radius: 0.5em;
  padding: 0.5em;
`;

export const LabelSpan = styled.span`
  font-size: 70%;
`;

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  flex: 0 0 60%;
`;

export const OptionGroup = styled.div`
  display: flex;
  gap: 0.25em;
  flex-wrap: wrap;

  & + & {
    margin-top: 0.5em;
  }
`;

export const Option = styled.input``;

export const OptionName = styled.label`
  margin: 0;
  opacity: 0.5;
  ${Option}:checked ~ & {
    opacity: 1;
  }
`;

export const OptionContent = styled.div`
  display: none;
  width: 100%;
  gap: 0.25em;
  align-items: stretch;
  ${Option}:checked ~ & {
    display: flex;
  }
  & ${Label} {
    flex-grow: 1;
  }
`;

export const Select = styled(Input).attrs({ as: "select" })`
  flex-grow: 1;
  &,
  option {
    font-size: inherit;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1em;
`;

export const Submit = styled.button`
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  border: 0;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  flex: 1 1 50%;
  color: white;
  background-color: ${({ theme }) => theme.colors.melon};
`;

export const Cancel = styled.button`
  text-decoration: none;
  text-align: center;
  background: white;
  border: 1px solid;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  flex: 1 1 50%;
  color: ${({ theme }) => theme.colors.melon};
`;
