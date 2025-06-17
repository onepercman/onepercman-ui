import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "@onepercman/ui";

const meta = {
  title: "Components/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <FileUpload.Root>
        <FileUpload.Label>Upload files</FileUpload.Label>
        <FileUpload.Dropzone>
          <FileUpload.Trigger>Choose files</FileUpload.Trigger>
          <FileUpload.ItemGroup>
            <FileUpload.Item>
              <FileUpload.ItemPreview>
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemName>example.jpg</FileUpload.ItemName>
              <FileUpload.ItemSizeText>2.5 MB</FileUpload.ItemSizeText>
              <FileUpload.ItemDeleteTrigger>
                Delete
              </FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          </FileUpload.ItemGroup>
        </FileUpload.Dropzone>
      </FileUpload.Root>
    </div>
  ),
};
