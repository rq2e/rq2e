import { gql, useMutation } from "@apollo/client";
import { GET_USER } from "./useUser";

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
      }
    }
  }
`;

const SIGNUP = gql`
  mutation Signup(
    $username: String!
    $password1: String!
    $password2: String!
  ) {
    login(username: $username, password1: $password1, password2: $password2) {
      user {
        id
      }
    }
  }
`;

function useLoginSignup() {
  const updater = (cache, user) =>
    cache.updateQuery({ query: GET_USER }, () => user);
  const [login] = useMutation(LOGIN, {
    update: (cache, response) => updater(cache, response.data.login),
  });
  const [signup] = useMutation(SIGNUP, {
    update: (cache, response) => updater(cache, response.signup),
  });
  return {
    login: (variables) => login({ variables }),
    signup: (variables) => signup({ variables }),
  };
}

export default useLoginSignup;
