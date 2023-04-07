(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_usage_mdx"],{34790:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return r},toc:function(){return i},default:function(){return a}});var d=s("12151"),c=s("21447"),o={sidebar_position:0},r="配置使用",i=[{text:"在配置文件中配置",depth:2,id:"在配置文件中配置"},{text:"modern.config.js",depth:3,id:"modern.config.js"},{text:"modern.config.ts（推荐）",depth:3,id:"modern.config.ts（推荐）"},{text:"导出配置函数",depth:3,id:"导出配置函数"},{text:"导出异步函数",depth:3,id:"导出异步函数"},{text:"指定配置文件",depth:3,id:"指定配置文件"},{text:"在 package.json 中配置（不推荐）",depth:2,id:"在-package.json-中配置（不推荐）"},{text:"注意事项",depth:3,id:"注意事项"},{text:"本地调试配置",depth:2,id:"本地调试配置"},{text:"示例",depth:3,id:"示例"},{text:"注意事项",depth:3,id:"注意事项-1"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",div:"div",h2:"h2",h3:"h3",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"配置使用",children:["配置使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置使用",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 中有两种配置，一个是编译时配置，一个是服务端运行时配置。"}),"\n",(0,d.jsx)(n.p,{children:"编译时配置可以在两个位置进行配置："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["根路径下的 ",(0,d.jsx)(n.code,{children:"modern.config.(ts|js|mjs)"})," 文件"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"package.json"})," 文件"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:"Modern.js 不支持同时在 package.json 中和 modern.config.ts 中配置同一个配置项，推荐优先在 modern.config.ts 中进行配置。如果 Modern.js 检测到重复配置导致的冲突，将会抛出警告。"})]}),"\n",(0,d.jsxs)(n.p,{children:["服务端运行时配置可以在根路径下的 ",(0,d.jsx)(n.code,{children:"modern.server-runtime.config.(ts|js|mjs)"})," 中自定义配置选项。"]}),"\n",(0,d.jsxs)(n.h2,{id:"在配置文件中配置",children:["在配置文件中配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在配置文件中配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 的配置文件定义在项目的根目录下，支持 ",(0,d.jsx)(n.code,{children:".js"}),", ",(0,d.jsx)(n.code,{children:".ts"})," 和 ",(0,d.jsx)(n.code,{children:".mjs"})," 格式："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"modern.config.js"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"modern.config.ts"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"modern.config.mjs"})}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"modern.config.js",children:["modern.config.js",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern.config.js",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"modern.config.js"})," 中可以使用 JavaScript 语法，因此比 ",(0,d.jsx)(n.code,{children:"package.json"})," 更加灵活。"]}),"\n",(0,d.jsxs)(n.p,{children:["比如，你可以在 ",(0,d.jsx)(n.code,{children:"modern.config.js"})," 中定义函数类型的配置选项："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"export default {\n  source: {\n    alias: opts => {\n      opts['@common'] = './src/common';\n    },\n  },\n};\n"})})]})]}),"\n",(0,d.jsxs)(n.p,{children:["你也可以通过 ",(0,d.jsx)(n.code,{children:"process.env.NODE_ENV"})," 进行动态设置："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"export default {\n  server: {\n    ssr: process.env.NODE_ENV === 'development',\n  },\n};\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"modern.config.ts（推荐）",children:["modern.config.ts（推荐）",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern.config.ts（推荐）",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"我们推荐使用 .ts 格式的配置文件，它提供了友好的 TypeScript 类型提示，从而帮助你避免配置中的错误。"}),"\n",(0,d.jsxs)(n.p,{children:["从 ",(0,d.jsx)(n.code,{children:"@modern-js/app-tools"})," 中导入 ",(0,d.jsx)(n.code,{children:"defineConfig"})," 工具函数, 它会帮助你进行配置的类型推导和类型补全："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"导出配置函数",children:["导出配置函数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#导出配置函数",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 支持在配置文件中导出一个函数，你可以在函数中动态计算配置，并返回给 Modern.js。"}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig(({ env, command }) => ({\n  source: {\n    alias: {\n      '@foo': env === 'development' ? './src/foo.dev.ts' : './src/foo.prod.ts',\n    },\n  },\n}));\n"})})]})]}),"\n",(0,d.jsx)(n.p,{children:"该函数接受以下入参："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"env"}),"：对应 ",(0,d.jsx)(n.code,{children:"process.env.NODE_ENV"})," 的值。","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["当运行 ",(0,d.jsx)(n.code,{children:"modern dev"})," 或 ",(0,d.jsx)(n.code,{children:"modern start"})," 时，",(0,d.jsx)(n.code,{children:"env"})," 的值为 ",(0,d.jsx)(n.code,{children:"development"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:["当运行 ",(0,d.jsx)(n.code,{children:"modern build"})," 或 ",(0,d.jsx)(n.code,{children:"modern serve"})," 时，",(0,d.jsx)(n.code,{children:"env"})," 的值为 ",(0,d.jsx)(n.code,{children:"production"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:["当运行 ",(0,d.jsx)(n.code,{children:"modern test"})," 时，",(0,d.jsx)(n.code,{children:"env"})," 的值为 ",(0,d.jsx)(n.code,{children:"test"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"command"}),": 对应当前运行的命令，如 ",(0,d.jsx)(n.code,{children:"dev"}),"、",(0,d.jsx)(n.code,{children:"start"}),"、",(0,d.jsx)(n.code,{children:"build"}),"、",(0,d.jsx)(n.code,{children:"serve"}),"。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"导出异步函数",children:["导出异步函数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#导出异步函数",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 也支持在配置文件中导出一个异步函数，你可以在函数中进行一些异步操作："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="modern.config.js"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig(async ({ env, command }) => {\n  const result = await someAsyncFunction();\n\n  return {\n    html: {\n      title: result,\n    },\n  };\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"指定配置文件",children:["指定配置文件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#指定配置文件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 命令行支持通过 ",(0,d.jsx)(n.code,{children:"--config"})," 选项来指定配置文件的名称。"]}),"\n",(0,d.jsxs)(n.p,{children:["例如，你需要在执行 build 命令时使用 ",(0,d.jsx)(n.code,{children:"modern.prod.config.ts"})," 文件，可以在 ",(0,d.jsx)(n.code,{children:"package.json"})," 中添加如下配置："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "scripts": {\n    "dev": "modern modern",\n    "build": "modern build --config modern.prod.config.ts"\n  }\n}\n'})})]})]}),"\n",(0,d.jsxs)(n.p,{children:["你也可以将 ",(0,d.jsx)(n.code,{children:"--config"})," 选项缩写为 ",(0,d.jsx)(n.code,{children:"-c"}),"："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ modern build -c modern.prod.config.js\n"})})]})}),"\n",(0,d.jsxs)(n.h2,{id:"在-package.json-中配置（不推荐）",children:["在 package.json 中配置（不推荐）",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-package.json-中配置（不推荐）",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["除了配置文件外，也可以在 ",(0,d.jsx)(n.code,{children:"package.json"})," 中的 ",(0,d.jsx)(n.code,{children:"modernConfig"})," 字段下设置配置选项，如："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "modernConfig": {\n    "source": {\n      "alias": {\n        "@common": "./src/common"\n      }\n    }\n  }\n}\n'})})]})]}),"\n",(0,d.jsxs)(n.p,{children:["由于 JSON 文件格式的限制，",(0,d.jsx)(n.code,{children:"package.json"})," 中只能定义数字、字符串、布尔值、数组等简单类型的值，当我们需要设置函数类型的值时，建议在 Modern.js 配置文件中进行设置。"]}),"\n",(0,d.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["不建议同时使用 ",(0,d.jsx)(n.code,{children:"package.json"})," 和 ",(0,d.jsx)(n.code,{children:"modern.config.js"})," 进行配置。如果同时使用了两者并出现配置冲突，Modern.js 会在命令行进行提示。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"@modern-js/runtime"})," 导出了同名的 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"})," API，请注意区分。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"本地调试配置",children:["本地调试配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#本地调试配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["为了便于本地调试配置，Modern.js 支持在项目根目录下创建 ",(0,d.jsx)(n.code,{children:"modern.config.local.(ts|js|mjs)"})," 文件，用于覆盖 ",(0,d.jsx)(n.code,{children:"modern.config.(ts|js|mjs)"})," 中的配置选项。"]}),"\n",(0,d.jsxs)(n.h3,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["比如，项目的 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 中配置了端口号为 ",(0,d.jsx)(n.code,{children:"3000"}),":"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    port: 3000,\n  },\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.p,{children:["如果你在本地调试时需要将端口号修改为 ",(0,d.jsx)(n.code,{children:"3001"}),"，但是又不希望修改当前项目的 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 文件，那么可以创建一个 ",(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 文件，并添加以下配置："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.local.ts"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.local.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    port: 3001,\n  },\n});\n"})})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 文件中的配置会与 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 中的配置进行深层合并，并覆盖 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 中的配置选项，因此 ",(0,d.jsx)(n.code,{children:"server.port"})," 会被覆盖为 ",(0,d.jsx)(n.code,{children:"3001"}),"。"]}),"\n",(0,d.jsxs)(n.h3,{id:"注意事项-1",children:["注意事项",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-1",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在使用 ",(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 时，请注意以下事项："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 文件仅会在执行 ",(0,d.jsx)(n.code,{children:"modern dev"})," 或 ",(0,d.jsx)(n.code,{children:"modern start"})," 命令时被加载，当执行 ",(0,d.jsx)(n.code,{children:"modern build"})," 时不会被加载。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 文件的优先级不仅高于 ",(0,d.jsx)(n.code,{children:"modern.config.ts"}),"，也高于 ",(0,d.jsx)(n.code,{children:"package.json"})," 中的 ",(0,d.jsx)(n.code,{children:"modernConfig"})," 字段。"]}),"\n",(0,d.jsxs)(n.li,{children:["由于 ",(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 仅在本地调试时使用，因此不建议将其提交到代码仓库中，请确保项目的 ",(0,d.jsx)(n.code,{children:".gitignore"})," 文件中包含 ",(0,d.jsx)(n.code,{children:"modern.config.local.ts"})," 等文件。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:".gitingore"}),(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",meta:'title=".gitingore"',children:"modern.config.local.ts\nmodern.config.local.js\nmodern.config.local.mjs\n"})})]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);