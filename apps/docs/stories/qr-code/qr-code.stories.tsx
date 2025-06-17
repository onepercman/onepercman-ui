import type { Meta, StoryObj } from "@storybook/react-vite";
import { QrCode } from "ui";

const meta = {
  title: "Components/QRCode",
  component: QrCode,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof QrCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <QrCode value="https://example.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode>
  ),
};
