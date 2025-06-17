import type { Meta, StoryObj } from "@storybook/react";
import { Clipboard } from "@onepercman/ui";

const meta = {
  title: "Components/Clipboard",
  component: Clipboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Clipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Clipboard>
        <Clipboard.Label>Copy to clipboard</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input value="Hello, World!" />
          <Clipboard.Trigger>Copy</Clipboard.Trigger>
        </Clipboard.Control>
        <Clipboard.Indicator>Copied!</Clipboard.Indicator>
      </Clipboard>
    </div>
  ),
};
