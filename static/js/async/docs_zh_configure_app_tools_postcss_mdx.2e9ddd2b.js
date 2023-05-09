(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_postcss_mdx"],{59769:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t}});var c=n("12151"),r=n("23169");function o(s){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,r.useMDXComponents)(),s.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"类型："})," ",(0,c.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"默认值："})}),"\n"]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"const defaultOptions = {\n  postcssOptions: {\n    plugins: [\n      require('postcss-flexbugs-fixes'),\n      require('postcss-custom-properties'),\n      require('postcss-initial'),\n      require('postcss-page-break'),\n      require('postcss-font-variant'),\n      require('postcss-media-minmax'),\n      require('postcss-nesting'),\n      require('autoprefixer')({\n        flexbox: 'no-2009',\n      }),\n    ],\n    // 默认在开发环境下启用 CSS 的 Source Map\n    sourceMap: isDev,\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(e.p,{children:["Builder 默认集成 PostCSS，你可以通过 ",(0,c.jsx)(e.code,{children:"tools.postcss"})," 对 ",(0,c.jsx)(e.a,{href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"noopener noreferrer",children:"postcss-loader"})," 进行配置。"]}),"\n",(0,c.jsxs)(e.h3,{id:"function-类型",children:["Function 类型",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"值为 Function 类型时，内部默认配置作为第一参数传入，可以直接修改配置对象不做返回，也可以返回一个对象作为最终结果；第二个参数为修改 postcss-loader 配置的工具函数集合。"}),"\n",(0,c.jsx)(e.p,{children:"例如，需要在原有插件的基础上新增一个 PostCSS 插件，在 postcssOptions.plugins 数组中 push 一个新的插件即可："}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      opts.postcssOptions.plugins.push(require('postcss-px-to-viewport'));\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(e.p,{children:"需要给 PostCSS 插件传递参数时，可以通过函数参数的形式进行传入："}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"tools.postcss"})," 可以返回一个配置对象，并完全替换默认配置："]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: () => {\n      return {\n        postcssOptions: {\n          plugins: [require('postcss-px-to-viewport')],\n        },\n      };\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(e.h3,{id:"object-类型",children:["Object 类型",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["当此值为 Object 类型时，与默认配置通过 ",(0,c.jsx)(e.code,{children:"Object.assign"})," 合并。注意 ",(0,c.jsx)(e.code,{children:"Object.assign"})," 是浅拷贝，会完全覆盖内置的 ",(0,c.jsx)(e.code,{children:"plugins"})," 数组，请谨慎使用。"]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: {\n      // 由于使用 `Object.assign` 合并，因此默认的 postcssOptions 会被覆盖。\n      postcssOptions: {\n        plugins: [require('postcss-px-to-viewport')],\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(e.h3,{id:"工具函数",children:["工具函数",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#工具函数",children:"#"})]}),"\n",(0,c.jsxs)(e.h4,{id:"addplugins",children:["addPlugins",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"类型："})," ",(0,c.jsx)(e.code,{children:"(plugins: PostCSSPlugin | PostCSSPlugin[]) => void"})]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"用于添加额外的 PostCSS 插件，你可以传入单个 PostCSS 插件，也可以传入 PostCSS 插件数组。"}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: (config, { addPlugins }) => {\n      // 添加一个插件\n      addPlugins(require('postcss-preset-env'));\n      // 批量添加插件\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(e.div,{className:"modern-directive tip",children:[(0,c.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(e.div,{className:"modern-directive-content",children:(0,c.jsx)(e.p,{children:"Builder 中使用的 PostCSS 版本为 v8，当你引入社区中的 PostCSS 插件时，请注意版本是否适配，部分旧版本插件可能无法在 PostCSS v8 下运行。"})})]})]})}var t=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,r.useMDXComponents)(),s.components).wrapper;return e?(0,c.jsx)(e,Object.assign({},s,{children:(0,c.jsx)(o,s)})):o(s)}},79298:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return t},title:function(){return i},toc:function(){return d},default:function(){return l}});var c=n("12151"),r=n("23169"),o=n.ir(n("59769")),t={sidebar_label:"postcss"},i="tools.postcss",d=[];function a(s){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),s.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.h1,{id:"tools-postcss",children:["tools.postcss",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-postcss",children:"#"})]}),"\n",(0,c.jsxs)(e.div,{className:"modern-directive tip",children:[(0,c.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(e.div,{className:"modern-directive-content",children:(0,c.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolspostcss",target:"_blank",rel:"noopener noreferrer",children:"tools.postcss"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(o.default,{})]})}var l=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,r.useMDXComponents)(),s.components).wrapper;return e?(0,c.jsx)(e,Object.assign({},s,{children:(0,c.jsx)(a,s)})):a(s)}}}]);