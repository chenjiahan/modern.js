"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3242],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(18249),a=(r(52983),r(44993));const o={title:"\u542f\u7528 SSR"},i=void 0,s={unversionedId:"tutorials/first-app/c01-getting-started/1.4-enable-ssr",id:"tutorials/first-app/c01-getting-started/1.4-enable-ssr",title:"\u542f\u7528 SSR",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Modern.js \u8c03\u8bd5\u9879\u76ee\uff0c\u672c\u5c0f\u8282\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5f00\u542f SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c01-getting-started/1.4-enable-ssr.md",sourceDirName:"tutorials/first-app/c01-getting-started",slug:"/tutorials/first-app/c01-getting-started/1.4-enable-ssr",permalink:"/v2/docs/tutorials/first-app/c01-getting-started/1.4-enable-ssr",draft:!1,tags:[],version:"current",frontMatter:{title:"\u542f\u7528 SSR"},sidebar:"tutorialsSidebar",previous:{title:"\u8c03\u8bd5\u9879\u76ee",permalink:"/v2/docs/tutorials/first-app/c01-getting-started/1.3-dev-command"},next:{title:"\u8fd0\u884c\u9879\u76ee",permalink:"/v2/docs/tutorials/first-app/c01-getting-started/1.5-start-command"}},l={},p=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),m={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Modern.js \u8c03\u8bd5\u9879\u76ee\uff0c\u672c\u5c0f\u8282\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5f00\u542f SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.js"),"\uff1a"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(d,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch modern.config.js\n"))),(0,a.kt)(d,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ni modern.config.js\n")))),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u9879\u76ee\u7684 SSR \u5c31\u5df2\u7ecf\u5f00\u542f\u4e86\uff0c\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u770b\u770b\u6548\u679c\u5427\u3002"),(0,a.kt)("p",null,"\u7528 Chrome \u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"view-source:http://localhost:8080/"),"\uff0c\u67e5\u770b HTML \u6587\u4ef6\u6e90\u4ee3\u7801\uff0c\u53ef\u4ee5\u770b\u5230 root \u6839\u5143\u7d20\u4e0b\u5b58\u5728\u5df2\u7ecf\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u597d\u7684 HTML\u3002"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Modern.js \u6846\u67b6\u4f7f\u7528 SSR \u4e0d\u9700\u8981\u81ea\u5efa Web Server\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e13\u6ce8\u4e8e App \u7684\u5f00\u53d1\u3002")))}f.isMDXComponent=!0}}]);