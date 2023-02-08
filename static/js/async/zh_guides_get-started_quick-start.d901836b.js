"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[2742],{

/***/ 9760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ quick_start_content),
  "default": () => (/* binding */ quick_start),
  "frontmatter": () => (/* binding */ quick_start_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ quick_start_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
// EXTERNAL MODULE: ../../packages/toolkit/main-doc/zh/components/prerequisites.mdx
var prerequisites = __webpack_require__(79279);
// EXTERNAL MODULE: ../../packages/toolkit/main-doc/zh/components/init-app.mdx
var init_app = __webpack_require__(10755);
// EXTERNAL MODULE: ../../packages/toolkit/main-doc/zh/components/debug-app.mdx
var debug_app = __webpack_require__(23298);
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/components/deploy.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"本地验证完成后，可以将 `dist/` 下的产物整理成服务器需要的结构，进行部署。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code"
  }, props.components);
  return (0,jsx_runtime.jsxs)(_components.p, {
    children: ["本地验证完成后，可以将 ", (0,jsx_runtime.jsx)(_components.code, {
      children: "dist/"
    }), " 下的产物整理成服务器需要的结构，进行部署。"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const deploy = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/guides/get-started/quick-start.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const quick_start_frontmatter = {
  "title": "快速上手",
  "sidebar_position": 1
};




const quick_start_toc = [{
  "id": "环境准备",
  "text": "环境准备",
  "depth": 2
}, {
  "id": "安装",
  "text": "安装",
  "depth": 2
}, {
  "id": "初始化项目",
  "text": "初始化项目",
  "depth": 2
}, {
  "id": "启动项目",
  "text": "启动项目",
  "depth": 2
}, {
  "id": "使用配置",
  "text": "使用配置",
  "depth": 2
}, {
  "id": "构建项目",
  "text": "构建项目",
  "depth": 2
}, {
  "id": "本地验证",
  "text": "本地验证",
  "depth": 2
}, {
  "id": "部署",
  "text": "部署",
  "depth": 2
}];
const title = `快速上手`;
const quick_start_content = "\"---\\ntitle: 快速上手\\nsidebar_position: 1\\n---\\n# 快速上手\\n\\n## 环境准备\\n\\nimport Prerequisites from \\\"@site-docs/components/prerequisites\\\"\\n\\n<Prerequisites />\\n\\n## 安装\\n\\nModern.js 提供了 `@modern-js/create` 生成器来创建项目，不要全局安装，使用 `npx` 按需运行。\\n\\n可以使用已有的空目录来创建项目：\\n\\n```bash\\nmkdir myapp && cd myapp\\nnpx @modern-js/create\\n```\\n\\n也可以直接用新目录创建项目：\\n\\n```bash\\nnpx @modern-js/create myapp\\n```\\n\\n## 初始化项目\\n\\nimport InitApp from \\\"@site-docs/components/init-app\\\"\\n\\n<InitApp />\\n\\n## 启动项目\\n\\nimport DebugApp from \\\"@site-docs/components/debug-app\\\"\\n\\n<DebugApp />\\n\\n## 使用配置\\n\\n通过生成器创建的 Modern.js 项目中，存在 `modern.config.ts` 文件。\\n\\n可以通过配置文件来开启功能，或覆盖 Modern.js 的默认行为。例如添加如下配置，开启 SSR：\\n\\n```ts\\nimport appTools, { defineConfig } from '@modern-js/app-tools';\\n\\n// https://modernjs.dev/docs/apis/app/config\\nexport default defineConfig({\\n  runtime: {\\n    router: true,\\n    state: true,\\n  },\\n  server: {\\n    ssr: true,\\n  },\\n  plugins: [appTools()],\\n});\\n```\\n\\n重新执行 `pnpm run dev`，在浏览器 Network 菜单中，可以发现项目已经在服务端完成了页面渲染。\\n\\n## 构建项目\\n\\n在项目中执行 `pnpm run build` 即可构建项目生产环境产物：\\n\\n```bash\\n$ pnpm run build\\n\\n> modern build\\n\\ninfo    Create a production build...\\n\\ninfo    File sizes after production build:\\n\\n  File                                      Size         Gzipped\\n  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB\\n  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB\\n  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB\\n  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB\\n  dist/html/main/index.html                 5.84 kB      2.57 kB\\n  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB\\n  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B\\n  dist/asset-manifest.json                  1.48 kB      349 B\\n  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B\\n  dist/static/js/async/509.fcb06e14.js      283 B        230 B\\n\\n Client ✔ done in 3.57s\\n```\\n\\n构建产物默认生成到 `dist/`，目录结构如下：\\n\\n```\\n.\\n├── asset-manifest.json\\n├── html\\n│   └── main\\n├── loader-routes\\n│   └── main\\n├── modern.config.json\\n├── route.json\\n└── static\\n    ├── css\\n    └── js\\n```\\n\\n## 本地验证\\n\\n在项目中执行 `pnpm run serve` 即可在本地验证构建产物是否正常运行：\\n\\n```bash\\n$ pnpm run serve\\n\\n> modern serve\\n\\nStarting the modern server...\\ninfo    App running at:\\n\\n  > Local:    http://localhost:8080/\\n  > Network:  http://192.168.0.1:8080/\\n```\\n\\n在浏览器中打开 `http://localhost:8000/`，内容应该和 `pnpm run dev` 时一致。\\n\\n## 部署\\n\\nimport Deploy from \\\"@site-docs/components/deploy\\\"\\n\\n<Deploy />\\n\"";
function quick_start_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "快速上手",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#快速上手",
        children: "#"
      }), "快速上手"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "环境准备",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#环境准备",
        children: "#"
      }), "环境准备"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(prerequisites/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "安装",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#安装",
        children: "#"
      }), "安装"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js 提供了 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 生成器来创建项目，不要全局安装，使用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npx"
      }), " 按需运行。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用已有的空目录来创建项目："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
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
                  color: "var(--shiki-color-text)"
                },
                children: "mkdir myapp "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "&&"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "cd"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " myapp"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以直接用新目录创建项目："
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
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
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create myapp"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "初始化项目",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#初始化项目",
        children: "#"
      }), "初始化项目"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(init_app/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "启动项目",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#启动项目",
        children: "#"
      }), "启动项目"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(debug_app/* default */.ZP, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "使用配置",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#使用配置",
        children: "#"
      }), "使用配置"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过生成器创建的 Modern.js 项目中，存在 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "modern.config.ts"
      }), " 文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过配置文件来开启功能，或覆盖 Modern.js 的默认行为。例如添加如下配置，开启 SSR："
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
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " appTools"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " { defineConfig } "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "from"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'@modern-js/app-tools'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-comment)"
                },
                children: "// https://modernjs.dev/docs/apis/app/config"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
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
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "defineConfig"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "({"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  runtime"
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
                children: "    router"
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
                children: "    state"
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
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  server"
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
                children: "    ssr"
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
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  plugins"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " ["
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "appTools"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "()]"
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
                children: "});"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), "，在浏览器 Network 菜单中，可以发现项目已经在服务端完成了页面渲染。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "构建项目",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#构建项目",
        children: "#"
      }), "构建项目"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目中执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run build"
      }), " 即可构建项目生产环境产物："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
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
                  color: "var(--shiki-color-text)"
                },
                children: "$ pnpm run build"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " modern build"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "info    Create a production build..."
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "info    File sizes after production build:"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  File                                      Size         Gzipped"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/html/main/index.html                 5.84 kB      2.57 kB"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/asset-manifest.json                  1.48 kB      349 B"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  dist/static/js/async/509.fcb06e14.js      283 B        230 B"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Client ✔ "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "done"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "in"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " 3.57s"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建产物默认生成到 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist/"
      }), "，目录结构如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-text",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".\n├── asset-manifest.json\n├── html\n│   └── main\n├── loader-routes\n│   └── main\n├── modern.config.json\n├── route.json\n└── static\n    ├── css\n    └── js\n"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "本地验证",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#本地验证",
        children: "#"
      }), "本地验证"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目中执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run serve"
      }), " 即可在本地验证构建产物是否正常运行："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-bash",
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
                  color: "var(--shiki-color-text)"
                },
                children: "$ pnpm run serve"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " modern serve"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "Starting the modern server..."
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "info    App running at:"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Local:    http://localhost:8080/"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ">"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " Network:  http://192.168.0.1:8080/"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在浏览器中打开 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8000/"
      }), "，内容应该和 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), " 时一致。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "部署",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#部署",
        children: "#"
      }), "部署"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(deploy, {})]
  });
}
function quick_start_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(quick_start_createMdxContent, props)
  })) : quick_start_createMdxContent(props);
}
/* harmony default export */ const quick_start = (quick_start_MDXContent);


/***/ })

}]);