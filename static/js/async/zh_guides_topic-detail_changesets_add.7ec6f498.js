"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[21693],{

/***/ 22426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "frontmatter": () => (/* binding */ frontmatter),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97458);
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = {
  "sidebar_position": 2
};
const toc = [{
  "id": "信息",
  "text": "信息",
  "depth": 2
}, {
  "id": "步骤",
  "text": "步骤",
  "depth": 2
}, {
  "id": "模块工程方案",
  "text": "模块工程方案",
  "depth": 3
}, {
  "id": "在根目录执行以下命令",
  "text": "在根目录执行以下命令：",
  "depth": 4
}, {
  "id": "选择本次变更需要升级的版本号类型点击回车",
  "text": "选择本次变更需要升级的版本号类型，点击回车：",
  "depth": 4
}, {
  "id": "填入-changelog-信息并点击两次回车",
  "text": "填入 Changelog 信息，并点击两次回车：",
  "depth": 4
}, {
  "id": "monorepo-工程方案",
  "text": "Monorepo 工程方案",
  "depth": 3
}, {
  "id": "在根目录执行以下命令-1",
  "text": "在根目录执行以下命令：",
  "depth": 4
}, {
  "id": "选择本次需要升级的包列表",
  "text": "选择本次需要升级的包列表：",
  "depth": 4
}, {
  "id": "分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型",
  "text": "分别选择不同版本类型对应的包，changeset 会询问 major 和 minor 类型，如果存在包未选择这两种类型，将会默认使用 patch 类型：",
  "depth": 4
}, {
  "id": "填入-changelog-信息并点击两次回车-1",
  "text": "填入 Changelog 信息，并点击两次回车：",
  "depth": 4
}, {
  "id": "参数",
  "text": "参数",
  "depth": 2
}, {
  "id": "注意事项",
  "text": "注意事项",
  "depth": 2
}];
const title = `添加一个 changeset`;
const content = "\"---\\nsidebar_position: 2\\n---\\n\\n# 添加一个 changeset\\n\\n当我们开发完成一个功能时，需要添加一个 changeset 用于声明当前功能，用于后续版本发布。\\n\\n## 信息\\n\\n一个 changeset 包含的内容包括：\\n\\n- 本次变更涉及哪些包的变更。\\n\\n- 本次变更需要升级的版本号类型，类型符合 [semver](https://semver.org/) 规范。\\n\\n- 本次变更的 Changelog 信息。\\n\\n## 步骤\\n\\n:::info\\n以下示例命令都以 pnpm 作为包管理工具进行，如果需要使用其他包管理工具，请按需求进行替换。\\n\\n:::\\n\\n### 模块工程方案\\n\\n#### 在根目录执行以下命令：\\n\\n```bash\\npnpm run change\\n```\\n\\n#### 选择本次变更需要升级的版本号类型，点击回车：\\n\\n![选择版本类型](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-version.png)\\n\\n#### 填入 Changelog 信息，并点击两次回车：\\n\\n![写入变更信息](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog.png)\\n\\n执行完成后，将在项目的 `.changeset` 目录创建对应的 changeset 文件，文件内容如下：\\n\\n```markdown\\n---\\n'module-changeset': patch\\n---\\n\\nfeat: test module solution changeset\\n```\\n\\n该文件中包含了 changeset 的所有信息。\\n\\n### Monorepo 工程方案\\n\\n我们假设 monorepo 中存在三个模块包，分别为 `module-1`，`module-2`，`module-3`。\\n\\n#### 在根目录执行以下命令：\\n\\n```bash\\npnpm run change\\n```\\n\\n#### 选择本次需要升级的包列表：\\n\\nChangesets 会根据当前代码变更(`git diff Head...baseBranch`)，将 Monorepo 中的 package 分为两类，`changed packages` 和 `unchanged packages`，方便用户进行选择。\\n\\n使用空格键选择对应的包或者分类即可，选择完成后点击回车：\\n\\n![选择升级包](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-packages.png)\\n\\n#### 分别选择不同版本类型对应的包，changeset 会询问 `major` 和 `minor` 类型，如果存在包未选择这两种类型，将会默认使用 `patch` 类型：\\n\\n![选择升级包版本类型](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-auto-select-patch.png)\\n\\n#### 填入 Changelog 信息，并点击两次回车：\\n\\n![写入变更信息](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog-monorepo.png)\\n\\n执行完成后，将在项目的 `.changeset` 目录创建对应的 changeset 文件，文件内容如下：\\n\\n```markdown\\n---\\n'module-2': minor\\n'module-3': patch\\n---\\n\\nfeat: test-changeset\\n```\\n\\n该文件中包含了 changeset 的所有信息，不同的包也会根据选择的版本类型进行标记。\\n\\n## 参数\\n\\nchange 命令支持以下参数：\\n\\n- `--empty` 添加一个空的 changeset。\\n\\n```bash\\npnpm run change -- --empty\\n```\\n\\n执行完成后，将在项目的 `.changeset` 目录创建空的 changeset 文件，文件内容如下：\\n\\n```markdown\\n---\\n---\\n```\\n\\n- `--open` 使用该参数时，在填写 Changelog 步骤会打开系统默认编辑器进行填写。\\n\\n## 注意事项\\n\\n- 不是所有的变更都需要 changeset\\n\\n如果当前变更是修改仓库的一些基础设施，比如 CI、测试等，就不需要添加 changeset 或者可以添加一个空的 changeset。\\n\\n- 一个 pull reuqest 可以提交多个 changeset\\n\\n当一个 pull request 存在多个功能开发或者问题修复时，可以多次执行 `pnpm run change` 添加多个 changeset 文件，每个文件选择对应功能的包和添加变更信息即可。\\n\\n- 创建 changeset 时，需要选择该功能相关的所有包\\n\\n在 Monorepo 中创建 changeset 时，需要选中和该功能相关的所有变更包，避免出现发版时部分包未发布的情况。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    div: "div",
    h3: "h3",
    h4: "h4",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span",
    img: "img"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "添加一个-changeset",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#添加一个-changeset",
        children: "#"
      }), "添加一个 changeset"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当我们开发完成一个功能时，需要添加一个 changeset 用于声明当前功能，用于后续版本发布。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "信息",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#信息",
        children: "#"
      }), "信息"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一个 changeset 包含的内容包括："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "本次变更涉及哪些包的变更。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["本次变更需要升级的版本号类型，类型符合 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://semver.org/",
            target: "_blank",
            rel: "nofollow",
            children: "semver"
          }), " 规范。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "本次变更的 Changelog 信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "步骤",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#步骤",
        children: "#"
      }), "步骤"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "\n以下示例命令都以 pnpm 作为包管理工具进行，如果需要使用其他包管理工具，请按需求进行替换。"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "模块工程方案",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#模块工程方案",
        children: "#"
      }), "模块工程方案"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "在根目录执行以下命令",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#在根目录执行以下命令",
        children: "#"
      }), "在根目录执行以下命令："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "pnpm run change"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "选择本次变更需要升级的版本号类型点击回车",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#选择本次变更需要升级的版本号类型点击回车",
        children: "#"
      }), "选择本次变更需要升级的版本号类型，点击回车："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-version.png",
        alt: "选择版本类型"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "填入-changelog-信息并点击两次回车",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#填入-changelog-信息并点击两次回车",
        children: "#"
      }), "填入 Changelog 信息，并点击两次回车："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog.png",
        alt: "写入变更信息"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["执行完成后，将在项目的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".changeset"
      }), " 目录创建对应的 changeset 文件，文件内容如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-markdown",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "---"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'module-changeset'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "patch"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "---"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "feat: test module solution changeset"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "该文件中包含了 changeset 的所有信息。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "monorepo-工程方案",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#monorepo-工程方案",
        children: "#"
      }), "Monorepo 工程方案"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们假设 monorepo 中存在三个模块包，分别为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "module-1"
      }), "，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "module-2"
      }), "，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "module-3"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "在根目录执行以下命令-1",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#在根目录执行以下命令-1",
        children: "#"
      }), "在根目录执行以下命令："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "pnpm run change"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "选择本次需要升级的包列表",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#选择本次需要升级的包列表",
        children: "#"
      }), "选择本次需要升级的包列表："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Changesets 会根据当前代码变更(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "git diff Head...baseBranch"
      }), ")，将 Monorepo 中的 package 分为两类，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "changed packages"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "unchanged packages"
      }), "，方便用户进行选择。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "使用空格键选择对应的包或者分类即可，选择完成后点击回车："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-packages.png",
        alt: "选择升级包"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型",
        children: "#"
      }), "分别选择不同版本类型对应的包，changeset 会询问 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "major"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "minor"
      }), " 类型，如果存在包未选择这两种类型，将会默认使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "patch"
      }), " 类型："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-auto-select-patch.png",
        alt: "选择升级包版本类型"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "填入-changelog-信息并点击两次回车-1",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#填入-changelog-信息并点击两次回车-1",
        children: "#"
      }), "填入 Changelog 信息，并点击两次回车："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog-monorepo.png",
        alt: "写入变更信息"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["执行完成后，将在项目的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".changeset"
      }), " 目录创建对应的 changeset 文件，文件内容如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-markdown",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "---"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'module-2'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "minor"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'module-3'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-keyword)"
                },
                children: ":"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "patch"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "---"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "feat: test-changeset"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "该文件中包含了 changeset 的所有信息，不同的包也会根据选择的版本类型进行标记。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "参数",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#参数",
        children: "#"
      }), "参数"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "change 命令支持以下参数："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "--empty"
        }), " 添加一个空的 changeset。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "pnpm run change -- --empty"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["执行完成后，将在项目的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".changeset"
      }), " 目录创建空的 changeset 文件，文件内容如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-markdown",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "var(--shiki-color-background)"
          },
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "---"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "---"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "--open"
        }), " 使用该参数时，在填写 Changelog 步骤会打开系统默认编辑器进行填写。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "注意事项",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#注意事项",
        children: "#"
      }), "注意事项"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "不是所有的变更都需要 changeset"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "如果当前变更是修改仓库的一些基础设施，比如 CI、测试等，就不需要添加 changeset 或者可以添加一个空的 changeset。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "一个 pull reuqest 可以提交多个 changeset"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当一个 pull request 存在多个功能开发或者问题修复时，可以多次执行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pnpm run change"
      }), " 添加多个 changeset 文件，每个文件选择对应功能的包和添加变更信息即可。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "创建 changeset 时，需要选择该功能相关的所有包"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 Monorepo 中创建 changeset 时，需要选中和该功能相关的所有变更包，避免出现发版时部分包未发布的情况。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

}]);