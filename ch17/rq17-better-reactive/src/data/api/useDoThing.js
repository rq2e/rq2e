import { useMutation } from "react-query";
import * as API from "./api";

function useDoThing(onSuccess) {
  const { mutate: doThing } = useMutation(API.doThing, { onSuccess });
  return doThing;
}

export default useDoThing;
