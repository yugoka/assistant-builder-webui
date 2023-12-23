import { Resolver } from "@stoplight/json-ref-resolver";
import { FunctionTreeTool } from "openai-function-tree/lib/types/functionTreeTool";
import { ChatCompletionTool } from "openai/resources/index.mjs";
import { FunctionDefinition } from "openai/resources/shared.mjs";

interface OpenAPISpec {
  paths: {
    [path: string]: {
      [method: string]: any;
    };
  };
}

interface SchemaProperty {
  [key: string]: any;
}

// 1. openAPIをFunctionsに変換する
export const openapiToFunctions = async (
  openapiSpec: OpenAPISpec
): Promise<FunctionDefinition[]> => {
  const functions: FunctionDefinition[] = [];
  const resolver = new Resolver();

  for (const path in openapiSpec.paths) {
    const methods = openapiSpec.paths[path];
    for (const method in methods) {
      const specWithRef = methods[method];

      // 1. Resolve JSON references.
      const resolvedSpec = await resolver.resolve(specWithRef);
      const spec = resolvedSpec.result;

      // 2. Extract a name for the functions.
      const functionName = spec.operationId;

      // 3. Extract a description and parameters.
      const description = spec.description || spec.summary || "";

      const schema: { type: string; properties: SchemaProperty } = {
        type: "object",
        properties: {},
      };

      const reqBody = spec.requestBody?.content?.["application/json"]?.schema;
      if (reqBody) {
        schema.properties["requestBody"] = reqBody;
      }

      const params = spec.parameters || [];
      if (params.length > 0) {
        const paramProperties = params.reduce(
          (acc: SchemaProperty, param: any) => {
            if (param.schema) {
              acc[param.name] = param.schema;
            }
            return acc;
          },
          {}
        );

        schema.properties["parameters"] = {
          type: "object",
          properties: paramProperties,
        };
      }

      functions.push({
        name: functionName,
        description: description,
        parameters: schema,
      });
    }
  }

  return functions;
};

export const functionsToTool = (
  func: FunctionDefinition
): ChatCompletionTool => {
  return {
    type: "function",
    function: func,
  };
};

export const toolToFunctionTreeTool = (
  tool: ChatCompletionTool
): FunctionTreeTool => {
  return {
    type: "tool",
    tool,
  };
};

export const openapiToFunctionTree = async (
  openapiSpec: OpenAPISpec
): Promise<FunctionTreeTool[]> => {
  const functions = await openapiToFunctions(openapiSpec);
  const tools = functions.map((f) => functionsToTool(f));
  const functionTreeTools = tools.map((tool) => toolToFunctionTreeTool(tool));
  return functionTreeTools;
};
