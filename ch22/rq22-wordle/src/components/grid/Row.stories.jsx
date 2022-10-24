import { Status } from "../../types";
import Row from "./Row";

export default {
  title: "Components/Row",
  component: Row,
};

const Template = (args) => <Row {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Partial = Template.bind({});
Partial.args = { word: "tra" };

export const InputWord = Template.bind({});
InputWord.args = { word: "trace" };

export const InputWithError = Template.bind({});
InputWithError.args = { word: "tracc", isError: true };

export const GuessedWord = Template.bind({});
GuessedWord.args = {
  word: "trace",
  statuses: [
    Status.Correct,
    Status.Unused,
    Status.Used,
    Status.Unused,
    Status.Used,
  ],
};

export const MultiLetter = Template.bind({});
MultiLetter.args = {
  word: "melee",
  statuses: [
    Status.Used,
    Status.Used,
    Status.Unused,
    Status.Correct,
    Status.Unused,
  ],
};

export const CorrectWord = Template.bind({});
CorrectWord.args = {
  word: "trace",
  statuses: [
    Status.Correct,
    Status.Correct,
    Status.Correct,
    Status.Correct,
    Status.Correct,
  ],
};
