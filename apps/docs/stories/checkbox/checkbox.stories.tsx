import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "ui";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  render: () => <Checkbox defaultChecked>Accept terms and conditions</Checkbox>,
};

export const Disabled: Story = {
  render: () => <Checkbox disabled>Accept terms and conditions</Checkbox>,
};

export const DisabledChecked: Story = {
  render: () => (
    <Checkbox disabled defaultChecked>
      Accept terms and conditions
    </Checkbox>
  ),
};

export const Indeterminate: Story = {
  render: () => <Checkbox indeterminate>Select all</Checkbox>,
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="xs">Extra Small</Checkbox>
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </div>
  ),
};
