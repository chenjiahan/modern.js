(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_app_mdx"],{88398:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return l},title:function(){return o},default:function(){return a}});var r=n("12151");let i={sidebar_position:1},l=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"api",text:"API",depth:2},{id:"checkenvironment",text:"checkEnvironment",depth:3},{id:"runinstall",text:"runInstall",depth:3},{id:"rungitandinstall",text:"runGitAndInstall",depth:3},{id:"forgetemplate",text:"forgeTemplate",depth:3},{id:"showsuccessinfo",text:"showSuccessInfo",depth:3},{id:"runsubgenerator",text:"runSubGenerator",depth:3},{id:"getinputbyschema",text:"getInputBySchema",depth:3},{id:"getinputbyschemafunc",text:"getInputBySchemaFunc",depth:3}],o="@modern-js/codesmith-api-app";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3",ol:"ol"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"modern-jscodesmith-api-app",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-app",children:"#"}),"@modern-js/codesmith-api-app"]}),"\n",(0,r.jsx)(e.p,{children:"微生成器开发过程中常用 API 的组合封装，包含 fs、git、npm 等其他包的 API 封装，在能满足需求时，推荐使用该 npm 包的 API。"}),"\n",(0,r.jsxs)(e.h2,{id:"使用姿势",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { AppAPI } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-app'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"appApi"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"AppAPI"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(context"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" generator);"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"appApi"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".runInstall"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["创建 AppAPI 实例，参数和微生成器函数参数一致，为 context 和 generator，具体介绍请看",(0,r.jsx)(e.a,{href:"/guides/topic-detail/generator/codesmith/structure.html",children:"微生成器项目组成"}),"。"]}),"\n",(0,r.jsx)(e.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"api",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,r.jsxs)(e.h3,{id:"checkenvironment",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#checkenvironment",children:"#"}),"checkEnvironment"]}),"\n",(0,r.jsx)(e.p,{children:"检查当前生成器运行环境，检查项为："}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"node 及 node 版本，默认大于 12.22.12，可传递参数执行 node 版本。"}),"\n",(0,r.jsx)(e.li,{children:"可使用 yarn、pnpm 或者 npm。"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["nodeVersion?: ",(0,r.jsx)(e.code,{children:"string"})," 校验的 node 版本。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"runinstall",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#runinstall",children:"#"}),"runInstall"]}),"\n",(0,r.jsxs)(e.p,{children:["安装依赖，可传入安装依赖命令，默认根据 config 中的 ",(0,r.jsx)(e.code,{children:"packageManager"})," 值进行。"]}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["command?: ",(0,r.jsx)(e.code,{children:"string"})," 安装依赖命令。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"rungitandinstall",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rungitandinstall",children:"#"}),"runGitAndInstall"]}),"\n",(0,r.jsx)(e.p,{children:"该函数完成以下动作："}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"校验当前生成器执行目录是否为一个 git 仓库。"}),"\n",(0,r.jsx)(e.li,{children:"如果不是一个 git 仓库，初始化为一个 git 仓库。"}),"\n",(0,r.jsx)(e.li,{children:"安装依赖。"}),"\n",(0,r.jsxs)(e.li,{children:["在非 monorepo 项目(判断条件，config 中 ",(0,r.jsx)(e.code,{children:"isMonorepoSubProject"})," 不存在或者为 false)中提交初始 commit，commit 信息为 feat: init，支持自定义。"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["commitMessage?: ",(0,r.jsx)(e.code,{children:"string"})," 初始化 commit message 信息。"]}),"\n",(0,r.jsxs)(e.li,{children:["installFunc?: ",(0,r.jsx)(e.code,{children:"() => Promise<void>"})," 安装依赖函数。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"forgetemplate",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#forgetemplate",children:"#"}),"forgeTemplate"]}),"\n",(0,r.jsx)(e.p,{children:"渲染生成器模板文件。"}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["templatePattern: string 模板文件匹配正则，例如： ",(0,r.jsx)(e.code,{children:"templates/base-templates/**/*"})," 。"]}),"\n",(0,r.jsxs)(e.li,{children:["filter?: ",(0,r.jsx)(e.code,{children:"(resourceKey: string) => boolean"})," 过滤函数，参数为 templatePattern 匹配的文件路径，返回 true 表示渲染该文件，返回 false 表示不渲染该文件。"]}),"\n",(0,r.jsxs)(e.li,{children:["rename?: ",(0,r.jsx)(e.code,{children:"(resourceKey: string) => string"})," 重命名函数，参数为 templatePattern 匹配的文件路径，返回新文件名。默认会替换 resourceKey 开头的 templates 目录和结尾的 .handlebars 后缀。"]}),"\n",(0,r.jsxs)(e.li,{children:["parameters?: ",(0,r.jsx)(e.code,{children:"Record<string, any>"})," 渲染参数，当模板中存在 handlebars 或者 ejs 变量时，使用其传递对应变量值。"]}),"\n",(0,r.jsxs)(e.li,{children:["type?: ",(0,r.jsx)(e.code,{children:"'handlebars' | 'ejs'"})," 模板文件类型，默认为 handlebars。"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"例如:"}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"appApi"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".forgeTemplate"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/base-templates/**/*'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  resourceKey "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    resourceKey"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".replace"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/base-templates/'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".replace"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.handlebars'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"appApi"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".forgeTemplate"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/base-template/**/*'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  resourceKey "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"resourceKey"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".include"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eslintrc.json'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  resourceKey "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    resourceKey"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".replace"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/base-template/'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" projectPath)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".replace"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'language'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" language "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".replace"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.handlebars'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" packageName "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    language"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    isTs"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" language "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Language"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"TS"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    packageManager"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getPackageManagerText"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(packageManager "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"showsuccessinfo",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#showsuccessinfo",children:"#"}),"showSuccessInfo"]}),"\n",(0,r.jsx)(e.p,{children:"展示成功信息。"}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["successInfo?: ",(0,r.jsx)(e.code,{children:"string"}),"，默认为 Success || 成功。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"runsubgenerator",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#runsubgenerator",children:"#"}),"runSubGenerator"]}),"\n",(0,r.jsx)(e.p,{children:"运行子生成器。"}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["subGenerator: ",(0,r.jsx)(e.code,{children:"string"})," 子生成器名称或者路径。"]}),"\n",(0,r.jsxs)(e.li,{children:["relativePwdPath?: ",(0,r.jsx)(e.code,{children:"string"})," 子生成器运行的相对路径。"]}),"\n",(0,r.jsxs)(e.li,{children:["config?: ",(0,r.jsx)(e.code,{children:"Record<string, unknown>"})," 子生成器运行的默认 config 配置。"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"例如："}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"appApi"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".runSubGenerator"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getGeneratorPath"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/repo-generator'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"config"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".distTag)"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".config"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" hasPlugin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"getinputbyschema",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#getinputbyschema",children:"#"}),"getInputBySchema"]}),"\n",(0,r.jsx)(e.p,{children:"通过 schema 完成用户交互输入。"}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["schema: ",(0,r.jsx)(e.code,{children:"FormilySchema | Question[]"})," 问题列表，支持 Formily schema 和 inquirer 类型。"]}),"\n",(0,r.jsxs)(e.li,{children:["type: ",(0,r.jsx)(e.code,{children:"'formily' | 'inquirer'"})," 类型，默认值为 formily。"]}),"\n",(0,r.jsxs)(e.li,{children:["configValue: ",(0,r.jsx)(e.code,{children:"Record<string, unknown> = {}"})," schema 默认值，传入该值的 schema 字段对应的问题将不再和用户交互。"]}),"\n",(0,r.jsxs)(e.li,{children:["validateMap?: ",(0,r.jsx)(e.code,{children:"Record<string, (input: unknown, data?: Record<string, unknown>) => { success: boolean; error?: string }>"})," schema 中特殊字段的验证函数。"]}),"\n",(0,r.jsxs)(e.li,{children:["initValue?: ",(0,r.jsx)(e.code,{children:"Record<string, any>"})," schema 中字段的初始化值。"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Formily Schema 类型支持方式可参考",(0,r.jsx)(e.a,{href:"/guides/topic-detail/generator/plugin/api/input/type.html",children:"自定义输入相关类型定义"}),"。"]}),"\n",(0,r.jsxs)(e.h3,{id:"getinputbyschemafunc",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#getinputbyschemafunc",children:"#"}),"getInputBySchemaFunc"]}),"\n",(0,r.jsx)(e.p,{children:"通过 schema 完成用户交互输入，schema 参数值为函数，用户处理国际化问题，仅支持 Formily schema。"}),"\n",(0,r.jsx)(e.p,{children:"参数："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["schema: ",(0,r.jsx)(e.code,{children:"config?: Record<string, any>) => FormilySchema"})," 获取问题列表函数，config 参数为当前生成器中的 config 配置信息。"]}),"\n",(0,r.jsxs)(e.li,{children:["configValue: ",(0,r.jsx)(e.code,{children:"Record<string, unknown> = {}"})," schema 默认值，传入该值的 schema 字段对应的问题将不再和用户交互。"]}),"\n",(0,r.jsxs)(e.li,{children:["validateMap?: ",(0,r.jsx)(e.code,{children:"Record<string, (input: unknown, data?: Record<string, unknown>) => { success: boolean; error?: string }>"})," schema 中特殊字段的验证函数。"]}),"\n",(0,r.jsxs)(e.li,{children:["initValue?: ",(0,r.jsx)(e.code,{children:"Record<string, any>"})," schema 中字段的初始化值。"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Formily Schema 类型支持方式可参考",(0,r.jsx)(e.a,{href:"/guides/topic-detail/generator/plugin/api/input/type.html",children:"自定义输入相关类型定义"}),"。"]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);