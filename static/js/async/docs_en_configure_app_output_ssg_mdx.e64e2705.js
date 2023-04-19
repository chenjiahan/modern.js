(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_ssg_mdx"],{2552:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return o},default:function(){return l}});var r=s("12151"),t=s("23169"),i=s.ir(s("69210")),a={sidebar_label:"ssg"},d="output.ssg",o=[{text:"Example",depth:2,id:"example"},{text:"Single Entry",depth:3,id:"single-entry"},{text:"Multi Entries",depth:3,id:"multi-entries"},{text:"Configure Route",depth:3,id:"configure-route"},{text:"Prevent Default",depth:3,id:"prevent-default"},{text:"Dynamic Params",depth:3,id:"dynamic-params"}];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h2:"h2",h3:"h3",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"output-ssg",children:["output.ssg",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-ssg",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.code,{children:"object"})," | ",(0,r.jsx)(n.code,{children:"function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Enable the SSG for ",(0,r.jsx)(n.strong,{children:"Self-controlled Routing"})," or ",(0,r.jsx)(n.strong,{children:"Conventional Routing"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["For more routes detail, see ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"routes"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"single-entry",children:["Single Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-entry",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the configuration is set to ",(0,r.jsx)(n.code,{children:"true"}),", the SSG of all entries will be enabled by default."]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.strong,{children:"self-controlled routing"}),", the root route of the entry will be rendered. For ",(0,r.jsx)(n.strong,{children:"convention routing"}),", every route in the entry will be rendered."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the ",(0,r.jsx)(n.code,{children:"src/"})," directory has the following file structure that satisfies ",(0,r.jsx)(n.strong,{children:"conventional routing"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── routes\n│       ├── layout.tsx\n│       ├── page.tsx\n│       └── user\n│           ├── layout.tsx\n│           ├── page.tsx\n│           └── profile\n│               └── page.tsx\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Make the following config in ",(0,r.jsx)(n.code,{children:"modern.config.[tj]s"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  output: {\n    ssg: true,\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["After executing ",(0,r.jsx)(n.code,{children:"pnpm build"})," to build the application. The ",(0,r.jsx)(n.code,{children:"dist/"})," directory will generate three HTML for each of the three routes (only one HTML if SSG not enabled), and all HTML has been rendered."]}),"\n",(0,r.jsxs)(n.p,{children:["For example the following ",(0,r.jsx)(n.strong,{children:"self-controlled routing"}),":"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.p,{children:["Also using the above configuration, after executing ",(0,r.jsx)(n.code,{children:"pnpm run build"}),", only the entry route ",(0,r.jsx)(n.code,{children:"/"})," will generate the rendered HTML."]}),"\n",(0,r.jsxs)(n.h3,{id:"multi-entries",children:["Multi Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#multi-entries",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"output.ssg"})," can also be configured according to the entries, and the rules that the configuration takes effect are also determined by the entries routing method."]}),"\n",(0,r.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   ├── entryA\n│   │   └── routes\n│   │       ├── layout.tsx\n│   │       ├── page.tsx\n│   │       └── user\n│   │           ├── layout.tsx\n│   │           ├── page.tsx\n│   │           └── profile\n│   │               └── page.tsx\n│   └── entryB\n│       └── App.tsx\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["By default, all entryA entrances are rendered at build time after setting ",(0,r.jsx)(n.code,{children:"output.ssg"})," to ",(0,r.jsx)(n.code,{children:"true"}),". You can configure ",(0,r.jsx)(n.code,{children:"false"})," to cancel the default behavior of the specified entries. For example, to cancel the rendering of the ",(0,r.jsx)(n.code,{children:"entryA"})," at build time:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      entryA: true,\n      entryB: false,\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"configure-route",children:["Configure Route",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-route",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["As mentioned above, ",(0,r.jsx)(n.strong,{children:"Self-Controlled Routing"})," only enables SSG configuration for entries route by default."]}),"\n",(0,r.jsxs)(n.p,{children:["Set specific routes in ",(0,r.jsx)(n.code,{children:"output.ssg"})," can tell Modern.js to enable the SSG of these client side routes. For example, the content of the above ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," file is:"]}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.p,{children:["When set like this in ",(0,r.jsx)(n.code,{children:"modern.config.[jt]s"}),", the ",(0,r.jsx)(n.code,{children:"/about"})," route will also enable SSG:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"Modern.js will automatically concat the complete URL according to the entry and hand it over to the SSG plugin to complete the rendering."}),"\n",(0,r.jsx)(n.p,{children:"Request headers can also be configured for specific entries or routes, for example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      headers: {},\n      routes: [\n        '/',\n        {\n          url: '/about',\n          headers: {},\n        },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"headers"})," set in the route override the ",(0,r.jsx)(n.code,{children:"headers"})," set in the entry."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"prevent-default",children:["Prevent Default",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prevent-default",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.strong,{children:"Conventional Routing"})," all turn on SSG. Modern.js provides another field to prevent the default SSG behavior."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following directory structure , ",(0,r.jsx)(n.code,{children:"/"}),"、",(0,r.jsx)(n.code,{children:"/user"})," and ",(0,r.jsx)(n.code,{children:"/user/profle"})," all have SSG enabled:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── routes\n│       ├── layout.tsx\n│       ├── page.tsx\n│       └── user\n│           ├── layout.tsx\n│           ├── page.tsx\n│           └── profile\n│               └── page.tsx\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"You can set this to disable the default behavior of a client-side route:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    preventDefault: ['/user'],\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"dynamic-params",children:["Dynamic Params",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-params",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Some routes may be dynamic, such as the ",(0,r.jsx)(n.code,{children:"/user/:id"})," in a self-controlled route or the route generated by the ",(0,r.jsx)(n.code,{children:"user/[id]/page.tsx"})," file in a conventional route."]}),"\n",(0,r.jsxs)(n.p,{children:["configure specific parameters in ",(0,r.jsx)(n.code,{children:"output.ssg"})," to render the route of the specified parameters, for example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: [\n        {\n          url: '/user/:id',\n          params: [\n            {\n              id: 'modernjs',\n            },\n          ],\n        },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"The features of dynamic routing and SSG is useful when generating static pages in real time based on CMS system."})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);