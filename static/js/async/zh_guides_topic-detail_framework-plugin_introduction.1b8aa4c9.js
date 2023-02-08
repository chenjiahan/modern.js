"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[51952],{

/***/ 39924:
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
  "title": "介绍",
  "sidebar_position": 1
};
const toc = [{
  "id": "modernjs-插件系统",
  "text": "Modern.js 插件系统",
  "depth": 2
}, {
  "id": "插件可以做什么",
  "text": "插件可以做什么",
  "depth": 2
}];
const title = `介绍`;
const content = "\"---\\ntitle: 介绍\\nsidebar_position: 1\\n---\\n# 介绍\\n\\n## Modern.js 插件系统\\n\\nModern.js 用于扩展项目运行、请求、渲染等不同阶段功能的系统，主要分为三个部分：Hook 模型、管理器，上下文共享机制。\\n\\nHook 模型用于确定当前 Hook 的执行方式，不同 Hook 模型的函数拥有不同的执行逻辑。管理器用于控制 Hook 的执行与调度。上下文共享机制用于在不同 Hook 间传递信息。\\n\\n目前 Modern.js 提供几种不同的 Hook 模型：\\n\\n- Pipeline\\n  - Sync\\n  - Async\\n- Waterfall\\n  - Sync\\n  - Async\\n- Workflow\\n  - Sync\\n  - Async\\n  - Parallel(Async)\\n\\n:::note\\n后续章节详细介绍各个模型的执行方式。\\n\\n:::\\n\\n基于 Hook 模型和管理器，Modern.js 暴露了三套插件：CLI、Runtime、Server。\\n\\n其中 CLI 插件是 Modern.js 中主要的运行流程控制模型，Modern.js 中绝大部分功能都是主要通过这一套模型运行的。Runtime 插件主要负责处理 React 组件渲染逻辑。Server 插件主要用于对服务端的生命周期以及用户请求的控制。\\n\\n## 插件可以做什么\\n\\nModern.js 的所有功能都是通过这套插件实现的，这意味着 Modern.js 中的所有能力是都对开发者开放的。开发者可以通过编写插件来扩展更多功能，适配复杂场景，包括但不限于：\\n\\n- 注册命令\\n- 修改 Modern.js 配置、配置校验 Schema\\n- 修改编译时的 Webpack/Babel/Less/Sass/Tailwind CSS/... 配置\\n- 修改运行时需要渲染的 React 组件、Element\\n- 修改页面路由\\n- 修改服务器路由\\n- 自定义控制台输出\\n- 自定义动态 HTML 模版\\n- 自定义 Node.js 服务器框架\\n- 自定义 React 组件客户端/服务器端渲染\\n- ...\\n\\n当 Modern.js 暂时没有覆盖到你所需要的功能或场景时，可以开发一个自定义插件，来实现适配特殊场景的相关功能。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    div: "div"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "介绍",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#介绍",
        children: "#"
      }), "介绍"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "modernjs-插件系统",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#modernjs-插件系统",
        children: "#"
      }), "Modern.js 插件系统"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js 用于扩展项目运行、请求、渲染等不同阶段功能的系统，主要分为三个部分：Hook 模型、管理器，上下文共享机制。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hook 模型用于确定当前 Hook 的执行方式，不同 Hook 模型的函数拥有不同的执行逻辑。管理器用于控制 Hook 的执行与调度。上下文共享机制用于在不同 Hook 间传递信息。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "目前 Modern.js 提供几种不同的 Hook 模型："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Pipeline", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Sync"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Async"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Waterfall", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Sync"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Async"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Workflow", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Sync"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Async"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Parallel(Async)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "NOTE"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "\n后续章节详细介绍各个模型的执行方式。"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "基于 Hook 模型和管理器，Modern.js 暴露了三套插件：CLI、Runtime、Server。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "其中 CLI 插件是 Modern.js 中主要的运行流程控制模型，Modern.js 中绝大部分功能都是主要通过这一套模型运行的。Runtime 插件主要负责处理 React 组件渲染逻辑。Server 插件主要用于对服务端的生命周期以及用户请求的控制。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "插件可以做什么",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#插件可以做什么",
        children: "#"
      }), "插件可以做什么"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js 的所有功能都是通过这套插件实现的，这意味着 Modern.js 中的所有能力是都对开发者开放的。开发者可以通过编写插件来扩展更多功能，适配复杂场景，包括但不限于："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "注册命令"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "修改 Modern.js 配置、配置校验 Schema"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "修改编译时的 Webpack/Babel/Less/Sass/Tailwind CSS/... 配置"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "修改运行时需要渲染的 React 组件、Element"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "修改页面路由"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "修改服务器路由"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "自定义控制台输出"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "自定义动态 HTML 模版"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "自定义 Node.js 服务器框架"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "自定义 React 组件客户端/服务器端渲染"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "..."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当 Modern.js 暂时没有覆盖到你所需要的功能或场景时，可以开发一个自定义插件，来实现适配特殊场景的相关功能。"
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