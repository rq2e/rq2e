import useData from "./useData";

function useAddThing() {
  return useData((state) => state.addThing);
}

export default useAddThing;
