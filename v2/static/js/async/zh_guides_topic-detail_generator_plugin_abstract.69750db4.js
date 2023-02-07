"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[48184],{

/***/ 31238:
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
  "sidebar_position": 1
};
const toc = [];
const title = `为什么需要生成器插件`;
const content = "\"---\\nsidebar_position: 1\\n---\\n\\n# 为什么需要生成器插件\\n\\nModern.js 提供了应用、模块和 Monorepo 三种工程方案，并通过使用 `@modern-js/create` 工具可以创建三种工程方案的初始项目模板，初始项目模板会提供基本的代码开发环境、简单的示例代码及配置等。\\n\\nModern.js 提供的初始化模板具有通用性，能满足一些通用的项目开发需求。\\n\\n当你深度使用 Modern.js 时，必然会发现每次创建的项目都会进行一些针对自身项目的特定的相似改动，比如修改示例代码、增加一些配置、开启某些功能等。\\n\\n生成器插件可以帮你将这些针对个人或团队特定的改动沉淀下来，在执行 `npx @modern-js/create` 只需简单的带上 `--plugin` 参数即可避免每次创建完项目都需重复性修改项目的工作。\\n\\n生成器插件是在 Modern.js 提供的初始化模板项目的基础上，提供对模板进行增加、删除、修改的方法，并通过快捷的方式修改 `package.json`、`modernConfig` 配置和开启功能等操作。\\n\\n生成器插件提供了两种定制化方式：\\n\\n1. 扩展工程方案：直接对默认提供的三大工程方案进行定制化\\n\\n2. 创建工程方案场景：基于默认的三大工程方案创建对应的工程方案场景\\n\\n接下来将会逐步介绍如何使用和开发生成器插件。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    ol: "ol",
    li: "li"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "为什么需要生成器插件",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#为什么需要生成器插件",
        children: "#"
      }), "为什么需要生成器插件"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Modern.js 提供了应用、模块和 Monorepo 三种工程方案，并通过使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 工具可以创建三种工程方案的初始项目模板，初始项目模板会提供基本的代码开发环境、简单的示例代码及配置等。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js 提供的初始化模板具有通用性，能满足一些通用的项目开发需求。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "当你深度使用 Modern.js 时，必然会发现每次创建的项目都会进行一些针对自身项目的特定的相似改动，比如修改示例代码、增加一些配置、开启某些功能等。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["生成器插件可以帮你将这些针对个人或团队特定的改动沉淀下来，在执行 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx @modern-js/create"
      }), " 只需简单的带上 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--plugin"
      }), " 参数即可避免每次创建完项目都需重复性修改项目的工作。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["生成器插件是在 Modern.js 提供的初始化模板项目的基础上，提供对模板进行增加、删除、修改的方法，并通过快捷的方式修改 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "modernConfig"
      }), " 配置和开启功能等操作。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "生成器插件提供了两种定制化方式："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "扩展工程方案：直接对默认提供的三大工程方案进行定制化"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "创建工程方案场景：基于默认的三大工程方案创建对应的工程方案场景"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接下来将会逐步介绍如何使用和开发生成器插件。"
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