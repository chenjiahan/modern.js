(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_build-cache_mdx"],{6165:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return o}});var r,s=c("15169"),i=c("43932"),a=c("9880"),l=c("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * Base directory for the filesystem cache.\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Bundler:"})," ",(0,a.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Controls the Builder's caching behavior during the build process."}),"\n",(0,a.jsxs)(n.p,{children:["Builder will enable build cache by default to improve the compile speed, the generated cache files are write to the ",(0,a.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory by default."]}),"\n",(0,a.jsxs)(n.p,{children:["You can configure the cache path with ",(0,a.jsx)(n.code,{children:"buildCache"}),", e.g."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also disable the build cache by setting it to ",(0,a.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fperformance%2FbuildCache.md"]={toc:[],title:"",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(d,(0,s._)({},e))})):d(e)}},36061:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return t}});var r,s=c("15169"),i=c("43932"),a=c("9880"),l=c("23169"),d=c("6165");function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"performancebuildcache",children:["performance.buildCache",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebuildcache",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performancebuildcache",target:"_blank",rel:"noopener noreferrer",children:"performance.buildCache"}),".\n"]})})]}),"\n","\n",(0,a.jsx)(d.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fbuild-cache.mdx"]={toc:[],title:"performance.buildCache",frontmatter:{sidebar_label:"buildCache"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(o,(0,s._)({},e))})):o(e)}}}]);