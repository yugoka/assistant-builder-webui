"use client";
import { Content, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";

export default function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout hasSider>
        <Content>{children}</Content>
        <Sider width="25%">さいだー</Sider>
      </Layout>
    </Layout>
  );
}
