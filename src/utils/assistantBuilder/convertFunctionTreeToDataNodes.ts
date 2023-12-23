import { DataNode } from "antd/es/tree";
import { FunctionTreeNode } from "openai-function-tree/lib/types/functionTreeNode";

export const convertFunctionTreeNodeToDataNode = (
  functionTreeNode: FunctionTreeNode
): DataNode => {
  if (functionTreeNode.type === "category") {
    return {
      key: functionTreeNode.name,
      title: functionTreeNode.name,
      children: functionTreeNode.children.map((childNode) =>
        convertFunctionTreeNodeToDataNode(childNode)
      ),
    };
  } else {
    return {
      key: functionTreeNode.tool.function.name,
      title: functionTreeNode.tool.function.name,
    };
  }
};
