(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_auto-actions_mdx"],{8359:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return o},default:function(){return r}});var s=t("9880"),i=t("23169"),a={sidebar_position:6,title:"Automatically Actions"},c="Automatically Generated Actions",o=[{text:"Primitive data types",depth:2,id:"primitive-data-types"},{text:"Array Types",depth:2,id:"array-types"},{text:"Simple Object Types",depth:2,id:"simple-object-types"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"automatically-generated-actions",children:["Automatically Generated Actions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generated-actions",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Quick Start"}),", we implemented the simplest counter model, which still required 10 lines of code. In fact, Modern.js supports automatically generating commonly used actions based on the declared ",(0,s.jsx)(n.code,{children:"state"})," type, which reduces the amount of boilerplate code. The currently supported types are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Primitive data types"}),"\n",(0,s.jsx)(n.li,{children:"Array types"}),"\n",(0,s.jsx)(n.li,{children:"Simple object types (Plain Object)"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"primitive-data-types",children:["Primitive data types",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#primitive-data-types",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({ state: 1 });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As shown above, we only need one line to create a simple ",(0,s.jsx)(n.code,{children:"countModel"}),". Here's an example code that uses the model:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    // 增加 1\n    actions.setState(state + 1);\n  }, []);\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"array-types",children:["Array Types",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#array-types",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When the state is an array type, an example code for automatically generating actions is shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({ state: [] });\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.push(1);\n    actions.pop();\n    actions.shift();\n    actions.unshift(1);\n    actions.concat([1]);\n    actions.splice(0, 1, 2);\n    actions.filter(value => value > 1);\n  }, []);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can use the methods of the JavaScript Array object to modify the state."}),"\n",(0,s.jsxs)(n.h2,{id:"simple-object-types",children:["Simple Object Types",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#simple-object-types",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When the state is a simple object type, an example code for automatically generating actions is shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({\n  state: {\n    a: 1,\n    b: [],\n    c: {},\n  },\n});\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB([1]);\n    actions.setC({ a: 1 });\n  }, []);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Three different fields ",(0,s.jsx)(n.code,{children:"a"}),", ",(0,s.jsx)(n.code,{children:"b"}),", and ",(0,s.jsx)(n.code,{children:"c"})," each generate ",(0,s.jsx)(n.code,{children:"setA"}),", ",(0,s.jsx)(n.code,{children:"setB"}),", and ",(0,s.jsx)(n.code,{children:"setC"})," actions, respectively."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["When the user-defined action and the action automatically generated by Modern.js have the same name, the user-defined action takes precedence. For example, if ",(0,s.jsx)(n.code,{children:"setA"})," action is already defined in ",(0,s.jsx)(n.code,{children:"countModel"}),", calling ",(0,s.jsx)(n.code,{children:"actions.setA()"})," executes the user-defined ",(0,s.jsx)(n.code,{children:"setA"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"Additional Information"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["For more information on related APIs, please refer to ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/model/auto-actions",children:"here"}),".\n"]})})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);