import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "@onepercman/ui";
import { CollectionItem } from "@ark-ui/react";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

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
      <Combobox.Root items={items}>
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Select a framework" />
          <Combobox.Trigger>▼</Combobox.Trigger>
          <Combobox.ClearTrigger>✕</Combobox.ClearTrigger>
        </Combobox.Control>
        <Combobox.Content>
          <Combobox.ItemGroup>
            {items.map((item) => (
              <Combobox.Item key={item.value} value={item.value}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  ),
};
