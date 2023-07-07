(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_basic_auto-nav-sidebar_mdx"],{96117:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return o}});var d,i=s("15169"),c=s("43932"),l=s("9880"),a=s("23169");function r(n){var e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,a.useMDXComponents)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"自动化导航栏/侧边栏",children:["自动化导航栏/侧边栏",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自动化导航栏/侧边栏",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["在 Modern.js Doc 中，除了在配置文件中通过 ",(0,l.jsx)(e.code,{children:"themeConfig"})," 声明 ",(0,l.jsx)(e.a,{href:"/api/config/config-theme#nav",children:"nav"})," 和 ",(0,l.jsx)(e.a,{href:"/api/config/config-theme#sidebar",children:"sidebar"}),"， 你也可以通过声明 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 描述文件来自动化生成导航栏和侧边栏，我们更加推荐后者，因为可以使配置文件更加简洁和清晰。"]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"提示"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["当配置文件 ",(0,l.jsx)(e.code,{children:"modern.config.ts"})," 中没有 ",(0,l.jsx)(e.code,{children:"nav"})," 和 ",(0,l.jsx)(e.code,{children:"sidebar"})," 配置的情况下，自动化导航栏/侧边栏才会生效。\n"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"基础概念",children:["基础概念",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#基础概念",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["首先，",(0,l.jsx)(e.code,{children:"_meta.json"})," 可以分为两类：导航栏级别和侧边栏级别。两者的区别在于，导航级别的 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 位于文档根目录中，而侧边栏级别的 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 位于文档根目录的子目录中。比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"docs\n├── _meta.json // 导航栏级别\n└── guides\n    ├── _meta.json // 侧边栏级别\n    ├── introduction.mdx\n    └── advanced\n        ├── _meta.json // 侧边栏级别\n        └── plugin-development.md\n"})}),"\n",(0,l.jsxs)(e.p,{children:["如果你的文档使用了国际化，那么导航栏级别的 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 会放置在对应语言目录下，比如："]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"docs\n├── en\n│   ├── _meta.json // 导航栏级别\n│   └── guides\n│       ├── _meta.json // 侧边栏级别\n│       ├── introduction.mdx\n│       ├── install.mdx\n│       └── advanced\n│           ├── _meta.json // 侧边栏级别\n│           └── plugin-development.md\n└── zh\n    ├── _meta.json // 导航栏级别\n    └── guides\n        ├── _meta.json // 侧边栏级别\n        ├── introduction.mdx\n        ├── install.mdx\n        └── advanced\n            ├── _meta.json // 侧边栏级别\n            └── plugin-development.md\n"})}),"\n",(0,l.jsxs)(e.h2,{id:"导航栏级别配置",children:["导航栏级别配置",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#导航栏级别配置",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["在导航栏级别的情况中，你可以在 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 中填入一个数组，其类型跟默认主题的 nav 配置完全一致，详情可以参考",(0,l.jsx)(e.a,{href:"/api/config/config-theme#nav",children:"nav 配置"}),"。比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "text": "Guide",\n    "link": "/guides/introduction",\n    "activeMatch": "^/guides/"\n  }\n]\n'})}),"\n",(0,l.jsxs)(e.h2,{id:"侧边栏级别配置",children:["侧边栏级别配置",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#侧边栏级别配置",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["在侧边栏级别的情况中，你可以在 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 中填入一个数组，数组每一项的类型如下:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"export type SideMetaItem =\n  | string\n  | {\n      type: 'file';\n      name: string;\n      label?: string;\n    }\n  | {\n      type: 'dir';\n      name: string;\n      label?: string;\n      collapsible?: boolean;\n      collapsed?: boolean;\n    };\n"})}),"\n",(0,l.jsxs)(e.h3,{id:"string",children:["string",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#string",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["当类型为 ",(0,l.jsx)(e.code,{children:"string"})," 时，表示该项是一个文件，文件名为该字符串，比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'["introduction"]\n'})}),"\n",(0,l.jsxs)(e.p,{children:["其中文件名可以带后缀，也可以不带后缀，比如 ",(0,l.jsx)(e.code,{children:"introduction"})," 会被解析为 ",(0,l.jsx)(e.code,{children:"introduction.mdx"}),"。"]}),"\n",(0,l.jsxs)(e.h3,{id:"obejct",children:["obejct",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#obejct",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"当类型为对象形式时，你可以描述为一个文件、目录或者自定义链接。"}),"\n",(0,l.jsxs)(e.p,{children:["在描述",(0,l.jsx)(e.strong,{children:"文件"}),"的情况下，类型如下:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"{\n  type: 'file';\n  name: string;\n  label?: string;\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["其中，",(0,l.jsx)(e.code,{children:"name"})," 表示文件名，同时支持",(0,l.jsx)(e.code,{children:"带"}),"/",(0,l.jsx)(e.code,{children:"不带"}),"后缀，",(0,l.jsx)(e.code,{children:"label"})," 表示该文件在侧边栏中的显示名称，为可选值，如果未填则会自动取文档中的 h1 标题。比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "type": "file",\n  "name": "introduction",\n  "label": "Introduction"\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["在描述",(0,l.jsx)(e.strong,{children:"目录"}),"的情况下，类型如下:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"{\n  type: 'dir';\n  name: string;\n  label: string;\n  collapsible?: boolean;\n  collapsed?: boolean;\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["其中，",(0,l.jsx)(e.code,{children:"name"})," 表示目录名，",(0,l.jsx)(e.code,{children:"label"})," 表示该目录在侧边栏中的显示名称，",(0,l.jsx)(e.code,{children:"collapsible"})," 表示该目录是否可以折叠，",(0,l.jsx)(e.code,{children:"collapsed"})," 表示该目录是否默认折叠，比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "type": "dir",\n  "name": "advanced",\n  "label": "Advanced",\n  "collapsible": true,\n  "collapsed": false\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["在描述",(0,l.jsx)(e.strong,{children:"自定义链接"}),"的情况下，类型如下:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"{\n  type: 'custom-link';\n  label: string;\n  link: string;\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["其中，",(0,l.jsx)(e.code,{children:"label"})," 表示该链接在侧边栏中的显示名称，",(0,l.jsx)(e.code,{children:"link"})," 表示该链接的跳转地址，比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "type": "custom-link",\n  "label": "My Link",\n  "link": "/my-link"\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"link"})," 支持外部链接，比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "type": "custom-link",\n  "link": "https://github.com",\n  "label": "GitHub"\n}\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"完整示例",children:["完整示例",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#完整示例",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"下面是一个完整的示例，用到了上述的三种类型:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'[\n  "install",\n  {\n    "type": "file",\n    "name": "introduction",\n    "label": "Introduction"\n  },\n  {\n    "type": "dir",\n    "name": "advanced",\n    "label": "Advanced",\n    "collapsible": true,\n    "collapsed": false\n  },\n  {\n    "type": "custom-link",\n    "label": "My Link",\n    "link": "/my-link"\n  }\n]\n'})}),"\n",(0,l.jsxs)(e.h3,{id:"无配置用法",children:["无配置用法",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#无配置用法",children:"#"})]}),"\n",(0,l.jsxs)(e.p,{children:["某些目录下你可以不配置 ",(0,l.jsx)(e.code,{children:"_meta.json"}),"，让框架自动帮你生成侧边栏。这需要保证目录下",(0,l.jsx)(e.strong,{children:"仅包含文档，而不包含子目录"}),"，并且你对",(0,l.jsx)(e.strong,{children:"文档的顺序"}),"没有要求。比如现在有如下的文档结构:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"docs\n├── _meta.json\n└── guides\n  ├── _meta.json\n  └── basic\n    ├── introduction.mdx\n    ├── install.mdx\n    └── plugin-development.md\n"})}),"\n",(0,l.jsxs)(e.p,{children:["在 ",(0,l.jsx)(e.code,{children:"guides"})," 目录中你可以配置 ",(0,l.jsx)(e.code,{children:"_meta.json"})," 内容如下:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "type": "dir",\n    "name": "basic",\n    "label": "Basic",\n    "collapsible": true,\n    "collapsed": false\n  }\n]\n'})}),"\n",(0,l.jsxs)(e.p,{children:["而在 ",(0,l.jsx)(e.code,{children:"basic"})," 目录中，你可以不配置 ",(0,l.jsx)(e.code,{children:"_meta.json"}),"，框架会自动帮你生成侧边栏，默认按照文件名的字母顺序排序。如果你想要自定义顺序，可以在文件名前加上数字前缀，比如:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"basic\n  ├── 1-introduction.mdx\n  ├── 2-install.mdx\n  └── 3-plugin-development.md\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fzh%2Fguide%2Fbasic%2Fauto-nav-sidebar.mdx"]={toc:[{text:"基础概念",id:"基础概念",depth:2},{text:"导航栏级别配置",id:"导航栏级别配置",depth:2},{text:"侧边栏级别配置",id:"侧边栏级别配置",depth:2},{text:"string",id:"string",depth:3},{text:"obejct",id:"obejct",depth:3},{text:"完整示例",id:"完整示例",depth:3},{text:"无配置用法",id:"无配置用法",depth:3}],title:"自动化导航栏/侧边栏",frontmatter:{}};var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,a.useMDXComponents)(),n.components).wrapper;return e?(0,l.jsx)(e,(0,c._)((0,i._)({},n),{children:(0,l.jsx)(r,(0,i._)({},n))})):r(n)}}}]);