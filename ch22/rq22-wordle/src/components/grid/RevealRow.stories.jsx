import { Status } from "../../types";
import RevealRow from "./RevealRow";

export default {
  title: "Components/RevealRow",
  component: RevealRow,
  argTypes: { onEffect: { action: "reveal complete" } },
};

const Template = (args) => <RevealRow {...args} />;

export const AllWrong = Template.bind({});
AllWrong.args = {
  word: "trace",
  statuses: [
    Status.Unused,
    Status.Unused,
    Status.Unused,
    Status.Unused,
    Status.Unused,
  ],
};

export const MixedResult = Template.bind({});
MixedResult.args = {
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
