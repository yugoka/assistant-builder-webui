"use client";
import React from "react";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { css } from "@emotion/react";
import { ConfigProvider } from "antd";
import themeConfig from "../../theme/themeConfig";

export default function BuilderLayout({ children }: React.PropsWithChildren) {
  const { token } = theme.useToken();

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout
        css={css`
          padding: 32px 48px;
        `}
      >
        <Content>{children}</Content>
      </Layout>
    </ConfigProvider>
  );
}
