"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4101],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const a={title:"tools.autoprefixer",sidebar_label:"autoprefixer"},i=void 0,p={unversionedId:"configure/app/tools/autoprefixer",id:"configure/app/tools/autoprefixer",title:"tools.autoprefixer",description:"* \u7c7b\u578b\uff1a Object | Function",source:"@site/docs/configure/app/tools/autoprefixer.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/autoprefixer",permalink:"/v2/docs/configure/app/tools/autoprefixer",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.autoprefixer",sidebar_label:"autoprefixer"},sidebar:"configsAppSidebar",previous:{title:"plugins (\u63d2\u4ef6)",permalink:"/v2/docs/configure/app/plugins"},next:{title:"babel",permalink:"/v2/docs/configure/app/tools/babel"}},l={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"{ flexbox: 'no-2009' }"))),(0,o.kt)("p",null,"\u5bf9\u5e94 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer")," \u7684\u914d\u7f6e\u3002\n\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n tools: {\n    autoprefixer: {}\n  }\n})\n")),(0,o.kt)("p",null,"\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"flexbox")," \u914d\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    autoprefixer: opts => {\n      // \u5185\u90e8\u9ed8\u8ba4\u503c\u4e3a 'no-2009', \u53c2\u8003: https://github.com/postcss/autoprefixer#options\n      opts.flexbox = true;\n    },\n  },\n});\n")))}s.isMDXComponent=!0}}]);