(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_filename_mdx"],{2360:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=s("9880"),r=s("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type FilenameConfig = {\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  image?: string;\n  media?: string;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// 开发环境\nconst devDefaultFilename = {\n  js: '[name].js',\n  css: '[name].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n\n// 生产环境\nconst prodDefaultFilename = {\n  js: '[name].[contenthash:8].js',\n  css: '[name].[contenthash:8].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"设置构建产物的名称。"}),"\n",(0,i.jsxs)(n.p,{children:["在生产环境构建后，会自动在文件名中间添加 hash 值，如果不需要添加，可以通过 ",(0,i.jsx)(n.code,{children:"output.disableFilenameHash"})," 配置来禁用该行为。"]}),"\n",(0,i.jsx)(n.p,{children:"下面是各个文件类型的说明："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"js"}),"：表示 JavaScript 文件的名称。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"css"}),"：表示 CSS 样式文件的名称。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"svg"}),"：表示 SVG 图片的名称。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"font"}),"：表示字体文件的名称。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"}),"：表示非 SVG 图片的名称。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"media"}),"：表示视频等媒体资源的名称。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["修改 JavaScript 文件的名称为 ",(0,i.jsx)(n.code,{children:"[name]_script.js"}),"："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      js:\n        process.env.NODE_ENV === 'production'\n          ? '[name]_script.[contenthash:8].js'\n          : '[name]_script.js',\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"文件名中的 hash 值"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["通常来说，我们只会在生产环境下设置文件名的 hash 值（即 ",(0,i.jsx)(n.code,{children:"process.env.NODE_ENV === 'production'"})," 时）。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果你在开发环境下设置了文件名的 hash，那么可能会导致热更新不生效（尤其是 CSS 文件）。这是因为每次文件内容变化时，都会引起 hash 变化，导致 ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," 等工具无法读取到最新的文件内容。\n"]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"异步模块的文件名",children:["异步模块的文件名",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#异步模块的文件名",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"当你在代码中通过 dynamic import 的方式引入模块时，该模块会被单独打包成一个文件，它默认的命名规则如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["在开发环境下会基于模块路径生成名称，比如 ",(0,i.jsx)(n.code,{children:"dist/static/js/async/src_add_ts.js"}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:["在生产环境下会是一个随机的数字 id，比如 ",(0,i.jsx)(n.code,{children:"dist/static/js/async/798.27e3083e.js"}),"，这是为了避免在生产环境中泄露源代码的路径，同时字符数也更少。"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="src/index.ts"',children:"const { add } = await import('./add.ts');\n"})}),"\n",(0,i.jsxs)(n.p,{children:["如果你希望为异步模块指定一个固定的名称，可以通过打包工具提供的 ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/api/module-methods/#magic-comments",target:"_blank",rel:"noopener noreferrer",children:"magic comments"})," 来实现，通过 ",(0,i.jsx)(n.code,{children:"webpackChunkName"})," 指定模块名称："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="src/index.ts"',children:"const { add } = await import(\n  /* webpackChunkName: \"my-chunk-name\" */ './add.ts'\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["通过以上写法指定模块名称后，生成的文件会是 ",(0,i.jsx)(n.code,{children:"dist/static/js/async/my-chunk-name.js"}),"。"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},90400:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return d},default:function(){return o}});var i=s("9880"),r=s("23169"),t=s.ir(s("2360")),c={sidebar_label:"filename"},a="output.filename",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputfilename",children:["output.filename",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputfilename",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputfilename",target:"_blank",rel:"noopener noreferrer",children:"output.filename"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(t.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);