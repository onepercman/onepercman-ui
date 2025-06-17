import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from "ui";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <ColorPicker>
        <ColorPicker.Label>Pick a color</ColorPicker.Label>
        <ColorPicker.Control>
          <ColorPicker.Trigger>
            <ColorPicker.ValueSwatch />
            <ColorPicker.ValueText />
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSliderLabel>
              Alpha
            </ColorPicker.ChannelSliderLabel>
            <ColorPicker.ChannelSliderTrack>
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSliderTrack>
            <ColorPicker.ChannelSliderValueText />
          </ColorPicker.ChannelSlider>
        </ColorPicker.Content>
      </ColorPicker>
    </div>
  ),
};
