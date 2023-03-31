(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_hooks_src_pages_mdx"],{32872:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return t},default:function(){return r}});var a=s("12151"),i=s("21447");let c={title:"pages/",sidebar_position:3},d="pages/",t=[{text:"Dynamic Routing",depth:3,id:"dynamic-routing"},{text:"Global Layout",depth:3,id:"global-layout"},{text:"Partial Layout",depth:3,id:"partial-layout"},{text:"404 路由",depth:3,id:"404-路由"}];function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"pages/",children:["pages/",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pages/",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Entry identifier if the application want uses file system-based routing."}),"\n",(0,a.jsxs)(n.p,{children:["When the entry is the ",(0,a.jsx)(n.strong,{children:"Pages entry"})," type, the files in the ",(0,a.jsx)(n.code,{children:"pages/"})," directory will be analyzed to client side routing."]}),"\n",(0,a.jsx)(n.p,{children:"For example, the following directory:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    └── pages\n        ├── about\n        │   └── index.jsx\n        ├── index.jsx\n        └── info.jsx\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"The generated route is configured as:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info' component: 'pages/info.jsx' },\n  { path: '/about', component: 'pages/about/index.jsx' }\n]\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"Files match the following conditions will not be treated as routing files:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["suffix is not ",(0,a.jsx)(n.code,{children:".(j|t)sx?"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".d.ts"})," type definition file."]}),"\n",(0,a.jsxs)(n.li,{children:["test file suffix like ",(0,a.jsx)(n.code,{children:".(test|spec|e2e).(j|t)sx?"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:["it is recommended to write only the routing files in the ",(0,a.jsx)(n.code,{children:"pages/"}),", and write the business logic to the independent features directory outside the ",(0,a.jsx)(n.code,{children:"pages/"}),". In this way, most of the files in the pages directory will be routing files, and there is no need for additional filtering rules.","\n"]})]}),"\n",(0,a.jsxs)(n.h3,{id:"dynamic-routing",children:["Dynamic Routing",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Directories or files wrapped with ",(0,a.jsx)(n.code,{children:"[]"})," are considered dynamic routing."]}),"\n",(0,a.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    └── pages\n        ├── [post]\n        │   ├── detail.jsx\n        │   └── index.js\n        ├── users\n        │   └── [id].jsx\n        ├── index.jsx\n        └── info.jsx\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"The generated route is configured as:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info', component: 'pages/info.jsx' },\n  { path: '/:post/', component: 'pages/[post]/index.js' },\n  { path: '/:post/detail' components: 'pages/[post]/detail.jsx'},\n  { path: '/users/:id', components: 'pages/users/[id].jsx'}\n]\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["Basis dynamic routing, it supports adding special routing suffixes ",(0,a.jsx)(n.code,{children:"(*、?、+)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For example: ",(0,a.jsx)(n.code,{children:"src/pages/users/[id]*.tsx"})," generate route ",(0,a.jsx)(n.code,{children:"/users/:id*"})]}),"\n",(0,a.jsxs)(n.h3,{id:"global-layout",children:["Global Layout",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#global-layout",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["When the entire App needs a global ",(0,a.jsx)(n.code,{children:"layout"}),", it can be achieved through ",(0,a.jsx)(n.code,{children:"pages/_app.tsx"}),", which as follows:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport UserLayout from 'xxxx';\n\nexport default const App = ({Component, ...pageProps}:{ Component: React.ComponentType}) => {\n  return (\n    <UserLayout>\n      <Component {...pageProps} />\n    </UserLayout>\n  );\n}\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["The above ",(0,a.jsx)(n.code,{children:"Component"})," is the component to which the route is accessed."]}),"\n",(0,a.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:".\n└── pages\n    ├── a\n    │   ├── b\n    │   │   └── index.js\n    │   └── index.js\n    └── index.js\n"})})]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["access ",(0,a.jsx)(n.code,{children:"/"}),", the ",(0,a.jsx)(n.code,{children:"Component"})," is ",(0,a.jsx)(n.code,{children:"pages/index.js"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["access ",(0,a.jsx)(n.code,{children:"/a"}),", the ",(0,a.jsx)(n.code,{children:"Component"})," is ",(0,a.jsx)(n.code,{children:"pages/a/index.js"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["access ",(0,a.jsx)(n.code,{children:"/a/b"}),", the ",(0,a.jsx)(n.code,{children:"Component"})," is ",(0,a.jsx)(n.code,{children:"pages/a/b/index.js"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.p,{className:"modern-directive-title",children:"Advantages"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"preserve the state of the global layout when the page changes."}),"\n",(0,a.jsx)(n.li,{children:"add global css."}),"\n",(0,a.jsx)(n.li,{children:"handle ComponentDidCatch error"}),"\n",(0,a.jsxs)(n.li,{children:["use ",(0,a.jsx)(n.a,{href:"/en/apis/app/runtime/app/define-config",children:"defineConfig"})," dynamic configuration runtime."]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(n.h3,{id:"partial-layout",children:["Partial Layout",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#partial-layout",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"When developing an App, where sub routes under the same route may share the layout."}),"\n",(0,a.jsxs)(n.p,{children:["For this scene, Modern.js convention, when there is a ",(0,a.jsx)(n.code,{children:"_layout.js"})," in the directory, the routes can shared this layout."]}),"\n",(0,a.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"└── pages\n    ├── a\n    │   ├── b\n    │   │   └── index.js\n    │   ├── _layout.js\n    │   └── index.js\n    └── index.js\n"})})]})}),"\n",(0,a.jsxs)(n.div,{className:"language-",children:[(0,a.jsx)(n.div,{className:"modern-code-title",children:"pages/a/_layout.js"}),(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",meta:'title="pages/a/_layout.js"',children:"import React from 'react';\n\nconst ALayout = ({ Component, ...pageProps }) => {\n  return <Component {...pageProps} />;\n};\nexport default ALayout;\n"})})]})]}),"\n",(0,a.jsx)(n.p,{children:"The Component props is the specific route, for example"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["access ",(0,a.jsx)(n.code,{children:"/a"}),", the ",(0,a.jsx)(n.code,{children:"Component"})," is ",(0,a.jsx)(n.code,{children:"pages/a/index.js"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["访问 ",(0,a.jsx)(n.code,{children:"/a/b"}),", the ",(0,a.jsx)(n.code,{children:"Component"})," is ",(0,a.jsx)(n.code,{children:"pages/a/b/index.js"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In this way, you can use ",(0,a.jsx)(n.code,{children:"pages/a/_layout.js"})," to display the routing common layout in the ",(0,a.jsx)(n.code,{children:"a"})," directory."]}),"\n",(0,a.jsxs)(n.h3,{id:"404-路由",children:["404 路由",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#404-路由",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The convention ",(0,a.jsx)(n.code,{children:"pages/404.[tj]sx"})," is the default 404 route."]}),"\n",(0,a.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    └── pages\n        ├── user.js\n        ├── home.js\n        ├── 404.js\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"the generated route is configured is as:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"[\n { path: '/user', component: './pages/user.js'},\n { path: '/home', component: './pages/home.js' },\n { path: '*', component: './pages/404.js'}\n]\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["All unmatched routes will match to ",(0,a.jsx)(n.code,{children:"pages/404.[tj]s"}),"."]})]})}var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}}}]);