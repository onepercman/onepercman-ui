import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "ui";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <Field.Label>Username</Field.Label>
      <Field.Input placeholder="Enter username" />
      <Field.HelperText>This is your public display name.</Field.HelperText>
    </Field>
  ),
};
