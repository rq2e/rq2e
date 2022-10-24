import { Status } from "../../types";
import styled from "@emotion/styled";
import getLabel from "../../utils/getLabel";

const Button = styled.button<{ $status: Status; $isLarge: boolean }>`
  border: 0;
  background-color: ${({ theme, $status }) => theme.dark.colors.keys[$status]};
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: ${({ $isLarge }) => ($isLarge ? 140 : 90)}%;
  height: 4rem;
  width: 3em;
  width: 
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
`;

function Key({
  char,
  status,
  isLarge = false,
  onClick,
}: {
  char: string;
  status: Status;
  isLarge: boolean;
  onClick?: () => void;
}) {
  return (
    <Button
      $status={status}
      $isLarge={isLarge}
      aria-label={getLabel(char, status)}
      onClick={onClick}
    >
      {char}
    </Button>
  );
}

export default Key;
