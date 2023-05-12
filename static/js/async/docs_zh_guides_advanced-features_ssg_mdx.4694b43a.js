(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_ssg_mdx"],{3470:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return t},default:function(){return a}});var d=s("9880"),r=s("23169"),c=s.ir(s("78203")),i={title:"静态站点生成（SSG）",sidebar_position:4},l="静态站点生成（SSG）",t=[{text:"在约定式路由中使用",depth:3,id:"在约定式路由中使用"},{text:"在自控式路由中使用",depth:3,id:"在自控式路由中使用"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",strong:"strong",h3:"h3",ul:"ul",li:"li"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"静态站点生成（ssg）",children:["静态站点生成（SSG）",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态站点生成（ssg）",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"SSG（Static Site Generation）是一种基于数据与模板，在构建时渲染完整静态网页的技术解决方案。"}),"\n",(0,d.jsxs)(n.p,{children:["我们首先需要执行 ",(0,d.jsx)(n.code,{children:"pnpm run new"})," 启用 SSG 功能："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用「SSG」功能\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["执行命令后，在 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 中注册 SSG 插件："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import ssgPlugin from '@modern-js/plugin-ssg';\n\nexport default defineConfig({\n  output: {\n    ssg: true,\n  },\n  plugins: [..., ssgPlugin()],\n});\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["SSG 在",(0,d.jsx)(n.strong,{children:"约定式路由"}),"和",(0,d.jsx)(n.strong,{children:"自控式路由"}),"下的使用方式不同。"]}),"\n",(0,d.jsxs)(n.h3,{id:"在约定式路由中使用",children:["在约定式路由中使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在约定式路由中使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"约定式路由"}),"中， Modern.js 根据入口下的文件结构生成路由，因此框架能够收集完整的路由信息。"]}),"\n",(0,d.jsx)(n.p,{children:"例如，以下是一个使用约定式路由的项目目录结构："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{children:".\n├── src\n│   └── routes\n│       ├── layout.tsx\n│       ├── page.tsx\n│       └── user\n│           ├── layout.tsx\n│           ├── page.tsx\n│           └── profile\n│               └── page.tsx\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"上述文件目录将会生成以下三条路由："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"/"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"/user"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"/user/profile"})}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["如果还不了解约定式路由的规则，可以先查看",(0,d.jsx)(n.a,{href:"/guides/basic-features/routes",children:"路由"}),"。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.code,{children:"src/routes/page.tsx"})," 中添加组件代码："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"src/routes/page.tsx"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-jsx",meta:'title="src/routes/page.tsx"',children:"export default () => {\n  return <div>Index Page</div>;\n};\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["SSG 也是在 Node.js 环境渲染页面，因此我们可以在",(0,d.jsx)(n.strong,{children:"开发阶段开启 SSR"}),"，提前在暴露代码问题，验证 SSG 渲染效果："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: process.env.NODE_ENV === 'development',\n  }\n}\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["在项目根路径下执行 ",(0,d.jsx)(n.code,{children:"pnpm run dev"})," 命令，查看 ",(0,d.jsx)(n.code,{children:"dist/"})," 目录，此时只生成一个 HTML 文件 ",(0,d.jsx)(n.code,{children:"main/index.html"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["在项目根路径下执行 ",(0,d.jsx)(n.code,{children:"pnpm run build"})," 命令，构建完成后，查看 ",(0,d.jsx)(n.code,{children:"dist/"})," 目录，此时生成 ",(0,d.jsx)(n.code,{children:"main/index.html"}),"、",(0,d.jsx)(n.code,{children:"main/user/index.html"})," 和 ",(0,d.jsx)(n.code,{children:"main/user/profile/index.html"})," 三个 HTML 文件，内容分别对应上述三条路由。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"约定式路由"}),"中的每一条路由，都会生成一个单独的 HTML 文件。查看 ",(0,d.jsx)(n.code,{children:"main/index.html"}),"，可以发现包含 ",(0,d.jsx)(n.code,{children:"Index Page"})," 的文本内容，这正是 SSG 的效果。"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 ",(0,d.jsx)(n.code,{children:"pnpm run serve"})," 启动项目后，访问页面，在浏览器我们工具的 Network 窗口，查看请求返回的文档，文档包含组件渲染后的完整页面内容。"]}),"\n",(0,d.jsxs)(n.h3,{id:"在自控式路由中使用",children:["在自控式路由中使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在自控式路由中使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"自控式路由"}),"是通过组件代码定义路由，需要应用运行起来才能获取准确的路由信息。因此，无法开箱即用的使用 SSG 功能。此时需要用户提前告知 Modern.js 框架，哪些路由需要开启 SSG 功能。"]}),"\n",(0,d.jsxs)(n.p,{children:["例如有以下代码，包含多条路由，设置 ",(0,d.jsx)(n.code,{children:"output.ssg"})," 为 ",(0,d.jsx)(n.code,{children:"true"})," 时，默认只会渲染入口路由即 ",(0,d.jsx)(n.code,{children:"/"}),"："]}),"\n","\n",(0,d.jsx)(c.default,{}),"\n",(0,d.jsxs)(n.p,{children:["如果我们希望同时开启 ",(0,d.jsx)(n.code,{children:"/about"})," 的 SSG 功能，可以配置 ",(0,d.jsx)(n.code,{children:"output.ssg"}),"，告知 Modern.js 开启指定路由的 SSG 功能。"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["执行 ",(0,d.jsx)(n.code,{children:"pnpm run build"})," 与 ",(0,d.jsx)(n.code,{children:"pnpm run serve"})," 后，访问 ",(0,d.jsx)(n.code,{children:"http://localhost:8080/about"}),"，在 Preview 视图中可以看到页面已经完成渲染。"]}),"\n",(0,d.jsxs)(n.p,{children:["查看构建产物文件，可以看到 ",(0,d.jsx)(n.code,{children:"dist/"})," 目录中，新增了一个 ",(0,d.jsx)(n.code,{children:"main/about/index.html"})," 文件。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["以上仅介绍了单入口的情况，更多相关内容可以查看 ",(0,d.jsx)(n.a,{href:"/configure/app/output/ssg",children:"API 文档"}),"。"]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}}}]);