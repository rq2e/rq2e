import styled from "@emotion/styled";
import Row from "./Row";
import RevealRow from "./RevealRow";
import { Callback, GridWord, RowType } from "../../types";
import WinRow from "./WinRow";

const GridElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

function GridRow({ row, onEffect }: { row: GridWord; onEffect?: Callback }) {
  switch (row.type) {
    case RowType.Winning:
      return <WinRow {...row} onEffect={onEffect} />;
    case RowType.Revealing:
      return <RevealRow {...row} onEffect={onEffect} />;
    case RowType.Empty:
      return <Row word="" />;
    default:
      return <Row {...row} />;
  }
}

function Grid({
  words = [],
  onEffect,
}: {
  words?: GridWord[];
  onEffect: Callback;
}) {
  const rows: GridWord[] = words
    .concat()
    .reverse()
    .concat(Array.from(Array(6 - words.length)).fill({ type: RowType.Empty }));
  const lastWord = words.length;
  return (
    <GridElement>
      {rows.map((row, i) => (
        <GridRow
          key={i}
          row={row}
          onEffect={i + 1 === lastWord ? onEffect : undefined}
        />
      ))}
    </GridElement>
  );
}

export default Grid;
