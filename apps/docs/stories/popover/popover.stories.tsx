import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "@onepercman/ui";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>Open Popover</Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Title>Popover Title</Popover.Title>
        <Popover.Description>
          This is a popover description. You can put any content here.
        </Popover.Description>
        <Popover.CloseTrigger>✕</Popover.CloseTrigger>
      </Popover.Content>
    </Popover.Root>
  ),
};
