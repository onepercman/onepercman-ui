import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timer } from "ui";

const meta = {
  title: "Components/Timer",
  component: Timer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    duration: 60,
    onComplete: () => console.log("Timer completed"),
  },
};

export const WithCustomFormat: Story = {
  args: {
    duration: 120,
    format: "mm:ss",
    onComplete: () => console.log("Timer completed"),
  },
};

export const WithControls: Story = {
  args: {
    duration: 300,
    showControls: true,
    onComplete: () => console.log("Timer completed"),
  },
};
