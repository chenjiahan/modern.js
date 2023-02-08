"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[17356],{

/***/ 16386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ enable_asset_fallback_content),
  "default": () => (/* binding */ enable_asset_fallback),
  "frontmatter": () => (/* binding */ enable_asset_fallback_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ enable_asset_fallback_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/enableAssetFallback.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "示例",
  "text": "示例",
  "depth": 3
}];
const content = "\"- **类型：** `boolean`\\n- **默认值：** `false`\\n\\n开启该选项后，当编译过程中遇到无法识别的文件类型时，会直接将该文件直接输出到产物目录；否则会抛出一个异常。\\n\\n### 示例\\n\\n开启配置项：\\n\\n```js\\nexport default {\\n  output: {\\n    enableAssetFallback: true,\\n  },\\n};\\n```\\n\\n在代码中引用一个未知类型的模块：\\n\\n```js\\nimport './foo.xxx';\\n```\\n\\n编译后，`foo.xxx` 会被自动输出到 `dist/static/media` 目录下。\\n\\n你可以通过 `output.distPath.media` 和 `output.filename.media` 配置项来控制 fallback 后的输出路径和文件名称。\\n\\n:::tip\\n开启该配置会导致 webpack 配置中的 rules 结构变化，增加一层额外的 `oneOf` 嵌套结构。大多数情况下，我们不推荐你使用此配置。\\n:::\\n\"";
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
      children: "开启该选项后，当编译过程中遇到无法识别的文件类型时，会直接将该文件直接输出到产物目录；否则会抛出一个异常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "示例",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#示例",
        children: "#"
      }), "示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启配置项："
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
                children: "    enableAssetFallback"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在代码中引用一个未知类型的模块："
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
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'./foo.xxx'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编译后，", (0,jsx_runtime.jsx)(_components.code, {
        children: "foo.xxx"
      }), " 会被自动输出到 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist/static/media"
      }), " 目录下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["你可以通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.distPath.media"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.filename.media"
      }), " 配置项来控制 fallback 后的输出路径和文件名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n开启该配置会导致 webpack 配置中的 rules 结构变化，增加一层额外的 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "oneOf"
          }), "嵌套结构。大多数情况下，我们不推荐你使用此配置。"]
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
/* harmony default export */ const enableAssetFallback = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/enable-asset-fallback.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const enable_asset_fallback_frontmatter = {
  "sidebar_label": "enableAssetFallback"
};

const enable_asset_fallback_toc = [];
const title = `output.enableAssetFallback`;
const enable_asset_fallback_content = "\"---\\nsidebar_label: enableAssetFallback\\n---\\n\\n# output.enableAssetFallback\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.enableAssetFallback](https://modernjs.dev/builder/api/config-output.html#outputenableassetfallback)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/enableAssetFallback.md'\\n\\n<Main />\\n\"";
function enable_asset_fallback_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputenableassetfallback",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputenableassetfallback",
        children: "#"
      }), "output.enableAssetFallback"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputenableassetfallback",
            target: "_blank",
            rel: "nofollow",
            children: "output.enableAssetFallback"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(enableAssetFallback, {})]
  });
}
function enable_asset_fallback_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(enable_asset_fallback_createMdxContent, props)
  })) : enable_asset_fallback_createMdxContent(props);
}
/* harmony default export */ const enable_asset_fallback = (enable_asset_fallback_MDXContent);


/***/ })

}]);