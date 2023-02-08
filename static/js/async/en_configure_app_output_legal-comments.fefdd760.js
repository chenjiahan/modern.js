"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[92961],{

/***/ 29002:
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
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/en/config/output/legalComments.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "example",
  "text": "Example",
  "depth": 3
}];
const content = "\"- **Type:** `'linked' | 'inline' | 'none'`\\n- **Default:** `'linked'`\\n\\nConfigure how to handle the legal comment.\\n\\nA \\\"legal comment\\\" is considered to be any statement-level comment in JS or rule-level comment in CSS that contains @license or @preserve or that starts with //! or /\\\\*!. These comments are preserved in output files by default since that follows the intent of the original authors of the code.\\n\\nThis behavior can be configured by using one of the following options:\\n\\n- `linked`: Extract all legal comments to a .LEGAL.txt file and link to them with a comment.\\n- `inline`: Preserve all legal comments in original position.\\n- `none`: Remove all legal comments.\\n\\n### Example\\n\\nRemove all legal comments:\\n\\n```js\\nexport default {\\n  output: {\\n    legalComments: 'none',\\n  },\\n};\\n```\\n\"";
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
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'linked' | 'inline' | 'none'"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'linked'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure how to handle the legal comment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A \"legal comment\" is considered to be any statement-level comment in JS or rule-level comment in CSS that contains @license or @preserve or that starts with //! or /*!. These comments are preserved in output files by default since that follows the intent of the original authors of the code."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This behavior can be configured by using one of the following options:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "linked"
        }), ": Extract all legal comments to a .LEGAL.txt file and link to them with a comment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "inline"
        }), ": Preserve all legal comments in original position."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "none"
        }), ": Remove all legal comments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "example",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#example",
        children: "#"
      }), "Example"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove all legal comments:"
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

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/output/legal-comments.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const legal_comments_frontmatter = {
  "sidebar_label": "legalComments"
};

const legal_comments_toc = [];
const title = `output.legalComments`;
const legal_comments_content = "\"---\\nsidebar_label: legalComments\\n---\\n\\n# output.legalComments\\n\\n:::tip\\nThis config is provided by Modern.js Builder, more detail can see [output.legalComments](https://modernjs.dev/builder/en/api/config-output.html#outputlegalcomments)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/en/config/output/legalComments.md'\\n\\n<Main />\\n\"";
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
          children: ["\nThis config is provided by Modern.js Builder, more detail can see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/en/api/config-output.html#outputlegalcomments",
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