"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7681],{44993:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(52983);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,o(o({ref:e},c),{},{components:r})):n.createElement(f,o({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},56782:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(18249),a=(r(52983),r(44993));const i={sidebar_label:"dataUriLimit"},o="output.dataUriLimit",l={unversionedId:"configure/app/output/data-uri-limit",id:"configure/app/output/data-uri-limit",title:"output.dataUriLimit",description:"* \u7c7b\u578b: Number",source:"@site/docs/configure/app/output/data-uri-limit.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/data-uri-limit",permalink:"/v2/docs/configure/app/output/data-uri-limit",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"dataUriLimit"},sidebar:"configsAppSidebar",previous:{title:"cssPath",permalink:"/v2/docs/configure/app/output/css-path"},next:{title:"disableAssetsCache",permalink:"/v2/docs/configure/app/output/disable-assets-cache"}},p={},u=[],c={toc:u};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outputdataurilimit"},"output.dataUriLimit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,a.kt)("inlineCode",{parentName:"li"},"Number")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,a.kt)("inlineCode",{parentName:"li"},"10000")," byte")),(0,a.kt)("p",null,"\u56fe\u7247\u3001\u5b57\u4f53\u8d44\u6e90\u662f\u5426\u8d70 base64 \u7684\u9608\u503c\uff0c\u9ed8\u8ba4\u5c0f\u4e8e 10kb \u4f1a\u8f6c\u6210 base64 \u7684\u5f62\u5f0f\u52a0\u8f7d\uff0c\u5426\u5219\u4f1a\u751f\u6210\u72ec\u7acb\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u9009\u9879\u53ef\u4fee\u6539\u9608\u503c, \u5982\u4e0b\u4fee\u6539\u4e3a 20kb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    dataUriLimit: 20000,\n  },\n};\n")),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6709\u4e9b\u56fe\u7247\u5e0c\u671b\u80fd\u65e0\u89c6\u5c3a\u5bf8\u5927\u5c0f\uff0c\u76f4\u63a5\u4ee5\u5185\u8054\u6216\u5916\u94fe\u7684\u65b9\u5f0f\u4f7f\u7528\uff0c\u5bf9\u6b64 Modern.js \u63d0\u4f9b\u4e86\u5982\u4e0b\u4f7f\u7528\u65b9\u5f0f:"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7528\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"import logoUrl from './logo.png?inline'")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7ba1\u8d44\u6e90\u591a\u5927\uff0c\u90fd\u4f7f\u7528 base64 \u7f16\u7801\u5185\u8054")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"import logoUrl from './logo.png?url'")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7ba1\u8d44\u6e90\u591a\u5c0f\uff0c\u90fd\u4f7f\u7528\u5916\u94fe\u65b9\u5f0f\u52a0\u8f7d"))))))}m.isMDXComponent=!0}}]);