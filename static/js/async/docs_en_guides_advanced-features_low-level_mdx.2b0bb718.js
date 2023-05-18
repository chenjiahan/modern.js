(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_low-level_mdx"],{42514:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return l},default:function(){return c}});var s=r("9880"),t=r("23169"),o={title:"Low-Level Tools",sidebar_position:11},i="Low-Level Tools",l=[{text:"Usage",depth:2,id:"usage"},{text:"Low-level Configuration Details",depth:2,id:"low-level-configuration-details"}];function d(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"low-level-tools",children:["Low-Level Tools",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#low-level-tools",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js internally integrates tools such as ",(0,s.jsx)(n.a,{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer",children:"Babel"}),", ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer",children:"TypeScript"}),", ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Webpack"}),", ",(0,s.jsx)(n.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"}),", ",(0,s.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," by default."]}),"\n",(0,s.jsx)(n.p,{children:"Usually, the default configuration can meet most development needs. When there are special needs, it can be achieved through the underlying configuration."}),"\n",(0,s.jsxs)(n.p,{children:["Take configuring Webpack as an example, just add ",(0,s.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})," to the modern.config.ts:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  tools: {\n    webpack: config => {},\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Configurations in the ",(0,s.jsx)(n.code,{children:"tools"})," can be set to ",(0,s.jsx)(n.code,{children:"Object"})," or ",(0,s.jsx)(n.code,{children:"Function"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When the value is ",(0,s.jsx)(n.code,{children:"Object"}),", it will be merged with the default configuration. For the specific merging strategy, refer to the configuration options document (see table below)."]}),"\n",(0,s.jsxs)(n.p,{children:["When the value is ",(0,s.jsx)(n.code,{children:"Function"}),", the first parameter is the default configuration value. You can directly modify this object without returning it, or you can return a new object or a merged object as the final result."]}),"\n",(0,s.jsxs)(n.h2,{id:"low-level-configuration-details",children:["Low-level Configuration Details",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#low-level-configuration-details",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Currently provided is as follows:"}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"Tools"}),"\n",(0,s.jsx)(n.th,{children:"Config"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"DevServer"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/dev-server",children:"tools.devServer"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Babel"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"styled-components"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"PostCSS"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/postcss",children:"tools.postcss"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Less"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/less",children:"tools.less"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Sass"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/sass",children:"tools.sass"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"webpack"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Minify CSS"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/minify-css",children:"tools.minifyCss"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"terser"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/terser",children:"tools.terser"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Tailwind CSS"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/tailwindcss",children:"tools.tailwind"})}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:"Autoprefixer"}),"\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/configure/app/tools/autoprefixer",children:"tools.autoprefixer"})}),"\n"]}),"\n"]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);