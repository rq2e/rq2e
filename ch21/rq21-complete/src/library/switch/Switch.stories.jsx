import Switch from "./Switch";

export default {
  title: "Library/Switch",
  component: Switch,
};

const Template = ({ children, ...args }) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enable Wifi",
};

export const Prechecked = Template.bind({});
Prechecked.args = {
  label: "Pets allowed",
  defaultChecked: true,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  label: "Unplug the internet",
  defaultChecked: false,
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Power to the people",
  defaultChecked: true,
  disabled: true,
};
