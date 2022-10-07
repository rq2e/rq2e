import useData from "./useData";

function useThing(id) {
  const thing = useData(({ state }) => state.things.find((t) => t.id === id));
  const { seeThing, doThisThing, undoThisThing } = useData(
    ({ actions }) => actions
  );
  return {
    thing,
    seeThing: () => seeThing(id),
    doThing: () => doThisThing(id),
    undoLastThing: () =>
      undoThisThing(id, thing.done[thing.done.length - 1].id),
  };
}

export default useThing;
