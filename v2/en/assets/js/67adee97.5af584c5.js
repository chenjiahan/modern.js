"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4206],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const a={title:"\u200b\u521d\u59cb\u5316 IDE\u200b\u200b\u200b\u200b"},i=void 0,l={unversionedId:"tutorials/first-app/c03-ide/3.1-setting-up",id:"tutorials/first-app/c03-ide/3.1-setting-up",title:"\u200b\u521d\u59cb\u5316 IDE\u200b\u200b\u200b\u200b",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 Modern.js \u5e94\u7528\u5de5\u7a0b\u3002",source:"@site/docs/tutorials/first-app/c03-ide/3.1-setting-up.md",sourceDirName:"tutorials/first-app/c03-ide",slug:"/tutorials/first-app/c03-ide/3.1-setting-up",permalink:"/v2/en/docs/tutorials/first-app/c03-ide/3.1-setting-up",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u521d\u59cb\u5316 IDE\u200b\u200b\u200b\u200b"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u914d\u7f6e\u9879\u76ee",permalink:"/v2/en/docs/tutorials/first-app/c02-generator-and-studio/2.3-configuration"},next:{title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a",permalink:"/v2/en/docs/tutorials/first-app/c03-ide/3.2-hints-in-ide"}},p={},s=[{value:"\u7528 VS Code \u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55",id:"\u7528-vs-code-\u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55",level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 Modern.js \u5e94\u7528\u5de5\u7a0b\u3002"),(0,o.kt)("p",null,"\u5728\u5f00\u59cb\u5199\u4ee3\u7801\u4e4b\u524d\uff0c\u6211\u4eec\u5c06\u4f1a\u5728\u8fd9\u4e00\u7ae0\u8282\u91cc\u5148\u786e\u8ba4 IDE \u76f8\u5173\u529f\u80fd\u3002"),(0,o.kt)("p",null,"Modern.js \u6846\u67b6\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u5bf9 VS Code \u548c WebStorm \u7684\u652f\u6301\uff0c\u672c\u7ae0\u4ee5 VS Code \u4e3a\u4f8b\u3002"),(0,o.kt)("h2",{id:"\u7528-vs-code-\u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55"},"\u7528 VS Code \u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd hello-modern/\ncode .\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/vsc-mwa.png",alt:"vsc-alert"})),(0,o.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5fc5\u987b\u6253\u5f00\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u4e0d\u80fd\u6253\u5f00\u5176\u4ed6\u5b50\u76ee\u5f55\u6216\u7236\u76ee\u5f55\uff0c\u5426\u5219 IDE \u652f\u6301\u4e0d\u4f1a\u751f\u6548\u3002")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,o.kt)("p",null,"\u70b9\u51fb\u5de6\u4fa7\u680f\u4e0a\u7684\u63d2\u4ef6\uff08Extensions\uff09\u9762\u677f\uff0c\u8fc7\u6ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"@recommended")," \u5217\u8868\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u91cc\u5206\u4e3a\u5de5\u4f5c\u533a\u63a8\u8350\u63d2\u4ef6\uff08Workspace Recommendations\uff09\u548c\u5176\u4ed6\u63a8\u8350\u63d2\u4ef6\uff08Other Recommendations\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/vsc-plugin.png",alt:"vsc-alert"})),(0,o.kt)("p",null,"\u70b9\u51fb\u5de5\u4f5c\u533a\u63a8\u8350\u63d2\u4ef6\u9876\u90e8\u7684\u4e0b\u8f7d\u6309\u94ae\uff0c\u5b89\u88c5\u5f53\u524d\u4ed3\u5e93\u63a8\u8350\u7684\uff08\u4e5f\u5c31\u662f Modern.js \u6846\u67b6\u63a8\u8350\u7684\uff09\u6240\u6709 VS Code \u63d2\u4ef6\uff0c\u7b49\u5f85\u5168\u90e8\u5b89\u88c5\u6210\u529f\uff0c\u91cd\u542f VS Code \u8ba9\u63d2\u4ef6\u751f\u6548\u3002"),(0,o.kt)("p",null,"\u5982\u679c VS Code \u5f39\u51fa\u8fd9\u4e2a\u786e\u8ba4\u6846\uff0c\u70b9\u51fb Allow \u5373\u53ef\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/vsc-alert.png",alt:"vsc-alert"})),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u68c0\u67e5 VS Code \u5e95\u680f\u53f3\u4fa7\u663e\u793a\u7684 ESLint \u72b6\u6001\uff0c\u6216 VS Code \u7684 Problem \u9762\u677f\uff0c\u6bd4\u5982\u5982\u679c\u6709\u4e0b\u9762\u8fd9\u6837\u7684\u63d0\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/vsc-bottom-bar.png",alt:"vsc-bottom-bar"})),(0,o.kt)("p",null,"\u70b9\u51fb\u5e95\u680f\u4e0a\u7684 ESLint \u5c31\u4f1a\u5f39\u51fa\u4e0a\u9762\u7684\u5bf9\u8bdd\u6846\u3002"),(0,o.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0cIDE \u5c31\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\uff0c\u53ef\u4ee5\u5f00\u59cb\u5199\u4ee3\u7801\u4e86\u3002"),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u4e9b VS Code \u63d2\u4ef6\u4e0d\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u5982\u679c\u5b9e\u5728\u4e0d\u60f3\u4e00\u952e\u5b89\u88c5\u6240\u6709\u63d2\u4ef6\uff0c\u81f3\u5c11\u8981\u5b89\u88c5\u4ee5\u4e0b\u63d2\u4ef6\uff1a"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"editorconfig"),(0,o.kt)("li",{parentName:"ul"},"eslint"),(0,o.kt)("li",{parentName:"ul"},"vscode-styled-components"),(0,o.kt)("li",{parentName:"ul"},"language-postcss"),(0,o.kt)("li",{parentName:"ul"},"eslint-disable-snippets"))),(0,o.kt)("p",null,"\u672c\u7ae0\u8282\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\uff0c\u4e5f\u8d77\u5230\u68c0\u67e5 IDE \u529f\u80fd\u7684\u4f5c\u7528\uff0c\u4efb\u4e00\u6b65\u9aa4\u4e0d\u7b26\u5408\u63cf\u8ff0\uff0c\u90fd\u8bf4\u660e\u6709\u95ee\u9898\u3002"))}u.isMDXComponent=!0}}]);