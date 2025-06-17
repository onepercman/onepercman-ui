import type { Meta, StoryObj } from "@storybook/react";
import { TreeView } from "@onepercman/ui";

const meta = {
  title: "Components/TreeView",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "1",
    label: "Documents",
    children: [
      {
        id: "1-1",
        label: "Work",
        children: [
          { id: "1-1-1", label: "Project 1" },
          { id: "1-1-2", label: "Project 2" },
        ],
      },
      {
        id: "1-2",
        label: "Personal",
        children: [
          { id: "1-2-1", label: "Photos" },
          { id: "1-2-2", label: "Videos" },
        ],
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <TreeView.Root>
        <TreeView.Tree>
          <TreeView.Branch>
            <TreeView.BranchTrigger>Documents</TreeView.BranchTrigger>
            <TreeView.BranchContent>
              <TreeView.Item>
                <TreeView.ItemText>Work</TreeView.ItemText>
              </TreeView.Item>
              <TreeView.Item>
                <TreeView.ItemText>Personal</TreeView.ItemText>
              </TreeView.Item>
            </TreeView.BranchContent>
          </TreeView.Branch>
          <TreeView.Item>
            <TreeView.ItemText>Pictures</TreeView.ItemText>
          </TreeView.Item>
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  ),
};
