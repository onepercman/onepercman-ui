import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "ui";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider.Root defaultValue={50} min={0} max={100}>
        <Slider.Label>
          <span>Value</span>
          <Slider.ValueText />
        </Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  ),
};
