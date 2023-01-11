"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[2870],{72999:function(s,e,n){n.r(e),n.d(e,{content:function(){return a},frontmatter:function(){return c},toc:function(){return r}});var l=n(39980);const c=void 0,r=[{id:"boolean-\u7c7b\u578b",text:"Boolean \u7c7b\u578b",depth:4},{id:"string-\u7c7b\u578b",text:"String \u7c7b\u578b",depth:4}],a='"- Type: `boolean | string`\\n- Default: `\'/\'`\\n\\n\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u9759\u6001\u8d44\u6e90 URL \u524d\u7f00\uff0c\u5bf9\u5e94 webpack \u7684 [output.publicPath](https://webpack.js.org/guides/public-path/) \u914d\u7f6e\u3002\\n\\n`assetPrefix` \u4f1a\u5f71\u54cd\u6784\u5efa\u4ea7\u7269\u4e2d\u7edd\u5927\u90e8\u5206\u9759\u6001\u8d44\u6e90\u7684 URL\uff0c\u5305\u62ec JavaScript \u6587\u4ef6\u3001CSS \u6587\u4ef6\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u3002\u5982\u679c\u6307\u5b9a\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u503c\uff0c\u5219\u5728\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0 404 \u9519\u8bef\u3002\\n\\n\u8be5\u914d\u7f6e\u9879\u4ec5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u4f7f\u7528 `output.assetPrefix` \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e\u3002\\n\\n#### Boolean \u7c7b\u578b\\n\\n\u5982\u679c\u8bbe\u7f6e `assetPrefix` \u4e3a `true`\uff0cBuilder \u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa `//ip:port/` \u4f5c\u4e3a URL \u524d\u7f00\uff1a\\n\\n```js\\nexport default {\\n  dev: {\\n    assetPrefix: true,\\n  },\\n};\\n```\\n\\n\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a\\n\\n```js\\n<script defer src=\\"//${ip}:8080/static/js/main.js\\"><\/script>\\n```\\n\\n\u5982\u679c\u8bbe\u7f6e `assetPrefix` \u4e3a `false` \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 `/` \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\u3002\\n\\n#### String \u7c7b\u578b\\n\\n\u5f53 `assetPrefix` \u7684\u503c\u4e3a `string` \u7c7b\u578b\u65f6\uff0c\u5b57\u7b26\u4e32\u4f1a\u4f5c\u4e3a\u524d\u7f00\uff0c\u81ea\u52a8\u62fc\u63a5\u5230\u9759\u6001\u8d44\u6e90\u8bbf\u95ee URL \u4e0a\uff1a\\n\\n```js\\nexport default {\\n  dev: {\\n    assetPrefix: \'http://example.com/assets/\',\\n  },\\n};\\n```\\n\\n\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a\\n\\n```js\\n<script defer src=\\"http://example.com/assets/static/js/main.js\\"><\/script>\\n```\\n"';function i(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"boolean | string"})]}),"\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"'/'"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u9759\u6001\u8d44\u6e90 URL \u524d\u7f00\uff0c\u5bf9\u5e94 webpack \u7684 ",(0,l.jsx)(e.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"nofollow",children:"output.publicPath"})," \u914d\u7f6e\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"assetPrefix"})," \u4f1a\u5f71\u54cd\u6784\u5efa\u4ea7\u7269\u4e2d\u7edd\u5927\u90e8\u5206\u9759\u6001\u8d44\u6e90\u7684 URL\uff0c\u5305\u62ec JavaScript \u6587\u4ef6\u3001CSS \u6587\u4ef6\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u3002\u5982\u679c\u6307\u5b9a\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u503c\uff0c\u5219\u5728\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0 404 \u9519\u8bef\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8be5\u914d\u7f6e\u9879\u4ec5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"output.assetPrefix"})," \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e\u3002"]}),"\n",(0,l.jsxs)(e.h4,{id:"boolean-\u7c7b\u578b",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-\u7c7b\u578b",children:"#"}),"Boolean \u7c7b\u578b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u8bbe\u7f6e ",(0,l.jsx)(e.code,{children:"assetPrefix"})," \u4e3a ",(0,l.jsx)(e.code,{children:"true"}),"\uff0cBuilder \u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa ",(0,l.jsx)(e.code,{children:"//ip:port/"})," \u4f5c\u4e3a URL \u524d\u7f00\uff1a"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"assetPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"<script"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"defer"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"//${ip}:8080/static/js/main.js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u8bbe\u7f6e ",(0,l.jsx)(e.code,{children:"assetPrefix"})," \u4e3a ",(0,l.jsx)(e.code,{children:"false"})," \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"/"})," \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\u3002"]}),"\n",(0,l.jsxs)(e.h4,{id:"string-\u7c7b\u578b",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#string-\u7c7b\u578b",children:"#"}),"String \u7c7b\u578b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53 ",(0,l.jsx)(e.code,{children:"assetPrefix"})," \u7684\u503c\u4e3a ",(0,l.jsx)(e.code,{children:"string"})," \u7c7b\u578b\u65f6\uff0c\u5b57\u7b26\u4e32\u4f1a\u4f5c\u4e3a\u524d\u7f00\uff0c\u81ea\u52a8\u62fc\u63a5\u5230\u9759\u6001\u8d44\u6e90\u8bbf\u95ee URL \u4e0a\uff1a"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"assetPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://example.com/assets/"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"<script"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"defer"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://example.com/assets/static/js/main.js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}}}]);