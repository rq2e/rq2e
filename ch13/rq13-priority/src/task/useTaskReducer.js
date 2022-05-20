import produce from "immer";
import { useEffect, useMemo } from "react";

import useReduction from "use-reduction";
import initialState from "./fixture";

const reducer = {
  toggleExpand: produce((draft, { payload: taskId }) => {
    draft.expandedId = draft.expandedId === taskId ? null : taskId;
  }),
  addTask: produce((draft, { payload: title }) => {
    draft.tasks.push({ id: Math.random() * 1000000, title, steps: [] });
  }),
  editTask: produce((draft, { payload: { taskId, title } }) => {
    const task = draft.tasks.find(({ id }) => id === taskId);
    task.title = title;
  }),
  deleteTask: produce((draft, { payload: taskId }) => {
    const index = draft.tasks.findIndex(({ id }) => id === taskId);
    draft.tasks.splice(index, 1);
  }),
  checkStep: produce((draft, { payload: { taskId, step } }) => {
    const task = draft.tasks.find(({ id }) => id === taskId);
    task.steps[step].completed = !task.steps[step].completed;
  }),
  editStep: produce((draft, { payload: { taskId, step, text } }) => {
    const task = draft.tasks.find(({ id }) => id === taskId);
    task.steps[step].step = text;
  }),
  deleteStep: produce((draft, { payload: { taskId, step } }) => {
    const task = draft.tasks.find(({ id }) => id === taskId);
    task.steps.splice(step, 1);
  }),
  addStep: produce((draft, { payload: { taskId, step } }) => {
    const task = draft.tasks.find(({ id }) => id === taskId);
    task.steps.push({ step, completed: false });
  }),
  moveStepUp: produce((draft, { payload: { taskId, step } }) => {
    if (step === 0) return;
    const task = draft.tasks.find(({ id }) => id === taskId);
    const temp = task.steps[step];
    task.steps[step] = task.steps[step - 1];
    task.steps[step - 1] = temp;
  }),
  moveStepDown: produce((draft, { payload: { taskId, step } }) => {
    const task = draft.tasks.find(({ id }) => id === taskId);
    if (step === task.steps.length - 1) return;
    const temp = task.steps[step];
    task.steps[step] = task.steps[step + 1];
    task.steps[step + 1] = temp;
  }),
};

function getInitialState() {
  const tasks =
    JSON.parse(localStorage.getItem("task-manager-items")) || initialState;
  return {
    expandedId: null,
    tasks,
  };
}

function useTaskReducer() {
  const initialState = useMemo(getInitialState, []);
  const [state, actions] = useReduction(initialState, reducer);

  useEffect(() => {
    localStorage.setItem("task-manager-items", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return {
    state,
    actions,
  };
}

export default useTaskReducer;
