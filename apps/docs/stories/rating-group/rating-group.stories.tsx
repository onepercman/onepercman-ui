import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingGroup } from "ui";

const meta = {
  title: "Components/RatingGroup",
  component: RatingGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RatingGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <RatingGroup.Root defaultValue={3} max={5}>
        <RatingGroup.Label>Rating</RatingGroup.Label>
        <RatingGroup.Control>
          {[1, 2, 3, 4, 5].map((value) => (
            <RatingGroup.Item key={value} value={value}>
              ★
            </RatingGroup.Item>
          ))}
        </RatingGroup.Control>
      </RatingGroup.Root>
    </div>
  ),
};
