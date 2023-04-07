(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-performance_mdx3"],{10914:function(e,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var c in n)Object.defineProperty(e,c,{enumerable:!0,get:n[c]})}(n,{frontmatter:function(){return l},title:function(){return r},toc:function(){return o},default:function(){return i}});var s=c("12151"),a=c("21447"),l={},r="",o=[];function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * Base directory for the filesystem cache.\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Controls the Builder's caching behavior during the build process."}),"\n",(0,s.jsxs)(n.p,{children:["Builder will enable build cache by default to improve the compile speed, the generated cache files are write to the ",(0,s.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory by default."]}),"\n",(0,s.jsxs)(n.p,{children:["You can configure the cache path with ",(0,s.jsx)(n.code,{children:"buildCache"}),", e.g."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["You can also disable the build cache by setting it to ",(0,s.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);