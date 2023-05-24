(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_develop_mdx"],{58214:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{frontmatter:function(){return a},title:function(){return c},toc:function(){return i},default:function(){return s}});var n=t("9880"),o=t("23169"),a={sidebar_position:3},c="Develop a microgenerator project",i=[{text:"Create project",depth:2,id:"create-project"},{text:"Add template file",depth:2,id:"add-template-file"},{text:"Develop generator core logic",depth:2,id:"develop-generator-core-logic"},{text:"Test microgenerator",depth:2,id:"test-microgenerator"},{text:"Run the microgenerator",depth:2,id:"run-the-microgenerator"}];function d(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"develop-a-microgenerator-project",children:["Develop a microgenerator project",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-a-microgenerator-project",children:"#"})]}),"\n",(0,n.jsxs)(r.h2,{id:"create-project",children:["Create project",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"Modern.js provides a microgenerator to create a microgenerator project, you can directly create a microgenerator project with the following commands:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ mkdir <projectDir>\n$ npx @modern-js/codesmith-cli @modern-js/generator-generator\n\n? Package Name: <generatorName>\n? Package Manager: pnpm\n? Development Language: TS\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"add-template-file",children:["Add template file",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#add-template-file",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"In the templates folder of the project directory, it is used to store the template files required by the generator. If there is no template file, this step can be skipped."}),"\n",(0,n.jsxs)(r.h2,{id:"develop-generator-core-logic",children:["Develop generator core logic",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-generator-core-logic",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["In the project generated by default, it has been implemented to directly copy the templates directory file to the target project, and the core logic development of the generator can be completed directly in the ",(0,n.jsx)(r.code,{children:"handleTemplateFile"})," function."]}),"\n",(0,n.jsxs)(r.h2,{id:"test-microgenerator",children:["Test microgenerator",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#test-microgenerator",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["After the development of the microgenerator is completed, you need to execute ",(0,n.jsx)(r.code,{children:"pnpm run build"})," to compile the code. In development mode, you can use ",(0,n.jsx)(r.code,{children:"pnpm run build --watch"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Codesmith provides the cli tool for running and testing the microgenerator. Execute it in the target directory with the following command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npx @modern-js/codesmith-cli <generatorPath>\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Where ",(0,n.jsx)(r.code,{children:"generatorPath"})," is the absolute path of the above generator project."]}),"\n",(0,n.jsxs)(r.h2,{id:"run-the-microgenerator",children:["Run the microgenerator",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-microgenerator",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"After the generator publishes to npm, use the following command to execute:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npx @modern-js/codesmith-cli <generatorName>\n"})}),"\n",(0,n.jsx)(r.p,{children:"Where generatorName is the generator package name."}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive info",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"@modern-js/create"})," also supports running micro-generators, you can use ",(0,n.jsx)(r.code,{children:"npx @modern-js/create@latest --generator <generatorName>"})," to run customized micro-generators."]}),"\n"]})]})]})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}]);