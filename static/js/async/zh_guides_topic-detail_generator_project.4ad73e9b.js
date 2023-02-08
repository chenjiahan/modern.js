"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[10647],{

/***/ 81335:
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
  "sidebar_position": 2
};
const toc = [{
  "id": "使用",
  "text": "使用",
  "depth": 2
}, {
  "id": "参数",
  "text": "参数",
  "depth": 2
}, {
  "id": "projectdir",
  "text": "[projectDir]",
  "depth": 3
}, {
  "id": "--version",
  "text": "--version",
  "depth": 3
}, {
  "id": "--lang",
  "text": "--lang",
  "depth": 3
}, {
  "id": "-c---config",
  "text": "-c, --config",
  "depth": 3
}, {
  "id": "--no-need-install",
  "text": "--no-need-install",
  "depth": 3
}, {
  "id": "--dist-tag-disttag",
  "text": "--dist-tag <distTag>",
  "depth": 3
}, {
  "id": "--registry-registry",
  "text": "--registry <registry/>",
  "depth": 3
}, {
  "id": "--debug",
  "text": "--debug",
  "depth": 3
}, {
  "id": "--mwa",
  "text": "--mwa",
  "depth": 3
}, {
  "id": "--module",
  "text": "--module",
  "depth": 3
}, {
  "id": "--monorepo",
  "text": "--monorepo",
  "depth": 3
}, {
  "id": "--plugin-plugin",
  "text": "--plugin <plugin>",
  "depth": 3
}, {
  "id": "--generator-generator",
  "text": "--generator <generator>",
  "depth": 3
}, {
  "id": "--packages-packages",
  "text": "--packages <packages>",
  "depth": 3
}];
const title = `项目生成器`;
const content = "\"---\\nsidebar_position: 2\\n---\\n\\n# 项目生成器\\n\\nModern.js 提供了 `@modern-js/create` 作为项目生成器用于进行 Modern.js 工程方案项目创建。\\n\\n## 使用\\n\\n不需要全局安装 `@modern-js/create`，直接使用 npx 执行该工具即可：\\n\\n```bash\\nnpx @modern-js/create [projectDir]\\n```\\n\\n:::info\\n使用 npx 可以每次获取最新版本的 `@modern-js/create`。\\n\\n:::\\n\\n## 参数\\n\\n### [projectDir]\\n\\n项目目录名称。\\n\\n执行上述命令时，默认会在当前目录创建 `projectDir` 文件夹，并在该文件夹下初始化项目。该参数为空时，将会在当前目录直接生成初始化项目。\\n\\n### --version\\n\\n获取 `@modern-js/create` 工具版本。\\n\\n```bash\\n$ npx @modern-js/create --version\\n\\n[INFO] @modern-js/create v2.0.0\\n```\\n\\n### --lang\\n\\n指定执行语言，支持 `zh` 和 `en`。\\n\\n默认情况下，`@modern-js/create` 会自动识别用户的系统语言，选择使用中文或者英文，如果识别失败或者想手动指定语言，可以使用该参数。\\n\\n### -c, --config\\n\\n指定项目默认配置。\\n\\n默认情况下，`@modern-js/create` 在执行过程中会出现选择语言、包管理工具等交互问题，当需要提前指定这些配置内容时，可以通过该字段传入。\\n\\n该字段为 JSON 字符串，例如需执行包管理工具时：\\n\\n```bash\\nnpx @modern-js/create --config '{\\\"packageManager\\\": \\\"pnpm\\\"}'\\n```\\n\\n具体配置信息可查看[工程方案配置](/guides/topic-detail/generator/config/common)。\\n\\n### --no-need-install\\n\\n默认情况下，`@modern-js/create` 在创建项目完成后会自动安装依赖，使用该参数可以忽略安装依赖步骤。\\n\\n### --dist-tag \\\\<distTag\\\\>\\n\\n指定生成器及 Modern.js 相关依赖版本。\\n\\n`@modern-js/create` 执行过程中会执行更小的微生成器，使用该参数可以执行执行的微生成器的版本号和对应的安装 Modern.js 相关依赖的版本号。\\n\\n### --registry \\\\<registry/>\\n\\n执行获取生成器及 npm 包的 npm registry。\\n\\n### --debug\\n\\n显示生成器执行过程中的调试日志信息。\\n\\n### --mwa\\n\\n一键创建应用工程方案项目。\\n\\n使用该参数后，`@modern-js/create` 将会使用配置默认值创建应用项目。\\n\\n### --module\\n\\n一键创建模块工程方案项目。\\n\\n使用该参数后，`@modern-js/create` 将会使用配置默认值创建模块项目。\\n\\n### --monorepo\\n\\n一键创建 Monorepo 工程方案项目。\\n\\n使用该参数后，`@modern-js/create` 将会使用配置默认值创建 Monorepo 项目。\\n\\n### --plugin \\\\<plugin\\\\>\\n\\n指定生成器插件。\\n\\nModern.js 支持使用生成器插件定制 Modern.js 默认的工程方案类型或者添加工程方案类型场景，该参数用户指定定制的生成器插件。\\n\\n关于定制生成器插件可以参考[开发生成器插件](/guides/topic-detail/generator/plugin/abstract)。\\n\\n### --generator \\\\<generator\\\\>\\n\\n指定微生成器。\\n\\n默认情况下 `@modern-js/create` 会执行 Modern.js 框架内置的微生成器，如果你需要执行定制的微生成器，又需要使用 `npx @modern-js/create` 的姿势，可直接使用该参数。\\n\\n关于定制微生成器可以参考[开发微生成器](/guides/topic-detail/generator/codesmith/introduce)。\\n\\n### --packages \\\\<packages\\\\>\\n\\n创建项目是指定特定包版本依赖。\\n\\n在创建项目时如果有需要指定特定包版本，可以使用该参数。该参数会在项目根目录的 `package.json` 中配置 `pnpm.overrides`(包管理工具选择 pnpm) 或者 `resolutions` 锁定包版本号。\\n\\n该参数值为 JSON 字符串。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h2: "h2",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span",
    h3: "h3"
  }, props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
      id: "项目生成器",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#项目生成器",
        children: "#"
      }), "项目生成器"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Modern.js 提供了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 作为项目生成器用于进行 Modern.js 工程方案项目创建。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "使用",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#使用",
        children: "#"
      }), "使用"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["不需要全局安装 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), "，直接使用 npx 执行该工具即可："]
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
                children: "npx @modern-js/create [projectDir]"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "INFO"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["\n使用 npx 可以每次获取最新版本的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "@modern-js/create"
          }), "。"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "参数",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#参数",
        children: "#"
      }), "参数"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "projectdir",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#projectdir",
        children: "#"
      }), "[projectDir]"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "项目目录名称。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["执行上述命令时，默认会在当前目录创建 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "projectDir"
      }), " 文件夹，并在该文件夹下初始化项目。该参数为空时，将会在当前目录直接生成初始化项目。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--version",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--version",
        children: "#"
      }), "--version"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["获取 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 工具版本。"]
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
                children: "$ npx @modern-js/create --version"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "[INFO] @modern-js/create v2.0.0"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--lang",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--lang",
        children: "#"
      }), "--lang"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["指定执行语言，支持 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "zh"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "en"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 会自动识别用户的系统语言，选择使用中文或者英文，如果识别失败或者想手动指定语言，可以使用该参数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "-c---config",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#-c---config",
        children: "#"
      }), "-c, --config"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "指定项目默认配置。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 在执行过程中会出现选择语言、包管理工具等交互问题，当需要提前指定这些配置内容时，可以通过该字段传入。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "该字段为 JSON 字符串，例如需执行包管理工具时："
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
              className: "line",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-color-text)"
                },
                children: "npx @modern-js/create --config "
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
                style: {
                  color: "var(--shiki-token-string-expression)"
                },
                children: "'{\"packageManager\": \"pnpm\"}'"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["具体配置信息可查看", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/guides/topic-detail/generator/config/common.html",
        children: "工程方案配置"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--no-need-install",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--no-need-install",
        children: "#"
      }), "--no-need-install"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 在创建项目完成后会自动安装依赖，使用该参数可以忽略安装依赖步骤。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--dist-tag-disttag",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--dist-tag-disttag",
        children: "#"
      }), "--dist-tag <distTag>"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "指定生成器及 Modern.js 相关依赖版本。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 执行过程中会执行更小的微生成器，使用该参数可以执行执行的微生成器的版本号和对应的安装 Modern.js 相关依赖的版本号。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--registry-registry",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--registry-registry",
        children: "#"
      }), "--registry <registry/>"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "执行获取生成器及 npm 包的 npm registry。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--debug",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--debug",
        children: "#"
      }), "--debug"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "显示生成器执行过程中的调试日志信息。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--mwa",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--mwa",
        children: "#"
      }), "--mwa"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一键创建应用工程方案项目。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["使用该参数后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 将会使用配置默认值创建应用项目。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--module",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--module",
        children: "#"
      }), "--module"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一键创建模块工程方案项目。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["使用该参数后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 将会使用配置默认值创建模块项目。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--monorepo",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--monorepo",
        children: "#"
      }), "--monorepo"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "一键创建 Monorepo 工程方案项目。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["使用该参数后，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 将会使用配置默认值创建 Monorepo 项目。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--plugin-plugin",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--plugin-plugin",
        children: "#"
      }), "--plugin <plugin>"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "指定生成器插件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Modern.js 支持使用生成器插件定制 Modern.js 默认的工程方案类型或者添加工程方案类型场景，该参数用户指定定制的生成器插件。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["关于定制生成器插件可以参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/guides/topic-detail/generator/plugin/abstract.html",
        children: "开发生成器插件"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--generator-generator",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--generator-generator",
        children: "#"
      }), "--generator <generator>"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "指定微生成器。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["默认情况下 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@modern-js/create"
      }), " 会执行 Modern.js 框架内置的微生成器，如果你需要执行定制的微生成器，又需要使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npx @modern-js/create"
      }), " 的姿势，可直接使用该参数。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["关于定制微生成器可以参考", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/guides/topic-detail/generator/codesmith/introduce.html",
        children: "开发微生成器"
      }), "。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "--packages-packages",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#--packages-packages",
        children: "#"
      }), "--packages <packages>"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "创建项目是指定特定包版本依赖。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["在创建项目时如果有需要指定特定包版本，可以使用该参数。该参数会在项目根目录的 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package.json"
      }), " 中配置 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pnpm.overrides"
      }), "(包管理工具选择 pnpm) 或者 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "resolutions"
      }), " 锁定包版本号。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "该参数值为 JSON 字符串。"
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