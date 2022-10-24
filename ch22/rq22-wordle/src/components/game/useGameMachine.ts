import { useMachine } from "@xstate/react";
import { Callback, UpdateCallback } from "types";
import { useEffect, useRef } from "react";
import gameMachine from "./gameMachine";

function useGameMachine(
  word: string,
  initialGrid: string[],
  onUpdate?: UpdateCallback,
  onFinal?: Callback
) {
  const [current, send] = useMachine(gameMachine);
  const { grid, error, keyboard } = current.context;
  const initialState = useRef({ word, initialGrid });
  useEffect(() => {
    send({ type: "START", ...initialState.current });
  }, [send]);

  // Complete callback
  const onFinalTracker = useRef(onFinal);
  onFinalTracker.current = onFinal;
  useEffect(() => {
    if (current.done && onFinalTracker.current) {
      onFinalTracker.current();
    }
  }, [current, onFinalTracker]);

  // New row added callback
  const rowCounter = useRef(initialGrid.length);
  const onUpdateTracker = useRef(onUpdate);
  onUpdateTracker.current = onUpdate;
  useEffect(() => {
    const completedRows = grid.filter((row) => "statuses" in row);
    if (completedRows.length > rowCounter.current) {
      rowCounter.current = completedRows.length;
      const rows = completedRows.map(({ word }) => word);
      const won = rows[0] === word;
      const lost = !won && rows.length === 6;
      if (won || lost) {
        onUpdateTracker.current?.(rows, won);
      } else {
        onUpdateTracker.current?.(rows);
      }
    }
  }, [grid, word]);

  return {
    grid,
    error,
    keyboard,
    effectComplete: () => send("EFFECT_COMPLETE"),
    submit: () => send("SUBMIT"),
    type: (char: string) => send({ type: "TYPE", char }),
    undo: () => send("UNDO"),
  };
}

export default useGameMachine;
