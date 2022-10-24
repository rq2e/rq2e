import { Status, KeyboardStatus } from "../../types";
import styled from "@emotion/styled";
import Key from "./Key";
import useHandleCharacter, { KeyboardCallbacks } from "./useHandleCharacter";
import { KEYBOARD_LAYOUT, LARGE_KEYS } from "../../utils/constants";

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  gap: 6px;
`;

type KeyboardProps = KeyboardCallbacks & {
  statuses: KeyboardStatus;
};

function Keyboard({ statuses, onKey, onEnter, onBackspace }: KeyboardProps) {
  const handleCharacter = useHandleCharacter({ onKey, onEnter, onBackspace });
  return (
    <Board>
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((char) => (
            <Key
              key={char}
              char={char}
              status={
                LARGE_KEYS.includes(char) ? Status.Unknown : statuses[char]
              }
              isLarge={LARGE_KEYS.includes(char)}
              onClick={() => handleCharacter(char)}
            />
          ))}
        </Row>
      ))}
    </Board>
  );
}

export default Keyboard;
