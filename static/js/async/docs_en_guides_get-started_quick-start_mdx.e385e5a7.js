(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_get-started_quick-start_mdx"],{94582:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return o},default:function(){return h}});var t=r("9880"),s=r("23169"),i=r.ir(r("76980")),a=r.ir(r("9029")),d={title:"Quick Start",sidebar_position:2},c="Quick Start",o=[{text:"Environment",depth:2,id:"environment"},{text:"Installation",depth:2,id:"installation"},{text:"Initialize",depth:2,id:"initialize"},{text:"Development",depth:2,id:"development"},{text:"Configuration",depth:2,id:"configuration"},{text:"Build",depth:2,id:"build"},{text:"Verify",depth:2,id:"verify"},{text:"Deploy",depth:2,id:"deploy"}];function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",pre:"pre",img:"img",blockquote:"blockquote"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"environment",children:["Environment",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment",children:"#"})]}),"\n","\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"installation",children:["Installation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js provides the ",(0,t.jsx)(n.code,{children:"@modern-js/create"})," tool for creating new projects. You can use ",(0,t.jsx)(n.code,{children:"npx"})," to run it."]}),"\n",(0,t.jsx)(n.p,{children:"You can create the project in an existing empty directory:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create\n"})})})}),"\n",(0,t.jsx)(n.p,{children:"You can also directly create the project as a new folder:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create myapp\n"})})})}),"\n",(0,t.jsxs)(n.h2,{id:"initialize",children:["Initialize",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialize",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"development",children:["Development",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Execute ",(0,t.jsx)(n.code,{children:"pnpm run dev"})," in the project to start the project:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm run dev\n\n> modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n\n Client ✔ done in 76.10ms\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"http://localhost:8000/"})," in your browser and you will see the following:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/dev.png",alt:"dev"})}),"\n",(0,t.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modern.config.ts"})," files exist in Modern.js projects created by the generator."]}),"\n",(0,t.jsx)(n.p,{children:"Features can be enabled through the configuration file, or the default behavior of the coverage Modern.js. For example, add the following configuration to enable SSR:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n});\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["Re-execute ",(0,t.jsx)(n.code,{children:"pnpm run dev"}),", in the browser Network menu, you can find that the project has completed page rendering at the server level."]}),"\n",(0,t.jsxs)(n.h2,{id:"build",children:["Build",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Execute ",(0,t.jsx)(n.code,{children:"pnpm run build"})," in the project to build the project production environment product:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm run build\n\n> modern build\n\ninfo    Create a production build...\n\ninfo    File sizes after production build:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-corejs.ffeb7fb8.js     214.96 kB    67.23 kB\n  dist/static/js/lib-react.09721b5c.js      152.61 kB    49.02 kB\n  dist/static/js/218.102e2f39.js            85.45 kB     28.5 kB\n  dist/static/js/lib-babel.a7bba875.js      11.93 kB     3.95 kB\n  dist/html/main/index.html                 5.84 kB      2.57 kB\n  dist/static/js/main.3568a38e.js           3.57 kB      1.44 kB\n  dist/static/css/async/304.c3c481a5.css    2.62 kB      874 B\n  dist/asset-manifest.json                  1.48 kB      349 B\n  dist/static/js/async/304.c45706bc.js      1.4 kB       575 B\n  dist/static/js/async/509.fcb06e14.js      283 B        230 B\n\n Client ✔ done in 3.57s\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["The bundle is generated to ",(0,t.jsx)(n.code,{children:"dist/"})," by default, and the directory structure is as follows:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{children:".\n├── asset-manifest.json\n├── html\n│   └── main\n├── loader-routes\n│   └── main\n├── modern.config.json\n├── route.json\n└── static\n    ├── css\n    └── js\n"})})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you want to customize the output directory, please refer to ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/output-files.html",target:"_blank",rel:"noopener noreferrer",children:"Output Files"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"verify",children:["Verify",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verify",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Execute ",(0,t.jsx)(n.code,{children:"pnpm run serve"})," in the project to verify locally that the bundle is running correctly:"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm run serve\n\n> modern serve\n\nStarting the modern server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.a,{href:"http://localhost:8000/",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:8000/"})," in the browser and the content should be the same as when ",(0,t.jsx)(n.code,{children:"pnpm run dev"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"deploy",children:["Deploy",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploy",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Once the local verification is complete, the outputs under ",(0,t.jsx)(n.code,{children:"dist"})," folder can be organized into the structure required by the server for deployment."]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);