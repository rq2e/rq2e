import { useState } from "react";
import { useLoginSignup } from "../data";
import styled from "styled-components";

import Login from "./Login";
import Signup from "./Signup";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.section`
  width: clamp(10em, 60vw, 40em);
  margin-top: 10vh;
  border: 2px solid black;
  border-radius: 0.5em;
  padding: 2em;
  box-shadow: -6px 6px 0 black;
`;

function LoginSignup() {
  const { login, signup } = useLoginSignup();
  const [isNewUser, setNewUser] = useState(false);
  return (
    <Main>
      <Wrapper>
        {isNewUser ? (
          <Signup onBack={() => setNewUser(false)} onSignup={signup} />
        ) : (
          <Login onNext={() => setNewUser(true)} onLogin={login} />
        )}
      </Wrapper>
    </Main>
  );
}

export default LoginSignup;
