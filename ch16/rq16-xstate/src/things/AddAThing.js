import { useState } from "react";
import styled from "styled-components";

import { useAddThing } from "../data";
import Button from "./Button";

const Form = styled.form`
  display: flex;
  gap: 1em;
`;

const Input = styled.input`
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

function AddAThing() {
  const addThing = useAddThing();
  const [isAdding, setIsAdding] = useState(false);
  const [newThing, setNewThing] = useState('');

  if (!isAdding) {
    return <Button onClick={() => setIsAdding(true)}>Add a thing</Button>
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    addThing(newThing);
    setNewThing('');
    setIsAdding(false);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input value={newThing} onChange={evt => setNewThing(evt.target.value)} />
      <Button>Add</Button>
      <Button type="button" onClick={() => setIsAdding(false)}>Cancel</Button>
    </Form>
  );
}

export default AddAThing;
