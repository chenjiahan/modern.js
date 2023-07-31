(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_code-split_mdx"],{68071:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var d,s=r("15169"),a=r("43932"),i=r("9880"),c=r("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ul:"ul",li:"li",code:"code",h2:"h2",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"代码分割",children:["代码分割",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码分割",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"代码分割是优化前端资源加载的一种常用手段，本文将介绍 Modern.js 支持的三种代码分割方式："}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["使用 Modern.js ",(0,i.jsx)(n.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"约定式路由"}),"时，默认会根据路由组件做代码分割，无需自行进行代码分割。\n"]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"import"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"React.lazy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"loadable"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"import",children:["import",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["使用动态 ",(0,i.jsx)(n.code,{children:"import()"})," 语法，传入的 JS 模块将会被被打包到单独的 JS 文件中。例如："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"reactlazy",children:["React.lazy",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactlazy",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"React 官方提供的组件代码分割的方式。"}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive caution",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"React.lazy"})," 通常配合 ",(0,i.jsx)(n.code,{children:"<Suspense>"})," 使用，因此仅在 CSR 或 React 18 Streaming SSR 中可用。"]}),"\n",(0,i.jsxs)(n.p,{children:["对于使用传统 SSR（字符串渲染）的项目，不支持 ",(0,i.jsx)(n.code,{children:"React.lazy"}),"，请使用 Loadable API。\n"]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"React.lazy"})," 更多用法请见 ",(0,i.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react/lazy",target:"_blank",rel:"noopener noreferrer",children:"React 官网文档"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"loadable",children:["Loadable",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在 Modern.js 中，可以从 ",(0,i.jsx)(n.code,{children:"@modern-js/runtime/loadable"})," 中导出使用 Loadable API，示例如下："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 开箱即用的支持在 SSR 中使用 ",(0,i.jsx)(n.code,{children:"loadable"}),"，无需再添加 Babel 插件，或是在 SSR 时向 HTML 中注入脚本。"]}),"\n",(0,i.jsxs)(n.p,{children:["但需要注意的是，任何 Loadable API 在 SSR 中都不支持配合 ",(0,i.jsx)(n.code,{children:"<Suspense>"})," 使用。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["如果希望在 React 17 及以下的 CSR 项目中使用 ",(0,i.jsx)(n.code,{children:"<Suspense>"}),"，可以用 ",(0,i.jsx)(n.a,{href:"https://loadable-components.com/docs/suspense/",target:"_blank",rel:"noopener noreferrer",children:"loadable.lazy"})," 代替 ",(0,i.jsx)(n.code,{children:"React.lazy"}),"。\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["更多用法请见 ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/utility/loadable",children:"Loadable API"}),"。"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fcode-split.mdx"]={toc:[{text:"import",id:"import",depth:2},{text:"React.lazy",id:"reactlazy",depth:2},{text:"Loadable",id:"loadable",depth:2}],title:"代码分割",frontmatter:{title:"代码分割",sidebar_position:6}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,a._)((0,s._)({},e),{children:(0,i.jsx)(l,(0,s._)({},e))})):l(e)}}}]);