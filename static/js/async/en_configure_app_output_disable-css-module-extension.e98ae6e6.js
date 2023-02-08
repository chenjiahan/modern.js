"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[13388],{

/***/ 51153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ disable_css_module_extension_content),
  "default": () => (/* binding */ disable_css_module_extension),
  "frontmatter": () => (/* binding */ disable_css_module_extension_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ disable_css_module_extension_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/en/config/output/disableCssModuleExtension.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "example",
  "text": "Example",
  "depth": 3
}, {
  "id": "detailed",
  "text": "Detailed",
  "depth": 3
}, {
  "id": "disablecssmoduleextension-is-false-default",
  "text": "disableCssModuleExtension is false (default)",
  "depth": 4
}, {
  "id": "disablecssmoduleextension-is-true",
  "text": "disableCssModuleExtension is true",
  "depth": 4
}];
const content = "\"- **Type:** `boolean`\\n- **Default:** `false`\\n\\nWhether to treat all `.css` files in the source directory as CSS Modules.\\n\\nBy default, only the `*.module.css` files are treated as CSS Modules. After enabling this config, all `*.css` style files in the source directory will be regarded as CSS Modules.\\n\\n`.sass`, `.scss` and `.less` files are also affected by `disableCssModuleExtension`.\\n\\n:::tip\\nWe do not recommend enabling this config, because after enabling `disableCssModuleExtension`, CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance.\\n:::\\n\\n### Example\\n\\n```js\\nexport default {\\n  output: {\\n    disableCssModuleExtension: true,\\n  },\\n};\\n```\\n\\n### Detailed\\n\\nThe following is a detailed explanation of the CSS Modules rules:\\n\\n#### disableCssModuleExtension is false (default)\\n\\nThe following files are treated as CSS Modules:\\n\\n- all `*.module.css` files\\n\\nThe following files are treated as normal CSS:\\n\\n- all `*.css` files (excluding `.module`)\\n- all `*.global.css` files\\n\\n#### disableCssModuleExtension is true\\n\\nThe following files are treated as CSS Modules:\\n\\n- `*.css` and `*.module.css` files in the source directory\\n- `*.module.css` files under node_modules\\n\\nThe following files are treated as normal CSS:\\n\\n- all `*.global.css` files\\n- `*.css` files under node_modules (without `.module`)\\n\\n:::tip\\nFor CSS Modules files inside node_modules, please always use the `*.module.css` suffix.\\n:::\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    p: "p",
    div: "div",
    h3: "h3",
    a: "a",
    button: "button",
    pre: "pre",
    span: "span",
    h4: "h4"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Whether to treat all ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".css"
      }), " files in the source directory as CSS Modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, only the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.module.css"
      }), " files are treated as CSS Modules. After enabling this config, all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.css"
      }), " style files in the source directory will be regarded as CSS Modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: ".sass"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".scss"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".less"
      }), " files are also affected by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "disableCssModuleExtension"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nWe do not recommend enabling this config, because after enabling ", (0,jsx_runtime.jsx)(_components.code, {
            children: "disableCssModuleExtension"
          }), ", CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance."]
        })
      })]
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
                children: "    disableCssModuleExtension"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "detailed",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#detailed",
        children: "#"
      }), "Detailed"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following is a detailed explanation of the CSS Modules rules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "disablecssmoduleextension-is-false-default",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#disablecssmoduleextension-is-false-default",
        children: "#"
      }), "disableCssModuleExtension is false (default)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following files are treated as CSS Modules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.module.css"
        }), " files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following files are treated as normal CSS:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.css"
        }), " files (excluding ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".module"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.global.css"
        }), " files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "disablecssmoduleextension-is-true",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#disablecssmoduleextension-is-true",
        children: "#"
      }), "disableCssModuleExtension is true"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following files are treated as CSS Modules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*.css"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.module.css"
        }), " files in the source directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*.module.css"
        }), " files under node_modules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following files are treated as normal CSS:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.global.css"
        }), " files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*.css"
        }), " files under node_modules (without ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".module"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nFor CSS Modules files inside node_modules, please always use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*.module.css"
          }), "suffix."]
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
/* harmony default export */ const disableCssModuleExtension = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/output/disable-css-module-extension.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const disable_css_module_extension_frontmatter = {
  "sidebar_label": "disableCssModuleExtension"
};

const disable_css_module_extension_toc = [];
const title = `output.disableCssModuleExtension`;
const disable_css_module_extension_content = "\"---\\nsidebar_label: disableCssModuleExtension\\n---\\n\\n# output.disableCssModuleExtension\\n\\n:::tip\\nThis config is provided by Modern.js Builder, more detail can see [output.disableCssModuleExtension](https://modernjs.dev/builder/en/api/config-output.html#outputdisablecssmoduleextension)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/en/config/output/disableCssModuleExtension.md'\\n\\n<Main />\\n\"";
function disable_css_module_extension_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputdisablecssmoduleextension",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputdisablecssmoduleextension",
        children: "#"
      }), "output.disableCssModuleExtension"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nThis config is provided by Modern.js Builder, more detail can see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/en/api/config-output.html#outputdisablecssmoduleextension",
            target: "_blank",
            rel: "nofollow",
            children: "output.disableCssModuleExtension"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(disableCssModuleExtension, {})]
  });
}
function disable_css_module_extension_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(disable_css_module_extension_createMdxContent, props)
  })) : disable_css_module_extension_createMdxContent(props);
}
/* harmony default export */ const disable_css_module_extension = (disable_css_module_extension_MDXContent);


/***/ })

}]);