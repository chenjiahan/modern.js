(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_faq_exceptions_md"],{23517:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return l},toc:function(){return i},default:function(){return a}});var s=r("9880"),d=r("23169"),o={},l="异常类问题",i=[{text:"webpack 编译出现 'compilation' argument 报错？",depth:2,id:"webpack-编译出现-'compilation'-argument-报错？"},{text:"编译产物中存在未编译的 ES6+ 代码？",depth:2,id:"编译产物中存在未编译的-es6+-代码？"},{text:"在 Monorepo 中引用其他模块，代码没有被正确编译？",depth:2,id:"在-monorepo-中引用其他模块，代码没有被正确编译？"},{text:"编译时报错 You may need additional loader？",depth:2,id:"编译时报错-you-may-need-additional-loader？"},{text:"打开页面后报错，提示 exports is not defined？",depth:2,id:"打开页面后报错，提示-exports-is-not-defined？"},{text:'编译时报错 "Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax"？',depth:2,id:'编译时报错-"error:-es-modules-may-not-assign-moduleexports-or-exports*,-use-esm-export-syntax"？'},{text:"编译进度条卡死，但终端无 Error 日志？",depth:2,id:"编译进度条卡死，但终端无-error-日志？"},{text:"webpack 编译缓存未生效，应该如何排查？",depth:2,id:"webpack-编译缓存未生效，应该如何排查？"},{text:"打包后发现 tree shaking 没有生效？",depth:2,id:"打包后发现-tree-shaking-没有生效？"},{text:"打包时出现 JavaScript heap out of memory?",depth:2,id:"打包时出现-javascript-heap-out-of-memory?"},{text:"打包时出现 Can't resolve 'core-js/modules/xxx.js'？",depth:2,id:"打包时出现-can't-resolve-'core-js/modules/xxxjs'？"},{text:"React 组件的热更新无法生效？",depth:2,id:"react-组件的热更新无法生效？"},{text:"从 lodash 中引用类型后出现编译报错？",depth:2,id:"从-lodash-中引用类型后出现编译报错？"},{text:"Less 文件中的除法不生效？",depth:2,id:"less-文件中的除法不生效？"},{text:"修改配置后，报错 ‘TypeError: Cannot delete property 'xxx' of #<Object>’",depth:2,id:"修改配置后，报错-‘typeerror:-cannot-delete-property-'xxx'-of-#<object>’"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",div:"div",ul:"ul",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"异常类问题",children:["异常类问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#异常类问题",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"webpack-编译出现-\\'compilation\\'-argument-报错？",children:["webpack 编译出现 'compilation' argument 报错？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-编译出现-\\'compilation\\'-argument-报错？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"如果编译时出现以下报错，通常是由于项目中安装了错误的 webpack 版本，或者安装了多个 webpack 版本引起："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"TypeError: The 'compilation' argument must be an instance of Compilation\n"})}),"\n",(0,s.jsx)(n.p,{children:"webpack 版本问题有以下几种情况："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"项目的 package.json 中直接声明了 webpack 依赖，并且与 Builder 依赖的 webpack 版本范围不同，无法匹配到同一个版本。"}),"\n",(0,s.jsx)(n.li,{children:"项目里安装的多个 npm 包都依赖了 webpack，并且它们依赖的 webpack 版本范围不同，无法匹配到同一个版本。"}),"\n",(0,s.jsx)(n.li,{children:"由于包管理器的 lock 机制，导致 lock 文件中产生了多个 webpack 版本。"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["如果是第一种情况，建议从项目的 package.json 中移除 webpack 依赖。因为 Builder 默认封装了 webpack 相关能力，并且会在 ",(0,s.jsx)(n.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"})," 配置项中传入 webpack 对象。因此在大多数情况下，不建议在项目中额外安装 webpack 依赖。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果是第二种情况，建议看看能否升级某个 npm 包，使其依赖的 webpack 版本范围与 Builder 保持一致。也可以通过包管理器的能力来手动统一版本，比如使用 ",(0,s.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/",target:"_blank",rel:"noopener noreferrer",children:"yarn resolutions"})," 或 ",(0,s.jsx)(n.a,{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer",children:"pnpm overrides"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"如果是第三种情况，可以使用第二种情况中提到的两种方法，也可以尝试删除 lock 文件后重新安装来解决。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"删除 lock 文件会使项目中的依赖版本自动升级到指定范围下的最新版，请进行充分的测试。"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"编译产物中存在未编译的-es6+-代码？",children:["编译产物中存在未编译的 ES6+ 代码？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译产物中存在未编译的-es6+-代码？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，Builder 不会通过 ",(0,s.jsx)(n.code,{children:"babel-loader"})," 或 ",(0,s.jsx)(n.code,{children:"ts-loader"})," 来编译 ",(0,s.jsx)(n.code,{children:"node_modules"})," 下的文件。如果项目引入的 npm 包中含有 ES6+ 语法，会被打包进产物中。"]}),"\n",(0,s.jsxs)(n.p,{children:["遇到这种情况时，可以通过 ",(0,s.jsx)(n.a,{href:"/api/config-source#sourceinclude",children:"source.include"})," 配置项来指定需要额外进行编译的目录或模块。"]}),"\n",(0,s.jsxs)(n.h2,{id:"在-monorepo-中引用其他模块，代码没有被正确编译？",children:["在 Monorepo 中引用其他模块，代码没有被正确编译？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-monorepo-中引用其他模块，代码没有被正确编译？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["出于编译性能的考虑，默认情况下，Builder 不会通过 ",(0,s.jsx)(n.code,{children:"babel-loader"})," 或 ",(0,s.jsx)(n.code,{children:"ts-loader"})," 来编译 ",(0,s.jsx)(n.code,{children:"node_modules"})," 下的文件，也不会编译当前工程目录外部的文件。"]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"source.include"})," 配置项，可以指定需要额外进行编译的目录或模块。"]}),"\n",(0,s.jsxs)(n.p,{children:["详见 ",(0,s.jsx)(n.a,{href:"/api/config-source#sourceinclude",children:"source.include 用法介绍"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"编译时报错-you-may-need-additional-loader？",children:["编译时报错 ",(0,s.jsx)(n.code,{children:"You may need additional loader"}),"？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译时报错-you-may-need-additional-loader？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"如果编译过程中遇到了以下报错提示，表示存在个别文件无法被正确编译。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Module parse failed: Unexpected token\nFile was processed with these loaders:\n * some-loader/index.js\n\nYou may need an additional loader to handle the result of these loaders.\n"})}),"\n",(0,s.jsx)(n.p,{children:"解决方法："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["如果是引用了当前工程外部的 ",(0,s.jsx)(n.code,{children:".ts"})," 文件，或者是 node_modules 下的 ",(0,s.jsx)(n.code,{children:".ts"})," 文件，请添加 ",(0,s.jsx)(n.a,{href:"/api/config-source#sourceinclude",children:"source.include"})," 配置项，指定需要额外进行编译的文件。"]}),"\n",(0,s.jsx)(n.li,{children:"如果是引用了 Builder 不支持的文件格式，请自行配置对应的 webpack loader 进行编译。"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"打开页面后报错，提示-exports-is-not-defined？",children:["打开页面后报错，提示 exports is not defined？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打开页面后报错，提示-exports-is-not-defined？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果编译正常，但是打开页面后出现 ",(0,s.jsx)(n.code,{children:"exports is not defined"})," 报错，通常是因为在项目中使用 babel 编译了一个 CommonJS 模块，导致 babel 出现异常。"]}),"\n",(0,s.jsxs)(n.p,{children:["在正常情况下，Builder 是不会使用 babel 来编译 CommonJS 模块的。如果项目中使用了 ",(0,s.jsx)(n.a,{href:"/",children:"source.include"})," 配置项，或使用了 ",(0,s.jsx)(n.a,{href:"/api/config-tools#toolsbabel",children:"tools.babel"})," 的 ",(0,s.jsx)(n.code,{children:"addIncludes"})," 方法，则可能会把一些 CommonJS 模块加入到 babel 编译中。"]}),"\n",(0,s.jsx)(n.p,{children:"该问题有两种解决方法："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"避免将 CommonJS 模块加入到 babel 编译中。"}),"\n",(0,s.jsxs)(n.li,{children:["将 babel 的 ",(0,s.jsx)(n.code,{children:"sourceType"})," 配置项设置为 ",(0,s.jsx)(n.code,{children:"unambiguous"}),"，示例如下："]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      config.sourceType = 'unambiguous';\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["将 ",(0,s.jsx)(n.code,{children:"sourceType"})," 设置为 ",(0,s.jsx)(n.code,{children:"unambiguous"})," 可能会产生一些其他影响，请参考 ",(0,s.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer",children:"babel 官方文档"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:'编译时报错-\\"error:-es-modules-may-not-assign-moduleexports-or-exports*,-use-esm-export-syntax\\"？',children:['编译时报错 "Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax"？',(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:'#编译时报错-\\"error:-es-modules-may-not-assign-moduleexports-or-exports*,-use-esm-export-syntax\\"？',children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果编译时出现以下报错，通常也是因为在项目中使用 babel 编译了一个 CommonJS 模块，解决方法与上述的 ",(0,s.jsx)(n.code,{children:"exports is not defined"})," 问题一致。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: 581\n"})}),"\n",(0,s.jsxs)(n.p,{children:["更多信息请参考 issue：",(0,s.jsx)(n.a,{href:"https://github.com/babel/babel/issues/12731",target:"_blank",rel:"noopener noreferrer",children:"babel#12731"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"编译进度条卡死，但终端无-error-日志？",children:["编译进度条卡死，但终端无 Error 日志？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译进度条卡死，但终端无-error-日志？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当编译进度条卡死，但终端无 Error 日志时，通常是因为编译过程中出现了异常。在某些情况下，当 Error 被 webpack 或其他模块捕获后，错误日志不会被正确输出。最为常见的场景是 Babel 配置出现异常，抛出 Error 后被 webpack 捕获，而 webpack 在个别情况下吞掉了 Error。"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"解决方法："})}),"\n",(0,s.jsx)(n.p,{children:"如果你修改 Babel 配置后出现此问题，建议检查是否有以下错误用法："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"配置了一个不存在的 plugin 或 preset，可能是名称拼写错误，或是未正确安装。"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 错误示例\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      // 该插件名称错误，或者未安装\n      addPlugins('babel-plugin-not-exists');\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"是否配置了多个 babel-plugin-import，但是没有在数组的第三项声明每一个 babel-plugin-import 的名称。"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 错误示例\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd', libraryDirectory: 'es' },\n        ],\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd-mobile', libraryDirectory: 'es' },\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 正确示例\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd', libraryDirectory: 'es' },\n          'antd',\n        ],\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd-mobile', libraryDirectory: 'es' },\n          'antd-mobile',\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"webpack-编译缓存未生效，应该如何排查？",children:["webpack 编译缓存未生效，应该如何排查？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-编译缓存未生效，应该如何排查？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder 默认开启了 webpack 的持久化缓存。"}),"\n",(0,s.jsxs)(n.p,{children:["首次编译完成后，会自动生成缓存文件，并输出到 ",(0,s.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," 目录下。执行第二次编译时，会命中缓存，并大幅度提高编译速度。"]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"package.json"})," 等配置文件被修改时，缓存会自动失效。"]}),"\n",(0,s.jsx)(n.p,{children:"如果项目中 webpack 编译缓存一直未生效，可以添加以下配置进行排查："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack(config) {\n      config.infrastructureLogging = {\n        ...config.infrastructureLogging,\n        debug: /webpack\\.cache/,\n      };\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["添加以上配置后，webpack 会输出日志用于 debug，请参考 ",(0,s.jsx)(n.code,{children:"PackFileCacheStrategy"})," 相关的日志来了解缓存失效的原因。"]}),"\n",(0,s.jsxs)(n.h2,{id:"打包后发现-tree-shaking-没有生效？",children:["打包后发现 tree shaking 没有生效？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打包后发现-tree-shaking-没有生效？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder 在生产构建时会默认开启 webpack 的 tree shaking 功能，tree shaking 是否能够生效，取决于业务代码能否满足 webpack 的 tree shaking 条件。"}),"\n",(0,s.jsxs)(n.p,{children:["如果你遇到了 tree shaking 不生效的问题，可以检查下相关 npm 包的 ",(0,s.jsx)(n.code,{children:"sideEffects"})," 配置是否正确，如果你不了解 ",(0,s.jsx)(n.code,{children:"sideEffects"})," 的作用，或是对 tree shaking 背后的原理感兴趣，可以阅读以下两篇文档："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer",children:"webpack 官方文档 - Tree Shaking"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://bytedance.feishu.cn/docs/doccn8E1ldDct5uv1EEDQs8Ycwe",target:"_blank",rel:"noopener noreferrer",children:"Tree Shaking 问题排查指南"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"如果你是 npm 包的开发者，可以阅读这篇文章："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/594124786",target:"_blank",rel:"noopener noreferrer",children:"如何编写一个友好支持 Tree-shaking 的库"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"打包时出现-javascript-heap-out-of-memory?",children:["打包时出现 JavaScript heap out of memory?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打包时出现-javascript-heap-out-of-memory?",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"该报错表示打包过程中出现了内存溢出问题，大多数情况下是由于打包的内容较多，超出了 Node.js 默认的内存上限。"}),"\n",(0,s.jsxs)(n.p,{children:["如果出现 OOM 问题，最简单的方法是通过增加内存上限来解决，Node.js 提供了 ",(0,s.jsx)(n.code,{children:"--max-old-space-size"})," 选项来对此进行设置。你可以在 CLI 命令前添加 ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer",children:"NODE_OPTIONS"})," 来设置此参数。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如，在 ",(0,s.jsx)(n.code,{children:"modern build"})," 命令前添加参数："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",meta:'title="package.json"',children:'{\n  "scripts": {\n-   "build": "modern build"\n+   "build": "NODE_OPTIONS=--max_old_space_size=16384 modern build"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["如果你执行的是其他命令，比如 ",(0,s.jsx)(n.code,{children:"modern deploy"}),"，请在对应的命令前添加参数。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max_old_space_size"})," 参数的值代表内存上限大小（MB)，一般情况下设置为 ",(0,s.jsx)(n.code,{children:"16384"}),"（16GB）即可。"]}),"\n",(0,s.jsx)(n.p,{children:"Node.js 官方文档中有对以下参数更详细的解释："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer",children:"NODE_OPTIONS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",target:"_blank",rel:"noopener noreferrer",children:"--max-old-space-size"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["除了增加内存上限，通过开启一些编译策略来提升构建效率也是一个解决方案，请参考 ",(0,s.jsx)(n.a,{href:"/guide/optimization/build-performance",children:"提升构建性能"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"如果以上方式无法解决你的问题，可能是项目中某些异常逻辑导致了内存非正常溢出。你可以排查近期的代码变更，定位问题的根因。如果无法定位，请联系我们进行排查。"}),"\n",(0,s.jsxs)(n.h2,{id:"打包时出现-can\\'t-resolve-\\'core-js/modules/xxxjs\\'？",children:["打包时出现 Can't resolve 'core-js/modules/xxx.js'？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打包时出现-can\\'t-resolve-\\'core-js/modules/xxxjs\\'？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果你在打包时出现了类似下面的报错，表示项目中的 ",(0,s.jsx)(n.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"})," 无法被正确引用。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Module not found: Can't resolve 'core-js/modules/es.error.cause.js'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["通常来说，你无须在项目中安装 ",(0,s.jsx)(n.code,{children:"core-js"}),"，因为 Builder 已经内置了一份 ",(0,s.jsx)(n.code,{children:"core-js"})," v3。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果出现 ",(0,s.jsx)(n.code,{children:"core-js"})," 找不到的报错，可能有以下几个原因："]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["项目里覆盖了 Babel 配置的 ",(0,s.jsx)(n.code,{children:"plugins"}),"，导致内置的 ",(0,s.jsx)(n.code,{children:"babelPluginLockCorejsVersion"})," 无法正确生效。这种情况将 ",(0,s.jsx)(n.code,{children:"tools.babel"})," 更改为函数用法即可："]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 错误用法，会覆盖 Builder 默认的 Babel 插件\nexport default {\n  tools: {\n    babel: {\n      plugins: ['babel-plugin-xxx'],\n    },\n  },\n};\n\n// 正确用法，在默认配置中新增一个插件，而非覆盖插件\nexport default {\n  tools: {\n    babel(config) {\n      config.plugins.push('babel-plugin-xxx');\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["项目里某一处代码依赖了 ",(0,s.jsx)(n.code,{children:"core-js"})," v2 版本。这种情况通常需要你找出对应的代码，并升级其中的 ",(0,s.jsx)(n.code,{children:"core-js"})," 到 v3 版本。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node_modules"})," 中的某一个 npm 包引用了 ",(0,s.jsx)(n.code,{children:"core-js"}),"，但是没有在 ",(0,s.jsx)(n.code,{children:"dependencies"})," 中声明 ",(0,s.jsx)(n.code,{children:"core-js"})," 依赖。这种情况需要你在对应的 npm 包中声明 ",(0,s.jsx)(n.code,{children:"core-js"})," 依赖，或者在项目根目录下安装一份 ",(0,s.jsx)(n.code,{children:"core-js"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"react-组件的热更新无法生效？",children:["React 组件的热更新无法生效？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-组件的热更新无法生效？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder 使用 React 官方的 ",(0,s.jsx)(n.a,{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"Fast Refresh"})," 能力来进行组件热更新。"]}),"\n",(0,s.jsx)(n.p,{children:"如果出现 React 组件的热更新无法生效的问题，或者是热更新后 React 组件的 state 丢失，这通常是因为你的 React 组件使用了匿名函数。在 React Fast Refresh 的官方实践中，要求组件不能为匿名函数，否则热更新后无法保留 React 组件的 state。"}),"\n",(0,s.jsx)(n.p,{children:"以下是一些错误用法的例子："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 错误写法 1\nexport default function () {\n  return <div>Hello World</div>;\n}\n\n// 错误写法 2\nexport default () => <div>Hello World</div>;\n"})}),"\n",(0,s.jsx)(n.p,{children:"正确用法是给每个组件函数声明一个名称："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 正确写法 1\nexport default function MyComponent() {\n  return <div>Hello World</div>;\n}\n\n// 正确写法 2\nconst MyComponent = () => <div>Hello World</div>;\n\nexport default MyComponent;\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"从-lodash-中引用类型后出现编译报错？",children:["从 lodash 中引用类型后出现编译报错？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-lodash-中引用类型后出现编译报错？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当你的项目中安装了 ",(0,s.jsx)(n.code,{children:"@types/lodash"})," 包时，你可能会从 ",(0,s.jsx)(n.code,{children:"lodash"})," 中引用一些类型，比如引用 ",(0,s.jsx)(n.code,{children:"DebouncedFunc"})," 类型："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { debounce, DebouncedFunc } from 'lodash';\n"})}),"\n",(0,s.jsx)(n.p,{children:"上述代码会在编译后产生如下报错："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SyntaxError: /project/src/index.ts: The 'lodash' method `DebouncedFunc` is not a known module.\nPlease report bugs to https://github.com/lodash/babel-plugin-lodash/issues.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["这个问题的原因是 Builder 默认开启了 ",(0,s.jsx)(n.a,{href:"https://github.com/lodash/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-lodash"})," 插件来优化 lodash 产物体积，但 Babel 无法区别「值」和「类型」，导致编译后的代码出现异常。"]}),"\n",(0,s.jsxs)(n.p,{children:["解决方法是使用 TypeScript 的 ",(0,s.jsx)(n.code,{children:"import type"})," 语法，对 ",(0,s.jsx)(n.code,{children:"DebouncedFunc"})," 类型进行显式声明："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { debounce } from 'lodash';\nimport type { DebouncedFunc } from 'lodash';\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["在任意情况下，我们都推荐使用 ",(0,s.jsx)(n.code,{children:"import type"})," 来引用类型，这对于编译器识别类型会有很大帮助。\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"less-文件中的除法不生效？",children:["Less 文件中的除法不生效？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#less-文件中的除法不生效？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Less v4 版本与 v3 版本相比，除法的写法有一些区别："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-less",children:"// Less v3\n.math {\n  width: 2px / 2; // 1px\n  width: 2px ./ 2; // 1px\n  width: (2px / 2); // 1px\n}\n\n// Less v4\n.math {\n  width: 2px / 2; // 2px / 2\n  width: 2px ./ 2; // 1px\n  width: (2px / 2); // 1px\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Builder 内置的 Less 版本为 v4，低版本的写法不会生效，请注意区分。"}),"\n",(0,s.jsxs)(n.p,{children:["Less 中除法的写法也可以通过配置项来修改，详见 ",(0,s.jsx)(n.a,{href:"https://lesscss.org/usage/#less-options-math",target:"_blank",rel:"noopener noreferrer",children:"Less - Math"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"修改配置后，报错-‘typeerror:-cannot-delete-property-\\'xxx\\'-of-#<object>’",children:["修改配置后，报错 ‘TypeError: Cannot delete property 'xxx' of #<Object>’",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改配置后，报错-‘typeerror:-cannot-delete-property-\\'xxx\\'-of-#<object>’",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"该报错表示在编译过程中对一个只读配置项进行了删除操作。通常情况下，我们不希望编译过程中的任何操作会直接对传入的配置进行修改，但难以限制底层插件（如 postcss-loader 等）的行为，如果出现该报错，请联系 Builder 开发者，我们需要对该配置进行单独处理。"}),"\n",(0,s.jsx)(n.p,{children:"同类型报错还有："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"'TypeError: Cannot add property xxx, object is not extensible'"}),"\n",(0,s.jsx)(n.li,{children:"'TypeError: Cannot assign to read only property 'xxx' of object '#<Object>'"}),"\n"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);