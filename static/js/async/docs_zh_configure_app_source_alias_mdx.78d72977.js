(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_source_alias_mdx"],{3202:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("12151"),c=s("21447");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h4:"h4",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Record<string, string | string[]> | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["设置文件引用的别名，对应 webpack 的 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," 配置。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["对于 TypeScript 项目，只需要在 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 中配置 ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"compilerOptions.paths"})," 即可，Builder 会自动识别 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 里的别名，因此不需要额外配置 ",(0,r.jsx)(n.code,{children:"alias"})," 字段。\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["在使用 Rspack 作为打包工具时，只支持 ",(0,r.jsx)(n.code,{children:"Record<string, string> | Function"})," 类型。\n"]})]}),"\n",(0,r.jsxs)(n.h4,{id:"object-类型",children:["Object 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alias"})," 的值可以定义为 Object 类型，其中的相对路径会自动被 Builder 转换为绝对路径。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["以上配置完成后，如果在代码中引用 ",(0,r.jsx)(n.code,{children:"@common/Foo.tsx"}),", 则会映射到 ",(0,r.jsx)(n.code,{children:"<root>/src/common/Foo.tsx"})," 路径上。"]}),"\n",(0,r.jsxs)(n.h4,{id:"function-类型",children:["Function 类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alias"})," 的值定义为函数时，可以接受预设的 alias 对象，并对其进行修改。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"也可以在函数中返回一个新对象作为最终结果，新对象会覆盖预设的 alias 对象。"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},14165:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return t},default:function(){return d}});var r=s("12151"),c=s("21447"),i=s.ir(s("3202"));let a={sidebar_label:"alias"},o="source.alias",t=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source.alias",children:["source.alias",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source.alias",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcealias",target:"_blank",rel:"noopener noreferrer",children:"source.alias"}),"。\n"]})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);