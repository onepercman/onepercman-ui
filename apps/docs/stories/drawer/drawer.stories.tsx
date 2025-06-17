import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as Drawer } from "ui";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Title>Drawer Title</Drawer.Title>
        <Drawer.Description>
          This is a drawer description. You can put any content here.
        </Drawer.Description>
        <Drawer.CloseTrigger />
      </Drawer.Content>
    </Drawer.Root>
  ),
};
