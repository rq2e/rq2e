import styled from "styled-components";
import Button from "./Button";

const Title = styled.h3`
  margin: 0;
  display: flex;
  gap: 0.3em;
  align-items: center;
  flex-wrap: wrap;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Number = styled.span`
  font-family: "Montserrat", sans-serif;
  font-variant-numeric: tabular-nums;
  font-weight: 200;
  font-size: 70%;
`;

function ThingTitle({ name, count, onDetails }) {
  return (
    <Header>
      <Title>
        {name}
        <Number>[{count.toString().padStart(3, "0")}/100]</Number>
      </Title>
      <Button onClick={onDetails}>❯ Details</Button>
    </Header>
  );
}

export default ThingTitle;
