(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_framework-plugin_implement_mdx"],{82578:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var i in e)Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}(e,{frontmatter:function(){return l},title:function(){return t},toc:function(){return r},default:function(){return d}});var s=i("9880"),o=i("23169"),l={title:"Write Plugins",sidebar_position:3},t="How to Write Plugins",r=[{text:"Implementing a Plugin",depth:2,id:"implementing-a-plugin"},{text:"Plugin Types",depth:3,id:"plugin-types"},{text:"Plugin Configuration",depth:3,id:"plugin-configuration"},{text:"Plugin API",depth:3,id:"plugin-api"},{text:"Async setup",depth:3,id:"async-setup"},{text:"Adding Plugins",depth:2,id:"adding-plugins"},{text:"Developing Local Plugins",depth:3,id:"developing-local-plugins"},{text:"Publishing a Plugin on npm",depth:3,id:"publishing-a-plugin-on-npm"}];function c(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",div:"div",pre:"pre",h3:"h3",img:"img",ol:"ol",strong:"strong"},(0,o.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"how-to-write-plugins",children:["How to Write Plugins",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-write-plugins",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"The previous section introduced the Hook models used by Modern.js plugins, while this section describes how to write plugins."}),"\n",(0,s.jsxs)(e.h2,{id:"implementing-a-plugin",children:["Implementing a Plugin",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#implementing-a-plugin",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"A Modern.js plugin is an object that includes the following properties:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"name"}),": The name of the plugin, a unique identifier."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"setup"}),": The initialization function for the plugin, which only runs once. The ",(0,s.jsx)(e.code,{children:"setup"})," function can return a Hooks object, which Modern.js executes at specific times."]}),"\n"]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"const myPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    // return hook object\n    return {\n      afterBuild: () => {\n      },\n    };\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.p,{children:["In addition, plugins allow configuration of the execution order with other plugins. For more information, please refer to ",(0,s.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/relationship",children:"Plugin Relationship"}),"."]}),"\n",(0,s.jsxs)(e.h3,{id:"plugin-types",children:["Plugin Types",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-types",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Modern.js supports various types of project development, such as application development (",(0,s.jsx)(e.code,{children:"app-tools"}),"), module development (",(0,s.jsx)(e.code,{children:"module-tools"}),"), etc."]}),"\n",(0,s.jsx)(e.p,{children:"To balance the differences and commonalities between various types of project development, Modern.js organizes plugins as shown in the following figure:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eeeh7uhbepxlpe/modern-website/plugin-relationship.jpg",alt:"plugin-relationship"})}),"\n",(0,s.jsx)(e.p,{children:"As shown in the figure, Modern.js roughly divides plugins into two categories:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Common plugins: Plugins that only include some basic Hooks."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Project plugins: Different project developments will extend their own Hooks, Config, etc. on the basis of common plugins."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["When using TypeScript, you can import built-in types such as ",(0,s.jsx)(e.code,{children:"CliPlugin"})," to provide correct type inference for plugins."]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nconst myPlugin: CliPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n      },\n    };\n  },\n};\n"})})})}),"\n",(0,s.jsx)(e.p,{children:"The above code is a general-purpose plugin, containing only some basic Hooks. Modern.js supports extending the definition of plugins through generics:"}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nconst myPlugin: CliPlugin<AppTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n      },\n    };\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.p,{children:["If you look closely at the type ",(0,s.jsx)(e.code,{children:"AppTools"}),", you can see that ",(0,s.jsx)(e.code,{children:"AppTools"})," consists of 3 types."]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"type AppTools = {\n  hooks: AppToolsHooks;\n  userConfig: AppToolsUserConfig;\n  normalizedConfig: AppToolsNormalizedConfig;\n};\n"})})})}),"\n",(0,s.jsx)(e.p,{children:"When writing plugins, plugins extend their own types like Hooks on different bases through generic extensions:"}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"// common plugin\nimport type { CliPlugin } from '@modern-js/core';\nimport type { MyPluginHook } from 'xxx';\n\nconst myPlugin: CliPlugin<{ hooks: MyPluginHook }> = {};\n"})})})}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"// extend from app-tools hook\nimport type { CliPlugin, AppTools } from '@modern-js/app-tools';\nimport type { MyPluginHook } from 'xxx';\n\nconst myPlugin: CliPlugin<AppTools & { hooks: MyPluginHook }> = {};\n"})})})}),"\n",(0,s.jsxs)(e.p,{children:["Please refer to ",(0,s.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/extend",children:"Extending Hooks"})," for detailed explanations."]}),"\n",(0,s.jsxs)(e.h3,{id:"plugin-configuration",children:["Plugin Configuration",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"It is recommended to write plugins in the form of functions"}),", so that plugins can receive configuration options through function parameters:"]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\ntype MyPluginOptions = {\n  foo: string;\n};\n\nconst myPlugin = (options: MyPluginOptions): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    console.log(options.foo);\n  },\n});\n"})})})}),"\n",(0,s.jsxs)(e.h3,{id:"plugin-api",children:["Plugin API",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"setup"})," function of a plugin receives an ",(0,s.jsx)(e.code,{children:"api"})," parameter, and you can call some methods provided on the ",(0,s.jsx)(e.code,{children:"api"})," to get configuration, application context, and other information."]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // get user set config\n    const config = api.useConfigContext();\n    // get context\n    const appContext = api.useAppContext();\n    // get final config\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})})})}),"\n",(0,s.jsxs)(e.p,{children:["For more detail ",(0,s.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/plugin-api",children:"Plugin API"}),"."]}),"\n",(0,s.jsxs)(e.h3,{id:"async-setup",children:["Async setup",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#async-setup",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"setup"})," function of a CLI plugin can be an asynchronous function, which can execute asynchronous logic during the initialization process."]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    await doSomething();\n  },\n});\n"})})})}),"\n",(0,s.jsxs)(e.h2,{id:"adding-plugins",children:["Adding Plugins",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#adding-plugins",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Custom plugins can be used by following the instructions in the ",(0,s.jsx)(e.a,{href:"/configure/app/plugins",children:"plugins"})," section of the documentation. Below is the recommended way to implement plugins in Modern.js."]}),"\n",(0,s.jsxs)(e.h3,{id:"developing-local-plugins",children:["Developing Local Plugins",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#developing-local-plugins",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["It is recommended to write local plugins in the ",(0,s.jsx)(e.code,{children:"config/plugin"})," directory and export them using ",(0,s.jsx)(e.code,{children:"export default"}),":"]}),"\n",(0,s.jsxs)(e.div,{className:"language-",children:[(0,s.jsx)(e.div,{className:"modern-code-title",children:"config/plugin/myPlugin.ts"}),(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // init plugin\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(e.p,{children:["register plugin in ",(0,s.jsx)(e.code,{children:"modern.config.ts"}),":"]}),"\n",(0,s.jsxs)(e.div,{className:"language-",children:[(0,s.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})})})]}),"\n",(0,s.jsxs)(e.h3,{id:"publishing-a-plugin-on-npm",children:["Publishing a Plugin on npm",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#publishing-a-plugin-on-npm",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"If you want to publish your Modern.js plugin on npm, it's recommended to use the module project solution provided by Modern.js to manage and build the plugin."}),"\n",(0,s.jsx)(e.p,{children:"First, create an empty module project solution and adjust the package name:"}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "name": "my-plugin"\n  ...\n}\n'})})})}),"\n",(0,s.jsx)(e.p,{children:"create plugin main file:"}),"\n",(0,s.jsxs)(e.div,{className:"language-",children:[(0,s.jsx)(e.div,{className:"modern-code-title",children:"src/index.ts"}),(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",meta:"title=src/index.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // plugin init\n  },\n});\n"})})})]}),"\n",(0,s.jsxs)(e.p,{children:["After publishing, install it to the project you need to use ",(0,s.jsx)(e.code,{children:"pnpm add my-plugin"}),", take an application project as an example, and then add it in ",(0,s.jsx)(e.code,{children:"modern.config.ts"}),":"]}),"\n",(0,s.jsxs)(e.div,{className:"language-",children:[(0,s.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})})})]}),"\n",(0,s.jsxs)(e.p,{children:["If you find that there are currently unsatisfactory scenarios in Modern.js, welcome to build the Modern.js ecosystem together by ",(0,s.jsx)(e.strong,{children:"writing custom plugins"}),"."]})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(c,n)})):c(n)}}}]);