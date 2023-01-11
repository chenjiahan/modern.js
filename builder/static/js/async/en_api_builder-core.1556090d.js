"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[2797],{48603:function(s,e,l){l.r(e),l.d(e,{content:function(){return i},frontmatter:function(){return r},title:function(){return o},toc:function(){return c}});var n=l(39980);const r={extractApiHeaders:[2]},c=[{id:"createbuilder",text:"createBuilder",depth:2},{id:"webpack-provider",text:"Webpack Provider",depth:3},{id:"rspack-provider",text:"Rspack Provider",depth:3},{id:"options",text:"options",depth:3},{id:"mergebuilderconfig",text:"mergeBuilderConfig",depth:2},{id:"webpack",text:"webpack",depth:2},{id:"htmlwebpackplugin",text:"HtmlWebpackPlugin",depth:2}],o="Builder Core",i="\"---\\nextractApiHeaders: [2]\\n---\\n\\n# Builder Core\\n\\nThis section describes some of the core methods provided by Builder.\\n\\n## createBuilder\\n\\nCreate a Builder instance object.\\n\\nWhen using this method, it needs to be used with the `@modern-js/builder-webpack-provider` or `@modern-js/builder-rspack-provider`. Providers implements corresponding build feature based on specific bundlers.\\n\\n### Webpack Provider\\n\\nWhen `builderWebpackProvider` is passed, the Builder will use webpack as the bundler for building.\\n\\n```ts\\nimport { createBuilder } from '@modern-js/builder';\\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\\n\\nconst provider = builderWebpackProvider({\\n  builderConfig: {\\n    // some configs\\n  },\\n});\\n\\nconst builder = await createBuilder(provider, {\\n  // some options\\n});\\n```\\n\\n### Rspack Provider\\n\\nWhen `builderRspackProvider` is passed, the Builder will use rspack as the bundler for building.\\n\\n```ts\\nimport { createBuilder } from '@modern-js/builder';\\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\\n\\nconst provider = builderRspackProvider({\\n  builderConfig: {\\n    // some configs\\n  },\\n});\\n\\nconst builder = await createBuilder(provider, {\\n  // some options\\n});\\n```\\n\\n> Tips: @modern-js/builder-rspack-provider has not been developed yet.\\n\\n### options\\n\\nThe second parameter of `createBuilder` is a options object, you can pass in the following options:\\n\\n```ts\\ntype BuilderEntry = Record<string, string | string[]>;\\n\\ntype BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\\n\\ntype CreateBuilderOptions = {\\n  cwd?: string;\\n  entry?: BuilderEntry;\\n  target?: BuilderTarget | BuilderTarget[];\\n  framework?: string;\\n  configPath?: string | null;\\n};\\n```\\n\\nDescription:\\n\\n- `cwd`: The root path of the current build, the default value is `process.cwd()`.\\n- `entry`: Build entry object.\\n- `target`: Build target type, the default value is `['web']`, see chapter [Build Target](/guide/basic/build-target.html) for details.\\n- `framework`: The name of the framework, a unique identifier, the default value is `'modern.js'`.\\n- `configPath`: The path to the framework config file (absolute path), this parameter affects the build cache update.\\n\\n## mergeBuilderConfig\\n\\nMerges multiple Builder config objects and returns a new merged object.\\n\\n- **Type**\\n\\n```ts\\nfunction mergeBuilderConfig(...configs: BuilderConfig[]): BuilderConfig;\\n```\\n\\n- **Example**\\n\\n```ts\\nimport { mergeBuilderConfig } from '@modern-js/builder';\\n\\nconst config1 = {\\n  dev: {\\n    https: false,\\n  },\\n};\\nconst config2 = {\\n  dev: {\\n    https: true,\\n  },\\n};\\n\\nconst mergedConfig = mergeBuilderConfig(config1, config2);\\n\\nconsole.log(mergedConfig); // { dev: { https: true } }\\n```\\n\\n> This method does not modify the original config object.\\n\\n## webpack\\n\\nA webpack object for consuming webpack builtin plugins or type definitions.\\n\\n- **Example**\\n\\n```ts\\nimport webpack from '@modern-js/builder-webpack-provider/webpack';\\n\\nnew webpack.DefinePlugin();\\n```\\n\\n> In most scenarios, it is recommended to import webpack from Builder instead of manually installing a \\\"webpack\\\" dependency, which can avoid multi-instance problems.\\n\\n## HtmlWebpackPlugin\\n\\nHtmlWebpackPlugin object, usually used to implement custom plugins of HtmlWebpackPlugin.\\n\\n- **Example**\\n\\n```ts\\nimport HtmlWebpackPlugin from '@modern-js/builder-webpack-provider/html-webpack-plugin';\\n```\\n\\n> In most scenarios, it is recommended to import HtmlWebpackPlugin from builder instead of manually installing a \\\"html-webpack-plugin\\\" dependency, which can avoid multi-instance problems.\\n\"";function a(s){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",div:"div",button:"button",pre:"pre",span:"span",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"builder-core",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-core",children:"#"}),"Builder Core"]}),"\n",(0,n.jsx)(e.p,{children:"This section describes some of the core methods provided by Builder."}),"\n",(0,n.jsxs)(e.h2,{id:"createbuilder",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilder",children:"#"}),"createBuilder"]}),"\n",(0,n.jsx)(e.p,{children:"Create a Builder instance object."}),"\n",(0,n.jsxs)(e.p,{children:["When using this method, it needs to be used with the ",(0,n.jsx)(e.code,{children:"@modern-js/builder-webpack-provider"})," or ",(0,n.jsx)(e.code,{children:"@modern-js/builder-rspack-provider"}),". Providers implements corresponding build feature based on specific bundlers."]}),"\n",(0,n.jsxs)(e.h3,{id:"webpack-provider",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-provider",children:"#"}),"Webpack Provider"]}),"\n",(0,n.jsxs)(e.p,{children:["When ",(0,n.jsx)(e.code,{children:"builderWebpackProvider"})," is passed, the Builder will use webpack as the bundler for building."]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"createBuilder"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"builderWebpackProvider"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder-webpack-provider"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"provider"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"builderWebpackProvider"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"builderConfig"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// some configs"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"builder"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"await"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"createBuilder"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"provider"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// some options"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"rspack-provider",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-provider",children:"#"}),"Rspack Provider"]}),"\n",(0,n.jsxs)(e.p,{children:["When ",(0,n.jsx)(e.code,{children:"builderRspackProvider"})," is passed, the Builder will use rspack as the bundler for building."]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"createBuilder"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"builderRspackProvider"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder-rspack-provider"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"provider"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"builderRspackProvider"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"builderConfig"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// some configs"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"builder"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"await"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"createBuilder"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"provider"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// some options"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"Tips: @modern-js/builder-rspack-provider has not been developed yet."}),"\n"]}),"\n",(0,n.jsxs)(e.h3,{id:"options",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"}),"options"]}),"\n",(0,n.jsxs)(e.p,{children:["The second parameter of ",(0,n.jsx)(e.code,{children:"createBuilder"})," is a options object, you can pass in the following options:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderEntry"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"Record"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"[]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:">"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderTarget"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"web"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"node"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"modern-web"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"web-worker"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"type"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"CreateBuilderOptions"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  cwd"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  entry"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderEntry"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  target"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderTarget"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderTarget"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"[]"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  framework"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  configPath"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"?:"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"null"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"Description:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"cwd"}),": The root path of the current build, the default value is ",(0,n.jsx)(e.code,{children:"process.cwd()"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"entry"}),": Build entry object."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"target"}),": Build target type, the default value is ",(0,n.jsx)(e.code,{children:"['web']"}),", see chapter ",(0,n.jsx)(e.a,{href:"/builder/en/guide/basic/build-target.html",children:"Build Target"})," for details."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"framework"}),": The name of the framework, a unique identifier, the default value is ",(0,n.jsx)(e.code,{children:"'modern.js'"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"configPath"}),": The path to the framework config file (absolute path), this parameter affects the build cache update."]}),"\n"]}),"\n",(0,n.jsxs)(e.h2,{id:"mergebuilderconfig",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#mergebuilderconfig",children:"#"}),"mergeBuilderConfig"]}),"\n",(0,n.jsx)(e.p,{children:"Merges multiple Builder config objects and returns a new merged object."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.strong,{children:"Type"})}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"mergeBuilderConfig"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"..."}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"configs"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderConfig"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"[]"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#8FBCBB"},children:"BuilderConfig"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.strong,{children:"Example"})}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"mergeBuilderConfig"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config1"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"dev"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"https"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config2"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"dev"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"https"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"mergedConfig"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"mergeBuilderConfig"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config1"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config2"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"log"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"mergedConfig"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#616E88"},children:"// { dev: { https: true } }"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"This method does not modify the original config object."}),"\n"]}),"\n",(0,n.jsxs)(e.h2,{id:"webpack",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"}),"webpack"]}),"\n",(0,n.jsx)(e.p,{children:"A webpack object for consuming webpack builtin plugins or type definitions."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.strong,{children:"Example"})}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"webpack"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder-webpack-provider/webpack"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"webpack"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#88C0D0"},children:"DefinePlugin"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:'In most scenarios, it is recommended to import webpack from Builder instead of manually installing a "webpack" dependency, which can avoid multi-instance problems.'}),"\n"]}),"\n",(0,n.jsxs)(e.h2,{id:"htmlwebpackplugin",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"}),"HtmlWebpackPlugin"]}),"\n",(0,n.jsx)(e.p,{children:"HtmlWebpackPlugin object, usually used to implement custom plugins of HtmlWebpackPlugin."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.strong,{children:"Example"})}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9"},children:"HtmlWebpackPlugin"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@modern-js/builder-webpack-provider/html-webpack-plugin"}),(0,n.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,n.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:'In most scenarios, it is recommended to import HtmlWebpackPlugin from builder instead of manually installing a "html-webpack-plugin" dependency, which can avoid multi-instance problems.'}),"\n"]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);