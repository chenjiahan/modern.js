"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9734],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=p,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(18249),p=(n(52983),n(44993));const a={title:"useModuleApp",sidebar_position:6},o=void 0,i={unversionedId:"apis/app/runtime/app/use-module-app",id:"apis/app/runtime/app/use-module-app",title:"useModuleApp",description:"\u8fd4\u56de\u4e00\u4e2a\u81ea\u52a8\u5207\u6362\u5fae\u524d\u7aef\u8def\u7531\u7684\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u6fc0\u6d3b\u7684\u8def\u7531\u662f\u914d\u7f6e\u91cc\u7684 activeWhen\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/app/use-module-app.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/use-module-app",permalink:"/v2/docs/apis/app/runtime/app/use-module-app",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"useModuleApp",sidebar_position:6},sidebar:"apisAppSidebar",previous:{title:"PreRender",permalink:"/v2/docs/apis/app/runtime/app/pre-render"},next:{title:"useModuleApps",permalink:"/v2/docs/apis/app/runtime/app/use-module-apps"}},l={},u=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,p.kt)("p",{parentName:"admonition"},"\u8fd4\u56de\u4e00\u4e2a\u81ea\u52a8\u5207\u6362\u5fae\u524d\u7aef\u8def\u7531\u7684\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u6fc0\u6d3b\u7684\u8def\u7531\u662f\u914d\u7f6e\u91cc\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"activeWhen"),"\u3002"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModuleApp } from '@modern-js/runtime';\n"))),(0,p.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,p.kt)("p",{parentName:"admonition"},"\u8be5 API \u5728\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u5148\u5f00\u542f\u5fae\u524d\u7aef\u3002")),(0,p.kt)("h2",{id:"api"},"API"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"useModuleApp() => React.FC<any>")),(0,p.kt)("p",null,"\u8fd4\u56de\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("p",null,"\u9700\u8981\u5148\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u4fe1\u606f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"defineConfig({\n  runtime: {\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: 'Home',\n            entry: 'http://www.home.com',\n            activeWhen: '/home'\n          },\n          {\n            name: 'Contact',\n            entry: 'http://www.contact.com',\n            activeWhen: '/contact'\n          },\n        ]\n      }\n    }\n  }\n})\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=App.tsx",title:"App.tsx"},"import { useModuleApp } from '@modern-js/runtime';\n\nfunction App() {\n  const MApp = useModuleApp();\n\n  return <MApp />;\n}\n")),(0,p.kt)("p",null,"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"useModuleApp()")," \u83b7\u53d6\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"MApp")," \u7ec4\u4ef6\uff0c\u6e32\u67d3 MApp \u7ec4\u4ef6\uff0c\u5c06\u4f1a\u6839\u636e\u914d\u7f6e\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"activeWhen")," \u4f5c\u4e3a\u6fc0\u6d3b\u8def\u7531\u52a0\u8f7d\u5bf9\u5e94\u7684\u5b50\u5e94\u7528\u3002"))}c.isMDXComponent=!0}}]);