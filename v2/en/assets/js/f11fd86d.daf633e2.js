"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8144],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=r(18249),a=(r(52983),r(44993));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ascii' | 'utf8'")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ascii'"))),(0,a.kt)("p",null,"By default, Builder's output is ASCII-only and will escape all non-ASCII characters."),(0,a.kt)("p",null,"If you want to output the original characters without using escape sequences, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"output.charset")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"utf8"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    charset: 'utf8',\n  },\n};\n")),(0,a.kt)("p",null,"Builder will automatically add ",(0,a.kt)("inlineCode",{parentName:"p"},'<meta charset="utf-8">')," to the generated HTML files if ",(0,a.kt)("inlineCode",{parentName:"p"},"output.charset")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"utf8"),"."))}i.isMDXComponent=!0;const u={title:"output.charset",sidebar_label:"charset"},p=void 0,c={unversionedId:"configure/app/output/charset",id:"configure/app/output/charset",title:"output.charset",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to output.charset\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/charset.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/charset",permalink:"/v2/en/docs/configure/app/output/charset",draft:!1,tags:[],version:"current",frontMatter:{title:"output.charset",sidebar_label:"charset"},sidebar:"configsAppSidebar",previous:{title:"assetsRetry",permalink:"/v2/en/docs/configure/app/output/assets-retry"},next:{title:"cleanDistPath",permalink:"/v2/en/docs/configure/app/output/clean-dist-path"}},l={},s=[],f={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-charset"},"output.charset"),"\u3002")),(0,a.kt)(i,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);