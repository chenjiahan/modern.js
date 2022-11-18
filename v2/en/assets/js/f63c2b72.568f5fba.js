"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9851],{44993:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(18249),a=(n(52983),n(44993));const i={title:"Head",sidebar_position:1},p="Head",o={unversionedId:"apis/app/runtime/app/head",id:"apis/app/runtime/app/head",title:"Head",description:"\u7528\u4e8e\u7ed9 head \u5143\u7d20\u5185\u6dfb\u52a0 html \u5143\u7d20\uff08\u5982 title\u3001meta\u3001script \u7b49\uff09\uff0c\u5e76\u4e14\u652f\u6301 SSR\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/app/head.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/head",permalink:"/v2/en/docs/apis/app/runtime/app/head",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Head",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/v2/en/docs/apis/app/runtime/env"},next:{title:"useRuntimeContext",permalink:"/v2/en/docs/apis/app/runtime/app/use-runtime-context"}},l={},c=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u7528\u6cd5",id:"\u66f4\u591a\u7528\u6cd5",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"head"},"Head"),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7528\u4e8e\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," \u5143\u7d20\u5185\u6dfb\u52a0 html \u5143\u7d20\uff08\u5982 title\u3001meta\u3001script \u7b49\uff09\uff0c\u5e76\u4e14\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR"),"\u3002"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Helmet } from '@modern-js/runtime/head';\n"))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Helmet></Helmet>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Helmet } from \'@modern-js/runtime/head\';\n\nfunction IndexPage() {\n  return (\n    <div>\n      <Helmet>\n        <title>My page title</title>\n        <meta name="viewport" content="initial-scale=1.0, width=device-width" />\n      </Helmet>\n      <p>Hello Modern.js!</p>\n    </div>\n  )\n}\n\nexport default IndexPage\n')),(0,a.kt)("h2",{id:"\u66f4\u591a\u7528\u6cd5"},"\u66f4\u591a\u7528\u6cd5"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"react-helmet"),"\u3002"))}s.isMDXComponent=!0}}]);