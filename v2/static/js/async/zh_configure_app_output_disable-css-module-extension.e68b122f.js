"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[59935],{

/***/ 40995:
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
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/disableCssModuleExtension.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "示例",
  "text": "示例",
  "depth": 3
}, {
  "id": "规则",
  "text": "规则",
  "depth": 3
}, {
  "id": "未开启-disablecssmoduleextension默认",
  "text": "未开启 disableCssModuleExtension（默认）",
  "depth": 4
}, {
  "id": "开启-disablecssmoduleextension",
  "text": "开启 disableCssModuleExtension",
  "depth": 4
}];
const content = "\"- **类型：** `boolean`\\n- **默认值：** `false`\\n\\n是否将源码目录下的所有样式文件当做 CSS Modules 模块进行处理。\\n\\n在默认情况下，只有 `*.module.css` 结尾的文件才被视为 CSS Modules 模块。开启该配置项之后，会将源码目录下的所有 `*.css` 样式文件当做 CSS Modules 模块。\\n\\n`.sass`、`.scss` 和 `.less` 文件的处理规则与 `.css` 文件一致，也会受到 `disableCssModuleExtension` 的影响。\\n\\n:::tip\\n我们不推荐开启此配置项，因为开启 `disableCssModuleExtension` 后，CSS Modules 文件和普通 CSS 文件无法得到明确的区分，不利于长期维护。\\n:::\\n\\n### 示例\\n\\n```js\\nexport default {\\n  output: {\\n    disableCssModuleExtension: true,\\n  },\\n};\\n```\\n\\n### 规则\\n\\n以下是对 CSS Modules 判断规则的详细解释：\\n\\n#### 未开启 disableCssModuleExtension（默认）\\n\\n以下文件会视为 CSS Modules：\\n\\n- 所有 `*.module.css` 文件\\n\\n以下文件会视为普通 CSS：\\n\\n- 所有 `*.css` 文件（不含 `.module`）\\n- 所有 `*.global.css` 文件\\n\\n#### 开启 disableCssModuleExtension\\n\\n以下文件会视为 CSS Modules：\\n\\n- 源码目录下的 `*.css` 和 `*.module.css` 文件\\n- node_modules 下的 `*.module.css` 文件\\n\\n以下文件会视为普通 CSS：\\n\\n- 所有 `*.global.css` 文件\\n- node_modules 下的 `*.css` 文件（不含 `.module`）\\n\\n:::tip\\n对于 node_modules 中的 CSS Modules 文件，请始终使用 `*.module.css` 后缀。\\n:::\\n\"";
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否将源码目录下的所有样式文件当做 CSS Modules 模块进行处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在默认情况下，只有 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.module.css"
      }), " 结尾的文件才被视为 CSS Modules 模块。开启该配置项之后，会将源码目录下的所有 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*.css"
      }), " 样式文件当做 CSS Modules 模块。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: ".sass"
      }), "、", (0,jsx_runtime.jsx)(_components.code, {
        children: ".scss"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".less"
      }), " 文件的处理规则与 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".css"
      }), " 文件一致，也会受到 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "disableCssModuleExtension"
      }), " 的影响。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n我们不推荐开启此配置项，因为开启 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "disableCssModuleExtension"
          }), "后，CSS Modules 文件和普通 CSS 文件无法得到明确的区分，不利于长期维护。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "示例",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#示例",
        children: "#"
      }), "示例"]
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
      id: "规则",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#规则",
        children: "#"
      }), "规则"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是对 CSS Modules 判断规则的详细解释："
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "未开启-disablecssmoduleextension默认",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#未开启-disablecssmoduleextension默认",
        children: "#"
      }), "未开启 disableCssModuleExtension（默认）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下文件会视为 CSS Modules："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所有 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.module.css"
        }), " 文件"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下文件会视为普通 CSS："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所有 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.css"
        }), " 文件（不含 ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".module"
        }), "）"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所有 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.global.css"
        }), " 文件"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "开启-disablecssmoduleextension",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#开启-disablecssmoduleextension",
        children: "#"
      }), "开启 disableCssModuleExtension"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下文件会视为 CSS Modules："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["源码目录下的 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.css"
        }), " 和 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.module.css"
        }), " 文件"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["node_modules 下的 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.module.css"
        }), " 文件"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下文件会视为普通 CSS："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["所有 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.global.css"
        }), " 文件"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["node_modules 下的 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.css"
        }), " 文件（不含 ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".module"
        }), "）"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n对于 node_modules 中的 CSS Modules 文件，请始终使用 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*.module.css"
          }), "后缀。"]
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

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/disable-css-module-extension.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const disable_css_module_extension_frontmatter = {
  "sidebar_label": "disableCssModuleExtension"
};

const disable_css_module_extension_toc = [];
const title = `output.disableCssModuleExtension`;
const disable_css_module_extension_content = "\"---\\nsidebar_label: disableCssModuleExtension\\n---\\n\\n# output.disableCssModuleExtension\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.disableCssModuleExtension](https://modernjs.dev/builder/api/config-output.html#outputdisablecssmoduleextension)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/disableCssModuleExtension.md'\\n\\n<Main />\\n\"";
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
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputdisablecssmoduleextension",
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