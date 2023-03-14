(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_en_guides_advanced-features_code-split_mdx"],{2221:function(s,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var o in e)Object.defineProperty(s,o,{enumerable:!0,get:e[o]})}(e,{frontmatter:function(){return r},toc:function(){return l},title:function(){return i},default:function(){return t}});var n=o("41660");let r={title:"Code Split",sidebar_position:6},l=[{id:"import",text:"import",depth:2},{id:"reactlazy",text:"React.lazy",depth:2},{id:"loadable",text:"loadable",depth:2}],i="Code Split";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",ul:"ul",li:"li",h2:"h2",button:"button",pre:"pre",span:"span"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"code-split",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#code-split",children:"#"}),"Code Split"]}),"\n",(0,n.jsx)(e.p,{children:"Code Split is a common way to optimizing front-end resource loading. This doc will introduce three methods supported by Modern.js:"}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive info",children:[(0,n.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsxs)(e.p,{children:["\nWhen you use Modern.js ",(0,n.jsx)(e.a,{href:"/en/guides/basic-features/routes.html#conventional-routing",children:"Conventional routing"}),", by default it will do code splitting based on routing components, wrapping ",(0,n.jsx)(e.code,{children:"Suspense"})," components, no need to do code splitting by yourself."]})})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"import"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"React.lazy"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"loadable"})}),"\n"]}),"\n",(0,n.jsxs)(e.h2,{id:"import",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"}),"import"]}),"\n",(0,n.jsxs)(e.p,{children:["use dynamic ",(0,n.jsx)(e.code,{children:"import()"}),"，",(0,n.jsx)(e.code,{children:"import"})," The JS modules pass to this API will be packaged into a separate JS file as a new packaging entry, for example:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./math'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(math "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"math"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".add"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"16"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"26"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"The JS modules corresponding to the './math' path will be packaged in a separate JS file."}),"\n",(0,n.jsxs)(e.h2,{id:"reactlazy",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#reactlazy",children:"#"}),"React.lazy"]}),"\n",(0,n.jsx)(e.p,{children:"The officially way provides by React to split component code."}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive caution",children:[(0,n.jsx)(e.p,{className:"modern-directive-title",children:"CAUTION"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsx)(e.p,{children:"\nSSR is not supported in React 17 and below, and it is recommended that SSR applications for React 17 use loadable."})})]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" React"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Suspense } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"OtherComponent"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"React"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".lazy"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./OtherComponent'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AnotherComponent"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"React"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".lazy"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./AnotherComponent'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MyComponent"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Suspense fallback"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{<div>Loading"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"...</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"section"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"OtherComponent "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"AnotherComponent "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"section"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Suspense"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"div"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["For detail, see ",(0,n.jsx)(e.a,{href:"https://reactjs.org/docs/code-splitting.html#reactlazy",target:"_blank",rel:"nofollow",children:"React lazy"}),"."]}),"\n",(0,n.jsxs)(e.h2,{id:"loadable",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"}),"loadable"]}),"\n",(0,n.jsxs)(e.p,{children:["use ",(0,n.jsx)(e.code,{children:"loadable"})," API，for example:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" loadable "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/loadable'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"OtherComponent"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"loadable"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./OtherComponent'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MyComponent"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"OtherComponent"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["For detail, see ",(0,n.jsx)(e.a,{href:"/en/apis/app/runtime/utility/loadable.html",children:"loadable API"}),"."]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive info",children:[(0,n.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsxs)(e.p,{children:["\nSSR is supported out of the box by ",(0,n.jsx)(e.code,{children:"loadable"}),"."]})})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(c,s)})):c(s)}}}]);