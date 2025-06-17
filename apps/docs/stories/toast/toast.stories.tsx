import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "ui";
import { createToaster } from "@ark-ui/react";

const toaster = createToaster({
  placement: "top-end",
});

const meta = {
  title: "Components/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toaster,
  },
};
