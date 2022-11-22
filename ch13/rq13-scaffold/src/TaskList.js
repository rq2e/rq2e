function TaskList() {
  return (
    <ol className="lane">
      <li className="card">
        <header className="card-header">
          <p className="card-title">This is a task</p>
        </header>
        <ul className="card-controls">
          <li>
            <button className="card-control">Edit</button>
          </li>
          <li>
            <button className="card-control">Delete</button>
          </li>
        </ul>
      </li>
      <li className="card">
        <header className="card-header">
          <p className="card-title">This is another task</p>
        </header>
        <ul className="card-controls">
          <li>
            <button className="card-control">Edit</button>
          </li>
          <li>
            <button className="card-control">Delete</button>
          </li>
        </ul>
      </li>
      <li className="card">
        <header className="card-header card-header-new">
          <form className="card-title-form">
            <input
              className="card-title card-title-input"
              placeholder="Add new task"
              name="title"
            />
            <button className="icon-button">
              <img src="icons/plus.svg" alt="Add task" />
            </button>
          </form>
        </header>
      </li>
    </ol>
  );
}

export default TaskList;
