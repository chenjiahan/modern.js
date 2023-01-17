"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6791],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_position:3,title:"Frameworks"},i=void 0,s={unversionedId:"guides/advanced-features/bff/frameworks",id:"guides/advanced-features/bff/frameworks",title:"Frameworks",description:"Modern.js's BFF supports different runtime frameworks, currently Modern.js's BFF supports two runtime frameworksExpress.js \u548c Koa.js.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/advanced-features/bff/frameworks.md",sourceDirName:"guides/advanced-features/bff",slug:"/guides/advanced-features/bff/frameworks",permalink:"/v2/en/docs/guides/advanced-features/bff/frameworks",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Frameworks"},sidebar:"guidesSidebar",previous:{title:"Writing Type",permalink:"/v2/en/docs/guides/advanced-features/bff/type"},next:{title:"Use Proxy",permalink:"/v2/en/docs/guides/advanced-features/bff/bff-proxy"}},p={},l=[{value:"Function Writing",id:"function-writing",level:2},{value:"Framework Writing",id:"framework-writing",level:2},{value:"Express",id:"express",level:3},{value:"Koa",id:"koa",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js's BFF supports different runtime frameworks, currently Modern.js's BFF supports two runtime frameworks",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express.js")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa.js"),"."),(0,a.kt)("h2",{id:"function-writing"},"Function Writing"),(0,a.kt)("p",null,"Under the function writing, only the middleware writing method of various runtime frameworks is different, and other implementations are basically the same. Take Express as an example to introduce how to write a middleware by hand in the ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_ app.ts")," and add permission verification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\nimport { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req: Request, res: Response, next: NextFunction) => {\n    if (req.url !== '/api/login') {\n      const sid = req?.cookies?.sid;\n      if (!sid) {\n        res.status(400);\n        res.json({ code: -1, message: 'need login' });\n      } else {\n        next();\n      }\n    } else {\n      next();\n    }\n  });\n});\n")),(0,a.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a\u666e\u901a\u7684 BFF \u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default async () => {\n  return 'Hello Modern.js';\n};\n")),(0,a.kt)("p",null,"Finally, add the access code of the interface in the front-end ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),", and call it directly in an integrated way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchMyApi() {\n      const { message } = await hello();\n      setText(message);\n    }\n\n    fetchMyApi();\n  }, []);\n\n  return <p>{text}</p>;\n};\n")),(0,a.kt)("p",null,"Then exec ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," starts the project, and accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/")," will find that the request for'/api/hello 'is blocked:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network2.png",alt:"Network"})),(0,a.kt)("p",null,"Finally, modify the front-end code ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," to call the login interface before accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\nimport { post as login } from '@api/login';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchAfterLogin() {\n      const { code } = await login();\n      if (code === 0) {\n        const { message } = await hello();\n        setText(message);\n      }\n    }\n    fetchAfterLogin();\n  }, []);\n\n  return <p>{text}</p>;\n};\n")),(0,a.kt)("p",null,"Refresh the page and you can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello")," was accessed successfully:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network3.png",alt:"Network"})),(0,a.kt)("p",null,"The above code simulates the way to add middleware to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/_app.ts")," to achieve an easy login function. Also, other functions can be implemented in this hook file to extend BFF Server."),(0,a.kt)("h2",{id:"framework-writing"},"Framework Writing"),(0,a.kt)("p",null,"Under the framework writing, Modern.js does not collect middleware in the ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_app.ts"),", and the running process is controlled by the plugin itself."),(0,a.kt)("h3",{id:"express"},"Express"),(0,a.kt)("p",null,"The framework writing of Express supports defining the startup logic of API Server in ",(0,a.kt)("inlineCode",{parentName:"p"},"api/app.[tj]s"),". performing the initialization work of the application, adding global middleware, declaring routes, and even extending the original framework."),(0,a.kt)("p",null,"The route defined by the BFF function will be registered after the route defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts")," file, so here you can also intercept the route defined by the BFF function, preprocess or respond in advance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/app.ts"',title:'"api/app.ts"'},"import express from 'express';\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (req, res, next) => {\n  console.info(`access url: ${req.url}`);\n  next();\n});\n\nexport default app;\n")),(0,a.kt)("h3",{id:"koa"},"Koa"),(0,a.kt)("p",null,"The Koa framework is written in a similar way to Express. It supports defining the startup logic of API Server in ",(0,a.kt)("inlineCode",{parentName:"p"},"app.[tj]s"),", performing the initialization work of the application, adding global middleware, declaring routes, extending the original framework, etc."),(0,a.kt)("p",null,"The route defined by the BFF function will be registered after the route defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts")," file, so here you can also intercept the route defined by the BFF function, preprocess or respond in advance."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use the framework writing, when there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts"),", Modern.js will add koa-body by default. When there is ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts"),", if the developer wants to use the BFF function with Body, he needs to ensure that the koa-body middleware has been added.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/app.ts",title:"api/app.ts"},"import koa from 'koa';\n\nconst app = new Koa();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\nexport default app;\n")))}c.isMDXComponent=!0}}]);