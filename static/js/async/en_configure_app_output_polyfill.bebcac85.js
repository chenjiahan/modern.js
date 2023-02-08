"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[37846],{

/***/ 88758:
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
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/en/config/output/polyfill.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "config",
  "text": "Config",
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
const content = "\"- **Type:** `'entry' | 'usage' | 'ua' | 'off'`\\n- **Default:** `'entry'`\\n\\nVia `output.polyfill` you can configure how the polyfill is injected.\\n\\n### Config\\n\\n#### entry\\n\\nPolyfill is injected in every entry file when `output.polyfill` is configured as `'entry'`.\\n\\nEquivalent to `useBuiltIns: 'entry'` configuration in `@babel/preset-env`.\\n\\n#### usage\\n\\nPolyfill is injected in each file based on the API used in the code.\\n\\nEquivalent to `useBuiltIns: 'usage'` configuration in `@babel/preset-env`.\\n\\n#### ua\\n\\nThe Polyfill code is dynamically delivered according to the currently requested UA information.\\n\\n#### off\\n\\nPolyfill is not injected. When using this option, you need to ensure code compatibility yourself.\\n\"";
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
          children: "Type:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'entry' | 'usage' | 'ua' | 'off'"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'entry'"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.polyfill"
      }), " you can configure how the polyfill is injected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "config",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#config",
        children: "#"
      }), "Config"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "entry",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#entry",
        children: "#"
      }), "entry"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Polyfill is injected in every entry file when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output.polyfill"
      }), " is configured as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'entry'"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useBuiltIns: 'entry'"
      }), " configuration in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@babel/preset-env"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "usage",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#usage",
        children: "#"
      }), "usage"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Polyfill is injected in each file based on the API used in the code."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useBuiltIns: 'usage'"
      }), " configuration in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@babel/preset-env"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "ua",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#ua",
        children: "#"
      }), "ua"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Polyfill code is dynamically delivered according to the currently requested UA information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "off",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#off",
        children: "#"
      }), "off"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Polyfill is not injected. When using this option, you need to ensure code compatibility yourself."
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

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/en/configure/app/output/polyfill.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const polyfill_frontmatter = {
  "sidebar_label": "polyfill"
};

const polyfill_toc = [];
const title = `output.polyfill`;
const polyfill_content = "\"---\\nsidebar_label: polyfill\\n---\\n\\n# output.polyfill\\n\\n:::tip\\nThis config is provided by Modern.js Builder, more detail can see [output.polyfill](https://modernjs.dev/builder/en/api/config-output.html#outputpolyfill)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/en/config/output/polyfill.md'\\n\\n<Main />\\n\"";
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
          children: ["\nThis config is provided by Modern.js Builder, more detail can see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/en/api/config-output.html#outputpolyfill",
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