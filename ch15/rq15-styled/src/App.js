import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CustomButton = styled(Button)`
  background-color: purple;
  border-color: purple;
`;

function App() {
  return (
    <>
      <fieldset>
        <legend>Normal button</legend>
        <Button>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Outline button</legend>
        <Button outline>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Disabled button</legend>
        <Button disabled>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Wide button</legend>
        <Button width={400}>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Custom button</legend>
        <CustomButton>Send</CustomButton>
      </fieldset>
    </>
  );
}

export default App;
