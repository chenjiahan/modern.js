(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_html_mdx"],{55939:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s,r=t("15169"),d=t("43932"),c=t("9880"),i=t("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"html-模板",children:["HTML 模板",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-模板",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,c.jsx)(n.strong,{children:"JSX 语法"}),"和 ",(0,c.jsx)(n.strong,{children:"HTML(EJS) 语法"}),"两种方式用于自定义 HTML 模板。"]}),"\n",(0,c.jsxs)(n.h2,{id:"jsx-语法",children:["JSX 语法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jsx-语法",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 约定，在 ",(0,c.jsx)(n.code,{children:"src/"})," 或入口目录下，可以创建 ",(0,c.jsx)(n.code,{children:"Document.[jt]sx"})," 文件并默认导出组件，该组件的渲染结果可以作为入口的 HTML 模板。"]}),"\n",(0,c.jsx)(n.p,{children:"例如以下目录结构："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    ├── Document.tsx\n    ├── entry-a\n    │   ├── Document.tsx\n    │   └── routes\n    ├── entry-b\n    │    └── routes\n    └── modern-app-env.d.ts\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"entry-a"})," 会优先使用当前入口下的 ",(0,c.jsx)(n.code,{children:"Docoument.[jt]sx"})," 文件。如果当前入口没有 ",(0,c.jsx)(n.code,{children:"Document.[jt]sx"})," 文件，例如 ",(0,c.jsx)(n.code,{children:"entry-b"}),"，则会查找根目录下的 ",(0,c.jsx)(n.code,{children:"Document.[jt]sx"})," 文件。"]}),"\n",(0,c.jsx)(n.p,{children:"如果未找到，将会使用 Modern.js 的默认模板。"}),"\n",(0,c.jsxs)(n.h3,{id:"html-组件",children:["HTML 组件",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-组件",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 提供了一些列渲染页面的组件，用来帮助开发者生成模板，可以从 ",(0,c.jsx)(n.code,{children:"@modern-js/runtime/document"})," 中使用这些组件："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { Html, Body, Root, Head, Scripts } from '@modern-js/runtime/document';\n"})}),"\n",(0,c.jsx)(n.p,{children:"这些组件分别用于渲染："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Html"}),"：提供原生 HTML Element 的能力，并能默认渲染开发者未添加的必须的组件。",(0,c.jsx)(n.code,{children:"<Head>"})," 和 ",(0,c.jsx)(n.code,{children:"<Body>"})," 是必须要存在的，其它组件可以按需选择合适的组件进行组装。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Body"}),"：提供原生 Body Element 的能力，内部需要包含 ",(0,c.jsx)(n.code,{children:"<Root>"})," 组件，也支持其它元素同时作为子元素，例如添加页脚。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Root"}),"：渲染的根节点 ",(0,c.jsx)(n.code,{children:"<div id='root'></div>"}),"。默认根节点的 ",(0,c.jsx)(n.code,{children:"id = 'root'"}),"。可以设置 ",(0,c.jsx)(n.code,{children:"props.rootId"})," 来更改 id 属性。可以添加子组件，也会被渲染到 HTML 模板中，当 React 渲染完成后会被覆盖，一般用来实现全局 Loading。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Head"}),"：提供原生 Head Element 的能力，并会自动填充 ",(0,c.jsx)(n.code,{children:"<meta>"}),"，以及 ",(0,c.jsx)(n.code,{children:"<Scripts>"})," 组件。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Scripts"}),"：用于控制构建生成的 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签的位置，默认放在 ",(0,c.jsx)(n.code,{children:"<Head>"})," 组件中。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Comment"}),"：将用户编写的 ",(0,c.jsx)(n.code,{children:"<!-- gateway -->"})," 这种注释，保留输出到最新渲染的 html 中。"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"模板参数",children:["模板参数",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模板参数",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["因为是 JSX 形式，",(0,c.jsx)(n.code,{children:"Document.[jt]sx"})," 里，可以比较自由的在组件内使用各种变量去赋值给各种自定义组件。"]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 也提供了 ",(0,c.jsx)(n.code,{children:"DocumentContext"})," 来提供一些配置、环境参数，方便直接获取。主要以下参数："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"processEnv"}),"：提供构建时的 ",(0,c.jsx)(n.code,{children:"process.env"}),"。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"config"}),"：Modern.js 项目的配置。目前只暴露出 output 相关的配置。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"entryName"}),"：当前的入口名。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"templateParams"}),"：HTML 模板的参数（为了兼容传统模板，不推荐使用）。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"基础示例",children:["基础示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基础示例",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import React, { useContext } from 'react';\nimport {\n  Html,\n  Root,\n  Head,\n  Body,\n  Comment,\n  DocumentContext,\n} from '@modern-js/runtime/document';\n\nexport default function Document(): React.ReactElement {\n  // DocumentContext 提供一些构建时的参数\n  const {\n    config: { output: htmlConfig },\n    entryName,\n    templateParams,\n  } = useContext(DocumentContext);\n\n  return (\n    <Html>\n      <Head>\n        <link href=\"https://modernjs.dev\" />\n        <Comment>{'<!-- Need a Comment -->'}</Comment>\n      </Head>\n      <Body>\n        <Root rootId=\"root\">\n          <h1 style={{ color: 'red' }}>以下为构建时传过来的参数：</h1>\n          <h2>entryName: {entryName}</h2>\n          <h2>title: {htmlConfig.title}</h2>\n          <h2>rootId: {templateParams.mountId}</h2>\n        </Root>\n        <h1>bottom</h1>\n      </Body>\n    </Html>\n  );\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"以上 JSX 组件，将会生成以下 HTML 模板："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"\n    />\n    <meta http-equiv="x-ua-compatible" content="ie=edge" />\n    <meta name="renderer" content="webkit" />\n    <meta name="layoutmode" content="standard" />\n    <meta name="imagemode" content="force" />\n    <meta name="wap-font-scale" content="no" />\n    <meta name="format-detection" content="telephone=no" />\n    <link rel="icon" href="/a.icon" />\n    <script defer src="/static/js/builder-runtime.js"></script>\n    <script defer src="/static/js/lib-react.js"></script>\n    <script defer src="/static/js/lib-polyfill.js"></script>\n    <script defer src="/static/js/lib-router.js"></script>\n    <script defer src="/static/js/sub.js"></script>\n    <link href="https://modernjs.dev" />\n    <!-- Need a Comment -->\n  </head>\n\n  <body>\n    <div id="root">\n      <!--<?- html ?>-->\n      <h1 style="color:red">以下为构建时传过来的参数：</h1>\n      <h2>entryName: sub</h2>\n      <h2>title: </h2>\n      <h2>rootId: root</h2>\n    </div>\n    <h1>bottom</h1>\n    <!--<?- chunksMap.js ?>-->\n    <!--<?- SSRDataScript ?>-->\n  </body>\n</html>\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"scripts-组件示例",children:["Scripts 组件示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scripts-组件示例",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以使用 ",(0,c.jsx)(n.code,{children:"<Scripts>"})," 组件，将构建生成的 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签插入到 ",(0,c.jsx)(n.code,{children:"<body>"})," 标签内："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import React, { useContext } from 'react';\nimport { Html, Root, Head, Body, Scripts } from '@modern-js/runtime/document';\n\nexport default function Document(): React.ReactElement {\n  return (\n    <Html>\n      <Head></Head>\n      <Body>\n        <Root rootId=\"root\"></Root>\n        <Scripts />\n      </Body>\n    </Html>\n  );\n}\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"html-语法",children:["Html 语法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-语法",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Modern.js 也支持 HTML 语法。默认情况下，Modern.js 的应用工程中会内置一份 HTML 模板，用于生成 HTML 代码。"}),"\n",(0,c.jsxs)(n.p,{children:["基于 HTML 语法的模板，Modern.js 提供了",(0,c.jsx)(n.strong,{children:"自定义 HTML 片段"}),"和",(0,c.jsx)(n.strong,{children:"完全自定义 HTML 模板"}),"两种方式来自定义模板。"]}),"\n",(0,c.jsxs)(n.h3,{id:"自定义-html-片段",children:["自定义 HTML 片段",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-html-片段",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在应用根目录下，创建 ",(0,c.jsx)(n.code,{children:"config/html/"})," 目录，该目录下支持创建四种 HTML 片段。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"top.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"head.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"body.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"bottom.html"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"这些片段将按位置注入到默认的 HTML 模板中。"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <%= meta %>\n    <title><%= title %></title>\n    <%= topTemplate %>\n    <%= headTemplate %>\n    {/* webpack inject css  */}\n  </head>\n  <body>\n    <noscript>\n      We're sorry but react app doesn't work properly without JavaScript\n      enabled. Please enable it to continue.\n    </noscript>\n    <div id=\"<%= mountId %>\"></div>\n    <%= bodyTemplate %>\n    {/* webpack inject js  */}\n    {/* <?- bottomTemplate ?> */}\n  </body>\n</html>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["代码片段支持使用 ",(0,c.jsx)(n.a,{href:"https://lodash.com/docs/4.17.15#template",target:"_blank",rel:"noopener noreferrer",children:"Lodash template"})," 语法。"]}),"\n",(0,c.jsxs)(n.p,{children:["例如在 ",(0,c.jsx)(n.code,{children:"body.html"})," 里插入一个外链脚本："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",meta:'title="config/html/body.html"',children:'<script src="//example.com/assets/a.js"></script>\n'})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["自定义 HTML 片段的实现方式是将片段与框架内置的模板进行合并，由于框架的默认模板中已经存在 ",(0,c.jsx)(n.code,{children:"<title>"}),"，因此自定义 HTML 模板中的 title 标签无法生效，请通过 ",(0,c.jsx)(n.a,{href:"/configure/app/html/title",children:"html.title"})," 来修改页面标题。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.h3,{id:"完全自定义-html-模板",children:["完全自定义 HTML 模板",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#完全自定义-html-模板",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"某些情况下，HTML 片段无法满足自定义需求，Modern.js 提供了完全自定义方式。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive caution",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"通常不建议直接覆盖默认的 HTML 模板，可能会失去一部分功能选项。即使需要替换，建议以内置模板为基础，按需修改。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["在 ",(0,c.jsx)(n.code,{children:"config/html/"})," 目录下，创建 ",(0,c.jsx)(n.code,{children:"index.html"})," 文件,该文件将替代默认的 HTML 模板。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["内部默认 HTML 模板可以在 ",(0,c.jsx)(n.code,{children:"node_modules/.modern-js/${entryName}/index.html"})," 中查看。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.h3,{id:"模板参数-1",children:["模板参数",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模板参数-1",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["模板中使用的参数可以通过 ",(0,c.jsx)(n.a,{href:"/configure/app/html/template-parameters",children:"html.templateParameters"})," 配置项来定义。"]}),"\n",(0,c.jsxs)(n.h3,{id:"按入口设置",children:["按入口设置",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#按入口设置",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"config/html/"})," 目录中的 HTML 片段对应用中的所有入口都生效。如果希望按入口自定义 HTML 片段，可以在 ",(0,c.jsx)(n.code,{children:"config/html/"})," 目录下新建一个以",(0,c.jsx)(n.strong,{children:"入口名"}),"命名的目录，然后在这个目录中自定义 HTML 片段。"]}),"\n",(0,c.jsxs)(n.p,{children:["例如，如下设置的 HTML 片段仅对入口 ",(0,c.jsx)(n.code,{children:"entry1"})," 生效："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n├── config/\n│   └── html/\n│       └── entry1\n│           ├── head.html\n│           └── body.html\n└── src/\n    ├── entry1/\n    │   └── routes\n    └── entry2/\n        └── routes\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fbasic-features%2Fhtml.mdx"]={toc:[{text:"JSX 语法",id:"jsx-语法",depth:2},{text:"HTML 组件",id:"html-组件",depth:3},{text:"模板参数",id:"模板参数",depth:3},{text:"基础示例",id:"基础示例",depth:3},{text:"Scripts 组件示例",id:"scripts-组件示例",depth:3},{text:"Html 语法",id:"html-语法",depth:2},{text:"自定义 HTML 片段",id:"自定义-html-片段",depth:3},{text:"完全自定义 HTML 模板",id:"完全自定义-html-模板",depth:3},{text:"模板参数",id:"模板参数-1",depth:3},{text:"按入口设置",id:"按入口设置",depth:3}],title:"HTML 模板",frontmatter:{title:"HTML 模板",sidebar_position:9}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,r._)({},e),{children:(0,c.jsx)(l,(0,r._)({},e))})):l(e)}}}]);