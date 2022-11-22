import Task from "./Task";
import TaskAdd from "./TaskAdd";
import useTask from "./useTask";

function TaskList() {
  const taskIds = useTask(
    ({ state: { tasks } }) => tasks.map(({ id }) => id),
    true
  );

  return (
    <ol className="lane">
      {taskIds.map((taskId) => (
        <Task key={taskId} id={taskId} />
      ))}
      <TaskAdd />
    </ol>
  );
}

export default TaskList;
