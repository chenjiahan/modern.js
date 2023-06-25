(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_default-theme_i18n_mdx"],{94496:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t}});var d,i=s("15169"),r=s("43932"),c=s("9880"),o=s("23169");function l(n){var e=Object.assign({p:"p",code:"code",pre:"pre"},(0,o.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:["框架提供了 ",(0,c.jsx)(e.code,{children:"useI18n"})," 这个 hook 来获取国际化文本，使用方式如下："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})}),"\n",(0,c.jsxs)(e.p,{children:["为了获得更好的类型提示，你可以在 tsconfig.json 中配置 ",(0,c.jsx)(e.code,{children:"paths"}),":"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "i18n": ["./i18n.json"]\n    }\n  }\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"然后在组件中这样使用:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n<keyof typeof import('i18n')>();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})}),"\n",(0,c.jsxs)(e.p,{children:["这样你就可以获得 ",(0,c.jsx)(e.code,{children:"i18n.json"})," 中定义的所有文本 key 的类型提示了。"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/doc-tools-doc/docs/zh/fragments/useI18n.mdx"]={toc:[],title:"",frontmatter:{}};var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.useMDXComponents)(),n.components).wrapper;return e?(0,c.jsx)(e,r._(i._({},n),{children:(0,c.jsx)(l,i._({},n))})):l(n)}},99333:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return h}});var d,i=s("15169"),r=s("43932"),c=s("9880"),o=s("23169"),l=s.ir(s("94496"));function t(n){var e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",ol:"ol",code:"code",h2:"h2",pre:"pre",strong:"strong",div:"div",blockquote:"blockquote"},(0,o.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.h1,{id:"国际化",children:["国际化",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#国际化",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"在 Modern.js Doc 中实现文档的国际化，你需要做如下的操作:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"定义 I18n 文本数据。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ol,{start:"2",children:["\n",(0,c.jsx)(e.li,{children:"配置默认语言。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ol,{start:"3",children:["\n",(0,c.jsxs)(e.li,{children:["配置 ",(0,c.jsx)(e.code,{children:"doc.locales"})," 和 ",(0,c.jsx)(e.code,{children:"doc.themeConfig.locales"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ol,{start:"4",children:["\n",(0,c.jsx)(e.li,{children:"新建不同的语言版本的文档。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ol,{start:"5",children:["\n",(0,c.jsx)(e.li,{children:"配置侧边栏和导航栏。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ol,{start:"6",children:["\n",(0,c.jsxs)(e.li,{children:["自定义组件中使用 ",(0,c.jsx)(e.code,{children:"useI18n"}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.h2,{id:"定义-i18n-文本数据",children:["定义 I18n 文本数据",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#定义-i18n-文本数据",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["在当前工作区新建 ",(0,c.jsx)(e.code,{children:"i18n.json"}),"，目录结构如下："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",meta:"{15}",children:".\n├── docs\n├── i18n.json\n├── package.json\n├── tsconfig.json\n└── modern.config.ts\n"})}),"\n",(0,c.jsx)(e.p,{children:"在这个 JSON 文件中，你可以定义国际化所需的文本，类型定义如下:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"export interface I18n {\n  // key 为文本 id\n  [key: string]: {\n    // key 为语言\n    [key: string]: string;\n  };\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:"举个例子:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",meta:'title="i18n.json"',children:'{\n  "getting-started": {\n    "zh": "开始",\n    "en": "Getting Started"\n  },\n  "features": {\n    "zh": "基础功能",\n    "en": "Features"\n  },\n  "guide": {\n    "zh": "指南",\n    "en": "Guide"\n  }\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["这些文本数据在",(0,c.jsx)(e.strong,{children:"配置文件"}),"和",(0,c.jsx)(e.strong,{children:"自定义组件"}),"中都会用到，后文会详细介绍。"]}),"\n",(0,c.jsxs)(e.h2,{id:"配置默认语言",children:["配置默认语言",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置默认语言",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["在 ",(0,c.jsx)(e.code,{children:"modern.config.ts"}),"中，你可以通过 ",(0,c.jsx)(e.code,{children:"doc.lang"})," 配置文档的默认语言，如下例子所示:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    lang: 'zh',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,c.jsxs)(e.p,{children:["这很重要，因为",(0,c.jsx)(e.strong,{children:"对于默认语言下的路由，框架会去掉语言前缀"}),"，比如 ",(0,c.jsx)(e.code,{children:"/zh/guide/getting-started"})," 会被转换为 ",(0,c.jsx)(e.code,{children:"/guide/getting-started"}),"。"]}),"\n",(0,c.jsxs)(e.h2,{id:"配置-locales-数据",children:["配置 ",(0,c.jsx)(e.code,{children:"locales"})," 数据",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-locales-数据",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["在 ",(0,c.jsx)(e.code,{children:"modern.config.ts"}),"中，你可以通过两个地方来配置 ",(0,c.jsx)(e.code,{children:"locales"})," 数据:"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"doc.locales"}),"，用于配置站点的",(0,c.jsx)(e.code,{children:"语言"}),"、",(0,c.jsx)(e.code,{children:"标题"}),"、",(0,c.jsx)(e.code,{children:"描述"}),"等信息，主要围绕站点本身的信息来配置。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"doc.themeConfig.locales"}),"，用于配置主题的",(0,c.jsx)(e.code,{children:"语言"}),"、",(0,c.jsx)(e.code,{children:"大纲栏标题"}),"、",(0,c.jsx)(e.code,{children:"上一页/下一页文本"}),"等信息，主要进行主题相关的配置。"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    // locales 为一个对象数组\n    locales: [\n      {\n        lang: 'en',\n        // 导航栏切换语言的标签\n        label: 'English',\n        title: 'Modern.js',\n        description: 'Modern.js 文档框架',\n      },\n      {\n        lang: 'zh',\n        // 导航栏切换语言的标签\n        label: '简体中文',\n        title: 'Modern.js',\n        description: 'Modern.js Doc',\n      },\n    ],\n    themeConfig: {\n      locales: [\n        {\n          lang: 'en',\n          outlineTitle: 'ON THIS Page',\n        },\n        {\n          lang: 'zh',\n          outlineTitle: '大纲',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,c.jsxs)(e.div,{className:"modern-directive tip",children:[(0,c.jsx)(e.div,{className:"modern-directive-title",children:"注意"}),(0,c.jsx)(e.div,{className:"modern-directive-content",children:(0,c.jsxs)(e.p,{children:["默认主题中， ",(0,c.jsx)(e.code,{children:"doc.themeConfig.locales"})," 也包含 ",(0,c.jsx)(e.code,{children:"doc.locales"})," 中的所有字段，前者优先级更高。\n"]})})]}),"\n",(0,c.jsxs)(e.p,{children:["对于其它的国际化主题参数配置，请参考",(0,c.jsx)(e.a,{href:"/api/config/config-theme#locales",children:"API 类型"}),"。"]}),"\n",(0,c.jsxs)(e.h2,{id:"新建不同的语言版本的文档",children:["新建不同的语言版本的文档",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#新建不同的语言版本的文档",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"在做好上面的配置后，我们就可以开始新建不同语言版本的文档了，非常简单，我们只需要在文档根目录下新建如下的结构即可："}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"docs\n├── en\n│   ├── api\n│   │   └── index.md\n│   └── guide\n│       └── getting-started.md\n│       └── features.md\n└── zh\n    ├── api\n    │   └── index.md\n    └── guide\n        └── getting-started.md\n        └── features.md\n"})}),"\n",(0,c.jsxs)(e.p,{children:["可以看到，我们把不同语言的文档放在了 ",(0,c.jsx)(e.code,{children:"docs"})," 目录下的 ",(0,c.jsx)(e.code,{children:"en"})," 和 ",(0,c.jsx)(e.code,{children:"zh"})," 目录中，这样就可以方便地区分不同语言的文档了。"]}),"\n",(0,c.jsxs)(e.h2,{id:"配置侧边栏和导航栏",children:["配置侧边栏和导航栏",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置侧边栏和导航栏",children:"#"})]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["如果你使用了",(0,c.jsx)(e.a,{href:"/guide/basic/auto-nav-sidebar",children:"自动化导航栏/侧边栏"}),"写法，可以跳过这个部分。"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["我们在",(0,c.jsx)(e.a,{href:"/guide/basic/conventional-route",children:"约定式路由"}),"中提到过，针对不同的文件路径，我们会自动生成对应的路由。那么，在国际化文档的场景中，每份文档的路由是不一样的，那么针对 N 种语言的文档，我们需要写 N 份侧边栏和导航栏的配置吗？"]}),"\n",(0,c.jsxs)(e.p,{children:["答案是",(0,c.jsx)(e.strong,{children:"不用"}),"。在 Modern.js Doc 框架中，你只需要写一份配置即可。如何完成呢？"]}),"\n",(0,c.jsx)(e.p,{children:"我们来这样配置侧边栏和导航栏:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\n\n// 工具函数，用于获取类型提示\nconst getI18nKey = (key: keyof typeof import('./i18n.json')) => key;\n\nexport default defineConfig({\n  doc: {\n    // 前面的配置省略\n    themeConfig: {\n      nav: [\n        {\n          text: getI18nKey('guide'),\n          link: '/guide/',\n        },\n      ],\n      sidebar: {\n        '/guide/': [\n          {\n            text: getI18nKey('getting-started'),\n            link: '/guide/getting-started',\n          },\n          {\n            text: getI18nKey('features'),\n            link: '/guide/features',\n          },\n        ],\n      },\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,c.jsx)(e.p,{children:"可以看到，在 nav 和 sidebar 的配置中，我们主要涉及到两种元素的配置:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"文本"}),"。在国际化场景中，你只需要传入 ",(0,c.jsx)(e.code,{children:"i18n.json"})," 中的文案 key 即可，框架会自动根据当前语言来获取对应的文本。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"链接"}),"。你无需添加语言前缀，框架会自动根据当前语言来添加对应的语言前缀。比如默认语言为中文的情况下，在英文文档中 ",(0,c.jsx)(e.code,{children:"/guide/features"})," 会被转换为 ",(0,c.jsx)(e.code,{children:"/en/guide/features"}),"。"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["最后你只需要写一份 ",(0,c.jsx)(e.code,{children:"nav"})," 和 ",(0,c.jsx)(e.code,{children:"sidebar"})," 的配置，框架会自动根据当前语言来获取对应的文本和链接。"]}),"\n",(0,c.jsxs)(e.h2,{id:"自定义组件中使用-usei18n",children:["自定义组件中使用 ",(0,c.jsx)(e.code,{children:"useI18n"}),(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义组件中使用-usei18n",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"在 MDX 开发或者自定义主题开发的过程中，你可能会写一些自定义组件，这些组件中也需要使用到国际化文本，那么如何获取呢？"}),"\n","\n",(0,c.jsx)(l.default,{})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/doc-tools-doc/docs/zh/guide/default-theme/i18n.mdx"]={toc:[{text:"定义 I18n 文本数据",id:"定义-i18n-文本数据",depth:2},{text:"配置默认语言",id:"配置默认语言",depth:2},{text:"配置 locales 数据",id:"配置-locales-数据",depth:2},{text:"新建不同的语言版本的文档",id:"新建不同的语言版本的文档",depth:2},{text:"配置侧边栏和导航栏",id:"配置侧边栏和导航栏",depth:2},{text:"自定义组件中使用 useI18n",id:"自定义组件中使用-usei18n",depth:2}],title:"国际化",frontmatter:{}};var h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.useMDXComponents)(),n.components).wrapper;return e?(0,c.jsx)(e,r._(i._({},n),{children:(0,c.jsx)(t,i._({},n))})):t(n)}}}]);