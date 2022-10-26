import { Component, Fragment } from "react";

class Link extends Component {
  render() {
    return (
      <p>
        <a href="//reactjs.org">Read more about React</a>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Link />
        <Link />
        <Link />
      </Fragment>
    );
  }
}

export default App;
