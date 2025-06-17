import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "ui";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96 h-96">
      <Loader />
    </div>
  ),
};
