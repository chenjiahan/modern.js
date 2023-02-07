"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[38225],{

/***/ 98677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ proxy_content),
  "default": () => (/* binding */ proxy),
  "frontmatter": () => (/* binding */ proxy_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ proxy_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/components/global-proxy.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "设置代理规则",
  "text": "设置代理规则",
  "depth": 3
}, {
  "id": "代理服务器-ui-界面",
  "text": "代理服务器 UI 界面",
  "depth": 3
}];
const content = "\"Modern.js 提供了开箱即用的全局代理插件 `@modern-js/plugin-proxy`，该插件底层基于 [whistle](https://github.com/avwo/whistle)，可用来查看、修改 HTTP/HTTPS 的请求和响应，也可作为 HTTP 代理服务器使用。\\n\\n### 设置代理规则\\n\\n引入代理插件并填写规则后，执行 `pnpm run dev`，Modern.js 会在开发服务器启动之后，自动启用代理服务器。\\n\\n具体代理规则，可通过 [`dev.proxy`](/configure/app/dev/proxy) 选项或 `config/proxy.js` 文件进行设置。\\n\\n### 代理服务器 UI 界面\\n\\n安装代理插件并配置代理规则后， 执行 `pnpm run dev` 命令：\\n\\n```bash\\n  App running at:\\n\\n  Local:    http://localhost:8080/\\n  Network:  http://192.168.0.1:8080/\\n\\nℹ  info      Starting the proxy server.....\\n✔  success   Proxy Server start on localhost:8899\\n```\\n\\n在控制台中可以看到代理服务器成功启动。\\n\\n访问 `http://localhost:8899`，显示下图所示的 UI 界面后，即可通过界面设置规则。\\n\\n![debug-proxy-ui](https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png)\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code",
    a: "a",
    h3: "h3",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span",
    img: "img"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js 提供了开箱即用的全局代理插件 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@modern-js/plugin-proxy"
      }), "，该插件底层基于 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/avwo/whistle",
        target: "_blank",
        rel: "nofollow",
        children: "whistle"
      }), "，可用来查看、修改 HTTP/HTTPS 的请求和响应，也可作为 HTTP 代理服务器使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "设置代理规则",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#设置代理规则",
        children: "#"
      }), "设置代理规则"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["引入代理插件并填写规则后，执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), "，Modern.js 会在开发服务器启动之后，自动启用代理服务器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体代理规则，可通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/v2/configure/app/dev/proxy.html",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "dev.proxy"
        })
      }), " 选项或 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/proxy.js"
      }), " 文件进行设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "代理服务器-ui-界面",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#代理服务器-ui-界面",
        children: "#"
      }), "代理服务器 UI 界面"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安装代理插件并配置代理规则后， 执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run dev"
      }), " 命令："]
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
                children: "  App running at:"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  Local:    http://localhost:8080/"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  Network:  http://192.168.0.1:8080/"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "ℹ  info      Starting the proxy server....."
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "✔  success   Proxy Server start on localhost:8899"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在控制台中可以看到代理服务器成功启动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["访问 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8899"
      }), "，显示下图所示的 UI 界面后，即可通过界面设置规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png",
        alt: "debug-proxy-ui"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const global_proxy = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/guides/basic-features/proxy.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const proxy_frontmatter = {
  "title": "代理",
  "sidebar_position": 5
};

const proxy_toc = [{
  "id": "本地代理",
  "text": "本地代理",
  "depth": 2
}, {
  "id": "全局代理",
  "text": "全局代理",
  "depth": 2
}, {
  "id": "bff-代理",
  "text": "BFF 代理",
  "depth": 2
}];
const title = `代理`;
const proxy_content = "\"---\\ntitle: 代理\\nsidebar_position: 5\\n---\\n# 代理\\n\\n## 本地代理\\n\\nModern.js 在 [`tools.devServer`](/configure/app/tools/dev-server) 中提供了配置开发环境代理的方式。例如，将本地开发接口，代理到线上某个地址：\\n\\n```ts title=\\\"modern.config.ts\\\"\\nimport { defineConfig } from '@modern-js/app-tools';\\n\\nexport default defineConfig({\\n  tools: {\\n    devServer: {\\n      proxy: {\\n        '/go/api': {\\n          target: 'http://www.example.com/',\\n          changeOrigin: true,\\n        },\\n      },\\n    },\\n  },\\n});\\n```\\n\\n请求 `http://localhost:8080/go/api` 时，会从 [http://www.example.com/](http://www.example.com/) 返回响应内容。\\n\\n:::info 补充信息\\n配置格式可参考：[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)。\\n\\n:::\\n\\n## 全局代理\\n\\nimport GlobalProxy from \\\"@site-docs/components/global-proxy\\\"\\n\\n<GlobalProxy />\\n\\n## BFF 代理\\n\\n通过配置 [`bff.proxy`](/configure/app/bff/proxy) 可以代理 BFF API 请求到指定的服务上，上述两种代理不同，它同样可以用在生产环境：\\n\\n```ts title=\\\"modern.config.ts\\\"\\nexport default defineConfig({\\n  bff: {\\n    proxy: {\\n      '/api/v1': 'https://cnodejs.org',\\n    },\\n  },\\n});\\n```\\n\\n例如代码中使用一体化 BFF 调用时，最终请求 `http://localhost:8080/api/v1/topics` 会自动代理到 `https://cnodejs.org/api/v1/topics`：\\n\\n```js\\nimport getTopics from '@api/v1/topics';\\n\\ngetTopics();\\n```\\n\"";
function proxy_createMdxContent(props) {
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
      id: "代理",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#代理",
        children: "#"
      }), "代理"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "本地代理",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#本地代理",
        children: "#"
      }), "本地代理"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js 在 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/v2/configure/app/tools/dev-server.html",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tools.devServer"
        })
      }), " 中提供了配置开发环境代理的方式。例如，将本地开发接口，代理到线上某个地址："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "modern.config.ts"
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
                children: "  tools"
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
                children: "    devServer"
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
                children: "      proxy"
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
                children: "        "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'/go/api'"
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
                children: "          target"
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
                children: "'http://www.example.com/'"
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
                children: "          changeOrigin"
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
                children: "        }"
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
                children: "      }"
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
                children: "});"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请求 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080/go/api"
      }), " 时，会从 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.example.com/",
        target: "_blank",
        rel: "nofollow",
        children: "http://www.example.com/"
      }), " 返回响应内容。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "补充信息"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n配置格式可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/chimurai/http-proxy-middleware",
            target: "_blank",
            rel: "nofollow",
            children: "http-proxy-middleware"
          }), "。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "全局代理",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#全局代理",
        children: "#"
      }), "全局代理"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(global_proxy, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "bff-代理",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#bff-代理",
        children: "#"
      }), "BFF 代理"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过配置 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/v2/configure/app/bff/proxy.html",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "bff.proxy"
        })
      }), " 可以代理 BFF API 请求到指定的服务上，上述两种代理不同，它同样可以用在生产环境："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-ts",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: "modern-code-title",
        children: "modern.config.ts"
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
                children: "  bff"
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
                children: "    proxy"
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
                children: "      "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'/api/v1'"
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
                children: "'https://cnodejs.org'"
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
                children: "});"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如代码中使用一体化 BFF 调用时，最终请求 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://localhost:8080/api/v1/topics"
      }), " 会自动代理到 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://cnodejs.org/api/v1/topics"
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
                children: "import"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " getTopics "
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
                children: "'@api/v1/topics'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "getTopics"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "();"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    })]
  });
}
function proxy_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(proxy_createMdxContent, props)
  })) : proxy_createMdxContent(props);
}
/* harmony default export */ const proxy = (proxy_MDXContent);


/***/ })

}]);