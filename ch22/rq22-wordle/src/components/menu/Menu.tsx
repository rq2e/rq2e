import styled from "@emotion/styled";
import { FaRegQuestionCircle, FaChartLine } from "react-icons/fa";

import { useGameDialogs } from "components/gamedata";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #3a3a3a;
  color: white;
  align-self: stretch;
  padding: 0.5em 2em;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1em;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  border: 0;
  font-size: 150%;
  cursor: pointer;
`;

function Menu() {
  const { showResults, showWelcome } = useGameDialogs();
  return (
    <Navbar>
      <span></span>
      <Title>WordGame</Title>
      <Buttons>
        <Button onClick={showWelcome}>
          <FaRegQuestionCircle />
        </Button>
        <Button onClick={showResults}>
          <FaChartLine />
        </Button>
      </Buttons>
    </Navbar>
  );
}

export default Menu;
