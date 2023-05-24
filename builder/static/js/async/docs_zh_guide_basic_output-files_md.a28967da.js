(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_output-files_md"],{66834:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return h},toc:function(){return r},default:function(){return t}});var d=s("9880"),i=s("23169"),a={},h="构建产物目录",r=[{text:"默认产物目录",depth:2,id:"默认产物目录"},{text:"修改产物目录",depth:2,id:"修改产物目录"},{text:"静态资源",depth:2,id:"静态资源"},{text:"Node.js 产物目录",depth:2,id:"nodejs-产物目录"},{text:"扁平化产物目录",depth:2,id:"扁平化产物目录"},{text:"产物不写入磁盘",depth:2,id:"产物不写入磁盘"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"构建产物目录",children:["构建产物目录",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建产物目录",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"本章节主要介绍构建产物的目录结构，以及如何控制不同类型产物的输出目录。"}),"\n",(0,d.jsxs)(n.h2,{id:"默认产物目录",children:["默认产物目录",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认产物目录",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["下面是最基础的产物目录结构，默认情况下，构建产物会生成在当前项目的 ",(0,d.jsx)(n.code,{children:"dist"})," 目录下。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"dist\n├── static\n│   ├── css\n│   │   ├── [name].[hash].css\n│   │   └── [name].[hash].css.map\n│   │\n│   └── js\n│       ├── [name].[hash].js\n│       ├── [name].[hash].js.LICENSE.txt\n│       └── [name].[hash].js.map\n│\n└── html\n    └── [name]\n        └── index.html\n"})}),"\n",(0,d.jsx)(n.p,{children:"最常见的产物是 HTML 文件、JS 文件和 CSS 文件："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTML 文件：默认输出到 ",(0,d.jsx)(n.code,{children:"html"})," 目录。"]}),"\n",(0,d.jsxs)(n.li,{children:["JS 文件：默认输出到 ",(0,d.jsx)(n.code,{children:"static/js"})," 目录，"]}),"\n",(0,d.jsxs)(n.li,{children:["CSS 文件：默认输出到 ",(0,d.jsx)(n.code,{children:"static/css"})," 目录。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"此外，JS 文件和 CSS 文件有时候会生成一些相关产物："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["License 文件：包含开源许可证信息，默认输出到 JS 文件的同级目录，并添加 ",(0,d.jsx)(n.code,{children:".LICENSE.txt"})," 后缀。"]}),"\n",(0,d.jsxs)(n.li,{children:["Source Map 文件：包含保存源代码映射关系，默认输出到 JS 文件和 CSS 文件的同级目录，并添加 ",(0,d.jsx)(n.code,{children:".map"})," 后缀。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["在产物的文件名称中，",(0,d.jsx)(n.code,{children:"[name]"})," 表示这个文件对应的入口名称，比如 ",(0,d.jsx)(n.code,{children:"index"}),", ",(0,d.jsx)(n.code,{children:"main"}),"。",(0,d.jsx)(n.code,{children:"[hash]"})," 则是基于该文件的内容生成的哈希值。"]}),"\n",(0,d.jsxs)(n.h2,{id:"修改产物目录",children:["修改产物目录",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改产物目录",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder 提供了多个配置项来修改产物目录和产物名称，你可以："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputfilename",children:"output.filename"})," 来修改产物的文件名。"]}),"\n",(0,d.jsxs)(n.li,{children:["通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputdistpath",children:"output.distPath"})," 来修改产物的输出路径。"]}),"\n",(0,d.jsxs)(n.li,{children:["通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputlegalcomments",children:"output.legalComments"})," 来修改 License 文件的生成方式。"]}),"\n",(0,d.jsxs)(n.li,{children:["通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputdisablesourcemap",children:"output.disableSourceMap"})," 来移除 Source Map 文件。"]}),"\n",(0,d.jsxs)(n.li,{children:["通过 ",(0,d.jsx)(n.a,{href:"/api/config-html#htmldisablehtmlfolder",children:"html.disableHtmlFolder"})," 移除 HTML 产物对应的文件夹。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"静态资源",children:["静态资源",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态资源",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当你在代码中引用图片、SVG、字体、媒体等类型的静态资源时，它们也会被输出到 ",(0,d.jsx)(n.code,{children:"dist/static"})," 目录下，并根据静态资源类型来自动分配到对应的子目录："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"dist\n└── static\n    ├── image\n    │   └── foo.[hash].png\n    │\n    ├── svg\n    │   └── bar.[hash].svg\n    │\n    ├── font\n    │   └── baz.[hash].woff2\n    │\n    └── media\n        └── qux.[hash].mp4\n"})}),"\n",(0,d.jsxs)(n.p,{children:["你可以通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputdistpath",children:"output.distPath"})," 配置项将这些静态资源统一输入到单个目录下，比如输出到 ",(0,d.jsx)(n.code,{children:"assets"})," 目录："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      image: 'assets',\n      svg: 'assets',\n      font: 'assets',\n      media: 'assets',\n    },\n  },\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"上方的配置会生成以下目录结构："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"dist\n└── assets\n    ├── foo.[hash].png\n    ├── bar.[hash].svg\n    ├── baz.[hash].woff2\n    └── qux.[hash].mp4\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"nodejs-产物目录",children:["Node.js 产物目录",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-产物目录",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当 Builder 的 ",(0,d.jsx)(n.a,{href:"/guide/basic/build-target",children:"构建产物类型"})," 中包含 ",(0,d.jsx)(n.code,{children:"'node'"}),"，或者你在上层框架中开启了 SSR 等服务端功能时，Builder 会在构建后生成一份 Node.js 产物，并输出到 ",(0,d.jsx)(n.code,{children:"bundles"})," 目录下："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"dist\n├── bundles\n│   └── [name].js\n├── static\n└── html\n"})}),"\n",(0,d.jsx)(n.p,{children:"Node.js 产物通常只包含 JS 文件，不包含 HTML、CSS 等文件。此外，Node 产物的 JS 文件名称也不会自动生成哈希值。"}),"\n",(0,d.jsxs)(n.p,{children:["你可以通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputdistpath",children:"output.distPath.server"})," 配置项来修改 Node 产物的输出路径。"]}),"\n",(0,d.jsxs)(n.p,{children:["比如，将 Node.js 产物输出到 ",(0,d.jsx)(n.code,{children:"server"})," 目录："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      server: 'server',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"扁平化产物目录",children:["扁平化产物目录",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扁平化产物目录",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"有时候你不想产物目录有太多层级，可以将目录设置为空字符串，使生成的产物目录扁平化。"}),"\n",(0,d.jsx)(n.p,{children:"参考下方的例子："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      js: '',\n      css: '',\n      html: '',\n    },\n    disableHtmlFolder: true,\n  },\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"上方的配置会生成以下目录结构："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"dist\n├── [name].[hash].css\n├── [name].[hash].css.map\n├── [name].[hash].js\n├── [name].[hash].js.map\n└── [name].html\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"产物不写入磁盘",children:["产物不写入磁盘",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#产物不写入磁盘",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"默认情况下，Builder 会将构建产物写入磁盘，以方便开发者查看产物的内容，或是配置静态资源的代理规则。"}),"\n",(0,d.jsx)(n.p,{children:"在开发环境，你可以选择将构建产物保存在 Dev Server 的内存中，从而减少文件操作产生的开销。"}),"\n",(0,d.jsxs)(n.p,{children:["将 ",(0,d.jsx)(n.code,{children:"dev.writeToDisk"})," 配置项设置为 ",(0,d.jsx)(n.code,{children:"false"})," 即可："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    writeToDisk: false,\n  },\n};\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);