import { useMutation } from "react-query";
import * as API from "./api";

function useUndoThing(onSuccess) {
  const { mutate: undoThing } = useMutation(API.undoThing, { onSuccess });
  return undoThing;
}

export default useUndoThing;
