"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[7344],{

/***/ 81302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ upgrade_content),
  "default": () => (/* binding */ upgrade),
  "frontmatter": () => (/* binding */ upgrade_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ upgrade_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/components/release-note.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"根据官网 [Release Note](https://github.com/modern-js-dev/modern.js/releases/tag/v1.22.1)，开发者也可以手动将项目升级到想要的版本。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components);
  return (0,jsx_runtime.jsxs)(_components.p, {
    children: ["根据官网 ", (0,jsx_runtime.jsx)(_components.a, {
      href: "https://github.com/modern-js-dev/modern.js/releases/tag/v1.22.1",
      target: "_blank",
      rel: "nofollow",
      children: "Release Note"
    }), "，开发者也可以手动将项目升级到想要的版本。"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const release_note = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/guides/get-started/upgrade.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const upgrade_frontmatter = {
  "title": "升级",
  "sidebar_position": 2
};

const upgrade_toc = [{
  "id": "通过命令行升级",
  "text": "通过命令行升级",
  "depth": 2
}, {
  "id": "指定版本升级",
  "text": "指定版本升级",
  "depth": 2
}, {
  "id": "锁定子依赖",
  "text": "锁定子依赖",
  "depth": 2
}, {
  "id": "pnpm",
  "text": "pnpm",
  "depth": 3
}, {
  "id": "yarn",
  "text": "Yarn",
  "depth": 3
}, {
  "id": "npm",
  "text": "Npm",
  "depth": 3
}];
const title = `升级`;
const upgrade_content = "\"---\\ntitle: 升级\\nsidebar_position: 2\\n---\\n# 升级\\n\\n## 通过命令行升级\\n\\nModern.js 提供了 `upgrade` 命令支持项目升级到最新的 Modern.js 版本。\\n\\n在项目中执行 `pnpm run upgrade`：\\n\\n```bash\\n$ pnpm run upgrade\\n\\n> modern upgrade\\n\\n[INFO] [项目类型]: 应用\\n[INFO] [Modern.js 最新版本]: 2.0.0\\n[INFO] 已更新 Modern.js 依赖至最新版本!\\n```\\n\\n可以看到项目 `package.json` 中的依赖已经更改到最新。\\n\\n## 指定版本升级\\n\\nModern.js 所有的官方包目前都使用**统一版本号**进行发布。\\n\\nimport ReleaseNote from \\\"@site-docs/components/release-note\\\"\\n\\n<ReleaseNote />\\n\\n:::tip\\n当升级时，需要对 Modern.js 官方提供的所有包做统一升级，而不是升级单个依赖。\\n\\n:::\\n\\n## 锁定子依赖\\n\\n当项目某个子依赖出现问题，而 Modern.js 无法立即更新时，可以使用包管理器锁定子依赖版本。\\n\\n### pnpm\\n\\n对于使用 pnpm 的项目，请在**项目根目录**的 `package.json` 中添加以下配置，然后重新执行 `pnpm install`：\\n\\n```json\\n{\\n  \\\"pnpm\\\": {\\n    \\\"overrides\\\": {\\n      \\\"package-name\\\": \\\"^1.0.0\\\"\\n    }\\n  }\\n}\\n```\\n\\n### Yarn\\n\\n对于使用 Yarn 的项目，请在**项目根目录**的 `package.json` 中添加以下配置，然后重新执行 `yarn install`：\\n\\n```json\\n{\\n  \\\"resolutions\\\": {\\n    \\\"package-name\\\": \\\"^1.0.0\\\"\\n  }\\n}\\n```\\n\\n### Npm\\n\\n对于使用 Npm 的项目，请在**项目根目录**的 `package.json` 中添加以下配置，然后重新执行 `npm install`：\\n\\n```json\\n{\\n  \\\"overrides\\\": {\\n    \\\"package-name\\\": \\\"^1.0.0\\\"\\n  }\\n}\\n```\\n\\n:::info\\n对于 Monorepo 仓库，只能在项目根目录的 `package.json` 中锁定依赖版本，并且会影响 Monorepo 中的所有 package。\\n\\n:::\\n\"";
function upgrade_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span",
    strong: "strong",
    h3: "h3"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "升级",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#升级",
        children: "#"
      }), "升级"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "通过命令行升级",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#通过命令行升级",
        children: "#"
      }), "通过命令行升级"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js 提供了 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "upgrade"
      }), " 命令支持项目升级到最新的 Modern.js 版本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在项目中执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm run upgrade"
      }), "："]
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
                children: "$ pnpm run upgrade"
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
                children: " modern upgrade"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "[INFO] [项目类型]: 应用"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "[INFO] [Modern.js 最新版本]: 2.0.0"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "[INFO] 已更新 Modern.js 依赖至最新版本"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "!"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以看到项目 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), " 中的依赖已经更改到最新。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "指定版本升级",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#指定版本升级",
        children: "#"
      }), "指定版本升级"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern.js 所有的官方包目前都使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "统一版本号"
      }), "进行发布。"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(release_note, {}), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "\n当升级时，需要对 Modern.js 官方提供的所有包做统一升级，而不是升级单个依赖。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "锁定子依赖",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#锁定子依赖",
        children: "#"
      }), "锁定子依赖"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当项目某个子依赖出现问题，而 Modern.js 无法立即更新时，可以使用包管理器锁定子依赖版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "pnpm",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#pnpm",
        children: "#"
      }), "pnpm"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于使用 pnpm 的项目，请在", (0,jsx_runtime.jsx)(_components.strong, {
        children: "项目根目录"
      }), "的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), " 中添加以下配置，然后重新执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm install"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-json",
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
                children: "{"
              })
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
                children: "\"pnpm\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "\"overrides\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                  color: "var(--shiki-token-keyword)"
                },
                children: "\"package-name\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                children: "\"^1.0.0\""
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "    }"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "yarn",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#yarn",
        children: "#"
      }), "Yarn"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于使用 Yarn 的项目，请在", (0,jsx_runtime.jsx)(_components.strong, {
        children: "项目根目录"
      }), "的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), " 中添加以下配置，然后重新执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn install"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-json",
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
                children: "{"
              })
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
                children: "\"resolutions\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "\"package-name\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                children: "\"^1.0.0\""
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "npm",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#npm",
        children: "#"
      }), "Npm"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于使用 Npm 的项目，请在", (0,jsx_runtime.jsx)(_components.strong, {
        children: "项目根目录"
      }), "的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), " 中添加以下配置，然后重新执行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-json",
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
                children: "{"
              })
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
                children: "\"overrides\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: "\"package-name\""
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
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
                children: "\"^1.0.0\""
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  }"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line",
              children: (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n对于 Monorepo 仓库，只能在项目根目录的 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "package.json"
          }), " 中锁定依赖版本，并且会影响 Monorepo 中的所有 package。"]
        })
      })]
    })]
  });
}
function upgrade_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(upgrade_createMdxContent, props)
  })) : upgrade_createMdxContent(props);
}
/* harmony default export */ const upgrade = (upgrade_MDXContent);


/***/ })

}]);