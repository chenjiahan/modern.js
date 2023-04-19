(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_monorepo_sub-project-interface_mdx"],{93636:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return o},default:function(){return l}});var c=s("12151"),r=s("23169"),d={sidebar_position:3},i="子项目联调",o=[{text:"准备工作",depth:2,id:"准备工作"},{text:"在使用 pnpm 的 Monorepo 中进行项目联调",depth:2,id:"在使用-pnpm-的-monorepo-中进行项目联调"},{text:"在使用 Yarn 的 Monorepo 中进行项目联调",depth:2,id:"在使用-yarn-的-monorepo-中进行项目联调"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"子项目联调",children:["子项目联调",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#子项目联调",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"本章将要介绍如何在 Monorepo 下进行子项目之间的联调使用。"}),"\n",(0,c.jsxs)(n.h2,{id:"准备工作",children:["准备工作",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#准备工作",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["按照 ",(0,c.jsx)(n.a,{href:"/guides/topic-detail/monorepo/create-sub-project",children:"「创建子项目」"})," 章节的介绍（如果还没有看过，可以先了解一下），我们首先创建以下三个子项目："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"一个「应用」子项目"}),"\n",(0,c.jsx)(n.li,{children:"一个「模块（内部）」子项目"}),"\n",(0,c.jsx)(n.li,{children:"一个「模块」子项目"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["执行 ",(0,c.jsx)(n.code,{children:"pnpm run new"}),"，并按照如下进行选择："]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"「应用」子项目："})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"? 请选择你想创建的工程类型：Web 应用\n? 请填写子项目名称：app\n? 请填写子项目目录名称：app\n? 请选择开发语言：TS\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"「模块（内部）」子项目："})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"? 请选择你想创建的工程类型：Npm 模块（内部）\n? 请填写子项目名称：internal-lib\n? 请填写子项目目录名称：internal-lib\n? 请选择开发语言：TS\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"「模块」子项目："})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写子项目名称：components\n? 请填写子项目目录名称：components\n? 请选择开发语言：TS\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"创建成功后，会得到以下项目："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"./apps/app"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"./packages/components"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"./features/internal-lib"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"然后修改一下默认的代码和新增文件："}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["重命名 ",(0,c.jsx)(n.code,{children:"./pakcages/components/src/index.tsx"})]})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import './index.css';\n\nexport default function ({ text }: { text: string }) {\n  return (\n    <div>\n      This is UI Components Log: <p className=\"log\">{text}</p>\n    </div>\n  );\n}\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["新增 ",(0,c.jsx)(n.code,{children:"./pakcages/components/src/index.css"})]})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-css",children:".log {\n  color: gray;\n}\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["修改 ",(0,c.jsx)(n.code,{children:"./features/internal-lib/src/index.ts"})]})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"export default function (text: string) {\n  return text.toUpperCase();\n}\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["修改 ",(0,c.jsx)(n.code,{children:"./apps/app/src/App.tsx"})]})}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { Switch, Route } from '@modern-js/runtime/router';\nimport formatString from 'internal-lib';\nimport Comp from 'components';\n\nimport './App.css';\n\nconst App = () => (\n  <Switch>\n    <Route exact={true} path=\"/\">\n      <div className=\"container-box\">\n        <Comp text={formatString('hello world')} />\n        {/* 省略... */}\n      </div>\n    </Route>\n    <Route path=\"*\">\n      <div>404</div>\n    </Route>\n  </Switch>\n);\n\nexport default App;\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["到此为止我们创建了一个可以被发布到外部的组件项目、一个转换字符串的内部模块项目以及一个使用组件和内部模块的应用项目，如果直接运行应用项目还暂时无法正常使用。接下来将要介绍如何让它们能够互相联调使用，成功的使应用子项目 ",(0,c.jsx)(n.code,{children:"apps/app"})," 正常运行。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["启动 ",(0,c.jsx)(n.code,{children:"apps/app"})," 项目之前需要先构建（",(0,c.jsx)(n.code,{children:"pnpm run build"}),"） ",(0,c.jsx)(n.code,{children:"packages/component"}),"。"]}),"\n"]})]}),"\n",(0,c.jsx)(n.p,{children:"由于 Modern.js 支持 pnpm 与 Yarn 的 Monorepo 工程，接下来会从这两个方面分别介绍。"}),"\n",(0,c.jsxs)(n.h2,{id:"在使用-pnpm-的-monorepo-中进行项目联调",children:["在使用 pnpm 的 Monorepo 中进行项目联调",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在使用-pnpm-的-monorepo-中进行项目联调",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在 pnpm 的 Monorepo 项目中，我们通过在 ",(0,c.jsx)(n.code,{children:"apps/app"})," 子项目下分别执行："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"pnpm add components\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"以及"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"pnpm add internal-lib -D\n"})})]})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["注意这里将 internal-lib 作为 ",(0,c.jsx)(n.code,{children:"apps/app"})," 项目的开发依赖，因为在构建环境会被打包到构建产物中。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["将 ",(0,c.jsx)(n.code,{children:"packages/components"})," 与 ",(0,c.jsx)(n.code,{children:"features/internal-lib"})," 子项目加入到应用的依赖列表当中。"]}),"\n",(0,c.jsxs)(n.p,{children:["执行成功后，在 ",(0,c.jsx)(n.code,{children:"apps/app/package.json"})," 会发生如下变化："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "dependencies": {\n++  "components": "workspace:^0.1.0"\n  },\n  "devDependencies": {\n++  "internal-lib": "workspace:^0.1.0"\n  },\n}\n'})})]})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"workspace:^0.1.0"})," 是一种 PNPM 提供的 ",(0,c.jsx)(n.a,{href:"https://pnpm.io/workspaces#workspace-protocol-workspace",target:"_blank",rel:"noopener noreferrer",children:"Workspace 协议"}),"。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["当依赖安装成功之后，我们还需要将 ",(0,c.jsx)(n.code,{children:"packages/components"})," 进行构建，因为需要使用其构建产物。"]}),"\n",(0,c.jsxs)(n.p,{children:["到此为止，",(0,c.jsx)(n.code,{children:"app/apps"})," 应用子项目可以正常的运行了。在修改 ",(0,c.jsx)(n.code,{children:"features/internal-lib"})," 的源码，或者修改 ",(0,c.jsx)(n.code,{children:"packages/components"})," 的源码并构建之后都会触发应用子项目的热更新。"]}),"\n",(0,c.jsxs)(n.h2,{id:"在使用-yarn-的-monorepo-中进行项目联调",children:["在使用 Yarn 的 Monorepo 中进行项目联调",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在使用-yarn-的-monorepo-中进行项目联调",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在 Yarn 的 Monorepo 项目中，默认情况下可以直接在 ",(0,c.jsx)(n.code,{children:"apps/app"})," 应用项目中直接使用组件项目和内部模块项目。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["之所以可以直接在应用中使用使用组件项目和内部模块项目，是因为 Yarn 将这些子项目模块提升到了顶层的 ",(0,c.jsx)(n.code,{children:"node_modules"}),"内。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["但是由于组件 ",(0,c.jsx)(n.code,{children:"components"})," 是非内部模块，因此建议在 ",(0,c.jsx)(n.code,{children:"apps/app/package.json"})," 中进行依赖声明："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "dependencies": {\n++  "components": "0.1.0"\n  },\n}\n'})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);