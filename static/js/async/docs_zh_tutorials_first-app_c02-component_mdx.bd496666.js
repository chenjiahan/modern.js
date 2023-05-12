(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c02-component_mdx"],{97549:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return a},default:function(){return l}});var s=r("9880"),i=r("23169"),t={title:"编写 UI 组件"},c="编写 UI 组件",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"编写-ui-组件",children:["编写 UI 组件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编写-ui-组件",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"上一章节中，我们学习了如何初始化项目，并使用配置修改 Modern.js 的默认行为。"}),"\n",(0,s.jsx)(n.p,{children:"这一章节中，我们继续沿用上一章节的项目代码，继续完善联系人列表。"}),"\n",(0,s.jsxs)(n.p,{children:["为了做更好的 UI 展示和交互，我们引入组件库 ",(0,s.jsx)(n.a,{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer",children:"Antd"})," 来开发，使用 ",(0,s.jsx)(n.code,{children:"<List>"})," 组件来代替原始的列表。先添加依赖："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add antd\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["修改 ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"}),"，在顶部导入组件："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { List } from 'antd';\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["修改 ",(0,s.jsx)(n.code,{children:"<App>"})," 组件的实现："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:'function App() {\n  return (\n    <div>\n      <List\n        dataSource={mockData}\n        renderItem={({ name, email, avatar }) => (\n          <List.Item key={name}>\n            <List.Item.Meta\n              avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n              title={name}\n              description={email}\n            />\n          </List.Item>\n        )}\n      />\n    </div>\n  );\n}\n'})})})}),"\n",(0,s.jsxs)(n.p,{children:["执行 ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),"，查看运行结果："]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c02-antd-result.png",alt:"result"})}),"\n",(0,s.jsx)(n.p,{children:"可以看到 Ant Design 导出的组件，已经具备了完整的样式。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["Modern.js 会",(0,s.jsx)(n.a,{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"自动按需导入 Ant Design 组件需要的 CSS"}),"。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["我们也可以使用其他组件库来实现同样的功能，例如 ",(0,s.jsx)(n.a,{href:"https://arco.design/",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"}),"。"]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);