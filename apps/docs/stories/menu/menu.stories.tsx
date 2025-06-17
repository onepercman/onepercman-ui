import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "ui";

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>Open Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.ItemGroup>
          <Menu.Item>
            <Menu.ItemText>Item 1</Menu.ItemText>
          </Menu.Item>
          <Menu.Item>
            <Menu.ItemText>Item 2</Menu.ItemText>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item>
            <Menu.ItemText>Item 3</Menu.ItemText>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Root>
  ),
};
