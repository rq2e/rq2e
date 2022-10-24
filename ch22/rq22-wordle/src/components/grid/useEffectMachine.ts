import { useMachine } from "@xstate/react";
import { useEffect, useRef } from "react";
import { Callback } from "types";
import { createMachine, assign } from "xstate";

interface EffectContext {
  active: number | null;
  counter: number;
}

type EffectEvent = { type: "START" } | { type: "NEXT" };

type EffectState =
  | { value: "idle"; context: EffectContext & { EffectCounter: 0 } }
  | { value: "active"; context: EffectContext }
  | { value: "done"; context: EffectContext };

const EffectMachine = createMachine<EffectContext, EffectEvent, EffectState>(
  {
    predictableActionArguments: true,
    id: "effect",
    initial: "idle",
    context: { active: null, counter: -1 },
    states: {
      idle: {
        on: {
          START: { target: "active", actions: "next" },
        },
      },
      active: {
        on: {
          NEXT: [
            { target: "done", cond: (ctx) => ctx.counter === 5 },
            { target: "active", actions: "next" },
          ],
        },
      },
      done: { type: "final" },
    },
  },
  {
    actions: {
      next: assign(({ active, counter }) => ({
        active: counter + 1,
        counter: counter + 1,
      })),
    },
  }
);

function useEffectMachine(onDone?: Callback) {
  const [current, send] = useMachine(EffectMachine);
  const { active, counter } = current.context;
  useEffect(() => {
    const timeout = setTimeout(() => send("START"), 100);
    return () => clearTimeout(timeout);
  }, [send]);
  const onDoneTracker = useRef(onDone);
  useEffect(() => {
    if (current.matches("done") && onDoneTracker.current) {
      onDoneTracker.current();
    }
  }, [current]);
  return { active, counter, next: () => send("NEXT") };
}

export default useEffectMachine;
