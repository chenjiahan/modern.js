"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[49037],{

/***/ 95945:
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
const toc = [];
const title = `创建子项目`;
const content = "\"---\\nsidebar_position: 2\\n---\\n\\n# 创建子项目\\n\\n本章将要介绍如何在 Monorepo 工程下创建子项目。\\n\\n> Modern.js 支持使用 pnpm 和 Yarn 的 Monorepo，这里以使用 pnpm 为例。以下命令可以以同样方式使用 Yarn 来执行。\\n\\nModern.js 针对 Monorepo 工程提供了生成器功能，它用于在 Monorepo 工程下创建不同类型的 Monorepo 子项目。在生成器中提供以下类型子项目的创建：\\n\\n- 「应用」类型\\n- 「模块」类型\\n\\n要启动 Monorepo 的生成器功能，可以在 Monorepo 工程根目录下执行命令：\\n\\n```\\npnpm run new\\n```\\n\\n:::info 补充信息\\n使用 Yarn 的方式：`yarn new`\\n\\n:::\\n\\n执行成功后，可以看到如下内容：\\n\\n```\\n? 请选择你想创建的工程类型 (Use arrow keys)\\n❯ 应用\\n  应用（测试）\\n  模块\\n  模块（内部）\\n```\\n\\n:::info\\n「应用」与「应用（测试）」都是「应用」类型的项目，区别是「应用」类型的子项目会创建在 `./apps` 目录下，而 「应用（测试）」类型的子项目会创建在 `./examples` 目录下。\\n\\n:::\\n\\n:::info\\n「模块」与「模块（内部）」都是「模块」类型的项目，区别之一是「模块」类型的子项目会创建在 `./packages` 目录下，而「模块（内部）」类型的子项目会创建在 `./features` 目录下。\\n\\n对于「模块」类型的子项目允许被发布到外部（例如 npm)，而对于「模块（内部）」的子项目则可以在应用项目中直接使用其源码（该特性是「模块」项目不具备的，应用项目对于「模块（内部）」子项目做了特殊处理），因此这类子项目不需要发布到外部。\\n\\n:::\\n\\n然后根据不同的需求选择对应的类型项目选项，选择之后便开始出现对应子项目类型的问题和选项。例如选择「应用」后会出现：\\n\\n```\\n? 请选择你想创建的工程类型 应用\\n? 请填写子项目名称\\n```\\n\\n当完成所有生成器问题之后，便开始进行项目的创建和项目依赖的下载。当创建成功之后，可以看到类似以下内容：\\n\\n```\\n[INFO] 依赖自动安装成功\\n[INFO] 创建成功！\\n可在新项目的目录下运行以下命令：\\npnpm run dev          # 按开发环境的要求，运行和调试项目\\npnpm run build        # 按生产环境的要求，构建项目\\npnpm run serve        # 按生产环境的要求，运行项目\\npnpm run lint         # 检查和修复所有代码\\npnpm run new          # 继续创建更多项目要素，比如应用入口\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    blockquote: "blockquote",
    ul: "ul",
    li: "li",
    div: "div",
    button: "button",
    pre: "pre",
    code: "code"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "创建子项目",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#创建子项目",
        children: "#"
      }), "创建子项目"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "本章将要介绍如何在 Monorepo 工程下创建子项目。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Modern.js 支持使用 pnpm 和 Yarn 的 Monorepo，这里以使用 pnpm 为例。以下命令可以以同样方式使用 Yarn 来执行。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js 针对 Monorepo 工程提供了生成器功能，它用于在 Monorepo 工程下创建不同类型的 Monorepo 子项目。在生成器中提供以下类型子项目的创建："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "「应用」类型"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "「模块」类型"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "要启动 Monorepo 的生成器功能，可以在 Monorepo 工程根目录下执行命令："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-text",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "pnpm run new\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "补充信息"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n使用 Yarn 的方式：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "yarn new"
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "执行成功后，可以看到如下内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-text",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "? 请选择你想创建的工程类型 (Use arrow keys)\n❯ 应用\n  应用（测试）\n  模块\n  模块（内部）\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n「应用」与「应用（测试）」都是「应用」类型的项目，区别是「应用」类型的子项目会创建在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "./apps"
          }), " 目录下，而 「应用（测试）」类型的子项目会创建在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "./examples"
          }), " 目录下。"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-directive-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n「模块」与「模块（内部）」都是「模块」类型的项目，区别之一是「模块」类型的子项目会创建在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "./packages"
          }), " 目录下，而「模块（内部）」类型的子项目会创建在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "./features"
          }), " 目录下。"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "对于「模块」类型的子项目允许被发布到外部（例如 npm)，而对于「模块（内部）」的子项目则可以在应用项目中直接使用其源码（该特性是「模块」项目不具备的，应用项目对于「模块（内部）」子项目做了特殊处理），因此这类子项目不需要发布到外部。"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后根据不同的需求选择对应的类型项目选项，选择之后便开始出现对应子项目类型的问题和选项。例如选择「应用」后会出现："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-text",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "? 请选择你想创建的工程类型 应用\n? 请填写子项目名称\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当完成所有生成器问题之后，便开始进行项目的创建和项目依赖的下载。当创建成功之后，可以看到类似以下内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-text",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "[INFO] 依赖自动安装成功\n[INFO] 创建成功！\n可在新项目的目录下运行以下命令：\npnpm run dev          # 按开发环境的要求，运行和调试项目\npnpm run build        # 按生产环境的要求，构建项目\npnpm run serve        # 按生产环境的要求，运行项目\npnpm run lint         # 检查和修复所有代码\npnpm run new          # 继续创建更多项目要素，比如应用入口\n"
          })
        })]
      })]
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