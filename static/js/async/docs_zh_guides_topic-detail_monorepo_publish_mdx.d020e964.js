(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_monorepo_publish_mdx"],{1060:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return a},default:function(){return t}});var s=r("9880"),i=r("23169"),c={sidebar_position:4},d="可复用模块的发布",a=[{text:"准备工作",depth:2,id:"准备工作"},{text:"生成变更记录",depth:2,id:"生成变更记录"},{text:"版本更新",depth:2,id:"版本更新"},{text:"发布",depth:2,id:"发布"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",pre:"pre",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"可复用模块的发布",children:["可复用模块的发布",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#可复用模块的发布",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在 Monorepo 中有时会需要把多个模块项目发布到 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," 上，本章将要介绍如果在 Monorepo 中对子项目进行版本更新以及发布。"]}),"\n",(0,s.jsxs)(n.h2,{id:"准备工作",children:["准备工作",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#准备工作",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["接着 ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/monorepo/sub-project-interface",children:"子项目联调"})," 章节的例子，我们对 ",(0,s.jsx)(n.code,{children:"components"})," 模块进行发布。"]}),"\n",(0,s.jsxs)(n.h2,{id:"生成变更记录",children:["生成变更记录",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#生成变更记录",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在开发阶段，当某个模块的功能开完完成之后，一般需要提交代码（例如提交到 ",(0,s.jsx)(n.a,{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})," 上）并需要记录本次修改的内容。在 Modern.js 的 Monorepo 工程中，我们可以在 monorepo 根目录执行命令："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"pnpm run change\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"然后根据提示选择变更或者将要发布的包以及选择包升级的版本，并填写变更信息。变更信息的内容可以包含此次开发的功能、修复的问题等。"}),"\n",(0,s.jsxs)(n.p,{children:["那么对于上面的例子，我们选择变更的项目为 ",(0,s.jsx)(n.code,{children:"components"}),"，并填写此次变更的内容："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"$ modern change\n\uD83E\uDD8B  Which packages would you like to include? \xb7 components\n\uD83E\uDD8B  Which packages should have a major bump? \xb7 No items were selected\n\uD83E\uDD8B  Which packages should have a minor bump? \xb7 components\n\uD83E\uDD8B  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\uD83E\uDD8B  Summary \xb7 add features\n\uD83E\uDD8B  === Releasing the following packages ===\n\uD83E\uDD8B  [Minor]\n\uD83E\uDD8B    components\n\uD83E\uDD8B  ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗\n\uD83E\uDD8B  ║                                                      ========= NOTE ========                                                       ║\n\uD83E\uDD8B  ║All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.║\n\uD83E\uDD8B  ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝\n\uD83E\uDD8B  Is this your desired changeset? (Y/n) \xb7 true\n\uD83E\uDD8B  Changeset added! - you can now commit it\n\uD83E\uDD8B\n\uD83E\uDD8B  If you want to modify or expand on the changeset summary, you can find it here\n\uD83E\uDD8B  info /Users/demo/modern-js/official/monorepo-pnpm/.changeset/silent-tigers-run.md\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["该命令完成后，在 ",(0,s.jsx)(n.code,{children:".changeset"})," 中会有新的 ",(0,s.jsx)(n.code,{children:"silent-tigers-run.md"})," 文件生成，其中包含了刚刚填写的信息，这些新生成的文件将用于后面发布流程中使用。",(0,s.jsxs)(n.strong,{children:["因此在提交代码的时候，需要将",(0,s.jsx)(n.code,{children:".changeset"})," 目录下的文件一并提交"]}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"版本更新",children:["版本更新",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#版本更新",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"在模块发布之前，还需要将模块的版本进行更新。。在 Modern.js 的 Monorepo 工程中，可以在 Monorepo 项目根目录下执行："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"pnpm run bump\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["该命令会根据之前生成在 ",(0,s.jsx)(n.code,{children:".changeset"})," 目录下的文件自动更新对应模块的版本号和 CHANGELOG 信息，执行成功后会看到："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{children:"\uD83E\uDD8B  All files have been updated. Review them and commit at your leisure\n"})})})}),"\n",(0,s.jsxs)(n.h2,{id:"发布",children:["发布",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#发布",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["最后执行 ",(0,s.jsx)(n.code,{children:"pnpm run prepare --filter {./packages} && pnpm run release"}),"，便可以发布对应的模块了。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["在上面的命令中 --filter {./packages} 用于筛选位于 ",(0,s.jsx)(n.code,{children:"./packages"})," 目录下的子项目，可以通过 ",(0,s.jsx)(n.a,{href:"https://pnpm.io/filtering",target:"_blank",rel:"noopener noreferrer",children:"PNPM Filtering"})," 来了解更多它的使用。"]}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);