import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "ui";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Switch.Root defaultChecked>
        <Switch.Label>Toggle me</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </div>
  ),
};

export const WithPlacement: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch placement="head">
        <Switch.Label>Head placement</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
      <Switch placement="tail">
        <Switch.Label>Tail placement</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
    </div>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="xs">
        <Switch.Label>Extra small</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
      <Switch size="sm">
        <Switch.Label>Small</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
      <Switch size="md">
        <Switch.Label>Medium</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
      <Switch size="lg">
        <Switch.Label>Large</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
    </div>
  ),
};
