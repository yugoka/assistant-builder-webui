"use client";
import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
import AssistantBuilderSider from "@/components/assistantBuilder/sider/AssistantBuilderSider";
import { css } from "@emotion/react";
import themeConfig from "../../theme/themeConfig";

export default function Home() {
  const { token } = theme.useToken();

  return (
    <>
      <Layout
        css={css`
          height: 100%;
          background: ${token.colorBgContainer};
          border-radius: ${token.borderRadiusLG}px;
        `}
        hasSider
      >
        <AssistantBuilderSider />
        こんにちは！
      </Layout>
    </>
  );
}
