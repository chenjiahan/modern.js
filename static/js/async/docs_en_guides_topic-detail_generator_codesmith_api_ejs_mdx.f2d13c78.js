(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_api_ejs_mdx"],{51946:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return a},title:function(){return i},toc:function(){return d},default:function(){return c}});var t=n("12151"),s=n("23169"),a={sidebar_position:6},i="@modern-js/codesmith-api-ejs",d=[{text:"Use",depth:2,id:"use"},{text:"API",depth:2,id:"api"},{text:"renderTemplate",depth:3,id:"rendertemplate"},{text:"renderTemplateDir",depth:3,id:"rendertemplatedir"}];function o(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"@modern-js/codesmith-api-ejs",children:["@modern-js/codesmith-api-ejs",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-ejs",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["An API wrapper for file operations using [ejs] (",(0,t.jsx)(r.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"https://ejs.co/"}),") in microgenerators, providing a way to render individual template files and folders."]}),"\n",(0,t.jsxs)(r.h2,{id:"use",children:["Use",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"})]}),"\n",(0,t.jsx)(r.div,{className:"language-",children:(0,t.jsxs)(r.div,{className:"modern-code-content",children:[(0,t.jsx)(r.button,{className:"copy"}),(0,t.jsx)(r.pre,{className:"code",children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { EjsAPI } from '@modern-js/codesmith-api-ejs';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const ejsAPI = new EjsAPI(generator);\n  await ejsAPI.renderTemplate(\n     material.get('templates/a.js'),\n     target: 'b.js',\n     { data: \"data\" }\n   );\n}\n"})})]})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Create EjsAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n",(0,t.jsx)(r.li,{children:"Just call the API on its example."}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"api",children:["API",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,t.jsxs)(r.h3,{id:"rendertemplate",children:["renderTemplate",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplate",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Render a single template file."}),"\n",(0,t.jsx)(r.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["templateResource: ",(0,t.jsx)(r.code,{children:"FsResource"}),". Template file resource, used by ",(0,t.jsx)(r.code,{children:"context.materials.get(<filename>)"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["target: ",(0,t.jsx)(r.code,{children:"string"}),". Target file path name."]}),"\n",(0,t.jsxs)(r.li,{children:["parameters?: ",(0,t.jsx)(r.code,{children:"Record<string, string>"}),". Render parameter."]}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"rendertemplatedir",children:["renderTemplateDir",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplatedir",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Render template folder."}),"\n",(0,t.jsx)(r.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["material: ",(0,t.jsx)(r.code,{children:"FsMaterial"}),". The material context of the current microgenerator execution."]}),"\n",(0,t.jsxs)(r.li,{children:["findGlob: ",(0,t.jsx)(r.code,{children:"string"}),". Template file matches the regular."]}),"\n",(0,t.jsxs)(r.li,{children:["target: ",(0,t.jsx)(r.code,{children:"(globMatch: string) => string"}),". The target file path generation function, the parameter is ",(0,t.jsx)(r.code,{children:"resourceKey."})]}),"\n",(0,t.jsxs)(r.li,{children:["options?: ",(0,t.jsx)(r.code,{children:"RenderTemplateDirOptions"}),". Glob Find the file configuration, the specific function viewable is here [glob] (",(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer",children:"https://www.npmjs.com/package/glob"}),")."]}),"\n"]}),"\n",(0,t.jsx)(r.div,{className:"language-",children:(0,t.jsxs)(r.div,{className:"modern-code-content",children:[(0,t.jsx)(r.button,{className:"copy"}),(0,t.jsx)(r.pre,{className:"code",children:(0,t.jsx)(r.code,{className:"language-ts",children:"type RenderTemplateDirOptions = {\n  nodir?: boolean;\n  dot?: boolean;\n  ignore?: string | readonly string[];\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);