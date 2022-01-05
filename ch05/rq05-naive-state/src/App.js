import React, {Component} from 'react';

function App() {
  return <Counter />;
}

class Counter extends Component {
  counter = 0;
  
  render() {
    return (
      <>
        <p>Clicks: {this.counter}</p>
        <button
          onClick={() => this.counter++}
        >
          Increment
        </button>
      </>
    );
  }
}


export default App;
