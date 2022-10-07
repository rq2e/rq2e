import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useAddThing() {
  const queryClient = useQueryClient();
  const { mutate: addThing } = useMutation(API.addThing, {
    onMutate: (newData) => {
      queryClient.cancelQueries("things").then(() => {
        const oldValue = queryClient.getQueryData("things");
        const newThing = { ...newData, count: 0 };
        queryClient.setQueryData(["things"], (old) => [...old, newThing]);
        return { oldValue };
      });
    },
    onError: (error, data, { oldValue }) =>
      queryClient.setQueriesData("things", oldValue),
    onSettled: () => queryClient.invalidateQueries("things"),
  });
  return addThing;
}

export default useAddThing;
