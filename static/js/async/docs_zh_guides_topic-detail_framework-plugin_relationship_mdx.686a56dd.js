(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_relationship_mdx"],{36214:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return i},toc:function(){return l},default:function(){return o}});var d=s("9880"),c=s("23169"),r={title:"插件之间的关系",sidebar_position:4},i="插件之间的关系",l=[{text:"插件排序",depth:2,id:"插件排序"},{text:"前置插件",depth:3,id:"前置插件"},{text:"后置插件",depth:3,id:"后置插件"},{text:"互斥插件",depth:2,id:"互斥插件"},{text:"必需插件",depth:2,id:"必需插件"},{text:"注册插件",depth:2,id:"注册插件"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"插件之间的关系",children:["插件之间的关系",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件之间的关系",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 的插件配置对象提供了一系列的字段，用于控制插件顺序、互斥等能力，可用的字段如下："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),": ",(0,d.jsx)(n.code,{children:"string"}),"，设置当前插件的名称。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pre"}),": ",(0,d.jsx)(n.code,{children:"string[]"}),"，这些插件最终会调整到当前插件前面。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"post"}),": ",(0,d.jsx)(n.code,{children:"string[]"}),"，这些插件最终会调整到当前插件后面。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rivals"}),": ",(0,d.jsx)(n.code,{children:"string[]"}),"，互斥插件，遇到这些插件时会报错。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"required"}),": ",(0,d.jsx)(n.code,{children:"string[]"}),"，必需插件，插件列表中没有对应的插件时会报错。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"usePlugin"}),": ",(0,d.jsx)(n.code,{children:"CliPlugin[]"}),"，注册其他插件。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"通过以上参数可以实现插件的前置、后置、互斥、必需等逻辑。"}),"\n",(0,d.jsxs)(n.h2,{id:"插件排序",children:["插件排序",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件排序",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 的插件通过 ",(0,d.jsx)(n.code,{children:"pre"}),"、",(0,d.jsx)(n.code,{children:"post"})," 参数来实现了插件排序的功能。"]}),"\n",(0,d.jsxs)(n.h3,{id:"前置插件",children:["前置插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#前置插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，插件会按照添加顺序依次执行，通过 ",(0,d.jsx)(n.code,{children:"pre"})," 字段可以声明前置执行的插件。"]}),"\n",(0,d.jsx)(n.p,{children:"比如有下面两个插件："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"foo.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"bar.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  pre: ['plugin-foo'],\n};\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"bar"})," 插件在 ",(0,d.jsx)(n.code,{children:"pre"})," 字段中配置了 ",(0,d.jsx)(n.code,{children:"foo"})," 插件，因此 ",(0,d.jsx)(n.code,{children:"foo"})," 插件一定会在 ",(0,d.jsx)(n.code,{children:"bar"})," 插件之前执行。"]}),"\n",(0,d.jsxs)(n.h3,{id:"后置插件",children:["后置插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#后置插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["同样的，通过 ",(0,d.jsx)(n.code,{children:"post"})," 字段可以声明后置执行的插件。"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"foo.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"bar.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  post: ['plugin-foo'],\n};\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"bar"})," 插件在 ",(0,d.jsx)(n.code,{children:"post"})," 字段中配置了 ",(0,d.jsx)(n.code,{children:"foo"})," 插件，因此 ",(0,d.jsx)(n.code,{children:"foo"})," 插件一定会在 ",(0,d.jsx)(n.code,{children:"bar"})," 插件之后执行。"]}),"\n",(0,d.jsxs)(n.h2,{id:"互斥插件",children:["互斥插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#互斥插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"rivals"})," 字段可以声明插件间的互斥关系。"]}),"\n",(0,d.jsx)(n.p,{children:"有下面两个插件："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"foo.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"bar.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  rivals: ['plugin-foo'],\n};\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"bar"})," 插件在 ",(0,d.jsx)(n.code,{children:"rivals"})," 字段中配置了 ",(0,d.jsx)(n.code,{children:"foo"})," 插件，因此同时添加了 ",(0,d.jsx)(n.code,{children:"foo"})," 插件和 ",(0,d.jsx)(n.code,{children:"bar"})," 插件就会报错。"]}),"\n",(0,d.jsxs)(n.h2,{id:"必需插件",children:["必需插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#必需插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"required"})," 字段可以声明插件间的依赖关系。"]}),"\n",(0,d.jsx)(n.p,{children:"有下面两个插件："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"foo.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"bar.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  required: ['plugin-foo'],\n};\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"bar"})," 插件在 ",(0,d.jsx)(n.code,{children:"required"})," 字段中配置了 ",(0,d.jsx)(n.code,{children:"foo"})," 插件，因此使用 ",(0,d.jsx)(n.code,{children:"bar"})," 插件时，如果未配置 ",(0,d.jsx)(n.code,{children:"foo"})," 插件就会报错。"]}),"\n",(0,d.jsxs)(n.h2,{id:"注册插件",children:["注册插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当插件之间存在依赖关系时，我们也可以在一个插件中通过 ",(0,d.jsx)(n.code,{children:"usePlugin"})," 主动注册另一个插件："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"foo.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = () => ({\n  name: 'plugin-foo',\n});\n\nconst bar = () => ({\n  name: 'plugin-bar',\n  usePlugin: [foo()],\n});\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["当使用者配置了 ",(0,d.jsx)(n.code,{children:"bar"})," 插件时，",(0,d.jsx)(n.code,{children:"foo"})," 插件也会自动注册生效，使用者就不需要去额外注册 ",(0,d.jsx)(n.code,{children:"foo"})," 插件了。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);