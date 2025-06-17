import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "@onepercman/ui";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Collapsible>
        <Collapsible.Trigger>Toggle content</Collapsible.Trigger>
        <Collapsible.Content>
          <div className="p-4">
            This is the collapsible content. It can be toggled by clicking the
            trigger above.
          </div>
        </Collapsible.Content>
      </Collapsible>
    </div>
  ),
};
