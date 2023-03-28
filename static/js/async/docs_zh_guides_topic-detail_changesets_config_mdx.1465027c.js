(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_changesets_config_mdx"],{80717:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},toc:function(){return r},title:function(){return l},default:function(){return a}});var c=s("12151"),d=s("21447");let i={sidebar_position:5},r=[{id:"配置介绍",text:"配置介绍",depth:2},{id:"commit",text:"commit",depth:3},{id:"access",text:"access",depth:3},{id:"basebranch",text:"baseBranch",depth:3},{id:"ignore",text:"ignore",depth:3},{id:"fixed",text:"fixed",depth:3},{id:"linked",text:"linked",depth:3},{id:"updateinternaldependencies",text:"updateInternalDependencies",depth:3},{id:"changelog",text:"changelog",depth:3},{id:"___experimentalunsafeoptions_will_change_in_patch",text:"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH",depth:3},{id:"onlyupdatepeerdependentswhenoutofrange",text:"onlyUpdatePeerDependentsWhenOutOfRange",depth:4},{id:"updateinternaldependents",text:"updateInternalDependents",depth:4},{id:"usecalculatedversionforsnapshots",text:"useCalculatedVersionForSnapshots",depth:4}],l="Changesets 配置文件";function h(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",img:"img",div:"div",button:"button",pre:"pre",span:"span",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"changesets-配置文件",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changesets-配置文件",children:"#"}),"Changesets 配置文件"]}),"\n",(0,c.jsxs)(n.p,{children:["我们前面了解到，初始化 Modern.js 仓库时，会默认初始化 Changesets 的配置文件，即 ",(0,c.jsx)(n.code,{children:".changeset/config.json"})," 文件，下面我们将详细了解一下该文件中支持哪些配置。"]}),"\n",(0,c.jsxs)(n.h2,{id:"配置介绍",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置介绍",children:"#"}),"配置介绍"]}),"\n",(0,c.jsxs)(n.h3,{id:"commit",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commit",children:"#"}),"commit"]}),"\n",(0,c.jsxs)(n.p,{children:["类型： ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值： ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.p,{children:["当配置该字段为 ",(0,c.jsx)(n.code,{children:"true"})," 时，在执行 ",(0,c.jsx)(n.code,{children:"change"})," 和 ",(0,c.jsx)(n.code,{children:"bump"})," 命令时，将自动执行提交代码操作。"]}),"\n",(0,c.jsx)(n.p,{children:"默认的 commit 信息格式如下："}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})]}),"\n",(0,c.jsxs)(n.p,{children:["该 commit 信息支持自定义，我们将在",(0,c.jsx)(n.a,{href:"/guides/topic-detail/changesets/commit.html",children:"自定义提交 commit 信息"}),"章节进行详细介绍。"]}),"\n",(0,c.jsxs)(n.h3,{id:"access",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#access",children:"#"}),"access"]}),"\n",(0,c.jsxs)(n.p,{children:["类型：",(0,c.jsx)(n.code,{children:"restricted"})," | ",(0,c.jsx)(n.code,{children:"public"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"restricted"})]}),"\n",(0,c.jsxs)(n.p,{children:["用于配置当前包的发布形式，如果配置为 ",(0,c.jsx)(n.code,{children:"restricted"}),"，将作为私有包发布，如果为 ",(0,c.jsx)(n.code,{children:"public"}),"，则发布公共范围包。"]}),"\n",(0,c.jsxs)(n.p,{children:["对于仓库中存在部分包需要配置 access，可以在 ",(0,c.jsx)(n.code,{children:"package.json"})," 中配置 ",(0,c.jsx)(n.code,{children:"publishConfig"}),"，例如："]}),"\n",(0,c.jsxs)(n.div,{className:"language-json",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(n.code,{children:[(0,c.jsx)(n.span,{className:"line",children:(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,c.jsxs)(n.span,{className:"line",children:[(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"publishConfig"'}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,c.jsxs)(n.span,{className:"line",children:[(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"registry"'}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://registry.npmjs.org/"'}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,c.jsxs)(n.span,{className:"line",children:[(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"access"'}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"public"'})]}),"\n",(0,c.jsx)(n.span,{className:"line",children:(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,c.jsx)(n.span,{className:"line",children:(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,c.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,c.jsxs)(n.p,{children:["对于不需要发布的包，可以在 ",(0,c.jsx)(n.code,{children:"package.json"})," 中设置 ",(0,c.jsx)(n.code,{children:"private"})," 为 ",(0,c.jsx)(n.code,{children:"true"}),"，阻止其进行发布。"]}),"\n",(0,c.jsxs)(n.h3,{id:"basebranch",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basebranch",children:"#"}),"baseBranch"]}),"\n",(0,c.jsxs)(n.p,{children:["类型： ",(0,c.jsx)(n.code,{children:"string"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值： ",(0,c.jsx)(n.code,{children:"main"})]}),"\n",(0,c.jsx)(n.p,{children:"仓库主分支。该配置用于计算当前分支的变更包并进行分类。"}),"\n",(0,c.jsxs)(n.h3,{id:"ignore",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ignore",children:"#"}),"ignore"]}),"\n",(0,c.jsxs)(n.p,{children:["类型：",(0,c.jsx)(n.code,{children:"string[]"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"[]"})]}),"\n",(0,c.jsxs)(n.p,{children:["用于声明执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令时忽略的包，和 ",(0,c.jsx)(n.code,{children:"bump"})," 命令的 ",(0,c.jsx)(n.code,{children:"--ignore"})," 参数用法一致，注意两者不能同时使用。"]}),"\n",(0,c.jsxs)(n.h3,{id:"fixed",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fixed",children:"#"}),"fixed"]}),"\n",(0,c.jsxs)(n.p,{children:["类型： ",(0,c.jsx)(n.code,{children:"string[][]"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"[]"})]}),"\n",(0,c.jsxs)(n.p,{children:["用于 monorepo 中对包进行分组，相同分组中的包版本号将进行绑定，每次执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令时，同一分组中的包只要有一个升级版本号，其他会一起升级。\n支持使用正则匹配包名称。"]}),"\n",(0,c.jsxs)(n.h3,{id:"linked",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linked",children:"#"}),"linked"]}),"\n",(0,c.jsxs)(n.p,{children:["类型： ",(0,c.jsx)(n.code,{children:"string[][]"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"[]"})]}),"\n",(0,c.jsxs)(n.p,{children:["和 ",(0,c.jsx)(n.code,{children:"fixed"})," 类似，也是对 monorepo 中对包进行分组，但是每次执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令时，只有和 changeset 声明的变更相关的包才会升级版本号，同一分组的变更包的版本号将保持一致。\n支持使用正则匹配包名称。"]}),"\n",(0,c.jsxs)(n.h3,{id:"updateinternaldependencies",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinternaldependencies",children:"#"}),"updateInternalDependencies"]}),"\n",(0,c.jsxs)(n.p,{children:["类型：",(0,c.jsx)(n.code,{children:"patch"})," | ",(0,c.jsx)(n.code,{children:"minor"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"patch"})]}),"\n",(0,c.jsx)(n.p,{children:"用于声明更新内部依赖的版本号规则。"}),"\n",(0,c.jsxs)(n.p,{children:["当执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令升级版本号时，默认会自动更新仓库中使用该包的依赖声明。配置该字段为 ",(0,c.jsx)(n.code,{children:"minor"})," 后，如果升级版本号为 ",(0,c.jsx)(n.code,{children:"patch"})," 类型，将不会自动更新引用依赖声明。"]}),"\n",(0,c.jsx)(n.p,{children:"例如："}),"\n",(0,c.jsxs)(n.div,{className:"language-text",children:[(0,c.jsx)(n.div,{className:""}),(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"pkg-a @ version 1.0.0\npkg-b @ version 1.0.0\n  depends on pkg-a at range `^1.0.0\n"})})]})]}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，升级 ",(0,c.jsx)(n.code,{children:"pkg-a"})," 至 ",(0,c.jsx)(n.code,{children:"1.0.1"})," 时，会更新 ",(0,c.jsx)(n.code,{children:"pkg-b"})," 中的 ",(0,c.jsx)(n.code,{children:"pkg-a"})," 的依赖版本为 ",(0,c.jsx)(n.code,{children:"^1.0.1"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["当配置 ",(0,c.jsx)(n.code,{children:"updateInternalDependencies"})," 为 ",(0,c.jsx)(n.code,{children:"minor"})," 时，升级 ",(0,c.jsx)(n.code,{children:"pkg-a"})," 至 ",(0,c.jsx)(n.code,{children:"1.0.1"})," 时，",(0,c.jsx)(n.code,{children:"pkg-b"})," 中的 ",(0,c.jsx)(n.code,{children:"pkg-a"})," 的依赖版本将不会更新，只有 ",(0,c.jsx)(n.code,{children:"pkg-a"})," 升级版本号为 ",(0,c.jsx)(n.code,{children:"1.1.0"})," 或者 ",(0,c.jsx)(n.code,{children:"2.0.0"})," 时，才会更新 ",(0,c.jsx)(n.code,{children:"pkg-b"})," 中的 ",(0,c.jsx)(n.code,{children:"pkg-a"})," 的依赖。"]}),"\n",(0,c.jsxs)(n.h3,{id:"changelog",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changelog",children:"#"}),"changelog"]}),"\n",(0,c.jsxs)(n.p,{children:["类型：",(0,c.jsx)(n.code,{children:"boolean"})," | ",(0,c.jsx)(n.code,{children:"string"})," | ",(0,c.jsx)(n.code,{children:"[string, unknow]"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"@changesets/cli/changelog"})]}),"\n",(0,c.jsx)(n.p,{children:"生成 Changelog 规则。"}),"\n",(0,c.jsxs)(n.p,{children:["配置为 ",(0,c.jsx)(n.code,{children:"false"})," 时，执行 bump 命令时，在 ",(0,c.jsx)(n.code,{children:"CHANGELOG.md"})," 文件中只声明版本号，不声明其他 Changelog 信息。"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-empty-changelog.png",alt:"关闭 changelog 配置"})}),"\n",(0,c.jsxs)(n.p,{children:["配置为 ",(0,c.jsx)(n.code,{children:"@changesets/cli/changelog"})," 将使用官方提供的 Changlog 生成规则，将 changeset 信息转换为 Changlog 内容。"]}),"\n",(0,c.jsxs)(n.p,{children:["配置为数组时，第一个参数为自定义 NPM 包或者路径，第二个参数为需要传入的默认参数配置，自定义格式我们将在后续",(0,c.jsx)(n.a,{href:"/guides/topic-detail/changesets/changelog.html",children:"自定义 Changelog"})," 章节讲解。"]}),"\n",(0,c.jsxs)(n.h3,{id:"___experimentalunsafeoptions_will_change_in_patch",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#___experimentalunsafeoptions_will_change_in_patch",children:"#"}),"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH"]}),"\n",(0,c.jsx)(n.p,{children:"一些实验性配置。"}),"\n",(0,c.jsxs)(n.h4,{id:"onlyupdatepeerdependentswhenoutofrange",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onlyupdatepeerdependentswhenoutofrange",children:"#"}),"onlyUpdatePeerDependentsWhenOutOfRange"]}),"\n",(0,c.jsxs)(n.p,{children:["类型：",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.p,{children:["针对于 ",(0,c.jsx)(n.code,{children:"peerDependence"})," 依赖的升级策略配置，默认针对 ",(0,c.jsx)(n.code,{children:"peerDependence"})," 在 ",(0,c.jsx)(n.code,{children:"minor"})," 和 ",(0,c.jsx)(n.code,{children:"major"})," 版本升级时，当前包会升级大版本。"]}),"\n",(0,c.jsxs)(n.p,{children:["该配置设置为 true 时，仅当 ",(0,c.jsx)(n.code,{children:"peerDependence"})," 声明包依赖超出声明范围时才更新版本。"]}),"\n",(0,c.jsxs)(n.h4,{id:"updateinternaldependents",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinternaldependents",children:"#"}),"updateInternalDependents"]}),"\n",(0,c.jsxs)(n.p,{children:["类型： ",(0,c.jsx)(n.code,{children:"always"})," | ",(0,c.jsx)(n.code,{children:"out-of-range"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"always"})]}),"\n",(0,c.jsxs)(n.p,{children:["当执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令升级版本号时，默认会自动更新仓库中使用该包的依赖声明。当设置该参数为 ",(0,c.jsx)(n.code,{children:"out-of-range"})," 时，只有当依赖声明超出范围时才会更新仓库中使用该包的依赖声明。"]}),"\n",(0,c.jsxs)(n.h4,{id:"usecalculatedversionforsnapshots",children:[(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecalculatedversionforsnapshots",children:"#"}),"useCalculatedVersionForSnapshots"]}),"\n",(0,c.jsxs)(n.p,{children:["类型：",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认值：",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.p,{children:["使用快照发布时，默认会使用 ",(0,c.jsx)(n.code,{children:"0.0.0-timestamp"})," 的版本格式，保证用户可以正常使用预发布版本。当你需要忽略上述问题，使用正常的版本号格式时，即当前版本为 ",(0,c.jsx)(n.code,{children:"1.0.1"})," 快照版本期望使用",(0,c.jsx)(n.code,{children:"1.0.1-timestamp"}),"，可配置该参数为 ",(0,c.jsx)(n.code,{children:"true"}),"。"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}}}]);