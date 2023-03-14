(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_zh_guides_topic-detail_generator_codesmith_introduce_mdx"],{43194:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return n},toc:function(){return l},title:function(){return i},default:function(){return c}});var o=r("41660");let n={sidebar_position:1},l=[{id:"核心概念",text:"核心概念",depth:2},{id:"generatorcore",text:"GeneratorCore",depth:3},{id:"materials",text:"Materials",depth:3}],i="什么是微生成器";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"什么是微生成器",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是微生成器",children:"#"}),"什么是微生成器"]}),"\n",(0,o.jsxs)(e.p,{children:["Modern.js 提供了 ",(0,o.jsx)(e.code,{children:"@modern-js/create"})," 工具和 ",(0,o.jsx)(e.code,{children:"new"})," 命令分别用于初始化创建项目和提供开启一些插件功能的能力，这些工具都是基于微生成器也就是 codesmith 实现的。"]}),"\n",(0,o.jsx)(e.p,{children:"codesmith 致力于提供一套微生成器的运行机制，并维护微生成器执行过程中的上下文信息，从而实现各种基于文件、命令等操作，完成复杂的操作。"}),"\n",(0,o.jsx)(e.p,{children:"codesmith 还将常用的方法进行了封装，可以直接使用其提供的 API 函数，可以更方便的实现自身的微生成器。"}),"\n",(0,o.jsxs)(e.h2,{id:"核心概念",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#核心概念",children:"#"}),"核心概念"]}),"\n",(0,o.jsxs)(e.h3,{id:"generatorcore",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#generatorcore",children:"#"}),"GeneratorCore"]}),"\n",(0,o.jsx)(e.p,{children:"GeneratorCore 是 codesmith 运行生成器的核心，维护这生成器执行过程中的上下文及运行方法。"}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  logger"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ILogger"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 日志"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  materialsManager"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MaterialsManager"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 资源"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  outputPath"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 输出路径"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 输出方法"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fs"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      file"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      data"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      options"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fs"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"WriteFileOptions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  _context"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 上下文信息"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(key"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" material"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 添加资源"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"runGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    generator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    config"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  )"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 运行生成器"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"runSubGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    subGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    relativePwdPath"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    config"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  )"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 运行子生成器"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h3,{id:"materials",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#materials",children:"#"}),"Materials"]}),"\n",(0,o.jsx)(e.p,{children:"微生成器资源信息，目前只包含文件资源(fsMaterials)，通过该字段可以获取到生成器执行过程中的 template 资源，并通过 API 对其进行操作。"}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MaterialsManager"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  materialMap"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 资源映射关系"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    [materialUri"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"loadLocalGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(generator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 加载本地生成器资源(绝对路径)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"loadRemoteGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(generator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 加载远程生成器资源(npm 包)"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}}}]);