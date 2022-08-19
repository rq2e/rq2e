import useData from "./useData";

function useThing(id) {
  const thing = useData(({ state }) => state.things.find((t) => t.id === id));
  const { seeThing, seeAllThings, doThing, undoThing, removeThing } = useData(
    ({ actions }) => actions
  );
  return {
    thing,
    seeThing: () => seeThing(id),
    removeThing: () => removeThing(id),
    doThing: () => doThing(id),
    seeAllThings,
    undoThing: (index) => undoThing({ id, index }),
    undoLastThing: () => undoThing({ id, index: thing.done.length - 1 }),
  };
}

export default useThing;
