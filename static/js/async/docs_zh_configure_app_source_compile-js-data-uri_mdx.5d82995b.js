(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_source_compile-js-data-uri_mdx"],{7738:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151"),a=s("21447");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"对于使用 Data URI 引入的 JavaScript 代码，是否采用 babel 进行编译。"}),"\n",(0,r.jsx)(n.p,{children:"比如以下代码："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import x from 'data:text/javascript,export default 1;';\n\nimport 'data:text/javascript;charset=utf-8;base64,Y29uc29sZS5sb2coJ2lubGluZSAxJyk7';\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"添加以下配置来关闭："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    compileJsDataURI: false,\n  },\n};\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},49062:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return o},default:function(){return l}});var r=s("12151"),a=s("21447"),c=s.ir(s("7738")),t={sidebar_label:"compileJsDataURI"},i="source.compileJsDataURI",o=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source.compilejsdatauri",children:["source.compileJsDataURI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source.compilejsdatauri",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcecompilejsdatauri",target:"_blank",rel:"noopener noreferrer",children:"source.compileJsDataURI"}),"。\n"]})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);