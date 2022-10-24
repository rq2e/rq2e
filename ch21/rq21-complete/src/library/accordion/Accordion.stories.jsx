import Accordion from "./Accordion";

export default {
  title: "Library/Accordion",
  component: Accordion,
};

const Template = ({ ...args }) => (
  <div style={{ maxWidth: "300px" }}>
    <Accordion {...args}>
      <Accordion.Item>
        <Accordion.Header>First element</Accordion.Header>
        <Accordion.Content>
          The first element is the most important one.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Second element</Accordion.Header>
        <Accordion.Content>
          The second element is the most important one.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Third element</Accordion.Header>
        <Accordion.Content>
          The third element is the most important one.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Fourth element</Accordion.Header>
        <Accordion.Content>
          The fourth element is the most important one.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  activeIndex: 0,
};

export const AllCollapsed = Template.bind({});
AllCollapsed.args = {
  activeIndex: -1,
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  isCollapsible: true,
  activeIndex: 2,
};

export const MultiExpand = Template.bind({});
MultiExpand.args = {
  allowsMultiple: true,
};
