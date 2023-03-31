(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_source_disable-entry-dirs_mdx"],{36394:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return o},default:function(){return l}});var r=s("12151"),i=s("21447");let t={sidebar_label:"disableEntryDirs"},c="source.disableEntryDirs",o=[];function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source.disableentrydirs",children:["source.disableEntryDirs",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source.disableentrydirs",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, application entries are identified based on the ",(0,r.jsx)(n.code,{children:"src"})," directory, you can disable some directories from being identified as application entries with this option."]}),"\n",(0,r.jsx)(n.p,{children:"For example, when the configuration and directory structure is as follows:"}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableEntryDirs: './src/one',\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"Project"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",meta:'title="Project directory structure"',children:"└── src/\n    ├── one/\n    |    └── App.tsx\n    ├── two/\n    |    └── routes/\n    └── env.d.ts\n"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"When this option is not set, Modern.js will generate two entries based on the project directory:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"one"}),"\n",(0,r.jsx)(n.li,{children:"two"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When this option is set, ",(0,r.jsx)(n.code,{children:"src/one"})," will not be recognized as an entry directory."]}),"\n",(0,r.jsxs)(n.p,{children:["A common usage is to configure the ",(0,r.jsx)(n.code,{children:"src/common"}),", ",(0,r.jsx)(n.code,{children:"src/components"})," directories to this option to avoid these directories being recognized as application entries."]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);