"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[20008],{

/***/ 66273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ charset_content),
  "default": () => (/* binding */ output_charset),
  "frontmatter": () => (/* binding */ charset_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ charset_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/en/config/output/charset.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"- **Type:** `'ascii' | 'utf8'`\\n- **Default:** `'ascii'`\\n\\nBy default, Builder's output is ASCII-only and will escape all non-ASCII characters.\\n\\nIf you want to output the original characters without using escape sequences, you can set `output.charset` to `utf8`.\\n\\n```js\\nexport default {\\n  output: {\\n    charset: 'utf8',\\n  },\\n};\\n```\\n\\nBuilder will automatically add `<meta charset=\\\"utf-8\\\">` to the generated HTML files if `output.charset` is `utf8`.\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    p: "p",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'ascii' | 'utf8'"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'ascii'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By default, Builder's output is ASCII-only and will escape all non-ASCII characters."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to output the original characters without using escape sequences, you can set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.charset"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "utf8"
      }), "."]
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
                children: "    charset"
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
                children: "'utf8'"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Builder will automatically add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<meta charset=\"utf-8\">"
      }), " to the generated HTML files if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.charset"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "utf8"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const charset = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/output/charset.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const charset_frontmatter = {
  "sidebar_label": "charset"
};

const charset_toc = [];
const title = `output.charset`;
const charset_content = "\"---\\nsidebar_label: charset\\n---\\n\\n# output.charset\\n\\n:::tip\\nThis config is provided by Modern.js Builder, more detail can see [output.charset](https://modernjs.dev/builder/en/api/config-output.html#outputcharset)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/en/config/output/charset.md'\\n\\n<Main />\\n\"";
function charset_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputcharset",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputcharset",
        children: "#"
      }), "output.charset"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nThis config is provided by Modern.js Builder, more detail can see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/en/api/config-output.html#outputcharset",
            target: "_blank",
            rel: "nofollow",
            children: "output.charset"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(charset, {})]
  });
}
function charset_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(charset_createMdxContent, props)
  })) : charset_createMdxContent(props);
}
/* harmony default export */ const output_charset = (charset_MDXContent);


/***/ })

}]);