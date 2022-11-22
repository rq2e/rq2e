import { useState, useCallback } from "react";

import useTask from "../task/useTask";

import StepContext from "./context";

function StepProvider({ taskId, children }) {
  const {
    steps,
    editStep,
    moveStepTo,
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
  const [dragging, setDragging] = useState(null);

  const startDrag = useCallback((index) => {
    setTimeout(() => {
      setDragging(index);
      setEditingStep(null);
    });
  }, []);

  const edit = useCallback(
    (step, text) => {
      editStep({ taskId, step, text });
      setEditingStep(null);
    },
    [taskId, editStep]
  );

  const moveTo = useCallback(
    (position) => {
      moveStepTo({ taskId, step: dragging, position });
      setDragging(null);
    },
    [taskId, dragging, moveStepTo]
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
      dragging,
    },
    actions: {
      setEditingStep,
      setDragging,
      startDrag,
      check,
      add,
      edit,
      remove,
      moveUp,
      moveDown,
      moveTo,
    },
  };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export default StepProvider;
