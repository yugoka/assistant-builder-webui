import React from "react";
import { Layout, Menu, theme } from "antd";
import Tree, { DataNode, TreeProps } from "antd/es/tree";
import { css } from "@emotion/react";
import { convertFunctionTreeNodeToDataNode } from "@/utils/assistantBuilder/convertFunctionTreeToDataNodes";
import { exampleFunctionTree } from "./exampleFunctionTree";
const { Sider } = Layout;

const treeData: DataNode[] = [
  convertFunctionTreeNodeToDataNode(exampleFunctionTree),
];

export default function AssistantBuilderSiderTree() {
  const { token } = theme.useToken();
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        border-right: 1px solid;
        border-color: ${token.colorBorder};
        padding: 8px;
      `}
    >
      <Tree
        draggable
        defaultExpandedKeys={["root"]}
        defaultSelectedKeys={["0-0-0", "0-0-1"]}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    </div>
  );
}
