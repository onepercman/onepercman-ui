import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "ui";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div className="p-4">Content for Tab 1</div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <div className="p-4">Content for Tab 2</div>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <div className="p-4">Content for Tab 3</div>
        </Tabs.Content>
      </Tabs>
    </div>
  ),
};
