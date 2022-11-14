"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1617],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,b=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const i={sidebar_label:"enableInlineScripts"},a="output.enableInlineScripts",l={unversionedId:"configure/app/output/enable-inline-scripts",id:"configure/app/output/enable-inline-scripts",title:"output.enableInlineScripts",description:"\u8c28\u614e\u4f7f\u7528\u8be5\u529f\u80fd\uff0c \u5185\u8054\u6240\u6709 js \u6587\u4ef6\u53ef\u80fd\u4f1a\u4f7f html \u6587\u4ef6\u5c3a\u5bf8\u8d85\u51fa\u9884\u671f",source:"@site/docs/configure/app/output/enable-inline-scripts.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-inline-scripts",permalink:"/v2/docs/configure/app/output/enable-inline-scripts",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"enableInlineScripts"},sidebar:"configsAppSidebar",previous:{title:"enableCssModuleTSDeclaration",permalink:"/v2/docs/configure/app/output/enable-css-module-ts-declaration"},next:{title:"enableInlineStyles",permalink:"/v2/docs/configure/app/output/enable-inline-styles"}},p={},c=[],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputenableinlinescripts"},"output.enableInlineScripts"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8c28\u614e\u4f7f\u7528\u8be5\u529f\u80fd\uff0c \u5185\u8054\u6240\u6709 js \u6587\u4ef6\u53ef\u80fd\u4f1a\u4f7f html \u6587\u4ef6\u5c3a\u5bf8\u8d85\u51fa\u9884\u671f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u5185\u8054 js \u5230 html \u6587\u4ef6\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    enableInlineScripts: true,\n  },\n});\n")),(0,o.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u5bf9\u5e94 html \u4e2d script \u6807\u7b7e\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/output-enable-inline-scripts.png",alt:null})))}s.isMDXComponent=!0}}]);