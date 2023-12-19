"use client";
import React from "react";
import { Layout, theme } from "antd";
import styled from "@emotion/styled";
import HomeLayoutHeader from "@/components/Home/Header";
import { Content } from "antd/es/layout/layout";
import { css } from "@emotion/react";

const RootLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function HomeLayout({ children }: React.PropsWithChildren) {
  const { token } = theme.useToken();

  return (
    <RootLayout>
      <HomeLayoutHeader />
      {children}
    </RootLayout>
  );
}
