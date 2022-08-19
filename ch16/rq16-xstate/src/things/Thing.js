import styled from "styled-components";

import { useThatThing } from "../data";
import Button from "./Button";
import Progress from "./Progress";
import ThingTitle from "./ThingTitle";

const Section = styled.section`
  border: 2px solid black;
  border-radius: 0.5em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2em;
  width: clamp(10em, 90vw, 60em);
  box-shadow: -6px 6px 0 black;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

function Thing({ id }) {
  const { thing, seeThing, doThing, undoLastThing } = useThatThing(id);
  return (
    <Section>
      <ThingTitle
        name={thing.name}
        count={thing.done.length}
        onDetails={seeThing}
      />
      <Body>
        <Progress value={thing.done.length} />
        <Button onClick={doThing}>➕</Button>
        <Button onClick={undoLastThing}>➖</Button>
      </Body>
    </Section>
  );
}

export default Thing;
