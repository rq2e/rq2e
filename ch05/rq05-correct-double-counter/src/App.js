import React, {Component} from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  }
  render() {
    const increment =
      () => this.setState(({ counter }) => ({ counter: counter + 1 }));
    const onClick = () => {
      increment();
      if (this.props.doubleCount) {
        increment();
      }
    };
    return (
      <main>
        <p>Counter: {this.state.counter}</p>
        <button onClick={onClick}>Increment</button>
      </main>
    );
  }
}

class App extends Component {
  render() {
    return <Counter doubleCount={true} />;
  }
}

export default App;
