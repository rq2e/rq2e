import { useState, useEffect } from "react";

import Task from "./Task";
import TaskAdd from "./TaskAdd";

import initialState from "./fixture";

function getInitialState() {
  return (
    JSON.parse(localStorage.getItem("task-manager-items-list")) || initialState
  );
}

function TaskList() {
  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("task-manager-items-list", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) =>
    setTasks((ts) => ts.concat([{ id: Math.random() * 1000000, title }]));
  const editTask = (id, title) =>
    setTasks((ts) =>
      ts.map((task) => (task.id === id ? { ...task, title } : task))
    );
  const deleteTask = (id) =>
    setTasks((ts) => ts.filter((task) => task.id !== id));

  return (
    <ol className="lane">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
      <TaskAdd addTask={addTask} />
    </ol>
  );
}

export default TaskList;
