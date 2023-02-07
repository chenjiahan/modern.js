"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3839,2870,5077,951,4263,4572],{5190:function(s,e,n){n.r(e),n.d(e,{content:function(){return p},frontmatter:function(){return d},title:function(){return x},toc:function(){return h}});var r=n(39980),l=n(74816),o=n(69995),i=n(77942),c=n(98642),t=n(63831),a=n(24766);const d={extractApiHeaders:[2]},h=[{id:"devassetprefix",text:"dev.assetPrefix",depth:2},{id:"devhmr",text:"dev.hmr",depth:2},{id:"devhttps",text:"dev.https",depth:2},{id:"devport",text:"dev.port",depth:2},{id:"devprogressbar",text:"dev.progressBar",depth:2},{id:"devstarturl",text:"dev.startUrl",depth:2}],x="Dev Config",p="\"---\\nextractApiHeaders: [2]\\n---\\n\\n# Dev Config\\n\\n\u672c\u7ae0\u8282\u63cf\u8ff0\u4e86 Builder \u4e2d\u4e0e\u672c\u5730\u5f00\u53d1\u6709\u5173\u7684\u914d\u7f6e\u3002\\n\\n## dev.assetPrefix\\n\\nimport AssetPrefix from '@zh/config/dev/assetPrefix.md';\\n\\n<AssetPrefix />\\n\\n## dev.hmr\\n\\nimport Hmr from '@zh/config/dev/hmr.md';\\n\\n<Hmr />\\n\\n## dev.https\\n\\nimport Https from '@zh/config/dev/https.md';\\n\\n<Https />\\n\\n## dev.port\\n\\nimport Port from '@zh/config/dev/port.md';\\n\\n<Port />\\n\\n## dev.progressBar\\n\\nimport ProgressBar from '@zh/config/dev/progressBar.md';\\n\\n<ProgressBar />\\n\\n## dev.startUrl\\n\\nimport StartUrl from '@zh/config/dev/startUrl.md';\\n\\n<StartUrl />\\n\"";function j(s){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"dev-config",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"}),"Dev Config"]}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u7ae0\u8282\u63cf\u8ff0\u4e86 Builder \u4e2d\u4e0e\u672c\u5730\u5f00\u53d1\u6709\u5173\u7684\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(e.h2,{id:"devassetprefix",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"}),"dev.assetPrefix"]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"devhmr",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devhmr",children:"#"}),"dev.hmr"]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"devhttps",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"}),"dev.https"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"devport",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devport",children:"#"}),"dev.port"]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"devprogressbar",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devprogressbar",children:"#"}),"dev.progressBar"]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"devstarturl",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"}),"dev.startUrl"]}),"\n","\n",(0,r.jsx)(a.default,{})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(j,s)})):j(s)}},74816:function(s,e,n){n.r(e),n.d(e,{content:function(){return i},frontmatter:function(){return l},toc:function(){return o}});var r=n(39980);const l=void 0,o=[{id:"boolean-\u7c7b\u578b",text:"Boolean \u7c7b\u578b",depth:4},{id:"string-\u7c7b\u578b",text:"String \u7c7b\u578b",depth:4}],i='"- **\u7c7b\u578b\uff1a** `boolean | string`\\n- **\u9ed8\u8ba4\u503c\uff1a** `\'/\'`\\n\\n\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u9759\u6001\u8d44\u6e90 URL \u524d\u7f00\uff0c\u5bf9\u5e94 webpack \u7684 [output.publicPath](https://webpack.js.org/guides/public-path/) \u914d\u7f6e\u3002\\n\\n`assetPrefix` \u4f1a\u5f71\u54cd\u6784\u5efa\u4ea7\u7269\u4e2d\u7edd\u5927\u90e8\u5206\u9759\u6001\u8d44\u6e90\u7684 URL\uff0c\u5305\u62ec JavaScript \u6587\u4ef6\u3001CSS \u6587\u4ef6\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u3002\u5982\u679c\u6307\u5b9a\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u503c\uff0c\u5219\u5728\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0 404 \u9519\u8bef\u3002\\n\\n\u8be5\u914d\u7f6e\u9879\u4ec5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u4f7f\u7528 `output.assetPrefix` \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e\u3002\\n\\n#### Boolean \u7c7b\u578b\\n\\n\u5982\u679c\u8bbe\u7f6e `assetPrefix` \u4e3a `true`\uff0cBuilder \u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa `//ip:port/` \u4f5c\u4e3a URL \u524d\u7f00\uff1a\\n\\n```js\\nexport default {\\n  dev: {\\n    assetPrefix: true,\\n  },\\n};\\n```\\n\\n\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a\\n\\n```js\\n<script defer src=\\"//${ip}:8080/static/js/main.js\\"><\/script>\\n```\\n\\n\u5982\u679c\u8bbe\u7f6e `assetPrefix` \u4e3a `false` \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 `/` \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\u3002\\n\\n#### String \u7c7b\u578b\\n\\n\u5f53 `assetPrefix` \u7684\u503c\u4e3a `string` \u7c7b\u578b\u65f6\uff0c\u5b57\u7b26\u4e32\u4f1a\u4f5c\u4e3a\u524d\u7f00\uff0c\u81ea\u52a8\u62fc\u63a5\u5230\u9759\u6001\u8d44\u6e90\u8bbf\u95ee URL \u4e0a\uff1a\\n\\n```js\\nexport default {\\n  dev: {\\n    assetPrefix: \'http://example.com/assets/\',\\n  },\\n};\\n```\\n\\n\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a\\n\\n```js\\n<script defer src=\\"http://example.com/assets/static/js/main.js\\"><\/script>\\n```\\n"';function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,r.jsx)(e.code,{children:"boolean | string"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"'/'"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u9759\u6001\u8d44\u6e90 URL \u524d\u7f00\uff0c\u5bf9\u5e94 webpack \u7684 ",(0,r.jsx)(e.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"nofollow",children:"output.publicPath"})," \u914d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"assetPrefix"})," \u4f1a\u5f71\u54cd\u6784\u5efa\u4ea7\u7269\u4e2d\u7edd\u5927\u90e8\u5206\u9759\u6001\u8d44\u6e90\u7684 URL\uff0c\u5305\u62ec JavaScript \u6587\u4ef6\u3001CSS \u6587\u4ef6\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u3002\u5982\u679c\u6307\u5b9a\u4e86\u4e00\u4e2a\u9519\u8bef\u7684\u503c\uff0c\u5219\u5728\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0 404 \u9519\u8bef\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8be5\u914d\u7f6e\u9879\u4ec5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"output.assetPrefix"})," \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e\u3002"]}),"\n",(0,r.jsxs)(e.h4,{id:"boolean-\u7c7b\u578b",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-\u7c7b\u578b",children:"#"}),"Boolean \u7c7b\u578b"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u8bbe\u7f6e ",(0,r.jsx)(e.code,{children:"assetPrefix"})," \u4e3a ",(0,r.jsx)(e.code,{children:"true"}),"\uff0cBuilder \u4f1a\u81ea\u52a8\u8ba1\u7b97\u51fa ",(0,r.jsx)(e.code,{children:"//ip:port/"})," \u4f5c\u4e3a URL \u524d\u7f00\uff1a"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    assetPrefix"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"//${ip}:8080/static/js/main.js"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u8bbe\u7f6e ",(0,r.jsx)(e.code,{children:"assetPrefix"})," \u4e3a ",(0,r.jsx)(e.code,{children:"false"})," \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"/"})," \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\u3002"]}),"\n",(0,r.jsxs)(e.h4,{id:"string-\u7c7b\u578b",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#string-\u7c7b\u578b",children:"#"}),"String \u7c7b\u578b"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53 ",(0,r.jsx)(e.code,{children:"assetPrefix"})," \u7684\u503c\u4e3a ",(0,r.jsx)(e.code,{children:"string"})," \u7c7b\u578b\u65f6\uff0c\u5b57\u7b26\u4e32\u4f1a\u4f5c\u4e3a\u524d\u7f00\uff0c\u81ea\u52a8\u62fc\u63a5\u5230\u9759\u6001\u8d44\u6e90\u8bbf\u95ee URL \u4e0a\uff1a"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    assetPrefix"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://example.com/assets/'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"http://example.com/assets/static/js/main.js"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}},69995:function(s,e,n){n.r(e),n.d(e,{content:function(){return i},frontmatter:function(){return l},toc:function(){return o}});var r=n(39980);const l=void 0,o=[],i='"- **\u7c7b\u578b\uff1a** `boolean`\\n- **\u9ed8\u8ba4\u503c\uff1a** `true`\\n\\n\u662f\u5426\u5f00\u542f Hot Module Replacement \u70ed\u66f4\u65b0\u80fd\u529b\u3002\\n\\n\u5f53 `hmr` \u8bbe\u7f6e\u4e3a `false` \u65f6\uff0c\u5c06\u4e0d\u518d\u63d0\u4f9b\u70ed\u66f4\u65b0\u548c react-refresh \u529f\u80fd\u3002\\n\\n```js\\nexport default {\\n  dev: {\\n    hmr: false,\\n  },\\n};\\n```\\n"';function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,r.jsx)(e.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u662f\u5426\u5f00\u542f Hot Module Replacement \u70ed\u66f4\u65b0\u80fd\u529b\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53 ",(0,r.jsx)(e.code,{children:"hmr"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(e.code,{children:"false"})," \u65f6\uff0c\u5c06\u4e0d\u518d\u63d0\u4f9b\u70ed\u66f4\u65b0\u548c react-refresh \u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    hmr"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}},98642:function(s,e,n){n.r(e),n.d(e,{content:function(){return i},frontmatter:function(){return l},toc:function(){return o}});var r=n(39980);const l=void 0,o=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3}],i='"- **\u7c7b\u578b\uff1a** `number`\\n- **\u9ed8\u8ba4\u503c\uff1a** `8080`\\n\\n\u8bbe\u7f6e Dev Server \u76d1\u542c\u7684\u7aef\u53e3\u53f7\u3002\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDev Server \u4f1a\u76d1\u542c 8080 \u7aef\u53e3\uff0c\u5e76\u5728\u7aef\u53e3\u88ab\u5360\u7528\u65f6\u81ea\u52a8\u9012\u589e\u7aef\u53e3\u53f7\u3002\\n\\n### \u793a\u4f8b\\n\\n\u5c06\u7aef\u53e3\u8bbe\u7f6e\u4e3a `3000`\uff1a\\n\\n```ts\\nexport default {\\n  dev: {\\n    port: 3000,\\n  },\\n};\\n```\\n"';function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,r.jsx)(e.code,{children:"number"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"8080"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8bbe\u7f6e Dev Server \u76d1\u542c\u7684\u7aef\u53e3\u53f7\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDev Server \u4f1a\u76d1\u542c 8080 \u7aef\u53e3\uff0c\u5e76\u5728\u7aef\u53e3\u88ab\u5360\u7528\u65f6\u81ea\u52a8\u9012\u589e\u7aef\u53e3\u53f7\u3002"}),"\n",(0,r.jsxs)(e.h3,{id:"\u793a\u4f8b",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5c06\u7aef\u53e3\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(e.code,{children:"3000"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    port"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3000"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}},63831:function(s,e,n){n.r(e),n.d(e,{content:function(){return i},frontmatter:function(){return l},toc:function(){return o}});var r=n(39980);const l=void 0,o=[],i="\"- **\u7c7b\u578b\uff1a**\\n\\n```ts\\ntype ProgressBar =\\n  | boolean\\n  | {\\n      id?: string;\\n    };\\n```\\n\\n- **\u9ed8\u8ba4\u503c\uff1a** `true`\\n\\n\u662f\u5426\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c55\u793a\u8fdb\u5ea6\u6761\u3002\\n\\n```js\\nexport default {\\n  dev: {\\n    progressBar: false,\\n  },\\n};\\n```\\n\\n\u5982\u679c\u9700\u8981\u4fee\u6539\u8fdb\u5ea6\u6761\u5de6\u4fa7\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\uff0c\u53ef\u4ee5\u8bbe\u7f6e `id` \u9009\u9879\uff1a\\n\\n```ts\\nexport default {\\n  dev: {\\n    progressBar: {\\n      id: 'Some Text',\\n    },\\n  },\\n};\\n```\\n\"";function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})}),"\n"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ProgressBar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      id"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    };"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u662f\u5426\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c55\u793a\u8fdb\u5ea6\u6761\u3002"}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    progressBar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u9700\u8981\u4fee\u6539\u8fdb\u5ea6\u6761\u5de6\u4fa7\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.jsx)(e.code,{children:"id"})," \u9009\u9879\uff1a"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    progressBar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      id"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Some Text'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}},24766:function(s,e,n){n.r(e),n.d(e,{content:function(){return i},frontmatter:function(){return l},toc:function(){return o}});var r=n(39980);const l=void 0,o=[{id:"\u7aef\u53e3\u53f7\u5360\u4f4d\u7b26",text:"\u7aef\u53e3\u53f7\u5360\u4f4d\u7b26",depth:2}],i="\"- **\u7c7b\u578b\uff1a** `boolean | string | string[] | undefined`\\n- **\u9ed8\u8ba4\u503c\uff1a** `undefined`\\n\\n`dev.startUrl` \u7528\u4e8e\u8bbe\u7f6e Dev Server \u542f\u52a8\u65f6\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7684\u9875\u9762 URL\u3002\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDev Server \u542f\u52a8\u65f6\u4e0d\u4f1a\u6253\u5f00\u4efb\u4f55\u9875\u9762\u3002\\n\\n\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5982\u4e0b\u7684\u503c\uff1a\\n\\n```js\\nexport default {\\n  dev: {\\n    // \u6253\u5f00\u9879\u76ee\u7684\u9ed8\u8ba4\u9875\u9762\uff0c\u7b49\u4ef7\u4e8e `http://localhost:<port>`\\n    startUrl: true,\\n    // \u6253\u5f00\u6307\u5b9a\u7684\u9875\u9762\\n    startUrl: 'http://localhost:8080',\\n    // \u6253\u5f00\u591a\u4e2a\u9875\u9762\\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\\n  },\\n};\\n```\\n\\n## \u7aef\u53e3\u53f7\u5360\u4f4d\u7b26\\n\\n\u7531\u4e8e\u7aef\u53e3\u53f7\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u52a8\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `<port>` \u5360\u4f4d\u7b26\u6765\u6307\u4ee3\u5f53\u524d\u7aef\u53e3\u53f7\uff0cBuilder \u4f1a\u81ea\u52a8\u5c06\u5360\u4f4d\u7b26\u66ff\u6362\u4e3a\u5b9e\u9645\u76d1\u542c\u7684\u7aef\u53e3\u53f7\u3002\\n\\n```js\\nexport default {\\n  dev: {\\n    startUrl: 'http://localhost:<port>/home',\\n  },\\n};\\n```\\n\"";function c(s){const e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",a:"a"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7c7b\u578b\uff1a"})," ",(0,r.jsx)(e.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c\uff1a"})," ",(0,r.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"dev.startUrl"})," \u7528\u4e8e\u8bbe\u7f6e Dev Server \u542f\u52a8\u65f6\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7684\u9875\u9762 URL\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDev Server \u542f\u52a8\u65f6\u4e0d\u4f1a\u6253\u5f00\u4efb\u4f55\u9875\u9762\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5982\u4e0b\u7684\u503c\uff1a"}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// \u6253\u5f00\u9879\u76ee\u7684\u9ed8\u8ba4\u9875\u9762\uff0c\u7b49\u4ef7\u4e8e `http://localhost:<port>`"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// \u6253\u5f00\u6307\u5b9a\u7684\u9875\u9762"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:8080'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// \u6253\u5f00\u591a\u4e2a\u9875\u9762"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:8080'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:8080/about'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"\u7aef\u53e3\u53f7\u5360\u4f4d\u7b26",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7aef\u53e3\u53f7\u5360\u4f4d\u7b26",children:"#"}),"\u7aef\u53e3\u53f7\u5360\u4f4d\u7b26"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7531\u4e8e\u7aef\u53e3\u53f7\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u52a8\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"<port>"})," \u5360\u4f4d\u7b26\u6765\u6307\u4ee3\u5f53\u524d\u7aef\u53e3\u53f7\uff0cBuilder \u4f1a\u81ea\u52a8\u5c06\u5360\u4f4d\u7b26\u66ff\u6362\u4e3a\u5b9e\u9645\u76d1\u542c\u7684\u7aef\u53e3\u53f7\u3002"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    startUrl"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://localhost:<port>/home'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);