(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_optimization_optimize-bundle_md"],{32699:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}});var r,s=i("15169"),a=i("43932"),d=i("9880"),t=i("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"bundle-size-optimization",children:["Bundle Size Optimization",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-size-optimization",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Bundle size optimization is an important part in production environment because it directly affects the user experience of online users. In this document, we will introduce some common bundle size optimization methods in Builder."}),"\n",(0,d.jsxs)(n.h2,{id:"reduce-duplicate-dependencies",children:["Reduce duplicate dependencies",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reduce-duplicate-dependencies",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"In real projects, there will be some third-party dependencies installed with multiple versions. Duplicate dependencies can lead to larger bundles and slower builds."}),"\n",(0,d.jsx)(n.p,{children:"We can detect or eliminate duplicate dependencies with some community tools."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If you are using ",(0,d.jsx)(n.code,{children:"pnpm >= 7.26.0"}),", you can use the ",(0,d.jsx)(n.a,{href:"https://pnpm.io/cli/dedupe",target:"_blank",rel:"noopener noreferrer",children:"pnpm dedupe"})," command to upgrade and eliminate duplicate dependencies."]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm dedupe\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If you are using ",(0,d.jsx)(n.code,{children:"pnpm < 7.26.0"}),", you can use ",(0,d.jsx)(n.a,{href:"https://github.com/ocavue/pnpm-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"pnpm-deduplicate"})," to analyze all duplicate dependencies, then update dependencies or declare ",(0,d.jsx)(n.a,{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer",children:"pnpm overrides"})," to merge duplicated dependencies."]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npx pnpm-deduplicate --list\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If you are using ",(0,d.jsx)(n.code,{children:"yarn"}),", you can use ",(0,d.jsx)(n.a,{href:"https://github.com/scinos/yarn-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"yarn-deduplicate"})," to automatically merge duplicated dependencies:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npx yarn-deduplicate && yarn\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"use-lightweight-libraries",children:["Use lightweight libraries",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-lightweight-libraries",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["It is recommended to using lightweight libraries in your project, such as replacing ",(0,d.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment"})," with ",(0,d.jsx)(n.a,{href:"https://day.js.org/",target:"_blank",rel:"noopener noreferrer",children:"day.js"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["If you want to find out the large libraries in the project, you can add the ",(0,d.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"})," environment variable when building:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"BUNDLE_ANALYZE=true pnpm build\n"})}),"\n",(0,d.jsxs)(n.p,{children:["See the ",(0,d.jsx)(n.a,{href:"/api/config-performance#performancebundleanalyze",children:"performance.bundleAnalyze"})," configuration for details."]}),"\n",(0,d.jsxs)(n.h2,{id:"adjust-browserslist",children:["Adjust Browserslist",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-browserslist",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"The Builder will compile the code according to the project's Browserslist config, and inject some Polyfills. If the project does not need to be compatible with legacy browsers, you can adjust the Browserslist and drop some legacy browsers, thereby reducing the compilation overhead on syntax and polyfill."}),"\n",(0,d.jsx)(n.p,{children:"Builder's default Browserslist config is:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})}),"\n",(0,d.jsx)(n.p,{children:"For example, if you only need to be compatible with browsers above Chrome 61, you can change it to:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"['Chrome >= 61'];\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["Please read the ",(0,d.jsx)(n.a,{href:"/guide/advanced/browserslist",children:"Browserslist"})," chapter to know more about the usage of Browserslist.\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"usage-polyfill",children:["Usage polyfill",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-polyfill",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When it is clear that third-party dependencies do not require additional polyfill, you can set ",(0,d.jsx)(n.a,{href:"/en/api/config-output#outputpolyfill",children:"output.polyfill"})," to ",(0,d.jsx)(n.code,{children:"usage"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.code,{children:"usage"})," mode, Builder analyzes the syntax used in the source code and injects the required polyfill code on demand to reduce the size of polyfill."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    polyfill: 'usage',\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["Please read the ",(0,d.jsx)(n.a,{href:"/guide/advanced/browser-compatibility",children:"Browser Compatibility"})," chapter to know more about the usage of Browserslist.\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"image-compression",children:["Image Compression",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compression",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"In general front-end projects, the size of image often accounts for a large proportion of the total bundle size of the project.So if the image size can be reduced as much as possible, it will have a significant optimization effect on the project bundle size. You can enable image compression by registering a plugin in the Builder:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\n// Add the plugin to the Builder\nbuilder.addPlugins([builderPluginImageCompress()]);\n"})}),"\n",(0,d.jsxs)(n.p,{children:["See details in ",(0,d.jsx)(n.a,{href:"/en/plugins/plugin-image-compress",children:"plugin-image-compress"}),"."]}),"\n",(0,d.jsxs)(n.h2,{id:"split-chunk",children:["Split Chunk",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-chunk",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"A great chunk splitting strategy is very important to improve the loading performance of the application. It can make full use of the browser's caching mechanism to reduce the number of requests and improve the loading speed of the application."}),"\n",(0,d.jsxs)(n.p,{children:["A variety of ",(0,d.jsx)(n.a,{href:"/en/guide/optimization/split-chunk",children:"chunk splitting strategies"})," are built into Builder, which can meet the needs of most applications. You can also customize the chunk splitting config according to your own business scenarios."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, split the ",(0,d.jsx)(n.code,{children:"axios"})," library under node_modules into ",(0,d.jsx)(n.code,{children:"axios.js"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Foptimization%2Foptimize-bundle.md"]={toc:[{text:"Reduce duplicate dependencies",id:"reduce-duplicate-dependencies",depth:2},{text:"Use lightweight libraries",id:"use-lightweight-libraries",depth:2},{text:"Adjust Browserslist",id:"adjust-browserslist",depth:2},{text:"Usage polyfill",id:"usage-polyfill",depth:2},{text:"Image Compression",id:"image-compression",depth:2},{text:"Split Chunk",id:"split-chunk",depth:2}],title:"Bundle Size Optimization",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,a._)((0,s._)({},e),{children:(0,d.jsx)(l,(0,s._)({},e))})):l(e)}}}]);