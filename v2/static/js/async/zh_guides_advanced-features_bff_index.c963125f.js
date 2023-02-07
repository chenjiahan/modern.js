"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[74391],{

/***/ 85062:
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
  "title": "BFF"
};
const toc = [];
const title = `BFF`;
const content = "\"---\\ntitle: BFF\\n---\\n# BFF\\n\\n在**前后端分离**概念出现后一段时间发展中，前端部分能够做的事越来越多，前端需要一些面向 UI 的数据接口，因此业界引入了 BFF（Backends for Frontends）这一概念。\\n\\n它主要为了解决的问题包括：\\n\\n- 根据自身业务需求，对更底层 API 的聚合、映射、裁剪、代理。\\n- 对一些特定场景的数据进行缓存，提高性能，进而提升用户体验。\\n- 根据已有接口快速开发新产品。\\n- 与第三方系统对接，例如登陆鉴权。\\n\\nModern.js 官方支持了 BFF，并提供了**一体化 BFF 方案**来进一步强化 BFF 能力，主要包括以下能力：\\n\\n- 快速开发调试上线，在同一项目中运行、构建、部署 BFF 代码。\\n- 极简的纯函数调用，在前端直接 import BFF 函数，调用时能自动转换成 HTTP 请求。\\n- 无私有协议，遵循 RESTful API 规范，所有 BFF 接口都是标准化的。\\n- 完善的 TypeScript 支持。\\n- 满足用户使用偏好，支持多框架扩展写法。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    strong: "strong",
    ul: "ul",
    li: "li"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "bff",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#bff",
        children: "#"
      }), "BFF"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "前后端分离"
      }), "概念出现后一段时间发展中，前端部分能够做的事越来越多，前端需要一些面向 UI 的数据接口，因此业界引入了 BFF（Backends for Frontends）这一概念。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "它主要为了解决的问题包括："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "根据自身业务需求，对更底层 API 的聚合、映射、裁剪、代理。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "对一些特定场景的数据进行缓存，提高性能，进而提升用户体验。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "根据已有接口快速开发新产品。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "与第三方系统对接，例如登陆鉴权。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Modern.js 官方支持了 BFF，并提供了", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "一体化 BFF 方案"
      }), "来进一步强化 BFF 能力，主要包括以下能力："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "快速开发调试上线，在同一项目中运行、构建、部署 BFF 代码。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "极简的纯函数调用，在前端直接 import BFF 函数，调用时能自动转换成 HTTP 请求。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "无私有协议，遵循 RESTful API 规范，所有 BFF 接口都是标准化的。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "完善的 TypeScript 支持。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "满足用户使用偏好，支持多框架扩展写法。"
      }), "\n"]
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