(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_web-server_mdx"],{70238:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return o}});var s=r("12151"),d=r("23169"),i={title:"自定义 Web Server",sidebar_position:3},c="自定义 Web Server",a=[{text:"使用 API 扩展 Web Server",depth:2,id:"使用-api-扩展-web-server"},{text:"Hook",depth:3,id:"hook"},{text:"Middleware",depth:3,id:"middleware"},{text:"通过 BFF 托管页面请求",depth:2,id:"通过-bff-托管页面请求"},{text:"完全自定义的 Web Server",depth:2,id:"完全自定义的-web-server"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",code:"code",button:"button",pre:"pre",h3:"h3",ol:"ol",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"自定义-web-server",children:["自定义 Web Server",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-web-server",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js 作为以客户端为中心的开发框架，对服务端的定制能力较弱。而在有些开发场景下，需要定制特殊的服务端逻辑，例如用户鉴权、请求预处理、添加页面渲染骨架等。"}),"\n",(0,s.jsxs)(n.p,{children:["一些开发者可能会有疑惑，Modern.js 已经提供了 ",(0,s.jsx)(n.a,{href:"/guides/advanced-features/bff/function",children:"BFF 能力"}),"，为什么还需要",(0,s.jsx)(n.strong,{children:"自定义 Web Server"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"因为在默认情况下，页面路由并不会经过 BFF，它没有办法为页面访问提供服务端的定制逻辑。之所以这样设计，是因为我们不希望控制页面的服务与 BFF 服务绑定在一起，避免 BFF 的框架限制页面的部署方式。例如将页面与 BFF 分开托管、将页面服务部署到非 Node 的环境上，或是针对部署平台做定制等。"}),"\n",(0,s.jsx)(n.p,{children:"出于上述原因，Modern.js 提供了三种方式，让项目可以在根据需求，渐进式的定制服务端能力。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive warning",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"三种扩展方式无法同时工作，开发者需要根据场景选择合适的方式。"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"使用-api-扩展-web-server",children:["使用 API 扩展 Web Server",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-api-扩展-web-server",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"第一种方式是通过 Modern.js 提供的服务端运行时 API，在特定的生命周期对服务端进行定制。提供这种方式的目的是在部分情况下，开发者并不需要控制完整的 Web Server，只需要添加服务端逻辑即可。"}),"\n",(0,s.jsxs)(n.p,{children:["这种方式无法控制完整的 Web Server，并且扩展逻辑",(0,s.jsx)(n.strong,{children:"只在请求页面时生效"}),"。因此，它适用于服务端逻辑相对简单，不希望额外创建 BFF 或者 BFF 和页面无需公用服务端逻辑场景。"]}),"\n",(0,s.jsxs)(n.p,{children:["可以在项目根目录执行 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 命令，开启「自定义 Web Serve」功能："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 创建工程元素\n? 创建工程元素 新建「自定义 Web Server」源码目录\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["执行命令后，在 ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," 中注册 ",(0,s.jsx)(n.code,{children:"@modern-js/plugin-server"})," 插件:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import serverPlugin from '@modern-js/plugin-server';\n\nexport default defineConfig({\n  plugins: [..., serverPlugin()],\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["开启功能后，项目目录下会自动创建 ",(0,s.jsx)(n.code,{children:"server/index.ts"})," 文件，可以在这个文件中编写自定义逻辑。Modern.js 提供了 ",(0,s.jsx)(n.strong,{children:"Hook"})," 与 ",(0,s.jsx)(n.strong,{children:"Middleware"})," 两类 API 来扩展 Web Server。"]}),"\n",(0,s.jsxs)(n.h3,{id:"hook",children:["Hook",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js 提供的 Hook 用于控制 Web Server 中的内置逻辑，所有的页面请求都会经过 Hook。"}),"\n",(0,s.jsxs)(n.p,{children:["目前提供了两种 Hook，分别是 ",(0,s.jsx)(n.code,{children:"AfterMatch"})," 和 ",(0,s.jsx)(n.code,{children:"AfterRender"}),"，可以用于修改渲染结果。可以在 ",(0,s.jsx)(n.code,{children:"server/index.ts"})," 中这样写："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type {\n  AfterMatchHook,\n  AfterRenderHook,\n} from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (ctx, next) => {\n  next();\n};\n\nexport const afterRender: AfterRenderHook = (ctx, next) => {\n  next();\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"项目在使用 Hook 时，应该有以下最佳实践："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"在 afterMatch 中做权限校验。"}),"\n",(0,s.jsx)(n.li,{children:"在 afterMatch 做 Rewrite 和 Redirect。"}),"\n",(0,s.jsx)(n.li,{children:"在 afterRender 中做 HTML 内容注入。"}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["详细 API 和更多用法可以查看 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/web-server/hook",children:"Hook"}),"。\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"middleware",children:["Middleware",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"对于某些项目，可能在服务端有更多的需求，Modern.js 提供了 Middleware 为 Web Server 添加前置中间件。它只能运行在 Node 环境下，因此如果项目被部署到其他环境中，如 Worker 环境，则不可以使用 Middleware。"}),"\n",(0,s.jsx)(n.p,{children:"Modern.js 默认提供了一套 API 供项目使用："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Middlewre } from '@modern-js/runtime/server';\n\nexport const middleware: Middlewre = (context, next) => {\n  const {\n    source: { req, res },\n  } = context;\n  console.log(req.url);\n  next();\n};\n"})})]})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["详细 API 和更多用法可以查看 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/web-server/middleware",children:"Middleware"}),"。\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"项目在使用 Middleware 时，应该有以下最佳实践："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"在 Middleware 中可以直接操作原生的请求、响应对象，做数据打点、注入 SSR 渲染可能用到的 Node 服务（数据库、Redis 等）。"}),"\n",(0,s.jsx)(n.li,{children:"在 Middleware 里可以做类似功能打标、爬虫优化等功能。"}),"\n",(0,s.jsx)(n.li,{children:"在 Middleware 里可以无视后续默认渲染，自定义渲染流程。"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"总的来说，CSR 项目中，使用 Hook 基本能满足简单场景的所有需求。SSR 项目中，可以使用 Middleware 做更复杂的 Node 扩展。"})}),"\n",(0,s.jsxs)(n.h2,{id:"通过-bff-托管页面请求",children:["通过 BFF 托管页面请求",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-bff-托管页面请求",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"第二种方式，是利用 BFF 来托管页面渲染，这种方式下，所有的请求都会先打到 BFF 的服务。"}),"\n",(0,s.jsx)(n.p,{children:"因为这种方式可以通过 BFF 统一控制所有请求的服务端逻辑。因此，它适用于服务端逻辑复杂，BFF 和页面需要公用服务端逻辑的场景。但它整体还是依托于 Modern.js 的 Web Server 运行，无法将逻辑运行在已有的服务上。"}),"\n",(0,s.jsxs)(n.p,{children:["使用这种方式，我们需要先通过 ",(0,s.jsx)(n.code,{children:"pnpm new"})," 开启「BFF」功能。然后在配置文件中添加 ",(0,s.jsx)(n.a,{href:"/configure/app/bff/enable-handle-web",children:(0,s.jsx)(n.code,{children:"bff.enableHandleWeb"})})," 配置："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  bff: {\n    enableHandleWeb: true,\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["当该值设置为 ",(0,s.jsx)(n.code,{children:"true"})," 时，页面请求流量也会经过 BFF，并且 Modern.js 内置的页面渲染的逻辑默认会作为 BFF 服务的最后一个中间件运行。"]}),"\n",(0,s.jsxs)(n.h2,{id:"完全自定义的-web-server",children:["完全自定义的 Web Server",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#完全自定义的-web-server",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"敬请期待"})})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);