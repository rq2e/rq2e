import { useEffect, useState } from "react";

import TaskContext from "./context";
import initialState from "./fixture";

function getInitialState() {
  return (
    JSON.parse(localStorage.getItem("task-manager-items-steps")) || initialState
  );
}

function TaskProvider({ children }) {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) =>
    setExpandedId((oldId) => (oldId === id ? null : id));

  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("task-manager-items-steps", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) =>
    setTasks((ts) =>
      ts.concat([{ id: Math.random() * 1000000, title, steps: [] }])
    );
  const editTask = (id, title) =>
    setTasks((ts) =>
      ts.map((task) => (task.id === id ? { ...task, title } : task))
    );
  const deleteTask = (id) =>
    setTasks((ts) => ts.filter((task) => task.id !== id));
  const editStep = (id, step, data) =>
    setTasks((ts) =>
      ts.map((task) =>
        task.id === id
          ? {
              ...task,
              steps: [
                ...task.steps.slice(0, step),
                { ...task.steps[step], ...data },
                ...task.steps.slice(step + 1),
              ],
            }
          : task
      )
    );
  const deleteStep = (id, step) =>
    setTasks((ts) =>
      ts.map((task) =>
        task.id === id
          ? {
              ...task,
              steps: [
                ...task.steps.slice(0, step),
                ...task.steps.slice(step + 1),
              ],
            }
          : task
      )
    );
  const addStep = (id, step) =>
    setTasks((ts) =>
      ts.map((task) =>
        task.id === id
          ? {
              ...task,
              steps: task.steps.concat([{ step, completed: false }]),
            }
          : task
      )
    );

  const value = {
    state: {
      expandedId,
      tasks,
    },
    actions: {
      toggleExpand,
      addTask,
      editTask,
      deleteTask,
      addStep,
      editStep,
      deleteStep,
    },
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
