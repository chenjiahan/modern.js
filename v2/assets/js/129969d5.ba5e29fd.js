"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3492],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(18249),a=(r(52983),r(44993));const o={toc:[]};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ascii' | 'utf8'")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ascii'"))),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBuilder \u7684\u4ea7\u7269\u5185\u5bb9\u662f\u7eaf ASCII \u7684\uff0c\u5e76\u4e14\u4f1a\u8f6c\u4e49\u6240\u6709\u975e ASCII \u5b57\u7b26\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u8fdb\u884c\u8f6c\u4e49\uff0c\u800c\u662f\u8f93\u51fa\u6240\u6709\u539f\u59cb\u5b57\u7b26\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"output.charset")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"utf8"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    charset: 'utf8',\n  },\n};\n")),(0,a.kt)("p",null,"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"output.charset")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"utf8")," \u65f6\uff0cBuilder \u4f1a\u81ea\u52a8\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},'<meta charset="utf-8">')," \u6dfb\u52a0\u5230\u751f\u6210\u7684 HTML \u6587\u4ef6\u4e2d\u3002"))}p.isMDXComponent=!0;const i={title:"output.charset",sidebar_label:"charset",sidebar_position:1},u=void 0,c={unversionedId:"configure/app/output/charset",id:"configure/app/output/charset",title:"output.charset",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.charset\u3002",source:"@site/docs/configure/app/output/charset.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/charset",permalink:"/v2/docs/configure/app/output/charset",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"output.charset",sidebar_label:"charset",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"assetsRetry",permalink:"/v2/docs/configure/app/output/assets-retry"},next:{title:"cleanDistPath",permalink:"/v2/docs/configure/app/output/clean-dist-path"}},l={},s=[],f={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-charset"},"output.charset"),"\u3002")),(0,a.kt)(p,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);