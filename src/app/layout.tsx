import React from "react";

import StyledComponentsRegistry from "../../lib/AntdRegistry";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import HomeLayout from "@/layouts/HomeLayout";

export const metadata = {
  title: "Assistant Builder",
  description: "OpenAI Assistantsを簡単に作れるやつ(Function Tree対応)",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <HomeLayout>{children}</HomeLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
