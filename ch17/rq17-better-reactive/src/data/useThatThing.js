import { useQuery, useQueryClient } from "react-query";
import { loadThing } from "./api/api";
import useCurrent from "./useCurrent";
import useDoThing from "./api/useDoThing";
import useUndoThing from "./api/useUndoThing";
import useRemoveThing from "./api/useRemoveThing";

function useThatThing() {
  const id = useCurrent((state) => state.currentId);
  const seeAllThings = useCurrent((state) => state.seeAllThings);

  // Find what we already know about this thing
  const queryClient = useQueryClient();
  const things = queryClient.getQueryData("things");
  const partialThing = things.find((t) => t.id === id);
  const placeholderData = {
    ...partialThing,
    description: "...",
    done: Array.from(Array(partialThing.count).map((k, id) => ({ id }))),
  };
  const { data: thing } = useQuery(
    ["currentThing", { id }],
    () => loadThing(id),
    { placeholderData }
  );

  // Handle do/undo with mutation updates
  const onSuccess = (newThing) =>
    queryClient.setQueryData(["currentThing", { id }], newThing);
  const doThing = useDoThing(onSuccess);
  const undoThing = useUndoThing(onSuccess);

  const removeThing = useRemoveThing(seeAllThings);

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
