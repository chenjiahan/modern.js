(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_api_plugin-api_plugin-hooks_md"],{19585:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,l=r("15169"),i=r("43932"),o=r("9880"),d=r("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",h3:"h3",pre:"pre",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"plugin-hooks",children:["Plugin Hooks",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-hooks",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"本章介绍关于 Module Tools 支持的生命周期钩子。"}),"\n",(0,o.jsx)(n.p,{children:"目前主要包含两类生命周期钩子："}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["构建钩子：仅在执行 ",(0,o.jsx)(n.code,{children:"build"})," 命令构建源码产物时触发。"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"buildPlatform"})," 钩子：仅在执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 命令生成其他构建产物时触发。"]}),"\n",(0,o.jsxs)(n.li,{children:["调试钩子：运行 ",(0,o.jsx)(n.code,{children:"dev"})," 命令时会触发的钩子。"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"构建钩子",children:["构建钩子",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建钩子",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["在执行 ",(0,o.jsx)(n.code,{children:"build"})," 命令的时候，会按照顺序触发以下 Hooks："]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"beforeBuild"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"beforeBuildTask"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"afterBuildTask"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"afterBuild"})}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"beforebuild",children:[(0,o.jsx)(n.code,{children:"beforeBuild"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuild",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"执行整体构建流程之前触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeBuild(options: Options): Return {\n        return options.config;\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"参数和返回值类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  options: { config: BuildConfig; cliOptions: BuildCommandOptions };\n};\n\nexport interface BuildCommandOptions {\n  config: string;\n  clear?: boolean;\n  dts?: boolean;\n  platform?: boolean | string[];\n  tsconfig: string;\n  watch?: boolean;\n}\n\ntype Return = BuildConfig;\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"BuildConfig"})," 类型参考 ",(0,o.jsx)(n.a,{href:"/api/",children:"API 配置"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"beforebuildtask",children:[(0,o.jsx)(n.code,{children:"beforeBuildTask"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuildtask",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"根据构建配置，Module Tools 会将整体构建分成多个子构建任务。该 Hook 将会在每一个构建子任务之前触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeBuildTask(config: BaseBuildConfig): BaseBuildConfig {\n        return config;\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"参数和返回值类型："}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"BaseBuildConfig"})," 类型参考 ",(0,o.jsx)(n.a,{href:"/api/",children:"API 配置"}),"。"]}),"\n",(0,o.jsxs)(n.h3,{id:"afterbuildtask",children:[(0,o.jsx)(n.code,{children:"afterBuildTask"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuildtask",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"每一个构建子任务结束之后触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterBuildTask(options: BuildTaskResult): void {\n        // ...\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"参数和返回值类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface BuildTaskResult {\n  status: 'success' | 'fail';\n  message?: string;\n  config: BaseBuildConfig;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"afterbuild",children:[(0,o.jsx)(n.code,{children:"afterBuild"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuild",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"整体构建流程结束之后触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterBuild(options: BuildResult): void {\n        // ...\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"参数和返回值类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface BuildResult {\n  status: 'success' | 'fail';\n  message?: string;\n  config: BuildConfig;\n  commandOptions: BuildCommandOptions;\n  totalDuration: number;\n}\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"buildplatform-钩子",children:["buildPlatform 钩子",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildplatform-钩子",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["module-tools 还提供了 ",(0,o.jsx)(n.code,{children:"build --platform"})," 命令来执行特定的构建任务。"]}),"\n",(0,o.jsxs)(n.p,{children:["例如在安装了 Storybook 插件后，就可以执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 或者 ",(0,o.jsx)(n.code,{children:"build --platform storybook"})," 来执行 Storybook 的构建任务。因为 Storybook 插件基于 buildPlatform Hooks 实现了该功能。"]}),"\n",(0,o.jsxs)(n.p,{children:["在执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 后会按照以下顺序触发 Hooks："]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"registerBuildPlatform"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"beforeBuildPlatform"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"buildPlatform"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"afterBuildPlatform"})}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"registerbuildplatform",children:[(0,o.jsx)(n.code,{children:"registerBuildPlatform"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#registerbuildplatform",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["获取在执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 命令时候需要运行的任务信息。"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      registerBuildPlatform(): RegisterBuildPlatformResult {\n        // ...\n        return {\n          platform: 'stroybook',\n          build() {\n            // run storybook logic\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface RegisterBuildPlatformResult {\n  platform: string | string[];\n  build: (\n    currentPlatform: string, // 当前运行的 platform 构建任务\n    context: { isTsProject: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforebuildplatform",children:[(0,o.jsx)(n.code,{children:"beforeBuildPlatform"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuildplatform",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["当执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 命令的时候，会触发所有已注册的构建任务。",(0,o.jsx)(n.code,{children:"beforeBuildPlatform"})," 会在执行整体的构建任务之前触发。"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeBuildPlatform(platforms: RegisterBuildPlatformResult[]): void {\n        console.info(`have ${platforms.length} platform tasks`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface RegisterBuildPlatformResult {\n  platform: string | string[];\n  build: (\n    currentPlatform: string, // 当前运行的 platform 构建任务\n    context: { isTsProject: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"buildplatform",children:[(0,o.jsx)(n.code,{children:"buildPlatform"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildplatform",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["当执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 命令的时候，会触发所有已注册的构建任务。",(0,o.jsx)(n.code,{children:"buildPlatform"})," 会在每个构建任务执行之前触发。"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      buildPlatform({ platform }: Options): void {\n        console.info(`current task is ${platform}`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface Options {\n  platform: string;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"afterbuildplatform",children:[(0,o.jsx)(n.code,{children:"afterBuildPlatform"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuildplatform",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["当执行 ",(0,o.jsx)(n.code,{children:"build --platform"})," 命令的时候，会触发所有已注册的构建任务。",(0,o.jsx)(n.code,{children:"afterBuildPlatform"})," 会在整体 platform 构建任务结束后触发。"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterBuildPlatform(result: BuildPlatformResult): void {\n        if (result.status === 'success') {\n          console.info(`all platform build task success`);\n        } else {\n          console.error(result.message);\n        }\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface BuildPlatformResult {\n  status: 'success' | 'fail';\n  message: string | Error | null;\n}\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"调试钩子",children:["调试钩子",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调试钩子",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["在执行 ",(0,o.jsx)(n.code,{children:"dev"})," 命令的时候，会按照顺序触发以下 Hooks："]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"registerDev"}),": 在获取调试功能信息的时候触发。"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"beforeDev"}),": 开始执行调试整体流程之前触发。"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"beforeDevMenu"}),": 出现调试列表/菜单之前触发。"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"afterDevMenu"}),": 选择调试列表/菜单选项后触发。"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"beforeDevTask"}),": 执行调试任务之前触发。"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"afterDev"}),": 执行 dev 整体流程最后触发。"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"registerdev",children:[(0,o.jsx)(n.code,{children:"registerDev"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#registerdev",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"注册调试工具相关的数据。主要包含："}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"调试工具的名称"}),"\n",(0,o.jsx)(n.li,{children:"显示在菜单列表中的项目名称以及对应的值。"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dev"})," 子命令的定义。"]}),"\n",(0,o.jsx)(n.li,{children:"是否在运行调试任务之前执行源码构建"}),"\n",(0,o.jsx)(n.li,{children:"执行调试任务的函数。"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      registerDev() {\n        return {\n          // 调试工具名称\n          name: 'storybook',\n          // 菜单显示内容\n          menuItem: {\n            name: 'Storybook',\n            value: 'storybook',\n          },\n          // 定义的 dev 子命令\n          subCommands: ['storybook', 'story'],\n          async action() {\n            // dev logic\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforedev",children:[(0,o.jsx)(n.code,{children:"beforeDev"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedev",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"在收集完所有调试工具元数据后，执行 dev 任务之前触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeDev(metas: DevToolData[]) {\n        console.info(`have ${metas.length} dev tools`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforeafterdevmenu",children:[(0,o.jsx)(n.code,{children:"(before|after)DevMenu"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeafterdevmenu",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"beforeDevMenu"})," 在出现调试列表/菜单之前触发。接收 ",(0,o.jsx)(n.a,{href:"https://github.com/SBoudrias/Inquirer.js#question",target:"_blank",rel:"noopener noreferrer",children:"inquirer question"})," 作为参数。默认值为："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const question = [\n  {\n    name: 'choiceDevTool',\n    message: '选择调试工具',\n    type: 'list',\n    // 注册的调试信息\n    choices,\n  },\n];\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"afterDevMenu"})," 选择调试列表/菜单选项后触发。"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeDevMenu(questions) {\n        questions[0].message += '!';\n        return questions; // required\n      },\n      afterDevMenu(options: Options) {\n        console.info(`choise ${options.result.choiceDevTool} dev tools`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export type { QuestionCollection } from 'inquirer';\n\nexport interface Options {\n  result: PromptResult;\n  devTools: DevToolData[];\n}\n\nexport type PromptResult = { choiceDevTool: string };\nexport interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"beforedevtask",children:[(0,o.jsx)(n.code,{children:"beforeDevTask"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedevtask",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"执行调试任务之前触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeDevTask(currentDevData: DevToolData) {\n        console.info(`${currentDevData.name} running`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"入参和返回的参数类型："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"afterdev",children:[(0,o.jsx)(n.code,{children:"afterDev"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterdev",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"在中断调试任务进程时触发。"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterDev() {\n        console.info(`exit!`);\n      },\n    };\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapi%2Fplugin-api%2Fplugin-hooks.md"]={toc:[{text:"构建钩子",id:"构建钩子",depth:2},{text:"beforeBuild",id:"beforebuild",depth:3},{text:"beforeBuildTask",id:"beforebuildtask",depth:3},{text:"afterBuildTask",id:"afterbuildtask",depth:3},{text:"afterBuild",id:"afterbuild",depth:3},{text:"buildPlatform 钩子",id:"buildplatform-钩子",depth:2},{text:"registerBuildPlatform",id:"registerbuildplatform",depth:3},{text:"beforeBuildPlatform",id:"beforebuildplatform",depth:3},{text:"buildPlatform",id:"buildplatform",depth:3},{text:"afterBuildPlatform",id:"afterbuildplatform",depth:3},{text:"调试钩子",id:"调试钩子",depth:2},{text:"registerDev",id:"registerdev",depth:3},{text:"beforeDev",id:"beforedev",depth:3},{text:"(before|after)DevMenu",id:"beforeafterdevmenu",depth:3},{text:"beforeDevTask",id:"beforedevtask",depth:3},{text:"afterDev",id:"afterdev",depth:3}],title:"Plugin Hooks",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,i._)((0,l._)({},e),{children:(0,o.jsx)(t,(0,l._)({},e))})):t(e)}}}]);