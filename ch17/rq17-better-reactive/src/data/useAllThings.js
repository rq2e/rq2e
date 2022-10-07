import { useQuery } from "react-query";
import { loadThings } from "./api/api";

function useAllThings() {
  const { data = [] } = useQuery("things", loadThings);
  return data.map(({ id }) => id);
}

export default useAllThings;
