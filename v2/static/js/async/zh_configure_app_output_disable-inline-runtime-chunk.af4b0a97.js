"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[20038],{

/***/ 31727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ disable_inline_runtime_chunk_content),
  "default": () => (/* binding */ disable_inline_runtime_chunk),
  "frontmatter": () => (/* binding */ disable_inline_runtime_chunk_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ disable_inline_runtime_chunk_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/disableInlineRuntimeChunk.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"- **类型：** `boolean`\\n- **默认值：** `false`\\n\\n用于控制是否内联 [runtimeChunk](https://webpack.js.org/configuration/optimization/#optimizationruntimechunk) 到 HTML 中。\\n\\n在生产环境下，runtime chunk 文件将会默认被内联到 HTML 文件中，而不是写到产物目录中，这样可以减少文件请求的数量。\\n\\n这个选项用来关闭这个默认行为。\\n\\n```js\\nexport default {\\n  output: {\\n    disableInlineRuntimeChunk: true,\\n  },\\n};\\n```\\n\"";
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
      children: ["用于控制是否内联 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://webpack.js.org/configuration/optimization/#optimizationruntimechunk",
        target: "_blank",
        rel: "nofollow",
        children: "runtimeChunk"
      }), " 到 HTML 中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在生产环境下，runtime chunk 文件将会默认被内联到 HTML 文件中，而不是写到产物目录中，这样可以减少文件请求的数量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个选项用来关闭这个默认行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
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
                children: "    disableInlineRuntimeChunk"
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
/* harmony default export */ const disableInlineRuntimeChunk = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/disable-inline-runtime-chunk.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const disable_inline_runtime_chunk_frontmatter = {
  "sidebar_label": "disableInlineRuntimeChunk"
};

const disable_inline_runtime_chunk_toc = [];
const title = `output.disableInlineRuntimeChunk`;
const disable_inline_runtime_chunk_content = "\"---\\nsidebar_label: disableInlineRuntimeChunk\\n---\\n\\n# output.disableInlineRuntimeChunk\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.disableInlineRuntimeChunk](https://modernjs.dev/builder/api/config-output.html#outputdisableinlineruntimechunk)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/disableInlineRuntimeChunk.md'\\n\\n<Main />\\n\"";
function disable_inline_runtime_chunk_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputdisableinlineruntimechunk",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputdisableinlineruntimechunk",
        children: "#"
      }), "output.disableInlineRuntimeChunk"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputdisableinlineruntimechunk",
            target: "_blank",
            rel: "nofollow",
            children: "output.disableInlineRuntimeChunk"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(disableInlineRuntimeChunk, {})]
  });
}
function disable_inline_runtime_chunk_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(disable_inline_runtime_chunk_createMdxContent, props)
  })) : disable_inline_runtime_chunk_createMdxContent(props);
}
/* harmony default export */ const disable_inline_runtime_chunk = (disable_inline_runtime_chunk_MDXContent);


/***/ })

}]);