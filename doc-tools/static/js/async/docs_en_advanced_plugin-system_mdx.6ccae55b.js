(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_advanced_plugin-system_mdx"],{42781:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return t},default:function(){return d}});var l=i("12151"),s=i("23169"),o={},a="Plugin System",t=[{text:"A simple plugin example",depth:2,id:"a-simple-plugin-example"},{text:"1. Define a plugin",depth:3,id:"1--define-a-plugin"},{text:"2. Use the plugin",depth:3,id:"2--use-the-plugin"},{text:"Plugin API",depth:2,id:"plugin-api"},{text:"1. globalStyles",depth:3,id:"1--globalstyles"},{text:"2. globalUIComponents",depth:3,id:"2--globaluicomponents"},{text:"3. builderConfig",depth:3,id:"3--builderconfig"},{text:"4. config",depth:3,id:"4--config"},{text:"5. beforeBuild",depth:3,id:"5--beforebuild"},{text:"6. afterBuild",depth:3,id:"6--afterbuild"},{text:"7. markdown",depth:3,id:"7--markdown"}];function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"plugin-system",children:["Plugin System",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-system",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"In order to ensure the scalability of the framework, we provide a plugin system, through which you can implement many custom functions."}),"\n",(0,l.jsxs)(n.h2,{id:"a-simple-plugin-example",children:["A simple plugin example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#a-simple-plugin-example",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"We inject a global component as an example to see how to define and use plugins."}),"\n",(0,l.jsxs)(n.h3,{id:"1--define-a-plugin",children:["1. Define a plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1--define-a-plugin",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginMonitor(slug: string): DocPlugin {\n  // component path\n  const componentPath = path.join(__dirname, 'some-component.tsx');\n  return {\n    // plugin name\n    name: 'plugin-monitor',\n    // global component path\n    globalUIComponents: [componentPath],\n    // extend Modern.js Builder's build ability\n    builderConfig: {\n      source: {\n        define: {\n          SLUG: JSON.stringify(slug),\n        },\n      },\n    },\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"2--use-the-plugin",children:["2. Use the plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2--use-the-plugin",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="modern.config.ts"',children:"import { pluginMonitor } from './plugin';\n\nexport default {\n  doc: {\n    plugins: [pluginMonitor('test')],\n  },\n};\n"})})]})]}),"\n",(0,l.jsxs)(n.h2,{id:"plugin-api",children:["Plugin API",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["In the above example, we use ",(0,l.jsx)(n.code,{children:"globalComponents"})," to inject a global component, and use ",(0,l.jsx)(n.code,{children:"builderConfig"})," to extend the build config of ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"However, these are only part of the plug-in capabilities. We can sort out the plugin abilities of Modern.js Doc:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#1-globalstyles",children:"globalStyles"}),": inject global styles."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#2-globaluicomponents",children:"globalUIComponents"}),": inject global components."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#3-builderconfig",children:"builderConfig"}),": extend the build config of Modern.js Builder."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#4-config",children:"config"}),": extend the config of Modern.js Doc itself."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#5-beforebuild",children:"beforeBuild"}),": hook before build."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#6-afterbuild",children:"afterBuild"}),": hook after build."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#7-markdown",children:"markdown"}),": extend the Markdown/MDX compile ability."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Then we will introduce each of these abilities."}),"\n",(0,l.jsxs)(n.h3,{id:"1--globalstyles",children:["1. globalStyles",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1--globalstyles",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  // style path\n  const stylePath = path.join(__dirname, 'some-style.css');\n  return {\n    // plugin name\n    name: 'plugin-name',\n    // global style path\n    globalStyles: [stylePath],\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"2--globaluicomponents",children:["2. globalUIComponents",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2--globaluicomponents",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  // component path\n  const componentPath = path.join(__dirname, 'some-component.tsx');\n  return {\n    name: 'plugin-name',\n    // global component path\n    globalUIComponents: [componentPath],\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"3--builderconfig",children:["3. builderConfig",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3--builderconfig",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(slug: string): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // extend Modern.js Builder's build ability\n    builderConfig: {\n      source: {\n        define: {\n          SLUG: JSON.stringify(slug),\n        },\n      },\n    },\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"4--config",children:["4. config",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4--config",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    config(config) {\n      return {\n        ...config,\n        // Here you can extend the config of Modern.js Doc\n      };\n    },\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"5--beforebuild",children:["5. beforeBuild",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5--beforebuild",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Hook to execute before build\n    beforeBuild() {\n      // do something\n    },\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"6--afterbuild",children:["6. afterBuild",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6--afterbuild",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Hooks to execute after build\n    afterBuild() {\n      // do something\n    },\n  };\n}\n"})})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"7--markdown",children:["7. markdown",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#7--markdown",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"language-",children:[(0,l.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginForDoc(): DocPlugin {\n  return {\n    name: 'plugin-name',\n    // Extend the Markdown/MDX compile ability\n    markdown: {\n      remarkPlugins: [\n        // Add custom remark plugins\n      ],\n      rehypePlugins: [\n        // Add custom rehype plugins\n      ],\n    },\n  };\n}\n"})})]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(r,e)})):r(e)}}}]);