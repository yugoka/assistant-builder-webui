"use client";
import React from "react";
import { Layout, Menu, Typography } from "antd";
import styled from "@emotion/styled/macro";
const { Header, Content, Footer, Sider } = Layout;

const RootLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled(Layout)`
  flex-grow: 1;
`;

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <Layout>
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
      <Layout hasSider>
        <Sider width={200}>さいだー</Sider>
        <Content>{children}</Content>
      </Layout>
      <Footer>ふったー</Footer>
    </Layout>
  );
}
