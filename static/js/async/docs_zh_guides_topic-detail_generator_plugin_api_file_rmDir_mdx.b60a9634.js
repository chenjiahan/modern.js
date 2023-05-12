(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_rmDir_mdx"],{22137:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return a},toc:function(){return c},default:function(){return o}});var i=r("9880"),d=r("23169"),s={sidebar_position:10},a="rmDir",c=[{text:"dirName",depth:2,id:"dirname"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"rmdir",children:["rmDir",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rmdir",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"删除文件夹。该方法会递归的删除文件夹下的所有文件。"}),"\n",(0,i.jsx)(n.p,{children:"该方法可用于任何文件类型。"}),"\n",(0,i.jsxs)(n.p,{children:["该方法可在 ",(0,i.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,i.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  rmDir: (dirName: string) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,i.jsxs)(n.h2,{id:"dirname",children:["dirName",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dirname",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"需删除的文件夹名称或文件夹路径。"})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);