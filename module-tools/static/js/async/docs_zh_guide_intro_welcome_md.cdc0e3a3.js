(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_intro_welcome_md"],{6639:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return t},toc:function(){return l},title:function(){return d},default:function(){return c}});var o=n("12151"),s=n("21447"),t={sidebar_position:1},l=[],d="欢迎使用";function i(e){var r=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"欢迎使用",children:[(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#欢迎使用",children:"#"}),"欢迎使用"]}),"\n",(0,o.jsx)(r.p,{children:"Module Tools 是 Modern.js 的模块工程解决方案，同时也是核心依赖。它可以让开发者更轻松地构建、调试、发布模块类型的项目。模块类型的项目大多数情况可以认为是 npm 包类型的项目，它可能是一个组件、组件库或者工具库项目。"}),"\n",(0,o.jsx)(r.p,{children:"如果你正打算开发一个 npm 包类型的项目，那么你就来对地方了！Modern.js 提供了专业的模块工程解决方案。它带来了："}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"简单的项目初始化"}),"：仅需执行 ",(0,o.jsx)(r.code,{children:"npx @modern-js/create project-dir"})," 命令，然后进行几个交互问题，就可以创建一个完整的模块类型项目。创建的项目还支持选择 ",(0,o.jsx)(r.a,{href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(r.strong,{children:"pnpm"})}),"、",(0,o.jsx)(r.a,{href:"https://classic.yarnpkg.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(r.strong,{children:"Yarn"})})," 两种包管理器。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"代码格式化"}),"：在模块工程项目中，你可以执行 ",(0,o.jsx)(r.code,{children:"modern lint"})," 来对代码进行格式化。同时初始化的模块工程项目里包含了 Modern.js 的 ",(0,o.jsx)(r.a,{href:"https://eslint.org/docs/latest/user-guide/core-concepts#what-is-eslint",target:"_blank",rel:"noopener noreferrer",children:"ESLint"})," 规则集，可以满足大部分场景下的需求。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"全面的构建能力和更快的构建速度"}),"：Module Tools 基于 ",(0,o.jsx)(r.a,{href:"https://esbuild.github.io/getting-started/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," 和 ",(0,o.jsx)(r.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," 提供了高性能的构建能力，并且为不同构建模块的场景提供了丰富的配置。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Storybook 调试工具"}),"：Module Tools 为调试模块项目提供了 ",(0,o.jsx)(r.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," 调试工具。在安装了 Module Tools 的 Storybook 插件后，你可以使用 ",(0,o.jsx)(r.code,{children:"modern dev storybook"})," 命令来启动它。你不仅可以使用 Storybook 对组件进行调试，也可以使用在其他类型的模块上。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"集成 Jest 的测试能力"}),"：在需要对模块测试的时候，可以使用 Module Tools 的 ",(0,o.jsx)(r.code,{children:"modern test"})," 命令。Module Tools 不仅集成了 ",(0,o.jsx)(r.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"}),"，同时也提供了配置 ",(0,o.jsx)(r.a,{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," 的 API。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"基于 Changesets 实现的版本管理"}),"：当需要对项目记录变更内容的时候，可以使用 ",(0,o.jsx)(r.code,{children:"modern change"})," 命令生成包含变更内容的 Markdown 文件；当需要对项目进行版本升级的时候，可以使用 ",(0,o.jsx)(r.code,{children:"modern bump"})," 命令通过 Markdown 文件分析并升级版本；当需要发布项目的时候，可以使用 ",(0,o.jsx)(r.code,{children:"modern release"})," 命令对项目进行发布。Module Tools 基于 ",(0,o.jsx)(r.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," 实现了这些命令。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"可扩展性的插件机制"}),"：想要为项目集成其他的调试工具？又或者是想要在构建过程中做一些额外处理？Module Tools 提供了插件机制和插件钩子，插件钩子覆盖了 ",(0,o.jsx)(r.code,{children:"dev"})," 命令和 ",(0,o.jsx)(r.code,{children:"build"})," 命令两个流程。你可以通过它们为项目进行能力的扩展。"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"还有更多"}),"：Module Tools 在未来还会不断的在构建、调试功能上进行优化。如果在模块项目构建上存在需要解决的重要问题，又或者是某个主流的模块项目调试工具、模式出现的时候，那么它们很可能成为 Module Tools 将要支持功能。"]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}}}]);