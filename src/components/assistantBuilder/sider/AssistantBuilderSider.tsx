import React from "react";
import { Layout, Menu, theme } from "antd";
import AssistantBuilderSiderTree from "./tree/AssistantBuilderSiderTree";
const { Sider } = Layout;

export default function AssistantBuilderSider() {
  const { token } = theme.useToken();

  return (
    // ここStyleじゃなくしたい
    <Sider
      style={{
        borderRadius: token.borderRadiusLG,
        background: token.colorBgContainer,
      }}
      width={250}
    >
      <AssistantBuilderSiderTree />
    </Sider>
  );
}
