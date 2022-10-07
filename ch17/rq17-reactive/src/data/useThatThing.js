import { useQuery } from "react-query";
import { loadThing } from "./api/api";
import useCurrent from "./useCurrent";
import useDoThing from "./api/useDoThing";
import useUndoThing from "./api/useUndoThing";
import useRemoveThing from "./api/useRemoveThing";

function useThatThing() {
  const id = useCurrent((state) => state.currentId);
  const seeAllThings = useCurrent((state) => state.seeAllThings);

  const doThing = useDoThing("currentThing");
  const undoThing = useUndoThing("currentThing");
  const removeThing = useRemoveThing(seeAllThings);

  const { data: thing } = useQuery(["currentThing", { id }], () =>
    loadThing(id)
  );

  return {
    thing,
    doThing: () => doThing(id),
    undoThing: (did) => undoThing({ id, did }),
    undoLastThing: () => undoThing({ id, did: "last" }),
    removeThing: () => removeThing(id),
    seeAllThings,
  };
}

export default useThatThing;
