(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_json-files_md"],{53535:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});!function(e,a){for(var n in a)Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}(a,{frontmatter:function(){return d},title:function(){return r},toc:function(){return c},default:function(){return i}});var l=n("12151"),s=n("23169"),d={},r="Import JSON Files",c=[{text:"JSON file",depth:2,id:"json-file"},{text:"Example",depth:3,id:"example"},{text:"Named Import",depth:3,id:"named-import"},{text:"YAML file",depth:2,id:"yaml-file"},{text:"Example",depth:3,id:"example-1"},{text:"Add type declaration",depth:3,id:"add-type-declaration"},{text:"Toml file",depth:2,id:"toml-file"},{text:"Example",depth:3,id:"example-2"},{text:"Add type declaration",depth:3,id:"add-type-declaration-1"}];function o(e){var a=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.h1,{id:"import-json-files",children:["Import JSON Files",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#import-json-files",children:"#"})]}),"\n",(0,l.jsxs)(a.p,{children:["Builder supports import JSON files in code, and also supports import ",(0,l.jsx)(a.a,{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer",children:"YAML"})," and ",(0,l.jsx)(a.a,{href:"https://toml.io/en/",target:"_blank",rel:"noopener noreferrer",children:"Toml"})," files and converting them to JSON format."]}),"\n",(0,l.jsxs)(a.h2,{id:"json-file",children:["JSON file",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#json-file",children:"#"})]}),"\n",(0,l.jsx)(a.p,{children:"You can import JSON files directly in JavaScript files."}),"\n",(0,l.jsxs)(a.h3,{id:"example",children:["Example",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsxs)(a.div,{className:"language-",children:[(0,l.jsx)(a.div,{className:"modern-code-title",children:"example.json"}),(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-json",meta:'title="example.json"',children:'{\n  "name": "foo",\n  "items": [1, 2]\n}\n'})})]})]}),"\n",(0,l.jsxs)(a.div,{className:"language-",children:[(0,l.jsx)(a.div,{className:"modern-code-title",children:"index.js"}),(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-js",meta:'title="index.js"',children:"import example from './example.json';\n\nconsole.log(example.name); // 'foo';\nconsole.log(example.items); // [1, 2];\n"})})]})]}),"\n",(0,l.jsxs)(a.h3,{id:"named-import",children:["Named Import",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#named-import",children:"#"})]}),"\n",(0,l.jsx)(a.p,{children:"Builder does not support importing JSON files via named import yet:"}),"\n",(0,l.jsx)(a.div,{className:"language-",children:(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-js",children:"import { name } from './example.json';\n"})})]})}),"\n",(0,l.jsxs)(a.h2,{id:"yaml-file",children:["YAML file",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#yaml-file",children:"#"})]}),"\n",(0,l.jsx)(a.p,{children:"YAML is a data serialization language commonly used for writing configuration files."}),"\n",(0,l.jsxs)(a.p,{children:["You can directly import ",(0,l.jsx)(a.code,{children:".yaml"})," or ",(0,l.jsx)(a.code,{children:".yml"})," files in JavaScript and they will be automatically converted to JSON format."]}),"\n",(0,l.jsxs)(a.h3,{id:"example-1",children:["Example",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"})]}),"\n",(0,l.jsxs)(a.div,{className:"language-",children:[(0,l.jsx)(a.div,{className:"modern-code-title",children:"example.yaml"}),(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-yaml",meta:'title="example.yaml"',children:"---\nhello: world\nfoo:\n  bar: baz\n"})})]})]}),"\n",(0,l.jsx)(a.div,{className:"language-",children:(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-js",children:"import example from './example.yaml';\n\nconsole.log(example.hello); // 'world';\nconsole.log(example.foo); // { bar: 'baz' };\n"})})]})}),"\n",(0,l.jsxs)(a.h3,{id:"add-type-declaration",children:["Add type declaration",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,l.jsxs)(a.p,{children:["When you import a YAML file in your TypeScript code, please create a ",(0,l.jsx)(a.code,{children:"src/global.d.ts"})," file in your project and add the corresponding type declaration:"]}),"\n",(0,l.jsxs)(a.div,{className:"language-",children:[(0,l.jsx)(a.div,{className:"modern-code-title",children:"src/global.d.ts"}),(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.yaml' {\n  const content: Record<string, any>;\n  export default content;\n}\n\ndeclare module '*.yml' {\n  const content: Record<string, any>;\n  export default content;\n}\n"})})]})]}),"\n",(0,l.jsxs)(a.h2,{id:"toml-file",children:["Toml file",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#toml-file",children:"#"})]}),"\n",(0,l.jsx)(a.p,{children:"Toml is a semantically explicit, easy-to-read configuration file format."}),"\n",(0,l.jsxs)(a.p,{children:["You can directly import ",(0,l.jsx)(a.code,{children:".toml"})," files in JavaScript and it will be automatically converted to JSON format."]}),"\n",(0,l.jsxs)(a.h3,{id:"example-2",children:["Example",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#example-2",children:"#"})]}),"\n",(0,l.jsxs)(a.div,{className:"language-",children:[(0,l.jsx)(a.div,{className:"modern-code-title",children:"example.toml"}),(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-toml",meta:'title="example.toml"',children:'hello = "world"\n\n[foo]\nbar = "baz"\n'})})]})]}),"\n",(0,l.jsx)(a.div,{className:"language-",children:(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-js",children:"import example from './example.toml';\n\nconsole.log(example.hello); // 'world';\nconsole.log(example.foo); // { bar: 'baz' };\n"})})]})}),"\n",(0,l.jsxs)(a.h3,{id:"add-type-declaration-1",children:["Add type declaration",(0,l.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration-1",children:"#"})]}),"\n",(0,l.jsxs)(a.p,{children:["When you import Toml files in TypeScript code, please create a ",(0,l.jsx)(a.code,{children:"src/global.d.ts"})," file in your project and add the corresponding type declarations:"]}),"\n",(0,l.jsxs)(a.div,{className:"language-",children:[(0,l.jsx)(a.div,{className:"modern-code-title",children:"src/global.d.ts"}),(0,l.jsxs)(a.div,{className:"modern-code-content",children:[(0,l.jsx)(a.button,{className:"copy"}),(0,l.jsx)(a.pre,{className:"code",children:(0,l.jsx)(a.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.toml' {\n  const content: Record<string, any>;\n  export default content;\n}\n"})})]})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return a?(0,l.jsx)(a,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}}}]);