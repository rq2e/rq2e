import styled from "@emotion/styled";
import { useAlert } from "components/overlay";
import Grid from "components/grid/Grid";
import Keyboard from "components/keyboard/Keyboard";
import { Menu } from "components/menu";
import { useEffect } from "react";
import { Callback, UpdateCallback } from "types";
import useGameMachine from "./useGameMachine";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2em;
  height: 100vh;
`;

function Game({
  word,
  initialGrid = [],
  onUpdate,
  onFinal,
}: {
  word: string;
  initialGrid?: string[];
  onUpdate: UpdateCallback;
  onFinal: Callback<boolean>;
}) {
  const alert = useAlert();
  const { grid, keyboard, error, effectComplete, submit, type, undo } =
    useGameMachine(word, initialGrid, onUpdate, onFinal);
  useEffect(() => void (error && alert(error)), [error, alert]);
  return (
    <Wrapper>
      <Menu />
      <Grid words={grid} onEffect={effectComplete} />
      <Keyboard
        statuses={keyboard}
        onKey={type}
        onEnter={submit}
        onBackspace={undo}
      />
    </Wrapper>
  );
}

export default Game;
