(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_api_builder-types_mdx"],{3018:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return t},title:function(){return l},toc:function(){return s},default:function(){return c}});var i=n("9880"),d=n("23169"),t={extractApiHeaders:[2]},l="Builder Types",s=[{text:"BuilderInstance",depth:2,id:"builderinstance"},{text:"BuilderContext",depth:2,id:"buildercontext"},{text:"BuilderPlugin",depth:2,id:"builderplugin"},{text:"BuilderTarget",depth:2,id:"buildertarget"},{text:"BuilderEntry",depth:2,id:"builderentry"},{text:"CreateBuilderOptions",depth:2,id:"createbuilderoptions"}];function a(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"builder-types",children:["Builder Types",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-types",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"This section describes some of the type definitions provided by the Builder."}),"\n",(0,i.jsxs)(r.h2,{id:"builderinstance",children:["BuilderInstance",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderinstance",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"The type of the Builder instance."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { BuilderInstance } from '@modern-js/builder';\n\nlet builder: BuilderInstance;\n"})}),"\n",(0,i.jsx)(r.p,{children:"You can pass in the Provider type through generics to make the type definition of the Builder instance more accurate:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { createBuilder, type BuilderInstance } from '@modern-js/builder';\nimport type { BuilderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nlet builder: BuilderInstance<BuilderWebpackProvider>;\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"buildercontext",children:["BuilderContext",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontext",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"The type of the context property in the Builder instance."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { BuilderContext } from '@modern-js/builder';\n\nconst context: BuilderContext = builder.context;\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"builderplugin",children:["BuilderPlugin",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["The type of Builder plugin, should be used with the ",(0,i.jsx)(r.code,{children:"BuilderPluginAPI"})," type exported from the provider."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nconst myPlugin: BuilderPlugin<BuilderPluginAPI> = {\n  name: 'my-plugin',\n  setup() {},\n};\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"buildertarget",children:["BuilderTarget",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#buildertarget",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"The type of build target."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { BuilderTarget } from '@modern-js/builder';\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"builderentry",children:["BuilderEntry",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderentry",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["The type of the ",(0,i.jsx)(r.code,{children:"entry"})," option to the ",(0,i.jsx)(r.code,{children:"createBuilder"})," method."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { BuilderEntry } from '@modern-js/builder';\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"createbuilderoptions",children:["CreateBuilderOptions",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilderoptions",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["The param type of ",(0,i.jsx)(r.code,{children:"createBuilder"})," method."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { CreateBuilderOptions } from '@modern-js/builder';\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);