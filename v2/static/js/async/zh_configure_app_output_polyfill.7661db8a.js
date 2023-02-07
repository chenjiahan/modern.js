"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[52220],{

/***/ 36268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ polyfill_content),
  "default": () => (/* binding */ output_polyfill),
  "frontmatter": () => (/* binding */ polyfill_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ polyfill_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/output/polyfill.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "配置项",
  "text": "配置项",
  "depth": 3
}, {
  "id": "entry",
  "text": "entry",
  "depth": 4
}, {
  "id": "usage",
  "text": "usage",
  "depth": 4
}, {
  "id": "ua",
  "text": "ua",
  "depth": 4
}, {
  "id": "off",
  "text": "off",
  "depth": 4
}];
const content = "\"- **类型：** `'entry' | 'usage' | 'ua' | 'off'`\\n- **默认值：** `'entry'`\\n\\n通过 `output.polyfill` 你可以配置 Polyfill 的注入方式。\\n\\n### 配置项\\n\\n#### entry\\n\\n当 `output.polyfill` 配置为 `'entry'` 时，会在每个入口文件中注入 Polyfill。\\n\\n等价于 `@babel/preset-env` 的 `useBuiltIns: 'entry'` 配置。\\n\\n#### usage\\n\\n当 `output.polyfill` 配置为 `'usage'` 时，会在每个文件中根据代码中使用的 API 注入 Polyfill。\\n\\n等价于 `@babel/preset-env` 的 `useBuiltIns: 'usage'` 配置。\\n\\n#### ua\\n\\n根据当前请求的 UA 信息，动态下发 Polyfill 代码。\\n\\n#### off\\n\\n不注入 Polyfill。使用此选项时，需要自行保证代码的兼容性。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    p: "p",
    h3: "h3",
    a: "a",
    h4: "h4"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "类型："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'entry' | 'usage' | 'ua' | 'off'"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "默认值："
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'entry'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.polyfill"
      }), " 你可以配置 Polyfill 的注入方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "配置项",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#配置项",
        children: "#"
      }), "配置项"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "entry",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#entry",
        children: "#"
      }), "entry"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.polyfill"
      }), " 配置为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'entry'"
      }), " 时，会在每个入口文件中注入 Polyfill。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["等价于 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@babel/preset-env"
      }), " 的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useBuiltIns: 'entry'"
      }), " 配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "usage",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#usage",
        children: "#"
      }), "usage"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.polyfill"
      }), " 配置为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'usage'"
      }), " 时，会在每个文件中根据代码中使用的 API 注入 Polyfill。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["等价于 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@babel/preset-env"
      }), " 的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useBuiltIns: 'usage'"
      }), " 配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "ua",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#ua",
        children: "#"
      }), "ua"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据当前请求的 UA 信息，动态下发 Polyfill 代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "off",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#off",
        children: "#"
      }), "off"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不注入 Polyfill。使用此选项时，需要自行保证代码的兼容性。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const polyfill = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/output/polyfill.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const polyfill_frontmatter = {
  "sidebar_label": "polyfill"
};

const polyfill_toc = [];
const title = `output.polyfill`;
const polyfill_content = "\"---\\nsidebar_label: polyfill\\n---\\n\\n# output.polyfill\\n\\n:::tip\\n该配置由 Modern.js Builder 提供，更多信息可参考 [output.polyfill](https://modernjs.dev/builder/api/config-output.html#outputpolyfill)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/output/polyfill.md'\\n\\n<Main />\\n\"";
function polyfill_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "outputpolyfill",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#outputpolyfill",
        children: "#"
      }), "output.polyfill"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "TIP"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置由 Modern.js Builder 提供，更多信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-output.html#outputpolyfill",
            target: "_blank",
            rel: "nofollow",
            children: "output.polyfill"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(polyfill, {})]
  });
}
function polyfill_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(polyfill_createMdxContent, props)
  })) : polyfill_createMdxContent(props);
}
/* harmony default export */ const output_polyfill = (polyfill_MDXContent);


/***/ })

}]);