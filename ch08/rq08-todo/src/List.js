function List({ items, handleDelete }) {
  if (!items.length) {
    return <h2>To-do list empty, go out and play!</h2>
  }
  return (
    <>
      <h2>{items.length} item(s) to do</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Due date</th>
            <th>Options</th>
          </tr>
        </thead>
        {items.map(item => (
          <tr>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default List;
