import type { Meta, StoryObj } from "@storybook/react";
import { Countdown } from "@onepercman/ui";

const meta: Meta<typeof Countdown> = {
  title: "Components/Countdown",
  component: Countdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Countdown>;

export const Default: Story = {
  args: {
    value: 60,
    maxValue: 99,
  },
};
