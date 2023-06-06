(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_builder-instance_mdx"],{33715:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return b},title:function(){return m},toc:function(){return f},default:function(){return N}});var i=r("9880"),l=r("23169"),d=r.ir(r("28156")),s=r.ir(r("76741")),t=r.ir(r("53950")),c=r.ir(r("4593")),a=r.ir(r("52829")),h=r.ir(r("12230")),o=r.ir(r("53108")),u=r.ir(r("15385")),x=r.ir(r("18295")),j=r.ir(r("59186")),p=r.ir(r("1369")),g=r.ir(r("38111")),b={extractApiHeaders:[2]},m="Builder Instance",f=[{text:"builder.context",depth:2,id:"buildercontext"},{text:"builder.context.entry",depth:3,id:"buildercontextentry"},{text:"builder.context.target",depth:3,id:"buildercontexttarget"},{text:"builder.context.rootPath",depth:3,id:"buildercontextrootpath"},{text:"builder.context.srcPath",depth:3,id:"buildercontextsrcpath"},{text:"builder.context.distPath",depth:3,id:"buildercontextdistpath"},{text:"builder.context.cachePath",depth:3,id:"buildercontextcachepath"},{text:"builder.context.configPath",depth:3,id:"buildercontextconfigpath"},{text:"builder.context.tsconfigPath",depth:3,id:"buildercontexttsconfigpath"},{text:"builder.context.framework",depth:3,id:"buildercontextframework"},{text:"builder.context.devServer",depth:3,id:"buildercontextdevserver"},{text:"builder.context.bundlerType",depth:3,id:"buildercontextbundlertype"},{text:"builder.build",depth:2,id:"builderbuild"},{text:"开发环境构建",depth:3,id:"开发环境构建"},{text:"监听文件变化",depth:3,id:"监听文件变化"},{text:"自定义 Compiler",depth:3,id:"自定义-compiler"},{text:"builder.startDevServer",depth:2,id:"builderstartdevserver"},{text:"自定义 URL 输出",depth:3,id:"自定义-url-输出"},{text:"严格限制端口",depth:3,id:"严格限制端口"},{text:"自定义 Compiler",depth:3,id:"自定义-compiler-1"},{text:"builder.createCompiler",depth:2,id:"buildercreatecompiler"},{text:"builder.addPlugins",depth:2,id:"builderaddplugins"},{text:"builder.removePlugins",depth:2,id:"builderremoveplugins"},{text:"builder.isPluginExists",depth:2,id:"builderispluginexists"},{text:"builder.inspectConfig",depth:2,id:"builderinspectconfig"},{text:"builder.onBeforeCreateCompiler",depth:2,id:"builderonbeforecreatecompiler"},{text:"builder.onAfterCreateCompiler",depth:2,id:"builderonaftercreatecompiler"},{text:"builder.onBeforeBuild",depth:2,id:"builderonbeforebuild"},{text:"builder.onAfterBuild",depth:2,id:"builderonafterbuild"},{text:"builder.onBeforeStartDevServer",depth:2,id:"builderonbeforestartdevserver"},{text:"builder.onAfterStartDevServer",depth:2,id:"builderonafterstartdevserver"},{text:"builder.onDevCompileDone",depth:2,id:"builderondevcompiledone"},{text:"builder.onExit",depth:2,id:"builderonexit"},{text:"builder.getBuilderConfig",depth:2,id:"buildergetbuilderconfig"},{text:"builder.getNormalizedConfig",depth:2,id:"buildergetnormalizedconfig"},{text:"builder.getHTMLPaths",depth:2,id:"buildergethtmlpaths"}];function v(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",blockquote:"blockquote"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"builder-instance",children:["Builder Instance",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-instance",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"本章节描述了 Builder 实例对象上所有的属性和方法。"}),"\n",(0,i.jsxs)(n.h2,{id:"buildercontext",children:["builder.context",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontext",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"builder.context"})," 是一个只读对象，提供一些上下文信息。"]}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextentry",children:["builder.context.entry",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextentry",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["构建入口对象，对应调用 ",(0,i.jsx)(n.code,{children:"createBuilder"})," 时传入的 ",(0,i.jsx)(n.code,{children:"entry"})," 选项。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type BuilderEntry = Record<string, string | string[]>;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontexttarget",children:["builder.context.target",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontexttarget",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["构建产物类型，对应调用 ",(0,i.jsx)(n.code,{children:"createBuilder"})," 时传入的 ",(0,i.jsx)(n.code,{children:"target"})," 选项。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\n\ntype Context = {\n  target: BuilderTarget | BuilderTarget[];\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextrootpath",children:["builder.context.rootPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextrootpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["当前执行构建的根路径，对应调用 ",(0,i.jsx)(n.code,{children:"createBuilder"})," 时传入的 ",(0,i.jsx)(n.code,{children:"cwd"})," 选项。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type RootPath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextsrcpath",children:["builder.context.srcPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextsrcpath",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"src 目录的绝对路径。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type SrcPath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextdistpath",children:["builder.context.distPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextdistpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["构建产物输出目录的绝对路径，对应 ",(0,i.jsx)(n.code,{children:"BuilderConfig"})," 中的 ",(0,i.jsx)(n.code,{children:"output.distPath.root"})," 配置项。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DistPath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextcachepath",children:["builder.context.cachePath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextcachepath",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"构建过程中生成的缓存文件所在的绝对路径。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type CachePath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextconfigpath",children:["builder.context.configPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextconfigpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["框架配置文件的绝对路径，对应调用 ",(0,i.jsx)(n.code,{children:"createBuilder"})," 时传入的 ",(0,i.jsx)(n.code,{children:"configPath"})," 选项。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type ConfigPath = string | undefined;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontexttsconfigpath",children:["builder.context.tsconfigPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontexttsconfigpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["tsconfig.json 文件的绝对路径，若项目中不存在 tsconfig.json 文件，则为 ",(0,i.jsx)(n.code,{children:"undefined"}),"。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type TsconfigPath = string | undefined;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextframework",children:["builder.context.framework",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextframework",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["框架的英文名称，唯一标识符，默认值为 ",(0,i.jsx)(n.code,{children:"'modern.js'"}),"。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type Framework = string | undefined;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextdevserver",children:["builder.context.devServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextdevserver",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Dev Server 相关信息，包含了当前 Dev Server 的 hostname 和端口号。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DevServer = {\n  hostname: string;\n  port: number;\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextbundlertype",children:["builder.context.bundlerType",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextbundlertype",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"当前执行构建的构建工具类型。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type bundlerType = 'webpack' | 'rspack';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderbuild",children:["builder.build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderbuild",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"调用 build 方法时，会执行一次生产环境构建。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type BuildOptions = {\n  mode?: 'development' | 'production';\n  watch?: boolean;\n  // 自定义 Compiler 对象\n  compiler?: Compiler | MultiCompiler;\n};\n\nfunction Build(options?: BuildOptions): Promise<void>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.build();\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"开发环境构建",children:["开发环境构建",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发环境构建",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["如果需要执行一次开发环境构建，可以将 ",(0,i.jsx)(n.code,{children:"mode"})," 参数设置为 ",(0,i.jsx)(n.code,{children:"'development'"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.build({\n  mode: 'development',\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"监听文件变化",children:["监听文件变化",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#监听文件变化",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["如果需要自动监听文件变化并重新执行构建，可以将 ",(0,i.jsx)(n.code,{children:"watch"})," 参数设置为 ",(0,i.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.build({\n  watch: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"自定义-compiler",children:["自定义 Compiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-compiler",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"个别情况下，你可能希望使用自定义的 compiler："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const compiler = webpack({\n  // ...\n});\nawait builder.build({\n  compiler,\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderstartdevserver",children:["builder.startDevServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderstartdevserver",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"启动本地 Dev Server，基于 Modern.js Dev Server 实现。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type StartDevServerOptions = {\n  // 是否输出 URL 信息，默认为 true\n  printURLs?: boolean | Function;\n  // 是否在端口被占用时抛出异常，默认为 false\n  strictPort?: boolean;\n  // 自定义 Compiler 对象\n  compiler?: Compiler | MultiCompiler;\n  // 透传与构建无关的 dev server 配置\n  serverOptions?: Partial<ModernDevServerOptions>;\n};\n\ntype StartDevServerResult = {\n  urls: string[];\n  port: number;\n  server: Server;\n};\n\nfunction StartDevServer(\n  options?: StartDevServerOptions,\n): Promise<StartDevServerResult>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"启动 Dev Server："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer();\n"})}),"\n",(0,i.jsx)(n.p,{children:"成功启动 Dev Server 后，可以看到以下日志信息："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"info    Starting dev server...\ninfo    Dev server running at:\n\n  > Local:    http://localhost:8080\n  > Network:  http://192.168.0.1:8080\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"startDevServer"})," 会返回以下参数："]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"urls"}),"：访问 Dev Server 的 URLs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"})," 实际监听的端口号"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"server"}),"：Server 实例对象"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const { urls, port, server } = await builder.startDevServer();\nconsole.log(urls); // ['http://localhost:8080', 'http://192.168.0.1:8080']\nconsole.log(port); // 8080\n\n// 关闭 Dev Server\nawait server.close();\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"自定义-url-输出",children:["自定义 URL 输出",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-url-输出",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["将 ",(0,i.jsx)(n.code,{children:"printURLs"})," 设置为 ",(0,i.jsx)(n.code,{children:"false"})," 可以禁用默认的 URL 输出，此时你可以输出自定义的日志内容。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  printURLs: false,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["你也可以直接将 ",(0,i.jsx)(n.code,{children:"printURLs"})," 配置为一个函数来修改 URL，比如给每个 URL 增加一个子路径："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  printURLs: urls => {\n    return urls.map(({ label, url }) => ({\n      label,\n      url: `${url}/path`,\n    }));\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"严格限制端口",children:["严格限制端口",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#严格限制端口",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"当端口被占用时，Builder 会自动递增端口号，直至找到一个可用端口。"}),"\n",(0,i.jsxs)(n.p,{children:["如果你希望在端口被占用时抛出异常，可以将 ",(0,i.jsx)(n.code,{children:"strictPort"})," 设置为 ",(0,i.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  strictPort: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"自定义-compiler-1",children:["自定义 Compiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-compiler-1",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"个别情况下，你可能希望使用自定义的 compiler："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const compiler = webpack({\n  // ...\n});\nawait builder.startDevServer({\n  compiler,\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildercreatecompiler",children:["builder.createCompiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercreatecompiler",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"创建一个 compiler 对象。"}),"\n",(0,i.jsxs)(n.p,{children:["当 ",(0,i.jsx)(n.code,{children:"createBuilder"})," 的 ",(0,i.jsx)(n.code,{children:"target"})," 选项包含一个值时，返回值为 ",(0,i.jsx)(n.code,{children:"Compiler"}),"；当 ",(0,i.jsx)(n.code,{children:"target"})," 包含多个值时，返回值为 ",(0,i.jsx)(n.code,{children:"MultiCompiler"}),"。"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function CreateCompiler(): Promise<Compiler | MultiCompiler>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const compiler = await builder.createCompiler();\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"大部分场景下，不需要使用该 API，除非需要进行自定义 Dev Server 等高级操作。"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"builderaddplugins",children:["builder.addPlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderaddplugins",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"注册一个或多个 builder 插件，可以被多次调用。"}),"\n",(0,i.jsx)(n.p,{children:"该方法需要在开始编译前调用，如果在开始编译之后调用，则不会影响编译结果。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type AddPluginsOptions = { before?: string } | { after?: string };\n\nfunction AddPlugins(\n  plugins: BuilderPlugins[],\n  options?: AddPluginsOptions,\n): Promise<void>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.addPlugins([builderPluginFoo(), builderPluginBar()]);\n\n// 在 bar 插件之前插入\nbuilder.addPlugins([builderPluginFoo()], { before: 'bar' });\n\n// 在 bar 插件之后插入\nbuilder.addPlugins([builderPluginFoo()], { after: 'bar' });\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderremoveplugins",children:["builder.removePlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderremoveplugins",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"移除一个或多个 builder 插件，可以被多次调用。"}),"\n",(0,i.jsx)(n.p,{children:"该方法需要在开始编译前调用，如果在开始编译之后调用，则不会影响编译结果。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function RemovePlugins(pluginNames: string[]): void;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// 添加插件\nconst pluginFoo = builderPluginFoo();\nbuilder.addPlugins(pluginFoo);\n\n// 移除插件\nbuilder.removePlugins([pluginFoo.name]);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderispluginexists",children:["builder.isPluginExists",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderispluginexists",children:"#"})]}),"\n","\n",(0,i.jsx)(d.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.addPlugins([builderPluginFoo()]);\n\nbuilder.isPluginExists(builderPluginFoo().name); // true\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderinspectconfig",children:["builder.inspectConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderinspectconfig",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"查看 Builder 内部最终生成的 builder 配置和 bundler 配置。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'type InspectConfigOptions = {\n  // 查看指定环境下的配置，默认为 "development"，可以设置为 "production"\n  env?: BuilderMode;\n  // 是否开启冗余模式，展示配置中函数的完整内容，默认为 `false`\n  verbose?: boolean;\n  // 指定输出路径，默认为 `output.distPath.root` 配置的值\n  outputPath?: string;\n  // 是否将结果写入到磁盘中，默认为 `false`\n  writeToDisk?: boolean;\n};\n\nasync function InspectConfig(options?: InspectConfigOptions): Promise<{\n  builderConfig: string;\n  bundlerConfigs: string[];\n  origin: {\n    builderConfig: BuilderConfig;\n    bundlerConfigs: BundlerConfigs[];\n  };\n}>;\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"拿到字符串格式的 Config 内容："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const { builderConfig, bundlerConfigs } = await builder.inspectConfig();\n\nconsole.log(builderConfig, bundlerConfigs);\n"})}),"\n",(0,i.jsx)(n.p,{children:"直接将配置内容写入到磁盘上："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.inspectConfig({\n  writeToDisk: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonbeforecreatecompiler",children:["builder.onBeforeCreateCompiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n  console.log('the bundler config is ', bundlerConfigs);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonaftercreatecompiler",children:["builder.onAfterCreateCompiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonaftercreatecompiler",children:"#"})]}),"\n","\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onAfterCreateCompiler(({ compiler }) => {\n  console.log('the compiler is ', compiler);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonbeforebuild",children:["builder.onBeforeBuild",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforebuild",children:"#"})]}),"\n","\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(({ bundlerConfigs }) => {\n  console.log('the bundler config is ', bundlerConfigs);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonafterbuild",children:["builder.onAfterBuild",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonafterbuild",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onAfterBuild(({ stats }) => {\n  console.log(stats?.toJson());\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonbeforestartdevserver",children:["builder.onBeforeStartDevServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforestartdevserver",children:"#"})]}),"\n","\n",(0,i.jsx)(h.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeStartDevServer(() => {\n  console.log('before start!');\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonafterstartdevserver",children:["builder.onAfterStartDevServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonafterstartdevserver",children:"#"})]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onAfterStartDevServer(({ port }) => {\n  console.log('this port is: ', port);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderondevcompiledone",children:["builder.onDevCompileDone",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderondevcompiledone",children:"#"})]}),"\n","\n",(0,i.jsx)(u.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onDevCompileDone(({ isFirstCompile }) => {\n  if (isFirstCompile) {\n    console.log('first compile!');\n  } else {\n    console.log('re-compile!');\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonexit",children:["builder.onExit",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonexit",children:"#"})]}),"\n","\n",(0,i.jsx)(x.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onExit(() => {\n  console.log('exit!');\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildergetbuilderconfig",children:["builder.getBuilderConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergetbuilderconfig",children:"#"})]}),"\n","\n",(0,i.jsx)(j.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const config = api.getBuilderConfig();\n  console.log(config.html?.title);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildergetnormalizedconfig",children:["builder.getNormalizedConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergetnormalizedconfig",children:"#"})]}),"\n","\n",(0,i.jsx)(p.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const config = api.getNormalizedConfig();\n  console.log(config.html.title);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildergethtmlpaths",children:["builder.getHTMLPaths",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergethtmlpaths",children:"#"})]}),"\n","\n",(0,i.jsx)(g.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const htmlPaths = api.getHTMLPaths();\n  console.log(htmlPaths); // { main: 'html/main/index.html' };\n});\n"})})]})}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(v,e)})):v(e)}}}]);