"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7940],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),f=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=f(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=f(r),m=a,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=r(18249),a=(r(52983),r(44993));const o={sidebar_label:"fetcher"},i="bff.fetcher",c={unversionedId:"configure/app/bff/fetcher",id:"configure/app/bff/fetcher",title:"bff.fetcher",description:"* \u7c7b\u578b\uff1astring",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/bff/fetcher.md",sourceDirName:"configure/app/bff",slug:"/configure/app/bff/fetcher",permalink:"/v2/docs/configure/app/bff/fetcher",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"fetcher"},sidebar:"configsAppSidebar",previous:{title:"ssr",permalink:"/v2/docs/configure/app/server/ssr"},next:{title:"prefix",permalink:"/v2/docs/configure/app/bff/prefix"}},p={},f=[],l={toc:f};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bfffetcher"},"bff.fetcher"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7aef\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"global.fetch")),(0,a.kt)("li",{parentName:"ul"},"Node.js \u7aef\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/node-fetch/node-fetch"},"node-fetch"))))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u5148\u5728\u5f53\u524d\u5e94\u7528\u9879\u76ee\u6839\u76ee\u5f55\u4f7f\u7528\u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/new"},"new"),"\u3011 \u542f\u7528 BFF \u529f\u80fd\u3002")),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u4e8e Native\u3001\u5c0f\u7a0b\u5e8f\u573a\u666f\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u51fd\u6570\u5b9a\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  bff: {\n    fetcher: 'custom-fetch'\n  }\n});\n")),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5b9a\u5236\u5c31\u9700\u8981\u5b9a\u5236\u4e24\u79cd\u573a\u666f\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u51fd\u6570\uff0c\u5373\u81ea\u884c\u5224\u65ad\u8fd0\u884c\u73af\u5883\uff0c\u5b9e\u73b0\u540c\u6784\u7684 fetch \u51fd\u6570\u3002")))}u.isMDXComponent=!0}}]);