import TaskContext from "./context";
import useTaskReducer from "./useTaskReducer";

function TaskProvider({ children }) {
  const value = useTaskReducer();
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
