"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[49857],{

/***/ 50718:
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
  "sidebar_position": 7
};
const toc = [{
  "id": "configuration-env",
  "text": "Configuration Env",
  "depth": 2
}, {
  "id": "verbose-content",
  "text": "Verbose content",
  "depth": 2
}, {
  "id": "ssr-configuration",
  "text": "SSR Configuration",
  "depth": 3
}];
const title = `inspect`;
const content = "\"---\\nsidebar_position: 7\\n---\\n# inspect\\n\\n```\\nUsage: modern inspect [options]\\n\\nOptions:\\n  --env <env>           view the configuration in the target environment (default: \\\"development\\\")\\n  --output <output>     Specify the path to output in the dist (default: \\\"/\\\")\\n  --verbose             Show the full function in the result\\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\\n  -h, --help            show command help\\n```\\n\\n`modern inspect` command used to view the [Modern.js Builder config](https://modernjs.dev/builder/en/guide/basic/builder-config.html) and webpack config of the project.\\n\\nAfter executing the command `npx modern inspect` in the project root directory, the following files will be generated in the `dist` directory of the project:\\n\\n- `builder.config.js`: The Modern.js Builder config to use at build time.\\n- `webpack.config.web.js`: The webpack config used by to use at build time.\\n\\n```bash\\n➜ npx modern inspect\\n\\nInspect config succeed, open following files to view the content:\\n\\n  - Builder Config: /root/my-project/dist/builder.config.js\\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\\n```\\n\\n## Configuration Env\\n\\nBy default, the inspect command will output the development configs, you can use the `--env production` option to output the production configs:\\n\\n```bash\\nmodern inspect --env production\\n```\\n\\n## Verbose content\\n\\nBy default, the inspect command will omit the function content in the config object, you can use the `--verbose` option to output the full content of the function:\\n\\n```bash\\nmodern inspect --verbose\\n```\\n\\n### SSR Configuration\\n\\nIf the project has enabled SSR, an additional `webpack.config.node.js` file will be generated in the `dist/`, corresponding to the webpack configuration at SSR build time.\\n\\n```bash\\n➜ npx modern inspect\\n\\nInspect config succeed, open following files to view the content:\\n\\n  - Builder Config: /root/my-project/dist/builder.config.js\\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\\n  - Webpack Config (node): /root/my-project/dist/webpack.config.node.js\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    button: "button",
    pre: "pre",
    code: "code",
    p: "p",
    ul: "ul",
    li: "li",
    span: "span",
    h2: "h2",
    h3: "h3"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "inspect",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#inspect",
        children: "#"
      }), "inspect"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-text",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.button, {
          className: "copy"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Usage: modern inspect [options]\n\nOptions:\n  --env <env>           view the configuration in the target environment (default: \"development\")\n  --output <output>     Specify the path to output in the dist (default: \"/\")\n  --verbose             Show the full function in the result\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "modern inspect"
      }), " command used to view the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://modernjs.dev/builder/en/guide/basic/builder-config.html",
        target: "_blank",
        rel: "nofollow",
        children: "Modern.js Builder config"
      }), " and webpack config of the project."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["After executing the command ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx modern inspect"
      }), " in the project root directory, the following files will be generated in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "dist"
      }), " directory of the project:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "builder.config.js"
        }), ": The Modern.js Builder config to use at build time."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "webpack.config.web.js"
        }), ": The webpack config used by to use at build time."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "➜ npx modern inspect"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "Inspect config succeed, open following files to view the content:"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  - Builder Config: /root/my-project/dist/builder.config.js"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "configuration-env",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#configuration-env",
        children: "#"
      }), "Configuration Env"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["By default, the inspect command will output the development configs, you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--env production"
      }), " option to output the production configs:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "modern inspect --env production"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "verbose-content",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#verbose-content",
        children: "#"
      }), "Verbose content"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["By default, the inspect command will omit the function content in the config object, you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--verbose"
      }), " option to output the full content of the function:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "modern inspect --verbose"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "ssr-configuration",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#ssr-configuration",
        children: "#"
      }), "SSR Configuration"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If the project has enabled SSR, an additional ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "webpack.config.node.js"
      }), " file will be generated in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "dist/"
      }), ", corresponding to the webpack configuration at SSR build time."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-bash",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: ""
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "➜ npx modern inspect"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "Inspect config succeed, open following files to view the content:"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  - Builder Config: /root/my-project/dist/builder.config.js"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  - Webpack Config (node): /root/my-project/dist/webpack.config.node.js"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
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