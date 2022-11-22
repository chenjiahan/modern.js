"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4108],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const i={title:"index.[tj]s",sidebar_position:1},a=void 0,p={unversionedId:"apis/app/hooks/server/index_",id:"apis/app/hooks/server/index_",title:"index.[tj]s",description:"\u6269\u5c55 Modern.js Server \u7684\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u542f\u52a8\u7684 Web Server \u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/hooks/server/index_.md",sourceDirName:"apis/app/hooks/server",slug:"/apis/app/hooks/server/index_",permalink:"/v2/docs/apis/app/hooks/server/index_",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"index.[tj]s",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"test.[tj]s",permalink:"/v2/docs/apis/app/hooks/api/test"},next:{title:"test.[tj]s",permalink:"/v2/docs/apis/app/hooks/server/test"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6269\u5c55 Modern.js Server \u7684\u6587\u4ef6\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u542f\u52a8\u7684 Web Server \u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5bf9\u8bf7\u6c42\u548c\u54cd\u5e94\u8fdb\u884c\u62e6\u622a\u5904\u7406\uff0c\u9274\u6743\u4e0e\u89d2\u8272\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u5f02\u5e38\u515c\u5e95\u7b49\uff1b\u4e5f\u53ef\u5728 Server \u7684\u8fd0\u884c\u6d41\u7a0b\u4e2d\uff08\u5305\u62ec\u8def\u7531\u5339\u914d\u3001\u8d44\u6e90\u5bfb\u5740\u3001\u5934\u90e8\u6ce8\u5165\u3001\u9875\u9762\u6e32\u67d3\uff0c\u9759\u6001 Web \u6258\u7ba1\uff09\u63d2\u5165\u7279\u5b9a\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5177\u4f53\u4f7f\u7528\u793a\u4f8b\u53ef\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/web-server/hook"},"Hook"),"\u3002")))}u.isMDXComponent=!0}}]);