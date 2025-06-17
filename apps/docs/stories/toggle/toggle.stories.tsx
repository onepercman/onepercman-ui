import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@onepercman/ui";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Toggle.Root>
        <Toggle.Indicator />
      </Toggle.Root>
    </div>
  ),
};
