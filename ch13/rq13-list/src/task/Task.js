import { useState } from "react";

import TaskHeader from "./TaskHeader";

function Task({ task, editTask, deleteTask }) {
  const [isEditable, setEditable] = useState(false);

  return (
    <li className="card">
      <TaskHeader
        task={task}
        isEditable={isEditable}
        setEditable={setEditable}
        editTask={editTask}
      />
      <ul className="card-controls">
        {!isEditable && (
          <li>
            <button className="card-control" onClick={() => setEditable(true)}>
              Edit
            </button>
          </li>
        )}
        <li>
          <button className="card-control" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      </ul>
    </li>
  );
}

export default Task;
