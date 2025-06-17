import type { Meta, StoryObj } from "@storybook/react-vite";
import { Empty } from "ui";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <Empty>
      <div className="text-center">
        <h3 className="text-lg font-medium">No items found</h3>
        <p className="text-sm text-secondary">
          There are no items to display at the moment.
        </p>
      </div>
    </Empty>
  ),
};
