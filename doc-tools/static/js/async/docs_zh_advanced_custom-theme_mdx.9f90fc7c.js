(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_advanced_custom-theme_mdx"],{73017:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},toc:function(){return r},title:function(){return o},default:function(){return i}});var a=s("9880"),d=s("23169"),t=void 0,r=[{id:"基于默认主题的扩展",text:"基于默认主题的扩展",depth:2},{id:"1-基本结构",text:"1. 基本结构",depth:3},{id:"2-使用插槽",text:"2. 使用插槽",depth:3},{id:"3-自定义组件",text:"3. 自定义组件",depth:3},{id:"重新开发自定义主题",text:"重新开发自定义主题",depth:2},{id:"1-基本结构-1",text:"1. 基本结构",depth:3},{id:"2-运行时-api",text:"2. 运行时 API",depth:3},{id:"usepagedata",text:"usePageData",depth:4},{id:"uselang",text:"useLang",depth:4},{id:"content",text:"Content",depth:4},{id:"路由-hook",text:"路由 Hook",depth:4}],o="自定义主题";function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",code:"code",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"自定义主题",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义主题",children:"#"}),"自定义主题"]}),"\n",(0,a.jsx)(n.p,{children:"本文所要介绍的是如何开发一套自定义主题。"}),"\n",(0,a.jsxs)(n.h2,{id:"基于默认主题的扩展",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基于默认主题的扩展",children:"#"}),"基于默认主题的扩展"]}),"\n",(0,a.jsx)(n.p,{children:"大部分情况下，你并不想从零开始开发一个主题，而是想基于默认主题进行扩展，这时候可以参考下面的方式进行主题开发。"}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["\n如果你想从头开发一套自定义主题，可以前往",(0,a.jsx)(n.a,{href:"/doc-tools/zh/advanced/custom-theme.html#%E9%87%8D%E6%96%B0%E5%BC%80%E5%8F%91%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98",children:"【重新开发自定义主题】"}),"。"]})})]}),"\n",(0,a.jsxs)(n.h3,{id:"1-基本结构",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-基本结构",children:"#"}),"1. 基本结构"]}),"\n",(0,a.jsxs)(n.p,{children:["默认情况下，你需要在项目根目录下创建一个 ",(0,a.jsx)(n.code,{children:"theme"})," 目录，然后在 ",(0,a.jsx)(n.code,{children:"theme"})," 目录下创建一个 ",(0,a.jsx)(n.code,{children:"index.ts"})," 或者 ",(0,a.jsx)(n.code,{children:"index.tsx"})," 文件，该文件用于导出主题配置。"]}),"\n",(0,a.jsxs)(n.div,{className:"language-bash",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"├── theme\n│   └── index.tsx\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["你可以使用如下的方式来书写 ",(0,a.jsx)(n.code,{children:"theme/index.tsx"})," 文件:"]}),"\n",(0,a.jsxs)(n.div,{className:"language-tsx",children:[(0,a.jsx)(n.div,{className:"modern-code-title",children:"theme/index.tsx"}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import Theme from '@modern-js/doc-tools/theme';\n\nconst Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;\n\nexport default {\n  ...Theme,\n  Layout,\n};\n\nexport * from '@modern-js/doc-tools/theme';\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["一方面你需要通过 ",(0,a.jsx)(n.code,{children:"export default"})," 导出一个主题配置对象，另一方面你需要通过 ",(0,a.jsx)(n.code,{children:"export * from '@modern-js/doc-tools/theme'"})," 导出所有具名导出的内容，这样才能保证你的主题配置能够正常工作。"]}),"\n",(0,a.jsxs)(n.h3,{id:"2-使用插槽",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-使用插槽",children:"#"}),"2. 使用插槽"]}),"\n",(0,a.jsx)(n.p,{children:"值得注意的是，Layout 组件设计了一系列的 props 支持插槽元素，你可以通过这些 props 来扩展默认主题的布局，比如将上面的 Layout 组件改成如下的形式:"}),"\n",(0,a.jsxs)(n.div,{className:"language-tsx",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Layout as DefaultLayout } from '@modern-js/doc-tools/theme';\n\n// 以下展示所有的 Props\nconst Layout = () => (\n  <DefaultLayout\n    /* Home 页 Hero 部分之前 */\n    beforeHero={<div>beforeHero</div>}\n    /* Home 页 Hero 部分之后 */\n    afterHero={<div>afterHero</div>}\n    /* Home 页 Features 部分之前 */\n    beforeFeatures={<div>beforeFeatures</div>}\n    /* Home 页 Features 部分之后 */\n    afterFeatures={<div>afterFeatures</div>}\n    /* 正文页 Footer 部分之前 */\n    beforeDocFooter={<div>beforeDocFooter</div>}\n    /* 正文页最前面 */\n    beforeDoc={<div>beforeDoc</div>}\n    /* 正文页最后面 */\n    afterDoc={<div>afterDoc</div>}\n    /* 导航栏之前 */\n    beforeNav={<div>beforeNav</div>}\n    /* 左上角导航栏标题之前 */\n    beforeNavTitle={<span>\uD83D\uDE04</span>}\n    /* 左上角导航栏标题之后 */\n    afterNavTitle={<div>afterNavTitle</div>}\n    /* 右侧大纲栏上面 */\n    beforeOutline={<div>beforeOutline</div>}\n    /* 右侧大纲栏下面 */\n    afterOutline={<div>afterOutline</div>}\n    /* 整个页面最顶部 */\n    top={<div>top</div>}\n    /* 整个页面最底部 */\n    bottom={<div>bottom</div>}\n  />\n);\n\nexport default {\n  ...Theme,\n  Layout,\n};\n\nexport * from '@modern-js/doc-tools/theme';\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"3-自定义组件",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-自定义组件",children:"#"}),"3. 自定义组件"]}),"\n",(0,a.jsx)(n.p,{children:"要扩展默认主题的组件，除了插槽，你还可以自定义 Home 页面及 404 页面组件，比如:"}),"\n",(0,a.jsxs)(n.div,{className:"language-tsx",children:[(0,a.jsx)(n.div,{className:"modern-code-title",children:"theme/index.tsx"}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import Theme from '@modern-js/doc-tools/theme';\n\nconst Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;\n\n// 定制 Home 页面\nconst HomeLayout = () => <div>Home</div>;\n// 定制 404 页面\nconst NotFoundLayout = () => <div>404</div>;\n\nexport default {\n  ...Theme,\n  Layout,\n  HomeLayout,\n  NotFoundLayout,\n};\n\nexport * from '@modern-js/doc-tools/theme';\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["当然，在开发过程可能需要使用页面的数据，你可以通过 ",(0,a.jsx)(n.a,{href:"/doc-tools/zh/api/api-runtime.html#usepagedata",children:(0,a.jsx)(n.code,{children:"usePageData"})})," 这个 Hook 来获取。"]}),"\n",(0,a.jsxs)(n.h2,{id:"重新开发自定义主题",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#重新开发自定义主题",children:"#"}),"重新开发自定义主题"]}),"\n",(0,a.jsx)(n.p,{children:"如果你要从头开始开发一个自定义主题，你需要了解一下主题的组成。"}),"\n",(0,a.jsxs)(n.h3,{id:"1-基本结构-1",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-基本结构-1",children:"#"}),"1. 基本结构"]}),"\n",(0,a.jsxs)(n.p,{children:["默认情况下，你需要在项目根目录下创建一个 ",(0,a.jsx)(n.code,{children:"theme"})," 目录，然后在 ",(0,a.jsx)(n.code,{children:"theme"})," 目录下创建一个 ",(0,a.jsx)(n.code,{children:"index.ts"})," 或者 ",(0,a.jsx)(n.code,{children:"index.tsx"})," 文件，该文件用于导出主题配置。"]}),"\n",(0,a.jsxs)(n.div,{className:"language-bash",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"├── theme\n│   └── index.tsx\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["在",(0,a.jsx)(n.code,{children:"theme/index.tsx"}),"文件中，你需要导出一个 Layout 组件，这个组件就是你的主题的入口组件:"]}),"\n",(0,a.jsxs)(n.div,{className:"language-ts",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"// theme/index.tsx\nfunction Layout() {\n  return <div>Custom Theme Layout</div>;\n}\n\n// setup 函数，会在页面初始化时调用，一般用来做全局事件的监听，可为空函数\nconst setup = () => {};\n\n// 导出 Layout 组件和 setup 函数\n// 两者必须导出\nexport { Layout, setup };\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"这个 Layout 组件会被用来渲染整个文档站点的布局，你可以在这个组件中引入你的自定义组件，比如:"}),"\n",(0,a.jsxs)(n.div,{className:"language-ts",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"// theme/index.tsx\nimport { Navbar } from './Navbar';\n\nfunction Layout() {\n  return (\n    <div>\n      <Navbar />\n      <div>Custom Theme Layout</div>\n    </div>\n  );\n}\n\nconst setup = () => {};\n\nexport { Layoutm, setup };\n\n// theme/Navbar.tsx\nexport function Navbar() {\n  return <div>Custom Navbar</div>;\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"那么问题来了，主题组件是如何获取页面数据和正文 MDX 组件内容的呢？接下来我们来看看相关的 API。"}),"\n",(0,a.jsxs)(n.h3,{id:"2-运行时-api",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-运行时-api",children:"#"}),"2. 运行时 API"]}),"\n",(0,a.jsxs)(n.h4,{id:"usepagedata",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usepagedata",children:"#"}),"usePageData"]}),"\n",(0,a.jsx)(n.p,{children:"获取站点所有数据的信息，比如:"}),"\n",(0,a.jsxs)(n.div,{className:"language-tsx",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { usePageData } from '@modern-js/doc-tools/runtime';\n\nimport { usePageData } from '@modern-js/doc-tools/runtime';\n\nfunction MyComponent() {\n  const pageData = usePageData();\n  return <div>{pageData.title}</div>;\n}\n"})})})]}),"\n",(0,a.jsxs)(n.h4,{id:"uselang",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselang",children:"#"}),"useLang"]}),"\n",(0,a.jsx)(n.p,{children:"获取当前语言信息，比如:"}),"\n",(0,a.jsxs)(n.div,{className:"language-tsx",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useLang } from '@modern-js/doc-tools/runtime';\n\nfunction MyComponent() {\n  const lang = useLang();\n  return <div>{lang}</div>;\n}\n"})})})]}),"\n",(0,a.jsxs)(n.h4,{id:"content",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#content",children:"#"}),"Content"]}),"\n",(0,a.jsx)(n.p,{children:"正文 MDX 组件内容，如:"}),"\n",(0,a.jsxs)(n.div,{className:"language-tsx",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Content } from '@modern-js/doc-tools/runtime';\n\nfunction Layout() {\n  return (\n    <div>\n      <Content />\n    </div>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.h4,{id:"路由-hook",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路由-hook",children:"#"}),"路由 Hook"]}),"\n",(0,a.jsxs)(n.p,{children:["框架内部用 ",(0,a.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router-dom"})," 来实现路由，所以你可以直接使用 ",(0,a.jsx)(n.code,{children:"react-router-dom"})," 的 Hook，比如:"]}),"\n",(0,a.jsxs)(n.div,{className:"language-ts",children:[(0,a.jsx)(n.div,{className:""}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { useLocation } from '@modern-js/doc-tools/runtime';\n\nfunction Layout() {\n  const location = useLocation();\n  return <div>Current location: {location.pathname}</div>;\n}\n"})})})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);