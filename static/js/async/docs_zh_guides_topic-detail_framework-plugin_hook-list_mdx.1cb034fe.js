(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_hook-list_mdx"],{41392:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return c},default:function(){return a}});var i=r("9880"),s=r("23169"),l={title:"Hook 列表",sidebar_position:8},d="Hook 列表",c=[{text:"CLI",depth:2,id:"cli"},{text:"beforeConfig",depth:3,id:"beforeconfig"},{text:"config",depth:3,id:"config"},{text:"validateSchema",depth:3,id:"validateschema"},{text:"prepare",depth:3,id:"prepare"},{text:"afterPrepare",depth:3,id:"afterprepare"},{text:"commands",depth:3,id:"commands"},{text:"beforeExit",depth:3,id:"beforeexit"},{text:"beforeDev",depth:3,id:"beforedev"},{text:"afterDev",depth:3,id:"afterdev"},{text:"beforeCreateCompiler",depth:3,id:"beforecreatecompiler"},{text:"afterCreateCompiler",depth:3,id:"aftercreatecompiler"},{text:"beforePrintInstructions",depth:3,id:"beforeprintinstructions"},{text:"beforeBuild",depth:3,id:"beforebuild"},{text:"afterBuild",depth:3,id:"afterbuild"},{text:"modifyEntryImports",depth:3,id:"modifyentryimports"},{text:"modifyEntryExport",depth:3,id:"modifyentryexport"},{text:"modifyEntryRuntimePlugins",depth:3,id:"modifyentryruntimeplugins"},{text:"modifyEntryRenderFunction",depth:3,id:"modifyentryrenderfunction"},{text:"modifyFileSystemRoutes",depth:3,id:"modifyfilesystemroutes"},{text:"modifyServerRoutes",depth:3,id:"modifyserverroutes"},{text:"modifyAsyncEntry",depth:3,id:"modifyasyncentry"},{text:"htmlPartials",depth:3,id:"htmlpartials"},{text:"Runtime",depth:2,id:"runtime"},{text:"init",depth:3,id:"init"},{text:"hoc",depth:3,id:"hoc"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"hook-列表",children:["Hook 列表",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-列表",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"在 Modern.js 中暴露了三类插件：CLI、Runtime、Server。下面列举下各类中的 Hook："}),"\n",(0,i.jsxs)(n.h2,{id:"cli",children:["CLI",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"beforeconfig",children:[(0,i.jsx)(n.code,{children:"beforeConfig"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeconfig",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行收集配置前的任务"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：收集配置前"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeConfig: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"config",children:[(0,i.jsx)(n.code,{children:"config"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：收集配置"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：解析完 ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," 中的配置之后"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：ParallelWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"ParallelWorkflow<void, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      config: () => {\n        return {\n          /** some config */\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"这里返回的配置信息，会被收集和统一处理合并。"}),"\n",(0,i.jsxs)(n.h3,{id:"validateschema",children:[(0,i.jsx)(n.code,{children:"validateSchema"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#validateschema",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：收集各个插件中配置的用来校验用户配置的 ",(0,i.jsx)(n.a,{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer",children:"JSON Schema"})]}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.code,{children:"config"})," Hook 运行完之后。"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：ParallelWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"ParallelWorkflow<void, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      validateSchema: () => {\n        return {\n          // target is field\n          target: 'foo',\n          schema: {\n            type: 'string',\n          },\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:["这里返回的 JSON Schema 会用来校验 ",(0,i.jsx)(n.code,{children:"modern.config.js"})," 中的配置信息。"]}),"\n",(0,i.jsx)(n.p,{children:"比如这里返回："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "target": "foo",\n  "schema": {\n    "type": "string"\n  }\n}\n'})})})}),"\n",(0,i.jsxs)(n.p,{children:["就可以在 ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," 中这样配置："]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  foo: 'test',\n});\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"如果是别的类型，校验就不通过会报错，比如这样："}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  foo: {},\n});\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"就会报错："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-sh",children:'$ modern dev\n  1 | {\n> 2 |   "foo": {},\n    |   ^^^^^  Property foo is not expected to be here\n'})})})}),"\n",(0,i.jsxs)(n.h3,{id:"prepare",children:[(0,i.jsx)(n.code,{children:"prepare"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prepare",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行主流程的前置准备流程"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：校验完配置之后"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      prepare: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"afterprepare",children:[(0,i.jsx)(n.code,{children:"afterPrepare"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterprepare",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行前置准备流程的之后的任务"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：前置准备流程之后"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterPrepare: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"commands",children:[(0,i.jsx)(n.code,{children:"commands"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：为 command 添加新的命令"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.code,{children:"prepare"})," Hook 运行完之后"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<{ program: Command; }, void>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      commands: ({ program }) => {\n        program.command('foo').action(async () => {\n          // do something\n          console.log('foo');\n        });\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:["将上面这个插件添加到 ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," 中："]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["运行 ",(0,i.jsx)(n.code,{children:"modern foo"})," 就可以看到控制台输出："]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ modern foo\nfoo\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"beforeexit",children:[(0,i.jsx)(n.code,{children:"beforeExit"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeexit",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：在退出进程前，重置一些文件状态"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：进程退出之前"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：Workflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"Workflow<void, void>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeExit: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["由于 Node.js 中退出进程时的回调函数是同步的，所以 ",(0,i.jsx)(n.code,{children:"beforeExit"})," Hook 的类型是 ",(0,i.jsx)(n.code,{children:"Workflow"}),"，不能执行异步操作。\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"beforedev",children:[(0,i.jsx)(n.code,{children:"beforeDev"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedev",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行 dev 主流程的之前的任务"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.code,{children:"dev"})," 命令运行时，项目开始启动前执行"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<void, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeDev: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"afterdev",children:[(0,i.jsx)(n.code,{children:"afterDev"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterdev",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行 dev 主流程的之后的任务"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.code,{children:"dev"})," 命令运行时，项目启动完成之后执行"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<void, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterDev: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"beforecreatecompiler",children:[(0,i.jsx)(n.code,{children:"beforeCreateCompiler"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforecreatecompiler",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：在中间件函数中可以拿到创建 Webpack Compiler 的 Webpack 配置"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：创建 Webpack Compiler 之前执行"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<{ webpackConfigs: Configuration[];}, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeCreateCompiler: ({ webpackConfigs }) => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"aftercreatecompiler",children:[(0,i.jsx)(n.code,{children:"afterCreateCompiler"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#aftercreatecompiler",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：在中间件函数中可以拿到创建的 Webpack Compiler"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：创建 Webpack Compiler 之后执行"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<{ compiler: Compiler | MultiCompiler | undefined; }, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterCreateCompiler: ({ compiler }) => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"beforeprintinstructions",children:[(0,i.jsx)(n.code,{children:"beforePrintInstructions"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeprintinstructions",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：在中间件函数中可以拿到即将打印的日志信息，并对其进行修改"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：打印日志信息之前执行"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ instructions: string }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforePrintInstructions: ({ instructions }) => {\n        // do something\n        return {\n          instructions: [...instructions, 'some new message'],\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"beforebuild",children:[(0,i.jsx)(n.code,{children:"beforeBuild"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuild",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行 build 主流程的之前的任务，可以拿到构建的 Webpack 配置"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.code,{children:"build"})," 命令运行时，项目构建启动前执行"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<{ webpackConfigs: Configuration[]; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeBuild: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"afterbuild",children:[(0,i.jsx)(n.code,{children:"afterBuild"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuild",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：运行 build 主流程的之后的任务"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.code,{children:"build"})," 命令运行时，项目构建完成之后执行"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWorkflow"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWorkflow<void, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterBuild: () => {\n        // do something\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"modifyentryimports",children:[(0,i.jsx)(n.code,{children:"modifyEntryImports"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryimports",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：用于修改、添加生成入口文件中的 ",(0,i.jsx)(n.code,{children:"import"})," 语句"]}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成入口文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ imports: ImportStatement[]; entrypoint: Entrypoint; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryImports({ entrypoint, imports }) {\n        // 添加 `import React from 'React'`\n        imports.push({\n          value: 'react',\n          specifiers: [\n            {\n              imported: 'unmountComponentAtNode',\n            },\n          ],\n        });\n\n        return { entrypoint, imports };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"modifyentryexport",children:[(0,i.jsx)(n.code,{children:"modifyEntryExport"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryexport",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：用于修改生成入口文件中的 ",(0,i.jsx)(n.code,{children:"export"})," 语句"]}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成入口文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; exportStatement: string; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryImports({ entrypoint, exportStatement }) {\n        return {\n          entrypoint,\n          exportStatement: [`export const foo = 'test'`, exportStatement].join(\n            '\\n',\n          ),\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"modifyentryruntimeplugins",children:[(0,i.jsx)(n.code,{children:"modifyEntryRuntimePlugins"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryruntimeplugins",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：用于添加、修改生成入口文件中的 ",(0,i.jsx)(n.a,{href:"#Runtime",children:"Runtime 插件"})]}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成入口文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; plugins: RuntimePlugin[]; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryRuntimePlugins({ entrypoint, plugins }) {\n        const name = 'customPlugin';\n        const options = {\n          /** 可序列化的内容 */\n        };\n\n        return {\n          plugins: [\n            ...plugins,\n            {\n              name,\n              options: JSON.stringify(options),\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"modifyentryrenderfunction",children:[(0,i.jsx)(n.code,{children:"modifyEntryRenderFunction"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryrenderfunction",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：用于修改生成入口文件中 ",(0,i.jsx)(n.code,{children:"render"})," 函数"]}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成入口文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; code: string; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyEntryRenderFunction({ entrypoint, code }) {\n        const customRender = `/** render function body */`;\n        return {\n          entrypoint,\n          code: customRender,\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"modifyfilesystemroutes",children:[(0,i.jsx)(n.code,{children:"modifyFileSystemRoutes"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyfilesystemroutes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：用于修改生成前端页面路由文件中的内容，内容都是需要可序列化的"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成前端路由文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; routes: Route[]; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyFileSystemRoutes({ entrypoint, routes }) {\n        return {\n          entrypoint,\n          routes: [\n            ...routes,\n            {\n              path: '/custom_page',\n              component: require.resolve('./Component'),\n              exact: true,\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"这样就为前端新增了一个页面路由。"}),"\n",(0,i.jsxs)(n.h3,{id:"modifyserverroutes",children:[(0,i.jsx)(n.code,{children:"modifyServerRoutes"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyserverroutes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：用于修改生成服务器路由中的内容"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成 Server 路由文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ routes: ServerRoute[]; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyServerRoutes({ routes }) {\n        return {\n          routes: [\n            ...routes,\n            {\n              urlPath: '/api/foo',\n              isApi: true,\n              entryPath: '',\n              isSPA: false,\n              isSSR: false,\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"modifyasyncentry",children:[(0,i.jsx)(n.code,{children:"modifyAsyncEntry"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyasyncentry",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：用于修改包裹入口文件的异步模块，参见 ",(0,i.jsx)(n.a,{href:"/configure/app/source/enable-async-entry",children:"source.enableAsyncEntry"})]}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：生成入口文件之前，",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; code: string; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      modifyAsyncEntry({ entrypoint, code }) {\n        const customCode = `console.log('hello');`;\n        return {\n          entrypoint,\n          code: `${customCode}${code}`,\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"htmlpartials",children:[(0,i.jsx)(n.code,{children:"htmlPartials"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlpartials",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：用于定制生成的 HTML 页面模版"}),"\n",(0,i.jsxs)(n.li,{children:["执行阶段：",(0,i.jsx)(n.a,{href:"#prepare",children:(0,i.jsx)(n.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncWaterfall"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; partials: HtmlPartials; }>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  setup(api) {\n    return {\n      async htmlPartials({ entrypoint, partials }) {\n        partials.head.push('<script>console.log(\"test\")</script>');\n        return {\n          entrypoint,\n          partials,\n        };\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsx)(n.p,{children:"这样就为 HTML 模版中新增了一个 Script 标签。"}),"\n","\n",(0,i.jsxs)(n.h2,{id:"runtime",children:["Runtime",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"目前 Runtime 插件还未完全开放，API 不保证稳定，使用需谨慎。"}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"Runtime 插件主要用于开发者修改需要渲染的组件。"}),"\n",(0,i.jsxs)(n.h3,{id:"init",children:[(0,i.jsx)(n.code,{children:"init"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#init",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["功能：执行 ",(0,i.jsx)(n.code,{children:"App.init"})]}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：渲染（SSR/CSR）"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：AsyncPipeline"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"AsyncPipeline<{ context: RuntimeContext; }, unknown>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { Plugin } from '@modern-js/runtime';\n\nexport default (): Plugin => ({\n  setup(api) {\n    return {\n      init({ context }, next) {\n        // do something\n        return next({ context });\n      },\n    };\n  },\n});\n"})})})}),"\n",(0,i.jsxs)(n.h3,{id:"hoc",children:[(0,i.jsx)(n.code,{children:"hoc"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hoc",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"功能：修改需要渲染的组件"}),"\n",(0,i.jsx)(n.li,{children:"执行阶段：渲染（SSR/CSR）"}),"\n",(0,i.jsx)(n.li,{children:"Hook 模型：Pipeline"}),"\n",(0,i.jsxs)(n.li,{children:["类型：",(0,i.jsx)(n.code,{children:"Pipeline<{ App: React.ComponentType<any>; }, React.ComponentType<any>>"})]}),"\n",(0,i.jsx)(n.li,{children:"使用示例："}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"使用 hoc 钩子时，需要把原来的 App 组件的静态属性拷贝到新的组件上，并透传 props."})})]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createContext } from 'react';\nimport type { Plugin } from '@modern-js/runtime';\nimport hoistNonReactStatics from 'hoist-non-react-statics';\n\nexport default (): Plugin => ({\n  setup(api) {\n    const FooContext = createContext('');\n    return {\n      hoc({ App }, next) {\n        const AppWrapper = (props: any) => {\n          return (\n            <FooContext.Provider store={'test'}>\n              <App {...props} />\n            </FooContext.Provider>\n          );\n        };\n        return next({\n          App: hoistNonReactStatics(AppWrapper, App)\n        });\n      },\n    };\n  },\n});\n"})})})}),"\n"]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);