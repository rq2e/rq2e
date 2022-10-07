import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useUndoThing(query) {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries(query);
  const { mutate: undoThing } = useMutation(API.undoThing, { onSuccess });
  return undoThing;
}

export default useUndoThing;
