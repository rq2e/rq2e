import { Status } from "../../types";
import { INITIAL_STATUS } from "../../utils/constants";
import Keyboard from "./Keyboard";

export default {
  title: "Components/Keyboard",
  component: Keyboard,
  argTypes: {
    onKey: { action: "key pressed" },
    onEnter: { action: "enter pressed" },
    onBackspace: { action: "backspace pressed" },
  },
};

const Template = (args) => <Keyboard {...args} />;

export const PreGame = Template.bind({});
PreGame.args = { statuses: INITIAL_STATUS };

export const EarlyGame = Template.bind({});
EarlyGame.args = {
  statuses: Object.assign({}, INITIAL_STATUS, {
    c: Status.Unused,
    h: Status.Used,
    a: Status.Correct,
    s: Status.Used,
    e: Status.Unused,
  }),
};

export const LateGame = Template.bind({});
LateGame.args = {
  statuses: Object.assign({}, INITIAL_STATUS, {
    a: Status.Correct,
    b: Status.Unused,
    c: Status.Correct,
    d: Status.Unused,
    e: Status.Correct,
    g: Status.Unused,
    h: Status.Unused,
    i: Status.Unused,
    l: Status.Unused,
    m: Status.Unused,
    n: Status.Unused,
    o: Status.Unused,
    r: Status.Unused,
    s: Status.Unused,
    t: Status.Used,
    u: Status.Unused,
  }),
};
