import React from "react";
import { Layout, Menu, theme } from "antd";
import AssistantBuilderSiderTree from "./AssistantBuilderSiderTree";
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
    >
      <AssistantBuilderSiderTree />
    </Sider>
  );
}
