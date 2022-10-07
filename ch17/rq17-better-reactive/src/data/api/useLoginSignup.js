import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useLoginSignup() {
  const queryClient = useQueryClient();
  const setUser = (user) => queryClient.setQueryData("user", user);
  const { mutate: login } = useMutation(API.login, {
    onSuccess: (data) => setUser(data.user),
  });
  const { mutate: signup } = useMutation(API.signup, {
    onSuccess: (data) => setUser(data),
  });
  return { login, signup };
}

export default useLoginSignup;
