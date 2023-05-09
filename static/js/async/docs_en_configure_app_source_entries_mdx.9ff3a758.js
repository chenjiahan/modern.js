(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_entries_mdx"],{65417:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return o},default:function(){return a}});var s=t("12151"),r=t("23169"),i={sidebar_label:"entries"},c="source.entries",o=[{text:"String",depth:2,id:"string"},{text:"Object",depth:2,id:"object"},{text:"Disable entry file generation",depth:3,id:"disable-entry-file-generation"},{text:"Conventional Routing",depth:3,id:"conventional-routing"},{text:"Entry Merge Rules",depth:2,id:"entry-merge-rules"}];function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"source-entries",children:["source.entries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-entries",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<\n  string,\n  | string\n  | {\n      entry: string;\n      disableMount?: boolean;\n      customBootstrap?: string;\n    }\n>;\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," An entry object calculated from the directory structure of the current project."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Used to configure custom page entries."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"When to use"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["For most scenarios, the entries automatically generated by Modern.js according to the directory structure can already meet the requirements. For details, please refer to ",(0,s.jsx)(n.a,{href:"/guides/concept/entries",children:"entries"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to customize the page entry, you can set it through this option."}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"string",children:["String",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value of ",(0,s.jsx)(n.code,{children:"entries"})," object is ",(0,s.jsx)(n.code,{children:"string"})," type, it means the file path of the entry module:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // Specify a new entry named entry_customize\n      entry_customize: './src/home/test/index.ts',\n    },\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the configured entry is equivalent to ",(0,s.jsx)(n.code,{children:"App.[jt]sx"}),", that is, the specified entry file ",(0,s.jsx)(n.strong,{children:"only needs to export the root component of the application"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── entry\n│       ├── chat.tsx\n│       └── home.tsx\n└── package.json\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"The above directory does not conform to the directory structure convention of Modern.js, therefore, Modern.js will not get any default entry when analyzing the directory structure."}),"\n",(0,s.jsxs)(n.p,{children:["In cases where you do not want to change the directory structure (such as project migration), you can customize the entry through ",(0,s.jsx)(n.code,{children:"source.entries"}),":"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      home: './src/entry/home.tsx',\n      chat: './src/entry/chat.tsx',\n    },\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"object",children:["Object",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value is ",(0,s.jsx)(n.code,{children:"Object"}),", the following properties can be configured:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"entry"}),": ",(0,s.jsx)(n.code,{children:"string"}),", entry file path."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disableMount"}),": ",(0,s.jsx)(n.code,{children:"boolean = false"}),", turn off the entry-scanning behavior of Modern.js."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"customBootstrap"}),": ",(0,s.jsx)(n.code,{children:"string = ''"}),", ",(0,s.jsx)(n.a,{href:"/guides/concept/entries#custom-bootstrap",children:"Custom Bootstrap"})," file path。"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      entry_customize: {\n        // entry file path\n        entry: './src/home/test/App.tsx',\n      },\n    },\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"disable-entry-file-generation",children:["Disable entry file generation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-entry-file-generation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the configured entry is equivalent to ",(0,s.jsx)(n.code,{children:"App.[jt]sx"}),", and Modern.js will automatically generate an entry file to reference your configured entry."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to disable the logic of Modern.js automatically generating the entry file, you can set the ",(0,s.jsx)(n.code,{children:"disableMount"})," property to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      entry_customize: {\n        entry: './src/home/test/index.tsx',\n        disableMount: true,\n      },\n    },\n    // Disable default ingress scanning\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"conventional-routing",children:["Conventional Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to enable conventional routing for a custom entry, you can set ",(0,s.jsx)(n.code,{children:"entry"})," to a directory path:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // enable conventional routing\n      entry_spa: {\n        // The entry path of conventional routing must be set to a directory\n        entry: './src/about',\n      },\n    },\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"entry-merge-rules",children:["Entry Merge Rules",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-merge-rules",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["After setting ",(0,s.jsx)(n.code,{children:"source.entries"}),", if ",(0,s.jsx)(n.code,{children:"disableDefaultEntries: true"})," is not set, Modern.js will merge the custom entry with the entry obtained by analyzing the directory structure."]}),"\n",(0,s.jsx)(n.p,{children:"The merge rule is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Compare the entry path set by the custom entry with the default entry path. When the entry path is consistent, the custom entry will override the default entry."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   ├── chat\n│   │   └── App.tsx\n│   └── home\n│       └── index.ts\n└── package.json\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js will analyze the ",(0,s.jsx)(n.code,{children:"src/"})," directory to get the default entries ",(0,s.jsx)(n.code,{children:"chat"})," and ",(0,s.jsx)(n.code,{children:"home"}),". When the user configures the following in the ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," file:"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      index: './src/home/index.ts',\n    },\n  },\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can see that the path of the custom entry ",(0,s.jsx)(n.code,{children:"index"})," is the same as the path of the default entry ",(0,s.jsx)(n.code,{children:"home"}),". During the merging process, ",(0,s.jsx)(n.code,{children:"index"})," will override ",(0,s.jsx)(n.code,{children:"home"}),", and the final entry is as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"chat -> ./src/chat/App.tsx"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"index -> ./src/home/index.ts"})}),"\n"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);