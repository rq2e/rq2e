import { useEffect } from "react";
import useData from "./useData";

function useThing(id) {
  const thing = useData(({ state }) => state.currentThing);
  const { seeAllThings, doThatThing, undoThatThing, removeThing, loadThing } =
    useData(({ actions }) => actions);
  useEffect(() => void loadThing(id), [id, loadThing]);
  return {
    thing,
    removeThing: () => removeThing(id),
    doThing: () => doThatThing(id),
    seeAllThings,
    undoThing: (did) => undoThatThing(id, did),
    undoLastThing: () =>
      undoThatThing(id, thing.done[thing.done.length - 1].id),
  };
}

export default useThing;
