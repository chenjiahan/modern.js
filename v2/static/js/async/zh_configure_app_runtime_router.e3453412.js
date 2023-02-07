"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[16244],{

/***/ 14670:
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
;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/components/router-legacy-tip.mdx
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

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/runtime/router.mdx
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
const content = "\"---\\nsidebar_label: router\\n---\\n\\nimport RouterLegacyTip from \\\"@site-docs/components/router-legacy-tip\\\"\\n\\n<RouterLegacyTip />\\n\\n# runtime.router\\n\\n- **类型：** `boolean | Object`\\n- **默认值：** `false`\\n\\n开启 `router` 之后，支持使用 Modern.js 默认提供的约定式路由进行路由管理。Modern.js 的路由模块基于 [React Router 6](https://reactrouter.com/) 实现。\\n\\n具体配置如下：\\n\\n## basename\\n\\n- **类型：** `string`\\n- **默认值：** ``\\n\\n设置客户端路由的 `basename`，通常用于应用需要部署在域名非根路径下的场景。\\n\\n## supportHtml5History\\n\\n- **类型：** `boolean`\\n- **默认值：** `true`\\n\\n值为 `true`，使用 `BrowserRouter`；否则使用 `HashRouter`。推荐使用 `BrowserRouter`。\\n\\n:::warning\\n当开启 SSR 时，不支持设置 `supportHtml5History`。\\n\\n:::\\n\"";
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
          children: "类型："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean | Object"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "router"
      }), " 之后，支持使用 Modern.js 默认提供的约定式路由进行路由管理。Modern.js 的路由模块基于 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://reactrouter.com/",
        target: "_blank",
        rel: "nofollow",
        children: "React Router 6"
      }), " 实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体配置如下："
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
          children: "类型："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值："
        }), " ``"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置客户端路由的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "basename"
      }), "，通常用于应用需要部署在域名非根路径下的场景。"]
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
          children: "类型："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["值为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), "，使用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BrowserRouter"
      }), "；否则使用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashRouter"
      }), "。推荐使用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BrowserRouter"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive warning",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "WARNING"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n当开启 SSR 时，不支持设置 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "supportHtml5History"
          }), "。"]
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