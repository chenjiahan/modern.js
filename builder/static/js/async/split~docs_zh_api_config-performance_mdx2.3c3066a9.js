(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-performance_mdx2"],{42559:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return a},default:function(){return i}});var c=s("12151"),o=s("21447"),r={},l="",a=[{text:"移除所有 console",depth:4,id:"移除所有-console"},{text:"移除特定的 console",depth:4,id:"移除特定的-console"}];function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["在生产环境构建时，是否自动移除代码中的 ",(0,c.jsx)(n.code,{children:"console.xx"}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"移除所有-console",children:["移除所有 console",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除所有-console",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"removeConsole"})," 被设置为 ",(0,c.jsx)(n.code,{children:"true"})," 时，会移除所有类型的 ",(0,c.jsx)(n.code,{children:"console.xx"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"移除特定的-console",children:["移除特定的 console",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除特定的-console",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你也可以指定仅移除特定类型的 ",(0,c.jsx)(n.code,{children:"console.xx"}),"，比如移除 ",(0,c.jsx)(n.code,{children:"console.log"})," 和 ",(0,c.jsx)(n.code,{children:"console.warn"}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"目前支持配置以下类型的 console："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}]);