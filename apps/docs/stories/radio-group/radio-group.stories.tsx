import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "@onepercman/ui";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <RadioGroup.Root defaultValue="1">
        <RadioGroup.Label>Select an option</RadioGroup.Label>
        <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
        <RadioGroup.Item value="3">Option 3</RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  ),
};
