(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_testing_render_mdx"],{1982:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return c},default:function(){return a}});var t=r("9880"),s=r("23169"),d={title:"render"},i="render",c=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Return Value",depth:3,id:"return-value"},{text:"Example",depth:2,id:"example"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"render",children:["render",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Used to render the component in the test case."}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  container: DOMElement;\n  baseElement: DOMElement;\n  hydrate: boolean;\n  warpper: React.ComponentType<{children: ReactNode}>;\n  queries: any;\n};\n\ntype RenderResult = {\n  {...queries}: any;\n  container: DOMElement;\n  baseElement: DOMElement;\n  debug: function;\n  rerender: function;\n  unmount: function;\n  asFragment: function;\n}\n\nfunction render(ui: React.ReactElement<any>, options: Options): RenderResult;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ui"}),": the React component that needs to be rendered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"}),": render options.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"container"}),": the dom which component mounted. by default create a ",(0,t.jsx)(n.code,{children:"div"})," element, and auto append to ",(0,t.jsx)(n.code,{children:"document.body"}),". the default value is ",(0,t.jsx)(n.code,{children:"document.body.append(document.createElement('div'))"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseElement"}),": Used to specify the ",(0,t.jsx)(n.code,{children:"basename"})," used in ",(0,t.jsx)(n.code,{children:"queries"}),". If ",(0,t.jsx)(n.code,{children:"container"})," is specified, the default value is the value of ",(0,t.jsx)(n.code,{children:"container"}),", otherwise it is ",(0,t.jsx)(n.code,{children:"document.body"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hydrate"}),": If set to ",(0,t.jsx)(n.code,{children:"true"}),", the ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/react-dom.html#hydrate",target:"_blank",rel:"noopener noreferrer",children:"ReactDOM.hydrate"})," rendering component is used. The default value is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"wrapper"}),": a react component that can be used to customize rendering logic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queries"}),": customize some own ",(0,t.jsx)(n.code,{children:"queries"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{...queries}"}),": all available ",(0,t.jsx)(n.a,{href:"https://testing-library.com/docs/queries/about/",target:"_blank",rel:"noopener noreferrer",children:"queries"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"container"}),": the DOM element that React component mounted."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"baseElement"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"debug"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rerender"}),": if you want to test some scene when a rendered component is updated, you can use rerender for reality."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"unmount"}),": unmount rendered components. This API is helpful if you want to test what happens after the component is unmounted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"asFragment"}),": return the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer",children:"DocumentFragment"})," of rendered component. used to test the response of the DOM structure after the react event is triggered."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\nimport App from './App';\n\ntest('renders a message', () => {\n  const { container, getByText } = render(<App />);\n  expect(getByText('Hello, world!')).toBeInTheDocument();\n  expect(container.firstChild).toMatchInlineSnapshot(`\n    <h1>Hello, World!</h1>\n  `);\n});\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);