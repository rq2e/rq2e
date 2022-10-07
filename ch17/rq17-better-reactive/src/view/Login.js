import { useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Input, Form, Label } from "./Form";

const ExtraButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Login({ onNext, onLogin }) {
  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      onLogin(Object.fromEntries(new FormData(evt.target)));
    },
    [onLogin]
  );
  return (
    <Form onSubmit={onSubmit}>
      <h1>Log in</h1>
      <Label>
        Username: <Input name="username" />
      </Label>
      <Label>
        Password: <Input name="password" type="password" />
      </Label>
      <Button>Log in</Button>
      <ExtraButton>
        <Button onClick={onNext}>New user?</Button>
      </ExtraButton>
    </Form>
  );
}

export default Login;
