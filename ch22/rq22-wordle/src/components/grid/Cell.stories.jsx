import { Status } from "../../types";
import Cell from "./Cell";

export default {
  title: "Components/Cell",
  component: Cell,
};

const Template = (args) => <Cell {...args} />;

export const Empty = Template.bind({});
Empty.args = { char: " " };

export const Unknown = Template.bind({});
Unknown.args = { char: "a" };

export const Unused = Template.bind({});
Unused.args = { status: Status.Unused, char: "b" };

export const Used = Template.bind({});
Used.args = { status: Status.Used, char: "c" };

export const Correct = Template.bind({});
Correct.args = { status: Status.Correct, char: "d" };
