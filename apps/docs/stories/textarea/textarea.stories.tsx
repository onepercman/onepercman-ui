import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@onepercman/ui";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        as="textarea"
        placeholder="Enter your message"
        size="md"
        variant="outlined"
      />
    </div>
  ),
};

// @ts-ignore
export const WithAutoSize: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        as="textarea"
        placeholder="Enter your message"
        size="md"
        variant="outlined"
        autoSize
      />
    </div>
  ),
};

// @ts-ignore
export const WithClearable: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        as="textarea"
        placeholder="Enter your message"
        size="md"
        variant="outlined"
        clearable
      />
    </div>
  ),
};

// @ts-ignore
export const Disabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        as="textarea"
        placeholder="This textarea is disabled"
        size="md"
        variant="outlined"
        disabled
      />
    </div>
  ),
};
