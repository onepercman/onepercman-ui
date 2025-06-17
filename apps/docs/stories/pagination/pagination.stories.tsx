import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "ui";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 10,
    page: 1,
    pageSize: 1,
    siblingCount: 1,
    size: "md",
    variant: "outlined",
  },
};
