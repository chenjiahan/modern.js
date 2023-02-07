"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[50432],{

/***/ 14223:
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
  "sidebar_position": 4
};
const toc = [{
  "id": "准备工作",
  "text": "准备工作",
  "depth": 2
}, {
  "id": "生成变更记录",
  "text": "生成变更记录",
  "depth": 2
}, {
  "id": "版本更新",
  "text": "版本更新",
  "depth": 2
}, {
  "id": "发布",
  "text": "发布",
  "depth": 2
}];
const title = `可复用模块的发布`;
const content = "\"---\\nsidebar_position: 4\\n---\\n\\n# 可复用模块的发布\\n\\n在 Monorepo 中有时会需要把多个模块项目发布到 [NPM](https://www.npmjs.com/) 上，本章将要介绍如果在 Monorepo 中对子项目进行版本更新以及发布。\\n\\n## 准备工作\\n\\n接着 [子项目联调](/guides/topic-detail/monorepo/sub-project-interface) 章节的例子，我们对 `components` 模块进行发布。\\n\\n## 生成变更记录\\n\\n在开发阶段，当某个模块的功能开完完成之后，一般需要提交代码（例如提交到 [GitHub](https://github.com/) 上）并需要记录本次修改的内容。在 Modern.js 的 Monorepo 工程中，我们可以在 monorepo 根目录执行命令：\\n\\n```\\npnpm run change\\n```\\n\\n然后根据提示选择变更或者将要发布的包以及选择包升级的版本，并填写变更信息。变更信息的内容可以包含此次开发的功能、修复的问题等。\\n\\n那么对于上面的例子，我们选择变更的项目为 `components`，并填写此次变更的内容：\\n\\n```\\n$ modern change\\n🦋  Which packages would you like to include? · components\\n🦋  Which packages should have a major bump? · No items were selected\\n🦋  Which packages should have a minor bump? · components\\n🦋  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\\n🦋  Summary · add features\\n🦋  === Releasing the following packages ===\\n🦋  [Minor]\\n🦋    components\\n🦋  ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗\\n🦋  ║                                                      ========= NOTE ========                                                       ║\\n🦋  ║All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.║\\n🦋  ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝\\n🦋  Is this your desired changeset? (Y/n) · true\\n🦋  Changeset added! - you can now commit it\\n🦋\\n🦋  If you want to modify or expand on the changeset summary, you can find it here\\n🦋  info /Users/demo/modern-js/official/monorepo-pnpm/.changeset/silent-tigers-run.md\\n```\\n\\n该命令完成后，在 `.changeset` 中会有新的 `silent-tigers-run.md` 文件生成，其中包含了刚刚填写的信息，这些新生成的文件将用于后面发布流程中使用。**因此在提交代码的时候，需要将`.changeset` 目录下的文件一并提交**。\\n\\n## 版本更新\\n\\n在模块发布之前，还需要将模块的版本进行更新。。在 Modern.js 的 Monorepo 工程中，可以在 Monorepo 项目根目录下执行：\\n\\n```\\npnpm run bump\\n```\\n\\n该命令会根据之前生成在 `.changeset` 目录下的文件自动更新对应模块的版本号和 CHANGELOG 信息，执行成功后会看到：\\n\\n```\\n🦋  All files have been updated. Review them and commit at your leisure\\n```\\n\\n## 发布\\n\\n最后执行 `pnpm run prepare --filter {./packages} && pnpm run release`，便可以发布对应的模块了。\\n\\n:::info 补充信息\\n在上面的命令中 --filter \\\\{./packages\\\\} 用于筛选位于 `./packages` 目录下的子项目，可以通过 [PNPM Filtering](https://pnpm.io/filtering) 来了解更多它的使用。\\n\\n:::\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    code: "code",
    div: "div",
    button: "button",
    pre: "pre",
    strong: "strong"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "可复用模块的发布",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#可复用模块的发布",
        children: "#"
      }), "可复用模块的发布"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在 Monorepo 中有时会需要把多个模块项目发布到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.npmjs.com/",
        target: "_blank",
        rel: "nofollow",
        children: "NPM"
      }), " 上，本章将要介绍如果在 Monorepo 中对子项目进行版本更新以及发布。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "准备工作",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#准备工作",
        children: "#"
      }), "准备工作"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["接着 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/v2/guides/topic-detail/monorepo/sub-project-interface.html",
        children: "子项目联调"
      }), " 章节的例子，我们对 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "components"
      }), " 模块进行发布。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "生成变更记录",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#生成变更记录",
        children: "#"
      }), "生成变更记录"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在开发阶段，当某个模块的功能开完完成之后，一般需要提交代码（例如提交到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/",
        target: "_blank",
        rel: "nofollow",
        children: "GitHub"
      }), " 上）并需要记录本次修改的内容。在 Modern.js 的 Monorepo 工程中，我们可以在 monorepo 根目录执行命令："]
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
            children: "pnpm run change\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "然后根据提示选择变更或者将要发布的包以及选择包升级的版本，并填写变更信息。变更信息的内容可以包含此次开发的功能、修复的问题等。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["那么对于上面的例子，我们选择变更的项目为 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "components"
      }), "，并填写此次变更的内容："]
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
            children: "$ modern change\n🦋  Which packages would you like to include? · components\n🦋  Which packages should have a major bump? · No items were selected\n🦋  Which packages should have a minor bump? · components\n🦋  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n🦋  Summary · add features\n🦋  === Releasing the following packages ===\n🦋  [Minor]\n🦋    components\n🦋  ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗\n🦋  ║                                                      ========= NOTE ========                                                       ║\n🦋  ║All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.║\n🦋  ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝\n🦋  Is this your desired changeset? (Y/n) · true\n🦋  Changeset added! - you can now commit it\n🦋\n🦋  If you want to modify or expand on the changeset summary, you can find it here\n🦋  info /Users/demo/modern-js/official/monorepo-pnpm/.changeset/silent-tigers-run.md\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["该命令完成后，在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".changeset"
      }), " 中会有新的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "silent-tigers-run.md"
      }), " 文件生成，其中包含了刚刚填写的信息，这些新生成的文件将用于后面发布流程中使用。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
        children: ["因此在提交代码的时候，需要将", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: ".changeset"
        }), " 目录下的文件一并提交"]
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "版本更新",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#版本更新",
        children: "#"
      }), "版本更新"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在模块发布之前，还需要将模块的版本进行更新。。在 Modern.js 的 Monorepo 工程中，可以在 Monorepo 项目根目录下执行："
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
            children: "pnpm run bump\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["该命令会根据之前生成在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".changeset"
      }), " 目录下的文件自动更新对应模块的版本号和 CHANGELOG 信息，执行成功后会看到："]
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
            children: "🦋  All files have been updated. Review them and commit at your leisure\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "发布",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#发布",
        children: "#"
      }), "发布"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["最后执行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pnpm run prepare --filter {./packages} && pnpm run release"
      }), "，便可以发布对应的模块了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "补充信息"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n在上面的命令中 --filter {./packages} 用于筛选位于 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "./packages"
          }), " 目录下的子项目，可以通过 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://pnpm.io/filtering",
            target: "_blank",
            rel: "nofollow",
            children: "PNPM Filtering"
          }), " 来了解更多它的使用。"]
        })
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