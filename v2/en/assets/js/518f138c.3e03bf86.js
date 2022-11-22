"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1455],{44993:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>s});var t=r(52983);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),s=a,m=f["".concat(p,".").concat(s)]||f[s]||d[s]||o;return r?t.createElement(m,l(l({ref:n},u),{},{components:r})):t.createElement(m,l({ref:n},u))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63994:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(18249),a=(r(52983),r(44993));const o={toc:[]};function l(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object | undefined"))),(0,a.kt)("p",null,"You have two ways to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer")," to analyze the size of output files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"BUNDLE_ANALYZE=true"),"."),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"performance.bundleAnalyze")," config.")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer")," is not enabled. When enabled, its configuration is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // `target` is the compilation target, such as `web`, `node`, etc.\n  reportFilename: `report-${target}.html`,\n}\n")),(0,a.kt)("p",null,"You can override the default config through ",(0,a.kt)("inlineCode",{parentName:"p"},"performance.bundleAnalyze"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  performance: {\n    bundleAnalyze: {\n      analyzerMode: 'server',\n      openAnalyzer: true,\n    },\n  },\n};\n")))}l.isMDXComponent=!0;const i={title:"performance.bundleAnalyze",sidebar_label:"bundleAnalyze"},p=void 0,c={unversionedId:"configure/app/performance/bundle-analyze",id:"configure/app/performance/bundle-analyze",title:"performance.bundleAnalyze",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to performance.bundleAnalyze\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/performance/bundle-analyze.md",sourceDirName:"configure/app/performance",slug:"/configure/app/performance/bundle-analyze",permalink:"/v2/en/docs/configure/app/performance/bundle-analyze",draft:!1,tags:[],version:"current",frontMatter:{title:"performance.bundleAnalyze",sidebar_label:"bundleAnalyze"},sidebar:"configsAppSidebar",previous:{title:"buildCache",permalink:"/v2/en/docs/configure/app/performance/build-cache"},next:{title:"chunkSplit",permalink:"/v2/en/docs/configure/app/performance/chunk-split"}},u={},d=[],f={toc:d};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-performance.html#performance-bundleanalyze"},"performance.bundleAnalyze"),"\u3002")),(0,a.kt)(l,{mdxType:"Main"}))}s.isMDXComponent=!0}}]);