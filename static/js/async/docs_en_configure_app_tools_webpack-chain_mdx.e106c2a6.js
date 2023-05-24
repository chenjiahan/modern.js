(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_webpack-chain_mdx"],{76683:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=d("9880"),s=d("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",blockquote:"blockquote",h3:"h3",a:"a",h4:"h4",pre:"pre",div:"div",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can modify the webpack configuration by configuring ",(0,r.jsx)(n.code,{children:"tools.webpackChain"})," which is type of ",(0,r.jsx)(n.code,{children:"Function"}),". The function receives two parameters, the first is the original webpack chain object, and the second is an object containing some utils."]}),"\n",(0,r.jsxs)(n.p,{children:["Compared with ",(0,r.jsx)(n.code,{children:"tools.webpack"}),", ",(0,r.jsx)(n.strong,{children:"webpack-chain not only supports chained calls, but also can locate built-in Rule or Plugin based on aliases, so as to achieve precise config modification"}),". We recommend using ",(0,r.jsx)(n.code,{children:"tools.webpackChain"})," instead of ",(0,r.jsx)(n.code,{children:"tools.webpack"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.webpackChain"})," is executed earlier than tools.webpack and thus will be overridden by changes in ",(0,r.jsx)(n.code,{children:"tools.webpack"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"utils",children:["Utils",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"env",children:["env",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"isProd"})," parameter can be used to determine whether the current environment is production. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"target",children:["target",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"target"})," parameter can be used to determine the current environment. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"node"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"webpack",children:["webpack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"typeof import('webpack')"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The webpack instance. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack }) => {\n      chain.plugin('my-progress').use(webpack.ProgressPlugin);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"typeof import('html-webpack-plugin')"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The HtmlWebpackPlugin instance:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"getcompiledpath",children:["getCompiledPath",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Get the path to the builder built-in dependencies, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sass"}),"\n",(0,r.jsx)(n.li,{children:"sass-loader"}),"\n",(0,r.jsx)(n.li,{children:"less"}),"\n",(0,r.jsx)(n.li,{children:"less-loader"}),"\n",(0,r.jsx)(n.li,{children:"css-loader"}),"\n",(0,r.jsx)(n.li,{children:"babel-loader"}),"\n",(0,r.jsx)(n.li,{children:"url-loader"}),"\n",(0,r.jsx)(n.li,{children:"file-loader"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This method is usually used when you need to reuse the same dependency with the builder."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"Builder built-in dependencies are subject to change with version iterations, e.g. generate large version break changes. Please avoid using this API if it is not necessary."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { getCompiledPath }) => {\n      const loaderPath = getCompiledPath('less-loader');\n      // ...\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"chain_id",children:["CHAIN_ID",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Some common Chain IDs are predefined in the Builder, and you can use these IDs to locate the built-in Rule or Plugin."}),"\n",(0,r.jsxs)(n.h5,{id:"chain_idrule",children:["CHAIN_ID.RULE",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idrule",children:"#"})]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.MJS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"mjs"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.JS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"js"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.TS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"ts"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.CSS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"css"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.LESS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"less"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.SASS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"sass"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.PUG"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"pug"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.TOML"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"toml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.YAML"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"yaml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.FONT"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"font"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.IMAGE"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"image"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.MEDIA"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"media"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idone_of",children:["CHAIN_ID.ONE_OF",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idone_of",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ONE_OF.XXX"})," can match a certain type of rule in the rule array."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, output as a separate file"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, inlined into bundles as data URIs"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_iduse",children:["CHAIN_ID.USE",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_iduse",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"USE.XXX"})," can match a certain loader."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.TS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"ts-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.CSS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"css-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.LESS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"less-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.SASS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"sass-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.PUG"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"pug-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.TOML"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"toml-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.YAML"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"yaml-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.FILE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"file-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.URL"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"url-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.SVGR"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"@svgr/webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.BABEL"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"babel-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.STYLE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"style-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.POSTCSS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"postcss-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.MARKDOWN"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"markdown-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.CSS_MODULES_TS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"css-modules-typescript-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.MINI_CSS_EXTRACT"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"mini-css-extract-plugin.loader"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idplugin",children:["CHAIN_ID.PLUGIN",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PLUGIN.XXX"})," can match a certain webpack plugin."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.HMR"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"HotModuleReplacementPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.COPY"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"CopyWebpackPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.HTML"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"HtmlWebpackPlugin"}),", you need to splice the entry name when using: ",(0,r.jsx)(n.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.DEFINE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"DefinePlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.IGNORE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"IgnorePlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.BANNER"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"BannerPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.PROGRESS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"Webpackbar"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.APP_ICON"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"AppIconPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.LOADABLE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"LoadableWebpackPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.MANIFEST"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"WebpackManifestPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.TS_CHECKER"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"ForkTsCheckerWebpackPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.INLINE_HTML"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"InlineChunkHtmlPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.BOTTOM_TEMPLATE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"BottomTemplatePlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.MINI_CSS_EXTRACT"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"MiniCssExtractPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.REACT_FAST_REFRESH"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"ReactFastRefreshPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.NODE_POLYFILL_PROVIDE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"ProvidePlugin"})," for node polyfills"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.INSPECTOR"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"@modern-js/inspector-webpack-plugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.SUBRESOURCE_INTEGRITY"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"webpack-subresource-integrity"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.ASSETS_RETRY"})}),"\n",(0,r.jsx)(n.td,{children:"correspond to webpack static asset retry plugin in Builder"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.AUTO_SET_ROOT_SIZE"})}),"\n",(0,r.jsx)(n.td,{children:"correspond to automatically set root font size plugin in Builder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idminimizer",children:["CHAIN_ID.MINIMIZER",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idminimizer",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MINIMIZER.XXX"})," can match a certain minimizer."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MINIMIZER.JS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"TerserWebpackPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MINIMIZER.CSS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"CssMinimizerWebpackPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MINIMIZER.ESBUILD"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"ESBuildPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MINIMIZER.SWC"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"SwcWebpackPlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"examples",children:["Examples",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The following are some common configuration examples, see the full webpack-chain API ",(0,r.jsx)(n.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"webpack-chain documentation"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"add/modify/delete-loader",children:["Add/Modify/Delete loader",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add/modify/delete-loader",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // Add loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n\n      // Modify loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n\n      // Delete loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"add/modify/delete-plugin",children:["Add/Modify/Delete plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add/modify/delete-plugin",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // Add plugin\n      chain.plugin('custom-define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n\n      // Modify plugin\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n\n      // Delete plugin\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},26161:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return h},default:function(){return t}});var r=d("9880"),s=d("23169"),c=d.ir(d("76683")),i={sidebar_label:"webpackChain"},l="tools.webpackChain",h=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolswebpackchain",children:["tools.webpackChain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpackchain",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:"tools.webpackChain"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);