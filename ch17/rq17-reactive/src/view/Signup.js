import { useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Input, Form, Label } from "./Form";

const ExtraButton = styled.div`
  display: flex;
  justify-content: flex-start;
`;

function Signup({ onBack, onSignup }) {
  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      onSignup(Object.fromEntries(new FormData(evt.target)));
    },
    [onSignup]
  );
  return (
    <Form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <Label>
        Username: <Input name="username" />
      </Label>
      <Label>
        Password: <Input name="password1" type="password" />
      </Label>
      <Label>
        Repeat password: <Input name="password2" type="password" />
      </Label>
      <Button>Sign up</Button>
      <ExtraButton>
        <Button onClick={onBack}>❮ Back</Button>
      </ExtraButton>
    </Form>
  );
}

export default Signup;
