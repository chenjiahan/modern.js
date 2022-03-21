"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9650],{54852:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(14380),a=n(8240),o=(n(49231),n(54852)),i=["components"],s={sidebar_position:1},p="useContext",u={unversionedId:"apis/runtime/bff-server/use-context",id:"apis/runtime/bff-server/use-context",title:"useContext",description:"\u7528\u4e8e\u5728\u4e00\u4f53\u5316 BFF \u51fd\u6570\u4e2d\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\u3002",source:"@site/docs/apis/runtime/bff-server/use-context.md",sourceDirName:"apis/runtime/bff-server",slug:"/apis/runtime/bff-server/use-context",permalink:"/docs/apis/runtime/bff-server/use-context",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"defineConfig",permalink:"/docs/apis/runtime/app/define-config"},next:{title:"hook",permalink:"/docs/apis/runtime/bff-server/hook"}},l={},c=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6846\u67b6\u5dee\u5f02",id:"\u6846\u67b6\u5dee\u5f02",level:2},{value:"Express",id:"express",level:3},{value:"Nest",id:"nest",level:3},{value:"Koa",id:"koa",level:3},{value:"Egg",id:"egg",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usecontext"},"useContext"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7528\u4e8e\u5728\u4e00\u4f53\u5316 BFF \u51fd\u6570\u4e2d\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useContext } from '@modern-js/runtime/server';\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useContext() => any")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," \u83b7\u53d6\u66f4\u591a\u7684\u8bf7\u6c42\u4fe1\u606f\uff0c\u4f8b\u5982\u83b7\u53d6\u8bf7\u6c42 UA(\u793a\u4f8b\u4e3a\u4f7f\u7528 koa \u6846\u67b6\u65f6)\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useContext } from '@modern-js/runtime/server';\n\nexport async function get() {\n  const ctx = useContext();\n  return ctx.req.headers['user-agent'];\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53ea\u6709\u5728\u4e00\u4f53\u5316 BFF \u51fd\u6570\u4e2d\uff0c\u4f60\u624d\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," API \u3002"))),(0,o.kt)("h2",{id:"\u6846\u67b6\u5dee\u5f02"},"\u6846\u67b6\u5dee\u5f02"),(0,o.kt)("p",null,"\u5728 Modern.js \u4e2d ",(0,o.kt)("strong",{parentName:"p"},"Express"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"Nest"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"Koa"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"Egg")," \u7b49\u8fd0\u884c\u65f6\u6846\u67b6\u5747\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," API\uff0c\u4f46\u5b83\u4eec\u7684\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u662f\u4e0d\u540c\u7684\u3002"),(0,o.kt)("h3",{id:"express"},"Express"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Request, Response } from 'express';\n\nexport type Context = { req: Request; res: Response };\n")),(0,o.kt)("h3",{id:"nest"},"Nest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Request, Response } from 'express';\nimport type { FastifyRequest } from 'fastify';\n\nexport type Context = {\n  request: Request & FastifyRequest;\n  response: Response;\n};\n")),(0,o.kt)("h3",{id:"koa"},"Koa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type { Context } from 'koa';\n")),(0,o.kt)("h3",{id:"egg"},"Egg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type { Context } from 'egg';\n")))}d.isMDXComponent=!0}}]);