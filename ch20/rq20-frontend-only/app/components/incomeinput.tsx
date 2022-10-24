import type { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  padding: 3em 1em;
  background: linear-gradient(
    120deg,
    hsl(235deg 66% 54%) 0%,
    hsl(244deg 68% 64%) 9%,
    hsl(249deg 72% 72%) 18%,
    hsl(252deg 80% 79%) 27%,
    hsl(269deg 75% 83%) 36%,
    hsl(318deg 67% 81%) 45%,
    hsl(344deg 90% 83%) 54%,
    hsl(5deg 87% 82%) 63%,
    hsl(3deg 71% 77%) 73%,
    hsl(348deg 58% 68%) 82%,
    hsl(333deg 47% 59%) 91%,
    hsl(315deg 37% 48%) 100%
  );
`;
const Heading = styled.p`
  margin: 0;
  color: white;
  font-size: 80%;
  text-transform: uppercase;
  font-weight: bold;
`;

const Amount = styled.input`
  width: 75%;
  background: transparent;
  color: white;
  border: 1px solid;
  font-size: 200%;
  text-align: center;
  margin-top: 0.25em;
`;

function Income(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper>
      <Heading>Income</Heading>
      <Amount type="number" name="income" {...props} />
    </Wrapper>
  );
}

export default Income;
