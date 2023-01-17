"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4108],{44993:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},30628:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(18249),o=(t(52983),t(44993));const a={title:"index.[tj]s",sidebar_position:1},i=void 0,p={unversionedId:"apis/app/hooks/server/index_",id:"apis/app/hooks/server/index_",title:"index.[tj]s",description:"\u6269\u5c55 Modern.js Web Server \u7684\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u542f\u52a8\u7684 Web Server \u6dfb\u52a0 Hook \u6216 Middleware\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/hooks/server/index_.md",sourceDirName:"apis/app/hooks/server",slug:"/apis/app/hooks/server/index_",permalink:"/v2/docs/apis/app/hooks/server/index_",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"index.[tj]s",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"test.[tj]s",permalink:"/v2/docs/apis/app/hooks/api/test"},next:{title:"test.[tj]s",permalink:"/v2/docs/apis/app/hooks/server/test"}},s={},c=[],l={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6269\u5c55 Modern.js Web Server \u7684\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u542f\u52a8\u7684 Web Server \u6dfb\u52a0 Hook \u6216 Middleware\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5bf9\u8bf7\u6c42\u548c\u54cd\u5e94\u8fdb\u884c\u62e6\u622a\u5904\u7406\uff0c\u9274\u6743\u4e0e\u89d2\u8272\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u5f02\u5e38\u515c\u5e95\u7b49\u3002\u4e5f\u53ef\u5728\u5185\u7f6e\u5904\u7406\u903b\u8f91\uff08\u5305\u62ec\u8def\u7531\u5339\u914d\u3001\u8d44\u6e90\u5bfb\u5740\u3001\u5934\u90e8\u6ce8\u5165\u3001\u9875\u9762\u6e32\u67d3\uff0c\u9759\u6001 Web \u6258\u7ba1\uff09\u63d2\u5165\u7279\u5b9a\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u53ef\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/web-server/hook"},"Hook")," & ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/web-server/middleware"},"Middleware"),"\u3002")))}d.isMDXComponent=!0}}]);