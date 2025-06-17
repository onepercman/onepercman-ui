import type { Meta, StoryObj } from "@storybook/react-vite";
import { PinInput } from "ui";

const meta = {
  title: "Components/PinInput",
  component: PinInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <PinInput.Root>
        <PinInput.Label>Enter PIN</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input />
          <PinInput.Input />
          <PinInput.Input />
          <PinInput.Input />
          <PinInput.HiddenInput />
        </PinInput.Control>
      </PinInput.Root>
    </div>
  ),
};
