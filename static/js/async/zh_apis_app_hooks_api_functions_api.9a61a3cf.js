"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[69094],{

/***/ 51903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "frontmatter": () => (/* binding */ frontmatter),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97458);
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = {
  "title": "**/*.[tj]s",
  "sidebar_position": 1
};
const toc = [{
  "id": "该文件约定路由如下",
  "text": "该文件约定路由如下：",
  "depth": 2
}, {
  "id": "默认路由",
  "text": "默认路由",
  "depth": 3
}, {
  "id": "嵌套路由",
  "text": "嵌套路由",
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
  "id": "函数定义",
  "text": "函数定义",
  "depth": 2
}];
const title = `**/*.[tj]s`;
const content = "\"---\\ntitle: '**/*.[tj]s'\\nsidebar_position: 1\\n---\\n# **/*.[tj]s\\n\\n在 BFF 函数写法下，声明 API 路由的文件。除了[某些约定文件](/apis/app/hooks/api/functions/api)外，`api` 目录下的文件会被注册为接口的路由。\\n\\n:::info\\n使用 `api` 目录需要开启 BFF 功能，需要在项目下执行 new 命令启用「BFF」功能。\\n\\n该文件支持使用 `js` 或 `ts` 语言，但必须使用 `esm` 语法导出函数。\\n\\n:::\\n\\n## 该文件约定路由如下：\\n\\n### 默认路由\\n\\n路由系统会将以 `index` 命名的文件会被映射到上一层目录。\\n\\n- `api/index.ts` -> `$BASENAME/`\\n- `api/user/index.ts` -> `$BASENAME/user`\\n\\n### 嵌套路由\\n\\n路由系统也支持解析嵌套的文件，如果创建嵌套文件夹结构，文件仍会以相同方式自动解析路由。\\n\\n- `api/hello.ts` -> `$BASENAME/hello`\\n- `api/user/list.ts` -> `$BASENAME/user/list`\\n\\n### 动态路由\\n\\n同样的，你可以通过创建带有 `[xxx]` 的文件夹或者文件来支持动态的命名路由参数。\\n\\n- `api/user/[username]/info.ts` -> `$BASENAME/user/:username/info`\\n- `api/user/[username]/delete.ts` -> `$BASENAME/user/:username/delete`\\n- `api/article/[id]/info.ts` -> `$BASENAME/article/:id/info`\\n\\n其中的 `$BASENAME` 可以在 `modern.config.js` 中进行配置，默认值为 `/api`。\\n\\n### 白名单\\n\\n默认 `api` 目录下所有文件都会当作 BFF 函数文件去解析，但同样我们也设置了白名单，这些文件不被被解析：\\n\\n- 命名以 `_` 开头的文件。例如：`_utils.ts`。\\n- 命名以 `_` 开头的文件夹下所有文件。例如：`_utils/index.ts`、`_utils/cp.ts`。\\n- 测试文件。例如：`foo.test.ts`。\\n- TypeScript 类型文件。例如：`hello.d.ts`。\\n- `node_module` 下的文件。\\n\\n## 函数定义\\n\\n除了上面的路由规则之外，代码中函数定义与导出也有相应的约定。\\n\\n函数通过具名导出，导出函数的名字为对应接口接受的 HTTP Method，即：\\n\\n```ts\\nexport const get = async () => {\\n  return {\\n    name: 'Modern.js',\\n    desc: '现代 web 工程方案',\\n  };\\n};\\n```\\n\\n这样导出函数，则会得到一个 `POST` 接口。\\n\\n应用工程中支持了 9 个 Method 定义，即：`GET`、`POST`、`PUT`、`DELETE`、`CONNECT`、`TRACE`、`PATCH`、`OPTION`、`HEAD`，即可以用这些 Method 作为函数导出的名字。\\n\\n名字是大小不敏感的，就是说，如果是 `GET`，写成 `get`、`Get`、`GEt`、`GET`，都可以准确识别。而默认导出，即 `export default xxx` 则会被映射为 `Get`。\\n\\n因为 `delete` 是 JavaScript 中的关键字，可以使用 `del` 或者 `DELETE` 代替。\\n\\n可以在一个文件中定义多个不同 Method 的函数，但如果定义多个相同 Method 的函数，则只有第一个会生效。\\n\\n:::info\\n需要注意的是，定义的函数都应该是异步的，这个与函数调用时类型有关，这个后面会提到。\\n\\n:::\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    ul: "ul",
    li: "li",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "tjs",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#tjs",
        children: "#"
      }), "**/*.[tj]s"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 BFF 函数写法下，声明 API 路由的文件。除了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/apis/app/hooks/api/functions/api.html",
        children: "某些约定文件"
      }), "外，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "api"
      }), " 目录下的文件会被注册为接口的路由。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-directive-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "api"
          }), " 目录需要开启 BFF 功能，需要在项目下执行 new 命令启用「BFF」功能。"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["该文件支持使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "js"
          }), " 或 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "ts"
          }), " 语言，但必须使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "esm"
          }), " 语法导出函数。"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "该文件约定路由如下",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#该文件约定路由如下",
        children: "#"
      }), "该文件约定路由如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "默认路由",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#默认路由",
        children: "#"
      }), "默认路由"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["路由系统会将以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "index"
      }), " 命名的文件会被映射到上一层目录。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/index.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/user/index.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/user"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "嵌套路由",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#嵌套路由",
        children: "#"
      }), "嵌套路由"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "路由系统也支持解析嵌套的文件，如果创建嵌套文件夹结构，文件仍会以相同方式自动解析路由。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/hello.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/hello"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/user/list.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/user/list"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "动态路由",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#动态路由",
        children: "#"
      }), "动态路由"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["同样的，你可以通过创建带有 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "[xxx]"
      }), " 的文件夹或者文件来支持动态的命名路由参数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/user/[username]/info.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/user/:username/info"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/user/[username]/delete.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/user/:username/delete"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "api/article/[id]/info.ts"
        }), " -> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$BASENAME/article/:id/info"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["其中的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$BASENAME"
      }), " 可以在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "modern.config.js"
      }), " 中进行配置，默认值为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "/api"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "白名单",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#白名单",
        children: "#"
      }), "白名单"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "api"
      }), " 目录下所有文件都会当作 BFF 函数文件去解析，但同样我们也设置了白名单，这些文件不被被解析："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["命名以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_"
        }), " 开头的文件。例如：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_utils.ts"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["命名以 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_"
        }), " 开头的文件夹下所有文件。例如：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_utils/index.ts"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "_utils/cp.ts"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["测试文件。例如：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "foo.test.ts"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["TypeScript 类型文件。例如：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hello.d.ts"
        }), "。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "node_module"
        }), " 下的文件。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "函数定义",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#函数定义",
        children: "#"
      }), "函数定义"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "除了上面的路由规则之外，代码中函数定义与导出也有相应的约定。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "函数通过具名导出，导出函数的名字为对应接口接受的 HTTP Method，即："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "export"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "get"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "async"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " () "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "=>"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "return"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " {"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    name"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'Modern.js'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    desc"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'现代 web 工程方案'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  };"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "};"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这样导出函数，则会得到一个 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "POST"
      }), " 接口。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["应用工程中支持了 9 个 Method 定义，即：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GET"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "POST"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PUT"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "DELETE"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CONNECT"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TRACE"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PATCH"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "OPTION"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HEAD"
      }), "，即可以用这些 Method 作为函数导出的名字。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["名字是大小不敏感的，就是说，如果是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GET"
      }), "，写成 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "get"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Get"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GEt"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GET"
      }), "，都可以准确识别。而默认导出，即 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "export default xxx"
      }), " 则会被映射为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Get"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["因为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "delete"
      }), " 是 JavaScript 中的关键字，可以使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "del"
      }), " 或者 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "DELETE"
      }), " 代替。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "可以在一个文件中定义多个不同 Method 的函数，但如果定义多个相同 Method 的函数，则只有第一个会生效。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "\n需要注意的是，定义的函数都应该是异步的，这个与函数调用时类型有关，这个后面会提到。"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

}]);