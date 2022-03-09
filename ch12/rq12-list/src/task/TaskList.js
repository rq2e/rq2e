import { useState, useCallback } from 'react';

import Task from './Task';
import TaskAdd from './TaskAdd';

import initialState from './fixture';

function getInitialState() {
  return (
    JSON.parse(localStorage.getItem('task-manager-items')) ||
    initialState
  );
}

function TaskList() {
  const [tasks, setTasks] = useState(getInitialState);

  localStorage.setItem('task-manager-items', JSON.stringify(tasks));

  const addTask = useCallback(
    title => setTasks(
      ts => ts.concat([{ id: Math.random() * 1000000, title }])
    ),
    [],
  );
  const editTask = useCallback(
    (id, title) => setTasks(
      ts => ts.map(task => task.id === id ? {...task, title} : task)
    ),
    [],
  );
  const deleteTask = useCallback(
    id => setTasks(ts => ts.filter(task => task.id !== id)),
    [],
  );
  
  return (
    <section className="lane">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
      <TaskAdd addTask={addTask} />
    </section>
  );
}

export default TaskList;
