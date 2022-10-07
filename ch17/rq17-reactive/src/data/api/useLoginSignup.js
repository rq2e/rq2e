import { useQueryClient, useMutation } from "react-query";
import * as API from "./api";

function useLoginSignup() {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries("user");
  const { mutate: login } = useMutation(API.login, { onSuccess });
  const { mutate: signup } = useMutation(API.signup, { onSuccess });
  return { login, signup };
}

export default useLoginSignup;
