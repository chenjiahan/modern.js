(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-vue_mdx"],{49193:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s,i=r("15169"),l=r("43932"),a=r("9880"),t=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"vue-plugin",children:["Vue Plugin",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-plugin",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The Vue plugin provides support for building Vue 3 applications. The plugin internally integrates ",(0,a.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"install",children:["Install",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-vue -D\n\n# yarn\nyarn add @modern-js/builder-plugin-vue -D\n\n# pnpm\npnpm install @modern-js/builder-plugin-vue -D\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"register",children:["Register",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can register Vue plugin with the ",(0,a.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nbuilder.addPlugins([builderPluginVue()]);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,a.jsx)(n.code,{children:"*.vue"})," files in your code or use Vue's ",(0,a.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"JSX syntax"})," without the need for additional configuration."]}),"\n",(0,a.jsxs)(n.h2,{id:"config",children:["Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"If you need to customize the compilation behavior of Vue, you can use the following configs."}),"\n",(0,a.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n  experimentalInlineMatchResource: builder === 'rspack',\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Options passed to ",(0,a.jsx)(n.code,{children:"vue-loader"}),", please refer to the ",(0,a.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader documentation"})," for detailed usage."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"vuejsxoptions",children:["vueJsxOptions",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxoptions",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type VueJSXPluginOptions = {\n  /** transform `on: { click: xx }` to `onClick: xxx` */\n  transformOn?: boolean;\n  /** enable optimization or not. */\n  optimize?: boolean;\n  /** merge static and dynamic class / style attributes / onXXX handlers */\n  mergeProps?: boolean;\n  /** configuring custom elements */\n  isCustomElement?: (tag: string) => boolean;\n  /** enable object slots syntax */\n  enableObjectSlots?: boolean;\n  /** Replace the function used when compiling JSX expressions */\n  pragma?: string;\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Default:"})," ",(0,a.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Options passed to ",(0,a.jsx)(n.code,{children:"@vue/babel-plugin-jsx"}),", please refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx documentation"})," for detailed usage."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueJsxOptions: {\n    transformOn: true,\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fplugins%2Fplugin-vue.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2},{text:"vueLoaderOptions",id:"vueloaderoptions",depth:3},{text:"vueJsxOptions",id:"vuejsxoptions",depth:3}],title:"Vue Plugin",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,l._)((0,i._)({},e),{children:(0,a.jsx)(o,(0,i._)({},e))})):o(e)}}}]);