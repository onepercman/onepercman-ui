import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagsInput } from "ui";

const meta = {
  title: "Components/TagsInput",
  component: TagsInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TagsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Add tags...",
    defaultValue: ["react", "typescript"],
  },
};

export const WithMaxTags: Story = {
  args: {
    placeholder: "Add tags (max 3)...",
    defaultValue: ["react"],
    maxTags: 3,
  },
};

export const WithValidation: Story = {
  args: {
    placeholder: "Add tags (min 2 chars)...",
    defaultValue: ["react"],
    validate: (tag: string) => tag.length >= 2,
  },
};
