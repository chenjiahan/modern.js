"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[54365],{

/***/ 91683:
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
  "sidebar_position": 1
};
const toc = [{
  "id": "file-type",
  "text": "File type",
  "depth": 2
}];
const title = `Introduction`;
const content = "\"---\\nsidebar_position: 1\\n---\\n\\n# Introduction\\n\\nThe file operation API can be used in the `onForged` time to live function, which can add, delete and change the current project file.\\n\\nFile operation API related path to fill in the project relative path, generator plugin will automatically add the current project path prefix.\\n\\n## File type\\n\\nThe generator plugin divides file types into the following categories:\\n\\n- Text files: plain text content files, files that can be templated using handlebars.\\n\\n- Binary files: pictures, audio, video and other files.\\n\\n:::warning\\nThe jsx or tsx file using the variable is a binary file, and its syntax conflicts with handlebars render, which will cause the template file failed to create.\\n\\n:::\\n\\n- JSON files: Files in JSON format, such as `package.json`, `tsconfig.json`.\\n\\n- Text List File: A file consisting of lines of text, such as `.gitignore`, `.editorconfig`, `.npmrc`.\\n\\nThe file manipulation API for the generator plugin will operate on these four file types.\\n\\nIts type is defined as:\\n\\n```ts\\nexport enum FileType {\\n  Text = 'text',\\n  Binary = 'binary',\\n  Json = 'json',\\n  TextRaw = 'textRaw',\\n}\\n```\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h2: "h2",
    ul: "ul",
    li: "li",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "introduction",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#introduction",
        children: "#"
      }), "Introduction"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The file operation API can be used in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "onForged"
      }), " time to live function, which can add, delete and change the current project file."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "File operation API related path to fill in the project relative path, generator plugin will automatically add the current project path prefix."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "file-type",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#file-type",
        children: "#"
      }), "File type"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The generator plugin divides file types into the following categories:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Text files: plain text content files, files that can be templated using handlebars."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Binary files: pictures, audio, video and other files."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive warning",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "WARNING"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "\nThe jsx or tsx file using the variable is a binary file, and its syntax conflicts with handlebars render, which will cause the template file failed to create."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["JSON files: Files in JSON format, such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "package.json"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "tsconfig.json"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Text List File: A file consisting of lines of text, such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: ".gitignore"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: ".editorconfig"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: ".npmrc"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The file manipulation API for the generator plugin will operate on these four file types."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Its type is defined as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "language-ts",
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
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
                children: "enum"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: " "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-function)"
                },
                children: "FileType"
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
                children: "  Text "
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
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'text'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  Binary "
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
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'binary'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  Json "
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
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'json'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "  TextRaw "
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
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'textRaw'"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-punctuation)"
                },
                children: ","
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "}"
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