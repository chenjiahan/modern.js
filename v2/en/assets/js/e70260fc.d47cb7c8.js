"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),f=a,g=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},12837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(18249),a=(r(52983),r(44993));const i={sidebar_position:2},l="addHelper",o={unversionedId:"guides/topic-detail/generator/plugin/api/file/addHelper",id:"guides/topic-detail/generator/plugin/api/file/addHelper",title:"addHelper",description:"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Help \u51fd\u6570\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863Custom Helpers\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/addHelper.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/addHelper",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/addHelper",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/introduce"},next:{title:"addPartial",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/addPartial"}},p={},d=[{value:"name",id:"name",level:2},{value:"fn",id:"fn",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addhelper"},"addHelper"),(0,a.kt)("p",null,"\u9488\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u6587\u4ef6\uff0c\u589e\u52a0 Handlebars \u7684\u81ea\u5b9a\u4e49 Help \u51fd\u6570\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/guide/#custom-helpers"},"Custom Helpers"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  addHelper: (name: string, fn: Handlebars.HelperDelegate) => void;\n  ...\n};\n")),(0,a.kt)("h2",{id:"name"},"name"),(0,a.kt)("p",null,"help \u51fd\u6570\u540d\u79f0\u3002"),(0,a.kt)("h2",{id:"fn"},"fn"),(0,a.kt)("p",null,"help \u51fd\u6570\u5b9e\u73b0\u3002"))}u.isMDXComponent=!0}}]);