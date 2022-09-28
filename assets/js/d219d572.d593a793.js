"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4666],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(18249),a=(n(29901),n(57522));const o={sidebar_position:1,title:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u5206\u5272"},i=void 0,l={unversionedId:"guides/features/runtime/code-splitting",id:"guides/features/runtime/code-splitting",title:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u5206\u5272",description:"\u4ee3\u7801\u5206\u5272\u662f\u4f18\u5316\u524d\u7aef\u8d44\u6e90\u52a0\u8f7d\u7684\u4e00\u79cd\u5e38\u7528\u624b\u6bb5\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd Modern.js \u652f\u6301\u7684\u4e09\u79cd\u4ee3\u7801\u5206\u5272\u65b9\u5f0f\uff1a",source:"@site/docs/guides/features/runtime/code-splitting.md",sourceDirName:"guides/features/runtime",slug:"/guides/features/runtime/code-splitting",permalink:"/docs/guides/features/runtime/code-splitting",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u5206\u5272"},sidebar:"guidesSidebar",previous:{title:"\u6982\u89c8",permalink:"/docs/guides/features/overview"},next:{title:"Loader \u7ba1\u7406",permalink:"/docs/guides/features/runtime/use-loader"}},p={},s=[{value:"import",id:"import",level:2},{value:"loadable",id:"loadable",level:2},{value:"React.lazy",id:"reactlazy",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ee3\u7801\u5206\u5272\u662f\u4f18\u5316\u524d\u7aef\u8d44\u6e90\u52a0\u8f7d\u7684\u4e00\u79cd\u5e38\u7528\u624b\u6bb5\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd Modern.js \u652f\u6301\u7684\u4e09\u79cd\u4ee3\u7801\u5206\u5272\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"import")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"React.lazy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadable"))),(0,a.kt)("h2",{id:"import"},"import"),(0,a.kt)("p",null,"\u4f7f\u7528\u52a8\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," \u8bed\u6cd5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u63a5\u6536\u7684 JS \u6a21\u5757\u5c06\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u6253\u5305\u5165\u53e3\u88ab\u6253\u5305\u5230\u5355\u72ec\u7684 JS \u6587\u4ef6\u4e2d\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import("./math").then(math => {\n  console.log(math.add(16, 26));\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./math")," \u8def\u5f84\u5bf9\u5e94\u7684 JS \u6a21\u5757\u4f1a\u88ab\u6253\u5305\u5230\u5355\u72ec\u7684 JS \u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("h2",{id:"loadable"},"loadable"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," API\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," \u66f4\u591a\u7528\u6cd5\u8bf7\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/utility/loadable/loadable_"},"loadable API"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," \u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 SSR\u3002"))),(0,a.kt)("h2",{id:"reactlazy"},"React.lazy"),(0,a.kt)("p",null,"React \u5b98\u65b9\u63d0\u4f9b\u7684\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272\u7684\u65b9\u5f0f\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\u662f\u4e0d\u652f\u6301 SSR"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," \u66f4\u591a\u7528\u6cd5\u8bf7\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy"},"React lazy"),"\u3002"))}m.isMDXComponent=!0}}]);