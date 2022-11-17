"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3236],{44993:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||c[d]||p;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const p={title:"api/app.[tj]s",sidebar_position:2},o=void 0,s={unversionedId:"apis/app/hooks/api/framework/app",id:"apis/app/hooks/api/framework/app",title:"api/app.[tj]s",description:"Modern.js \u6846\u67b6\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u5b9a\u5236 API Server \u7684\u542f\u52a8\u903b\u8f91\u3002\u5728\u4f7f\u7528 express, nest, koa \u65f6\uff0c\u8be5\u6587\u4ef6\u8fd4\u56de\u5bf9\u5e94\u6846\u67b6\u7684\u5b9e\u4f8b\u3002",source:"@site/docs/apis/app/hooks/api/framework/app.md",sourceDirName:"apis/app/hooks/api/framework",slug:"/apis/app/hooks/api/framework/app",permalink:"/v2/en/docs/apis/app/hooks/api/framework/app",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"api/app.[tj]s",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"api/lambda/*.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/api/framework/lambda"},next:{title:"api/test.[tj]s",permalink:"/v2/en/docs/apis/app/hooks/api/test"}},i={},l=[{value:"Express",id:"express",level:2},{value:"Nest",id:"nest",level:2},{value:"Koa",id:"koa",level:2},{value:"Egg",id:"egg",level:2}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u6846\u67b6\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u5b9a\u5236 API Server \u7684\u542f\u52a8\u903b\u8f91\u3002\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"express"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"koa")," \u65f6\uff0c\u8be5\u6587\u4ef6\u8fd4\u56de\u5bf9\u5e94\u6846\u67b6\u7684\u5b9e\u4f8b\u3002\n\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"egg")," \u6846\u67b6\u65f6\uff0c\u8be5\u6587\u4ef6\u8fd4\u56de\u4e00\u4e2a Boot \u7c7b\uff1b\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"egg")," \u6846\u67b6\u81ea\u8eab\u7684",(0,a.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/app-start.html"},"\u7ea6\u5b9a"),"\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u7b80\u5355\u793a\u4f8b\uff1a"),(0,a.kt)("h2",{id:"express"},(0,a.kt)("a",{parentName:"h2",href:"https://expressjs.com/"},"Express")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import express from 'express'\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user')\n})\n\napp.use(async (req, res, next) => {\n    console.info(`access url: ${req.url}`);\n    next();\n});\nexport default app\n")),(0,a.kt)("h2",{id:"nest"},(0,a.kt)("a",{parentName:"h2",href:"https://nestjs.com/"},"Nest")),(0,a.kt)("p",null,"Nest \u867d\u7136\u6709\u5b9a\u5236\u7684\u542f\u52a8\u5668\uff0c\u4f46\u672c\u8d28\u4e0e Express\u3001Koa \u76f8\u540c\uff0c\u6240\u4ee5\u5e94\u7528\u5de5\u7a0b\u6cbf\u7528\u4e86 Nest \u5b9a\u5236\u542f\u52a8\u5668\u7684\u9ed8\u8ba4\u5165\u53e3\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"api/main.ts"),"\u3002"),(0,a.kt)("p",null,"\u6309\u7167 Nest \u5b98\u65b9\u751f\u6210\u5668\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\uff0c\u5728\u5e94\u7528\u5de5\u7a0b\u4e2d\u4f7f\u7528 Nest \u6846\u67b6\u5199\u6cd5\u65f6\uff0c\u76ee\u5f55\u7ed3\u6784\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"api\n\u251c\u2500\u2500 app.controller.ts\n\u251c\u2500\u2500 app.module.ts\n\u251c\u2500\u2500 app.service.ts\n\u251c\u2500\u2500 lambda\n\u2502   \u2514\u2500\u2500 hello.ts\n\u2514\u2500\u2500 main.ts\n")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"api/main.ts")," \u4e2d\u7684\u5185\u5bb9\u4e0e Nest \u5b98\u65b9\u751f\u6210\u5668\u751f\u6210\u6a21\u7248\u6709\u6240\u4e0d\u540c\uff0c\u5e94\u7528\u5de5\u7a0b\u4e2d\u652f\u6301\u4e86\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,a.kt)("p",null,"\u4e0d\u5305\u542b\u5185\u7f6e Module\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineCustom } from '@modern-js/plugin-nest';\nimport { NestFactory } from '@nestjs/core';\nimport { Module } from '@nestjs/common';\nimport { AppModule } from './app.module';\n\nexport default NestFactory.create(AppModule);\n")),(0,a.kt)("p",null,"\u5305\u542b\u5185\u7f6e Module\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineCustom } from '@modern-js/plugin-nest';\nimport { NestFactory } from '@nestjs/core';\nimport { Module } from '@nestjs/common';\nimport { AppModule } from './app.module';\n\nexport default defineCustom(async modules => {\n  @Module({\n    imports: [AppModule, ...modules],\n  })\n  class MainModule {}\n\n  return NestFactory.create(MainModule);\n});\n")),(0,a.kt)("h2",{id:"koa"},(0,a.kt)("a",{parentName:"h2",href:"https://koajs.com/"},"Koa")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts")," \u7684\u65f6\u5019\uff0cModern.js \u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-body"),"\uff1b\u5f53\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts")," \u65f6\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-body")," \u89e3\u6790\u8bf7\u6c42\u4f53\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Koa from 'koa'\nimport koaBody from 'koa-body'\n\nconst app = new Koa();\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\napp.use(koaBody());\n\nexport default app;\n")),(0,a.kt)("h2",{id:"egg"},(0,a.kt)("a",{parentName:"h2",href:"https://eggjs.org/"},"Egg")),(0,a.kt)("p",null,"\u4f7f\u7528 Egg \u6846\u67b6\u65f6\uff0c\u540c\u6837\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u53ef\u4ee5\u81ea\u5b9a\u4e49\u542f\u52a8\u903b\u8f91\uff1b\n\u4f46\u4e0e\u5176\u4ed6\u6846\u67b6\u4e0d\u540c\uff0cegg \u4e2d\u6b64\u6587\u4ef6\u9075\u5faa egg \u81ea\u8eab\u7684",(0,a.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/app-start.html"},"\u89c4\u8303"),"\uff0c\u800c\u4e0d\u662f Modern.js \u7684\u7ea6\u5b9a\u3002"))}c.isMDXComponent=!0}}]);