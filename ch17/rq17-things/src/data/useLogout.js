import useData from "./useData";

function useLogout() {
  const logout = useData(({ actions }) => actions.logout);
  return logout;
}

export default useLogout;
