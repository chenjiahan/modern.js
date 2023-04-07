(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_model_faq_mdx"],{73075:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return t},default:function(){return l}});var s=d("12151"),r=d("21447"),o={sidebar_position:13,title:"常见问题"},c="常见问题",t=[{text:"浏览器兼容性",depth:2,id:"浏览器兼容性"},{text:"微前端子应用 Model 访问主应用 Model",depth:2,id:"微前端子应用-model-访问主应用-model"}];function a(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",strong:"strong",button:"button",pre:"pre",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"常见问题",children:["常见问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"浏览器兼容性",children:["浏览器兼容性",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#浏览器兼容性",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Reduck 的编译构建产物默认使用 ES6 语法，如果你需要支持更低版本的浏览器，请将 ",(0,s.jsx)(n.code,{children:"@modern-js-reduck"})," 命名空间下的所有包加入到应用的编译过程。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["Reduck 使用的 ",(0,s.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"@babel/preset-env"})})," 的详细",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/common/config.js#L10~L17",target:"_blank",rel:"noopener noreferrer",children:"配置"}),"。","\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"微前端子应用-model-访问主应用-model",children:["微前端子应用 Model 访问主应用 Model",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#微前端子应用-model-访问主应用-model",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["微前端子应用 Model 访问主应用 Model 时，如果该 ",(0,s.jsx)(n.strong,{children:"Model"})," 在主应用尚未挂载，会自动挂载到子应用上。"]}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { useModel } from '@modern-js/runtime/model';\nimport parentModel from '@MasterApp/models/todoModel';\n\nfunction SubModelApp() {\n  const [state, actions] = useModel(parentModel);\n\n  return <div>...</div>;\n}\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"微前端通信流程图"})}),"\n",(0,s.jsx)(n.p,{children:"为了避免意外降级挂载，建议将主应用所需要共享的 Model 预先挂载："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"// App 是主应用的入口组件，sharedModel1、sharedModel2 是需要共享的 Model。\nApp.models = [sharedModel1, sharedModel2];\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);