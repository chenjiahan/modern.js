(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_en_guide_advance_asset_mdx"],{23570:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var i,l=n("15169"),c=n("43932"),d=n("9880"),r=n("23169");function t(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"handle-static-resource-files",children:["Handle static resource files",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#handle-static-resource-files",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["The module project will handle static resources used in the code. If configuration is required, then the ",(0,d.jsx)(s.a,{href:"/en/api/config/build-config#asset",children:(0,d.jsx)(s.code,{children:"buildConfig.asset"})})," API can be used."]}),"\n",(0,d.jsxs)(s.h2,{id:"default-behavior",children:["Default behavior",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-behavior",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"By default, module projects are processed for the following static resources:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"'.svg'"}),"、",(0,d.jsx)(s.code,{children:"'.png'"}),"、",(0,d.jsx)(s.code,{children:"'.jpg'"}),"、",(0,d.jsx)(s.code,{children:"'.jpeg'"}),"、",(0,d.jsx)(s.code,{children:"'.gif'"}),"、",(0,d.jsx)(s.code,{children:"'.webp'"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"'.ttf'"}),"、",(0,d.jsx)(s.code,{children:"'.otf'"}),"、",(0,d.jsx)(s.code,{children:"'.woff'"}),"、",(0,d.jsx)(s.code,{children:"'.woff2'"}),"、",(0,d.jsx)(s.code,{children:"'.eot'"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"'.mp3'"}),"、",(0,d.jsx)(s.code,{children:"'.mp4'"}),"、",(0,d.jsx)(s.code,{children:"'.webm'"}),"、",(0,d.jsx)(s.code,{children:"'.ogg'"}),"、",(0,d.jsx)(s.code,{children:"'.wav'"}),"、",(0,d.jsx)(s.code,{children:"'.flac'"}),"、",(0,d.jsx)(s.code,{children:"'.aac'"}),"、",(0,d.jsx)(s.code,{children:"'.mov'"})]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"For the handling of static files, the module project currently supports the following functions."}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Set the static resource path to ",(0,d.jsx)(s.code,{children:". /assets"}),"."]}),"\n",(0,d.jsxs)(s.li,{children:["Files less than ",(0,d.jsx)(s.strong,{children:"10kb"})," will be inlined into the code."]}),"\n"]}),"\n",(0,d.jsxs)(s.h2,{id:"example",children:["Example",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"Let us look at the following example:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Project source code:"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",meta:'title="./src/asset.ts"',children:"import img from './bg.png';\n//...\n"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["If the size of ",(0,d.jsx)(s.code,{children:"bg.png"})," is less than 10 kb, then the output directory structure and file content are."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"./dist\n└── asset.js\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="./dist/asset.js"',children:"var bg_default = 'data:image/png;base64,';\nconsole.info(bg_default);\n"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["If the size of ",(0,d.jsx)(s.code,{children:"bg.png"})," is larger than 10 kb, then the output directory structure and file content are."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"./dist\n├── asset.js\n└── assets\n    └── bg.13e2aba2.png\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="./dist/asset.js"',children:"import img from './assets/bg.13e2aba2.png';\nconsole.info(img);\n"})}),"\n",(0,d.jsx)(s.p,{children:"When wanting to modify the default behavior, the following API can be used:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"asset.path"}),": modify the output path of the static resource file."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"asset.limit"}),": modify the threshold value for inline static resource files."]}),"\n"]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fasset.mdx"]={toc:[{text:"Default behavior",id:"default-behavior",depth:2},{text:"Example",id:"example",depth:2}],title:"Handle static resource files",frontmatter:{sidebar_position:6}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,(0,c._)((0,l._)({},e),{children:(0,d.jsx)(t,(0,l._)({},e))})):t(e)}}}]);