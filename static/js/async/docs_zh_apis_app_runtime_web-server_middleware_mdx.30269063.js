(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_web-server_middleware_mdx"],{4864:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return a},default:function(){return l}});var s=r("9880"),d=r("23169"),c={title:"Middleware"},i="Middleware",a=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"示例",depth:2,id:"示例"},{text:"服务端耗时打点",depth:3,id:"服务端耗时打点"},{text:"注入服务端工具 & 数据",depth:3,id:"注入服务端工具-&-数据"},{text:"框架拓展",depth:3,id:"框架拓展"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"middleware",children:["Middleware",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["用于拓展 Modern.js 内置的 Web Server，与 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/web-server/hook",children:"Hook"})," 不同的是，Middleware 可以直接操作 Node 原生的请求、响应对象，并且可以使用框架拓展。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["更多内容可以查看",(0,s.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"自定义 Web Server"}),"。\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = async (context, next) => {};\nexport const middleware: Middleware[] = [\n  async (context, next) => {},\n  async (context, next) => {},\n];\n"})})})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"自定义 Web Server"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["使用该 API 前，请先执行 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," 新建「自定义 Web Server」源码目录。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run new\n? 请选择你想要的操作 创建工程元素\n? 新建「自定义 Web Server」源码目录\n"})})})}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Middleware = (\n  context: MiddlewareContext,\n  next: NextFunction,\n) => Promise<void> | void;\n\ntype MiddlewareContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n    locals: Record<string, any>;\n  };\n  request: {\n    url: string;\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n  source: {\n    req: IncomingMessage;\n    res: ServerResponse;\n  };\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"参数",children:["参数",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"context"}),"：提供当前 Hook 上下文。","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"response"}),"：提供一系列处理响应的操作"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request"}),"：提供一系列获取请求信息的操作"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"}),"：提供 Node.js 原生的 ",(0,s.jsx)(n.code,{children:"req"})," 与 ",(0,s.jsx)(n.code,{children:"res"})," 对象。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"next"}),"：执行当前 Hook 的下一个监听函数（不影响整体服务端流程）。"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive warning",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"next"})," 函数的执行不影响后续内置流程，只控制下一个中间件是否执行。只有当响应被写入时，后续渲染流程才会中断。\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"服务端耗时打点",children:["服务端耗时打点",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#服务端耗时打点",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  const start = Date.now();\n  ctx.res.once('finish', () => {\n    console.log(Date.now() - start);\n  });\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"注入服务端工具-&-数据",children:["注入服务端工具 & 数据",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注入服务端工具-&-数据",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,s.jsx)(n.code,{children:"res.locals"})," 属性用来存放当前请求的局部变量。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  ctx.res.locals.id = 'Modern.js';\n  ctx.res.locals.rpc = createRpcInstance();\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"框架拓展",children:["框架拓展",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#框架拓展",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Middleware 还可以和 BFF 一样，使用运行时框架拓展。Modern.js 约定，当使用框架运行时拓展时，类型信息从 ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/{namespace}"})," 下导出，Middleware 可以使用框架语法，例如框架中间件写法，以下是伪代码："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (ctx, next) => {\n  console.log(ctx.url);\n  next();\n};\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，在安装框架拓展插件后，Web Server 的框架拓展能力是关闭的。如果希望使用框架拓展，可以通过 ",(0,s.jsx)(n.a,{href:"/configure/app/server/enable-framework-ext",children:(0,s.jsx)(n.code,{children:"server.enableFrameworkExt"})})," 开启。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"框架拓展导出的类型名不一定为 Middleware，命名由框架拓展插件。"})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);