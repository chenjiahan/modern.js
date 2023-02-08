"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[98515],{

/***/ 47535:
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
  "sidebar_position": 3
};
const toc = [{
  "id": "project-creation",
  "text": "Project creation",
  "depth": 2
}, {
  "id": "packagename",
  "text": "packageName",
  "depth": 3
}, {
  "id": "new-command",
  "text": "New Command",
  "depth": 2
}, {
  "id": "actiontype",
  "text": "actionType",
  "depth": 3
}, {
  "id": "function",
  "text": "function",
  "depth": 3
}];
const title = `Module`;
const content = "\"---\\nsidebar_position: 3\\n---\\n\\n# Module\\n\\n## Project creation\\n\\nWhen creating a project, the configuration used by `@modern-js/create` when using the `--config` parameter, and the configuration used when modifying and adding input in the generator plugin.\\n\\nThe application project creation parameters are [Generator Configuration](/guides/topic-detail/generator/config/common).\\n\\n### packageName\\n\\nPackage name (packageName), character string type.\\n\\n## New Command\\n\\nThe new command configuration in the module project can be used through the `--config` parameter configuration when executing the new command, or when enabling functions in the generator plugin.\\n\\n### actionType\\n\\nThe action type (actionType) of the New command, he type supports one:\\n\\n- function: enable function\\n\\n:::info\\nThis parameter is not required when using the enable function and creating elements in the generator plugin, it is automatically added in the generator plugin.\\n\\n:::\\n\\n### function\\n\\nOptional function name (function), supports the following options:\\n\\n- Tailwind CSS(tailwindcss)\\n\\n- Storybook(mwa_storybook)\\n\\n- Runtime API(runtimeApi)\\n\\n- Test(test)\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    h3: "h3",
    ul: "ul",
    li: "li",
    div: "div"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "module",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#module",
        children: "#"
      }), "Module"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "project-creation",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#project-creation",
        children: "#"
      }), "Project creation"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When creating a project, the configuration used by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " when using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--config"
      }), " parameter, and the configuration used when modifying and adding input in the generator plugin."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The application project creation parameters are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/en/guides/topic-detail/generator/config/common.html",
        children: "Generator Configuration"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "packagename",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#packagename",
        children: "#"
      }), "packageName"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Package name (packageName), character string type."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "new-command",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#new-command",
        children: "#"
      }), "New Command"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The new command configuration in the module project can be used through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--config"
      }), " parameter configuration when executing the new command, or when enabling functions in the generator plugin."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "actiontype",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#actiontype",
        children: "#"
      }), "actionType"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The action type (actionType) of the New command, he type supports one:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "function: enable function"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "\nThis parameter is not required when using the enable function and creating elements in the generator plugin, it is automatically added in the generator plugin."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "function",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#function",
        children: "#"
      }), "function"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Optional function name (function), supports the following options:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Tailwind CSS(tailwindcss)"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Storybook(mwa_storybook)"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Runtime API(runtimeApi)"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Test(test)"
        }), "\n"]
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