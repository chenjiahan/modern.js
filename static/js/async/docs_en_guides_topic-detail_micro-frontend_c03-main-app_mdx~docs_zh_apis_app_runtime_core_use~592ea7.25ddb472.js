(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_micro-frontend_c03-main-app_mdx~docs_zh_apis_app_runtime_core_use~592ea7"],{11057:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var t=s("12151"),a=s("21447");function c(e){var n=Object.assign({div:"div",button:"button",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [{\n      name: 'Table',\n      entry: 'http://localhost:8001',\n      // activeWhen: '/table'\n    }, {\n      name: 'Dashboard',\n      entry: 'http://localhost:8002'\n      // activeWhen: '/dashboard'\n    }]\n  },\n});\n"})})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);