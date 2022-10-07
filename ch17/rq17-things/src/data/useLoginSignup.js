import useData from "./useData";

function useLoginSignup() {
  const login = useData(({ actions }) => actions.login);
  const signup = useData(({ actions }) => actions.signup);
  return { login, signup };
}

export default useLoginSignup;
