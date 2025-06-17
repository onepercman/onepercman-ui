import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "ui";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.ItemTrigger>
            What is your return policy?
            <Accordion.ItemIndicator>▼</Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            We accept returns within 30 days of purchase. Items must be in their
            original condition with all tags attached.
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.ItemTrigger>
            How do I track my order?
            <Accordion.ItemIndicator>▼</Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Once your order ships, you'll receive a tracking number via email.
            You can also track your order status in your account dashboard.
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.ItemTrigger>
            Do you ship internationally?
            <Accordion.ItemIndicator>▼</Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Yes, we ship to most countries worldwide. International shipping
            rates and delivery times vary by location.
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};
