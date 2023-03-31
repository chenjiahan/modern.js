(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_config_performance_chunkSplit_md"],{21870:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return r},default:function(){return a}});var i=s("12151"),c=s("21447");let l={},t="",r=[{text:"chunkSplit.strategy",depth:3,id:"chunksplit.strategy"},{text:"Default Strategy",depth:3,id:"default-strategy"},{text:"chunkSplit.minSize",depth:3,id:"chunksplit.minsize"},{text:"chunkSplit.maxSize",depth:3,id:"chunksplit.maxsize"},{text:"chunkSplit.forceSplitting",depth:3,id:"chunksplit.forcesplitting"},{text:"chunkSplit.splitChunks",depth:3,id:"chunksplit.splitchunks"},{text:"chunkSplit.override",depth:3,id:"chunksplit.override"}];function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"{ strategy: 'split-by-experience' }"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"performance.chunkSplit"})," is used to configure the chunk splitting strategy. The type of ",(0,i.jsx)(n.code,{children:"ChunkSplit"})," is as follows:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"type ForceSplitting = RegExp[] | Record<string, RegExp>;\n\ninterface BaseChunkSplit {\n  strategy?:\n    | 'split-by-module'\n    | 'split-by-experience'\n    | 'all-in-one'\n    | 'single-vendor';\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitBySize {\n  strategy?: 'split-by-size';\n  minSize?: number;\n  maxSize?: number;\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitCustom {\n  strategy?: 'custom';\n  splitChunks?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\nexport type ChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"chunksplit.strategy",children:["chunkSplit.strategy",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit.strategy",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Builder supports the following chunk splitting strategies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"split-by-experience"}),": an empirical splitting strategy, automatically splits some commonly used npm packages into chunks of moderate size."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"split-by-module"}),": split by NPM package granularity, each NPM package corresponds to a chunk."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"split-by-size"}),": automatically split according to module size."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"all-in-one"}),": bundle all codes into one chunk."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"single-vendor"}),": bundle all NPM packages into a single chunk."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"custom"}),": custom chunk splitting strategy."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"default-strategy",children:["Default Strategy",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-strategy",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Builder adopts the ",(0,i.jsx)(n.code,{children:"split-by-experience"})," strategy by default, which is a strategy we have developed from experience. Specifically, when the following npm packages are referenced in your project, they will automatically be split into separate chunks:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-polyfill.js"}),": includes ",(0,i.jsx)(n.code,{children:"core-js"}),", ",(0,i.jsx)(n.code,{children:"@babel/runtime"}),", ",(0,i.jsx)(n.code,{children:"@swc/helpers"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-react.js"}),": includes ",(0,i.jsx)(n.code,{children:"react"}),", ",(0,i.jsx)(n.code,{children:"react-dom"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-router.js"}),": includes ",(0,i.jsx)(n.code,{children:"react-router"}),", ",(0,i.jsx)(n.code,{children:"react-router-dom"}),", ",(0,i.jsx)(n.code,{children:"history"}),", ",(0,i.jsx)(n.code,{children:"@remix-run/router"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-lodash.js"}),": includes ",(0,i.jsx)(n.code,{children:"lodash"}),", ",(0,i.jsx)(n.code,{children:"lodash-es"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-antd.js"}),": includes ",(0,i.jsx)(n.code,{children:"antd"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-arco.js"}),": includes ",(0,i.jsx)(n.code,{children:"@arco-design/web-react"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib-semi.js"}),": includes ",(0,i.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:"If the above npm packages are not installed or used in the project, the corresponding chunk will not be generated."})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use other splitting strategies, you can specify it via ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.strategy"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["The ",(0,i.jsx)(n.code,{children:"split-by-module"})," strategy is not supported when using Rspack as the bundler.\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"chunksplit.minsize",children:["chunkSplit.minSize",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit.minsize",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"10000"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,i.jsx)(n.code,{children:"split-by-size"}),", you can specify the minimum size of a chunk via ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.minSize"}),", the unit is bytes. The default value is ",(0,i.jsx)(n.code,{children:"10000"}),". For example:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 20000,\n    },\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"chunksplit.maxsize",children:["chunkSplit.maxSize",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit.maxsize",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"number"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,i.jsx)(n.code,{children:"split-by-size"}),", you can specify the maximum size of a chunk via ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.maxSize"}),", the unit is bytes. The default value is ",(0,i.jsx)(n.code,{children:"Infinity"}),". For example:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      maxSize: 50000,\n    },\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"chunksplit.forcesplitting",children:["chunkSplit.forceSplitting",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit.forcesplitting",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"RegExp[] | Record<string, RegExp>"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Via ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.forceSplitting"}),", you can specify the NPM packages that need to be forced to split."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, split the ",(0,i.jsx)(n.code,{children:"axios"})," library under node_modules into ",(0,i.jsx)(n.code,{children:"axios.js"}),":"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n   performance: {\n     chunkSplit: {\n       strategy: 'split-by-experience',\n       forceSplitting: {\n         axios: /node_modules\\/axios/,\n       },\n     },\n   },\n};\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"This is an easier way than configuring webpack's splitChunks directly."}),"\n",(0,i.jsxs)(n.h3,{id:"chunksplit.splitchunks",children:["chunkSplit.splitChunks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit.splitchunks",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,i.jsx)(n.code,{children:"custom"}),", you can specify the custom webpack chunk splitting config via ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.splitChunks"}),". This config will be merged with the webpack splitChunks config (the ",(0,i.jsx)(n.code,{children:"cacheGroups"})," config will also be merged). For example:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'custom',\n      splitChunks: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.h3,{id:"chunksplit.override",children:["chunkSplit.override",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplit.override",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,i.jsx)(n.code,{children:"split-by-experience"}),", ",(0,i.jsx)(n.code,{children:"split-by-module"}),", ",(0,i.jsx)(n.code,{children:"split-by-size"})," or ",(0,i.jsx)(n.code,{children:"single-vendor"}),", you can specify the custom webpack chunk splitting config via ",(0,i.jsx)(n.code,{children:"performance.chunkSplit.override"}),". This config will be merged with the webpack splitChunks config (the ",(0,i.jsx)(n.code,{children:"cacheGroups"})," config will also be merged). For example:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'When the Builder target is "node", since Node Bundles do not need to be splitted to optimize loading performance, the chunkSplit rule will not take effect.'}),"\n"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);