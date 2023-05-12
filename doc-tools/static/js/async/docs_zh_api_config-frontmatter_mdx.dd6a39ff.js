(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_config-frontmatter_mdx"],{25802:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},toc:function(){return i},title:function(){return d},default:function(){return l}});var a=s("9880"),r=s("23169"),c=void 0,i=[{id:"title",text:"title",depth:2},{id:"description",text:"description",depth:2},{id:"pagetype",text:"pageType",depth:2},{id:"hero",text:"hero",depth:2},{id:"features",text:"features",depth:2}],d="Front Matter 配置";function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",div:"div",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"front-matter-配置",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter-配置",children:"#"}),"Front Matter 配置"]}),"\n",(0,a.jsxs)(n.h2,{id:"title",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"页面的标题。默认情况下，页面的 h1 标题将用作 HTML 文档的标题。但是如果你想使用不同的标题，你可以使用 Front Matter 来指定页面的标题。例如："}),"\n",(0,a.jsxs)(n.div,{className:"language-yaml",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: 我的主页\n---\n"})})})]}),"\n",(0,a.jsxs)(n.h2,{id:"description",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"description"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"页面的自定义描述。例如："}),"\n",(0,a.jsxs)(n.div,{className:"language-yaml",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\ndescription: 这是我的主页\n---\n"})})})]}),"\n",(0,a.jsxs)(n.h2,{id:"pagetype",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pagetype",children:"#"}),"pageType"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"'home' | 'doc' | 'custom' | '404'"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"'doc'"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["页面的类型。默认情况下，页面类型为",(0,a.jsx)(n.code,{children:"doc"}),"。但是如果你想使用不同的页面类型，你可以使用",(0,a.jsx)(n.code,{children:"pageType"}),"前面的东西来指定页面类型。例如："]}),"\n",(0,a.jsxs)(n.div,{className:"language-yaml",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n---\n"})})})]}),"\n",(0,a.jsxs)(n.h2,{id:"hero",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hero",children:"#"}),"hero"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"home"})," 页面的 hero 配置。它有以下类型："]}),"\n",(0,a.jsxs)(n.div,{className:"language-ts",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export interface Hero {\n  name: string;\n  text: string;\n  tagline: string;\n  image?: {\n    src: string;\n    alt: string;\n  };\n  actions: {\n    text: string;\n    link: string;\n    theme: 'brand' | 'alt';\n  }[];\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"例如，你可以使用以下 Front Matter 来指定页面的 hero config："}),"\n",(0,a.jsxs)(n.div,{className:"language-yaml",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n\nhero:\n  name: Modern.js Doc\n  text: 文档工程解决方案\n  tagline: 现代化文档开发技术栈\n  actions:\n    - theme: brand\n      text: 介绍\n      link: /zh/guide/introduction\n    - theme: alt\n      text: 快速开始\n      link: /zh/guide/getting-started\n---\n"})})})]}),"\n",(0,a.jsxs)(n.h2,{id:"features",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"features"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Type: ",(0,a.jsx)(n.code,{children:"Array"})]}),"\n",(0,a.jsxs)(n.li,{children:["Default: ",(0,a.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"home"})," 页面的功能配置。它有以下类型："]}),"\n",(0,a.jsxs)(n.div,{className:"language-ts",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export interface Feature {\n  title: string;\n  details: string;\n  icon: string;\n  // feature 卡片跳转链接，选填\n  link?: string;\n}\n\nexport type Features = Feature[];\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["例如，你可以使用以下内容来指定 ",(0,a.jsx)(n.code,{children:"home"})," 页面的 features 配置："]}),"\n",(0,a.jsxs)(n.div,{className:"language-yaml",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n\nfeatures:\n  - title: 'MDX: 使用灵活语法编写内容'\n    details: MDX 是一种强大的内容编写方式，你可以在 Markdown 中使用 React 组件。\n    icon: \uD83D\uDCE6\n  - title: '功能丰富: 一站式解决方案'\n    details: 对全文搜索、国际化等常见功能可以做到开箱即用。\n    icon: \uD83C\uDFA8\n  - title: '扩展性强: 提供多种自定义能力'\n    details: 通过其扩展机制，你可以轻松的扩展主题 UI 和构建能力。\n    icon: \uD83D\uDE80\n---\n"})})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}}}]);