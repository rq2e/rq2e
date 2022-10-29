import { Component } from "react";

class App extends Component {
  render() {
    const items = ["apples", "pears", "playstations"];
    return <Select items={items} />;
  }
}

class Select extends Component {
  render() {
    return (
      <select>
        {this.props.items.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    );
  }
}

export default App;
