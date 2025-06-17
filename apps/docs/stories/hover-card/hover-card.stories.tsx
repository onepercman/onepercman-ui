import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard } from "ui";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger>Hover me</HoverCard.Trigger>
      <HoverCard.Content>
        <HoverCard.Arrow />
        This is a hover card content. You can put any content here.
      </HoverCard.Content>
    </HoverCard.Root>
  ),
};
