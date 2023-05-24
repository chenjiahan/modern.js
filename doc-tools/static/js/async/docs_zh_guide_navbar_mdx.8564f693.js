(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_navbar_mdx"],{18393:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var i in e)Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}(e,{frontmatter:function(){return d},title:function(){return r},toc:function(){return c},default:function(){return l}});var t=i("9880"),s=i("23169"),d={},r="导航栏模块",c=[{text:"自定义导航菜单",depth:2,id:"自定义导航菜单"},{text:"NavItemWithLink",depth:3,id:"navitemwithlink"},{text:"NavItemWithChildren",depth:3,id:"navitemwithchildren"},{text:"示例",depth:3,id:"示例"},{text:"白天/夜间模式",depth:2,id:"白天/夜间模式"},{text:"相关链接",depth:2,id:"相关链接"}];function o(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,s.useMDXComponents)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"导航栏模块",children:["导航栏模块",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#导航栏模块",children:"#"})]}),"\n",(0,t.jsx)(e.p,{children:"导航栏对一个网站来说非常重要，它可以让用户快速的在网站的不同页面之间进行跳转，也可以让用户快速的找到网站的一些重要信息。"}),"\n",(0,t.jsxs)(e.h2,{id:"自定义导航菜单",children:["自定义导航菜单",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义导航菜单",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["你可以在 ",(0,t.jsx)(e.code,{children:"themeConfig.nav"})," 中添加自定义的导航菜单，配置为一个数组，如下："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["导航栏配置为一个数组，数组中的每一项都是一个 ",(0,t.jsx)(e.code,{children:"NavItem"})," 对象，它具有以下类型："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export type NavItem = NavItemWithLink | NavItemWithChildren;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["也就是说，每个导航栏元素( ",(0,t.jsx)(e.code,{children:"NavItem"})," )可以是一个链接( ",(0,t.jsx)(e.code,{children:"NavItemWithLink"})," )，也可以是一个包含子元素的导航栏组( ",(0,t.jsx)(e.code,{children:"NavItemWithChildren"})," )。"]}),"\n",(0,t.jsxs)(e.h3,{id:"navitemwithlink",children:["NavItemWithLink",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#navitemwithlink",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export interface NavItemWithLink {\n  text: string;\n  link: string;\n  activeMatch?: string;\n  position?: 'left' | 'right';\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"其中各项属性的含义如下:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"text"})," - 导航栏文本"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"link"})," - 导航栏链接"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"activeMatch"})," - 导航栏链接的激活规则"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"position"})," - 导航栏菜单项定位"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"属性详情："}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"activeMatch"})," 用于匹配当前路由，当路由匹配 ",(0,t.jsx)(e.code,{children:"activeMatch"})," 规则时，nav 项会高亮显示。"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["默认情况下，",(0,t.jsx)(e.code,{children:"activeMatch"})," 是 NavItem 的 ",(0,t.jsx)(e.code,{children:"link"})," 属性。"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"position"})," 用于配置顶部菜单项的独立定位，可选项为："]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"'left'"}),"：置于菜单项到顶部的左侧菜单栏；"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"'right'"}),"：置于菜单项到顶部的右侧菜单栏。"]}),"\n"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["如果",(0,t.jsx)(e.code,{children:"position"}),"未配置的情况下会默认放到右侧菜单栏，效果等同于配置",(0,t.jsx)(e.code,{children:"'right'"}),"。"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"navitemwithchildren",children:["NavItemWithChildren",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#navitemwithchildren",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export interface NavItemWithChildren {\n  text: string;\n  items: (NavItemWithLink | NavItemWithChildren)[];\n  position?: 'left' | 'right';\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"其中各项属性的含义如下:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"text"})," - 导航栏文本"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"items"})," - 子导航栏元素"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"position"}),"- 带有子元素的导航栏菜单项定位"]}),"\n"]}),"\n",(0,t.jsxs)(e.h3,{id:"示例",children:["示例",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n          position: 'left',\n        },\n        {\n          text: '更多链接',\n          items: [\n            {\n              text: 'Github',\n              link: 'http://github.com/',\n            },\n            {\n              text: 'Twitter',\n              link: 'http://twitter.com/',\n            },\n            // 也可以是一个导航栏组\n            {\n              text: 'Group',\n              items: [\n                {\n                  text: 'Personal',\n                  link: 'http://xxx.com/',\n                },\n                {\n                  text: 'Company',\n                  link: 'http://xxx.com/',\n                },\n              ],\n            },\n          ],\n          position: 'right',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"白天/夜间模式",children:["白天/夜间模式",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#白天/夜间模式",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["默认情况下导航栏会带上 ",(0,t.jsx)(e.code,{children:"白天/夜间"})," 模式的切换按钮，你可以通过如下的配置禁用："]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      darkMode: false,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"相关链接",children:["相关链接",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#相关链接",children:"#"})]}),"\n",(0,t.jsx)(e.p,{children:"网站的社交链接。比如："}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: 'github',\n          link: 'github.com/web-infra-dev/modern.js',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["更多配置请参考 ",(0,t.jsx)(e.a,{href:"/api/config-theme#sociallinks",children:"链接"}),"。"]})]})}var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(o,n)})):o(n)}}}]);