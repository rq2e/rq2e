import styled from "styled-components";

const GridList = styled.ol`
  --grid-width: 1.5em;
  --grid-height: 1.5em;
  --gap-size: 0.25em;
  --row-count: 10;
  --time-visible: hidden;
  display: flex;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  gap: var(--gap-size);
  width: calc(
    var(--row-count) * var(--grid-width) + (var(--row-count) - 1) *
      var(--gap-size)
  );

  @media (min-width: 40em) {
    --grid-width: 2em;
    --grid-height: 2em;
  }
  @media (min-width: 50em) {
    --grid-width: 3em;
    --grid-height: 3em;
  }
  @media (min-width: 80em) {
    --grid-width: 6em;
    --grid-height: 3.5em;
    --time-visible: visible;
  }
`;

const Cell = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--grid-width);
  height: var(--grid-height);
  border: 1px solid black;
  border-radius: 0.25em;
  background-color: ${({ $done }) => ($done ? "hotpink" : "transparent")};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  box-shadow: -1px 1px 0 black;
`;

const Time = styled.time`
  display: block;
  visibility: var(--time-visible);
  font-family: "Montserrat", sans-serif;
  font-variant-numeric: tabular-nums;
  font-weight: 200;
  font-size: 80%;
  line-height: 1.6;
`;

const A100 = Array.from(Array(100)).map((k, v) => v);

function Grid({ onUndo, done }) {
  return (
    <GridList>
      {A100.map((index) => ({
        index,
        done: index < done.length,
        time: done[index] && new Date(done[index]),
      })).map(({ index, done, time }) => (
        <Cell
          onClick={done ? () => onUndo(index) : null}
          key={index}
          $done={done}
          $clickable={done}
        >
          <Time>{time?.toLocaleDateString?.()}</Time>
          <Time>{time?.toLocaleTimeString?.()}</Time>
        </Cell>
      ))}
    </GridList>
  );
}

export default Grid;
