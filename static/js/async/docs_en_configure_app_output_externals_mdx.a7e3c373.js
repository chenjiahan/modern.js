(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_output_externals_mdx"],{67596:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151");function i(e){let n=Object.assign({ul:"ul",li:"li",p:"p",strong:"strong",code:"code",a:"a",div:"div",h3:"h3",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string | object | function | RegExp"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["At build time, prevent some ",(0,r.jsx)(n.code,{children:"import"})," dependencies from being packed into bundles in your code, and instead fetch them externally at runtime."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please see: ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/externals/",target:"_blank",rel:"nofollow",children:"webpack Externals"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\nWhen using Rspack as the bundler, only the ",(0,r.jsx)(n.code,{children:"Record<string, string>"}),"type is supported."]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,r.jsxs)(n.p,{children:["Exclude the ",(0,r.jsx)(n.code,{children:"react-dom"})," dependency from the build product. To get this module at runtime, the value of ",(0,r.jsx)(n.code,{children:"react-dom"})," will globally retrieve the ",(0,r.jsx)(n.code,{children:"ReactDOM"})," variable."]}),"\n",(0,r.jsxs)(n.div,{className:"language-js",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    externals"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ReactDOM'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"\nWhen the build target is Web Worker, externals will not take effect. This is because the Worker environment can not access global variables."})})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},86525:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},toc:function(){return l},title:function(){return c},default:function(){return a}});var r=s("12151"),i=s.ir(s("67596"));let t={sidebar_label:"externals"},l=[],c="output.externals";function o(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputexternals",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputexternals",children:"#"}),"output.externals"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputexternals",target:"_blank",rel:"nofollow",children:"output.externals"}),"."]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);