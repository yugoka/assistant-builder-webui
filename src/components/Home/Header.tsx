import { Menu, Layout } from "antd";
const { Header } = Layout;

export default function HomeLayoutHeader() {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        items={[
          { key: 1, label: "Chat" },
          { key: 2, label: "Assistant" },
          { key: 3, label: "Settings" },
        ]}
      />
    </Header>
  );
}
