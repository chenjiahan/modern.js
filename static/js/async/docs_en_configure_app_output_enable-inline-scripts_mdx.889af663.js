(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_output_enable-inline-scripts_mdx"],{67673:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t}});var i=n("12151"),l=n("21447");function r(s){let e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Type:"})," ",(0,i.jsx)(e.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Default:"})," ",(0,i.jsx)(e.code,{children:"false"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Bundler:"})," ",(0,i.jsx)(e.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Whether to inline output scripts files (.js files) into HTML with ",(0,i.jsx)(e.code,{children:"<script>"})," tags in production mode."]}),"\n",(0,i.jsx)(e.p,{children:"Note that, with this option on, the scripts files will no longer be written in dist directory, they will only exist inside the HTML file instead."}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive note",children:[(0,i.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.p,{children:["\nWhen using convention-based routing, you need to set ",(0,i.jsx)(e.a,{href:"https://modernjs.dev/en/configure/app/output/split-route-chunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(e.code,{children:"output.splitRouteChunks"})}),"to false if this option is turned on."]})})]}),"\n",(0,i.jsxs)(e.h3,{id:"example",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,i.jsx)(e.p,{children:"By default, we have following output files:"}),"\n",(0,i.jsxs)(e.div,{className:"language-bash",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist/html/main/index.html"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/css/style.css"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/js/main.js"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.p,{children:["After turn on the ",(0,i.jsx)(e.code,{children:"output.enableInlineScripts"})," option:"]}),"\n",(0,i.jsxs)(e.div,{className:"language-js",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    enableInlineScripts"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(e.p,{children:"The output files will become:"}),"\n",(0,i.jsxs)(e.div,{className:"language-bash",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist/html/main/index.html"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/css/style.css"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.p,{children:["And ",(0,i.jsx)(e.code,{children:"dist/static/js/main.js"})," will be inlined in ",(0,i.jsx)(e.code,{children:"index.html"}),":"]}),"\n",(0,i.jsxs)(e.div,{className:"language-html",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// content of dist/static/js/main.js"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,i.jsx)(e,Object.assign({},s,{children:(0,i.jsx)(r,s)})):r(s)}},48676:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return t},toc:function(){return c},title:function(){return o},default:function(){return d}});var i=n("12151"),l=n("21447"),r=n.ir(n("67673"));let t={sidebar_label:"enableInlineScripts"},c=[],o="output.enableInlineScripts";function a(s){let e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"outputenableinlinescripts",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#outputenableinlinescripts",children:"#"}),"output.enableInlineScripts"]}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive tip",children:[(0,i.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(e.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputenableinlinescripts",target:"_blank",rel:"noopener noreferrer",children:"output.enableInlineScripts"}),"."]})})]}),"\n","\n",(0,i.jsx)(r.default,{})]})}var d=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,i.jsx)(e,Object.assign({},s,{children:(0,i.jsx)(a,s)})):a(s)}}}]);