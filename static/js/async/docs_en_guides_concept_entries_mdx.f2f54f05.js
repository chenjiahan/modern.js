(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_concept_entries_mdx"],{723:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},toc:function(){return c},title:function(){return d},default:function(){return a}});var s=r("12151"),t=r("21447");let i={sidebar_position:1},c=[{id:"single-entry-and-multiple-entries",text:"Single Entry and Multiple Entries",depth:2},{id:"entry-conditions",text:"Entry conditions",depth:2},{id:"difference-between-entries",text:"Difference between entries",depth:2},{id:"routes",text:"routes",depth:3},{id:"app",text:"App",depth:3},{id:"index",text:"Index",depth:3},{id:"configuration",text:"configuration",depth:2}],d="Entries";function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ol:"ol",li:"li",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"entries",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entries",children:"#"}),"Entries"]}),"\n",(0,s.jsx)(n.p,{children:"Entries are Modern.js default file convention, and each entry in the project is a separate page, corresponding to a server level route."}),"\n",(0,s.jsx)(n.p,{children:"Many configurations, such as HTML templates, Meta information, whether SSR is enabled, SSG, server level routing rules are divided by the entry dimension."}),"\n",(0,s.jsxs)(n.h2,{id:"single-entry-and-multiple-entries",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-entry-and-multiple-entries",children:"#"}),"Single Entry and Multiple Entries"]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js initialization project is a single entry, the project structure is as follows:"}),"\n",(0,s.jsxs)(n.div,{className:"language-text",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n├── src\n│   ├── modern-app-env.d.ts\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── package.json\n├── modern.config.ts\n├── pnpm-lock.yaml\n├── README.md\n└── tsconfig.json\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js can easily switch from single entry to multiple entry. You can execute ",(0,s.jsx)(n.code,{children:"pnpm run new"})," under the project to create entry through generator:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-bash",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,s.jsxs)(n.code,{children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Action: Create project element"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Create project element: New "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"entry"'})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Entry name: new-entry"})]}),"\n",(0,s.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["After execution, the ",(0,s.jsx)(n.code,{children:"src/"})," directory will become the following structure:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-text",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n├── modern-app-env.d.ts\n├── myapp\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n└── new-entry\n    └── routes\n        ├── index.css\n        ├── layout.tsx\n        └── page.tsx\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The original code was moved to the directory with the same name as the ",(0,s.jsx)(n.code,{children:"name"})," in the ",(0,s.jsx)(n.code,{children:"package.json"}),", and a new directory was created."]}),"\n",(0,s.jsxs)(n.p,{children:["After executing ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),", you can see that a ",(0,s.jsx)(n.code,{children:"/new-entry"})," route has been added, and the migrated code route has not changed."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\nModern.js will use the directory with the same name as the ",(0,s.jsx)(n.code,{children:"name"})," in the ",(0,s.jsx)(n.code,{children:"package.json"})," as the main entry, the default route is ",(0,s.jsx)(n.code,{children:"/"}),", and the default route for other entries is ",(0,s.jsx)(n.code,{children:"/{entryName}"}),"."]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"entry-conditions",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-conditions",children:"#"}),"Entry conditions"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the Modern.js entry currently scans the file under ",(0,s.jsx)(n.code,{children:"src/"}),", identifies the entry, and generates the corresponding server level route."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\nYou can change the entry directory to another directory by ",(0,s.jsx)(n.a,{href:"/en/configure/app/source/entries-dir.html",children:"source.entriesDir"}),"."]})})]}),"\n",(0,s.jsxs)(n.p,{children:["Not all first-level directories under ",(0,s.jsx)(n.code,{children:"src/"})," will become project entrances. The directory where the entry is located must meet one of the following four conditions:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Directory with ",(0,s.jsx)(n.code,{children:"routes/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Has the ",(0,s.jsx)(n.code,{children:"App.[jt]sx?"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["With ",(0,s.jsx)(n.code,{children:"index.[jt]sx?"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["With ",(0,s.jsx)(n.code,{children:"pages/"})," directory (compatible Modern.js 1.0)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"src/"})," directory satisfies the entry feature, the Modern.js considers the current project to be a single entry application."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\nSingle entry The default entry name is ",(0,s.jsx)(n.code,{children:"main"}),"."]})})]}),"\n",(0,s.jsxs)(n.p,{children:["When the project is not a single-entry application, Modern.js further look at the first-level directory under ",(0,s.jsx)(n.code,{children:"src/"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"difference-between-entries",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#difference-between-entries",children:"#"}),"Difference between entries"]}),"\n",(0,s.jsx)(n.p,{children:"Entries to different conventions have different behaviors."}),"\n",(0,s.jsxs)(n.h3,{id:"routes",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes",children:"#"}),"routes"]}),"\n",(0,s.jsxs)(n.p,{children:["If the entry is the ",(0,s.jsx)(n.code,{children:"routes/"})," convention, Modern.js will scan the files under ",(0,s.jsx)(n.code,{children:"routes"})," at startup, and automatically generate the client route based on the file convention(react-router)."]}),"\n",(0,s.jsxs)(n.p,{children:["For details, please refer to ",(0,s.jsx)(n.a,{href:"/en/guides/basic-features/routes.html",children:"Routing"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"app",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app",children:"#"}),"App"]}),"\n",(0,s.jsxs)(n.p,{children:["If the entry is the ",(0,s.jsx)(n.code,{children:"App.[jt]sx?"})," convention, the developer can freely set the client route in this file, or not set the client route."]}),"\n",(0,s.jsxs)(n.p,{children:["For details, please refer to ",(0,s.jsx)(n.a,{href:"/en/guides/basic-features/routes.html",children:"Routing"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"index",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#index",children:"#"}),"Index"]}),"\n",(0,s.jsxs)(n.p,{children:["Typically, the above two modes are sufficient, but when developers need to take over the React mount logic themselves, or take over the Webpack entry entirely, the ",(0,s.jsx)(n.code,{children:"index.[jt]sx?"}),"convention can be used."]}),"\n",(0,s.jsxs)(n.p,{children:["If the entry is the ",(0,s.jsx)(n.code,{children:"index.[jt]sx?"})," convention, the Modern.js determines the build behavior based on whether the file has a default component export."]}),"\n",(0,s.jsxs)(n.p,{children:["For details, please refer to ",(0,s.jsx)(n.a,{href:"/en/guides/concept/entries.html#%E8%87%AA%E5%AE%9A%E4%B9%89-app",children:"customized App"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"configuration",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"}),"configuration"]}),"\n",(0,s.jsxs)(n.p,{children:["In Modern.js, you can manually configure the entry in ",(0,s.jsx)(n.code,{children:"modern.config.[jt]s"}),", in addition to using the file convention to generate the entry."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\nDetails can be found in ",(0,s.jsx)(n.a,{href:"/en/configure/app/source/entries.html",children:"source.entries"}),"."]})})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);