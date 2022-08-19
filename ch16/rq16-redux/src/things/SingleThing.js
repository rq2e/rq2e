import styled from "styled-components";

import { useThing } from "../data";
import Button from "./Button";
import RemoveButton from "./RemoveButton";
import Grid from "./Grid";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin: 2em auto;
  max-width: 80em;
  position: relative;
`;
const Header = styled.header`
  display: grid;
  grid-template:
    "back remove" 2em
    "do undo" 2em
    "title title" 2em / auto auto;
  align-items: center;
  width: clamp(10em, 80vw, 80em);
  gap: 1em;

  @media (min-width: 30em) {
    grid-template:
      "back remove remove" 2em
      "do title undo" 3em / 1fr auto 1fr;
  }

  @media (min-width: 70em) {
    grid-template: "back do title undo remove" auto / 1fr auto auto auto 1fr;
  }
`;
const Back = styled.div`
  grid-area: back;
  display: flex;
`;
const Do = styled.div`
  grid-area: do;
  display: flex;
`;
const Undo = styled.div`
  grid-area: undo;
  display: flex;
  justify-content: flex-end;
`;
const Remove = styled.div`
  grid-area: remove;
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.h1`
  grid-area: title;
  margin: 0;
  text-align: center;
`;

function SingleThing({ id }) {
  const {
    thing,
    seeAllThings,
    doThing,
    removeThing,
    undoLastThing,
    undoThing,
  } = useThing(id);
  return (
    <Main>
      <Header>
        <Back>
          <Button onClick={seeAllThings}>❮ Back</Button>
        </Back>
        <Do>
          <Button onClick={doThing}>➕ Do</Button>
        </Do>
        <Title>{thing.name}</Title>
        <Undo>
          <Button onClick={undoLastThing}>➖ Undo</Button>
        </Undo>
        <Remove>
          <RemoveButton onRemove={removeThing} />
        </Remove>
      </Header>
      <Grid onUndo={undoThing} done={thing.done} />
    </Main>
  );
}

export default SingleThing;
