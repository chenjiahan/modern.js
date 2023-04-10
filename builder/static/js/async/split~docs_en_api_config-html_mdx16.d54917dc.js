(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-html_mdx16"],{7130:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return r},default:function(){return l}});var s=t("12151"),i=t("21447"),c={},d="",r=[{text:"Default inject position",depth:4,id:"default-inject-position"},{text:"Inject into body",depth:4,id:"inject-into-body"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"'head' | 'body' | 'true' | false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set the inject position of the ",(0,s.jsx)(n.code,{children:"<script>"})," tag."]}),"\n",(0,s.jsx)(n.p,{children:"Can be set to the following values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'head'"}),": The script tag will be inject inside the head tag."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'body'"}),": The script tag is inject at the end of the body tag."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"true"}),": The result depends on the scriptLoading config of ",(0,s.jsx)(n.code,{children:"html-webpack-plugin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"false"}),": script tags will not be injected."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"default-inject-position",children:["Default inject position",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-inject-position",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The script tag is inside the head tag by default:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"inject-into-body",children:["Inject into body",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-into-body",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Add the following config to inject script into the body tag:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"You will see that the script tag is generated at the end of the body tag:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n  </body>\n</html>\n'})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);