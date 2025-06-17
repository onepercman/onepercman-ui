import type { Meta, StoryObj } from "@storybook/react";
import { Splitter } from "@onepercman/ui";

const meta = {
  title: "Components/Splitter",
  component: Splitter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Splitter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[300px] w-full">
      <Splitter>
        <Splitter.Panel id="panel-1" className="bg-default p-4">
          Panel 1
        </Splitter.Panel>
        <Splitter.ResizeTrigger />
        <Splitter.Panel id="panel-2" className="bg-default p-4">
          Panel 2
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
};
