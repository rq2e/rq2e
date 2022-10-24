import { Status } from "../../types";
import Key from "./Key";

export default {
  title: "Components/Key",
  component: Key,
  argTypes: { onClick: { action: "key press" } },
};

const Template = (args) => <Key {...args} />;

export const Unknown = Template.bind({});
Unknown.args = { status: Status.Unknown, char: "a" };

export const Unused = Template.bind({});
Unused.args = { status: Status.Unused, char: "b" };

export const Used = Template.bind({});
Used.args = { status: Status.Used, char: "c" };

export const Correct = Template.bind({});
Correct.args = { status: Status.Correct, char: "d" };

export const Enter = Template.bind({});
Enter.args = { status: Status.Unknown, char: "⏎", isLarge: true };

export const Backspace = Template.bind({});
Backspace.args = { status: Status.Unknown, char: "⌫", isLarge: true };
