"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[86206],{

/***/ 18507:
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
  "id": "自定义配置",
  "text": "自定义配置",
  "depth": 2
}];
const title = `Less 和 Sass`;
const content = "\"---\\nsidebar_position: 4\\n---\\n\\n# Less 和 Sass\\n\\n[Less](https://lesscss.org/) 和 [Sass](https://sass-lang.com/) 是常用的两种 CSS 预处理器，Modern.js 内置了 Less 和 Sass 编译能力的支持。\\n\\n## 自定义配置\\n\\n- 如果需要自定义 [less-loader](https://github.com/webpack-contrib/less-loader) 的配置，请参考 [tools.less](/configure/app/tools/less) 配置项。\\n- 如果需要自定义 [sass-loader](https://github.com/webpack-contrib/sass-loader) 的配置，请参考 [tools.less](/configure/app/tools/sass) 配置项。\\n\\n:::tip 提示\\n经过 Less 和 Sass 预编译后的 CSS 文件，仍然会经过 Modern.js 内置的 [PostCSS](https://postcss.org/) 的转换，具备良好的浏览器兼容性。相关内容请参考【[PostCSS](/guides/basic-features/css/postcss)】。\\n\\n:::\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    div: "div"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "less-和-sass",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#less-和-sass",
        children: "#"
      }), "Less 和 Sass"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://lesscss.org/",
        target: "_blank",
        rel: "nofollow",
        children: "Less"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://sass-lang.com/",
        target: "_blank",
        rel: "nofollow",
        children: "Sass"
      }), " 是常用的两种 CSS 预处理器，Modern.js 内置了 Less 和 Sass 编译能力的支持。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "自定义配置",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#自定义配置",
        children: "#"
      }), "自定义配置"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果需要自定义 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/webpack-contrib/less-loader",
          target: "_blank",
          rel: "nofollow",
          children: "less-loader"
        }), " 的配置，请参考 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/configure/app/tools/less.html",
          children: "tools.less"
        }), " 配置项。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["如果需要自定义 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/webpack-contrib/sass-loader",
          target: "_blank",
          rel: "nofollow",
          children: "sass-loader"
        }), " 的配置，请参考 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/configure/app/tools/sass.html",
          children: "tools.less"
        }), " 配置项。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "提示"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n经过 Less 和 Sass 预编译后的 CSS 文件，仍然会经过 Modern.js 内置的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://postcss.org/",
            target: "_blank",
            rel: "nofollow",
            children: "PostCSS"
          }), " 的转换，具备良好的浏览器兼容性。相关内容请参考【", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "/guides/basic-features/css/postcss.html",
            children: "PostCSS"
          }), "】。"]
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