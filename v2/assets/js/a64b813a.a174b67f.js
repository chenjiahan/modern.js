"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1980],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=r(18249),a=(r(52983),r(44993));const o={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u662f\u5426\u7981\u7528 CSS \u63d0\u53d6\u903b\u8f91\uff0c\u5e76\u5c06 CSS \u6587\u4ef6\u5185\u8054\u5230 JS \u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBuilder \u4f1a\u628a CSS \u63d0\u53d6\u4e3a\u72ec\u7acb\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".css")," \u6587\u4ef6\uff0c\u5e76\u8f93\u51fa\u5230\u6784\u5efa\u4ea7\u7269\u76ee\u5f55\u3002\u8bbe\u7f6e\u8be5\u9009\u9879\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u540e\uff0cCSS \u6587\u4ef6\u4f1a\u88ab\u5185\u8054\u5230 JS \u6587\u4ef6\u4e2d\uff0c\u5e76\u5728\u8fd0\u884c\u65f6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," \u6807\u7b7e\u63d2\u5165\u5230\u9875\u9762\u4e0a\u3002"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  output: {\n    disableCssExtract: true,\n  },\n};\n")))}i.isMDXComponent=!0;const p={title:"output.disableCssExtract",sidebar_label:"disableCssExtract"},l=void 0,s={unversionedId:"configure/app/output/disable-css-extract",id:"configure/app/output/disable-css-extract",title:"output.disableCssExtract",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 output.disableCssExtract\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/output/disable-css-extract.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/disable-css-extract",permalink:"/v2/docs/configure/app/output/disable-css-extract",draft:!1,tags:[],version:"current",frontMatter:{title:"output.disableCssExtract",sidebar_label:"disableCssExtract"},sidebar:"configsAppSidebar",previous:{title:"dataUriLimit",permalink:"/v2/docs/configure/app/output/data-uri-limit"},next:{title:"disableCssModuleExtension",permalink:"/v2/docs/configure/app/output/disable-css-module-extension"}},u={},c=[],d={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-disablecssextract"},"output.disableCssExtract"),"\u3002")),(0,a.kt)(i,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);