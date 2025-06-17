import type { Meta, StoryObj } from "@storybook/react";
import { Steps } from "@onepercman/ui";

const meta = {
  title: "Components/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Steps>
      <Steps.List>
        <Steps.Item value="1">
          <Steps.Trigger>Step 1</Steps.Trigger>
          <Steps.Content>Step 1 content</Steps.Content>
        </Steps.Item>
        <Steps.Separator />
        <Steps.Item value="2">
          <Steps.Trigger>Step 2</Steps.Trigger>
          <Steps.Content>Step 2 content</Steps.Content>
        </Steps.Item>
        <Steps.Separator />
        <Steps.Item value="3">
          <Steps.Trigger>Step 3</Steps.Trigger>
          <Steps.Content>Step 3 content</Steps.Content>
        </Steps.Item>
      </Steps.List>
      <Steps.Progress />
      <div className="mt-4 flex justify-between">
        <Steps.PrevTrigger>Previous</Steps.PrevTrigger>
        <Steps.NextTrigger>Next</Steps.NextTrigger>
      </div>
    </Steps>
  ),
};
