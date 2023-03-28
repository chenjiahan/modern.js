(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_codesmith_develop_mdx"],{80451:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return t},toc:function(){return a},title:function(){return c},default:function(){return l}});var s=n("12151"),o=n("21447");let t={sidebar_position:3},a=[{id:"create-project",text:"Create project",depth:2},{id:"add-template-file",text:"Add template file",depth:2},{id:"develop-generator-core-logic",text:"Develop generator core logic",depth:2},{id:"test-microgenerator",text:"Test microgenerator",depth:2},{id:"run-the-microgenerator",text:"Run the microgenerator",depth:2}],c="Develop a microgenerator project";function i(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"develop-a-microgenerator-project",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-a-microgenerator-project",children:"#"}),"Develop a microgenerator project"]}),"\n",(0,s.jsxs)(r.h2,{id:"create-project",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"}),"Create project"]}),"\n",(0,s.jsx)(r.p,{children:"Modern.js provides a microgenerator to create a microgenerator project, you can directly create a microgenerator project with the following commands:"}),"\n",(0,s.jsxs)(r.div,{className:"language-bash",children:[(0,s.jsx)(r.div,{className:""}),(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,s.jsxs)(r.code,{children:[(0,s.jsxs)(r.span,{className:"line",children:[(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"$ mkdir "}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"projectDir"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,s.jsx)(r.span,{className:"line",children:(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"$ npx @modern-js/codesmith-cli @modern-js/generator-generator"})}),"\n",(0,s.jsx)(r.span,{className:"line"}),"\n",(0,s.jsxs)(r.span,{className:"line",children:[(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" Package Name: "}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"generatorName"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,s.jsxs)(r.span,{className:"line",children:[(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" Package Manager: pnpm"})]}),"\n",(0,s.jsxs)(r.span,{className:"line",children:[(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" Development Language: TS"})]}),"\n",(0,s.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,s.jsxs)(r.h2,{id:"add-template-file",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#add-template-file",children:"#"}),"Add template file"]}),"\n",(0,s.jsx)(r.p,{children:"In the templates folder of the project directory, it is used to store the template files required by the generator. If there is no template file, this step can be skipped."}),"\n",(0,s.jsxs)(r.h2,{id:"develop-generator-core-logic",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-generator-core-logic",children:"#"}),"Develop generator core logic"]}),"\n",(0,s.jsxs)(r.p,{children:["In the project generated by default, it has been implemented to directly copy the templates directory file to the target project, and the core logic development of the generator can be completed directly in the ",(0,s.jsx)(r.code,{children:"handleTemplateFile"})," function."]}),"\n",(0,s.jsxs)(r.h2,{id:"test-microgenerator",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#test-microgenerator",children:"#"}),"Test microgenerator"]}),"\n",(0,s.jsxs)(r.p,{children:["After the development of the microgenerator is completed, you need to execute ",(0,s.jsx)(r.code,{children:"pnpm run build"})," to compile the code. In development mode, you can use ",(0,s.jsx)(r.code,{children:"pnpm run build --watch"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Codesmith provides the cli tool for running and testing the microgenerator. Execute it in the target directory with the following command:"}),"\n",(0,s.jsxs)(r.div,{className:"language-bash",children:[(0,s.jsx)(r.div,{className:""}),(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,s.jsxs)(r.code,{children:[(0,s.jsxs)(r.span,{className:"line",children:[(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/codesmith-cli "}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"generatorPath"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,s.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Where ",(0,s.jsx)(r.code,{children:"generatorPath"})," is the absolute path of the above generator project."]}),"\n",(0,s.jsxs)(r.h2,{id:"run-the-microgenerator",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-microgenerator",children:"#"}),"Run the microgenerator"]}),"\n",(0,s.jsx)(r.p,{children:"After the generator publishes to npm, use the following command to execute:"}),"\n",(0,s.jsxs)(r.div,{className:"language-bash",children:[(0,s.jsx)(r.div,{className:""}),(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,s.jsxs)(r.code,{children:[(0,s.jsxs)(r.span,{className:"line",children:[(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/codesmith-cli "}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"generatorName"}),(0,s.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,s.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,s.jsx)(r.p,{children:"Where generatorName is the generator package name."}),"\n",(0,s.jsxs)(r.div,{className:"modern-directive info",children:[(0,s.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsx)(r.div,{className:"modern-directive-content",children:(0,s.jsxs)(r.p,{children:["\n",(0,s.jsx)(r.code,{children:"@modern-js/create"})," also supports running micro-generators, you can use ",(0,s.jsx)(r.code,{children:"npx @modern-js/create --generator <generatorName>"})," to run customized micro-generators."]})})]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,o.useMDXComponents)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);