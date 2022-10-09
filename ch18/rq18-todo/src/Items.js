function Items({ items, onDelete }) {
  return (
    <>
      <h2>Todo items</h2>
      <ul>
        {items.map((todo) => (
          <li key={todo}>
            {todo}
            <button title={`Delete '${todo}'`} onClick={() => onDelete(todo)}>
              <span aria-hidden>×</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;
