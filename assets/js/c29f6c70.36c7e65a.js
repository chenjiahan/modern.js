"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2679],{57522:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(18249),a=(n(29901),n(57522));const i={sidebar_position:2},o="useRuntimeContext",p={unversionedId:"apis/app/runtime/app/use-runtime-context",id:"apis/app/runtime/app/use-runtime-context",title:"useRuntimeContext",description:"\u5728 React \u7ec4\u4ef6\u4e2d\u83b7\u53d6 runtime \u4e0a\u4e0b\u6587\uff0c\u5176\u4e2d\u5305\u542b request \u548c store \u5b9e\u4f8b\u3002",source:"@site/docs/apis/app/runtime/app/use-runtime-context.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/use-runtime-context",permalink:"/docs/apis/app/runtime/app/use-runtime-context",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"Head",permalink:"/docs/apis/app/runtime/app/head"},next:{title:"NoSSR",permalink:"/docs/apis/app/runtime/app/no-ssr"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useruntimecontext"},"useRuntimeContext"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," \u7ec4\u4ef6\u4e2d\u83b7\u53d6 runtime \u4e0a\u4e0b\u6587\uff0c\u5176\u4e2d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u5b9e\u4f8b\u3002"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useRuntimeContext } from '@modern-js/runtime';\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRuntimeContext() => RuntimeContext")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"request\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4e2d\u7684\u9644\u52a0\u4fe1\u606f\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"params\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string>"),"\uff0c\u8bf7\u6c42\u8def\u5f84\u4e2d\u7684\u52a8\u6001\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"pathname\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u8bf7\u6c42\u7684 pathname\u3002"),(0,a.kt)("li",{parentName:"ul"},"query\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string>"),"\uff0c\u8bf7\u6c42\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u5bf9\u8c61\u3002"),(0,a.kt)("li",{parentName:"ul"},"headers\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"IncomingHttpHeaders"),"\uff0c\u8bf7\u6c42\u5934\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},"[cookie]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u8bf7\u6c42\u7684 cookie \u4fe1\u606f\u3002"))),(0,a.kt)("li",{parentName:"ul"},"store\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"ReduckStore"),"\uff0c\u5728\u5f00\u542f\u4e86 state \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u8be5\u503c\u4e3a reduck \u5168\u5c40 ",(0,a.kt)("inlineCode",{parentName:"li"},"store"),"\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRuntimeContext } from '@modern-js/runtime';\nimport { fooModel } from '@/common/models';\n\nfunction App() {\n  const { store } = useRuntimeContext();\n\n  const [state, actions] = store.use(fooModel);\n\n  return <div>state: {state}</div>\n}\n")))}u.isMDXComponent=!0}}]);