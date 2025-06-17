import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fieldset } from "ui";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Personal Information</Fieldset.Legend>
      <Fieldset.HelperText>
        Please provide your personal details below.
      </Fieldset.HelperText>
      <div className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className="w-full" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="w-full" />
        </div>
      </div>
    </Fieldset>
  ),
};
