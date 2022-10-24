import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { Form } from "@remix-run/react";

const ListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  display: block;
  font-size: 90%;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.palatinate};
  }
`;

function FormMenuItem({ to, children }: PropsWithChildren<{ to: string }>) {
  return (
    <ListItem>
      <Form method="post" action={to}>
        <StyledButton>{children}</StyledButton>
      </Form>
    </ListItem>
  );
}

export default FormMenuItem;
