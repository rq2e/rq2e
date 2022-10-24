import Button from "./Button";
import { FaHourglassEnd } from "react-icons/fa";

export default {
  title: "Library/Button/Group",
  component: Button.Group,
};

const GroupTemplate = (args) => (
  <Button.Group {...args}>
    <Button>Button 1</Button>
    <Button variant="outline">
      Button 2 <FaHourglassEnd />
    </Button>
    <Button variant="ghost">Button 3</Button>
  </Button.Group>
);
export const HorizontalGroup = GroupTemplate.bind({});
HorizontalGroup.args = {};

export const VerticalGroup = GroupTemplate.bind({});
VerticalGroup.args = { isVertical: true };

export const FullButtonGrid = () => (
  <Button.Group>
    <Button.Group isVertical>
      <Button>Normal</Button>
      <Button icon={<FaHourglassEnd />}>With Icon</Button>
      <Button disabled>Disabled</Button>
    </Button.Group>
    <Button.Group isVertical>
      <Button variant="outline">Outline</Button>
      <Button variant="outline" icon={<FaHourglassEnd />}>
        With Icon
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </Button.Group>
    <Button.Group isVertical>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost" icon={<FaHourglassEnd />}>
        With Icon
      </Button>
      <Button variant="ghost" disabled>
        Disabled
      </Button>
    </Button.Group>
  </Button.Group>
);
