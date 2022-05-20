import { useEffect, useState, useCallback } from "react";

import TaskContext from "./context";
import initialState from "./fixture";

function getInitialState() {
  return JSON.parse(localStorage.getItem("task-manager-items")) || initialState;
}

function TaskProvider({ children }) {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = useCallback(
    (id) => setExpandedId((oldId) => (oldId === id ? null : id)),
    []
  );

  const [tasks, setTasks] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("task-manager-items", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(
    (title) =>
      setTasks((ts) =>
        ts.concat([{ id: Math.random() * 1000000, title, steps: [] }])
      ),
    []
  );
  const editTask = useCallback(
    (id, title) =>
      setTasks((ts) =>
        ts.map((task) => (task.id === id ? { ...task, title } : task))
      ),
    []
  );
  const deleteTask = useCallback(
    (id) => setTasks((ts) => ts.filter((task) => task.id !== id)),
    []
  );
  const editStep = useCallback(
    (id, step, data) =>
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
      ),
    []
  );
  const deleteStep = useCallback(
    (id, step) =>
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
      ),
    []
  );
  const addStep = useCallback(
    (id, step) =>
      setTasks((ts) =>
        ts.map((task) =>
          task.id === id
            ? {
                ...task,
                steps: task.steps.concat([{ step, completed: false }]),
              }
            : task
        )
      ),
    []
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
