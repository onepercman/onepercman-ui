import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "ui";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Description>
          This is a dialog description. You can put any content here.
        </Dialog.Description>
        <Dialog.CloseTrigger />
      </Dialog.Content>
    </Dialog.Root>
  ),
};
