"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1222],{44993:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37018:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(18249),o=(t(52983),t(44993));const a={sidebar_label:"port",sidebar_position:5},i="server.port",p={unversionedId:"configure/app/server/port",id:"configure/app/server/port",title:"server.port",description:"* \u7c7b\u578b\uff1a Number",source:"@site/docs/configure/app/server/port.md",sourceDirName:"configure/app/server",slug:"/configure/app/server/port",permalink:"/v2/docs/configure/app/server/port",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"port",sidebar_position:5},sidebar:"configsAppSidebar",previous:{title:"routes",permalink:"/v2/docs/configure/app/server/routes"},next:{title:"prefix",permalink:"/v2/docs/configure/app/bff/prefix"}},c={},l=[],s={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serverport"},"server.port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"Number")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"8080"))),(0,o.kt)("p",null,"Modern.js \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," \u548c  ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," \u65f6\u4f1a\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")," \u4e3a\u9ed8\u8ba4\u7aef\u53e3\u542f\u52a8\uff0c\u901a\u8fc7\u8be5\u914d\u7f6e\u53ef\u4ee5\u4fee\u6539 Server \u542f\u52a8\u7684\u7aef\u53e3\u53f7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    port: 3000,\n  }\n});\n")))}u.isMDXComponent=!0}}]);