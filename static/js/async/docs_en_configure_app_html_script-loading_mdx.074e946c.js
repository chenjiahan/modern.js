(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_script-loading_mdx"],{55886:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var i=r("9880"),s=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"'defer' | 'blocking' | 'module'"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"'defer'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Used to set how ",(0,i.jsx)(n.code,{children:"<script>"})," tags are loaded."]}),"\n",(0,i.jsxs)(n.h3,{id:"defer",children:["defer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defer",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the ",(0,i.jsx)(n.code,{children:"<script>"})," tag generated by Builder will automatically set the ",(0,i.jsx)(n.code,{children:"defer"})," attribute to avoid blocking the parsing and rendering of the page."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<head>\n  <script defer src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["When the browser encounters a ",(0,i.jsx)(n.code,{children:"<script>"})," tag with the defer attribute, it will download the script file asynchronously without blocking the parsing and rendering of the page. After the page is parsed and rendered, the browser executes the ",(0,i.jsx)(n.code,{children:"<script>"})," tags in the order they appear in the document.\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"blocking",children:["blocking",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Setting ",(0,i.jsx)(n.code,{children:"scriptLoading"})," to ",(0,i.jsx)(n.code,{children:"blocking"})," will remove the ",(0,i.jsx)(n.code,{children:"defer"})," attribute, and the script is executed synchronously, which means it will block the browser's parsing and rendering process until the script file is downloaded and executed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n    scriptLoading: 'blocking',\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you need to set ",(0,i.jsx)(n.code,{children:"blocking"}),", it is recommended to set ",(0,i.jsx)(n.code,{children:"html.inject"})," to ",(0,i.jsx)(n.code,{children:"'body'"})," to avoid page rendering being blocked."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<head></head>\n<body>\n  <script src="/static/js/main.js"></script>\n</body>\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"module",children:["module",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#module",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"scriptLoading"})," is set to ",(0,i.jsx)(n.code,{children:"module"}),", the script can support ESModule syntax, and the browser will automatically delay the execution of these scripts by default, which is similar to ",(0,i.jsx)(n.code,{children:"defer"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    scriptLoading: 'module',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<head>\n  <script type="module" src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},64794:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return a},default:function(){return o}});var i=r("9880"),s=r("23169"),d=r.ir(r("55886")),t={sidebar_label:"scriptLoading"},c="html.scriptLoading",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmlscriptloading",children:["html.scriptLoading",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlscriptloading",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlscriptloading",target:"_blank",rel:"noopener noreferrer",children:"html.scriptLoading"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(d.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);