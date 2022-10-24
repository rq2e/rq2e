import { RowType, Status } from "../../types";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: { onEffect: { action: "effect complete" } },
};

const Template = (args) => <Grid {...args} />;

const WORDS = {
  PartialInput: {
    word: "par",
  },
  FullInput: {
    word: "party",
    type: RowType.Regular,
  },
  Guess1: {
    word: "party",
    type: RowType.Regular,
    statuses: [
      Status.Used,
      Status.Unused,
      Status.Used,
      Status.Unused,
      Status.Unused,
    ],
  },
  Reveal1: {
    word: "party",
    type: RowType.Revealing,
    statuses: [
      Status.Used,
      Status.Unused,
      Status.Used,
      Status.Unused,
      Status.Unused,
    ],
  },
  Guess2: {
    word: "trace",
    type: RowType.Regular,
    statuses: [
      Status.Used,
      Status.Unused,
      Status.Correct,
      Status.Correct,
      Status.Used,
    ],
  },
  Reveal2: {
    word: "trace",
    type: RowType.Revealing,
    statuses: [
      Status.Used,
      Status.Unused,
      Status.Correct,
      Status.Correct,
      Status.Used,
    ],
  },
  FullInput3: {
    word: "enact",
    type: RowType.Regular,
  },
  Error3: {
    word: "evact",
    type: RowType.Regular,
    isError: true,
  },
  Guess3: {
    word: "enact",
    type: RowType.Regular,
    statuses: [
      Status.Correct,
      Status.Correct,
      Status.Correct,
      Status.Correct,
      Status.Unused,
    ],
  },
  Reveal3: {
    word: "enact",
    type: RowType.Revealing,
    statuses: [
      Status.Correct,
      Status.Correct,
      Status.Correct,
      Status.Correct,
      Status.Unused,
    ],
  },
  Correct: {
    word: "exact",
    type: RowType.Regular,
    statuses: [
      Status.Correct,
      Status.Correct,
      Status.Correct,
      Status.Correct,
      Status.Correct,
    ],
  },
  Winning: {
    word: "exact",
    type: RowType.Winning,
  },
};

export const Empty = Template.bind({});
Empty.args = {};

export const Partial = Template.bind({});
Partial.args = { words: [WORDS.PartialInput] };

export const Input = Template.bind({});
Input.args = {
  words: [WORDS.FullInput],
};

export const Further = Template.bind({});
Further.args = {
  words: [WORDS.FullInput3, WORDS.Guess2, WORDS.Guess1],
};

export const WithReveal = Template.bind({});
WithReveal.args = {
  words: [WORDS.Reveal3, WORDS.Guess2, WORDS.Guess1],
};

export const WithError = Template.bind({});
WithError.args = {
  words: [WORDS.Error3, WORDS.Guess2, WORDS.Guess1],
};

export const Completed = Template.bind({});
Completed.args = {
  words: [WORDS.Correct, WORDS.Guess3, WORDS.Guess2, WORDS.Guess1],
};

export const Winning = Template.bind({});
Winning.args = {
  words: [WORDS.Winning, WORDS.Guess3, WORDS.Guess2, WORDS.Guess1],
};

export const Initial = Template.bind({});
Initial.args = {
  words: [WORDS.Reveal3, WORDS.Reveal2, WORDS.Reveal1],
};
