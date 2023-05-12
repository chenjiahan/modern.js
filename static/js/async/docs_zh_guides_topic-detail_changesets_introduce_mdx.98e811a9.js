(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_introduce_mdx"],{8933:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return h},toc:function(){return i},default:function(){return l}});var c=s("9880"),r=s("23169"),d={sidebar_position:1},h="认识 Changesets",i=[{text:"特点",depth:2,id:"特点"},{text:"初始化",depth:2,id:"初始化"},{text:"命令",depth:2,id:"命令"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",div:"div",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"认识-changesets",children:["认识 Changesets",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#认识-changesets",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 默认集成了 ",(0,c.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," 用于模块和 Monorepo 工程方案项目中的包版本管理。"]}),"\n",(0,c.jsxs)(n.h2,{id:"特点",children:["特点",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#特点",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Changesets 具有以下几个特点："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["在开发时，需要开发者提供本次变更涉及的包名称、升级版本类型(",(0,c.jsx)(n.code,{children:"pathch"}),"、",(0,c.jsx)(n.code,{children:"minor"}),"、",(0,c.jsx)(n.code,{children:"major"}),")及变更信息，即 changeset。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"在发布版本时，会根据 changeset 自动升级对应包的版本号，并在对应的包中生成 Changelog 信息。"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"在 Monorepo 场景中，changeset 会自动生成仓库依赖图，升级时只会升级变更包及相关依赖包的版本号。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"初始化",children:["初始化",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 默认创建的模块和 Monorepo 工程方案项目已经初始化完成 Changesets，在项目根目录会自动创建 ",(0,c.jsx)(n.code,{children:".changeset"})," 目录，及 ",(0,c.jsx)(n.code,{children:".changeset/config.json"})," 的配置文件。"]}),"\n",(0,c.jsxs)(n.p,{children:["并且，Modern.js 在其对应的工程方案工具 ",(0,c.jsx)(n.code,{children:"@modern-js/module-tools"})," 和 ",(0,c.jsx)(n.code,{children:"@modern-js/monorepo-tools"})," 提供了 Changesets 相应的命令，无需再手动安装 Changesets 相关依赖。"]}),"\n",(0,c.jsx)(n.p,{children:"Changesets 默认配置如下："}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:".changeset/config.json"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",meta:'title=".changeset/config.json"',children:'{\n  "$schema": "https://unpkg.com/@changesets/config@2.0.0/schema.json",\n  "changelog": "@changesets/cli/changelog",\n  "commit": false,\n  "linked": [],\n  "access": "restricted",\n  "baseBranch": "main",\n  "updateInternalDependencies": "patch",\n  "ignore": []\n}\n'})})})]}),"\n",(0,c.jsxs)(n.p,{children:["配置文件提供了生成 Changesets 的一些基本配置，字段详细介绍请参考后续章节： ",(0,c.jsx)(n.a,{href:"/guides/topic-detail/changesets/config",children:"Changesets 配置文件"}),"。"]}),"\n",(0,c.jsxs)(n.h2,{id:"命令",children:["命令",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#命令",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"change"})," 创建一个 changeset，执行完成该命令后会自动在 ",(0,c.jsx)(n.code,{children:".changeset"})," 目录生成一个 changeset 文件。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"bump"})," 根据当前 changeset 升级对应包版本号。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pre"})," 标记进入和退出 ",(0,c.jsx)(n.code,{children:"pre release"})," 模式，在 ",(0,c.jsx)(n.code,{children:"pre release"})," 模式下执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令，将会生成 ",(0,c.jsx)(n.code,{children:"x.x.x-${pre-tag}.x"})," 的版本号格式。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"release"})," 发布包到 NPM。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"status"})," 查看当前 changeset 状态。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gen-release-note"})," 根据当前的 chagneset 状态生成 Release Note 信息。"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"具体命令支持的参数可以查看后续对应章节介绍。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);