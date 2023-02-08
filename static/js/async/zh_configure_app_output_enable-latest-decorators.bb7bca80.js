"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[26016],{

/***/ 58329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ enable_latest_decorators_content),
  "default": () => (/* binding */ enable_latest_decorators),
  "frontmatter": () => (/* binding */ enable_latest_decorators_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ enable_latest_decorators_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/enableLatestDecorators.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"- **类型：** `boolean`\\n- **默认值：** `false`\\n\\n是否要使用 [新版 decorator 提案](https://github.com/tc39/proposal-decorators/tree/7fa580b40f2c19c561511ea2c978e307ae689a1b) 进行编译。\\n\\n默认情况下，Builder 在编译装饰器时采用 [旧版 decorator 提案](https://github.com/wycats/javascript-decorators/blob/e1bf8d41bfa2591d949dd3bbf013514c8904b913/README.md)。\\n\\n将 `output.enableLatestDecorators` 设置为 `true` 时，Builder 会采用新版 decorator 提案 (2018-09 版本) 进行编译。\\n\\n```ts\\nexport default {\\n  output: {\\n    enableLatestDecorators: true,\\n  },\\n};\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    p: "p",
    a: "a",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "类型："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["是否要使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/tc39/proposal-decorators/tree/7fa580b40f2c19c561511ea2c978e307ae689a1b",
        target: "_blank",
        rel: "nofollow",
        children: "新版 decorator 提案"
      }), " 进行编译。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，Builder 在编译装饰器时采用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/wycats/javascript-decorators/blob/e1bf8d41bfa2591d949dd3bbf013514c8904b913/README.md",
        target: "_blank",
        rel: "nofollow",
        children: "旧版 decorator 提案"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.enableLatestDecorators"
      }), " 设置为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " 时，Builder 会采用新版 decorator 提案 (2018-09 版本) 进行编译。"]
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
                children: "default"
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
                children: "  output"
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
                children: "    enableLatestDecorators"
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
                children: "true"
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
                children: "};"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
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
/* harmony default export */ const enableLatestDecorators = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/enable-latest-decorators.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const enable_latest_decorators_frontmatter = {
  "sidebar_label": "enableLatestDecorators"
};

const enable_latest_decorators_toc = [];
const title = `output.enableLatestDecorators`;
const enable_latest_decorators_content = "\"---\\nsidebar_label: enableLatestDecorators\\n---\\n\\n# output.enableLatestDecorators\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.enableLatestDecorators](https://modernjs.dev/builder/api/config-output.html#outputenablelatestdecorators)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/enableLatestDecorators.md'\\n\\n<Main />\\n\"";
function enable_latest_decorators_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputenablelatestdecorators",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputenablelatestdecorators",
        children: "#"
      }), "output.enableLatestDecorators"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputenablelatestdecorators",
            target: "_blank",
            rel: "nofollow",
            children: "output.enableLatestDecorators"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(enableLatestDecorators, {})]
  });
}
function enable_latest_decorators_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(enable_latest_decorators_createMdxContent, props)
  })) : enable_latest_decorators_createMdxContent(props);
}
/* harmony default export */ const enable_latest_decorators = (enable_latest_decorators_MDXContent);


/***/ })

}]);