(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_web-server_hook_mdx"],{20302:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return i},default:function(){return a}});var t=r("12151"),s=r("23169"),d={title:"Hook"},c="Hook",i=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Example",depth:2,id:"example"},{text:"Redirect",depth:3,id:"redirect"},{text:"Rewrite",depth:3,id:"rewrite"},{text:"HTML Inject",depth:3,id:"html-inject"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",button:"button",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"hook",children:["Hook",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Used to extend Modern.js built-in Web Server, all page requests are handled by these hooks."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For more detail, see ",(0,t.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"Extend Web Server"}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { AfterMatchHook, AfterRenderHook } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (context, next) => {};\nexport const afterRender: AfterRenderHook = (context, next) => {};\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Before using this API, please execute ",(0,t.jsx)(n.code,{children:"pnpm run new"}),' to create a new "Custom Web Server" source code directory.']}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:'pnpm run new\n? Action Create project element\n? New "Custom Web Server" source code directory\n'})})]})}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"type HookContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n};\n\nfunction Hook(context: HookContext, next: NextFunction): Promsie<void> | void;\n"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["different Hooks additionally provide different contexts. Currently Modern.js support ",(0,t.jsx)(n.code,{children:"AfterMatch"})," and ",(0,t.jsx)(n.code,{children:"AfterRender"}),"."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"type AfterMatchContext = HookContext & {\n  router: {\n    redirect: (url: string, status: number) => void;\n    rewrite: (entry: string) => void;\n  };\n};\n\ntype AfterRenderContext = {\n  template: {\n    get: () => string;\n    set: (html: string) => void;\n    prependHead: (fragment: string) => void;\n    appendHead: (fragment: string) => void;\n    prependBody: (fragment: string) => void;\n    appendBody: (fragment: string) => void;\n  };\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"context"}),": Hook context.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"response"}),": provides a series of methods to process the response."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"request"}),": provides a series of methods to get request info."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"router"}),": provides methods on routing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"template"}),": provides methods on content."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"next"}),": call next listener (not affect the server process, only current hook)."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"redirect",children:["Redirect",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Redirect to pages outside the site, for example to login page:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.redirect('https://website.com/login', 302);\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"rewrite",children:["Rewrite",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rewrite",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Rewrite to pages of the current site, for example, the same route returns pages that are adapted to different UA:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.rewrite('mobile');\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h3,{id:"html-inject",children:["HTML Inject",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-inject",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Inject some HTML content to the page, such as scripts, page skeletons, etc.:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import type { AfterRender } from '@modern-js/runtime/server';\n\nexport const afterRender: AfterRenderHook = (context, next) => {\n  ctx.template.prependBody('<div>Footer</div>');\n};\n"})})]})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);