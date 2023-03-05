import { useState } from "react";

import useTask from "../task/useTask";

import StepContext from "./context";

function StepProvider({ taskId, children }) {
  const {
    state: { tasks },
    actions: {
      editStep,
      checkStep,
      addStep,
      deleteStep,
      moveStepUp,
      moveStepDown,
    },
  } = useTask();
  const steps = tasks.find((task) => task.id === taskId).steps;

  const [editingStep, setEditingStep] = useState(null);

  const edit = (step, text) => {
    editStep({ taskId, step, text });
    setEditingStep(null);
  };
  const check = (step) => checkStep({ taskId, step });
  const add = (step) => addStep({ taskId, step });
  const remove = (step) => deleteStep({ taskId, step });
  const moveUp = (step) => moveStepUp({ taskId, step });
  const moveDown = (step) => moveStepDown({ taskId, step });

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
