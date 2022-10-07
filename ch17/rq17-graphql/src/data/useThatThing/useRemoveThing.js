import { gql, useMutation } from "@apollo/client";
import { setCurrent } from "../useCurrentThing";
import { GET_THINGS } from "../useAllThings";

const REMOVETHING = gql`
  mutation DeleteThing($id: String!) {
    deletething(id: $id) {
      thing {
        id
      }
    }
  }
`;

function useRemoveThing() {
  const [removeThing] = useMutation(REMOVETHING);
  return (id) =>
    removeThing({
      variables: { id },
      update(cache) {
        cache.updateQuery({ query: GET_THINGS }, ({ things }) => ({
          things: things.filter((t) => t.id !== id),
        }));
      },
      onCompleted: () => setCurrent(null),
    });
}

export default useRemoveThing;
