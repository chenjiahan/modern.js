(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-esbuild_mdx"],{50706:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},title:function(){return r},toc:function(){return a},default:function(){return h}});var d=n("12151"),i=n("23169"),l={},r="Esbuild 插件",a=[{text:"快速开始",depth:2,id:"快速开始"},{text:"安装插件",depth:3,id:"安装插件"},{text:"注册插件",depth:3,id:"注册插件"},{text:"配置",depth:2,id:"配置"},{text:"loader",depth:3,id:"loader"},{text:"设置 JSX 格式",depth:4,id:"设置-jsx-格式"},{text:"修改目标环境",depth:4,id:"修改目标环境"},{text:"关闭代码转译",depth:4,id:"关闭代码转译"},{text:"minimize",depth:3,id:"minimize"},{text:"修改目标环境",depth:4,id:"修改目标环境-1"},{text:"关闭代码压缩",depth:4,id:"关闭代码压缩"},{text:"esbuild 局限性",depth:2,id:"esbuild-局限性"},{text:"兼容性",depth:3,id:"兼容性"},{text:"不支持 Babel 插件",depth:3,id:"不支持-babel-插件"},{text:"产物体积",depth:3,id:"产物体积"}];function c(e){var s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",h3:"h3",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"esbuild-插件",children:["Esbuild 插件",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#esbuild-插件",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," 是一款基于 Golang 开发的前端构建工具，具有打包、编译和压缩 JavaScript 代码的功能，相比传统的打包编译工具，esbuild 在性能上有显著提升。在代码压缩方面，相比 webpack 内置的 terser 压缩器，esbuild 在性能上有数十倍的提升。"]}),"\n",(0,d.jsxs)(s.p,{children:["Builder 提供了 esbuild 插件，让你能使用 esbuild 代替 babel-loader、ts-loader 和 terser 等库进行代码编译和压缩。在大型工程中启用 esbuild 后，",(0,d.jsx)(s.strong,{children:"可以大幅度减少代码编译和压缩所需的时间，同时有效避免 OOM (heap out of memory) 问题"}),"。"]}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive tip",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"推荐使用 SWC"}),(0,d.jsxs)(s.div,{className:"modern-directive-content",children:[(0,d.jsx)(s.p,{children:"相较于 esbuild，我们更推荐使用 SWC 来编译和压缩代码，因为 SWC 支持更多的语法特性、提供更好的代码压缩能力，并且产物具备更好的兼容性。"}),"\n",(0,d.jsxs)(s.p,{children:["因此，我们建议你使用 SWC 而不是 esbuild，用法请参考 ",(0,d.jsx)(s.a,{href:"/plugins/plugin-swc",children:"SWC 插件"}),"。"]}),"\n"]})]}),"\n",(0,d.jsxs)(s.h2,{id:"快速开始",children:["快速开始",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,d.jsxs)(s.h3,{id:"安装插件",children:["安装插件",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-esbuild -D\n\n# yarn\nyarn add @modern-js/builder-plugin-esbuild -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-esbuild -D\n"})})]})}),"\n",(0,d.jsxs)(s.h3,{id:"注册插件",children:["注册插件",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["在 Modern.js 等上层框架中，你可以通过 ",(0,d.jsx)(s.code,{children:"builderPlugins"})," 配置项来注册 esbuild 插件："]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"import { builderPluginEsbuild } from '@modern-js/builder-plugin-esbuild';\n\nexport default {\n  builderPlugins: [builderPluginEsbuild()],\n};\n"})})]})}),"\n",(0,d.jsxs)(s.p,{children:["当你直接调用 Builder 的 Node API 时，可以通过 ",(0,d.jsx)(s.code,{children:"addPlugins"})," 方法来注册 esbuild 插件："]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-js",children:"import { builderPluginEsbuild } from '@modern-js/builder-plugin-esbuild';\n\n// 往 builder 实例上添加插件\nbuilder.addPlugins([builderPluginEsbuild()]);\n"})})]})}),"\n",(0,d.jsxs)(s.h2,{id:"配置",children:["配置",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"插件默认会开启代码转译和代码压缩的功能，你也可以通过配置来自定义插件的行为。"}),"\n",(0,d.jsxs)(s.h3,{id:"loader",children:["loader",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#loader",children:"#"})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"类型："})}),"\n"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"type LoaderOptions = EsbuildLoaderOptions | false | undefined;\n"})})]})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"默认值："})}),"\n"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"const defaultOptions = {\n  target: 'es2015',\n  charset: builderConfig.output.charset,\n};\n"})})]})}),"\n",(0,d.jsx)(s.p,{children:"这个选项用于启用 JavaScript 和 TypeScript 的转译，启用时将会使用 esbuild-loader 替换 babel-loader 和 ts-loader。"}),"\n",(0,d.jsxs)(s.p,{children:["如果你需要修改转译参数，可以查看 ",(0,d.jsx)(s.a,{href:"https://github.com/privatenumber/esbuild-loader#loader",target:"_blank",rel:"noopener noreferrer",children:"esbuild-loader 文档"}),"。"]}),"\n",(0,d.jsxs)(s.h4,{id:"设置-jsx-格式",children:["设置 JSX 格式",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#设置-jsx-格式",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["在使用 esbuild 进行代码转译时，esbuild 默认会读取 ",(0,d.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,d.jsx)(s.code,{children:"compilerOptions.jsx"})," 字段，来决定使用哪种 JSX 语法。"]}),"\n",(0,d.jsxs)(s.p,{children:["因此，你需要在 ",(0,d.jsx)(s.code,{children:"tsconfig.json"})," 中设置正确的 JSX 语法。"]}),"\n",(0,d.jsxs)(s.p,{children:["比如 React 项目，需要将 ",(0,d.jsx)(s.code,{children:"compilerOptions.jsx"})," 设置为 ",(0,d.jsx)(s.code,{children:"react-jsx"}),"："]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "jsx": "react-jsx"\n  }\n}\n'})})]})}),"\n",(0,d.jsxs)(s.h4,{id:"修改目标环境",children:["修改目标环境",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#修改目标环境",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["通过 ",(0,d.jsx)(s.code,{children:"target"})," 选项来修改代码转译的目标环境。",(0,d.jsx)(s.code,{children:"target"})," 可以直接设置为 JavaScript 语言版本，比如 ",(0,d.jsx)(s.code,{children:"es6"}),"，",(0,d.jsx)(s.code,{children:"es2020"}),"；也可以设置为若干个目标环境，每个目标环境都是一个环境名称后跟一个版本号，比如 ",(0,d.jsx)(s.code,{children:"['chrome58', 'edge16' ,'firefox57']"}),"。",(0,d.jsx)(s.code,{children:"target"})," 字段的详细介绍可以参考 ",(0,d.jsx)(s.a,{href:"https://esbuild.github.io/api/#target",target:"_blank",rel:"noopener noreferrer",children:"esbuild - target"}),"。"]}),"\n",(0,d.jsx)(s.p,{children:"target 支持设置为以下环境："}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"chrome"}),"\n",(0,d.jsx)(s.li,{children:"edge"}),"\n",(0,d.jsx)(s.li,{children:"firefox"}),"\n",(0,d.jsx)(s.li,{children:"ie"}),"\n",(0,d.jsx)(s.li,{children:"ios"}),"\n",(0,d.jsx)(s.li,{children:"node"}),"\n",(0,d.jsx)(s.li,{children:"opera"}),"\n",(0,d.jsx)(s.li,{children:"safari"}),"\n"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"builderPluginEsbuild({\n  loader: {\n    target: 'chrome61',\n  },\n});\n"})})]})}),"\n",(0,d.jsxs)(s.h4,{id:"关闭代码转译",children:["关闭代码转译",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#关闭代码转译",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["将 ",(0,d.jsx)(s.code,{children:"loader"})," 设置为 ",(0,d.jsx)(s.code,{children:"false"})," 来关闭 esbuild 代码转译，此时 Builder 会继续使用 Babel 来进行代码转译。"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"builderPluginEsbuild({\n  loader: false,\n});\n"})})]})}),"\n",(0,d.jsxs)(s.h3,{id:"minimize",children:["minimize",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#minimize",children:"#"})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"类型："})}),"\n"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"type MinimizeOptions = EsbuildMinifyOptions | false | undefined;\n"})})]})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.strong,{children:"默认值："})}),"\n"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"const defaultOptions = {\n  css: true,\n  target: 'es2015',\n};\n"})})]})}),"\n",(0,d.jsx)(s.p,{children:"这个选项用于启用 JavaScript 和 CSS 的代码压缩。"}),"\n",(0,d.jsxs)(s.p,{children:["如果你需要修改压缩参数，可以查看 ",(0,d.jsx)(s.a,{href:"https://github.com/privatenumber/esbuild-loader#minifyplugin",target:"_blank",rel:"noopener noreferrer",children:"esbuild-loader 文档"}),"。"]}),"\n",(0,d.jsxs)(s.h4,{id:"修改目标环境-1",children:["修改目标环境",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#修改目标环境-1",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["通过 ",(0,d.jsx)(s.code,{children:"target"})," 选项来修改代码压缩的目标环境。"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"builderPluginEsbuild({\n  minimize: {\n    target: 'chrome61',\n  },\n});\n"})})]})}),"\n",(0,d.jsxs)(s.h4,{id:"关闭代码压缩",children:["关闭代码压缩",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#关闭代码压缩",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["将 ",(0,d.jsx)(s.code,{children:"minimize"})," 设置为 ",(0,d.jsx)(s.code,{children:"false"})," 来关闭 esbuild 代码压缩，此时 Builder 会继续使用 Terser 进行代码压缩。"]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"builderPluginEsbuild({\n  minimize: false,\n});\n"})})]})}),"\n",(0,d.jsxs)(s.h2,{id:"esbuild-局限性",children:["esbuild 局限性",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#esbuild-局限性",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"虽然 esbuild 能给现有的 webpack 项目带来明显的构建性能提升，但这个工具在接入 Builder 时还存在一定的局限性，需要大家在接入的时候格外注意。"}),"\n",(0,d.jsxs)(s.h3,{id:"兼容性",children:["兼容性",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#兼容性",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["使用 esbuild 进行代码转译时（即 ",(0,d.jsx)(s.code,{children:"loader"})," 能力），esbuild 通常最低支持到 ES2015（即 ES6）语法，并且不具备自动注入 Polyfill 的能力。如果生产环境需要降级到 ES5 及以下的语法，建议使用 SWC 编译。"]}),"\n",(0,d.jsx)(s.p,{children:"你可以通过如下的配置指定目标语法版本:"}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"builderPluginEsbuild({\n  loader: {\n    target: 'es2015',\n  },\n});\n"})})]})}),"\n",(0,d.jsxs)(s.p,{children:["使用 esbuild 进行代码压缩时（即 ",(0,d.jsx)(s.code,{children:"minimize"})," 能力），esbuild 可以在生产环境中进行压缩和混淆，通常最低支持到 ES2015 语法。"]}),"\n",(0,d.jsxs)(s.p,{children:["如果设置压缩的 ",(0,d.jsx)(s.code,{children:"target"})," 为 ",(0,d.jsx)(s.code,{children:"es5"}),"，需要保证所有代码已经被转义为 ES5 代码，否则会导致 esbuild 编译报错：",(0,d.jsx)(s.code,{children:"Transforming 'xxx' to the configured target environment (\"es5\") is not supported yet"}),"。"]}),"\n",(0,d.jsx)(s.p,{children:"因此，对于生产环境需要兼容 ES5 及以下语法的项目，请谨慎开启 minimize 能力，建议使用 SWC 压缩。"}),"\n",(0,d.jsx)(s.p,{children:"你可以通过如下的配置指定目标语法版本:"}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsxs)(s.div,{className:"modern-code-content",children:[(0,d.jsx)(s.button,{className:"copy"}),(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-ts",children:"builderPluginEsbuild({\n  minimize: {\n    target: 'es2015',\n  },\n});\n"})})]})}),"\n",(0,d.jsxs)(s.h3,{id:"不支持-babel-插件",children:["不支持 Babel 插件",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#不支持-babel-插件",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["使用 esbuild 进行代码转译时，诸如 ",(0,d.jsx)(s.code,{children:"babel-plugin-import"})," 等原有 Babel 插件的语法编译功能在开启 esbuild 后无法使用。并且由于 Builder 底层使用的是 esbuild 的 ",(0,d.jsx)(s.code,{children:"Transform API"}),"，因此不支持使用额外 esbuild 插件来进行自定义编译过程。"]}),"\n",(0,d.jsxs)(s.p,{children:["如果你有 ",(0,d.jsx)(s.code,{children:"babel-plugin-import"})," 等 Babel 插件相关诉求，可以使用 SWC 插件。"]}),"\n",(0,d.jsxs)(s.h3,{id:"产物体积",children:["产物体积",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#产物体积",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["使用 esbuild 压缩虽然带来了构建效率上的提升，但 esbuild 的压缩比例是低于 terser 的，因此",(0,d.jsx)(s.strong,{children:"构建产物的体积会增大"}),"，请根据业务情况酌情使用。通常来说，esbuild 比较适合中后台等对体积不敏感的场景。"]}),"\n",(0,d.jsxs)(s.p,{children:["对于压缩工具之间的详细对比，可以参考 ",(0,d.jsx)(s.a,{href:"https://github.com/privatenumber/minification-benchmarks",target:"_blank",rel:"noopener noreferrer",children:"minification-benchmarks"}),"。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);