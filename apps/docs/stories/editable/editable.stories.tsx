import type { Meta, StoryObj } from "@storybook/react-vite";
import { Editable } from "ui";

const meta: Meta<typeof Editable> = {
  title: "Components/Editable",
  component: Editable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Editable>;

export const Default: Story = {
  render: () => (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
      <Editable.Control>
        <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
        <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
      </Editable.Control>
    </Editable.Root>
  ),
};
