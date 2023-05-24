(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c02-component_mdx"],{65577:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return d},default:function(){return c}});var r=t("9880"),i=t("23169"),s={title:"Add UI Components"},o="Add UI Components",d=[];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",img:"img",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"add-ui-components",children:["Add UI Components",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-ui-components",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In the previous chapter, we learned how to initialize a project and use configuration to modify the default behavior of Modern.js."}),"\n",(0,r.jsx)(n.p,{children:"In this chapter, we continue to use the project code of the previous chapter and continue to improve the point of contact list."}),"\n",(0,r.jsxs)(n.p,{children:["In order to do better UI display and interaction, we introduce the component library ",(0,r.jsx)(n.a,{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer",children:"Antd"})," to develop, and use the ",(0,r.jsx)(n.code,{children:"<List>"})," component instead of the primitive list. Add dependency first:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add antd\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"src/routes/page.tsx"})," to import components at the top:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { List } from 'antd';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modify the implementation of the ",(0,r.jsx)(n.code,{children:"<App>"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'function App() {\n  return (\n    <div>\n      <List\n        dataSource={mockData}\n        renderItem={({ name, email, avatar }) => (\n          <List.Item key={name}>\n            <List.Item.Meta\n              avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n              title={name}\n              description={email}\n            />\n          </List.Item>\n        )}\n      />\n    </div>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," to see the running results:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c02-antd-result.png",alt:"result"})}),"\n",(0,r.jsx)(n.p,{children:"You can see that the components exported by Ant Design already have complete styles."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"note"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js ",(0,r.jsx)(n.a,{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"Automatically import CSS required by Ant Design component on demand"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["We can also use other component libraries to implement the same functionality, such as ",(0,r.jsx)(n.a,{href:"https://arco.design/",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"}),"."]}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);