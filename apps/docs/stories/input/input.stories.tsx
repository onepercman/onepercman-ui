import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "ui";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Input
      as="input"
      placeholder="Enter text here"
      size="md"
      variant="outlined"
    />
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};
