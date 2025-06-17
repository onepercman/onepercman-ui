import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "@onepercman/ui";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-x-2">
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="sm">K</Kbd>
    </div>
  ),
};
