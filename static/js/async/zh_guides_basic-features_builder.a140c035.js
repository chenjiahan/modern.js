"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[48626],{

/***/ 22886:
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
  "title": "构建能力",
  "sidebar_position": 2
};
const toc = [{
  "id": "构建架构",
  "text": "构建架构",
  "depth": 2
}, {
  "id": "构建文档",
  "text": "构建文档",
  "depth": 2
}, {
  "id": "构建配置",
  "text": "构建配置",
  "depth": 2
}, {
  "id": "构建能力",
  "text": "构建能力",
  "depth": 2
}];
const title = `构建能力`;
const content = "\"---\\ntitle: 构建能力\\nsidebar_position: 2\\n---\\n# 构建能力\\n\\n**Modern.js 的构建能力由 [Modern.js Builder](https://modernjs.dev/builder) 提供。**\\n\\nModern.js Builder 是 Modern.js 体系的核心组件之一，它是一个面向 Web 开发场景的构建引擎，可以脱离 Modern.js 被独立使用。Modern.js Builder 同时支持 webpack 和 Rspack 等多种打包工具，默认情况下使用最成熟的 webpack 进行打包。\\n\\n## 构建架构\\n\\n从构建的角度看，Modern.js 分为三层架构，从上到下依次是：\\n\\n- 上层研发框架：Modern.js。\\n- 通用构建引擎：Modern.js Builder。\\n- 底层打包工具：webpack 和 Rspack。\\n\\n<img src=\\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png\\\" style={{ maxWidth: '540px' }} />\\n\\n## 构建文档\\n\\n由于 Modern.js Builder 是一个可独立使用的模块，我们为它提供了单独的文档，文档地址为：[modernjs.dev/builder](https://modernjs.dev/builder)。\\n\\n在该文档中，你可以了解到 Modern.js Builder 的详细介绍，同时也可以找到各个构建能力的完整使用指南。当你遇到构建方面的需求或问题时，建议你优先阅读 Modern.js Builder 文档来解决。\\n\\n## 构建配置\\n\\nModern.js 的配置继承自 Modern.js Builder，因此你可以在 Modern.js 中使用 Modern.js Builder 提供的所有构建配置。\\n\\n以 Modern.js Builder 的 `html.title` 配置项为例，你可以直接在 `modern.config.ts` 文件中使用该配置项，它会被自动传递给 Modern.js Builder。\\n\\n```ts title=\\\"modern.config.js\\\"\\nexport default defineConfig({\\n  html: {\\n    title: 'example',\\n  },\\n});\\n```\\n\\n关于构建配置的详细说明，请参考 [「Modern.js Builder - Builder 配置」](https://modernjs.dev/builder/guide/basic/builder-config.html)。\\n\\n## 构建能力\\n\\nModern.js Builder 提供了丰富的构建能力，包括 JavaScript 编译、CSS 编译、静态资源处理、代码热更新、代码压缩、TS 类型检查等几十种能力。\\n\\n我们推荐你阅读 [「Modern.js Builder - 功能导航」](https://modernjs.dev/builder/guide/features.html) 来了解 Modern.js Builder 提供的所有构建能力。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    strong: "strong",
    h2: "h2",
    ul: "ul",
    li: "li",
    code: "code",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "构建能力",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#构建能力",
        children: "#"
      }), "构建能力"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
        children: ["Modern.js 的构建能力由 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://modernjs.dev/builder",
          target: "_blank",
          rel: "nofollow",
          children: "Modern.js Builder"
        }), " 提供。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js Builder 是 Modern.js 体系的核心组件之一，它是一个面向 Web 开发场景的构建引擎，可以脱离 Modern.js 被独立使用。Modern.js Builder 同时支持 webpack 和 Rspack 等多种打包工具，默认情况下使用最成熟的 webpack 进行打包。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "构建架构",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#构建架构",
        children: "#"
      }), "构建架构"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "从构建的角度看，Modern.js 分为三层架构，从上到下依次是："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "上层研发框架：Modern.js。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "通用构建引擎：Modern.js Builder。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "底层打包工具：webpack 和 Rspack。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",
      style: {
        maxWidth: '540px'
      }
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "构建文档",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#构建文档",
        children: "#"
      }), "构建文档"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["由于 Modern.js Builder 是一个可独立使用的模块，我们为它提供了单独的文档，文档地址为：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://modernjs.dev/builder",
        target: "_blank",
        rel: "nofollow",
        children: "modernjs.dev/builder"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在该文档中，你可以了解到 Modern.js Builder 的详细介绍，同时也可以找到各个构建能力的完整使用指南。当你遇到构建方面的需求或问题时，建议你优先阅读 Modern.js Builder 文档来解决。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "构建配置",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#构建配置",
        children: "#"
      }), "构建配置"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js 的配置继承自 Modern.js Builder，因此你可以在 Modern.js 中使用 Modern.js Builder 提供的所有构建配置。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["以 Modern.js Builder 的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "html.title"
      }), " 配置项为例，你可以直接在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "modern.config.ts"
      }), " 文件中使用该配置项，它会被自动传递给 Modern.js Builder。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-code-title",
        children: "modern.config.js"
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
                children: "default"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "defineConfig"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "({"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  html"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
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
                children: "    title"
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
                children: "'example'"
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
                children: "  }"
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
                children: "});"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["关于构建配置的详细说明，请参考 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://modernjs.dev/builder/guide/basic/builder-config.html",
        target: "_blank",
        rel: "nofollow",
        children: "「Modern.js Builder - Builder 配置」"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "构建能力-1",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#构建能力-1",
        children: "#"
      }), "构建能力"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js Builder 提供了丰富的构建能力，包括 JavaScript 编译、CSS 编译、静态资源处理、代码热更新、代码压缩、TS 类型检查等几十种能力。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们推荐你阅读 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://modernjs.dev/builder/guide/features.html",
        target: "_blank",
        rel: "nofollow",
        children: "「Modern.js Builder - 功能导航」"
      }), " 来了解 Modern.js Builder 提供的所有构建能力。"]
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