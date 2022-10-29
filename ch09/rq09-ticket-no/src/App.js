import { useState } from "react";

function TicketNumber() {
  const [ticketNumber, setTicketNumber] = useState("");
  const onChange = (evt) => {
    const [first = "", second = ""] = evt.target.value
      .replace(/[^0-9a-z]/gi, "")
      .slice(0, 6)
      .match(/.{0,3}/g);
    const value = first.length === 3 ? `${first}-${second}` : first;
    setTicketNumber(value.toUpperCase());
  };
  const isValid = ticketNumber.length === 7;
  return (
    <form style={{ display: "flex" }}>
      <label>
        Ticket number:
        <input
          value={ticketNumber}
          onChange={onChange}
          placeholder="E.g. R1S-T2U"
        />
      </label>
      <span>{isValid ? "✓" : "✗"}</span>
    </form>
  );
}

function App() {
  return <TicketNumber />;
}

export default App;
