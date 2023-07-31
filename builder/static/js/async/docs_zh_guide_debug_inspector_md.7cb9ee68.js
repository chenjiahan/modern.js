(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_debug_inspector_md"],{64100:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var c,s=r("15169"),d=r("43932"),l=r("9880"),i=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",img:"img",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"使用-webpack-inspector",children:["使用 Webpack Inspector",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-webpack-inspector",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Builder 内置了 ",(0,l.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," 来辅助调试 webpack 构建问题。"]}),"\n",(0,l.jsxs)(n.h2,{id:"介绍",children:["介绍",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"由于 webpack 内部的工作流程比较黑盒，在使用 webpack 时，我们常常会遇到如下的一些问题:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"在使用上层框架时，不知道最终生成的 webpack 配置包含哪些内容。"}),"\n",(0,l.jsx)(n.li,{children:"每个模块会经过不同的 loader 处理，经过各个 loader 的编译结果难以感知。"}),"\n",(0,l.jsx)(n.li,{children:"难以感知 webpack 各个编译环节 (比如 babel-loader、ts-loader) 的耗时情况。"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["为了更方便地进行 webpack 项目的错误排查、性能分析及 loader 开发，我们在 Builder 中内置了 ",(0,l.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," 工具。"]}),"\n",(0,l.jsxs)(n.h2,{id:"启用",children:["启用",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你可以通过 ",(0,l.jsx)(n.a,{href:"/api/config-tools#toolsinspector",children:"tools.inspector"})," 配置项来开启 webpack inspector:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    inspector: {},\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"为了避免 inspector 影响正常开发，建议配置仅在 DEBUG 时开启 inspector："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    inspector: process.env.DEBUG ? {} : undefined,\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["添加以上配置后，当你执行 ",(0,l.jsx)(n.code,{children:"DEBUG=true pnpm dev"})," 时，Builder 会在编译完成后启动 inspector，此时 Shell 中可以看到如下信息："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"info    Starting dev server...\n\n【Webpack Inspector】\uD83D\uDD25 started at http://localhost:3333\n"})}),"\n",(0,l.jsxs)(n.p,{children:["打开 ",(0,l.jsx)(n.code,{children:"http://localhost:3333"})," 地址，即可访问 inspector 的调试面板。"]}),"\n",(0,l.jsxs)(n.h2,{id:"调试面板",children:["调试面板",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调试面板",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Inspector 的调试面板提供了多种模式，你可以通过右上角的开关进行切换。"}),"\n",(0,l.jsxs)(n.h3,{id:"配置预览模式",children:["配置预览模式",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置预览模式",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"面板的默认模式为配置预览模式。此模式下可以查看 webpack 内部所有的配置信息，配置对象可自由展开和折叠:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"列表模式",children:["列表模式",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#列表模式",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"此模式下会展示出所有的模块信息:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"点击列表项会出现模块的编译详情信息:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"loader-统计数据",children:["Loader 统计数据",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-统计数据",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"点击如下的开关，可以查看 Loader 的统计数据:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"依赖图模式",children:["依赖图模式",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#依赖图模式",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"此模式下会展示出所有模块的依赖关系："}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"点击图中的节点也会呈现具体模块的编译详情："}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png",alt:""})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsx)(n.p,{children:"出于性能考虑，模块数量 > 100 时不会展示依赖图。"})})]})]})}(c=globalThis).__RSPRESS_PAGE_META||(c.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fdebug%2Finspector.md"]={toc:[{text:"介绍",id:"介绍",depth:2},{text:"启用",id:"启用",depth:2},{text:"调试面板",id:"调试面板",depth:2},{text:"配置预览模式",id:"配置预览模式",depth:3},{text:"列表模式",id:"列表模式",depth:3},{text:"Loader 统计数据",id:"loader-统计数据",depth:3},{text:"依赖图模式",id:"依赖图模式",depth:3}],title:"使用 Webpack Inspector",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,d._)((0,s._)({},e),{children:(0,l.jsx)(a,(0,s._)({},e))})):a(e)}}}]);