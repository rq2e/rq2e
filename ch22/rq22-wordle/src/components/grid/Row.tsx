import { RegularGridWord, Status } from "../../types";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Cell from "./Cell";

const jiggle = keyframes`
  from { translate: 0 0; }
  to { translate: -5px 0; }
`;

export const RowElement = styled.div<{ $isError?: boolean }>`
  display: flex;
  gap: 6px;

  ${({ $isError }) =>
    $isError &&
    css`
      animation: 0.08s ease-in-out 6 alternate ${jiggle};
    `}
`;

function Row({
  word = "",
  isError = false,
  statuses = [],
}: Omit<RegularGridWord, "type">) {
  const characters = word.padEnd(5, " ").split("");
  return (
    <RowElement $isError={isError}>
      {characters.map((key, index) => (
        <Cell
          key={index}
          char={key}
          status={statuses[index] || Status.Unknown}
        />
      ))}
    </RowElement>
  );
}

export default Row;
