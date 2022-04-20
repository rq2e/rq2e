import { useMemo, useEffect } from 'react';
import useReduction from "use-reduction";

const reducer = {
  play: (state) =>
    ({...state, isRunning: true }),
  pause: (state) =>
    ({...state, isRunning: false }),
  restart: (state) =>
    ({
      ...state,
      remaining: state.initialRemaining,
      isCompleted: false
    }),
  tick: (state) => {
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
};

function useTimer(initialRemaining) {
  const initialState = useMemo(() => ({
    initialRemaining,
    remaining: initialRemaining,
    isRunning: false,
    isCompleted: false, 
  }), [initialRemaining]);
  const [state, actions] = useReduction(initialState, reducer);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    const interval = setInterval(() => actions.tick(), 1000);
    return () => clearInterval(interval);
  }, [state.isRunning, actions]);
  
  return { state, actions };
}

export default useTimer;