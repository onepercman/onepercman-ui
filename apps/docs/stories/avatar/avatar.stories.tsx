import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "ui";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://i.pravatar.cc/150?img=1"
        alt="User avatar"
        seed="John Doe"
      />
    </div>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="xs"
        src="https://i.pravatar.cc/150?img=2"
        alt="Extra small avatar"
        seed="XS"
      />
      <Avatar
        size="sm"
        src="https://i.pravatar.cc/150?img=3"
        alt="Small avatar"
        seed="SM"
      />
      <Avatar
        size="md"
        src="https://i.pravatar.cc/150?img=4"
        alt="Medium avatar"
        seed="MD"
      />
      <Avatar
        size="lg"
        src="https://i.pravatar.cc/150?img=5"
        alt="Large avatar"
        seed="LG"
      />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="invalid-url" alt="Fallback avatar" seed="Fallback" />
    </div>
  ),
};
