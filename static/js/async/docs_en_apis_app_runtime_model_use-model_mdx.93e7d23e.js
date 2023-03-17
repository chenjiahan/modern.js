(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_model_use-model_mdx"],{90419:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return t},title:function(){return c},default:function(){return h}});var o=n("12151"),r=n("21447"),l=n.ir(n("25462"));let i={sidebar_position:2,title:"useModel"},t=[{id:"function-signature",text:"Function Signature",depth:2},{id:"input",text:"Input",depth:3},{id:"return-value",text:"Return Value",depth:3},{id:"example",text:"Example",depth:2},{id:"basic",text:"Basic",depth:3},{id:"selector-usage",text:"Selector Usage",depth:3}],c="useModel";function a(s){let e=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",h2:"h2",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li"},(0,r.useMDXComponents)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"usemodel",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"}),"useModel"]}),"\n","\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive tip",children:[(0,o.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["\nThe original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,o.jsx)(e.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(e.strong,{children:"model"})}),"."]})})]}),"\n",(0,o.jsxs)(e.h2,{id:"function-signature",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"}),"Function Signature"]}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  models"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Models"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  stateSelector"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"StateSelector"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  actionSelector"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ActionSelector"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"subscribe"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"models"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Models"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"stateSelector"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"args"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"State"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"actionSelector"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"args"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"subscribe"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h3,{id:"input",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"}),"Input"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"models: Array of Model objects, which can be passed in as an array type parameter, or all Models can be passed in as parameters one by one."}),"\n",(0,o.jsxs)(e.li,{children:["stateSelector: Optional parameters, used to filter State calculations. The first n parameters are the States corresponding to n Models, and the returned data is used as the first element of the ",(0,o.jsx)(e.code,{children:"useModel"})," return value array."]}),"\n",(0,o.jsxs)(e.li,{children:["actionSelector: Optional parameters, used to filter Action calculations. The first n parameters are the States corresponding to n Models, and the returned data is used as the second element of the ",(0,o.jsx)(e.code,{children:"useModel"})," return value array."]}),"\n"]}),"\n",(0,o.jsxs)(e.h3,{id:"return-value",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"}),"Return Value"]}),"\n",(0,o.jsx)(e.p,{children:"Returns an array with each value:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["state: return value of ",(0,o.jsx)(e.code,{children:"stateSelector"}),". if there is no ",(0,o.jsx)(e.code,{children:"stateSelector"}),"，will combine all incoming Model States(including derived states) and return them. If there is an attribute of the same name in the State of different Models, the following State will override the previous State. when ",(0,o.jsx)(e.code,{children:"state"})," changes，the component call ",(0,o.jsx)(e.code,{children:"useModel"})," will re-render."]}),"\n",(0,o.jsxs)(e.li,{children:["actions: return value of ",(0,o.jsx)(e.code,{children:"actionSelector"}),". if there is no ",(0,o.jsx)(e.code,{children:"actionSelector"}),"，will combine all incoming Model Action(including Effect) and return them. If there is an attribute of the same name in the Action of different Models, the following Action will override the previous Action."]}),"\n",(0,o.jsx)(e.li,{children:"subscribe: A function that subscribes to State changes. This function is called when the State of any Model passed in changes."}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"example",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,o.jsxs)(e.h3,{id:"basic",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#basic",children:"#"}),"Basic"]}),"\n",(0,o.jsxs)(e.div,{className:"language-tsx",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" todoModel "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'models/todo'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterModel "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'models/filter'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Test"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(props) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"([todoModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterModel]);"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".add"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// call todoModel add action"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setVisibleStatus"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// call filterModel filterModel action"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// get todoModel state items"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".visibleStatus; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// get filterModel state visibleStatus"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h3,{id:"selector-usage",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-usage",children:"#"}),"Selector Usage"]}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Test"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(props) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    [todoModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterModel]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    (todoState"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterState) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      items"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"todoState"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      visibleStatus"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"props"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".prefix"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"filterState"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".visibleStatus"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    (todoActions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterActions) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"todoActions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"filterActions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".add"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// call todoModel add action"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setVisibleStatus"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// call filterModel filterModel action"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// get todoModel state items"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".visibleStatus; "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// get filterModel state visibleStatus"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive info",children:[(0,o.jsx)(e.p,{className:"modern-directive-title",children:"More"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["\n",(0,o.jsx)(e.a,{href:"/en/guides/topic-detail/model/use-model.html",children:"use Model"}),"."]})})]})]})}var h=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(a,s)})):a(s)}},25462:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var o=n("12151"),r=n("21447");function l(s){let e=Object.assign({div:"div",p:"p",code:"code"},(0,r.useMDXComponents)(),s.components);return(0,o.jsxs)(e.div,{className:"modern-directive info",children:[(0,o.jsx)(e.p,{className:"modern-directive-title",children:"information"}),(0,o.jsxs)(e.div,{className:"modern-directive-content",children:[(0,o.jsxs)(e.p,{children:["\nBy default, the export package name for all APIs in this section is: ",(0,o.jsx)(e.code,{children:"@modern-js/runtime/model"}),"."]}),(0,o.jsxs)(e.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,o.jsx)(e.code,{children:"@modern-js-reduck/react"}),"."]})]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(l,s)})):l(s)}}}]);