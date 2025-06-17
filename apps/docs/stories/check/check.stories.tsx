import type { Meta, StoryObj } from "@storybook/react";
import { Check } from "@onepercman/ui";

const meta = {
  title: "Components/Check",
  component: Check,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center">
      <Check className="h-6 w-6 text-primary" />
    </div>
  ),
};
