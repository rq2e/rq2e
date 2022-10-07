import { gql, useMutation, useApolloClient } from "@apollo/client";

const LOGOUT = gql`
  mutation Logout {
    logout {
      user {
        id
      }
    }
  }
`;

function useLogout() {
  const client = useApolloClient();
  const [logout] = useMutation(LOGOUT, {
    update: () => client.resetStore(),
  });
  return logout;
}

export default useLogout;
