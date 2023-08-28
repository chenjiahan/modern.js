(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_en_plugins_official-list_plugin-node-polyfill_md"],{56470:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return h}});var i,d=n("15169"),s=n("43932"),r=n("9880"),o=n("23169");function c(e){var l=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.h1,{id:"node-polyfill-plugin",children:["Node Polyfill Plugin",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfill-plugin",children:"#"})]}),"\n",(0,r.jsxs)(l.div,{className:"modern-directive tip",children:[(0,r.jsx)(l.div,{className:"modern-directive-title",children:"About Node Polyfill"}),(0,r.jsx)(l.div,{className:"modern-directive-content",children:(0,r.jsx)(l.p,{children:"Normally, we don't need to use Node libs on the browser side. However, it is possible to use some Node libs when the code will run on both the Node side and the browser side, and Node Polyfill provides browser versions of polyfills for these Node libs."})})]}),"\n",(0,r.jsx)(l.p,{children:"By using the Node Polyfill plugin, Node core libs polyfills are automatically injected into the browser-side, allowing you to use these modules on the browser side with confidence."}),"\n",(0,r.jsxs)(l.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(l.h3,{id:"install",children:["Install",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/plugin-module-node-polyfill -D\n\n# yarn\nyarn add @modern-js/plugin-module-node-polyfill -D\n\n# pnpm\npnpm add @modern-js/plugin-module-node-polyfill -D\n"})}),"\n",(0,r.jsxs)(l.h3,{id:"register",children:["Register",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,r.jsx)(l.p,{children:"In Module Tools, you can register plugins in the following way:"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginNodePolyfill } from '@modern-js/plugin-module-node-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginNodePolyfill(),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(l.h2,{id:"configurations",children:["Configurations",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#configurations",children:"#"})]}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.strong,{children:"Type"}),":"]}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"type NodePolyfillOptions = {\n  exclude?: string[];\n  overrides?: Record<NodePolyfillKey, string>;\n}\n"})}),"\n",(0,r.jsxs)(l.h3,{id:"exclude",children:["exclude",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#exclude",children:"#"})]}),"\n",(0,r.jsx)(l.p,{children:"Exclude the Node Polyfill to be injected."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginNodePolyfill } from '@modern-js/plugin-module-node-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginNodePolyfill({\n      exclude: ['console'],\n    }),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(l.h3,{id:"overrides",children:["overrides",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#overrides",children:"#"})]}),"\n",(0,r.jsx)(l.p,{children:"Override the built-in Node Polyfill."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginNodePolyfill } from '@modern-js/plugin-module-node-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginNodePolyfill({\n      overrides: {\n        fs: path.join(__dirname, './custom-fs.js'),\n      }\n    }),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(l.h2,{id:"node-polyfills",children:["Node Polyfills",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfills",children:"#"})]}),"\n",(0,r.jsxs)(l.h3,{id:"globals",children:["Globals",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#globals",children:"#"})]}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"Buffer"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"process"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"console"})}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"When the above global variables are used directly in code, the corresponding polyfill will be injected."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"const bufferData = Buffer.from('xxxx');\n"})}),"\n",(0,r.jsxs)(l.h3,{id:"modules",children:["Modules",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#modules",children:"#"})]}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"assert"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"buffer"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"console"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"constants"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"crypto"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"domain"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"events"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"http"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"https"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"os"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"path"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"punycode"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"process"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"querystring"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"stream"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"_stream_duplex"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"_stream_passthrough"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"_stream_readable"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"_stream_transform"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"_stream_writable"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"string_decoder"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"sys"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"timers"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"tty"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"url"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"util"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"vm"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"zlib"})}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"When the above module is referenced in code via import / require syntax, the corresponding polyfill will be injected."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"import { Buffer } from 'buffer';\n\nconst bufferData = Buffer.from('xxxx');\n"})}),"\n",(0,r.jsxs)(l.h3,{id:"fallbacks",children:["Fallbacks",(0,r.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#fallbacks",children:"#"})]}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"child_process"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"cluster"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"dgram"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"dns"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"fs"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"module"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"net"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"readline"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"repl"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.code,{children:"tls"})}),"\n"]}),"\n",(0,r.jsx)(l.p,{children:"Currently there is no polyfill for the above modules on the browser side, so when you import the above modules, it will automatically fallback to an empty object."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-ts",children:"import fs from 'fs';\n\nconsole.log(fs); // -> {}\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fplugins%2Fofficial-list%2Fplugin-node-polyfill.md"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Configurations",id:"configurations",depth:2},{text:"exclude",id:"exclude",depth:3},{text:"overrides",id:"overrides",depth:3},{text:"Node Polyfills",id:"node-polyfills",depth:2},{text:"Globals",id:"globals",depth:3},{text:"Modules",id:"modules",depth:3},{text:"Fallbacks",id:"fallbacks",depth:3}],title:"Node Polyfill Plugin",frontmatter:{}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return l?(0,r.jsx)(l,(0,s._)((0,d._)({},e),{children:(0,r.jsx)(c,(0,d._)({},e))})):c(e)}}}]);