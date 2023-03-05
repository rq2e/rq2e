import Task from "./Task";
import TaskAdd from "./TaskAdd";
import useTask from "./useTask";

function TaskList() {
  const {
    state: { tasks },
  } = useTask();
  const taskIds = tasks.map(({ id }) => id);

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
