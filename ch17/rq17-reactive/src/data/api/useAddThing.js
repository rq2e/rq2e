import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useAddThing() {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries("things");
  const { mutate: addThing } = useMutation(API.addThing, { onSuccess });
  return addThing;
}

export default useAddThing;
