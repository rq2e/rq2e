import React, {Component} from 'react';

function App() {
  return <TodoApplication />;
}

class TodoApplication extends Component {
  state = {
    todos: [
      'Feed the plants',
      'Water the dishes',
      'Clean the cat',
    ],
  }
  render() {
    return (
      <main>
        {this.state.todos.map((todo, index) => (
          <p key={todo}>
           {todo}
           <button onClick={() => {
             const todos = this.state.todos;
             todos.splice(index, 1);
             this.setState({ todos });
           }}>x</button>
          </p>
          ))}
      </main>
    );
  }
}


export default App;
