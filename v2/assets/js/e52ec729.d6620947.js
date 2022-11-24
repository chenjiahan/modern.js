"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9255],{44993:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(52983);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13329:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(18249),i=(t(52983),t(44993));const o={sidebar_position:10},a="rmDir",l={unversionedId:"guides/topic-detail/generator/plugin/api/file/rmDir",id:"guides/topic-detail/generator/plugin/api/file/rmDir",title:"rmDir",description:"\u5220\u9664\u6587\u4ef6\u5939\u3002\u8be5\u65b9\u6cd5\u4f1a\u9012\u5f52\u7684\u5220\u9664\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/file/rmDir.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/rmDir",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/rmDir",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guidesSidebar",previous:{title:"rmFile",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/file/rmFile"},next:{title:"\u4ecb\u7ecd",permalink:"/v2/docs/guides/topic-detail/generator/plugin/api/new/introduce"}},p={},c=[{value:"dirName",id:"dirname",level:2}],u={toc:c};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rmdir"},"rmDir"),(0,i.kt)("p",null,"\u5220\u9664\u6587\u4ef6\u5939\u3002\u8be5\u65b9\u6cd5\u4f1a\u9012\u5f52\u7684\u5220\u9664\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u4efb\u4f55\u6587\u4ef6\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  rmDir: (dirName: string) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"dirname"},"dirName"),(0,i.kt)("p",null,"\u9700\u5220\u9664\u7684\u6587\u4ef6\u5939\u540d\u79f0\u6216\u6587\u4ef6\u5939\u8def\u5f84\u3002"))}s.isMDXComponent=!0}}]);