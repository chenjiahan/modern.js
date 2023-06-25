(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_runtime_intro_mdx"],{73391:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r,t=i("15169"),s=i("43932"),o=i("9880"),d=i("23169"),c=i("78955");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",h4:"h4",pre:"pre",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"overview",children:["Overview",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"This section describes configuration of the Runtime plugin."}),"\n",(0,o.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"runtime",children:["runtime",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The runtime is configured as follows:"}),"\n",(0,o.jsxs)(n.h4,{id:"base",children:["Base",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Configure in ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true,\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"defineconfig",children:["DefineConfig",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Configure using ",(0,o.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:(0,o.jsx)(n.code,{children:"defineConfig"})})," API:"]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsx)(n.p,{children:"When there is a function in the runtime configuration, it can only be configured this way."}),"\n"]})]}),"\n","\n",(0,o.jsxs)(c.Tabs,{children:[(0,o.jsx)(c.Tab,{value:"layout",label:"Conventional Routing",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      supportHtml5History: false\n    }\n  }\n};\n"})})}),(0,o.jsx)(c.Tab,{value:"app",label:"Self-controlled Routing",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false,\n  },\n});\n\nexport default App;\n"})})})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsx)(n.p,{children:"Using runtime configuration, you can solve the problem that runtime plugin configuration needs to be at runtime to get specific content."}),"\n",(0,o.jsxs)(n.p,{children:["Runtime plugin runtime configuration and configuration directly in ",(0,o.jsx)(n.code,{children:"modern.config.ts"})," are merged by default, and runtime configuration takes precedence."]}),"\n"]})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive warning",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"defineConfig"})," API only accepts the specific configuration of Runtime plugins. Enabling the plugin is determined through ",(0,o.jsx)(n.code,{children:"modern.config.ts"}),' configuration."']}),"\n"]})]}),"\n",(0,o.jsxs)(n.h3,{id:"runtimebyentries",children:["runtimeByEntries",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimebyentries",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"introduction",children:["Introduction",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Add the runtime configuration according to the entry. The option attribute is consistent with the runtime. The specified value will be replaced and merged with the content of the runtime attribute."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n      state: true, // { state: true }\n    },\n    entry2: {\n      // { state: false, router: true }\n      router: true,\n    },\n  },\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/configure/app/runtime/intro.mdx"]={toc:[{text:"Configuration",id:"configuration",depth:2},{text:"runtime",id:"runtime",depth:3},{text:"Base",id:"base",depth:4},{text:"DefineConfig",id:"defineconfig",depth:4},{text:"runtimeByEntries",id:"runtimebyentries",depth:3},{text:"Introduction",id:"introduction",depth:4}],title:"Overview",frontmatter:{sidebar_label:"Overview",sidebar_position:1}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,s._(t._({},e),{children:(0,o.jsx)(a,t._({},e))})):a(e)}}}]);