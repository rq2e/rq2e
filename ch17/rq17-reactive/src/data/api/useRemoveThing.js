import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useRemoveThing(then) {
  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries("things");
    queryClient.invalidateQueries("currentThing");
    then();
  };
  const { mutate: removeThing } = useMutation(API.removeThing, { onSuccess });
  return removeThing;
}

export default useRemoveThing;
