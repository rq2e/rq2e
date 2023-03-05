import { useEffect, useReducer } from "react";

import initialState from "./fixture";

function reducer(state, { type, payload }) {
  switch (type) {
    case "TOGGLE":
      return {
        ...state,
        expandedId: state.expandedId === payload ? null : payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([
          { id: Math.random() * 1000000, title: payload, steps: [] },
        ]),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId) {
            return task;
          }
          return { ...task, title: payload.title };
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case "CHECK_STEP":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId) {
            return task;
          }
          return {
            ...task,
            steps: [
              ...task.steps.slice(0, payload.step),
              {
                ...task.steps[payload.step],
                completed: !task.steps[payload.step].completed,
              },
              ...task.steps.slice(payload.step + 1),
            ],
          };
        }),
      };
    case "EDIT_STEP":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId) {
            return task;
          }
          return {
            ...task,
            steps: [
              ...task.steps.slice(0, payload.step),
              {
                ...task.steps[payload.step],
                step: payload.text,
              },
              ...task.steps.slice(payload.step + 1),
            ],
          };
        }),
      };
    case "DELETE_STEP":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId) {
            return task;
          }
          return {
            ...task,
            steps: [
              ...task.steps.slice(0, payload.step),
              ...task.steps.slice(payload.step + 1),
            ],
          };
        }),
      };
    case "ADD_STEP":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId) {
            return task;
          }
          return {
            ...task,
            steps: task.steps.concat([
              { step: payload.step, completed: false },
            ]),
          };
        }),
      };
    case "MOVE_TO":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId) {
            return task;
          }
          const newSteps = task.steps.concat();
          const item = task.steps[payload.step];
          if (payload.position > payload.step) {
            newSteps.splice(payload.position, 0, item);
            newSteps.splice(payload.step, 1);
          } else {
            newSteps.splice(payload.step, 1);
            newSteps.splice(payload.position, 0, item);
          }
          return {
            ...task,
            steps: newSteps,
          };
        }),
      };
    case "MOVE_UP":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== payload.taskId || payload.step === 0) {
            return task;
          }
          const newSteps = task.steps.concat();
          const temp = newSteps[payload.step];
          newSteps[payload.step] = newSteps[payload.step - 1];
          newSteps[payload.step - 1] = temp;
          return {
            ...task,
            steps: newSteps,
          };
        }),
      };
    case "MOVE_DOWN":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (
            task.id !== payload.taskId ||
            payload.step === task.steps.length - 1
          ) {
            return task;
          }
          const newSteps = task.steps.concat();
          const temp = newSteps[payload.step];
          newSteps[payload.step] = newSteps[payload.step + 1];
          newSteps[payload.step + 1] = temp;
          return {
            ...task,
            steps: newSteps,
          };
        }),
      };
    default:
      return state;
  }
}

function getInitialState() {
  const tasks =
    JSON.parse(localStorage.getItem("task-manager-items-dragging")) ||
    initialState;
  return {
    expandedId: null,
    tasks,
  };
}

function useTaskReducer() {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);

  useEffect(() => {
    localStorage.setItem(
      "task-manager-items-dragging",
      JSON.stringify(state.tasks)
    );
  }, [state.tasks]);

  const toggleExpand = (payload) => dispatch({ type: "TOGGLE", payload });
  const addTask = (payload) => dispatch({ type: "ADD_TASK", payload });
  const editTask = (payload) => dispatch({ type: "EDIT_TASK", payload });
  const deleteTask = (payload) => dispatch({ type: "DELETE_TASK", payload });
  const checkStep = (payload) => dispatch({ type: "CHECK_STEP", payload });
  const editStep = (payload) => dispatch({ type: "EDIT_STEP", payload });
  const deleteStep = (payload) => dispatch({ type: "DELETE_STEP", payload });
  const addStep = (payload) => dispatch({ type: "ADD_STEP", payload });
  const moveStepTo = (payload) => dispatch({ type: "MOVE_TO", payload });
  const moveStepUp = (payload) => dispatch({ type: "MOVE_UP", payload });
  const moveStepDown = (payload) => dispatch({ type: "MOVE_DOWN", payload });

  return {
    state,
    actions: {
      toggleExpand,
      addTask,
      editTask,
      deleteTask,
      checkStep,
      editStep,
      deleteStep,
      addStep,
      moveStepTo,
      moveStepUp,
      moveStepDown,
    },
  };
}

export default useTaskReducer;
