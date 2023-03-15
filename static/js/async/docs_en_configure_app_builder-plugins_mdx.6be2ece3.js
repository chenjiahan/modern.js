(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_builder-plugins_mdx"],{20673:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return l},title:function(){return o},default:function(){return t}});var i=n("12151");let r={title:"builderPlugins",sidebar_position:10},l=[{id:"precautions",text:"Precautions",depth:2},{id:"when-to-use",text:"When to use",depth:2},{id:"example",text:"Example",depth:2},{id:"using-plugins-on-npm",text:"Using plugins on npm",depth:3},{id:"using-local-plugins",text:"Using local plugins",depth:3},{id:"plugin-configuration-items",text:"Plugin configuration items",depth:3}],o="builderPlugins";function c(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"builderplugins",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugins",children:"#"}),"builderPlugins"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"BuilderPlugin[]"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Used to configure the Modern.js Builder plugin."}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js Builder is the build engine of Modern.js, please read ",(0,i.jsx)(s.a,{href:"/en/guides/concept/builder.html",children:"Builder"})," for background. If you want to know how to write Builder plugins, you can refer to ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/plugins/introduction.html",target:"_blank",rel:"nofollow",children:"Modern.js Builder - Introduce to Plugin"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"precautions",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"}),"Precautions"]}),"\n",(0,i.jsxs)(s.p,{children:["This option ",(0,i.jsx)(s.strong,{children:"is used to configure the Modern.js Builder plugins"}),". If you need to configure other types of plugins, please select the corresponding configs:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.a,{href:"/en/configure/app/builder-plugins.html",children:"plugins"})," to configure Modern.js framework plugins."]}),"\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.a,{href:"/en/configure/app/tools/webpack.html",children:"tools.webpack"})," or ",(0,i.jsx)(s.a,{href:"/en/configure/app/tools/webpack-chain.html",children:"tools.webpackChain"})," to configure webpack plugins."]}),"\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.a,{href:"/en/configure/app/tools/babel.html",children:"tools.babel"})," to configure babel plugins."]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"when-to-use",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#when-to-use",children:"#"}),"When to use"]}),"\n",(0,i.jsxs)(s.p,{children:["In most scenarios, we recommend you to use the Modern.js framework plugin, which can be registered through the ",(0,i.jsx)(s.a,{href:"/en/configure/app/plugins.html",children:"plugins"})," config. Because the API provided by the framework plugin is richer and more capable, while the API provided by the Builder plugin can only be used to build scenes."]}),"\n",(0,i.jsxs)(s.p,{children:["When you need to reference some existing Builder plugins (and there is no related capability in Modern.js), or reuse Builder plugins between different frameworks, you can use the ",(0,i.jsx)(s.code,{children:"builderPlugins"})," field to register them."]}),"\n",(0,i.jsxs)(s.h2,{id:"example",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,i.jsx)(s.p,{children:"Below is an example of using the Builder plugin."}),"\n",(0,i.jsxs)(s.h3,{id:"using-plugins-on-npm",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-plugins-on-npm",children:"#"}),"Using plugins on npm"]}),"\n",(0,i.jsx)(s.p,{children:"To use a plugin on npm, you need to install the plugin through the package manager and import it."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myBuilderPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my-builder-plugin'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderPlugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myBuilderPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"using-local-plugins",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-local-plugins",children:"#"}),"Using local plugins"]}),"\n",(0,i.jsx)(s.p,{children:"Use the plugin in the local code repository, you can import it directly through the relative path import."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myBuilderPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./plugin/myBuilderPlugin'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderPlugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myBuilderPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"plugin-configuration-items",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration-items",children:"#"}),"Plugin configuration items"]}),"\n",(0,i.jsx)(s.p,{children:"If the plugin provides some custom configuration options, you can pass in the configuration through the parameters of the plugin function."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myBuilderPlugin "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'my-builder-plugin'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderPlugins"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myBuilderPlugin"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      foo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      bar"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);