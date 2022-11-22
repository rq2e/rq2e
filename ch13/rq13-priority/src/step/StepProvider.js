import { useState, useCallback } from "react";

import useTask from "../task/useTask";

import StepContext from "./context";

function StepProvider({ taskId, children }) {
  const {
    steps,
    editStep,
    checkStep,
    addStep,
    deleteStep,
    moveStepUp,
    moveStepDown,
  } = useTask(
    ({ state: { tasks }, actions }) => ({
      steps: tasks.find((task) => task.id === taskId).steps,
      ...actions,
    }),
    true
  );

  const [editingStep, setEditingStep] = useState(null);

  const edit = useCallback(
    (step, text) => {
      editStep({ taskId, step, text });
      setEditingStep(null);
    },
    [taskId, editStep]
  );

  const check = useCallback(
    (step) => checkStep({ taskId, step }),
    [taskId, checkStep]
  );
  const add = useCallback(
    (step) => addStep({ taskId, step }),
    [taskId, addStep]
  );
  const remove = useCallback(
    (step) => deleteStep({ taskId, step }),
    [taskId, deleteStep]
  );
  const moveUp = useCallback(
    (step) => moveStepUp({ taskId, step }),
    [taskId, moveStepUp]
  );
  const moveDown = useCallback(
    (step) => moveStepDown({ taskId, step }),
    [taskId, moveStepDown]
  );

  const value = {
    state: {
      steps,
      editingStep,
    },
    actions: {
      setEditingStep,
      check,
      add,
      edit,
      remove,
      moveUp,
      moveDown,
    },
  };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export default StepProvider;
