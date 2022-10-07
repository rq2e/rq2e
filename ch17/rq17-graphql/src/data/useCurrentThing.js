import { makeVar, useReactiveVar } from "@apollo/client";

const current = makeVar(null);

export const setCurrent = current;

function useCurrentThing() {
  return useReactiveVar(current);
}

export default useCurrentThing;
