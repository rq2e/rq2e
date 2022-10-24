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
  label: "Pets allowed?",
  defaultChecked: true,
};
