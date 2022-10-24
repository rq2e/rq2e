import { Status } from "../../types";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import getLabel from "../../utils/getLabel";
import { HTMLAttributes, useEffect, useRef } from "react";

const bloom = keyframes`
  from { opacity: 0 }
  to { opacity: 1; }
`;

const Element = styled.div<{ $status: Status; $justFilled: boolean }>`
  border: 0;
  border: 2px solid;
  background-color: ${({ theme, $status }) =>
    theme.dark.colors.cells.background[$status]};
  border-color: ${({ theme, $status }) =>
    theme.dark.colors.cells.border[$status]};
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 200%;
  height: 2em;
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &:empty {
    background-color: ${({ theme }) =>
      theme.dark.colors.cells.background.empty};
    border-color: ${({ theme, $status }) =>
      theme.dark.colors.cells.border.empty};
  }

  ${({ $justFilled }) =>
    $justFilled &&
    css`
      animation: 0.1s linear 1 ${bloom};
    `}
`;

type CellProps = HTMLAttributes<HTMLDivElement> & {
  char: string;
  status?: Status;
};

function usePrevious<T>(value: T): T {
  const now = useRef(value);
  useEffect(() => {
    now.current = value;
  }, [value]);
  return now.current;
}

function Cell({ char, status = Status.Unknown, ...props }: CellProps) {
  const isEmpty = !char || char === " ";
  const wasEmpty = usePrevious(isEmpty);
  return (
    <Element
      role="img"
      aria-roledescription="cell"
      $status={status}
      aria-label={getLabel(char, status)}
      $justFilled={!isEmpty && wasEmpty}
      {...props}
    >
      {isEmpty ? "" : char}
    </Element>
  );
}

export default Cell;
