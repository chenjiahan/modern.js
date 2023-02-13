"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[3694],{79835:(s,e,n)=>{n.r(e),n.d(e,{default:()=>a,frontmatter:()=>r,title:()=>c,toc:()=>l});var i=n(97458);const r={title:"ESLint \u89c4\u5219\u96c6",sidebar_position:8},l=[{id:"q-\u5982\u4f55\u5904\u7406-lint",text:"Q: \u5982\u4f55\u5904\u7406 Lint",depth:2},{id:"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d",text:"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d",depth:3},{id:"\u6279\u91cf\u81ea\u52a8\u4fee\u590d",text:"\u6279\u91cf\u81ea\u52a8\u4fee\u590d",depth:3},{id:"\u4eba\u5de5\u4fee\u590d",text:"\u4eba\u5de5\u4fee\u590d",depth:3},{id:"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5",text:"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5",depth:3},{id:"q-\u5982\u4f55\u81ea\u5b9a\u4e49-eslint-\u89c4\u5219",text:"Q: \u5982\u4f55\u81ea\u5b9a\u4e49 ESLint \u89c4\u5219",depth:2},{id:"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b-packagejson-\u91cc\u7684-eslintconfig-\u5b57\u6bb5",text:'\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b package.json \u91cc\u7684 "eslintConfig" \u5b57\u6bb5',depth:3},{id:"srceslintrcjs-\u6587\u4ef6",text:"src/.eslintrc.js \u6587\u4ef6",depth:3},{id:"packagejson-\u91cc\u7684-eslintignore-\u5b57\u6bb5",text:"package.json \u91cc\u7684 eslintIgnore \u5b57\u6bb5",depth:3},{id:"q-\u5982\u4f55\u5347\u7ea7-eslint-\u63d2\u4ef6\u7684\u7248\u672c",text:"Q: \u5982\u4f55\u5347\u7ea7 ESLint \u63d2\u4ef6\u7684\u7248\u672c",depth:2},{id:"q-webstorm-\u6709\u65f6\u5019\u4f1a\u62a5-eslint-\u9519\u8bef",text:"Q: WebStorm \u6709\u65f6\u5019\u4f1a\u62a5 ESLint \u9519\u8bef",depth:2}],c="ESLint \u89c4\u5219\u96c6";function o(s){const e=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span",ul:"ul",li:"li",img:"img"},s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"eslint-\u89c4\u5219\u96c6",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#eslint-\u89c4\u5219\u96c6",children:"#"}),"ESLint \u89c4\u5219\u96c6"]}),"\n","\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Modern.js ESLint \u89c4\u5219\u96c6"}),"\u662f\u5168\u91cf\u7684 ",(0,i.jsx)(e.strong,{children:"ESLint"})," \u89c4\u5219\u96c6\u5408\uff0c\u5305\u542b ",(0,i.jsx)(e.code,{children:"@modern-js"})," \uff08\u5bf9\u4e8e Node.js \u9879\u76ee\u7684 Lint \u89c4\u5219\uff09\u548c ",(0,i.jsx)(e.code,{children:"@modern-js-app"}),"\uff08\u5bf9\u4e8e\u524d\u7aef\u9879\u76ee\u7684 Lint \u89c4\u5219\uff09\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e0b\u9762\u4ee5\u5177\u4f53\u95ee\u9898\u4ecb\u7ecd\u66f4\u591a ESLint \u7528\u6cd5\u3002"}),"\n",(0,i.jsxs)(e.h2,{id:"q-\u5982\u4f55\u5904\u7406-lint",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-\u5982\u4f55\u5904\u7406-lint",children:"#"}),"Q: \u5982\u4f55\u5904\u7406 Lint"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d",children:"#"}),"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d"]}),"\n",(0,i.jsxs)(e.p,{children:["\u591a\u6570\u95ee\u9898\u4f1a\u88ab ESLint \u89c4\u5219\u7684\u81ea\u52a8\u4fee\u590d\u529f\u80fd\u6216 ",(0,i.jsx)(e.a,{href:"https://prettier.io/",target:"_blank",rel:"nofollow",children:"Prettier"})," \u7684\u4ee3\u7801\u683c\u5f0f\u5316\u529f\u80fd\uff08\u5df2\u88ab\u96c6\u6210\u5230 ESLint \u91cc\uff09\u81ea\u52a8\u89e3\u51b3\uff0c\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u5173\u5fc3\u95ee\u9898\u7684\u7ec6\u8282\u548c\u89e3\u51b3\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive info",children:[(0,i.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsx)(e.p,{children:"\n\u4e3b\u8981\u5728 IDE \u4fdd\u5b58\u6587\u4ef6\u7684\u73af\u8282\u6267\u884c\u8fd9\u79cd\u81ea\u52a8\u4fee\u590d\uff0c\u5c11\u6570\u6f0f\u7f51\u4e4b\u9c7c\u4f1a\u5728\u63d0\u4ea4\u4ee3\u7801\u73af\u8282\u88ab\u81ea\u52a8\u4fee\u590d\u3002"})})]}),"\n",(0,i.jsxs)(e.h3,{id:"\u6279\u91cf\u81ea\u52a8\u4fee\u590d",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6279\u91cf\u81ea\u52a8\u4fee\u590d",children:"#"}),"\u6279\u91cf\u81ea\u52a8\u4fee\u590d"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u6bd4\u5982\u65e7\u9879\u76ee\u8fc1\u79fb\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6279\u91cf\u4fee\u590d\u548c\u68c0\u67e5\u6240\u6709\u6587\u4ef6\uff1a"}),"\n",(0,i.jsxs)(e.div,{className:"language-bash",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run lint:error"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.h3,{id:"\u4eba\u5de5\u4fee\u590d",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4eba\u5de5\u4fee\u590d",children:"#"}),"\u4eba\u5de5\u4fee\u590d"]}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u65e0\u6cd5\u81ea\u52a8\u4fee\u590d\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5728 IDE \u91cc\u70b9\u51fb\u95ee\u9898\u63d0\u793a\u6846\u91cc\u7684\u89c4\u5219\u94fe\u63a5\uff0c\u6253\u5f00\u8fd9\u6761\u89c4\u5219\u7684\u6587\u6863\uff0c\u67e5\u770b\u95ee\u9898\u7684\u89e3\u91ca\u548c\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,i.jsxs)(e.h3,{id:"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u58f0\u660e\u4f8b\u5916\u60c5\u51b5",children:"#"}),"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5"]}),"\n",(0,i.jsx)(e.p,{children:"\u76ee\u524d\u9636\u6bb5\uff0c\u6709\u4e9b\u89c4\u5219\u5e76\u4e0d\u80fd\u505a\u5230\u8db3\u591f\u667a\u80fd\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u4f1a\u6709\u5f88\u5927\u6536\u76ca\uff0c\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\u4e5f\u8bb8\u4e0d\u9002\u7528\u3002\u4f46\u5982\u679c\u4e3a\u4e86\u8fd9\u4e9b\u5c11\u6570\u60c5\u51b5\u5c31\u628a\u6574\u4e2a\u89c4\u5219\u5173\u6389\u6216\u6539\u6389\uff0c\u5f97\u4e0d\u507f\u5931\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u7528 ",(0,i.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"})," \u6ce8\u91ca\uff0c\u5bf9\u7b26\u5408",(0,i.jsx)(e.strong,{children:"\u5c11\u6570\u60c5\u51b5"}),"\u7684\u4ee3\u7801\u5757\u505a\u6807\u6ce8\uff0c\u58f0\u660e\u8fd9\u91cc\u662f\u4e00\u4e2a\u4f8b\u5916\uff0c\u5e94\u8be5\u5ffd\u7565\u3002\u6bd4\u5982\uff1a"]}),"\n",(0,i.jsxs)(e.div,{className:"language-js",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* eslint-disable filenames/match-exported */"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* eslint-enable filenames/match-exported */"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive info",children:[(0,i.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsx)(e.p,{children:'\n\u5728 VS Code \u7f16\u8f91\u5668\u91cc\u8f93\u5165 eslint\uff0c\u4f1a\u81ea\u52a8\u51fa\u73b0\u5173\u4e8e "eslint-disable" \u7684\u63d0\u793a\u6846\uff0c\u9009\u62e9\u63d0\u793a\u9009\u9879\u751f\u6210\u5bf9\u5e94\u6ce8\u91ca\u5bf9\u3002'})})]}),"\n",(0,i.jsxs)(e.p,{children:["\u3010Modern.js ESLint \u89c4\u5219\u96c6\u3011\u8981\u6c42 ",(0,i.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules-1",target:"_blank",rel:"nofollow",children:"eslint-disable"})," \u5fc5\u987b\u6210\u5bf9\u4f7f\u7528\uff0c\u5fc5\u987b\u660e\u786e\u8868\u8fbe\u8981\u5f71\u54cd\u7684\u8303\u56f4\uff0c\u4ee5\u53ca\u5728\u8fd9\u4e2a\u8303\u56f4\u5185\u660e\u786e\u8868\u8fbe\u8981\u7981\u7528\u4ec0\u4e48\u89c4\u5219\uff0c\u76ee\u7684\u662f\u8ba9",(0,i.jsx)(e.strong,{children:"\u4f8b\u5916"}),"\u6709\u660e\u786e\u7684\u3001\u6700\u5c0f\u5316\u7684\u8303\u56f4\uff0c\u907f\u514d ",(0,i.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules-2",target:"_blank",rel:"nofollow",children:"eslint-disable"})," \u88ab\u6ee5\u7528\uff0c\u5bfc\u81f4\u4e0d\u5c5e\u4e8e\u4f8b\u5916\u7684\u4ee3\u7801\u4e5f\u88ab\u7981\u7528\u4e86\u89c4\u5219\u3002"]}),"\n",(0,i.jsxs)(e.h2,{id:"q-\u5982\u4f55\u81ea\u5b9a\u4e49-eslint-\u89c4\u5219",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-\u5982\u4f55\u81ea\u5b9a\u4e49-eslint-\u89c4\u5219",children:"#"}),"Q: \u5982\u4f55\u81ea\u5b9a\u4e49 ESLint \u89c4\u5219"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b-packagejson-\u91cc\u7684-eslintconfig-\u5b57\u6bb5",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b-packagejson-\u91cc\u7684-eslintconfig-\u5b57\u6bb5",children:"#"}),"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b ",(0,i.jsx)(e.code,{children:"package.json"}),' \u91cc\u7684 "eslintConfig" \u5b57\u6bb5']}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u5730\u65b9\u662f\u6574\u4e2a\u4ed3\u5e93\u7684\u9ed8\u8ba4 ESLint \u914d\u7f6e\uff0c\u662f\u9488\u5bf9\u7eaf Node.js \u4ee3\u7801\uff08\u53ea\u80fd\u5728 Node.js \u91cc\u8fd0\u884c\uff09\u8bbe\u8ba1\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u9879\u76ee\u5728\u67d0\u4e9b\u89c4\u5219\u4e0a\u786e\u5b9e\u6709\u7279\u6b8a\u8981\u6c42\u6216\u4e0d\u53ef\u907f\u514d\u7684\u517c\u5bb9\u95ee\u9898\uff08\u4e0d\u662f\u4f8b\u5916\uff09\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u589e\u52a0\u89c4\u5219\u914d\u7f6e\u3002\u8be5\u914d\u7f6e\u4f1a\u4f18\u5148\u4e8e\u9ed8\u8ba4\u7684\u3010Modern.js ESLint \u89c4\u5219\u96c6\u3011\uff0c\u6bd4\u5982\uff1a"}),"\n",(0,i.jsxs)(e.div,{className:"language-json",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eslintConfig"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"extends"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@modern-js"'})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"rules"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"filenames/match-exported"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"off"'})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  },"})}),"\n",(0,i.jsx)(e.span,{className:"line"}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.h3,{id:"srceslintrcjs-\u6587\u4ef6",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#srceslintrcjs-\u6587\u4ef6",children:"#"}),(0,i.jsx)(e.code,{children:"src/.eslintrc.js"})," \u6587\u4ef6"]}),"\n",(0,i.jsx)(e.p,{children:"Modern.js \u7684\u5e94\u7528\u5de5\u7a0b\u3001\u6a21\u5757\u5de5\u7a0b\uff0c\u6e90\u4ee3\u7801\u76ee\u5f55\u91cc\u90fd\u4f1a\u9ed8\u8ba4\u6709\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u662f\u9488\u5bf9 Universal JS \u4ee3\u7801\u8bbe\u8ba1\u7684\u3002"}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive info",children:[(0,i.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsx)(e.p,{children:"\nUniversal JS \u4ee3\u7801\u662f\u65e2\u80fd\u6d4f\u89c8\u5668\u7aef\u4e5f\u80fd\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u7684\u4ee3\u7801\u3002"})})]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u9879\u76ee\u5728\u67d0\u4e9b\u89c4\u5219\u4e0a\u786e\u5b9e\u6709\u7279\u6b8a\u8981\u6c42\u6216\u4e0d\u53ef\u907f\u514d\u7684\u517c\u5bb9\u95ee\u9898\uff08\u4e0d\u662f\u4f8b\u5916\uff09\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u589e\u52a0\u89c4\u5219\u914d\u7f6e\uff0c\u8be5\u914d\u7f6e\u4f1a\u4f18\u5148\u4e8e\u9ed8\u8ba4\u7684\u3010Modern.js ESLint \u89c4\u5219\u96c6\u3011\uff0c\u6bd4\u5982\uff1a"}),"\n",(0,i.jsxs)(e.div,{className:"language-js",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// eslint-disable-next-line import/no-commonjs"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  root"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  extends"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js-app'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  parserOptions"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    tsconfigRootDir"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" __dirname"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    project"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'../tsconfig.json'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  rules"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'filenames/match-exported'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'off'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u6709\u9700\u8981\uff0c\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u5728\u4e0d\u540c\u7684\u5b50\u76ee\u5f55\u91cc\u589e\u52a0 ",(0,i.jsx)(e.code,{children:".eslintrc.js"})," \u6587\u4ef6\uff0c\u9488\u5bf9\u8fd9\u4e2a\u5b50\u76ee\u5f55\u91cc\u7684\u4ee3\u7801\u505a\u7279\u6b8a\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsxs)(e.div,{className:"language-js",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  rules"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'filenames/match-exported'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'off'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive tip",children:[(0,i.jsx)(e.p,{className:"modern-directive-title",children:"\u63d0\u793a"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.p,{children:["\n\u6ce8\u610f\uff1a\u6ca1\u6709\u5fc5\u8981\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"extends"})," \u5b57\u6bb5\uff0c\u4f1a\u81ea\u52a8\u7ee7\u627f\u7236\u76ee\u5f55\u7684\u914d\u7f6e\u3002"]})})]}),"\n",(0,i.jsxs)(e.h3,{id:"packagejson-\u91cc\u7684-eslintignore-\u5b57\u6bb5",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson-\u91cc\u7684-eslintignore-\u5b57\u6bb5",children:"#"}),"package.json \u91cc\u7684 ",(0,i.jsx)(e.code,{children:"eslintIgnore"})," \u5b57\u6bb5"]}),"\n",(0,i.jsxs)(e.p,{children:["\u628a\u5305\u542b ",(0,i.jsx)(e.code,{children:".js"}),"\u3001",(0,i.jsx)(e.code,{children:".jsx"}),"\u3001",(0,i.jsx)(e.code,{children:".ts"}),"\u3001",(0,i.jsx)(e.code,{children:".tsx"})," \u6587\u4ef6\u3001\u4f46\u4e0d\u9700\u8981\u505a\u4ee3\u7801\u68c0\u67e5\u548c\u81ea\u52a8\u4fee\u590d\u7684\u76ee\u5f55\uff0c\u6dfb\u52a0\u5230 ",(0,i.jsx)(e.code,{children:"eslintIgnore"})," \u91cc\uff0c\u53ef\u4ee5\u4f18\u5316 ESLint \u68c0\u67e5\u7684\u901f\u5ea6\uff0c\u6bd4\u5982\uff1a"]}),"\n",(0,i.jsxs)(e.div,{className:"language-json",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eslintIgnore"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:": ["})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"node_modules"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dist"'}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"output"'})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ],"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(e.h2,{id:"q-\u5982\u4f55\u5347\u7ea7-eslint-\u63d2\u4ef6\u7684\u7248\u672c",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-\u5982\u4f55\u5347\u7ea7-eslint-\u63d2\u4ef6\u7684\u7248\u672c",children:"#"}),"Q: \u5982\u4f55\u5347\u7ea7 ESLint \u63d2\u4ef6\u7684\u7248\u672c"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53ea\u8981\u4e0d\u662f Major \u7248\u672c\u7684\u53d8\u5316\uff08\u4e0d\u7b26\u5408 ",(0,i.jsx)(e.a,{href:"https://semver.org/",target:"_blank",rel:"nofollow",children:"Semver"})," \u89c4\u5219\u7684 ",(0,i.jsx)(e.code,{children:"^"})," \u7b26\u53f7\uff09\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u4e1a\u52a1\u9879\u76ee\u7684 ",(0,i.jsx)(e.code,{children:"package.json"})," \u91cc\u6307\u5b9a\u8fd9\u4e2a\u4f9d\u8d56\uff0c\u5220\u9664 Lock \u6587\u4ef6\uff08\u6216\u5c1d\u8bd5\u624b\u52a8\u5220\u9664 Lock \u6587\u4ef6\u4e2d\u8fd9\u4e2a\u5305\u540d\u7684\u5185\u5bb9\uff09\uff0c\u6267\u884c ",(0,i.jsx)(e.code,{children:"pnpm install"})," \u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u5e76\u4e14\u751f\u6210\u65b0\u7684 Lock \u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u505a\u5b8c\u8fd9\u4e9b\u64cd\u4f5c\u4e4b\u540e\uff0c\u5728\u4e1a\u52a1\u9879\u76ee\u7684 ",(0,i.jsx)(e.code,{children:"./node_modules"})," \u76ee\u5f55\u91cc\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u5e94\u8be5\u53ea\u5b58\u5728\u4e00\u4efd\uff0c\u5e76\u4e14\u5347\u7ea7\u5230\u4e86\u4f60\u6307\u5b9a\u7684\u7248\u672c\u3002"]}),"\n",(0,i.jsxs)(e.div,{className:"modern-directive tip",children:[(0,i.jsx)(e.p,{className:"modern-directive-title",children:"\u63d0\u793a"}),(0,i.jsx)(e.div,{className:"modern-directive-content",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Major \u7248\u672c\u5c31\u662f\u4e3b\u7248\u672c\u53f7\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb\u3010",(0,i.jsx)(e.a,{href:"https://semver.org/#summary",target:"_blank",rel:"nofollow",children:"Semantic Versioning"}),"\u3011\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6240\u6709\u88ab Modern.js \u5c01\u88c5\u7684\u4e0a\u6e38\u9879\u76ee\uff08\u6bd4\u5982 ESLint\u3001",(0,i.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/plugins#plugins",target:"_blank",rel:"nofollow",children:"ESLint \u63d2\u4ef6"}),"\u3001",(0,i.jsx)(e.a,{href:"https://reactrouter.com/",target:"_blank",rel:"nofollow",children:"React Router"})," \u7b49\uff09\uff0c\u4e5f\u90fd\u53ef\u4ee5\u8fd9\u6837\u5347\u7ea7\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"Modern.js \u4e5f\u4f1a\u5728\u6bcf\u6b21\u53d1\u7248\u4e2d\u5c3d\u91cf\u53ca\u65f6\u7684\u5347\u7ea7\u8fd9\u4e9b\u4e0a\u6e38\u4f9d\u8d56\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Major \u7248\u672c\u7684\u5347\u7ea7\u9700\u8981\u7531 Modern.js \u6765\u53d1\u7248\u3002"}),"\n"]})})]}),"\n",(0,i.jsxs)(e.h2,{id:"q-webstorm-\u6709\u65f6\u5019\u4f1a\u62a5-eslint-\u9519\u8bef",children:[(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-webstorm-\u6709\u65f6\u5019\u4f1a\u62a5-eslint-\u9519\u8bef",children:"#"}),"Q: WebStorm \u6709\u65f6\u5019\u4f1a\u62a5 ESLint \u9519\u8bef"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7531\u4e8e WebStorm \u8ba4\u4e3a ESLint \u6267\u884c\u76ee\u5f55\u662f\u6839\u636e ",(0,i.jsx)(e.code,{children:".eslintrc"})," \u6587\u4ef6\u6765\u51b3\u5b9a\u7684\u3002\u56e0\u6b64 ",(0,i.jsx)(e.code,{children:"src/.eslintrc"})," \u6587\u4ef6\u4f4d\u7f6e\u7684\u653e\u7f6e\u4f1a\u5bfc\u81f4 ",(0,i.jsx)(e.code,{children:"tsconfig.json"})," \u6587\u4ef6\u6307\u5b9a\u7684\u4f4d\u7f6e\uff08\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\uff09\u5728 ",(0,i.jsx)(e.code,{children:"src/"})," \u76ee\u5f55\u4e0b\u627e\u4e0d\u5230\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u65f6\u9700\u8981\u624b\u52a8\u914d\u7f6e\u4e00\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.div,{className:"language-json",children:[(0,i.jsx)(e.div,{className:""}),(0,i.jsxs)(e.div,{className:"modern-code-content",children:[(0,i.jsx)(e.button,{className:"copy"}),(0,i.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(e.code,{children:[(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"--parser-options=project:../tsconfig.json"})}),"\n",(0,i.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/webstorm-lint-error.png",alt:"webstorm-lint-error"})})]})}const a=function(s={}){const{wrapper:e}=s.components||{};return e?(0,i.jsx)(e,Object.assign({},s,{children:(0,i.jsx)(o,s)})):o(s)}}}]);