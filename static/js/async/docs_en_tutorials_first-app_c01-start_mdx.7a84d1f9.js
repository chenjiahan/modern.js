(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c01-start_mdx"],{83840:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return p}});var r,a=t("15169"),i=t("43932"),s=t("9880"),o=t("23169"),c=t.ir(t("98460")),l=t.ir(t("6918")),d=t.ir(t("76876"));function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",img:"img"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"create-project",children:["Create Project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Starting from this chapter, we will enter the practical tutorial section. In the practical tutorial, we will start with environment preparation, starting from simple to complex, building a real project step by step."}),"\n",(0,s.jsxs)(n.h2,{id:"environment-preparation",children:["Environment preparation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"initialization-project",children:["Initialization project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialization-project",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"We create a new directory and initialize the project via the command line tool:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n","\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"debug-project",children:["Debug Project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-project",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"modify-the-code",children:["Modify the code",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-code",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"We delete the original sample code and replace it with a simple point of contact list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"const getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove redundant css files and keep the directory free of redundant files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rm src/routes/index.css\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Since the framework supports ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"HMR"})," by default, you can see that the content in ",(0,s.jsx)(n.a,{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:8080/"})," is automatically updated to:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvt/ljhwZthlaukjlkulzlp/screenshot-20221214-141909.png",alt:"result"})}),"\n",(0,s.jsx)(n.p,{children:"The page has no styles at the moment. The next chapter will expand on this section."}),"\n",(0,s.jsxs)(n.h2,{id:"enable-ssr",children:["Enable SSR",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-ssr",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Next, we modify the ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," in the project to enable the SSR capability:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Re-execute ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," to find that the project has completed page rendering at the server level."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/tutorials/first-app/c01-start.mdx"]={toc:[{text:"Environment preparation",id:"environment-preparation",depth:2},{text:"Initialization project",id:"initialization-project",depth:2},{text:"Debug Project",id:"debug-project",depth:2},{text:"Modify the code",id:"modify-the-code",depth:2},{text:"Enable SSR",id:"enable-ssr",depth:2}],title:"Create Project",frontmatter:{title:"Create Project"}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,i._(a._({},e),{children:(0,s.jsx)(h,a._({},e))})):h(e)}}}]);