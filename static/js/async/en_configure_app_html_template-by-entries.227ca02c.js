"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[90765],{

/***/ 4008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ template_by_entries_content),
  "default": () => (/* binding */ template_by_entries),
  "frontmatter": () => (/* binding */ template_by_entries_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ template_by_entries_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/en/config/html/templateByEntries.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "example",
  "text": "Example",
  "depth": 3
}];
const content = "\"- **Type:** `Object`\\n- **Default:** `undefined`\\n\\nSet different template file for different pages.\\n\\nThe usage is same as `template`, and you can use the \\\"entry name\\\" as the key to set each page individually.\\n\\n`templateByEntries` will overrides the value set in `template`.\\n\\n### Example\\n\\n```js\\nexport default {\\n  output: {\\n    template: './static/index.html',\\n    templateByEntries: {\\n      foo: './src/pages/foo/index.html',\\n      bar: './src/pages/bar/index.html',\\n    },\\n  },\\n};\\n```\\n\"";
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
          children: "Object"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "undefined"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set different template file for different pages."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The usage is same as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template"
      }), ", and you can use the \"entry name\" as the key to set each page individually."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "templateByEntries"
      }), " will overrides the value set in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "example",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#example",
        children: "#"
      }), "Example"]
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
                children: "    template"
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
                children: "'./static/index.html'"
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
                children: "    templateByEntries"
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
                children: "      foo"
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
                children: "'./src/pages/foo/index.html'"
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
                children: "      bar"
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
                children: "'./src/pages/bar/index.html'"
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
                children: "    }"
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
/* harmony default export */ const templateByEntries = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/html/template-by-entries.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const template_by_entries_frontmatter = {
  "sidebar_label": "templateByEntries"
};

const template_by_entries_toc = [];
const title = `html.templateByEntries`;
const template_by_entries_content = "\"---\\nsidebar_label: templateByEntries\\n---\\n\\n# html.templateByEntries\\n\\n:::tip\\nThis config is provided by Modern.js Builder, more detail can see [html.templateByEntries](https://modernjs.dev/builder/en/api/config-html.html#htmltemplatebyentries)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/en/config/html/templateByEntries.md'\\n\\n<Main />\\n\"";
function template_by_entries_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "htmltemplatebyentries",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#htmltemplatebyentries",
        children: "#"
      }), "html.templateByEntries"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nThis config is provided by Modern.js Builder, more detail can see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/en/api/config-html.html#htmltemplatebyentries",
            target: "_blank",
            rel: "nofollow",
            children: "html.templateByEntries"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(templateByEntries, {})]
  });
}
function template_by_entries_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(template_by_entries_createMdxContent, props)
  })) : template_by_entries_createMdxContent(props);
}
/* harmony default export */ const template_by_entries = (template_by_entries_MDXContent);


/***/ })

}]);