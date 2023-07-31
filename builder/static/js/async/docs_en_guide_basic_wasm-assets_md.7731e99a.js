(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_wasm-assets_md"],{847:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var n,d=a("15169"),t=a("43932"),i=a("9880"),r=a("23169");function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"import-wasm-assets",children:["Import Wasm Assets",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-wasm-assets",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Builder supports import WebAssembly assets in code."}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"What is WebAssembly"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"WebAssembly (Wasm) is a portable, high-performance binary format designed to execute CPU-intensive computing tasks in modern web browsers, bringing performance and reliability similar to native compiled code to the web platform."})})]}),"\n",(0,i.jsxs)(s.h2,{id:"import",children:["Import",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"You can import a WebAssembly module directly in a JavaScript file:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import { add } from './add.wasm';\n\nconsole.log(add); // [native code]\nconsole.log(add(1, 2)); // 3\n"})}),"\n",(0,i.jsx)(s.p,{children:"WebAssembly modules can also be imported via Dynamic Import:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import('./add.wasm').then(({ add }) => {\n  console.log('---- Async Wasm Module');\n  console.log(add); // [native code]\n  console.log(add(1, 2)); // 3\n});\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can also get the path of a WebAssembly module using the ",(0,i.jsx)(s.code,{children:"new URL"})," syntax:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"const wasmURL = new URL('./add.wasm', import.meta.url);\n\nconsole.log(wasmURL).pathname; // \"/static/wasm/[hash].module.wasm\"\n"})}),"\n",(0,i.jsxs)(s.h2,{id:"output-directory",children:["Output Directory",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-directory",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["When a ",(0,i.jsx)(s.code,{children:".wasm"})," asset is imported, it will be output by Builder to the ",(0,i.jsx)(s.code,{children:"dist/static/wasm"})," directory by default."]}),"\n",(0,i.jsxs)(s.p,{children:["You can change the output directory of ",(0,i.jsx)(s.code,{children:".wasm"})," files via ",(0,i.jsx)(s.a,{href:"/api/config-output#outputdistpath",children:"output.distPath"})," config."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      wasm: 'resource/wasm',\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h2,{id:"add-type-declaration",children:["Add Type Declaration",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"When you import a Wasm file in TypeScript code, you usually need to add the corresponding type declaration."}),"\n",(0,i.jsxs)(s.p,{children:["For example, the ",(0,i.jsx)(s.code,{children:"add.wasm"})," file exports an ",(0,i.jsx)(s.code,{children:"add()"})," method, then you can create an ",(0,i.jsx)(s.code,{children:"add.wasm.d.ts"})," file in the same directory and add the corresponding type declaration:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",meta:'title="add.wasm.d.ts"',children:"export const add = (num1: number, num2: number) => number;\n"})})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fwasm-assets.md"]={toc:[{text:"Import",id:"import",depth:2},{text:"Output Directory",id:"output-directory",depth:2},{text:"Add Type Declaration",id:"add-type-declaration",depth:2}],title:"Import Wasm Assets",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,i.jsx)(s,(0,t._)((0,d._)({},e),{children:(0,i.jsx)(o,(0,d._)({},e))})):o(e)}}}]);