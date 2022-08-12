"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[83245],{54852:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(86215),r=(a(49231),a(54852));const i={title:"lazy",sidebar_position:2},o=void 0,l={unversionedId:"apis/app/runtime/utility/loadable/lazy",id:"apis/app/runtime/utility/loadable/lazy",title:"lazy",description:"\u7528\u4e8e\u521b\u5efa\u652f\u6301 Suspense \u7684 loadable \u7ec4\u4ef6\u3002",source:"@site/docs/apis/app/runtime/utility/loadable/lazy.md",sourceDirName:"apis/app/runtime/utility/loadable",slug:"/apis/app/runtime/utility/loadable/lazy",permalink:"/docs/apis/app/runtime/utility/loadable/lazy",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"lazy",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"loadable",permalink:"/docs/apis/app/runtime/utility/loadable/loadable_"},next:{title:"LoadableComponent",permalink:"/docs/apis/app/runtime/utility/loadable/loadable-component"}},p={},s=[{value:"API",id:"api",level:2},{value:"lazy",id:"lazy",level:3},{value:"lazy.lib",id:"lazylib",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7528\u4e8e\u521b\u5efa\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},"Suspense")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"loadable \u7ec4\u4ef6"),"\u3002"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from '@modern-js/runtime/loadable';\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"lazy"},"lazy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from '@modern-js/runtime/loadable';\nconst OtherComponent = lazy(() => import('./OtherComponent'));\n")),(0,r.kt)("h3",{id:"lazylib"},"lazy.lib"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},"Suspense")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"loadable \u5e93"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from '@modern-js/runtime/loadable';\nconst Moment = lazy.lib(() => import('moment'))\n")))}m.isMDXComponent=!0}}]);