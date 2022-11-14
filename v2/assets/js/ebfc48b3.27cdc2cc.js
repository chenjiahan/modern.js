"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5321],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const l={sidebar_label:"disableHtmlFolder"},a="output.disableHtmlFolder",i={unversionedId:"configure/app/output/disable-html-folder",id:"configure/app/output/disable-html-folder",title:"output.disableHtmlFolder",description:"- \u7c7b\u578b\uff1a boolean",source:"@site/docs/configure/app/output/disable-html-folder.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/disable-html-folder",permalink:"/v2/docs/configure/app/output/disable-html-folder",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"disableHtmlFolder"},sidebar:"configsAppSidebar",previous:{title:"disableCssModuleExtension",permalink:"/v2/docs/configure/app/output/disable-css-module-extension"},next:{title:"disableInlineRuntimeChunk",permalink:"/v2/docs/configure/app/output/disable-inline-runtime-chunk"}},p={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputdisablehtmlfolder"},"output.disableHtmlFolder"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u79fb\u9664 HTML \u4ea7\u7269\u5bf9\u5e94\u7684\u6587\u4ef6\u5939\u3002"),(0,o.kt)("p",null,"\u5f00\u542f\u8be5\u9009\u9879\u540e\uff0c\u751f\u6210\u7684 HTML \u6587\u4ef6\u76ee\u5f55\u4f1a\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"[name]/index.html")," \u53d8\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].html"),"\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," \u4e4b\u540e\uff0cHTML \u4ea7\u7269\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/dist\n\u2514\u2500\u2500 html\n \xa0  \u2514\u2500\u2500 main\n \xa0\xa0     \u2514\u2500\u2500 index.html\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u5f00\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"output.disableHtmlFolder"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    disableHtmlFolder: true,\n  },\n});\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4\uff0c\u5bf9\u5e94 HTML \u4ea7\u7269\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/dist\n\u2514\u2500\u2500 html\n \xa0\xa0 \u2514\u2500\u2500 main.html\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u8bbe\u7f6e HTML \u6a21\u677f\u6587\u4ef6\u5728\u6784\u5efa\u4ea7\u7269\u76ee\u5f55\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/output/html-path"},"output.htmlPath")," \u914d\u7f6e\u9879\u3002")))}s.isMDXComponent=!0}}]);