"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[87891],{

/***/ 23655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ content),
  "default": () => (/* binding */ router),
  "frontmatter": () => (/* binding */ router_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ router_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/components/router-legacy-tip.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = (/* unused pure expression or super */ null && ([]));
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const router_legacy_tip = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/runtime/router.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const router_frontmatter = {
  "sidebar_label": "router"
};

const router_toc = [{
  "id": "basename",
  "text": "basename",
  "depth": 2
}, {
  "id": "supporthtml5history",
  "text": "supportHtml5History",
  "depth": 2
}];
const title = `runtime.router`;
const content = "\"---\\nsidebar_label: router\\n---\\n\\nimport RouterLegacyTip from \\\"@site-docs-en/components/router-legacy-tip\\\"\\n\\n<RouterLegacyTip />\\n\\n# runtime.router\\n\\n- **Type:** `boolean | Object`\\n- **Default:** `false`\\n\\nWhen `router` is enabled, routing management of conventional routes provided by Modern.js is supported. Based on [React Router 6](https://reactrouter.com/).\\n\\n## basename\\n\\n- **Type:** `string`\\n- **Default:** ``\\n\\nThe basename of the app for situations where you can't deploy to the root of the domain, but a sub directory.\\n\\n## supportHtml5History\\n\\n- **Type:** `boolean`\\n- **Default:** `true`\\n\\nIf the value of `supportHtml5History` is `true`, `BrowserRouter` would be used, otherwise `HashRouter` would be used. `BrowserRouter` is recommended.\\n\\n:::warning\\nWhen SSR is enabled, `supportHtml5History` is not supported.\\n\\n:::\\n\"";
function router_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    p: "p",
    h2: "h2",
    div: "div"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(router_legacy_tip, {}), "\n", (0,jsx_runtime.jsxs)(_components.h1, {
      id: "runtimerouter",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#runtimerouter",
        children: "#"
      }), "runtime.router"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean | Object"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "router"
      }), " is enabled, routing management of conventional routes provided by Modern.js is supported. Based on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://reactrouter.com/",
        target: "_blank",
        rel: "nofollow",
        children: "React Router 6"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "basename",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#basename",
        children: "#"
      }), "basename"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ``"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The basename of the app for situations where you can't deploy to the root of the domain, but a sub directory."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "supporthtml5history",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#supporthtml5history",
        children: "#"
      }), "supportHtml5History"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "supportHtml5History"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BrowserRouter"
      }), " would be used, otherwise ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashRouter"
      }), " would be used. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BrowserRouter"
      }), " is recommended."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive warning",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "WARNING"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\nWhen SSR is enabled, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "supportHtml5History"
          }), " is not supported."]
        })
      })]
    })]
  });
}
function router_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(router_createMdxContent, props)
  })) : router_createMdxContent(props);
}
/* harmony default export */ const router = (router_MDXContent);


/***/ })

}]);