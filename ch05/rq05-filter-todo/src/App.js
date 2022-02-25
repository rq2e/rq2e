import { useState } from 'react';

function markDone(list, index) {
  return list.map(
    (item, i) =>
      i === index
        ? { ...item, done: true }
        : item
  )
}

function TodoApplication({initialList}) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone
    ? todos.filter(({done}) => !done)
    : todos;
  return (
    <main>
      <div style={{display: 'flex'}}>
        <button onClick={() => setHideDone(false)}>
          Show all
        </button>
        <button onClick={() => setHideDone(true)}>
          Hide done
        </button>
      </div>
      {filteredTodos.map((todo, index) => (
        <p key={todo.task}>
        {todo.done ? (
          <strike>{todo.task}</strike>
        ) : (
          <>
            {todo.task}
            <button onClick={() =>
              setTodos(todos => markDone(todos, index))
            }>x</button>
          </>
        )}
        </p>
      ))} 
    </main>
  );
}

function App() {
  const items = [
    { task: 'Feed the plants', done: false },
    { task: 'Water the dishes', done: false },
    { task: 'Clean the cat', done: false },
  ];
  return <TodoApplication initialList={items} />;
}

export default App;
