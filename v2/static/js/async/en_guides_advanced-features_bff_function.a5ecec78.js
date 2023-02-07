"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[28621],{

/***/ 88495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ function_content),
  "default": () => (/* binding */ bff_function),
  "frontmatter": () => (/* binding */ function_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ function_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
// EXTERNAL MODULE: ./src/index.ts + 58 modules
var src = __webpack_require__(12067);
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/components/enable-bff.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));

const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"1. Execute `pnpm new` and select \\\"Enable BFF\\\"\\n2. Add the following code to `modern.config.[tj]s` according to the chosen runtime framework：\\n\\nimport { Tabs, Tab as TabItem } from \\\"@theme\\\";\\n\\n<Tabs>\\n  <TabItem value=\\\"express\\\" label=\\\"Express.js\\\" default>\\n\\n```ts title=\\\"edenx.config.ts\\\"\\nimport expressPlugin from '@edenx/plugin-express';\\nimport bffPlugin from '@edenx/plugin-bff';\\n\\nexport default defineConfig({\\n  plugins: [expressPlugin(), bffPlugin()],\\n});\\n```\\n\\n  </TabItem>\\n  <TabItem value=\\\"koa\\\" label=\\\"Koa.js\\\">\\n\\n```ts title=\\\"edenx.config.ts\\\"\\nimport koaPlugin from '@edenx/plugin-koa';\\nimport bffPlugin from '@edenx/plugin-bff';\\n\\nexport default defineConfig({\\n  plugins: [koaPlugin(), bffPlugin()],\\n});\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ol: "ol",
    li: "li",
    code: "code",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pnpm new"
        }), " and select \"Enable BFF\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the following code to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "modern.config.[tj]s"
        }), " according to the chosen runtime framework："]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(src/* Tabs */.mQ, {
      children: [(0,jsx_runtime.jsx)(src/* Tab */.OK, {
        value: "express",
        label: "Express.js",
        default: true,
        children: (0,jsx_runtime.jsxs)(_components.div, {
          className: "language-ts",
          children: [(0,jsx_runtime.jsx)(_components.div, {
            className: "modern-code-title",
            children: "edenx.config.ts"
          }), (0,jsx_runtime.jsxs)(_components.div, {
            className: "modern-code-content",
            children: [(0,jsx_runtime.jsx)(_components.button, {
              className: "copy"
            }), (0,jsx_runtime.jsx)(_components.pre, {
              className: "shiki",
              style: {
                backgroundColor: "var(--shiki-color-background)"
              },
              children: (0,jsx_runtime.jsxs)(_components.code, {
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "import"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " expressPlugin "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "from"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-string-expression)"
                    },
                    children: "'@edenx/plugin-express'"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: ";"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "import"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " bffPlugin "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "from"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-string-expression)"
                    },
                    children: "'@edenx/plugin-bff'"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: ";"
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.span, {
                  className: "line"
                }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "export"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "default"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-function)"
                    },
                    children: "defineConfig"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "({"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "  plugins"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: ":"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " ["
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-function)"
                    },
                    children: "expressPlugin"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "()"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-punctuation)"
                    },
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-function)"
                    },
                    children: "bffPlugin"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "()]"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-punctuation)"
                    },
                    children: ","
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.span, {
                  className: "line",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "});"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.span, {
                  className: "line"
                })]
              })
            })]
          })]
        })
      }), (0,jsx_runtime.jsx)(src/* Tab */.OK, {
        value: "koa",
        label: "Koa.js",
        children: (0,jsx_runtime.jsxs)(_components.div, {
          className: "language-ts",
          children: [(0,jsx_runtime.jsx)(_components.div, {
            className: "modern-code-title",
            children: "edenx.config.ts"
          }), (0,jsx_runtime.jsxs)(_components.div, {
            className: "modern-code-content",
            children: [(0,jsx_runtime.jsx)(_components.button, {
              className: "copy"
            }), (0,jsx_runtime.jsx)(_components.pre, {
              className: "shiki",
              style: {
                backgroundColor: "var(--shiki-color-background)"
              },
              children: (0,jsx_runtime.jsxs)(_components.code, {
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "import"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " koaPlugin "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "from"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-string-expression)"
                    },
                    children: "'@edenx/plugin-koa'"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: ";"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "import"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " bffPlugin "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "from"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-string-expression)"
                    },
                    children: "'@edenx/plugin-bff'"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: ";"
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.span, {
                  className: "line"
                }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "export"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: "default"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-function)"
                    },
                    children: "defineConfig"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "({"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
                  className: "line",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "  plugins"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-keyword)"
                    },
                    children: ":"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " ["
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-function)"
                    },
                    children: "koaPlugin"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "()"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-punctuation)"
                    },
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: " "
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-function)"
                    },
                    children: "bffPlugin"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "()]"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-token-punctuation)"
                    },
                    children: ","
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.span, {
                  className: "line",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      color: "var(--shiki-color-text)"
                    },
                    children: "});"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.span, {
                  className: "line"
                })]
              })
            })]
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const enable_bff = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/guides/advanced-features/bff/function.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const function_frontmatter = {
  "sidebar_position": 1,
  "title": "Basic Usage"
};

const function_toc = [{
  "id": "enable-bff",
  "text": "Enable BFF",
  "depth": 2
}, {
  "id": "bff-function",
  "text": "BFF Function",
  "depth": 2
}, {
  "id": "api-routes",
  "text": "API Routes",
  "depth": 2
}, {
  "id": "default-route",
  "text": "Default Route",
  "depth": 3
}, {
  "id": "multi-layer-route",
  "text": "Multi-layer Route",
  "depth": 3
}, {
  "id": "dynamic-route",
  "text": "Dynamic Route",
  "depth": 3
}, {
  "id": "allow-list",
  "text": "Allow List",
  "depth": 3
}, {
  "id": "restful-api",
  "text": "RESTful API",
  "depth": 2
}, {
  "id": "function-named-export",
  "text": "Function Named Export",
  "depth": 3
}, {
  "id": "function-parameter-rule",
  "text": "Function Parameter Rule",
  "depth": 3
}, {
  "id": "dynamic-path",
  "text": "Dynamic Path",
  "depth": 4
}, {
  "id": "requestoption",
  "text": "RequestOption",
  "depth": 4
}];
const title = `Basic Usage`;
const function_content = "\"---\\nsidebar_position: 1\\ntitle: Basic Usage\\n---\\n# Basic Usage\\n\\nApplications developed with Modern.js can define API functions in the `api/` directory, which can be called by the front-end to send requests without writing front and back-end glue layer code, At the same time, it ensures the type safety of the front and back end\\n\\n## Enable BFF\\n\\nimport EnableBFF from \\\"@site-docs-en/components/enable-bff\\\"\\n\\n<EnableBFF/>\\n\\n## BFF Function\\n\\nThe functions that are allowed to be called through integration are called **BFF functions**. Here is the simplest BFF function to write, creating an `api/hello.ts` file:\\n\\n```ts title=\\\"api/hello.ts\\\"\\nexport const get = async () => 'Hello Modern.js';\\n```\\n\\nThen directly import the function in `src/App.tsx` and call:\\n\\n```tsx title=src/App.tsx\\nimport { useState, useEffect } from 'react';\\nimport { get as hello } from '@api/hello';\\n\\nexport default () => {\\n  const [text, setText] = useState('');\\n\\n  useEffect(() => {\\n    hello().then(setText);\\n  }, []);\\n  return <div>{text}</div>;\\n};\\n```\\n\\n:::info\\nModern.js generator has already configured the `@api` alias in tsconfig.json, so you can import functions directly by aliases.\\n\\n:::\\n\\nThe functions import in `src/App.tsx` will be automatically converted into interface calls, so there is no need to call the interface through fetch.\\n\\nExecute `pnpm run dev`, then open `http://localhost:8080/` to see that the page has displayed the content returned by the BFF function. In Network, you can see that the page sent a request to `http://localhost:8080/api/hello`.\\n\\n![Network](https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png)\\n\\n## API Routes\\n\\nIn Modern.js, the BFF function routing system is implemented based on the file system, and it is also a conventional routing system.\\n\\nIn **Function Writing**, All files under `api/` will map to an interface. In **Framework Writing**, All files under `api/lambda` will map to an interface\\n\\n:::note\\nFunction Writing & Framework Writing will introduce soon.\\n\\n:::\\n\\nAll routes generated by BFF functions have a prefix, and the default value is `/api`. The prefix can be set through [bff.prefix] (/docs/configure/app/bff/prefix).\\n\\nSeveral routing conventions are described as follow.\\n\\n### Default Route\\n\\nFiles named `index.[jt]s` are mapped to the previous directory.\\n\\n- `api/index.ts` -> `{prefix}/`\\n- `api/user/index.ts` -> `{prefix}/user`\\n\\n### Multi-layer Route\\n\\nSupports parsing nested files, if you create a nested folder structure, the files will still automatically parse routes in the same way.\\n\\n- `api/hello.ts` -> `{prefix}/hello`\\n- `api/user/list.ts` -> `{prefix}/user/list`\\n\\n### Dynamic Route\\n\\nCreate folders or files named with `[xxx]` to support dynamic named routing parameters.\\n\\n- `api/user/[username]/info.ts` -> `{prefix}/user/:username/info`\\n- `api/user/username/[action].ts` -> `{prefix}/user/username/:action`\\n\\n### Allow List\\n\\nBy default, all files in the'api/'directory will be parsed as BFF function files, but the following files will not be parsed:\\n\\n- file name start with `_`, for example `_utils.ts`.\\n- files in directory which name start with `_`, for example `_utils/index.ts`、`_utils/cp.ts`.\\n- test files, for example `foo.test.ts`.\\n- type files, for example `hello.d.ts`.\\n- files in `node_module`.\\n\\n## RESTful API\\n\\nModern.js BFF functions need to be defined according to the RESTful API standard, follow the HTTP Method specification, and do not allow free parameter definition.\\n\\n:::info\\nAssuming that the function allows free definition of parameters, the resulting route must be called by the **private protocol** (the reason is that the request parameters cannot be distinguished from the request body), and cannot implement any RESTful API.\\n\\nIf the service is only used for the application itself, there is no problem. but its **non-standard interface definition** cannot be integrated into the larger system. In the case of multiple systems working together (such as BFF low-code construction), other systems also need to follow the **private protocol**.\\n\\n:::\\n\\n### Function Named Export\\n\\nModern.js the export name of the BFF function determines the Method of the corresponding interface of the function, such as `get`, `post` and so on.\\n\\nFor example, following the example, a `GET` interface can be exported.\\n\\n```ts\\nexport const get = async () => {\\n  return {\\n    name: 'Modern.js',\\n    desc: '现代 web 工程方案',\\n  };\\n};\\n```\\n\\nFollowing the example below, a `POST` interface can be exported.\\n\\n```ts\\nexport const post = async () => {\\n  return {\\n    name: 'Modern.js',\\n    desc: '现代 web 工程方案',\\n  };\\n};\\n```\\n\\n- Modern.js supports 9 definitions for HTTP Method: `GET`、`POST`、`PUT`、`DELETE`、`CONNECT`、`TRACE`、`PATCH`、`OPTION`、`HEAD`, can be exported using these methods as functions。\\n\\n- The name is size insensitive，if `GET`，can write `get`、`Get`、`GEt`、`GET`，can be accurately identified. But default export as `export default xxx` will be map to `Get`。\\n\\n- Multiple functions of different Methods can be defined in one file, but if multiple functions of the same Method are defined, only the first will take effect.\\n\\n:::info\\nIt should be noted that the defined functions should all be asynchronous, which is related to the type when the function is called, which will be mentioned later.\\n\\n:::\\n\\n### Function Parameter Rule\\n\\nAs mentioned above, in order to meet the design criteria of RESTful APIs, the BFF function in Modern.js needs to follow certain imported parameter rules.\\n\\nThe function parameters are divided into two parts, the dynamic part in the request path and the request option `RequestOption`.\\n\\n#### Dynamic Path\\n\\nDynamic routing will be used as imported parameters in the first part of the function, and each imported parameter corresponds to a dynamic route. For example, in the following example, uid will be passed into the function as the first two parameters:\\n\\n```ts title=\\\"api/[level]/[id].ts\\\"\\nexport default async (level: number, id: number) => {\\n  const userData = await queryUser(level, uid);\\n  return userData;\\n};\\n```\\n\\nPass dynamic parameters directly when calling:\\n\\n```ts title=\\\"App.tsx\\\"\\nimport { useState, useEffect } from 'react';\\nimport { get as getUser } from '@api/[level]/[id]';\\n\\nexport default () => {\\n  const [name, setName] = useState('');\\n\\n  useEffect(() => {\\n    getUser(6, 001).then(userData => setName(userData.name));\\n  }, []);\\n\\n  return <div>{name}</div>;\\n};\\n```\\n\\n#### RequestOption\\n\\nThe parameter after Dynamic Path is the object `RequestOption` containing querystring and request body, which is used to define the types of `data` and `query`.\\n\\nIn normal functions without dynamic routing, the incoming `data` and `query` can be obtained from the first imported parameter, for example:\\n\\n```ts title=\\\"api/hello.ts\\\"\\nimport type { RequestOption } from '@modern-js/runtime/server';\\n\\nexport async function post({\\n  query,\\n  data,\\n}: RequestOption<Record<string, string>, Record<string, string>>) {\\n  // do somethings\\n}\\n```\\n\\nWhen a function file uses dynamic routing rules, dynamic routing before the `RequestOption` parameter.\\n\\n```ts title=\\\"api/[sku]/[id]/item.ts\\\"\\nexport async function post(\\n  sku: string,\\n  id: string,\\n  {\\n    data,\\n    query,\\n  }: RequestOption<Record<string, string>, Record<string, string>>,\\n) {\\n  // do somethings\\n}\\n```\\n\\nAlso pass in the parameters according to the function definition:\\n\\n```ts title=\\\"App.tsx\\\"\\nimport { post } from '@api/[sku]/[id]/item';\\n\\nexport default () => {\\n  const addSku = () => {\\n    post('0001' /* sku */, '1234' /* id */, {\\n      query: {\\n        /* ... */\\n      },\\n      data: {\\n        /* ... */\\n      },\\n    });\\n  };\\n\\n  return <div onClick={addSku}>添加 SKU</div>;\\n};\\n```\\n\\nAs mentioned earlier, the defined functions should be asynchronous because they are automatically converted to HTTP interface calls when called by the front end.\\n\\nso in order to keep the type definition consistent with the actual calling, it is necessary to set the BFF function to asynchronous when defining it.\\n\"";
function function_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h2: "h2",
    strong: "strong",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span",
    img: "img",
    h3: "h3",
    ul: "ul",
    li: "li",
    h4: "h4"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "basic-usage",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#basic-usage",
        children: "#"
      }), "Basic Usage"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Applications developed with Modern.js can define API functions in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/"
      }), " directory, which can be called by the front-end to send requests without writing front and back-end glue layer code, At the same time, it ensures the type safety of the front and back end"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "enable-bff",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#enable-bff",
        children: "#"
      }), "Enable BFF"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(enable_bff, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "bff-function",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#bff-function",
        children: "#"
      }), "BFF Function"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The functions that are allowed to be called through integration are called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BFF functions"
      }), ". Here is the simplest BFF function to write, creating an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/hello.ts"
      }), " file:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "api/hello.ts"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "get"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'Hello Modern.js'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then directly import the function in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/App.tsx"
      }), " and call:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-tsx",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "src/App.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { useState"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " useEffect } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'react'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { get "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "as"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " hello } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@api/hello'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ["
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "setText"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "] "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "useState"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "''"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ");"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "useEffect"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "(() "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "hello"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "()"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: ".then"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "(setText);"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " []);"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">{text}</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nModern.js generator has already configured the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@api"
          }), " alias in tsconfig.json, so you can import functions directly by aliases."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The functions import in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/App.tsx"
      }), " will be automatically converted into interface calls, so there is no need to call the interface through fetch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Execute ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), ", then open ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080/"
      }), " to see that the page has displayed the content returned by the BFF function. In Network, you can see that the page sent a request to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080/api/hello"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png",
        alt: "Network"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "api-routes",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#api-routes",
        children: "#"
      }), "API Routes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Modern.js, the BFF function routing system is implemented based on the file system, and it is also a conventional routing system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Function Writing"
      }), ", All files under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/"
      }), " will map to an interface. In ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Writing"
      }), ", All files under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/lambda"
      }), " will map to an interface"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "NOTE"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "\nFunction Writing & Framework Writing will introduce soon."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All routes generated by BFF functions have a prefix, and the default value is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api"
      }), ". The prefix can be set through [bff.prefix] (/docs/configure/app/bff/prefix)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Several routing conventions are described as follow."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "default-route",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#default-route",
        children: "#"
      }), "Default Route"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Files named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.[jt]s"
      }), " are mapped to the previous directory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "api/index.ts"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{prefix}/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "api/user/index.ts"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{prefix}/user"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "multi-layer-route",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#multi-layer-route",
        children: "#"
      }), "Multi-layer Route"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supports parsing nested files, if you create a nested folder structure, the files will still automatically parse routes in the same way."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "api/hello.ts"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{prefix}/hello"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "api/user/list.ts"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{prefix}/user/list"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dynamic-route",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#dynamic-route",
        children: "#"
      }), "Dynamic Route"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create folders or files named with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[xxx]"
      }), " to support dynamic named routing parameters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "api/user/[username]/info.ts"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{prefix}/user/:username/info"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "api/user/username/[action].ts"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{prefix}/user/username/:action"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "allow-list",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#allow-list",
        children: "#"
      }), "Allow List"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, all files in the'api/'directory will be parsed as BFF function files, but the following files will not be parsed:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["file name start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_"
        }), ", for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_utils.ts"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["files in directory which name start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_"
        }), ", for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_utils/index.ts"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "_utils/cp.ts"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["test files, for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "foo.test.ts"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["type files, for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hello.d.ts"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["files in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node_module"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "restful-api",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#restful-api",
        children: "#"
      }), "RESTful API"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern.js BFF functions need to be defined according to the RESTful API standard, follow the HTTP Method specification, and do not allow free parameter definition."
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-directive-content",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nAssuming that the function allows free definition of parameters, the resulting route must be called by the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "private protocol"
          }), " (the reason is that the request parameters cannot be distinguished from the request body), and cannot implement any RESTful API."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the service is only used for the application itself, there is no problem. but its ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "non-standard interface definition"
          }), " cannot be integrated into the larger system. In the case of multiple systems working together (such as BFF low-code construction), other systems also need to follow the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "private protocol"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-named-export",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#function-named-export",
        children: "#"
      }), "Function Named Export"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js the export name of the BFF function determines the Method of the corresponding interface of the function, such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post"
      }), " and so on."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, following the example, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET"
      }), " interface can be exported."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "get"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    name"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'Modern.js'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    desc"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'现代 web 工程方案'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  };"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Following the example below, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), " interface can be exported."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "post"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    name"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'Modern.js'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    desc"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'现代 web 工程方案'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  };"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modern.js supports 9 definitions for HTTP Method: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "POST"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "PUT"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "DELETE"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "CONNECT"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "TRACE"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "PATCH"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "OPTION"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "HEAD"
          }), ", can be exported using these methods as functions。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The name is size insensitive，if ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET"
          }), "，can write ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "Get"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "GEt"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET"
          }), "，can be accurately identified. But default export as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "export default xxx"
          }), " will be map to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Get"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multiple functions of different Methods can be defined in one file, but if multiple functions of the same Method are defined, only the first will take effect."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "\nIt should be noted that the defined functions should all be asynchronous, which is related to the type when the function is called, which will be mentioned later."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-parameter-rule",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#function-parameter-rule",
        children: "#"
      }), "Function Parameter Rule"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As mentioned above, in order to meet the design criteria of RESTful APIs, the BFF function in Modern.js needs to follow certain imported parameter rules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The function parameters are divided into two parts, the dynamic part in the request path and the request option ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestOption"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dynamic-path",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#dynamic-path",
        children: "#"
      }), "Dynamic Path"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic routing will be used as imported parameters in the first part of the function, and each imported parameter corresponds to a dynamic route. For example, in the following example, uid will be passed into the function as the first two parameters:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "api/[level]/[id].ts"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " (level"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " id"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ") "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "userData"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "await"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "queryUser"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "(level"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " uid);"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " userData;"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pass dynamic parameters directly when calling:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "App.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { useState"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " useEffect } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'react'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { get "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "as"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " getUser } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@api/[level]/[id]'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ["
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "name"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "setName"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "] "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "useState"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "''"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ");"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "useEffect"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "(() "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "getUser"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "6"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "001"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: ".then"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "(userData "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "setName"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "userData"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ".name));"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " []);"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">{name}"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "requestoption",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#requestoption",
        children: "#"
      }), "RequestOption"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The parameter after Dynamic Path is the object ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestOption"
      }), " containing querystring and request body, which is used to define the types of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In normal functions without dynamic routing, the incoming ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query"
      }), " can be obtained from the first imported parameter, for example:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "api/hello.ts"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { RequestOption } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/runtime/server'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "function"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "post"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "({"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  query"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  data"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "RequestOption"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Record"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Record"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">>) {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "// do somethings"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a function file uses dynamic routing rules, dynamic routing before the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestOption"
      }), " parameter."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "api/[sku]/[id]/item.ts"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "function"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "post"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "("
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  sku"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  id"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  {"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    data"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    query"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "RequestOption"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Record"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "Record"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "<"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ">>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ") {"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "// do somethings"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Also pass in the parameters according to the function definition:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "App.tsx"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { post } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@api/[sku]/[id]/item'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "addSku"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "post"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'0001'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "/* sku */"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'1234'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "/* id */"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      query"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "        "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "/* ... */"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      data"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "        "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "/* ... */"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "      }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    });"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  };"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " <"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "onClick"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "={addSku}>添加 "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "SKU"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "</"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "div"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As mentioned earlier, the defined functions should be asynchronous because they are automatically converted to HTTP interface calls when called by the front end."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "so in order to keep the type definition consistent with the actual calling, it is necessary to set the BFF function to asynchronous when defining it."
    })]
  });
}
function function_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(function_createMdxContent, props)
  })) : function_createMdxContent(props);
}
/* harmony default export */ const bff_function = (function_MDXContent);


/***/ })

}]);