import React from "react";
import Button from "./Button";
import "./index.css";

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
        <Button className="!bg-purple-900 !border-purple-900">Send</Button>
      </fieldset>
    </>
  );
}

export default App;
