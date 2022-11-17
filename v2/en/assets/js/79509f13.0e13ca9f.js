"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5497],{44993:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,v=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(v,i(i({ref:r},l),{},{components:t})):n.createElement(v,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35575:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(18249),o=(t(52983),t(44993));const a={title:"server/index.[tj]s",sidebar_position:1},i=void 0,p={unversionedId:"apis/app/hooks/server/index",id:"apis/app/hooks/server/index",title:"server/index.[tj]s",description:"\u6269\u5c55 Modern.js Server \u7684\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u542f\u52a8\u7684 Web Server \u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\u3002",source:"@site/docs/apis/app/hooks/server/index.md",sourceDirName:"apis/app/hooks/server",slug:"/apis/app/hooks/server/",permalink:"/v2/en/docs/apis/app/hooks/server/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"server/index.[tj]s",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"api/test.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/api/test"},next:{title:"server/test.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/server/test"}},s={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6269\u5c55 Modern.js Server \u7684\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u542f\u52a8\u7684 Web Server \u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u5e94\u7528\u5de5\u7a0b\u652f\u6301\u56db\u79cd\u4e0d\u540c\u7684\u6846\u67b6\u4e2d\u95f4\u4ef6\uff1aExpress\u3001Koa\u3001Egg\u3001Nest\uff0c\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u53ef\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/web-server/hook"},"hook"),"\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5bf9\u8bf7\u6c42\u548c\u54cd\u5e94\u8fdb\u884c\u62e6\u622a\u5904\u7406\uff0c\u9274\u6743\u4e0e\u89d2\u8272\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u5f02\u5e38\u515c\u5e95\u7b49\uff1b\u4e5f\u53ef\u5728 Server \u7684\u8fd0\u884c\u6d41\u7a0b\u4e2d\uff08\u5305\u62ec\u8def\u7531\u5339\u914d\u3001\u8d44\u6e90\u5bfb\u5740\u3001\u5934\u90e8\u6ce8\u5165\u3001\u9875\u9762\u6e32\u67d3\uff0c\u9759\u6001 Web \u6258\u7ba1\uff09\u63d2\u5165\u7279\u5b9a\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 Server \u9700\u8981\u5728\u9879\u76ee\u4e0b\u6267\u884c new \u547d\u4ee4\u65b0\u5efa\u300cServer \u81ea\u5b9a\u4e49\u300d\u6e90\u7801\u76ee\u5f55\u3002")))}u.isMDXComponent=!0}}]);