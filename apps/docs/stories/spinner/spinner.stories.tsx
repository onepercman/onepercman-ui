import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "ui";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center">
      <Spinner className="h-8 w-8 text-primary" />
    </div>
  ),
};
