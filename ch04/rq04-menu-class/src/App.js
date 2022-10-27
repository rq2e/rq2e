import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Menu />
      </main>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="title">TheMenuCompany</h1>
        <ul className="menu">
          <MenuItem label="Home" href="/" />
          <MenuItem label="About" href="/about/" />
          <MenuItem label="Blog" href="/blog" />
        </ul>
      </nav>
    );
  }
}

class MenuItem extends Component {
  render() {
    return (
      <li className="menu-item">
        <a className="menu-link" href={this.props.href}>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default App;
