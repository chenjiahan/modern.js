(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_use_md"],{95466:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return o},default:function(){return c}});var r=a("9880"),t=a("23169"),s={sidebar_position:3},i="Usage",o=[{text:"Absolute path",depth:2,id:"absolute-path"},{text:"Relative path",depth:2,id:"relative-path"},{text:"NPM package",depth:2,id:"npm-package"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@modern-js/create"})," provides the ",(0,r.jsx)(n.code,{children:"--plugin"})," parameter to run the generator plugin project."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--plugin"})," supports three formats:"]}),"\n",(0,r.jsxs)(n.h2,{id:"absolute-path",children:["Absolute path",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#absolute-path",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Suitable for local development and debugging. After development is completed, build the project by running ",(0,r.jsx)(n.code,{children:"npm run build"})," in the generator plugin project, and then use the following command for testing:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin <pluginPath>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"relative-path",children:["Relative path",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#relative-path",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Suitable for local development and debugging or when the generator plugin project and the target project to be created are in the same Monorepo and there is no need to publish an NPM package. After building the generator plugin project, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin file:../<pluginPath>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"npm-package",children:["NPM package",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-package",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Suitable for scenarios where the generator project is published on npm for sharing."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin <pluginPackage>\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);