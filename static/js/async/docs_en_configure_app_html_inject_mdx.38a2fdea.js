(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_html_inject_mdx"],{42553:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return l}});var r=n("12151");function i(s){let e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Type:"})," ",(0,r.jsx)(e.code,{children:"'head' | 'body' | 'true' | false"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Default:"})," ",(0,r.jsx)(e.code,{children:"'head'"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Set the inject position of the ",(0,r.jsx)(e.code,{children:"<script>"})," tag."]}),"\n",(0,r.jsx)(e.p,{children:"Can be set to the following values:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'head'"}),": The script tag will be inject inside the head tag."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'body'"}),": The script tag is inject at the end of the body tag."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"true"}),": The result depends on the scriptLoading config of ",(0,r.jsx)(e.code,{children:"html-webpack-plugin"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"false"}),": script tags will not be injected."]}),"\n"]}),"\n",(0,r.jsxs)(e.h4,{id:"default-inject-position",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#default-inject-position",children:"#"}),"Default inject position"]}),"\n",(0,r.jsx)(e.p,{children:"The script tag is inside the head tag by default:"}),"\n",(0,r.jsxs)(e.div,{className:"language-html",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/runtime-main.js"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/main.js"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/css/main.css"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"rel"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"stylesheet"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"root"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h4,{id:"inject-into-body",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-into-body",children:"#"}),"Inject into body"]}),"\n",(0,r.jsx)(e.p,{children:"Add the following config to inject script into the body tag:"}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    inject"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"You will see that the script tag is generated at the end of the body tag:"}),"\n",(0,r.jsxs)(e.div,{className:"language-html",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"title"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/css/main.css"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"rel"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"stylesheet"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"head"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"root"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/runtime-main.js"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/static/js/main.js"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"html"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}var l=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(i,s)})):i(s)}},73087:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return l},toc:function(){return o},title:function(){return t},default:function(){return a}});var r=n("12151"),i=n.ir(n("42553"));let l={sidebar_label:"inject"},o=[],t="html.inject";function c(s){let e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"htmlinject",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinject",children:"#"}),"html.inject"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlinject",target:"_blank",rel:"nofollow",children:"html.inject"}),"."]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);