import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "ui";
import { CollectionItem } from "@ark-ui/react";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: CollectionItem[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Select.Root items={items}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText />
          </Select.Trigger>
          <Select.ClearTrigger>✕</Select.ClearTrigger>
          <Select.Indicator>▼</Select.Indicator>
        </Select.Control>
        <Select.Content>
          <Select.ItemGroup>
            {items.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};
