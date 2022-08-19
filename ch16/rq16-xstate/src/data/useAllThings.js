import useData from "./useData";

function useAllThings() {
  return useData((state) => state.context.things).map(({ id }) => id);
}

export default useAllThings;
