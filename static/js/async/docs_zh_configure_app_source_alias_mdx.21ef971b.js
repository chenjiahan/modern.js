(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_alias_mdx"],{73303:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),c=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, string | string[]> | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["设置文件引用的别名，对应 webpack 的 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," 配置。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["对于 TypeScript 项目，只需要在 ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," 中配置 ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"compilerOptions.paths"})," 即可，Builder 会自动识别 ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," 里的别名，因此不需要额外配置 ",(0,s.jsx)(n.code,{children:"alias"})," 字段。\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"alias"})," 的值可以定义为 Object 类型，其中的相对路径会自动被 Builder 转换为绝对路径。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["以上配置完成后，如果在代码中引用 ",(0,s.jsx)(n.code,{children:"@common/Foo.tsx"}),", 则会映射到 ",(0,s.jsx)(n.code,{children:"<root>/src/common/Foo.tsx"})," 路径上。"]}),"\n",(0,s.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"alias"})," 的值定义为函数时，可以接受预设的 alias 对象，并对其进行修改。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"也可以在函数中返回一个新对象作为最终结果，新对象会覆盖预设的 alias 对象。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"精确匹配",children:["精确匹配",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#精确匹配",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况，",(0,s.jsx)(n.code,{children:"source.alias"})," 会自动匹配子路径，比如以下配置："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"它的匹配结果如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // 解析为 `./src/common`\nimport b from '@common/util'; // 解析为 `./src/common/util`\n"})}),"\n",(0,s.jsxs)(n.p,{children:["你可以添加 ",(0,s.jsx)(n.code,{children:"$"})," 符号来开启精确匹配，开启后将不会自动匹配子路径。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      '@common$': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"它的匹配结果如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // 解析为 `./src/common`\nimport b from '@common/util'; // 保持 `@common/util` 不变\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"处理-npm-包",children:["处理 npm 包",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#处理-npm-包",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你可以使用 ",(0,s.jsx)(n.code,{children:"alias"})," 将某个 npm 包指向统一的目录。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如项目中安装了多份 ",(0,s.jsx)(n.code,{children:"react"}),"，你可以将 ",(0,s.jsx)(n.code,{children:"react"})," 统一指向根目录的 ",(0,s.jsx)(n.code,{children:"node_modules"})," 中安装的版本，避免出现打包多份 React 代码的问题。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      react: path.resolve(__dirname, './node_modules/react'),\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"当你在使用 alias 处理 npm 包时，请留意项目中是否使用了这个包不同的 major 版本。"}),"\n",(0,s.jsx)(n.p,{children:"比如你的项目中某个模块或 npm 依赖使用了 React 18 的 API，如果你将 React alias 到 17 版本，就会导致该模块无法引用到 React 18 的 API，导致代码异常。"})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},11735:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return l},default:function(){return t}});var s=r("9880"),c=r("23169"),i=r.ir(r("73303")),a={sidebar_label:"alias"},o="source.alias",l=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcealias",children:["source.alias",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealias",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcealias",target:"_blank",rel:"noopener noreferrer",children:"source.alias"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);