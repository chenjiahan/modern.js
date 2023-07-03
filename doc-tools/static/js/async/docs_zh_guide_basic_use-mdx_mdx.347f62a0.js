(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_basic_use-mdx_mdx"],{53412:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var d,s=r("15169"),c=r("43932"),l=r("9880"),o=r("23169");function i(e){var n=Object.assign({pre:"pre",code:"code",div:"div",p:"p",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      experimentalMdxRs: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["这个功能底层基于 Modern.js Doc 自研的 ",(0,l.jsx)(n.a,{href:"https://github.com/web-infra-dev/mdx-rs-binding",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/mdx-rs-binding"})," 库来实现，性能比 JS 版本的 MDX 编译器高 5 ~ 10 倍，但目前还不支持 JS 版本的插件，如果你需要加入自定义的 remark 或 rehype 插件，建议不要开启这个功能。\n"]})})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fzh%2Ffragments%2Fmdx-rs.mdx"]={toc:[],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,c._(s._({},e),{children:(0,l.jsx)(i,s._({},e))})):i(e)}},3016:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var d,s=r("15169"),c=r("43932"),l=r("9880"),o=r("23169"),i=r.ir(r("53412"));function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",div:"div",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"使用-mdx",children:["使用 MDX",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-mdx",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Modern.js Doc 支持 ",(0,l.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),"，这是一种功能强大的内容开发方式。"]}),"\n",(0,l.jsxs)(n.h2,{id:"markdown",children:["Markdown",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"MDX 是 Markdown 的超集，这意味着你可以像往常一样编写 Markdown 文件。例如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"# Hello World\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"使用组件",children:["使用组件",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用组件",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["当你想在 Markdown 文件中使用 React 组件时，你应该使用 ",(0,l.jsx)(n.code,{children:".mdx"})," 扩展名来命名你的文件。例如："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mdx",children:"// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"front-matter",children:["Front Matter",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"你可以在 Markdown 文件的开头添加 Front Matter，它是一个 YAML 格式的对象，用于定义一些元数据。例如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: Hello World\n---\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"注意：默认情况下，Modern.js Doc 使用 h1 标题作为 html 的标题。"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"你还可以在正文中访问 Front Mattter 中定义的属性，例如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["前面定义的属性将作为 ",(0,l.jsx)(n.code,{children:"frontmatter"})," 属性传递给组件。所以最终输出将是："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<h1>Hello World</h1>\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"自定义容器",children:["自定义容器",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义容器",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你可以使用 ",(0,l.jsx)(n.code,{children:":::"})," 语法来创建自定义容器，且支持自定义标题。例如："]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输入："})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-markdown",children:":::tip\n这是一个`tip`类型的`block`\n:::\n\n:::info\n这是一个`info`类型的`block`\n:::\n\n:::warning\n这是一个`warning`类型的`block`\n:::\n\n:::danger\n这是一个`danger`类型的`block`\n:::\n\n:::tip 自定义标题\n自定义标题的 `block`\n:::\n\n:::tip{title=自定义标题}\n自定义标题的 `block`\n:::\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输出："})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["这是一个 ",(0,l.jsx)(n.code,{children:"tip"})," 类型的 ",(0,l.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive info",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["这是一个 ",(0,l.jsx)(n.code,{children:"info"})," 类型的 ",(0,l.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive warning",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["这是一个 ",(0,l.jsx)(n.code,{children:"warning"})," 类型的 ",(0,l.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive danger",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"DANGER"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["这是一个 ",(0,l.jsx)(n.code,{children:"danger"})," 类型的 ",(0,l.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"自定义标题"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["自定义标题的 ",(0,l.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"自定义标题"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["\n自定义标题的 ",(0,l.jsx)(n.code,{children:"block"}),"\n"]})})]}),"\n",(0,l.jsxs)(n.h2,{id:"代码块",children:["代码块",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码块",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"基本使用",children:["基本使用",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本使用",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"你可以使用 ``` 语法来创建代码块，且支持自定义标题。例如："}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输入:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输出:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",meta:'title="hello.js"',children:"console.log('Hello World');\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"代码行高亮",children:["代码行高亮",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码行高亮",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"你可以通过如下的语法指定代码行高亮，比如:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输入:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"```js {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n```\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输出:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",meta:"{1,3-5}",children:"console.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n"})}),"\n",(0,l.jsx)(n.p,{children:"你也可以同时应用代码行高亮和代码块标题，比如:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输入:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"输出:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",meta:'title="hello.js" {1,3-5}',children:"console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"显示代码行号",children:["显示代码行号",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#显示代码行号",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["如果你想要显示代码行号，你可以在配置文件中开启 ",(0,l.jsx)(n.code,{children:"showLineNumbers"})," 选项:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  // ...\n  doc: {\n    markdown: {\n      showLineNumbers: true,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"开启-rust-版本编译器",children:["开启 Rust 版本编译器",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-rust-版本编译器",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"你可以通过如下的配置开启 Rust 版本的 MDX 编译器:"}),"\n","\n",(0,l.jsx)(i.default,{})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fzh%2Fguide%2Fbasic%2Fuse-mdx.mdx"]={toc:[{text:"Markdown",id:"markdown",depth:2},{text:"使用组件",id:"使用组件",depth:2},{text:"Front Matter",id:"front-matter",depth:2},{text:"自定义容器",id:"自定义容器",depth:2},{text:"代码块",id:"代码块",depth:2},{text:"基本使用",id:"基本使用",depth:3},{text:"代码行高亮",id:"代码行高亮",depth:3},{text:"显示代码行号",id:"显示代码行号",depth:3},{text:"开启 Rust 版本编译器",id:"开启-rust-版本编译器",depth:2}],title:"使用 MDX",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,c._(s._({},e),{children:(0,l.jsx)(t,s._({},e))})):t(e)}}}]);