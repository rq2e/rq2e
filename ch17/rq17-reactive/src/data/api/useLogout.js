import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useLogout() {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries("user");
  const { mutate: logout } = useMutation(API.logout, { onSuccess });
  return logout;
}

export default useLogout;
