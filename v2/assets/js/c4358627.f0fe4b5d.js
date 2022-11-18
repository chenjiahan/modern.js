"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6743],{44993:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(18249),a=(r(52983),r(44993));const o={title:"\u521b\u5efa Git \u4ed3\u5e93"},i=void 0,p={unversionedId:"tutorials/first-app/c01-getting-started/1.6-create-repo",id:"tutorials/first-app/c01-getting-started/1.6-create-repo",title:"\u521b\u5efa Git \u4ed3\u5e93",description:"\u7ecf\u8fc7\u4ee5\u4e0a\u64cd\u4f5c\uff0c\u73b0\u5728\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u53d8\u6210\u4e86\u8fd9\u6837\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c01-getting-started/1.6-create-repo.md",sourceDirName:"tutorials/first-app/c01-getting-started",slug:"/tutorials/first-app/c01-getting-started/1.6-create-repo",permalink:"/v2/docs/tutorials/first-app/c01-getting-started/1.6-create-repo",draft:!1,tags:[],version:"current",frontMatter:{title:"\u521b\u5efa Git \u4ed3\u5e93"},sidebar:"tutorialsSidebar",previous:{title:"\u8fd0\u884c\u9879\u76ee",permalink:"/v2/docs/tutorials/first-app/c01-getting-started/1.5-start-command"},next:{title:"\u200b\u7528\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u9879\u76ee\u200b\u200b",permalink:"/v2/docs/tutorials/first-app/c02-generator-and-studio/2.1-generator"}},l={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ecf\u8fc7\u4ee5\u4e0a\u64cd\u4f5c\uff0c\u73b0\u5728\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u53d8\u6210\u4e86\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 node_modules/\n\u251c\u2500\u2500 dist/\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 App.jsx\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 pnpm-lock.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," \u90fd\u662f\u6846\u67b6\u751f\u6210\u7684\u6784\u5efa\u4ea7\u7269\u548c\u8fd0\u884c\u4ea7\u7269\uff0c\u4e0d\u5e94\u8be5\u8fdb\u5165\u4ed3\u5e93\u7d22\u5f15\uff0c\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),"\uff0c\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"node_modules/\ndist/\n*.log*\n")),(0,a.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git init")," \u7b49\u547d\u4ee4\u521b\u5efa\u4ed3\u5e93\u3002"),(0,a.kt)("p",null,"\u867d\u7136\u624b\u52a8\u521b\u5efa\u4e00\u4e2a Modern.js \u9879\u76ee\u4e5f\u5f88\u7b80\u5355\uff0c\u4f46\u5982\u679c\u7528 Modern.js \u5f00\u53d1\u5957\u4ef6\u63d0\u4f9b\u7684\u5de5\u5177\uff0c\u81ea\u52a8\u521b\u5efa\u9879\u76ee\u8fd8\u53ef\u4ee5\u66f4\u65b9\u4fbf\uff0c\u5e76\u4e14\u83b7\u5f97\u66f4\u591a\u5f00\u7bb1\u5373\u7528\u7684\u6700\u4f73\u5b9e\u8df5\uff08\u6bd4\u5982\u4e0a\u9762\u7684 .gitignore \u7b49\u7b49\uff09\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u7ae0\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c01/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);