import Button from "./Button";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

export default {
  title: "Library/Button",
  component: Button,
};

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = { children: "Regular button" };

export const Outline = Template.bind({});
Outline.args = { variant: "outline", children: "Fancy outline" };

export const Ghost = Template.bind({});
Ghost.args = { variant: "ghost", children: "Ghost-like!" };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, children: "I'm disabled" };

export const WithIcon = Template.bind({});
WithIcon.args = { children: "Send", icon: <FaPaperPlane /> };

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: "Profile",
  isIconFirst: true,
  icon: <FaUserCircle />,
};
