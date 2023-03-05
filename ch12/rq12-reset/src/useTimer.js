import { useEffect, useReducer } from "react";

function reducer(state, { type, payload }) {
  switch (type) {
    case "PLAY":
      return { ...state, isRunning: true };
    case "PAUSE":
      return { ...state, isRunning: false };
    case "RESTART":
      return {
        ...state,
        remaining: state.initialRemaining,
        isCompleted: false,
      };
    case "TICK": {
      const remaining = state.remaining - 1;
      if (remaining > 0) {
        return {
          ...state,
          remaining,
        };
      }
      return {
        ...state,
        remaining: 0,
        isRunning: false,
        isCompleted: true,
      };
    }
    default:
      return state;
  }
}

function useTimer(initialRemaining) {
  const initialState = {
    initialRemaining,
    remaining: initialRemaining,
    isRunning: false,
    isCompleted: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(interval);
  }, [state.isRunning, dispatch]);

  return { state, dispatch };
}

export default useTimer;
