(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_testing_mdx"],{41426:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s,t=r("15169"),d=r("43932"),i=r("9880"),a=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"测试",children:["测试",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#测试",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 默认集成了 ",(0,i.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," 的测试能力。"]}),"\n",(0,i.jsxs)(n.p,{children:["我们首先需要执行 ",(0,i.jsx)(n.code,{children:"pnpm run new"})," 启用「单元测试 / 集成测试」功能："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「单元测试 / 集成测试」功能\n"})}),"\n",(0,i.jsxs)(n.p,{children:["执行上述命令后，",(0,i.jsx)(n.code,{children:"package.json"})," 中将会自动添加 ",(0,i.jsx)(n.code,{children:'"test": "modern test"'})," 命令。"]}),"\n",(0,i.jsxs)(n.p,{children:["在 ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," 中注册 ",(0,i.jsx)(n.code,{children:"@modern-js/plugin-testing"})," 插件后即可使用测试功能："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { testingPlugin } from '@modern-js/plugin-testing';\n\nexport default defineConfig({\n  ...,\n  plugins: [..., testingPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"测试文件",children:["测试文件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#测试文件",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 默认识别的测试文件路径为：",(0,i.jsx)(n.code,{children:"<rootDir>/src/**/*.test.[jt]s?(x)"})," 和 ",(0,i.jsx)(n.code,{children:"<rootDir>/tests/**/*.test.[jt]s?(x)"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果你需要自定义 test 目录，可通过 ",(0,i.jsx)(n.a,{href:"/configure/app/tools/jest",children:"tools.jest"})," 进行配置。"]}),"\n",(0,i.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js test 支持使用 ",(0,i.jsx)(n.a,{href:"https://testing-library.com/docs/",target:"_blank",rel:"noopener noreferrer",children:"testing-library"})," 相关包 API，可直接通过 ",(0,i.jsx)(n.code,{children:"@modern-js/runtime/testing"})," 进行导入:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { render, screen } from '@modern-js/runtime/testing';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["其他 Modern.js 支持的 testing API 可参考",(0,i.jsx)(n.a,{href:"/apis/app/runtime/testing/cleanup",children:"这里"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"transform",children:["transform",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js 测试默认使用 ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," 进行源码编译，如果你需要使用 ",(0,i.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),"，可以通过 ",(0,i.jsx)(n.a,{href:"/configure/app/testing/transformer",children:"testing.transform"})," 进行配置。"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/guides/advanced-features/testing.mdx"]={toc:[{text:"测试文件",id:"测试文件",depth:2},{text:"使用姿势",id:"使用姿势",depth:2},{text:"transform",id:"transform",depth:2}],title:"测试",frontmatter:{sidebar_position:10}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,d._(t._({},e),{children:(0,i.jsx)(o,t._({},e))})):o(e)}}}]);