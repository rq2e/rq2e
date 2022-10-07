import { useQuery, gql } from "@apollo/client";

export const GET_THINGS = gql`
  query GetThings {
    things {
      id
      name
      count
    }
  }
`;

function useAllThings() {
  const { loading, error, data } = useQuery(GET_THINGS, {
    errorPolicy: "ignore",
  });
  return !loading && !error ? data.things.map(({ id }) => id) : [];
}

export default useAllThings;
