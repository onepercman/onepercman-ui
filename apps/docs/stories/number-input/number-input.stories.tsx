import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "ui";

const meta = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <NumberInput.Root defaultValue={0} min={0} max={100}>
        <NumberInput.Label>Number</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-</NumberInput.DecrementTrigger>
          <NumberInput.Input />
          <NumberInput.IncrementTrigger>+</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.Root>
    </div>
  ),
};
