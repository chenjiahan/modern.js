(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c08-entries_mdx"],{44437:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var s,o=t("15169"),i=t("43932"),r=t("9880"),a=t("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"add-application-entry",children:["Add Application Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-application-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In the last chapter, we basically completed the development of the point of contact list application, introduced the usage of some functions in the Modern.js, and recommended best practices."}),"\n",(0,r.jsx)(n.p,{children:"In this chapter, we will describe how to add a new entry to the application."}),"\n",(0,r.jsxs)(n.h2,{id:"new-entry",children:["New entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#new-entry",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["A complete project may require multiple entries, Modern.js supports the automatic creation of new entries, as mentioned in the previous section, ",(0,r.jsx)(n.code,{children:"pnpm run new"})," can enable optional features."]}),"\n",(0,r.jsxs)(n.p,{children:["We can also use it to create new project elements and execute ",(0,r.jsx)(n.code,{children:"pnpm run new"})," in the project root directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'? Please select the operation you want: Create Element\n? Please select the type of element to create: New "entry"\n? Please fill in the entry name: landing-page\n'})}),"\n",(0,r.jsx)(n.p,{children:"When created, the project will look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── README.md\n├── modern.config.ts\n├── node_modules\n├── package.json\n├── pnpm-lock.yaml\n├── src\n│   ├── modern-app-env.d.ts\n│   ├── landing-page\n│   │   └── routes\n│   │       ├── index.css\n│   │       ├── layout.tsx\n│   │       └── page.tsx\n│   └── myapp\n│       ├── components\n│       │   ├── Avatar\n│       │   │   └── index.tsx\n│       │   └── Item\n│       │       └── index.tsx\n│       ├── containers\n│       │   └── Contacts.tsx\n│       ├── models\n│       │   └── contacts.ts\n│       ├── routes\n│       │   ├── archives\n│       │   │   └── page.tsx\n│       │   ├── layout.tsx\n│       │   └── page.tsx\n│       └── styles\n│           └── utils.css\n└── tsconfig.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can see that the files of the contact list application are automatically refactored into ",(0,r.jsx)(n.code,{children:"src/myapp/"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["At the same time, a new ",(0,r.jsx)(n.code,{children:"src/landing-page/"})," is created, which also has ",(0,r.jsx)(n.code,{children:"routes/*"})," (the ",(0,r.jsx)(n.code,{children:"pnpm run new"})," command only does these things, so you can also easily create new entries or modify entries manually)."]}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," to display:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c08-entries-myapp.png",alt:"design"})}),"\n",(0,r.jsxs)(n.p,{children:["Access ",(0,r.jsx)(n.code,{children:"http://localhost:8080/"})," to see the application as before."]}),"\n",(0,r.jsxs)(n.p,{children:["Visit ",(0,r.jsx)(n.code,{children:"http://localhost:8080/landing-page"})," to see the landing-page for the new entry you just created (Modern.js automatically generated default page)."]}),"\n",(0,r.jsxs)(n.p,{children:["One of the design principles of the Modern.js framework is [",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Convention_over_configuration",target:"_blank",rel:"noopener noreferrer",children:"Convention over Configuration"})," ]. In most cases, you can write code directly by convention without any configuration. The directory structure in ",(0,r.jsx)(n.code,{children:"src/"})," is a convention:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"src/myapp/"})," and ",(0,r.jsx)(n.code,{children:"src/landing-page/"})," are automatically identified as two application portals: myapp and landing-page."]}),"\n",(0,r.jsxs)(n.p,{children:["The directory name of ",(0,r.jsx)(n.code,{children:"src/myapp/"})," is the same as the project name (",(0,r.jsx)(n.code,{children:"name"})," in ",(0,r.jsx)(n.code,{children:"package.json"}),"), which will be considered as the main entry of the project, and the root path of the project URL (the default in the development environment is ",(0,r.jsx)(n.code,{children:"http://localhost:8080/"}),") will automatically point to the main entry."]}),"\n",(0,r.jsxs)(n.p,{children:["The URL of other entries is to append the entry name after the root path, such as ",(0,r.jsx)(n.code,{children:"http://localhost:8080/landing-page"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Next, we rename ",(0,r.jsx)(n.code,{children:"src/myapp/"})," to ",(0,r.jsx)(n.code,{children:"src/contacts/"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mv src/myapp src/contacts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," again, the result becomes:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c08-entries-contacts.png",alt:"design"})}),"\n",(0,r.jsxs)(n.p,{children:["There is no longer a main entry, the point of contact list is now a normal entry that needs to be accessed with ",(0,r.jsx)(n.code,{children:"http://localhost:8080/contacts"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"modify-the-configuration-by-entry",children:["Modify the configuration by entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-configuration-by-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In the Modern.js configuration file, we can write our own code to control the configuration of the project."}),"\n",(0,r.jsxs)(n.p,{children:["Now, modify the ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," to add something:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      'landing-page': false,\n    },\n  },\n  plugins: [appTools(), tailwindcssPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"pnpm run dev"}),", and then open ",(0,r.jsx)(n.code,{children:"view-source: http://localhost:8080/landing-page"})," with the browser, you can see that the content of the ",(0,r.jsx)(n.code,{children:"landing-page"})," web page is dynamically loaded through js, and the SSR function of this page is turned off."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"ssrByEntries"})," and its value are annotated, the SSR function of landing-page is restored."]}),"\n",(0,r.jsx)(n.p,{children:"Other times, you need some more sophisticated logic to do the setup, such as JS variables, expressions, import modules, etc., for example, only in the development environment to enable SSR:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  server: {\n    ssrByEntries: {\n      'landing-page': process.env.NODE_ENV !== 'production',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"So far, the prototype of our point of contact list application is almost complete \uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F."}),"\n",(0,r.jsxs)(n.h2,{id:"next-step",children:["Next step",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Then you can further refine your application by following more tutorials like ",(0,r.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Guides"}),", ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"configuration"}),", and more."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/tutorials/first-app/c08-entries.mdx"]={toc:[{text:"New entry",id:"new-entry",depth:2},{text:"Modify the configuration by entry",id:"modify-the-configuration-by-entry",depth:2},{text:"Next step",id:"next-step",depth:2}],title:"Add Application Entry",frontmatter:{title:"Add Application Entry"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,i._(o._({},e),{children:(0,r.jsx)(c,o._({},e))})):c(e)}}}]);