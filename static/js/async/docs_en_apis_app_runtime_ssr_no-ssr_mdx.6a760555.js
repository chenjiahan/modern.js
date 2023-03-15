(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_ssr_no-ssr_mdx"],{10131:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return i},title:function(){return t},default:function(){return c}});var r=n("12151");let o={title:"NoSSR"},i=[{id:"usage",text:"Usage",depth:2},{id:"example",text:"Example",depth:2},{id:"scene",text:"Scene",depth:2}],t="NoSSR";function l(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"nossr",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"}),"NoSSR"]}),"\n",(0,r.jsx)(s.p,{children:"The content wrapped by NoSSR will not be rendered at the server, nor will it be rendered during the client side hydrate. it will only be rendered immediately after the entire app is rendered."}),"\n",(0,r.jsxs)(s.h2,{id:"usage",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { NoSSR } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">...</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"example",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,r.jsxs)(s.p,{children:["In the following code, the ",(0,r.jsx)(s.code,{children:"Time"})," component is used to display the current time. Since the time obtained by server-side rendering and client side hydrate are diff, React will throw an exception. For this case, you can use ",(0,r.jsx)(s.code,{children:"NoSSR"})," to optimize:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { NoSSR } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Time"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Time: {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Date"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".now"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()}</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"scene",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#scene",children:"#"}),"Scene"]}),"\n",(0,r.jsx)(s.p,{children:"In CSR, it is often necessary to render different content according to the browser UA, or a parameter of the current page URL. If the application switches directly to SSR at this time, it is very likely that the results will not meet the expectations."}),"\n",(0,r.jsx)(s.p,{children:"Modern.js provides complete browser side information in the SSR context, which can be used to determine the rendering result of the component on the server side."}),"\n",(0,r.jsx)(s.p,{children:"Even so, if there is too much logic in the application, or the developer wants to use the context later, or does not want some content to be rendered at the server side. developer can use the NoSSR component to exclude this part from server-side rendering."})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);