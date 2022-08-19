import useData from "./useData";
import useSend from "./useSend";

function useThatThing(id) {
  const send = useSend();
  const thing = useData(({ context }) =>
    context.things.find((t) => t.id === id)
  );
  return {
    thing,
    seeThing: () => send({ type: "SEE", id }),
    doThing: () => send({ type: "DO_THAT", id }),
    undoLastThing: () =>
      send({ type: "UNDO_THAT", id, index: thing.done.length - 1 }),
  };
}

export default useThatThing;
