import type { Meta, StoryObj } from "@storybook/react";
import { SegmentGroup } from "@onepercman/ui";

const meta = {
  title: "Components/SegmentGroup",
  component: SegmentGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SegmentGroup defaultValue="grid">
      <SegmentGroup.Label>View</SegmentGroup.Label>
      <SegmentGroup.Item value="grid">Grid</SegmentGroup.Item>
      <SegmentGroup.Item value="list">List</SegmentGroup.Item>
      <SegmentGroup.Item value="table">Table</SegmentGroup.Item>
    </SegmentGroup>
  ),
};
