"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[37046],{

/***/ 96879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ legal_comments_content),
  "default": () => (/* binding */ legal_comments),
  "frontmatter": () => (/* binding */ legal_comments_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ legal_comments_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/legalComments.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "示例",
  "text": "示例",
  "depth": 3
}];
const content = "\"- **类型：** `'linked' | 'inline' | 'none'`\\n- **默认值：** `'linked'`\\n\\n配置 legal comment 的处理方式。\\n\\nlegal comment 是 JS 或 CSS 文件中的一些特殊注释，这些注释包含 `@license` 或 `@preserve`，或是以 `//!` 开头。默认情况下，这些注释保留在输出文件中，因为这遵循了代码原作者的意图。\\n\\n你可以通过 `legalComments` 来配置相关行为：\\n\\n- `linked`：将所有 legal comments 移至 .LEGAL.txt 文件并通过注释链接到它们。\\n- `inline`：保留所有 legal comments。\\n- `none`：移除所有 legal comments。\\n\\n### 示例\\n\\n移除所有 legal comments。\\n\\n```js\\nexport default {\\n  output: {\\n    legalComments: 'none',\\n  },\\n};\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    p: "p",
    h3: "h3",
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
          children: "'linked' | 'inline' | 'none'"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'linked'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置 legal comment 的处理方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["legal comment 是 JS 或 CSS 文件中的一些特殊注释，这些注释包含 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@license"
      }), " 或 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@preserve"
      }), "，或是以 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "//!"
      }), " 开头。默认情况下，这些注释保留在输出文件中，因为这遵循了代码原作者的意图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "legalComments"
      }), " 来配置相关行为："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "linked"
        }), "：将所有 legal comments 移至 .LEGAL.txt 文件并通过注释链接到它们。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "inline"
        }), "：保留所有 legal comments。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "none"
        }), "：移除所有 legal comments。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "示例",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#示例",
        children: "#"
      }), "示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除所有 legal comments。"
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
                children: "    legalComments"
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
                children: "'none'"
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
/* harmony default export */ const legalComments = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/legal-comments.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const legal_comments_frontmatter = {
  "sidebar_label": "legalComments"
};

const legal_comments_toc = [];
const title = `output.legalComments`;
const legal_comments_content = "\"---\\nsidebar_label: legalComments\\n---\\n\\n# output.legalComments\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.legalComments](https://modernjs.dev/builder/api/config-output.html#outputlegalcomments)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/legalComments.md'\\n\\n<Main />\\n\"";
function legal_comments_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputlegalcomments",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputlegalcomments",
        children: "#"
      }), "output.legalComments"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputlegalcomments",
            target: "_blank",
            rel: "nofollow",
            children: "output.legalComments"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(legalComments, {})]
  });
}
function legal_comments_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(legal_comments_createMdxContent, props)
  })) : legal_comments_createMdxContent(props);
}
/* harmony default export */ const legal_comments = (legal_comments_MDXContent);


/***/ })

}]);