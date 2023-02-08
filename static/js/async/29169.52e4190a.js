"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[29169],{

/***/ 29169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports frontmatter, toc, content */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97458);
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
const content = "\"```tsx title=\\\"src/App.tsx\\\"\\nimport { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\\nimport { StaticRouter } from '@modern-js/runtime/router/server';\\nimport React from 'react';\\nimport { useRuntimeContext } from '@modern-js/runtime';\\n\\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\\n\\nexport default () => {\\n  const { context } = useRuntimeContext();\\n  const pathname = context?.request?.pathname;\\n  return (\\n    <Router location={pathname}>\\n      <Routes>\\n        <Route index element={<div>index</div>} />\\n        <Route path=\\\"about\\\" element={<div>about</div>} />\\n      </Routes>\\n    </Router>\\n  );\\n};\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
    className: "language-tsx",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
      className: "modern-code-title",
      children: "src/App.tsx"
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { BrowserRouter"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " Route"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-punctuation)"
              },
              children: ","
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " Routes } "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/runtime/router'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { StaticRouter } "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/runtime/router/server'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " React "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'react'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "import"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { useRuntimeContext } "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "from"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'@modern-js/runtime'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ";"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Router"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "typeof"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " window "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "==="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "'undefined'"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "?"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " StaticRouter "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: ":"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " BrowserRouter;"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "export"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "default"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " () "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "=>"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " {"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " { "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "context"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " } "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "useRuntimeContext"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "();"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "const"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "pathname"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "context"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "?."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "request"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "?.pathname;"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "return"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " ("
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    <"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Router"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "location"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{pathname}>"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      <"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Routes"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        <"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Route"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "index"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "element"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{<"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">index</"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">} />"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "        <"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Route"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "path"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "\"about\""
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: " "
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-function)"
              },
              children: "element"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-keyword)"
              },
              children: "="
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "{<"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">about</"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-string-expression)"
              },
              children: "div"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">} />"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "      </"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Routes"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
            className: "line",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "    </"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-token-constant)"
              },
              children: "Router"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: ">"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "  );"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              style: {
                color: "var(--shiki-color-text)"
              },
              children: "};"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
            className: "line"
          })]
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