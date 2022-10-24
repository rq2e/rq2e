import { useGameData } from "components/gamedata";
import { Game } from "components/game";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function WordGame() {
  const { updateState, showResults, word, initialGrid } = useGameData();
  if (!word) {
    return null;
  }
  return (
    <Wrapper>
      <Game
        word={word}
        initialGrid={initialGrid}
        onUpdate={updateState!}
        onFinal={showResults!}
      />
    </Wrapper>
  );
}

export default WordGame;
