import { useQuery, useQueryClient } from "react-query";
import { loadThings } from "./api/api";
import useDoThing from "./api/useDoThing";
import useUndoThing from "./api/useUndoThing";
import useCurrent from "./useCurrent";

function useThisThing(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("things", loadThings);
  const onSuccess = ({ name, done }) =>
    queryClient.setQueryData("things", (oldThings) =>
      oldThings.map((oldThing) =>
        oldThing.id !== id ? oldThing : { id, name, count: done.length }
      )
    );
  const doThing = useDoThing(onSuccess);
  const undoThing = useUndoThing(onSuccess);
  const seeThing = useCurrent((state) => state.seeThing);
  return {
    thing: data.find((t) => t.id === id),
    doThing: () => doThing(id),
    undoLastThing: () => undoThing({ id, did: "last" }),
    seeThing: () => seeThing(id),
  };
}

export default useThisThing;
