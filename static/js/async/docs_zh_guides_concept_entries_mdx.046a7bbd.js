(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_concept_entries_mdx"],{19050:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,d=r("15169"),i=r("43932"),c=r("9880"),t=r("23169");function o(e){return(0,c.jsx)(c.Fragment,{})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fentry-mode.mdx"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,c.jsx)(o,(0,d._)({},e))})):o(e)}},17643:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,d=r("15169"),i=r("43932"),c=r("9880"),t=r("23169"),o=r("19050");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",div:"div",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"入口",children:["入口",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#入口",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"通过本章节，你可以了解到 Modern.js 中的入口约定，以及如何自定义入口。"}),"\n",(0,c.jsxs)(n.h2,{id:"什么是入口entry",children:["什么是入口（Entry）",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是入口entry",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"入口指的是一个页面的起始模块。"})}),"\n",(0,c.jsx)(n.p,{children:"在 Modern.js 项目中，每一个入口对应一个独立的页面，也对应一条服务端路由。默认情况下，Modern.js 会基于目录约定来自动确定页面的入口，同时也支持通过配置项来自定义入口。"}),"\n",(0,c.jsx)(n.p,{children:"Modern.js 提供的很多配置项都是以入口为维度进行划分的，比如页面标题、HTML 模板、页面 Meta 信息、是否开启 SSR/SSG、服务端路由规则等。"}),"\n",(0,c.jsxs)(n.h2,{id:"单入口与多入口",children:["单入口与多入口",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#单入口与多入口",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Modern.js 初始化的项目是单入口的（SPA），项目结构如下："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:".\n├── src\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── package.json\n├── modern.config.ts\n└── tsconfig.json\n"})}),"\n",(0,c.jsxs)(n.p,{children:["在 Modern.js 项目中，你可以很方便的将单入口切换成多入口，直接在项目下执行 ",(0,c.jsx)(n.code,{children:"pnpm run new"}),"，根据提示创建入口即可："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 创建工程元素\n? 请选择创建元素类型 新建「应用入口」\n? 请填写入口名称 new-entry\n"})}),"\n",(0,c.jsxs)(n.p,{children:["执行后，Modern.js 会自动生成一个新的入口目录，此时可以看到 ",(0,c.jsx)(n.code,{children:"src/"})," 目录变成如下结构："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n├── myapp    # 原入口\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n└── new-entry # 新入口\n    └── routes\n        ├── index.css\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["原本的入口代码被移动到了和 ",(0,c.jsx)(n.code,{children:"package.json"})," 中 ",(0,c.jsx)(n.code,{children:"name"})," 同名的目录下，并创建了 ",(0,c.jsx)(n.code,{children:"new-entry"})," 入口目录。"]}),"\n",(0,c.jsxs)(n.p,{children:["执行 ",(0,c.jsx)(n.code,{children:"pnpm run dev"})," 后，可以看到新增了一条名为 ",(0,c.jsx)(n.code,{children:"/new-entry"})," 的路由，并且被迁移的代码路由并未发生变化。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["Modern.js 会将与 ",(0,c.jsx)(n.code,{children:"package.json"})," 文件中 ",(0,c.jsx)(n.code,{children:"name"})," 字段同名的入口作为主入口，主入口的路由为 ",(0,c.jsx)(n.code,{children:"/"}),"，其他入口的路由为 ",(0,c.jsx)(n.code,{children:"/{entryName}"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如，",(0,c.jsx)(n.code,{children:"package.json"})," 中的 ",(0,c.jsx)(n.code,{children:"name"})," 为 ",(0,c.jsx)(n.code,{children:"myapp"})," 时，",(0,c.jsx)(n.code,{children:"src/myapp"})," 会作为项目的主入口。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.h2,{id:"入口类型",children:["入口类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#入口类型",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"不同的入口类型具有不同的编译和运行时行为。"}),"\n","\n",(0,c.jsx)(o.default,{}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，Modern.js 启动项目前会对 ",(0,c.jsx)(n.code,{children:"src/"})," 下的文件进行扫描，识别入口，并生成对应的服务端路由。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["可以通过 ",(0,c.jsx)(n.a,{href:"/configure/app/source/entries-dir",children:"source.entriesDir"})," 修改页面的入口识别目录。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["并非 ",(0,c.jsx)(n.code,{children:"src/"})," 下所有的一级目录都会成为项目入口, 入口所在目录必须满足以下四个条件之一："]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["具有 ",(0,c.jsx)(n.code,{children:"routes/"})," 目录。"]}),"\n",(0,c.jsxs)(n.li,{children:["具有 ",(0,c.jsx)(n.code,{children:"App.[jt]sx?"})," 文件。"]}),"\n",(0,c.jsxs)(n.li,{children:["具有 ",(0,c.jsx)(n.code,{children:"index.[jt]sx?"})," 文件。"]}),"\n",(0,c.jsxs)(n.li,{children:["具有 ",(0,c.jsx)(n.code,{children:"pages/"})," 目录（兼容 Modern.js 1.0）。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"src/"})," 目录满足入口特征时，Modern.js 会认为当前项目为单入口应用。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["在单入口应用中，默认的入口名为 ",(0,c.jsx)(n.code,{children:"main"}),"。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["当项目不是单入口应用时，Modern.js 会进一步查看 ",(0,c.jsx)(n.code,{children:"src/"})," 下的一级目录。"]}),"\n",(0,c.jsxs)(n.h3,{id:"框架模式入口",children:["框架模式入口",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#框架模式入口",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["框架模式指需要使用 Modern.js 框架能力，例如 Router、SSR、一体化调用等。这类入口约定下，开发者定义的入口并不是真正的 webpack 编译入口。Modern.js 在启动时会生成一个封装过的入口，可以在 ",(0,c.jsx)(n.code,{children:"node_modules/.modern/{entryName}/index.js"})," 找到真正的入口。"]}),"\n",(0,c.jsxs)(n.h4,{id:"约定式路由",children:["约定式路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["如果入口中存在 ",(0,c.jsx)(n.code,{children:"routes/"})," 目录，Modern.js 会在启动时扫描 ",(0,c.jsx)(n.code,{children:"routes/"})," 下的文件，基于文件约定，自动生成客户端路由（react-router）。例如："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── routes\n│       ├── layout.tsx\n│       └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["上述目录中，",(0,c.jsx)(n.code,{children:"layout.tsx"})," 中导出的组件会作为最外层的组件，",(0,c.jsx)(n.code,{children:"page.tsx"})," 中导出的组件会作为 ",(0,c.jsx)(n.code,{children:"/"})," 路由的组件。"]}),"\n",(0,c.jsxs)(n.p,{children:["详细内容可以参考",(0,c.jsx)(n.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"路由"}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"自控式路由",children:["自控式路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自控式路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["如果入口中存在 ",(0,c.jsx)(n.code,{children:"App.[jt]sx?"})," 文件，开发者可以在这个文件中通过代码的方式，设置客户端路由，或者不设置客户端路由。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["详细内容可以参考",(0,c.jsx)(n.a,{href:"/guides/basic-features/routes#%E8%87%AA%E6%8E%A7%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"路由"}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"自定义-bootstrap",children:["自定义 Bootstrap",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-bootstrap",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["如果入口中存在 ",(0,c.jsx)(n.code,{children:"index.[jt]sx"})," 文件，并且当文件默认导出函数时，Modern.js 会将默认的 ",(0,c.jsx)(n.code,{children:"bootstrap"})," 函数作为入参传入，并用导出的函数替代默认的 ",(0,c.jsx)(n.code,{children:"bootstrap"}),"，这样开发者可以自定义将组件挂载到 DOM 节点上，或在挂载前添加自定义行为。例如："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"export default (App: React.ComponentType, bootstrap: () => void) => {\n  // do something before bootstrap...\n  initSomething().then(() => {\n    bootstrap();\n  })\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"此时，Modern.js 生成的文件内容如下："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport customBootstrap from '@_modern_js_src/index.tsx';\nimport App from '@_modern_js_src/App';\nimport { router, state } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\nlet root = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    // runtime 的插件参数...\n  })(App);\n  if (IS_BROWSER) {\n    customBootstrap(AppWrapper, () => bootstrap(AppWrapper, MOUNT_ID, root, ReactDOM));\n  }\n  return AppWrapper;\n}\n\nAppWrapper = render();\n\nexport default AppWrapper;\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"构建模式入口",children:["构建模式入口",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建模式入口",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"构建模式是指不使用任何 Modern.js 运行时的能力，完全由开发者自己定义项目 webpack 的入口。"}),"\n",(0,c.jsxs)(n.p,{children:["如果入口中存在 ",(0,c.jsx)(n.code,{children:"index.[jt]sx"})," ，并且没有默认导出函数时，这时候该文件就是真正的 webpack 入口文件。这里和 ",(0,c.jsx)(n.a,{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer",children:"Create React App"})," 类似，需要自己将组件挂载到 DOM 节点、添加热更新代码等。例如:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js ",(0,c.jsx)(n.strong,{children:"不推荐"}),"新项目使用这种方式，这种方式丧失了框架的一些能力，如 ",(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"modern.config.js"})," 文件中的 ",(0,c.jsx)(n.code,{children:"runtime"})," 配置将不会再生效"]}),"。但是在项目从其他框架迁移到 Modern.js，例如 CRA，或是自己手动搭建的 webpack 时，这种方式会非常有用。"]}),"\n",(0,c.jsxs)(n.h2,{id:"使用配置指定入口",children:["使用配置指定入口",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用配置指定入口",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"大部分存量项目并不是按照 Modern.js 的目录结构来搭建的。如果要改成 Modern.js 约定的目录结构，会存在一定的迁移成本。"}),"\n",(0,c.jsxs)(n.p,{children:["在这种情况下，除了使用文件约定生成入口外，你可以在 ",(0,c.jsx)(n.code,{children:"modern.config.[jt]s"})," 中手动配置入口。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      // 指定一个名称为 entry_customize 的新入口\n      entry_customize: './src/home/test/index.ts',\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"禁用默认入口扫描",children:["禁用默认入口扫描",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用默认入口扫描",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"当使用自定义入口时，项目的部分结构可能恰巧命中了 Modern.js 的目录约定，但实际上这部分目录并不是真实的入口。"}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,c.jsx)(n.code,{children:"disableDefaultEntries"})," 配置，来禁用默认的入口扫描规则。当你需要自定义入口时，一般需要将 ",(0,c.jsx)(n.code,{children:"disableDefaultEntries"})," 与 ",(0,c.jsx)(n.code,{children:"entries"})," 结合使用。这样，一些存量项目可以在不修改目录结构的情况下，快速地进行迁移。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["详细用法请查看 ",(0,c.jsx)(n.a,{href:"/configure/app/source/entries",children:"source.entries"})," 和 ",(0,c.jsx)(n.a,{href:"/configure/app/source/disable-default-entries",children:"source.disableDefaultEntries"}),"。"]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fconcept%2Fentries.mdx"]={toc:[{text:"什么是入口（Entry）",id:"什么是入口entry",depth:2},{text:"单入口与多入口",id:"单入口与多入口",depth:2},{text:"入口类型",id:"入口类型",depth:2},{text:"框架模式入口",id:"框架模式入口",depth:3},{text:"约定式路由",id:"约定式路由",depth:4},{text:"自控式路由",id:"自控式路由",depth:4},{text:"自定义 Bootstrap",id:"自定义-bootstrap",depth:4},{text:"构建模式入口",id:"构建模式入口",depth:3},{text:"使用配置指定入口",id:"使用配置指定入口",depth:2},{text:"禁用默认入口扫描",id:"禁用默认入口扫描",depth:3}],title:"入口",frontmatter:{sidebar_position:1}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,c.jsx)(a,(0,d._)({},e))})):a(e)}}}]);