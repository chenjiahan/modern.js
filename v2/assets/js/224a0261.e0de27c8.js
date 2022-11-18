"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5986],{44993:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(18249),a=(r(52983),r(44993));const o={sidebar_position:0},i="\u6982\u89c8",p={unversionedId:"apis/generator/overview",id:"apis/generator/overview",title:"\u6982\u89c8",description:"Modern.js \u63d0\u4f9b\u4e86 create \u5de5\u5177\u7528\u4e8e\u521d\u59cb\u5316\u4e0d\u540c\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/generator/overview.md",sourceDirName:"apis/generator",slug:"/apis/generator/overview",permalink:"/v2/docs/apis/generator/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"apisGeneratorSidebar",next:{title:"\u4ecb\u7ecd",permalink:"/v2/docs/apis/generator/plugin/introduce"}},c={},l=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," \u5de5\u5177\u7528\u4e8e\u521d\u59cb\u5316\u4e0d\u540c\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\u3002"),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create [projectDir]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: create [projectDir]\n\n\u521b\u5efa @modern-js \u5e94\u7528\n\nOptions:\n  -c, --config <config>  \u521b\u5efa\u9879\u76ee\u9ed8\u8ba4\u914d\u7f6e(JSON \u5b57\u7b26\u4e32) (default: "{}")\n  --mwa                  \u4e00\u952e\u521b\u5efa\u5e94\u7528\u5de5\u7a0b(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e) (default: false)\n  --module               \u4e00\u952e\u521b\u5efa\u6a21\u5757\u5de5\u7a0b(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e) (default: false)\n  --monorepo             \u4e00\u952e\u5e38\u89c1 Monorepo \u5e94\u7528(\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e) (default: false)\n  --dist-tag <distTag>   \u751f\u6210\u9879\u76ee\u65f6\u751f\u6210\u5668\u4f7f\u7528\u7279\u6b8a\u7684 npm Tag (default: "")\n  --registry <registry>  \u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\u5b9a\u5236 npm Registry (default: "")\n  -d,--debug             \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  -h, --help             display help for command\n')),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u9700\u8981\u5168\u5c40\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create"),"\uff0c\u4f7f\u7528 npx \u6309\u9700\u8fd0\u884c\u5373\u53ef\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u59cb\u7ec8\u8fd0\u884c\u6700\u65b0\u7248\u672c\u7684\u9879\u76ee\u751f\u6210\u5668\u3002")))}u.isMDXComponent=!0}}]);