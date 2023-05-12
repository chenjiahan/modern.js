(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_introduce_mdx"],{84093:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return o},default:function(){return c}});var a=r("9880"),t=r("23169"),s={sidebar_position:1},i="什么是微生成器",o=[{text:"核心概念",depth:2,id:"核心概念"},{text:"GeneratorCore",depth:3,id:"generatorcore"},{text:"Materials",depth:3,id:"materials"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"什么是微生成器",children:["什么是微生成器",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是微生成器",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,a.jsx)(n.code,{children:"@modern-js/create"})," 工具和 ",(0,a.jsx)(n.code,{children:"new"})," 命令分别用于初始化创建项目和提供开启一些插件功能的能力，这些工具都是基于微生成器也就是 codesmith 实现的。"]}),"\n",(0,a.jsx)(n.p,{children:"codesmith 致力于提供一套微生成器的运行机制，并维护微生成器执行过程中的上下文信息，从而实现各种基于文件、命令等操作，完成复杂的操作。"}),"\n",(0,a.jsx)(n.p,{children:"codesmith 还将常用的方法进行了封装，可以直接使用其提供的 API 函数，可以更方便的实现自身的微生成器。"}),"\n",(0,a.jsxs)(n.h2,{id:"核心概念",children:["核心概念",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#核心概念",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"generatorcore",children:["GeneratorCore",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generatorcore",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"GeneratorCore 是 codesmith 运行生成器的核心，维护这生成器执行过程中的上下文及运行方法。"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"class GeneratorCore {\n  logger: ILogger; // 日志\n  materialsManager: MaterialsManager; // 资源\n  outputPath: string; // 输出路径\n  output: {\n    // 输出方法\n    fs: (\n      file: string | number,\n      data: any,\n      options?: fs.WriteFileOptions | string,\n    ) => Promise<void>;\n  };\n  _context: GeneratorContext; // 上下文信息\n  addMaterial(key: string, material: FsMaterial): void; // 添加资源\n  runGenerator(\n    generator: string,\n    config?: Record<string, unknown>,\n  ): Promise<void>; // 运行生成器\n  runSubGenerator(\n    subGenerator: string,\n    relativePwdPath?: string,\n    config?: Record<string, any>,\n  ): Promise<void>; // 运行子生成器\n}\n"})})})}),"\n",(0,a.jsxs)(n.h3,{id:"materials",children:["Materials",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#materials",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"微生成器资源信息，目前只包含文件资源(fsMaterials)，通过该字段可以获取到生成器执行过程中的 template 资源，并通过 API 对其进行操作。"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MaterialsManager {\n  materialMap: {\n    // 资源映射关系\n    [materialUri: string]: FsMaterial;\n  };\n  loadLocalGenerator(generator: string): Promise<FsMaterial>; // 加载本地生成器资源(绝对路径)\n  loadRemoteGenerator(generator: string): Promise<FsMaterial>; // 加载远程生成器资源(npm 包)\n}\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);