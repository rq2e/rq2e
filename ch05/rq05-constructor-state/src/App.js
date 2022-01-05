import React, {Component} from 'react';

function App() {
  return <Counter initialValue={5} />;
}

class Counter extends Component {
  state = {counter: 0}
  constructor(props) {
    super(props);
    this.setState({
      counter: props.initialValue,
    });
  }
  
  render() {
    return (
      <>
        <p>Clicks: {this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter+1 })}
        >
          Increment
        </button>
      </>
    );
  }
}


export default App;
