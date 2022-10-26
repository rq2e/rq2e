import { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <p>
        {this.props.isError && "⚠️"}
        {this.props.children}
        {this.props.isError && "⚠️"}
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <main>
        <Alert>We are almost out of cookies</Alert>
        <Alert isError>We are completely out of ice cream</Alert>
      </main>
    );
  }
}

export default App;
