import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Menu options:</h1>
        <Menu />
      </main>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <ul>
        <MenuItem label="Home" href="/" />
        <MenuItem label="About" href="/about/" />
        <MenuItem label="Blog" href="/blog" />
      </ul>
    );
  }
}

class MenuItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.href} title={this.props.label}>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default App;
