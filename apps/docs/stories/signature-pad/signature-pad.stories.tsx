import type { Meta, StoryObj } from "@storybook/react";
import { SignaturePad } from "@onepercman/ui";

const meta = {
  title: "Components/SignaturePad",
  component: SignaturePad,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignaturePad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <SignaturePad>
        <SignaturePad.Label>Sign here</SignaturePad.Label>
        <SignaturePad.Control className="h-[200px] w-full border border-default" />
        <SignaturePad.ClearTrigger className="mt-2">
          Clear
        </SignaturePad.ClearTrigger>
      </SignaturePad>
    </div>
  ),
};
