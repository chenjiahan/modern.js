(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_deploy_microFrontend_mdx"],{11516:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,t=r("15169"),s=r("43932"),l=r("9880"),d=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",div:"div",h2:"h2",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"deploymicrofrontend",children:["deploy.microFrontend",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploymicrofrontend",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"object"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"{ enableHtmlEntry: true, externalBasicLibrary: false }"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"interface MicroFrontend {\n  enableHtmlEntry?: boolean;\n  externalBasicLibrary?: boolean;\n  moduleApp?: string;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Developers can configure micro-frontend sub-application information using the ",(0,l.jsx)(n.code,{children:"deploy.microFrontend"})," object."]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive caution",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,l.jsxs)(n.div,{className:"modern-directive-content",children:[(0,l.jsxs)(n.p,{children:['To enable the "Micro Frontend" features, run ',(0,l.jsx)(n.code,{children:"pnpm run new"})," first."]}),"\n"]})]}),"\n",(0,l.jsxs)(n.h2,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  deploy: {\n    microFrontend: {\n      enableHtmlEntry: true,\n    },\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"enablehtmlentry",children:["enableHtmlEntry",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enablehtmlentry",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Specifies whether to enable the HTML entry. By default, it is set to ",(0,l.jsx)(n.code,{children:"true"}),", which means the sub-application is built in ",(0,l.jsx)(n.code,{children:"HTML"})," mode. Garfish supports the ",(0,l.jsx)(n.code,{children:"html"})," entry, so you can enable this option to experience the corresponding features. When using the HTML entry, simply point the sub-application entry to the HTML file."]}),"\n",(0,l.jsxs)(n.p,{children:["Set it to ",(0,l.jsx)(n.code,{children:"false"})," to indicate that the sub-application is built as ",(0,l.jsx)(n.code,{children:"js"}),". After building the sub-application as ",(0,l.jsx)(n.code,{children:"js"}),", it cannot run independently. When using the ",(0,l.jsx)(n.code,{children:"JS"})," entry, point the entry file of the sub-application to the ",(0,l.jsx)(n.code,{children:"JS"})," file of the sub-application."]}),"\n",(0,l.jsxs)(n.h3,{id:"externalbasiclibrary",children:["externalBasicLibrary",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#externalbasiclibrary",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Specifies whether to use the external base library. When set to ",(0,l.jsx)(n.code,{children:"true"}),", the current child application will be externalized for ",(0,l.jsx)(n.code,{children:"react"})," and ",(0,l.jsx)(n.code,{children:"react-dom"}),". The main application of Modern.js will automatically ",(0,l.jsx)(n.code,{children:"setExternal"})," these two base libraries. If you are using other frameworks, please add ",(0,l.jsx)(n.code,{children:"react"})," and ",(0,l.jsx)(n.code,{children:"react-dom"})," dependencies through ",(0,l.jsx)(n.code,{children:"Garfish.setExternal"}),"."]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/configure/app/deploy/microFrontend.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"Configuration",id:"configuration",depth:2},{text:"enableHtmlEntry",id:"enablehtmlentry",depth:3},{text:"externalBasicLibrary",id:"externalbasiclibrary",depth:3}],title:"deploy.microFrontend",frontmatter:{sidebar_label:"microFrontend"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,s._(t._({},e),{children:(0,l.jsx)(a,t._({},e))})):a(e)}}}]);