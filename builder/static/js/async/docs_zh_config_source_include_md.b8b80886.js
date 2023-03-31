(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_config_source_include_md"],{85147:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return l},default:function(){return a}});var r=s("12151"),c=s("21447");let o={},d="",l=[{text:"编译 npm 包",depth:3,id:"编译-npm-包"},{text:"编译 npm 包的子依赖",depth:3,id:"编译-npm-包的子依赖"},{text:"编译 Monorepo 中的其他库",depth:3,id:"编译-monorepo-中的其他库"},{text:"编译 CommonJS 模块",depth:3,id:"编译-commonjs-模块"},{text:"匹配 Symlink",depth:3,id:"匹配-symlink"},{text:"注意事项",depth:3,id:"注意事项"}];function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",button:"button",pre:"pre",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Array<string | RegExp>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"出于编译性能的考虑，默认情况下，Builder 不会编译 node_modules 下的 JavaScript/TypeScript 文件，也不会编译当前工程目录外部的 JavaScript/TypeScript 文件。"}),"\n",(0,r.jsxs)(n.p,{children:["通过 ",(0,r.jsx)(n.code,{children:"source.include"})," 配置项，可以指定需要 Builder 额外进行编译的目录或模块。",(0,r.jsx)(n.code,{children:"source.include"})," 的用法与 webpack 中的 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#ruleinclude",target:"_blank",rel:"noopener noreferrer",children:"Rule.include"})," 一致，支持传入字符串或正则表达式来匹配模块的路径。"]}),"\n",(0,r.jsx)(n.p,{children:"比如:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [path.resolve(__dirname, '../other-dir')],\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"编译-npm-包",children:["编译 npm 包",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译-npm-包",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"比较典型的使用场景是编译 node_modules 下的 npm 包，因为某些第三方依赖存在 ES6+ 的语法，这可能导致在低版本浏览器上无法运行，你可以通过该选项指定需要编译的依赖，从而解决此类问题。"}),"\n",(0,r.jsxs)(n.p,{children:["以 ",(0,r.jsx)(n.code,{children:"query-string"})," 为例，你可以做如下的配置："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // 方法一:\n      // 先通过 require.resolve 来获取模块的路径\n      // 再通过 path.dirname 来指向对应的目录\n      path.dirname(require.resolve('query-string')),\n      // 方法二:\n      // 通过正则表达式进行匹配\n      // 所有包含 `/query-string/` 的路径都会被匹配到\n      /\\/query-string\\//,\n    ],\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"编译-npm-包的子依赖",children:["编译 npm 包的子依赖",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译-npm-包的子依赖",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当你通过 ",(0,r.jsx)(n.code,{children:"source.include"})," 编译一个 npm 包时，Builder 默认只会编译匹配到的模块，不会编译对应模块的",(0,r.jsx)(n.strong,{children:"子依赖"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:["以 ",(0,r.jsx)(n.code,{children:"query-string"})," 为例，它依赖的 ",(0,r.jsx)(n.code,{children:"decode-uri-component"})," 包中同样存在 ES6+ 代码，因此需要将 ",(0,r.jsx)(n.code,{children:"decode-uri-component"})," 也加入到 ",(0,r.jsx)(n.code,{children:"source.include"})," 中："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [/\\/query-string\\//, /\\/decode-uri-component\\//],\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"编译-monorepo-中的其他库",children:["编译 Monorepo 中的其他库",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译-monorepo-中的其他库",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 Monorepo 中进行开发时，如果需要引用 Monorepo 中其他库的源代码，也可以直接在 ",(0,r.jsx)(n.code,{children:"source.include"})," 进行配置:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // 方法一:\n      // 编译 Monorepo 的 package 目录下的所有文件\n      path.resolve(__dirname, '../../packages'),\n\n      // 方法二:\n      // 编译 Monorepo 的 package 目录里某个包的源代码\n      // 这种写法匹配的范围更加精准，对整体编译性能的影响更小\n      path.resolve(__dirname, '../../packages/xxx/src'),\n    ],\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"编译-commonjs-模块",children:["编译 CommonJS 模块",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译-commonjs-模块",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Babel 默认无法编译 CommonJS 模块，如果你编译了一个 CommonJS 模块，可能会出现 ",(0,r.jsx)(n.code,{children:"exports is not defined"})," 的运行时报错信息。"]}),"\n",(0,r.jsxs)(n.p,{children:["当你需要使用 ",(0,r.jsx)(n.code,{children:"source.include"})," 来编译 CommonJS 模块时，可以将 Babel 的 ",(0,r.jsx)(n.code,{children:"sourceType"})," 配置设置为 ",(0,r.jsx)(n.code,{children:"unambiguous"}),"："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    babel(config) {\n      config.sourceType = 'unambiguous';\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["将 ",(0,r.jsx)(n.code,{children:"sourceType"})," 设置为 ",(0,r.jsx)(n.code,{children:"unambiguous"})," 可能会产生一些其他影响，请参考 ",(0,r.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer",children:"Babel 官方文档"}),"。"]}),"\n",(0,r.jsxs)(n.h3,{id:"匹配-symlink",children:["匹配 Symlink",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#匹配-symlink",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果你匹配的模块是通过 symlink 链接到当前项目中的，那么需要匹配这个模块的",(0,r.jsx)(n.strong,{children:"真实路径"}),"，而不是 symlink 后的路径。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如，你将 Monorepo 中的 ",(0,r.jsx)(n.code,{children:"packages/foo"})," 路径 symlink 到当前项目的 ",(0,r.jsx)(n.code,{children:"node_modules/foo"})," 路径下，则需要去匹配 ",(0,r.jsx)(n.code,{children:"packages/foo"})," 路径，而不是 ",(0,r.jsx)(n.code,{children:"node_modules/foo"})," 路径。"]}),"\n",(0,r.jsxs)(n.p,{children:["该行为可以通过 webpack 的 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvesymlinks",target:"_blank",rel:"noopener noreferrer",children:"resolve.symlinks"})," 配置项来进行控制。"]}),"\n",(0,r.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["注意，",(0,r.jsx)(n.code,{children:"source.include"})," 不应该被用于编译整个 ",(0,r.jsx)(n.code,{children:"node_modules"})," 目录，比如下面的写法是错误的："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [/\\/node_modules\\//],\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["如果你对整个 ",(0,r.jsx)(n.code,{children:"node_modules"})," 进行编译，不仅会使编译时间大幅度增加，并且可能会产生不可预期的错误。因为 ",(0,r.jsx)(n.code,{children:"node_modules"})," 中的大部分 npm 包发布的已经是编译后的产物，通常没必要经过二次编译。此外，",(0,r.jsx)(n.code,{children:"core-js"})," 等 npm 包被编译后可能会出现异常。"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);