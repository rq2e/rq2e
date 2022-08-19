import useData from "./useData";
import useSend from "./useSend";

function useThisThing() {
  const send = useSend();
  const thing = useData(({ context }) =>
    context.things.find((t) => t.id === context.currentThing)
  );
  return {
    thing,
    removeThing: () => send("REMOVE"),
    doThing: () => send("DO_THIS"),
    seeAllThings: () => send("SEE_ALL"),
    undoThing: (index) => send({ type: "UNDO_THIS", index }),
    undoLastThing: () =>
      send({ type: "UNDO_THIS", index: thing.done.length - 1 }),
  };
}

export default useThisThing;
