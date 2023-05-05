(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-build_mdx~docs_en_guide_use-mdx_mdx"],{30125:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var s=o("12151"),t=o("23169");function r(e){var n=Object.assign({div:"div",button:"button",pre:"pre",code:"code",p:"p",a:"a",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      experimentalMdxRs: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTICE"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["The bottom layer of this function is based on the ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/mdx-rs-binding",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/mdx-rs-binding"})," library developed by Modern.js Doc. The performance is ",(0,s.jsx)(n.strong,{children:"5 ~ 10"})," times higher than the JS version of the MDX compiler, but the JS version of the plugin is not yet supported. If you need to add a custom remark or rehype plugin, it is not recommended to enable this function.\n"]})})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);