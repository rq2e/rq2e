import { useQuery } from "react-query";
import { getUser } from "./api/api";

function useUser() {
  const { data } = useQuery("user", getUser, { retry: false });
  return data;
}

export default useUser;
