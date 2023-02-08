"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[56183],{

/***/ 29718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ filename_content),
  "default": () => (/* binding */ output_filename),
  "frontmatter": () => (/* binding */ filename_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ filename_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/filename.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "示例",
  "text": "示例",
  "depth": 3
}];
const content = "\"- **类型**\\n\\n```ts\\ntype FilenameConfig = {\\n  js?: string;\\n  css?: string;\\n  svg?: string;\\n  font?: string;\\n  image?: string;\\n  media?: string;\\n};\\n```\\n\\n- **默认值**\\n\\n```js\\n// 开发环境\\nconst devDefaultFilename = {\\n  js: '[name].js',\\n  css: '[name].css',\\n  svg: '[name].[contenthash:8].svg',\\n  font: '[name].[contenthash:8][ext]',\\n  image: '[name].[contenthash:8][ext]',\\n  media: '[name].[contenthash:8][ext]',\\n};\\n\\n// 生产环境\\nconst prodDefaultFilename = {\\n  js: '[name].[contenthash:8].js',\\n  css: '[name].[contenthash:8].css',\\n  svg: '[name].[contenthash:8].svg',\\n  font: '[name].[contenthash:8][ext]',\\n  image: '[name].[contenthash:8][ext]',\\n  media: '[name].[contenthash:8][ext]',\\n};\\n```\\n\\n设置构建产物的名称。\\n\\n在生产环境构建后，会自动在文件名中间添加 hash 值，如果不需要添加，可以通过 `output.disableFilenameHash` 配置来禁用该行为。\\n\\n其中：\\n\\n- `js`：表示 JavaScript 文件的名称。\\n- `css`：表示 CSS 样式文件的名称。\\n- `svg`：表示 SVG 图片的名称。\\n- `font`：表示字体文件的名称。\\n- `image`：表示非 SVG 图片的名称。\\n- `media`：表示视频等媒体资源的名称。\\n\\n### 示例\\n\\n修改 JavaScript 文件的名称为 `[name]_script.js`：\\n\\n```js\\nexport default {\\n  output: {\\n    filename: {\\n      js:\\n        process.env.NODE_ENV === 'production'\\n          ? '[name]_script.[contenthash:8].js'\\n          : '[name]_script.js',\\n    },\\n  },\\n};\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    strong: "strong",
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span",
    p: "p",
    h3: "h3",
    a: "a"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "类型"
        })
      }), "\n"]
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
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "FilenameConfig"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
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
                children: "  js"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?:"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  css"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?:"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  svg"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?:"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  font"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?:"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  image"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?:"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  media"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?:"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值"
        })
      }), "\n"]
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
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "// 开发环境"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "devDefaultFilename"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
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
                children: "  js"
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
                children: "'[name].js'"
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
                children: "  css"
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
                children: "'[name].css'"
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
                children: "  svg"
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
                children: "'[name].[contenthash:8].svg'"
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
                children: "  font"
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
                children: "'[name].[contenthash:8][ext]'"
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
                children: "  image"
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
                children: "'[name].[contenthash:8][ext]'"
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
                children: "  media"
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
                children: "'[name].[contenthash:8][ext]'"
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
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "// 生产环境"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "const"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "prodDefaultFilename"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "="
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
                children: "  js"
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
                children: "'[name].[contenthash:8].js'"
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
                children: "  css"
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
                children: "'[name].[contenthash:8].css'"
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
                children: "  svg"
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
                children: "'[name].[contenthash:8].svg'"
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
                children: "  font"
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
                children: "'[name].[contenthash:8][ext]'"
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
                children: "  image"
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
                children: "'[name].[contenthash:8][ext]'"
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
                children: "  media"
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
                children: "'[name].[contenthash:8][ext]'"
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
      children: "设置构建产物的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在生产环境构建后，会自动在文件名中间添加 hash 值，如果不需要添加，可以通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.disableFilenameHash"
      }), " 配置来禁用该行为。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "js"
        }), "：表示 JavaScript 文件的名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "css"
        }), "：表示 CSS 样式文件的名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "svg"
        }), "：表示 SVG 图片的名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "font"
        }), "：表示字体文件的名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "image"
        }), "：表示非 SVG 图片的名称。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "media"
        }), "：表示视频等媒体资源的名称。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "示例",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#示例",
        children: "#"
      }), "示例"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["修改 JavaScript 文件的名称为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[name]_script.js"
      }), "："]
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
                children: "    filename"
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
                children: "      js"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "        "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "process"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "."
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "env"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "."
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-constant)"
                },
                children: "NODE_ENV"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "==="
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'production'"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "          "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "?"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'[name]_script.[contenthash:8].js'"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "          "
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
                children: "'[name]_script.js'"
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
/* harmony default export */ const filename = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/filename.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const filename_frontmatter = {
  "sidebar_label": "filename"
};

const filename_toc = [];
const title = `output.filename`;
const filename_content = "\"---\\nsidebar_label: filename\\n---\\n\\n# output.filename\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.filename](https://modernjs.dev/builder/api/config-output.html#outputfilename)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/filename.md'\\n\\n<Main />\\n\"";
function filename_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputfilename",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputfilename",
        children: "#"
      }), "output.filename"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputfilename",
            target: "_blank",
            rel: "nofollow",
            children: "output.filename"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(filename, {})]
  });
}
function filename_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(filename_createMdxContent, props)
  })) : filename_createMdxContent(props);
}
/* harmony default export */ const output_filename = (filename_MDXContent);


/***/ })

}]);