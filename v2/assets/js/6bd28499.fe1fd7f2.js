"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7746],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={title:"\u547d\u4ee4\u884c\u4e2d\u7684\u81ea\u52a8\u4fee\u590d"},i=void 0,l={unversionedId:"tutorials/first-app/c03-ide/3.4-autofix-in-cli",id:"tutorials/first-app/c03-ide/3.4-autofix-in-cli",title:"\u547d\u4ee4\u884c\u4e2d\u7684\u81ea\u52a8\u4fee\u590d",description:"\u63d0\u4ea4\u524d\u7684\u81ea\u52a8\u51c6\u5165\u68c0\u67e5\uff0c\u8ddf VS Code \u91cc\u7684\u4fdd\u5b58\u4e00\u6837\uff0c\u4f1a\u5c3d\u53ef\u80fd\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\u548c\u4fee\u590d\u95ee\u9898\uff0c\u53ea\u6709\u9047\u5230\u65e0\u6cd5\u81ea\u52a8\u4fee\u590d\u7684\u95ee\u9898\uff0c\u624d\u4f1a\u62a5\u9519\u963b\u6b62\u63d0\u4ea4\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c03-ide/3.4-autofix-in-cli.md",sourceDirName:"tutorials/first-app/c03-ide",slug:"/tutorials/first-app/c03-ide/3.4-autofix-in-cli",permalink:"/v2/docs/tutorials/first-app/c03-ide/3.4-autofix-in-cli",draft:!1,tags:[],version:"current",frontMatter:{title:"\u547d\u4ee4\u884c\u4e2d\u7684\u81ea\u52a8\u4fee\u590d"},sidebar:"tutorialsSidebar",previous:{title:"IDE \u4e2d\u7684\u81ea\u52a8\u4fee\u590d",permalink:"/v2/docs/tutorials/first-app/c03-ide/3.3-autofix-in-ide"},next:{title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5",permalink:"/v2/docs/tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus"}},p={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u63d0\u4ea4\u524d\u7684\u81ea\u52a8\u51c6\u5165\u68c0\u67e5\uff0c\u8ddf VS Code \u91cc\u7684\u4fdd\u5b58\u4e00\u6837\uff0c\u4f1a\u5c3d\u53ef\u80fd\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\u548c\u4fee\u590d\u95ee\u9898\uff0c\u53ea\u6709\u9047\u5230\u65e0\u6cd5\u81ea\u52a8\u4fee\u590d\u7684\u95ee\u9898\uff0c\u624d\u4f1a\u62a5\u9519\u963b\u6b62\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6dfb\u52a0\u4e00\u6bb5\u53ef\u81ea\u52a8\u4fee\u590d\u7684\u95ee\u9898\u4ee3\u7801\uff08\u5982\u679c\u5728 VS Code \u91cc\u6dfb\u52a0\uff0c\u4fdd\u5b58\u65f6\u4f1a\u81ea\u52a8\u4fee\u590d\uff0c\u6240\u4ee5\u7528 CLI \u6765\u6dfb\u52a0\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo ';' >> src/routes/page.jsx\n")),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"page.tsx"),"\uff0c\u53ef\u4ee5\u770b\u5230\u672b\u5c3e\u591a\u4e86\u4e00\u4e2a ';'\uff0c\u6709\u95ee\u9898\u63d0\u793a\u3002"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -am "test: \u518d\u6b21\u6d4b\u8bd5\u51c6\u5165\u68c0\u67e5"\ngit status\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u867d\u7136\u4ecd\u7136\u63d0\u4ea4\u5931\u8d25\uff0c\u4f46\u65b0\u589e\u7684\u95ee\u9898\u88ab\u81ea\u52a8\u4fee\u590d\u4e86\u3002"),(0,a.kt)("p",null,"\u624b\u52a8\u628a\u53c2\u6570 a \u7684\u95ee\u9898\u4fee\u590d\uff08\u5220\u9664 a\uff09\uff0c\u518d\u6b21\u6dfb\u52a0 ';'\uff0c\u63d0\u4ea4\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo ';' >> src/routes/page.jsx\ngit commit -am \"test: \u518d\u6b21\u6d4b\u8bd5\u51c6\u5165\u68c0\u67e5\"\ngit log HEAD --stat --graph --name-status\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u63d0\u4ea4\u6210\u529f\u4e86\uff0c\u65b0\u589e\u7684\u95ee\u9898\u88ab\u81ea\u52a8\u4fee\u590d\uff0c\u5e76\u4e14\u81ea\u52a8\u88ab stage\u3002"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u771f\u5b9e\u9879\u76ee\u7684\u5f00\u53d1\u4e2d\uff0c\u5bf9\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff0c\u53ef\u4ee5\u5728\u63d0\u4ea4\u65f6\u589e\u52a0 -n \u6216 --no-verify \u53c2\u6570\uff0c\u7834\u4f8b\u8df3\u8fc7\u51c6\u5165\u68c0\u67e5\uff1a"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Hotfix"),(0,a.kt)("li",{parentName:"ol"},"merge \u8fc7\u7a0b\u4e2d\u89e3\u51b3\u4e86\u51b2\u7a81\uff0c\u53d8\u66f4\u7684\u6587\u4ef6\u91cc\u5305\u542b\u522b\u4eba\u7684\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ol"},"\u65e7\u9879\u76ee\u8fc1\u79fb\u5230 Modern.js\uff0c\u6700\u521d\u505a\u7edf\u4e00\u81ea\u52a8\u4fee\u590d\u7684\u63d0\u4ea4"))),(0,a.kt)("p",null,"\u63d0\u4ea4\u524d\u7684\u81ea\u52a8\u51c6\u5165\u68c0\u67e5\uff0c\u53ea\u4f1a\u68c0\u67e5\u548c\u4fee\u590d\u8fd9\u6b21\u63d0\u4ea4\u4e2d\u6709\u53d8\u66f4\u7684\u6587\u4ef6\uff08\u5df2\u7ecf stage \u7684\u6587\u4ef6\uff09\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u4f1a\u5f3a\u5236\u8981\u6c42\u8fd9\u6b21\u5de5\u4f5c\u8fc7\u7a0b\u4e2d\u4fee\u6539\u8fc7\u7684\u6587\u4ef6\u6ca1\u6709\u95ee\u9898\uff0c\u4e0d\u4f1a\u8981\u6c42\u4f60\u53bb\u89e3\u51b3\u8fd9\u6b21\u5de5\u4f5c\u65e0\u5173\u7684\u6587\u4ef6\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5bf9\u6574\u4e2a\u4ed3\u5e93\u7684\u6240\u6709\u6587\u4ef6\u505a lint \u68c0\u67e5\u548c\u81ea\u52a8\u4fee\u590d\uff0c\u53ef\u4ee5\u624b\u52a8\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"lint")," \u547d\u4ee4\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo ';' >> src/routes/page.jsx\npnpm run lint\n")),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u547d\u4ee4\u901f\u5ea6\u6162\uff0c\u4e0d\u5e38\u7528\u3002\u65e7\u9879\u76ee\u521a\u8fc1\u79fb\u5230 Modern.js \u6846\u67b6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u7528\u8fd9\u4e2a\u547d\u4ee4\u5bf9\u6240\u6709\u4ee3\u7801\u505a\u4e00\u6b21\u81ea\u52a8\u4fee\u590d\uff0c\u5355\u72ec\u63d0\u4ea4\u3002")),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u7f16\u7a0b\u73af\u5883\u7684\u521d\u59cb\u5316\u548c\u68c0\u67e5\uff0c\u719f\u6089\u4e86\u76f8\u5173\u529f\u80fd\u3002\u4e0b\u4e00\u7ae0\u8282\u5f00\u59cb\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u5199\u4ee3\u7801\u4e86\u3002"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Modern.js \u662f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/eslint"},"Modern Lint")," \u89c4\u5219\u96c6\u6765\u5b9e\u73b0\u4e0a\u8ff0\u80fd\u529b\uff0c \u96c6\u6210\u4e86 ESLint\u3001TypeScript \u652f\u6301\u3001Prettier \u7b49\u4e3b\u6d41\u5de5\u5177\u548c\u6700\u4f73\u5b9e\u8df5\u3002")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u7ae0\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c03/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);