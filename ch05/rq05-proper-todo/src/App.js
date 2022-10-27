import { useState } from "react";

function TodoApplication({ initialList }) {
  const [todos, setTodos] = useState(initialList);
  return (
    <main>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo}
          <button
            onClick={() => {
              setTodos((value) => [
                ...value.slice(0, index),
                ...value.slice(index + 1),
              ]);
            }}
          >
            x
          </button>
        </p>
      ))}
    </main>
  );
}

function App() {
  const items = ["Feed the plants", "Water the dishes", "Clean the cat"];
  return <TodoApplication initialList={items} />;
}

export default App;
