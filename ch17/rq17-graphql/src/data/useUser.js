import { useQuery, gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    user {
      id
    }
  }
`;

function useUser() {
  const { loading, error, data } = useQuery(GET_USER);
  return !loading && !error ? data.user : null;
}

export default useUser;
