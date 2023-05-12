(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_monorepo_commands_pre_mdx"],{36813:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return d},default:function(){return t}});var s=a("9880"),r=a("23169"),c={sidebar_position:3},o="pre",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",pre:"pre",code:"code",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"pre",children:["pre",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pre",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern pre [options] <enter|exit> [tag]\n\n进入和退出预发布模式\n\nOptions:\n  -h, --help  display help for command\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["可以使用 ",(0,s.jsx)(n.code,{children:"modern pre"})," 命令在正式发布前",(0,s.jsx)(n.a,{href:"https://github.com/atlassian/changesets/blob/main/docs/prereleases.md",target:"_blank",rel:"noopener noreferrer",children:"预发布"}),"一个版本。"]}),"\n",(0,s.jsxs)(n.p,{children:["首先 ",(0,s.jsx)(n.code,{children:"modern pre enter <tag>"})," 进入预发布模式:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx modern pre enter next\n\uD83E\uDD8B  success Entered pre mode with tag next\n\uD83E\uDD8B  info Run `changeset version` to version packages with prerelease versions\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["之后通过 ",(0,s.jsx)(n.code,{children:"modern change"})," 命令添加 changeset:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx modern change\n\uD83E\uDD8B  Which packages would you like to include? \xb7 package-a, package-b\n\uD83E\uDD8B  Which packages should have a major bump? \xb7 No items were selected\n\uD83E\uDD8B  Which packages should have a minor bump? \xb7 No items were selected\n\uD83E\uDD8B  The following packages will be patch bumped:\n\uD83E\uDD8B  package-a@0.1.1\n\uD83E\uDD8B  package-b@0.1.1\n\uD83E\uDD8B  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\uD83E\uDD8B  Summary \xb7 test pre publish\n\uD83E\uDD8B  === Releasing the following packages ===\n\uD83E\uDD8B  [Patch]\n\uD83E\uDD8B    package-a, package-b\n\uD83E\uDD8B  ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗\n\uD83E\uDD8B  ║                                                      ========= NOTE ========                                                       ║\n\uD83E\uDD8B  ║All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.║\n\uD83E\uDD8B  ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝\n\uD83E\uDD8B  Is this your desired changeset? (Y/n) \xb7 true\n\uD83E\uDD8B  Changeset added! - you can now commit it\n\uD83E\uDD8B\n\uD83E\uDD8B  If you want to modify or expand on the changeset summary, you can find it here\n\uD83E\uDD8B  info /xxxxxx/monorepo/.changeset/beige-paws-rule.md\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["接着可以使用 ",(0,s.jsx)(n.code,{children:"modern bump"})," 命令更新具体的版本号："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx modern bump\n\uD83E\uDD8B  warn ===============================IMPORTANT!===============================\n\uD83E\uDD8B  warn You are in prerelease mode\n\uD83E\uDD8B  warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`\n\uD83E\uDD8B  warn You can then run `changeset version` again to do a normal release\n\uD83E\uDD8B  warn ----------------------------------------------------------------------\n\uD83E\uDD8B  All files have been updated. Review them and commit at your leisure\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["可以看到 ",(0,s.jsx)(n.code,{children:"package-a"})," 和 ",(0,s.jsx)(n.code,{children:"package-b"})," 的 ",(0,s.jsx)(n.code,{children:"package.json"})," 中版本号均已更新到 ",(0,s.jsx)(n.code,{children:"0.1.2-next.0"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["提交完变更之后，我们可以通过 ",(0,s.jsx)(n.code,{children:"modern pre exit"})," 命令退出预发布模式。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);