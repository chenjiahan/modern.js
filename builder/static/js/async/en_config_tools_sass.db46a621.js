"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[1436],{21603:function(s,e,n){n.r(e),n.d(e,{content:function(){return r},frontmatter:function(){return c},toc:function(){return o}});var l=n(39980);const c=void 0,o=[{id:"object-type",text:"Object Type",depth:3},{id:"function-type",text:"Function Type",depth:3},{id:"utility-function",text:"Utility Function",depth:3},{id:"addexcludes",text:"addExcludes",depth:4}],r='"- Type: `Object | Function`\\n- Default:\\n\\n```js\\nconst defaultOptions = {\\n  // CSS Source Map enabled by default in development environment\\n  sourceMap: isDev,\\n};\\n```\\n\\nYou can modify the config of [sass-loader](https://github.com/webpack-contrib/sass-loader) via `tools.sass`.\\n\\n### Object Type\\n\\nWhen `tools.sass` is `Object` type, it is merged with the default config through Object.assign. It should be noted that `sassOptions` is merged through deepMerge in a deep way.\\n\\nFor example:\\n\\n```js\\nexport default {\\n  tools: {\\n    sass: {\\n      sourceMap: true,\\n    },\\n  },\\n};\\n```\\n\\n### Function Type\\n\\nWhen `tools.sass` is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For Example:\\n\\n```js\\nexport default {\\n  tools: {\\n    sass(config) {\\n      // Modify sourceMap config\\n      config.additionalData = async (content, loaderContext) => {\\n        // ...\\n      };\\n    },\\n  },\\n};\\n```\\n\\n### Utility Function\\n\\n#### addExcludes\\n\\n- Type: `(excludes: RegExp | RegExp[]) => void`\\n\\nUsed to specify which files `sass-loader` does not compile, You can pass in one or more regular expressions to match the path of sass files, for example:\\n\\n```js\\nexport default {\\n  tools: {\\n    sass(config, { addExcludes }) {\\n      addExcludes(/node_modules/);\\n    },\\n  },\\n};\\n```\\n"';function a(s){const e=Object.assign({ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",p:"p",a:"a",h3:"h3",h4:"h4"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,l.jsx)(e.li,{children:"Default:"}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"defaultOptions"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// CSS Source Map enabled by default in development environment"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"sourceMap"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"isDev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["You can modify the config of ",(0,l.jsx)(e.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"nofollow",children:"sass-loader"})," via ",(0,l.jsx)(e.code,{children:"tools.sass"}),"."]}),"\n",(0,l.jsxs)(e.h3,{id:"object-type",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"}),"Object Type"]}),"\n",(0,l.jsxs)(e.p,{children:["When ",(0,l.jsx)(e.code,{children:"tools.sass"})," is ",(0,l.jsx)(e.code,{children:"Object"})," type, it is merged with the default config through Object.assign. It should be noted that ",(0,l.jsx)(e.code,{children:"sassOptions"})," is merged through deepMerge in a deep way."]}),"\n",(0,l.jsx)(e.p,{children:"For example:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"sass"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"sourceMap"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"function-type",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"}),"Function Type"]}),"\n",(0,l.jsxs)(e.p,{children:["When ",(0,l.jsx)(e.code,{children:"tools.sass"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For Example:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"sass"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// Modify sourceMap config"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"additionalData"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"async"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"content"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"loaderContext"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// ..."})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"utility-function",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#utility-function",children:"#"}),"Utility Function"]}),"\n",(0,l.jsxs)(e.h4,{id:"addexcludes",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"}),"addExcludes"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["Used to specify which files ",(0,l.jsx)(e.code,{children:"sass-loader"})," does not compile, You can pass in one or more regular expressions to match the path of sass files, for example:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"sass"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"addExcludes"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"})"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"addExcludes"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"#EBCB8B"},children:"node_modules"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(a,s)})):a(s)}}}]);