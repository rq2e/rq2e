import { memo, useMemo, useState } from "react";

const Items = memo(function Items({ items }) {
  return (
    <>
      <h2>Todo items</h2>
      <ul>
        {items.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
});

function Todo() {
  const [items, setItems] = useState(["Clean gutter", "Do dishes"]);
  const [newItem, setNewItem] = useState("");
  const onSubmit = (evt) => {
    setItems((items) => items.concat([newItem]));
    setNewItem("");
    evt.preventDefault();
  };
  const onChange = (evt) => setNewItem(evt.target.value);
  const allItems = useMemo(() => ["Complete todo list", ...items], [items]);
  return (
    <main>
      <Items items={allItems} />
      <form onSubmit={onSubmit}>
        <input value={newItem} onChange={onChange} />
        <button>Add</button>
      </form>
    </main>
  );
}

function App() {
  return <Todo />;
}

export default App;
