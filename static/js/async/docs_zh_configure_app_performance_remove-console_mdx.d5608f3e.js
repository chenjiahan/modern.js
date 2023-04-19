(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_remove-console_mdx"],{13515:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s=r("12151"),o=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["在生产环境构建时，是否自动移除代码中的 ",(0,s.jsx)(n.code,{children:"console.xx"}),"。"]}),"\n",(0,s.jsxs)(n.h4,{id:"移除所有-console",children:["移除所有 console",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除所有-console",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"removeConsole"})," 被设置为 ",(0,s.jsx)(n.code,{children:"true"})," 时，会移除所有类型的 ",(0,s.jsx)(n.code,{children:"console.xx"}),"："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"移除特定的-console",children:["移除特定的 console",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除特定的-console",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你也可以指定仅移除特定类型的 ",(0,s.jsx)(n.code,{children:"console.xx"}),"，比如移除 ",(0,s.jsx)(n.code,{children:"console.log"})," 和 ",(0,s.jsx)(n.code,{children:"console.warn"}),"："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"目前支持配置以下类型的 console："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},27794:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return a},toc:function(){return d},default:function(){return t}});var s=r("12151"),o=r("23169"),c=r.ir(r("13515")),l={sidebar_label:"removeConsole"},a="performance.removeConsole",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"performance-removeconsole",children:["performance.removeConsole",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-removeconsole",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performanceremoveconsole",target:"_blank",rel:"noopener noreferrer",children:"performance.removeConsole"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);