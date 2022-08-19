import useData from "./useData";

function useAllThings() {
  return useData((state) => state.things).map(({ id }) => id);
}

export default useAllThings;
