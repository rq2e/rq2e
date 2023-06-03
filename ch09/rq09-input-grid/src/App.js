import { createElement } from "react";

function Table({ children }) {
  return (
    <table style={{ border: "1px solid #777", flex: "1 1 100px" }}>
      <thead style={{ fontSize: "150%" }}>
        <tr>
          <th>Element</th>
          <th>Display</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
function Row({ type, name = "input", children, ...rest }) {
  const element = createElement(name, { ...rest, type }, children);
  return (
    <tr>
      <td style={{ padding: "5px 0 5px 10px" }}>
        <pre>
          &lt;{name}
          {type && ` type="${type}"`} /&gt;
        </pre>
      </td>
      <td style={{ padding: "5px 10px 5px 0" }}>{element}</td>
    </tr>
  );
}
function InputGrid() {
  return (
    <div
      style={{
        width: "calc(100vw - 1em)",
        display: "flex",
        gap: "1em",
        justifyContent: "stretch",
      }}
    >
      <Table>
        <Row type="button" value="Button" />
        <Row type="checkbox" />
        <Row type="color" />
        <Row type="date" />
        <Row type="datetime-local" />
        <Row type="email" />
        <Row type="file" />
        <Row type="image" />
        <Row type="month" />
        <Row type="number" />
        <Row type="password" />
        <Row type="radio" />
      </Table>
      <Table>
        <Row type="range" value="0.5" />
        <Row type="reset" />
        <Row type="search" />
        <Row type="submit" />
        <Row type="tel" />
        <Row type="text" />
        <Row type="time" />
        <Row type="url" />
        <Row type="week" />
        <Row name="textarea" />
        <Row name="select">
          <option>Choose below...</option>
        </Row>
      </Table>
    </div>
  );
}

function App() {
  return <InputGrid />;
}

export default App;
