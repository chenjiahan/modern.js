(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_release_mdx"],{89389:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return i},default:function(){return h}});var d=s("12151"),c=s("23169"),r={sidebar_position:3},a="发布正式版本",i=[{text:"步骤",depth:2,id:"步骤"},{text:"模块工程方案",depth:3,id:"模块工程方案"},{text:"在根目录执行以下命令：",depth:4,id:"在根目录执行以下命令："},{text:"确认并提交当前变更：",depth:4,id:"确认并提交当前变更："},{text:"在根目录执行以下命令发布包至 NPM：",depth:4,id:"在根目录执行以下命令发布包至-npm："},{text:"push 对应的 tag 信息至远程仓库：",depth:4,id:"push-对应的-tag-信息至远程仓库："},{text:"Monorepo 工程方案",depth:3,id:"monorepo-工程方案"},{text:"在根目录执行以下命令：",depth:4,id:"在根目录执行以下命令：-1"},{text:"确认并提交当前变更：",depth:4,id:"确认并提交当前变更：-1"},{text:"在根目录执行以下命令发布包至 NPM：",depth:4,id:"在根目录执行以下命令发布包至-npm：-1"},{text:"push 对应的 tag 信息至远程仓库：",depth:4,id:"push-对应的-tag-信息至远程仓库：-1"},{text:"参数",depth:2,id:"参数"},{text:"bump 命令参数",depth:3,id:"bump-命令参数"},{text:"release 命令参数",depth:3,id:"release-命令参数"},{text:"升级版本策略",depth:2,id:"升级版本策略"},{text:"dependencies 或者 devDependencies 依赖",depth:3,id:"dependencies-或者-devdependencies-依赖"},{text:"patch 版本依赖只升级自身",depth:4,id:"patch-版本依赖只升级自身"},{text:"major / minor 版本自身升级 major 或者 minor 版本号，依赖包升级 patch 版本号",depth:4,id:"major-/-minor-版本自身升级-major-或者-minor-版本号，依赖包升级-patch-版本号"},{text:"peerDependencies 依赖",depth:3,id:"peerdependencies-依赖"},{text:"patch 版本依赖自身和依赖包都升级 patch 版本号",depth:4,id:"patch-版本依赖自身和依赖包都升级-patch-版本号"},{text:"major / minor 版本自身升级 major 或者 minor 版本号，依赖包升级 major 版本号",depth:4,id:"major-/-minor-版本自身升级-major-或者-minor-版本号，依赖包升级-major-版本号"},{text:"修改 peerDependencies 的升级策略",depth:4,id:"修改-peerdependencies-的升级策略"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",h4:"h4",button:"button",pre:"pre",code:"code",img:"img",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"发布正式版本",children:["发布正式版本",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#发布正式版本",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"发版正式版本时，我们需要根据开发过程中生成的 changeset 进行相关包版本号升级，并执行 publish 命令发布到 NPM 上。"}),"\n",(0,d.jsxs)(n.h2,{id:"步骤",children:["步骤",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#步骤",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"以下示例命令都以 pnpm 作为包管理工具进行，如果需要使用其他包管理工具，请按需求进行替换。"}),"\n"]})]}),"\n",(0,d.jsxs)(n.h3,{id:"模块工程方案",children:["模块工程方案",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模块工程方案",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"在根目录执行以下命令：",children:["在根目录执行以下命令：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在根目录执行以下命令：",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run bump\n"})})]})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-module-bump.png",alt:"执行 bump 命令"})}),"\n",(0,d.jsx)(n.p,{children:"执行该命令时，changeset 会自动进行以下操作："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["删除 ",(0,d.jsx)(n.code,{children:".changesets"})," 目录下的所有 changeset 文件。"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"根据 changeset 信息升级该包版本号。"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["在根目录的 ",(0,d.jsx)(n.code,{children:"CHANGELOG.md"})," 文件中写入 Changelog 信息，文件不存在时会自动创建。"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"确认并提交当前变更：",children:["确认并提交当前变更：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#确认并提交当前变更：",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "release: bump package"\n'})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"在根目录执行以下命令发布包至-npm：",children:["在根目录执行以下命令发布包至 NPM：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在根目录执行以下命令发布包至-npm：",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run release\n"})})]})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-module-release.png",alt:"执行 release 命令"})}),"\n",(0,d.jsxs)(n.h4,{id:"push-对应的-tag-信息至远程仓库：",children:["push 对应的 tag 信息至远程仓库：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#push-对应的-tag-信息至远程仓库：",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"git push --follow-tags\n"})})]})}),"\n",(0,d.jsxs)(n.h3,{id:"monorepo-工程方案",children:["Monorepo 工程方案",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo-工程方案",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"在根目录执行以下命令：-1",children:["在根目录执行以下命令：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在根目录执行以下命令：-1",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run bump\n"})})]})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-monorepo-bump.png",alt:"执行 bump 命令"})}),"\n",(0,d.jsx)(n.p,{children:"执行该命令时，changeset 会自动进行以下操作："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["删除 ",(0,d.jsx)(n.code,{children:".changesets"})," 目录下的所有 changeset 文件。"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"根据 changeset 信息升级相关包的版本号，除了显示写入 changeset 的包，执行命令时还会将 Monorepo 中所有的包进行依赖关系分析，如果需要升级，也会对应的自动升级版本号。"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["在需要升级的包目录的 ",(0,d.jsx)(n.code,{children:"CHANGELOG.md"})," 文件中写入 Changelog 信息，文件不存在时会自动创建。"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"确认并提交当前变更：-1",children:["确认并提交当前变更：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#确认并提交当前变更：-1",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["需确认自动升级的版本号是否符合预期，如果需要了解版本升级策略，请查看",(0,d.jsx)(n.a,{href:"/guides/topic-detail/changesets/release#%E5%8D%87%E7%BA%A7%E7%89%88%E6%9C%AC%E7%AD%96%E7%95%A5",children:"升级版本策略"}),"。"]}),"\n"]})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "release: bump package"\n'})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"在根目录执行以下命令发布包至-npm：-1",children:["在根目录执行以下命令发布包至 NPM：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在根目录执行以下命令发布包至-npm：-1",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run release\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["执行该命令时，将会依次判断 Monorepo 中所有的 packages 的版本是否在 NPM 中存在，如果不存在将会执行 ",(0,d.jsx)(n.code,{children:"publish"})," 命令发布。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["当 Monorepo 中包之间依赖关系使用 workspace 声明时，注意不要直接在 package 对应的子目录直接执行 ",(0,d.jsx)(n.code,{children:"npm publish"})," 发布 package，使用 ",(0,d.jsx)(n.code,{children:"release"})," 命令在发布时将会自动去除 workspace 声明，确保 NPM 包发布之后可用。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h4,{id:"push-对应的-tag-信息至远程仓库：-1",children:["push 对应的 tag 信息至远程仓库：",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#push-对应的-tag-信息至远程仓库：-1",children:"#"})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"git push --follow-tags\n"})})]})}),"\n",(0,d.jsxs)(n.h2,{id:"参数",children:["参数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"bump-命令参数",children:["bump 命令参数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bump-命令参数",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--snapshot"})," 生成基于时间戳的版本号。"]}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run bump -- --snapshot canary\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["执行完成后，对应的升级版本号将会变成 ",(0,d.jsx)(n.code,{children:"0.0.0-canary-20220622092823"})," 的形式，其中 canary 为 snapshot 配置的标记，如果不配置，将直接生成 ",(0,d.jsx)(n.code,{children:"0.0.0-20220622092823"})," 的形式。"]}),"\n",(0,d.jsx)(n.p,{children:"该参数主要用于发布临时测试版本进行测试，不需要进行代码提交。"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--ignore"})," 发布时手动忽略部分包。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["例如本次发布你需要忽略 ",(0,d.jsx)(n.code,{children:"module-2"})," 包："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run bump -- --ignore module-2\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["命令执行完成后，将会忽略 ",(0,d.jsx)(n.code,{children:"module-2"})," 包的更新。注意如果存在包依赖 ",(0,d.jsx)(n.code,{children:"module-2"}),"，需要将对应包也加入到 ",(0,d.jsx)(n.code,{children:"ignore"})," 参数中，否则 ",(0,d.jsx)(n.code,{children:"bump"})," 命令将执行失败。"]}),"\n",(0,d.jsx)(n.p,{children:"加入多个包的使用姿势为："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run bump -- --ignore module-2 --ignore module-3\n"})})]})}),"\n",(0,d.jsxs)(n.h3,{id:"release-命令参数",children:["release 命令参数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#release-命令参数",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--otp"})," 使用 ",(0,d.jsx)(n.code,{children:"npm token"})," 执行 release 命令发布对应包"]}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run relese -- --otp <token>\n"})})]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--tag"})," 本地发布使用特定的 tag，默认使用 ",(0,d.jsx)(n.code,{children:"latest"})]}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run release -- --tag <tag>\n"})})]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--ignore-scripts"})," 发布时忽略 npm scripts。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 ",(0,d.jsx)(n.code,{children:"publish"})," 命令时，npm 会自动触发很多命令，比如 ",(0,d.jsx)(n.code,{children:"prepare"}),"、",(0,d.jsx)(n.code,{children:"prepublish"}),"，使用该参数可以忽略这些命令执行。该参数仅支持在使用 pnpm 的 Monorepo 中使用。"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run release -- --ignore-scripts\n"})})]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--no-git-checks"})," 发布时忽略检查当前分支。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"执行发布命令时，默认会自动检查当前分支是否为发布分支，是否存在未提交变更等等，使用该参数可以忽略 git 相关检查。"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm run release -- --no-git-checks\n"})})]})}),"\n",(0,d.jsxs)(n.h2,{id:"升级版本策略",children:["升级版本策略",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#升级版本策略",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"dependencies-或者-devdependencies-依赖",children:["dependencies 或者 devDependencies 依赖",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dependencies-或者-devdependencies-依赖",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"patch-版本依赖只升级自身",children:["patch 版本依赖只升级自身",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#patch-版本依赖只升级自身",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"例如存在如下场景："}),"\n",(0,d.jsxs)(n.p,{children:["Monorepo 中存在两个包，",(0,d.jsx)(n.code,{children:"module-1"})," 和 ",(0,d.jsx)(n.code,{children:"module-2"}),"，",(0,d.jsx)(n.code,{children:"module-2"})," 的 ",(0,d.jsx)(n.code,{children:"dependencies"})," 中存在 ",(0,d.jsx)(n.code,{children:"module-1"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["当前存在的 changeset 为 ",(0,d.jsx)(n.code,{children:"module-1"})," 的 ",(0,d.jsx)(n.code,{children:"patch"})," 版本升级。"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 bump 命令后将只会升级 ",(0,d.jsx)(n.code,{children:"module-1"})," 的 patch 版本号。"]}),"\n",(0,d.jsxs)(n.h4,{id:"major-/-minor-版本自身升级-major-或者-minor-版本号，依赖包升级-patch-版本号",children:["major / minor 版本自身升级 major 或者 minor 版本号，依赖包升级 patch 版本号",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#major-/-minor-版本自身升级-major-或者-minor-版本号，依赖包升级-patch-版本号",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"例如存在如下场景："}),"\n",(0,d.jsxs)(n.p,{children:["Monorepo 中存在两个包，",(0,d.jsx)(n.code,{children:"module-1"})," 和 ",(0,d.jsx)(n.code,{children:"module-2"}),"，",(0,d.jsx)(n.code,{children:"module-2"})," 的 dependencies 中存在",(0,d.jsx)(n.code,{children:"module-1"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["当前存在的 changeset 为 ",(0,d.jsx)(n.code,{children:"module-1"})," 的 minor 版本升级。"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 bump 命令后 ",(0,d.jsx)(n.code,{children:"module-1"})," 会升级 ",(0,d.jsx)(n.code,{children:"minor"})," 版本号，",(0,d.jsx)(n.code,{children:"module -2"})," 会升级 ",(0,d.jsx)(n.code,{children:"patch"})," 版本号。"]}),"\n",(0,d.jsxs)(n.h3,{id:"peerdependencies-依赖",children:["peerDependencies 依赖",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#peerdependencies-依赖",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"patch-版本依赖自身和依赖包都升级-patch-版本号",children:["patch 版本依赖自身和依赖包都升级 patch 版本号",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#patch-版本依赖自身和依赖包都升级-patch-版本号",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"例如存在如下场景："}),"\n",(0,d.jsxs)(n.p,{children:["Monorepo 中存在两个包，",(0,d.jsx)(n.code,{children:"module-1"})," 和 ",(0,d.jsx)(n.code,{children:"module-2"}),"，",(0,d.jsx)(n.code,{children:"module-2"})," 的 ",(0,d.jsx)(n.code,{children:"peerDependencies"})," 中存在 ",(0,d.jsx)(n.code,{children:"module-1"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["当前存在的 changeset 为 ",(0,d.jsx)(n.code,{children:"module-1"})," 的 patch 版本升级。"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 bump 命令后将 ",(0,d.jsx)(n.code,{children:"module-1"})," 和 ",(0,d.jsx)(n.code,{children:"module-2"})," 都升级 patch 版本号。"]}),"\n",(0,d.jsxs)(n.h4,{id:"major-/-minor-版本自身升级-major-或者-minor-版本号，依赖包升级-major-版本号",children:["major / minor 版本自身升级 major 或者 minor 版本号，依赖包升级 major 版本号",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#major-/-minor-版本自身升级-major-或者-minor-版本号，依赖包升级-major-版本号",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"例如存在如下场景："}),"\n",(0,d.jsxs)(n.p,{children:["Monorepo 中存在两个包，",(0,d.jsx)(n.code,{children:"module-1"})," 和 ",(0,d.jsx)(n.code,{children:"module-2"}),"，",(0,d.jsx)(n.code,{children:"module-2"})," 的 ",(0,d.jsx)(n.code,{children:"peerDependencies"})," 中存在 ",(0,d.jsx)(n.code,{children:"module-1"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["当前存在的 changeset 为 ",(0,d.jsx)(n.code,{children:"module-1"})," 的 ",(0,d.jsx)(n.code,{children:"minor"})," 版本升级。"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 bump 命令后将 module-1 将升级 ",(0,d.jsx)(n.code,{children:"minor"})," 版本号， ",(0,d.jsx)(n.code,{children:"module-2"})," 升级 ",(0,d.jsx)(n.code,{children:"major"})," 版本号。"]}),"\n",(0,d.jsxs)(n.h4,{id:"修改-peerdependencies-的升级策略",children:["修改 peerDependencies 的升级策略",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-peerdependencies-的升级策略",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"peerDependencies"})," 的升级策略支持通过配置 ",(0,d.jsx)(n.code,{children:"onlyUpdatePeerDependentsWhenOutOfRange"})," 来修改依赖升级策略，当只有超出声明的版本类型范围时，才对应升级 ",(0,d.jsx)(n.code,{children:"peerDependencies"}),"。"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH": {\n    "onlyUpdatePeerDependentsWhenOutOfRange": true\n  },\n  ...\n}\n'})})]})}),"\n",(0,d.jsx)(n.p,{children:"例如存在如下场景："}),"\n",(0,d.jsxs)(n.p,{children:["Monorepo 中存在两个包，",(0,d.jsx)(n.code,{children:"module-1"})," 和 ",(0,d.jsx)(n.code,{children:"module-2"}),"，",(0,d.jsx)(n.code,{children:"module-2"})," 的 ",(0,d.jsx)(n.code,{children:"peerDependencies"})," 中存在 ",(0,d.jsx)(n.code,{children:"module-1"}),"，声明 ",(0,d.jsx)(n.code,{children:"module-1"})," 的版本号使用 ",(0,d.jsx)(n.code,{children:"^"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["当前存在的 changeset 为 ",(0,d.jsx)(n.code,{children:"module-1"})," 的 ",(0,d.jsx)(n.code,{children:"patch"})," 或者 ",(0,d.jsx)(n.code,{children:"minor"})," 版本升级。"]}),"\n",(0,d.jsxs)(n.p,{children:["执行 ",(0,d.jsx)(n.code,{children:"bump"})," 命令后只升级 ",(0,d.jsx)(n.code,{children:"module-1"})," 版本号。"]}),"\n",(0,d.jsxs)(n.p,{children:["需注意，如果包版本号在 ",(0,d.jsx)(n.code,{children:"0.x.x"})," 的范围时，",(0,d.jsx)(n.code,{children:"minor"})," 版本号升级也是超出声明的版本类型范围的。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);