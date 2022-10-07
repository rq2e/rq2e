import { useState } from "react";
import styled from "styled-components";

import { useAddThing } from "../data";
import Button from "./Button";
import { Form, Label, Input } from "./Form";

const FormWrapper = styled.div`
  width: clamp(10em, 60vw, 40em);
  border: 2px solid black;
  border-radius: 0.5em;
  padding: 2em;
  box-shadow: -6px 6px 0 black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

function AddAThing() {
  const addThing = useAddThing();
  const [isAdding, setIsAdding] = useState(false);

  if (!isAdding) {
    return <Button onClick={() => setIsAdding(true)}>Add a thing</Button>;
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    addThing(Object.fromEntries(new FormData(evt.target)));
    evt.target.reset();
    setIsAdding(false);
  };

  return (
    <FormWrapper>
      <h2>Add a thing</h2>
      <Form onSubmit={onSubmit}>
        <Label>
          Name:
          <Input name="name" />
        </Label>
        <Label>
          Description:
          <Input name="description" />
        </Label>
        <ButtonWrapper>
          <Button>Add</Button>
          <Button type="button" onClick={() => setIsAdding(false)}>
            Cancel
          </Button>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  );
}

export default AddAThing;
