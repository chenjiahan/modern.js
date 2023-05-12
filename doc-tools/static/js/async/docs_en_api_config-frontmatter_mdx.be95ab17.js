(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-frontmatter_mdx"],{53971:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},toc:function(){return r},title:function(){return c},default:function(){return l}});var t=s("9880"),a=s("23169"),i=void 0,r=[{id:"title",text:"title",depth:2},{id:"description",text:"description",depth:2},{id:"pagetype",text:"pageType",depth:2},{id:"hero",text:"hero",depth:2},{id:"features",text:"features",depth:2}],c="Front Matter Config";function d(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",div:"div",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"front-matter-config",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter-config",children:"#"}),"Front Matter Config"]}),"\n",(0,t.jsxs)(n.h2,{id:"title",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The title of the page. By default, the page's h1 heading will be used as the title of the HTML document. But if you want to use a different title, you can use Front Matter to specify the title of the page. For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-yaml",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: My Home Page\n---\n"})})})]}),"\n",(0,t.jsxs)(n.h2,{id:"description",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"description"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A custom description for the page. For example:"}),"\n",(0,t.jsxs)(n.div,{className:"language-yaml",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\ndescription: This is my custom description for this page.\n---\n"})})})]}),"\n",(0,t.jsxs)(n.h2,{id:"pagetype",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pagetype",children:"#"}),"pageType"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"'home' | 'doc' | 'custom' | '404'"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"'doc'"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The type of page. By default, the page type is ",(0,t.jsx)(n.code,{children:"doc"}),". But if you want to use a different page type, you can specify the page type with something preceding ",(0,t.jsx)(n.code,{children:"pageType"}),". For example:"]}),"\n",(0,t.jsxs)(n.div,{className:"language-yaml",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n---\n"})})})]}),"\n",(0,t.jsxs)(n.h2,{id:"hero",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hero",children:"#"}),"hero"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The hero config for the home page. It has the following types:"}),"\n",(0,t.jsxs)(n.div,{className:"language-ts",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface Hero {\n  name: string;\n  text: string;\n  tagline: string;\n  image?: {\n    src: string;\n    alt: string;\n  };\n  actions: {\n    text: string;\n    link: string;\n    theme: 'brand' | 'alt';\n  }[];\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"For example, you can use the following Front Matter to specify a page's hero config:"}),"\n",(0,t.jsxs)(n.div,{className:"language-yaml",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n\nhero:\n  name: Modern.js Doc\n  text: A documentation solution\n  tagline: A modern documentation development technology stack\n  actions:\n    - theme: brand\n      text: Introduction\n      link: /en/guide/introduction\n    - theme: alt\n      text: Quick Start\n      link: /en/guide/getting-started\n---\n"})})})]}),"\n",(0,t.jsxs)(n.h2,{id:"features",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"features"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"Array"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["features config of the ",(0,t.jsx)(n.code,{children:"home"})," page. It has the following types:"]}),"\n",(0,t.jsxs)(n.div,{className:"language-ts",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface Feature {\n  title: string;\n  details: string;\n  icon: string;\n  // The link of the feature, not required.\n  link?: string;\n}\n\nexport type Features = Feature[];\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you could use the following to specify the features configuration for the ",(0,t.jsx)(n.code,{children:"home"})," page:"]}),"\n",(0,t.jsxs)(n.div,{className:"language-yaml",children:[(0,t.jsx)(n.div,{className:""}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\npageType: home\n\nfeatures:\n  - title: 'MDX Support'\n    details: MDX is a powerful way to write content. You can use React components in Markdown.\n    icon: \uD83D\uDCE6\n  - title: 'Feature Rich'\n    details: Out of box support for i18n, full-text search etc.\n    icon: \uD83C\uDFA8\n  - title: 'Customizable'\n    details: You can customize the theme ui and the build process.\n    icon: \uD83D\uDE80\n---\n"})})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);