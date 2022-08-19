import useData from "./useData";

function useAddThing() {
  return useData().actions.addThing;
}

export default useAddThing;
