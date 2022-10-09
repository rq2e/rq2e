import { useState } from "react";

const initialState = { status: "initial" };

function WhereAmI() {
  const [state, setState] = useState(initialState);
  if (state.status === "initial") {
    const onSuccess = ({ coords }) => setState({ status: "success", coords });
    const onError = ({ message }) => setState({ status: "error", message });
    const onClick = () =>
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    return <button onClick={onClick}>Where am I?</button>;
  }
  if (state.status === "error") {
    return <h1>Error: {state.message}</h1>;
  }
  const { latitude, longitude } = state.coords;
  return (
    <h1>
      Coordinates: {latitude}, {longitude}
    </h1>
  );
}

export default WhereAmI;
