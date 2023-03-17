(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_hooks_src_routes_mdx"],{77089:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return r},toc:function(){return c},title:function(){return a},default:function(){return o}});var l=n("12151");let r={title:"routes/",sidebar_position:2},c=[{id:"基本示例",text:"基本示例",depth:2},{id:"动态路由",text:"动态路由",depth:2},{id:"布局组件",text:"布局组件",depth:2}],a="routes/";function i(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",ul:"ul",li:"li"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"routes",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#routes",children:"#"}),"routes/"]}),"\n",(0,l.jsx)(e.p,{children:"应用使用基于文件系统路由时的入口标识。"}),"\n",(0,l.jsxs)(e.p,{children:["当项目结构为 ",(0,l.jsx)(e.code,{children:"Routes 入口"})," 类型时， 会分析 ",(0,l.jsx)(e.code,{children:"src/routes"})," 目录下的文件得到客户端路由配置。具体用法请查看",(0,l.jsx)(e.a,{href:"/guides/basic-features/routes.html",children:"约定式路由"})]}),"\n",(0,l.jsxs)(e.p,{children:["任何在 ",(0,l.jsx)(e.code,{children:"src/routes"})," 下的 ",(0,l.jsx)(e.code,{children:"layout.[tj]sx"})," 和 ",(0,l.jsx)(e.code,{children:"page.[tj]sx"})," 都会作为应用的路由："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── routes"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── layout.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── user"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ├── layout.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        └── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"基本示例",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#基本示例",children:"#"}),"基本示例"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"routes"})," 目录下的目录名会作为路由 url 的映射，其中 ",(0,l.jsx)(e.code,{children:"layout.tsx"})," 中作为布局组件，",(0,l.jsx)(e.code,{children:"page.tsx"})," 作为内容组件，是整条路由的叶子节点，例如以下目录结构："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── routes"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── user"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        └── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"会产出下面两条路由："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"/"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"/user"})}),"\n"]}),"\n",(0,l.jsxs)(e.h2,{id:"动态路由",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"}),"动态路由"]}),"\n",(0,l.jsxs)(e.p,{children:["如果路由文件的目录名以 ",(0,l.jsx)(e.code,{children:"[]"})," 命名，生成的路由会作为动态路由。例如以下文件目录："]}),"\n",(0,l.jsxs)(e.div,{className:"language-text",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})})]})]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"routes/[id]/page.tsx"})," 文件会转为 ",(0,l.jsx)(e.code,{children:"/:id"})," 路由。除了可以确切匹配的 ",(0,l.jsx)(e.code,{children:"/blog"})," 路由，其他所有 ",(0,l.jsx)(e.code,{children:"/xxx"})," 都会匹配到该路由。"]}),"\n",(0,l.jsxs)(e.p,{children:["在组件中，可以通过 ",(0,l.jsx)(e.a,{href:"/apis/app/runtime/router/router.html#useparams",children:"useParams"})," 获取对应命名的参数。"]}),"\n",(0,l.jsxs)(e.p,{children:["在 loader 中，params 会作为 ",(0,l.jsx)(e.a,{href:"/guides/basic-features/data-fetch.html#loader-%E5%87%BD%E6%95%B0",children:"loader"})," 的入参，通过 ",(0,l.jsx)(e.code,{children:"params"})," 的属性可以获取到对应的参数。"]}),"\n",(0,l.jsxs)(e.h2,{id:"布局组件",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#布局组件",children:"#"}),"布局组件"]}),"\n",(0,l.jsxs)(e.p,{children:["如下面的例子，可以通过添加 ",(0,l.jsx)(e.code,{children:"layout.tsx"}),"，为所有路由组件添加公共的布局组件："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── routes"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── layout.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ├── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── user"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ├── layout.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        └── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["在布局组件中可以通过使用 ",(0,l.jsx)(e.code,{children:"<Outlet>"})," 表示子组件："]}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"routes/layout.tsx"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Link"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Outlet"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" useLoaderData } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/router'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <>"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Outlet"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Outlet"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </>"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive note",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n",(0,l.jsx)(e.code,{children:"<Outlet>"})," 是 React Router 6 中新的 API，详情可以查看 ",(0,l.jsx)(e.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"nofollow",children:"Outlet"}),"."]})})]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}}}]);