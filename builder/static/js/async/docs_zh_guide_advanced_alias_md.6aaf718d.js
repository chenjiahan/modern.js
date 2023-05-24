(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_alias_md"],{24431:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return o},default:function(){return l}});var r=s("9880"),c=s("23169"),i={},a="路径别名",o=[{text:"通过 source.alias 配置",depth:2,id:"通过-sourcealias-配置"},{text:"通过 tsconfig.json 中的 paths 配置",depth:2,id:"通过-tsconfigjson-中的-paths-配置"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"路径别名",children:["路径别名",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路径别名",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"路径别名（alias）允许开发者为模块定义别名，以便于在代码中更方便的引用它们。"}),"\n",(0,r.jsxs)(n.p,{children:["例如，假如你在项目中经常引用 ",(0,r.jsx)(n.code,{children:"src/common/request.ts"})," 模块，你可以为它定义一个别名 ",(0,r.jsx)(n.code,{children:"@request"}),"，然后在代码中通过 ",(0,r.jsx)(n.code,{children:"import request from '@request'"})," 来引用它，而不需要每次都写出完整的相对路径。同时，这也允许你将模块移动到不同的位置，而不需要更新代码中的所有 import 语法。"]}),"\n",(0,r.jsx)(n.p,{children:"在 Builder 中，你有两种方式可以设置路径别名:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["通过 ",(0,r.jsx)(n.a,{href:"/api/config-source#sourcealias",children:"source.alias"})," 配置。"]}),"\n",(0,r.jsxs)(n.li,{children:["通过 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 中的 ",(0,r.jsx)(n.code,{children:"paths"})," 配置。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"通过-sourcealias-配置",children:["通过 ",(0,r.jsx)(n.code,{children:"source.alias"})," 配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-sourcealias-配置",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/config-source#sourcealias",children:"source.alias"})," 对应 webpack 原生的 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," 配置，你可以通过对象或者函数的方式进行配置。"]}),"\n",(0,r.jsx)(n.p,{children:"首先你可以通过对象的方式进行配置，比如："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"其中的相对路径会被 Builder 自动补全为绝对路径。"}),"\n",(0,r.jsxs)(n.p,{children:["你也可以配置为一个函数，拿到预设的 ",(0,r.jsx)(n.code,{children:"alias"})," 对象，对其进行修改，比如："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n      return alias;\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"通过-tsconfigjson-中的-paths-配置",children:["通过 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 中的 ",(0,r.jsx)(n.code,{children:"paths"})," 配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-tsconfigjson-中的-paths-配置",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["除了 ",(0,r.jsx)(n.code,{children:"source.alias"}),"，你还可以通过 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 中的 ",(0,r.jsx)(n.code,{children:"paths"})," 进行配置，这是我们在 TypeScript 项目中推荐使用的方式，因为可以解决路径别名的类型问题。"]}),"\n",(0,r.jsx)(n.p,{children:"比如："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common/*"]\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"优先级"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"paths"})," 配置的优先级高于 ",(0,r.jsx)(n.code,{children:"source.alias"}),"。\n"]})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);