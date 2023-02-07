"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[6129],{

/***/ 76722:
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
  "id": "customized-configuration",
  "text": "Customized Configuration",
  "depth": 2
}];
const title = `Less and Sass`;
const content = "\"---\\nsidebar_position: 4\\n---\\n\\n# Less and Sass\\n\\n[Less](https://lesscss.org/) and [Sass](https://sass-lang.com/) are two commonly used CSS preprocessors that Modern.js built-in support for the Less and Sass compile capabilities.\\n\\n## Customized Configuration\\n\\n- If you need to customize the configuration of [less-loader](https://github.com/webpack-contrib/less-loader), please refer to the [tools.less](/configure/app/tools/less).\\n- If you need to customize the configuration of [sass-loader](https://github.com/webpack-contrib/sass-loader), please refer to the [tools.less](/configure/app/tools/sass).\\n\\n:::tip\\nCSS files pre-compiled by Less and Sass will still undergo Modern.js build-in [PostCSS](https://postcss.org/) conversion, which has good browser compatibility. For related content, please refer to [[PostCSS](/guides/basic-features/css/postcss)].\\n\\n:::\\n\"";
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
      id: "less-and-sass",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#less-and-sass",
        children: "#"
      }), "Less and Sass"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://lesscss.org/",
        target: "_blank",
        rel: "nofollow",
        children: "Less"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://sass-lang.com/",
        target: "_blank",
        rel: "nofollow",
        children: "Sass"
      }), " are two commonly used CSS preprocessors that Modern.js built-in support for the Less and Sass compile capabilities."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "customized-configuration",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#customized-configuration",
        children: "#"
      }), "Customized Configuration"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["If you need to customize the configuration of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/webpack-contrib/less-loader",
          target: "_blank",
          rel: "nofollow",
          children: "less-loader"
        }), ", please refer to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/v2/en/configure/app/tools/less.html",
          children: "tools.less"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["If you need to customize the configuration of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/webpack-contrib/sass-loader",
          target: "_blank",
          rel: "nofollow",
          children: "sass-loader"
        }), ", please refer to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/v2/en/configure/app/tools/sass.html",
          children: "tools.less"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\nCSS files pre-compiled by Less and Sass will still undergo Modern.js build-in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://postcss.org/",
            target: "_blank",
            rel: "nofollow",
            children: "PostCSS"
          }), " conversion, which has good browser compatibility. For related content, please refer to [", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "/v2/en/guides/basic-features/css/postcss.html",
            children: "PostCSS"
          }), "]."]
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