import useTask from "./useTask";

function TaskControls({ id, isEditable, setEditable }) {
  const {
    actions: { deleteTask },
  } = useTask();

  return (
    <ul className="card-controls">
      {!isEditable && (
        <li>
          <button className="card-control" onClick={() => setEditable(true)}>
            Edit
          </button>
        </li>
      )}
      <li>
        <button className="card-control" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </li>
    </ul>
  );
}

export default TaskControls;
