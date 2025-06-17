import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "ui";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Table>
        <Table.Head>
          <Table.Column>ID</Table.Column>
          <Table.Column>Name</Table.Column>
          <Table.Column>Email</Table.Column>
        </Table.Head>
        <Table.Body>
          {data.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
};
