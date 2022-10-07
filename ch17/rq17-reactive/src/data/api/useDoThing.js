import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useDoThing(query) {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries(query);
  const { mutate: doThing } = useMutation(API.doThing, { onSuccess });
  return doThing;
}

export default useDoThing;
