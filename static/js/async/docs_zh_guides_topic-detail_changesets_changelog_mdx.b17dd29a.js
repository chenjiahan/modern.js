(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_changelog_mdx"],{58097:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return h},toc:function(){return r},default:function(){return t}});var a=s("9880"),c=s("23169"),d={sidebar_position:6},h="自定义 changelog 生成",r=[{text:"自定义 changelog 内容",depth:2,id:"自定义-changelog-内容"},{text:"getReleaseLine",depth:3,id:"getreleaseline"},{text:"Params",depth:4,id:"params"},{text:"返回值",depth:4,id:"返回值"},{text:"默认实现",depth:4,id:"默认实现"},{text:"getDependencyReleaseLine",depth:3,id:"getdependencyreleaseline"},{text:"Params",depth:4,id:"params-1"},{text:"返回值",depth:4,id:"返回值-1"},{text:"默认实现",depth:4,id:"默认实现-1"},{text:"配置",depth:2,id:"配置"},{text:"配置相对路径",depth:3,id:"配置相对路径"},{text:"使用模块工程方案",depth:3,id:"使用模块工程方案"},{text:"使用 npx @modern-js/create@latest 创建模块工程方案",depth:4,id:"使用-npx-@modern-js/create@latest-创建模块工程方案"},{text:"实现自定义内容",depth:4,id:"实现自定义内容"},{text:"将模块发布到 NPM",depth:4,id:"将模块发布到-npm"},{text:"在目标仓库根目录安装对应模块，例如 custom-changelog",depth:4,id:"在目标仓库根目录安装对应模块，例如-custom-changelog"},{text:"配置 changeset 的 changelog 配置为包名称",depth:4,id:"配置-changeset-的-changelog-配置为包名称"},{text:"使用 Monorepo 工程方案",depth:3,id:"使用-monorepo-工程方案"},{text:"执行 pnpm run new 创建模块子项目",depth:4,id:"执行-pnpm-run-new-创建模块子项目"},{text:"实现自定义内容",depth:4,id:"实现自定义内容-1"},{text:"在 Monorepo 根目录添加子项目模块依赖，例如 custom-changelog",depth:4,id:"在-monorepo-根目录添加子项目模块依赖，例如-custom-changelog"},{text:"配置 changeset 的 changelog 配置为包名称",depth:4,id:"配置-changeset-的-changelog-配置为包名称-1"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"自定义-changelog-生成",children:["自定义 changelog 生成",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-changelog-生成",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Changesets 默认会使用 ",(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," 生成 Changelog 信息，如果默认的 changelog 信息不能满足需求，可以自定义 changelog 的生成。"]}),"\n",(0,a.jsxs)(n.h2,{id:"自定义-changelog-内容",children:["自定义 changelog 内容",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-changelog-内容",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"changelog 信息主要包含以下两种信息："}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"changeset 中写入的 changelog 信息。"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"本次版本升级关联包的版本变更信息。"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["自定义逻辑主要实现两个函数，",(0,a.jsx)(n.code,{children:"getReleaseLine"})," 和 ",(0,a.jsx)(n.code,{children:"getDependencyReleaseLine"}),"，分别用来定义上述这两种信息。"]}),"\n",(0,a.jsxs)(n.h3,{id:"getreleaseline",children:["getReleaseLine",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleaseline",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"params",children:["Params",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"changeset"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export type VersionType = 'major' | 'minor' | 'patch' | 'none';\n\nexport type Release = { name: string; type: VersionType };\n\nexport type Changeset = {\n  id: string; // changeset 的文件名称\n  commit?: string; // changeset 提交时的 commit id 信息\n  summary: string; // changeset 内容信息\n  releases: Array<Release>; // 当前计算出的 changeset 升级包名称及类型信息\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"type"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["当前包对应的升级版本类型，类型为上述 ",(0,a.jsx)(n.code,{children:"VersionType"}),"。"]}),"\n",(0,a.jsxs)(n.h4,{id:"返回值",children:["返回值",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"changelog 内容。"}),"\n",(0,a.jsxs)(n.h4,{id:"默认实现",children:["默认实现",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," 默认处理逻辑为将 ",(0,a.jsx)(n.code,{children:"summary"})," 信息按照换行符 ",(0,a.jsx)(n.code,{children:"\\n"})," 分割，第一样前面增加 ",(0,a.jsx)(n.code,{children:"-"})," 作为列表开头，其他内容作为第一行内容的补充整理在列表下方。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async function getReleaseLine(changeset, type) {\n  const [firstLine, ...futureLines] = changeset.summary\n    .split('\\n')\n    .map(l => l.trimRight());\n\n  let returnVal = `- ${\n    changeset.commit ? `${changeset.commit}: ` : ''\n  }${firstLine}`;\n\n  if (futureLines.length > 0) {\n    returnVal += `\\n${futureLines.map(l => `  ${l}`).join('\\n')}`;\n  }\n\n  return returnVal;\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"getdependencyreleaseline",children:["getDependencyReleaseLine",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getdependencyreleaseline",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"params-1",children:["Params",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"changesets"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["当前关联的所有 changeset 信息，类型为 ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," changeset 类型数组。"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"dependenciesUpdated"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type ModCompWithPackage = {\n  name: string; // 依赖模块名称\n  type: VersionType; // 依赖模块的升级类型\n  oldVersion: string; // 依赖模块当前版本号\n  newVersion: string; // 依赖模块新版本号\n  changesets: string[]; // 关联的 changeset id 列表\n  packageJson: PackageJSON; // 依赖模块完整的 package.json 内容\n  dir: string; // 依赖模块的路径(绝对路径)\n};\n\ntype DependenciesUpdated = ModCompWithPackage[];\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"返回值-1",children:["返回值",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值-1",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"changelog 内容。"}),"\n",(0,a.jsxs)(n.h4,{id:"默认实现-1",children:["默认实现",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现-1",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," 默认会使用 changesets 信息展示对应的 ",(0,a.jsx)(n.code,{children:"Updated dependencies + commit id"}),"，以列表形式展示。然后根据 ",(0,a.jsx)(n.code,{children:"dependenciesUpdated"})," 信息展示对应的依赖包包名和新版本号，作为列表的子列表项。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async function getDependencyReleaseLine(changesets, dependenciesUpdated) {\n  console.log('getDependencyReleaseLine', changesets, dependenciesUpdated);\n  if (dependenciesUpdated.length === 0) return '';\n\n  const changesetLinks = changesets.map(\n    changeset =>\n      `- Updated dependencies${\n        changeset.commit ? ` [${changeset.commit}]` : ''\n      }`,\n  );\n\n  const updatedDepenenciesList = dependenciesUpdated.map(\n    dependency => `  - ${dependency.name}@${dependency.newVersion}`,\n  );\n\n  return [...changesetLinks, ...updatedDepenenciesList].join('\\n');\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"展示效果为："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"- Updated dependencies [f0438ab]\n- Updated dependencies [f0438ab]\n  - module-3@2.0.0\n  - module-1@0.2.0\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"配置",children:["配置",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Changesets 配置文件中 ",(0,a.jsx)(n.code,{children:"changelog"})," 字段用于标记 changelog 信息的获取途径。"]}),"\n",(0,a.jsx)(n.p,{children:"该配置可以为字符串，直接声明获取 changelog 信息模块的模块名称或者路径。"}),"\n",(0,a.jsxs)(n.p,{children:["该配置还支持配置数组，数组中第一个元素为获取 changelog 信息模块的模块名称或者路径，第二个元素为传入对应函数的参数值，会作为 ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," 和 ",(0,a.jsx)(n.code,{children:"getDependencyReleaseLine"})," 函数的第三个参数传入。"]}),"\n",(0,a.jsxs)(n.h3,{id:"配置相对路径",children:["配置相对路径",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置相对路径",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["changelog 配置如果为相对路径为 ",(0,a.jsx)(n.code,{children:".changesets"})," 目录下的相对路径。"]}),"\n",(0,a.jsxs)(n.p,{children:["例如创建 ",(0,a.jsx)(n.code,{children:".changeset/my-changelog-config.js"})," 文件，定义如下内容："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title=".changeset/my-changelog-config.js"',children:"async function getReleaseLine(changeset, type) {}\n\nasync function getDependencyReleaseLine(changesets, dependenciesUpdated) {}\n\nmodule.exports = {\n  getReleaseLine,\n  getDependencyReleaseLine,\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"changlog"})," 配置为 ",(0,a.jsx)(n.code,{children:"./my-changelog-config.js"})," 即可:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "./my-changelog-config.js",\n   ...\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"使用模块工程方案",children:["使用模块工程方案",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用模块工程方案",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"自定义 changelog 还可以使用模块工程方案进行管理，提供通用方案。"}),"\n",(0,a.jsxs)(n.h4,{id:"使用-npx-@modern-js/create@latest-创建模块工程方案",children:["使用 ",(0,a.jsx)(n.code,{children:"npx @modern-js/create@latest"})," 创建模块工程方案",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-npx-@modern-js/create@latest-创建模块工程方案",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写项目名称：custom-changelog\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"实现自定义内容",children:["实现自定义内容",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现自定义内容",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"将模块发布到-npm",children:["将模块发布到 NPM",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#将模块发布到-npm",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"在目标仓库根目录安装对应模块，例如-custom-changelog",children:["在目标仓库根目录安装对应模块，例如 ",(0,a.jsx)(n.code,{children:"custom-changelog"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在目标仓库根目录安装对应模块，例如-custom-changelog",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"配置-changeset-的-changelog-配置为包名称",children:["配置 changeset 的 changelog 配置为包名称",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-changeset-的-changelog-配置为包名称",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "custom-changelog",\n   ...\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"使用-monorepo-工程方案",children:["使用 Monorepo 工程方案",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-monorepo-工程方案",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"如果你当前仓库为 Monorepo 工程方案，可以直接使用模块子项目进行管理。"}),"\n",(0,a.jsxs)(n.h4,{id:"执行-pnpm-run-new-创建模块子项目",children:["执行 ",(0,a.jsx)(n.code,{children:"pnpm run new"})," 创建模块子项目",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-pnpm-run-new-创建模块子项目",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写子项目名称：custom-changelog\n? 请填写子项目目录名称：custom-changelog\n? 请选择开发语言：TS\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"实现自定义内容-1",children:["实现自定义内容",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现自定义内容-1",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"在-monorepo-根目录添加子项目模块依赖，例如-custom-changelog",children:["在 Monorepo 根目录添加子项目模块依赖，例如 ",(0,a.jsx)(n.code,{children:"custom-changelog"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-monorepo-根目录添加子项目模块依赖，例如-custom-changelog",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-changelog": "workspace: *",\n    ...\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.h4,{id:"配置-changeset-的-changelog-配置为包名称-1",children:["配置 changeset 的 changelog 配置为包名称",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-changeset-的-changelog-配置为包名称-1",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "custom-changelog",\n   ...\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"该模块发布到 NPM 后，依然可以和模块类型一样供其他仓库使用。"})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);