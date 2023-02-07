"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[44812],{

/***/ 34623:
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
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/components/enable-bff.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));

const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"1. 执行 `pnpm new`，选择启用 BFF\\n2. 根据选择的运行时框架，将下面的代码添加到 `modern.config.[tj]s` 中：\\n\\nimport { Tabs, Tab as TabItem } from \\\"@theme\\\";\\n\\n<Tabs>\\n  <TabItem value=\\\"express\\\" label=\\\"Express.js\\\" default>\\n\\n```ts title=\\\"edenx.config.ts\\\"\\nimport expressPlugin from '@edenx/plugin-express';\\nimport bffPlugin from '@edenx/plugin-bff';\\n\\nexport default defineConfig({\\n  plugins: [expressPlugin(), bffPlugin()],\\n});\\n```\\n\\n  </TabItem>\\n  <TabItem value=\\\"koa\\\" label=\\\"Koa.js\\\">\\n\\n```ts title=\\\"edenx.config.ts\\\"\\nimport koaPlugin from '@edenx/plugin-koa';\\nimport bffPlugin from '@edenx/plugin-bff';\\n\\nexport default defineConfig({\\n  plugins: [koaPlugin(), bffPlugin()],\\n});\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\"";
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
        children: ["执行 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pnpm new"
        }), "，选择启用 BFF"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据选择的运行时框架，将下面的代码添加到 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "modern.config.[tj]s"
        }), " 中："]
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

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/guides/advanced-features/bff/function.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const function_frontmatter = {
  "sidebar_position": 1,
  "title": "基础用法"
};

const function_toc = [{
  "id": "启用-bff",
  "text": "启用 BFF",
  "depth": 2
}, {
  "id": "bff-函数",
  "text": "BFF 函数",
  "depth": 2
}, {
  "id": "函数路由",
  "text": "函数路由",
  "depth": 2
}, {
  "id": "默认路由",
  "text": "默认路由",
  "depth": 3
}, {
  "id": "多层路由",
  "text": "多层路由",
  "depth": 3
}, {
  "id": "动态路由",
  "text": "动态路由",
  "depth": 3
}, {
  "id": "白名单",
  "text": "白名单",
  "depth": 3
}, {
  "id": "restful-api",
  "text": "RESTful API",
  "depth": 2
}, {
  "id": "函数具名导出",
  "text": "函数具名导出",
  "depth": 3
}, {
  "id": "函数参数规则",
  "text": "函数参数规则",
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
const title = `基础用法`;
const function_content = "\"---\\nsidebar_position: 1\\ntitle: 基础用法\\n---\\n# 基础用法\\n\\n通过 Modern.js 开发的应用，可以在 `api/` 目录下定义接口函数，前端可以调用这些接口函数，即可发起请求，无需写前后端胶水层代码，同时保证前后端类型安全。\\n\\n## 启用 BFF\\n\\nimport EnableBFF from \\\"@site-docs/components/enable-bff\\\"\\n\\n<EnableBFF/>\\n\\n## BFF 函数\\n\\n允许通过一体化调用的函数，称为 **BFF 函数**。这里写一个最简单的 BFF 函数，创建 `api/hello.ts` 文件：\\n\\n:::caution\\n如果是框架模式（有 `api/lambda` 目录），需要创建 `api/lambda/hello.ts`\\n\\n:::\\n\\n```ts title=\\\"api/hello.ts\\\"\\nexport const get = async () => 'Hello Modern.js';\\n```\\n\\n接着在 `src/App.tsx` 中直接引入函数并调用：\\n\\n```tsx title=src/App.tsx\\nimport { useState, useEffect } from 'react';\\nimport { get as hello } from '@api/hello';\\n\\nexport default () => {\\n  const [text, setText] = useState('');\\n\\n  useEffect(() => {\\n    hello().then(setText);\\n  }, []);\\n  return <div>{text}</div>;\\n};\\n```\\n\\n:::info\\nModern.js 生成器已经在 `tsconfig.json` 中配置 `@api` 别名，因此可以直接通过别名的方式引入函数。\\n\\n:::\\n\\n在 `src/App.tsx` 中引入的函数，会自动转换成接口调用，不需要再去通过 fetch 去调用接口。\\n\\n执行 `pnpm run dev` 打开 `http://localhost:8080/` 可以看到页面已经展示了 BFF 函数返回的内容，在 Network 中可以看到页面向 `http://localhost:8080/api/hello` 发送了请求：\\n\\n![Network](https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png)\\n\\n## 函数路由\\n\\nModern.js 中，BFF 函数对应的路由系统是基于文件系统实现的，也是一种**约定式路由**。\\n\\n函数写法下 `api/` 下的所有文件中的每个 BFF 函数都会映射为一个接口。框架写法下 `api/lambda` 下的所有文件中的每个 BFF 函数都会映射为一个接口。\\n\\n:::note\\n函数写法和框架写法会在下一节详细介绍。\\n\\n:::\\n\\n所有 BFF 函数生成的路由都带有统一的前缀，默认值为 `/api`。可以通过 [bff.prefix](/configure/app/bff/prefix) 设置公共路由的前缀。\\n\\n下面介绍几种路由的约定。\\n\\n### 默认路由\\n\\n以 `index.[jt]s` 命名的文件会被映射到上一层目录。\\n\\n- `api/index.ts` -> `{prefix}/`\\n- `api/user/index.ts` -> `{prefix}/user`\\n\\n### 多层路由\\n\\n支持解析嵌套的文件，如果创建嵌套文件夹结构，文件仍会以相同方式自动解析路由。\\n\\n- `api/hello.ts` -> `{prefix}/hello`\\n- `api/user/list.ts` -> `{prefix}/user/list`\\n\\n### 动态路由\\n\\n同样的，创建命名带有 `[xxx]` 的文件夹或者文件，支持动态的命名路由参数。动态路由的函数参数规则可以看 [dynamac-path](/guides/advanced-features/bff/function#dynamic-path)\\n\\n- `api/user/[username]/info.ts` -> `{prefix}/user/:username/info`\\n- `api/user/username/[action].ts` -> `{prefix}/user/username/:action`\\n\\n### 白名单\\n\\n默认 `api/` 目录下所有文件都会当作 BFF 函数文件去解析，但以下文件不会被解析：\\n\\n- 命名以 `_` 开头的文件。例如：`_utils.ts`。\\n- 命名以 `_` 开头的文件夹下所有文件。例如：`_utils/index.ts`、`_utils/cp.ts`。\\n- 测试文件。例如：`foo.test.ts`。\\n- TypeScript 类型文件。例如：`hello.d.ts`。\\n- `node_module` 下的文件。\\n\\n## RESTful API\\n\\nModern.js 的 BFF 函数需要遵循 RESTful API 标准来定义, 遵循 HTTP Method 规范，并且不允许自由定义参数。\\n\\n:::info\\n假设函数允许自由定义参数，产出的路由必然由**私有协议**进行调用（原因是无法区分请求参数与请求体），而无法实现任意的 RESTful API。\\n\\n如果服务仅用于应用本身不存在问题，但它**不标准的接口定义**无法融入更大的体系。 在多个系统共同工作的情况下（例如 BFF 低码搭建），会导致其他系统也需要遵循**私有协议**。\\n\\n:::\\n\\n### 函数具名导出\\n\\nModern.js BFF 函数的导出名决定了函数对应接口的 Method，如 `get`，`post` 等。\\n\\n例如，按照以下例子，可导出一个 GET 接口。\\n\\n```ts\\nexport const get = async () => {\\n  return {\\n    name: 'Modern.js',\\n    desc: '现代 web 工程方案',\\n  };\\n};\\n```\\n\\n按照以下例子，则可导出一个 `POST` 接口\\n\\n```ts\\nexport const post = async () => {\\n  return {\\n    name: 'Modern.js',\\n    desc: '现代 web 工程方案',\\n  };\\n};\\n```\\n\\n- 对应 HTTP Method，Modern.js 也支持了 9 种定义，即：`GET`、`POST`、`PUT`、`DELETE`、`CONNECT`、`TRACE`、`PATCH`、`OPTION`、`HEAD`，即可以用这些 Method 作为函数导出的名字。\\n\\n- 名字是大小不敏感的，如果是 `GET`，写成 `get`、`Get`、`GEt`、`GET`，都可以准确识别。而默认导出，即 `export default xxx` 则会被映射为 `Get`。\\n\\n- 可以在一个文件中定义多个不同 Method 的函数，但如果定义多个相同 Method 的函数，则只有第一个会生效。\\n\\n:::info\\n需要注意的是，定义的函数都应该是异步的，与函数调用时类型有关，后面会提到。\\n\\n:::\\n\\n### 函数参数规则\\n\\n如上所述，为了满足 RESTful API 的设计标准，因此 Modern.js 中 BFF 函数需要遵循一定的入参规则。\\n\\n函数参数分为两块，分别是请求路径中的动态部分和请求选项 `RequestOption`。\\n\\n#### Dynamic Path\\n\\n动态路由会作为函数第一部分的入参，每个入参对应一段动态路由。例如以下示例，uid 会作为前两个参数传递到函数中：\\n\\n```ts title=\\\"api/[level]/[id].ts\\\"\\nexport default async (level: number, id: number) => {\\n  const userData = await queryUser(level, uid);\\n  return userData;\\n};\\n```\\n\\n在调用时直接传入动态参数：\\n\\n```ts title=\\\"App.tsx\\\"\\nimport { useState, useEffect } from 'react';\\nimport { get as getUser } from '@api/[level]/[id]';\\n\\nexport default () => {\\n  const [name, setName] = useState('');\\n\\n  useEffect(() => {\\n    getUser(6, 001).then(userData => setName(userData.name));\\n  }, []);\\n\\n  return <div>{name}</div>;\\n};\\n```\\n\\n#### RequestOption\\n\\nDynamic Path 之后的参数是包含 querystring、request body 的对象 `RequestOption`，这个字段用来定义 `data` 和 `query` 的类型。\\n\\n在不存在动态路由的普通函数中，可以从第一个入参中获取传入的 `data` 和 `query`，例如：\\n\\n```ts title=\\\"api/hello.ts\\\"\\nimport type { RequestOption } from '@modern-js/runtime/server';\\n\\nexport async function post({\\n  query,\\n  data,\\n}: RequestOption<Record<string, string>, Record<string, string>>) {\\n  // do somethings\\n}\\n```\\n\\n这里你也可以使用自定义类型：\\n\\n```ts title=\\\"api/lambda/hello.ts\\\"\\nimport type { RequestOption } from '@modern-js/runtime/server';\\n\\ntype IQuery = {\\n  // some types\\n};\\ntype IData = {\\n  // some types\\n};\\n\\nexport async function post({ query, data }: { query: IQuery; data: IData }) {\\n  // do somethings\\n}\\n```\\n\\n当函数文件使用动态路由规则时，动态路由会在 `RequestOption` 对象参数前。\\n\\n```ts title=\\\"api/[sku]/[id]/item.ts\\\"\\nexport async function post(\\n  sku: string,\\n  id: string,\\n  {\\n    data,\\n    query,\\n  }: RequestOption<Record<string, string>, Record<string, string>>,\\n) {\\n  // do somethings\\n}\\n```\\n\\n调用时也按照函数定义，传入对应的参数即可：\\n\\n```ts title=\\\"App.tsx\\\"\\nimport { post } from '@api/[sku]/[id]/item';\\n\\nexport default () => {\\n  const addSku = () => {\\n    post('0001' /* sku */, '1234' /* id */, {\\n      query: {\\n        /* ... */\\n      },\\n      data: {\\n        /* ... */\\n      },\\n    });\\n  };\\n\\n  return <div onClick={addSku}>添加 SKU</div>;\\n};\\n```\\n\\n之前提到，定义的函数都应该是异步的，是因为在前端调用时会自动转换成 HTTP 接口调用，所以为了保持类型定义与实际调用体验统一，需要在定义 BFF 函数时将它设置为异步。\\n\"";
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
      id: "基础用法",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#基础用法",
        children: "#"
      }), "基础用法"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过 Modern.js 开发的应用，可以在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/"
      }), " 目录下定义接口函数，前端可以调用这些接口函数，即可发起请求，无需写前后端胶水层代码，同时保证前后端类型安全。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "启用-bff",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#启用-bff",
        children: "#"
      }), "启用 BFF"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(enable_bff, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "bff-函数",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#bff-函数",
        children: "#"
      }), "BFF 函数"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["允许通过一体化调用的函数，称为 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BFF 函数"
      }), "。这里写一个最简单的 BFF 函数，创建 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/hello.ts"
      }), " 文件："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "CAUTION"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n如果是框架模式（有 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "api/lambda"
          }), " 目录），需要创建 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "api/lambda/hello.ts"
          })]
        })
      })]
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
      children: ["接着在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/App.tsx"
      }), " 中直接引入函数并调用："]
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
          children: ["\nModern.js 生成器已经在 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tsconfig.json"
          }), " 中配置 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@api"
          }), " 别名，因此可以直接通过别名的方式引入函数。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/App.tsx"
      }), " 中引入的函数，会自动转换成接口调用，不需要再去通过 fetch 去调用接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), " 打开 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080/"
      }), " 可以看到页面已经展示了 BFF 函数返回的内容，在 Network 中可以看到页面向 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080/api/hello"
      }), " 发送了请求："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png",
        alt: "Network"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "函数路由",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#函数路由",
        children: "#"
      }), "函数路由"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js 中，BFF 函数对应的路由系统是基于文件系统实现的，也是一种", (0,jsx_runtime.jsx)(_components.strong, {
        children: "约定式路由"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数写法下 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/"
      }), " 下的所有文件中的每个 BFF 函数都会映射为一个接口。框架写法下 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/lambda"
      }), " 下的所有文件中的每个 BFF 函数都会映射为一个接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "NOTE"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "\n函数写法和框架写法会在下一节详细介绍。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所有 BFF 函数生成的路由都带有统一的前缀，默认值为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api"
      }), "。可以通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/v2/configure/app/bff/prefix.html",
        children: "bff.prefix"
      }), " 设置公共路由的前缀。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面介绍几种路由的约定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "默认路由",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#默认路由",
        children: "#"
      }), "默认路由"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.[jt]s"
      }), " 命名的文件会被映射到上一层目录。"]
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
      id: "多层路由",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#多层路由",
        children: "#"
      }), "多层路由"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持解析嵌套的文件，如果创建嵌套文件夹结构，文件仍会以相同方式自动解析路由。"
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
      id: "动态路由",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#动态路由",
        children: "#"
      }), "动态路由"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同样的，创建命名带有 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[xxx]"
      }), " 的文件夹或者文件，支持动态的命名路由参数。动态路由的函数参数规则可以看 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/v2/guides/advanced-features/bff/function.html#dynamic-path",
        children: "dynamac-path"
      })]
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
      id: "白名单",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#白名单",
        children: "#"
      }), "白名单"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "api/"
      }), " 目录下所有文件都会当作 BFF 函数文件去解析，但以下文件不会被解析："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["命名以 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_"
        }), " 开头的文件。例如：", (0,jsx_runtime.jsx)(_components.code, {
          children: "_utils.ts"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["命名以 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_"
        }), " 开头的文件夹下所有文件。例如：", (0,jsx_runtime.jsx)(_components.code, {
          children: "_utils/index.ts"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "_utils/cp.ts"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["测试文件。例如：", (0,jsx_runtime.jsx)(_components.code, {
          children: "foo.test.ts"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript 类型文件。例如：", (0,jsx_runtime.jsx)(_components.code, {
          children: "hello.d.ts"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "node_module"
        }), " 下的文件。"]
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
      children: "Modern.js 的 BFF 函数需要遵循 RESTful API 标准来定义, 遵循 HTTP Method 规范，并且不允许自由定义参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-directive-content",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n假设函数允许自由定义参数，产出的路由必然由", (0,jsx_runtime.jsx)(_components.strong, {
            children: "私有协议"
          }), "进行调用（原因是无法区分请求参数与请求体），而无法实现任意的 RESTful API。"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果服务仅用于应用本身不存在问题，但它", (0,jsx_runtime.jsx)(_components.strong, {
            children: "不标准的接口定义"
          }), "无法融入更大的体系。 在多个系统共同工作的情况下（例如 BFF 低码搭建），会导致其他系统也需要遵循", (0,jsx_runtime.jsx)(_components.strong, {
            children: "私有协议"
          }), "。"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "函数具名导出",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#函数具名导出",
        children: "#"
      }), "函数具名导出"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js BFF 函数的导出名决定了函数对应接口的 Method，如 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get"
      }), "，", (0,jsx_runtime.jsx)(_components.code, {
        children: "post"
      }), " 等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，按照以下例子，可导出一个 GET 接口。"
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
      children: ["按照以下例子，则可导出一个 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), " 接口"]
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
          children: ["对应 HTTP Method，Modern.js 也支持了 9 种定义，即：", (0,jsx_runtime.jsx)(_components.code, {
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
          }), "，即可以用这些 Method 作为函数导出的名字。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["名字是大小不敏感的，如果是 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET"
          }), "，写成 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "Get"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "GEt"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "GET"
          }), "，都可以准确识别。而默认导出，即 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "export default xxx"
          }), " 则会被映射为 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Get"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以在一个文件中定义多个不同 Method 的函数，但如果定义多个相同 Method 的函数，则只有第一个会生效。"
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
          children: "\n需要注意的是，定义的函数都应该是异步的，与函数调用时类型有关，后面会提到。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "函数参数规则",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#函数参数规则",
        children: "#"
      }), "函数参数规则"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上所述，为了满足 RESTful API 的设计标准，因此 Modern.js 中 BFF 函数需要遵循一定的入参规则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数参数分为两块，分别是请求路径中的动态部分和请求选项 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestOption"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dynamic-path",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#dynamic-path",
        children: "#"
      }), "Dynamic Path"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态路由会作为函数第一部分的入参，每个入参对应一段动态路由。例如以下示例，uid 会作为前两个参数传递到函数中："
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
      children: "在调用时直接传入动态参数："
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
      children: ["Dynamic Path 之后的参数是包含 querystring、request body 的对象 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestOption"
      }), "，这个字段用来定义 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query"
      }), " 的类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在不存在动态路由的普通函数中，可以从第一个入参中获取传入的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query"
      }), "，例如："]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里你也可以使用自定义类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "api/lambda/hello.ts"
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
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "IQuery"
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
                  color: "var(--shiki-token-comment)"
                },
                children: "// some types"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "IData"
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
                  color: "var(--shiki-token-comment)"
                },
                children: "// some types"
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
                children: "({ query"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " data }"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { query"
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
                children: "IQuery"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "; data"
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
                children: "IData"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " }) {"
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
      children: ["当函数文件使用动态路由规则时，动态路由会在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestOption"
      }), " 对象参数前。"]
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
      children: "调用时也按照函数定义，传入对应的参数即可："
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
      children: "之前提到，定义的函数都应该是异步的，是因为在前端调用时会自动转换成 HTTP 接口调用，所以为了保持类型定义与实际调用体验统一，需要在定义 BFF 函数时将它设置为异步。"
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