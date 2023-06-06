(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_define_md"],{73965:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return a},default:function(){return d}});var s=i("9880"),r=i("23169"),o={},t="Environment Variables",a=[{text:"Default Variables",depth:2,id:"default-variables"},{text:"process.env.NODE_ENV",depth:3,id:"processenvnode_env"},{text:"process.env.ASSET_PREFIX",depth:3,id:"processenvasset_prefix"},{text:"Using define config",depth:2,id:"using-define-config"},{text:"Replace Expressions",depth:3,id:"replace-expressions"},{text:"process.env Injection",depth:3,id:"processenv-injection"},{text:"Setup Environment Variables",depth:2,id:"setup-environment-variables"},{text:"Declare type of environment variable",depth:2,id:"declare-type-of-environment-variable"},{text:"Tree Shaking",depth:2,id:"tree-shaking"},{text:"In-source testing",depth:2,id:"in-source-testing"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",div:"div",ol:"ol"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"environment-variables",children:["Environment Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-variables",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder supports injecting environment variables or expressions into the code during compilation, which is helpful for distinguishing the running environment or injecting constant values. This chapter introduces how to use environment variables."}),"\n",(0,s.jsxs)(n.h2,{id:"default-variables",children:["Default Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-variables",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"processenvnode_env",children:["process.env.NODE_ENV",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvnode_env",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, Builder will automatically set the ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," environment variable to ",(0,s.jsx)(n.code,{children:"'development'"})," in development mode and ",(0,s.jsx)(n.code,{children:"'production'"})," in production mode."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," directly in Node.js and in the runtime code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"if (process.env.NODE_ENV === 'development') {\n  console.log('this is a development log');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the development environment, the above code will be compiled as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (true) {\n  console.log('this is a development log');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the production environment, the above code will be compiled as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (false) {\n  console.log('this is a development log');\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After code minification, ",(0,s.jsx)(n.code,{children:"if (false) { ... }"})," will be recognized as invalid code and removed automatically."]}),"\n",(0,s.jsxs)(n.h3,{id:"processenvasset_prefix",children:["process.env.ASSET_PREFIX",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvasset_prefix",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"process.env.ASSET_PREFIX"})," in the runtime code to access the URL prefix of static assets."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In development, it is equivalent to the value set by ",(0,s.jsx)(n.a,{href:"/api/config-dev#dev-assetprefix",children:"dev.assetPrefix"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In production, it is equivalent to the value set by ",(0,s.jsx)(n.a,{href:"/api/config-output#output-assetprefix",children:"output.assetPrefix"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Builder will automatically remove the trailing slash from ",(0,s.jsx)(n.code,{children:"assetPrefix"})," to make string concatenation easier."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, we copy the ",(0,s.jsx)(n.code,{children:"static/icon.png"})," image to the ",(0,s.jsx)(n.code,{children:"dist"})," directory through ",(0,s.jsx)(n.a,{href:"/api/config-output#output-copy",children:"output.copy"})," configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    assetPrefix: '/',\n  },\n  output: {\n    copy: [{ from: './static', to: 'static' }],\n    assetPrefix: 'https://example.com',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we can access the image URL in the runtime code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`${process.env.ASSET_PREFIX}/static/icon.png`} />;\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the development environment, the above code will be compiled as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`/static/icon.png`} />;\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the production environment, the above code will be compiled as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`https://example.com/static/icon.png`} />;\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"using-define-config",children:["Using define config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-define-config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By configuring the ",(0,s.jsx)(n.a,{href:"/en/api/config-source#sourcedefine",children:"source.define"}),", you can replace expressions with other expressions or values in compile time."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Define"})," looks like macro definitions in other programming languages. But JavaScript has powerful runtime capabilities, so you don't need to use it as a complicated code generator. You can use it to pass simple data, such as environment variables, from compile time to runtime. Almost there, it can be used to work with Builder to shake trees."]}),"\n",(0,s.jsxs)(n.h3,{id:"replace-expressions",children:["Replace Expressions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#replace-expressions",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The most basic use case for ",(0,s.jsx)(n.code,{children:"Define"})," is to replace expressions in compile time."]}),"\n",(0,s.jsxs)(n.p,{children:["The value of the environment variable ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," will change the behavior of many vendor packages. Usually, we need to set it to ",(0,s.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the value provided here must be a JSON string, e.g. ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," with a value of ",(0,s.jsx)(n.code,{children:'"production"'})," should be passed in as ",(0,s.jsx)(n.code,{children:'"\\"production\\""'})," to be processed correctly."]}),"\n",(0,s.jsxs)(n.p,{children:["Similarly ",(0,s.jsx)(n.code,{children:'{ foo: "bar" }'})," should be converted to ",(0,s.jsx)(n.code,{children:'"{\\"foo\\":\\"bar\\"}"'}),", which if passed directly into the original object would mean replacing the expression ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV.foo"})," with the identifier ",(0,s.jsx)(n.code,{children:"bar"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For more about ",(0,s.jsx)(n.code,{children:"source.define"}),", just refer to ",(0,s.jsx)(n.a,{href:"/api/config-source#sourcedefine",children:"API References"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["The environment variable ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," shown in the example above is already injected by the Builder, and you usually do not need to configure it manually.\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"processenv-injection",children:["process.env Injection",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenv-injection",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.code,{children:"source.define"})," or ",(0,s.jsx)(n.code,{children:"source.globalVars"}),", please avoid injecting the entire ",(0,s.jsx)(n.code,{children:"process.env"})," object, e.g. the following usage is not recommended:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env': JSON.stringify(process.env),\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the above usage is adopted, the following problems will be caused:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Some unused environment variables are additionally injected, causing the environment variables of the development environment to be leaked into the front-end code."}),"\n",(0,s.jsxs)(n.li,{children:["As each ",(0,s.jsx)(n.code,{children:"process.env"})," code will be replaced by a complete environment variable object, the bundle size of the front-end code will increase and the performance will decrease."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So please avoid full injection, just inject the used variables from ",(0,s.jsx)(n.code,{children:"process.env"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"setup-environment-variables",children:["Setup Environment Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setup-environment-variables",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You may often need to set environment variables, in which case you can instead use the ",(0,s.jsx)(n.a,{href:"/en/api/config-source#sourceglobalvars",children:"source.globalVars"})," configuration to simplify configuration. It is a syntax sugar of ",(0,s.jsx)(n.code,{children:"source.define"}),", the only difference is that ",(0,s.jsx)(n.code,{children:"source.globalVars"})," will automatically stringify the value, which makes it easier to set the value of global variables and avoid writing a lot of ",(0,s.jsx)(n.code,{children:"JSON.stringify(...)"})," stuffs."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.NODE_ENV': 'production',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that either of these methods will only match the full expression; destructing the expression will prevent the Builder from correctly recognizing it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n// => production\n\nconst { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// => undefined\n\nconst vars = process.env;\nconsole.log(vars.NODE_ENV);\n// => undefined\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"declare-type-of-environment-variable",children:["Declare type of environment variable",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#declare-type-of-environment-variable",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When you read an environment variable in a TypeScript file, TypeScript may prompt that the variable lacks a type definition, and you need to add the corresponding type declaration."}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you reference a ",(0,s.jsx)(n.code,{children:"CUSTOM_VAR"})," variable, the following prompt will appear in the TypeScript file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TS2304: Cannot find name 'CUSTOM_VAR'.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To fix this, you can create a ",(0,s.jsx)(n.code,{children:"src/env.d.ts"})," file in your project and add the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare const CUSTOM_VAR: string;\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"tree-shaking",children:["Tree Shaking",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-shaking",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Define"})," can also be used to mark dead code to assist the Builder with Tree Shaking optimization."]}),"\n",(0,s.jsxs)(n.p,{children:["Building products for different regions is achieved by replacing ",(0,s.jsx)(n.code,{children:"process.env.REGION"})," with a specific value, for example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env.REGION': JSON.stringify(process.env.REGION),\n    },\n    // or...\n    globalVars: {\n      'process.env.REGION': process.env.REGION,\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"For an internationalized app:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  if (process.env.REGION === 'cn') {\n    return <EntryFoo />;\n  } else if (process.env.REGION === 'sg') {\n    return <EntryBar />;\n  } else {\n    return <EntryBaz />;\n  }\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the environment variable ",(0,s.jsx)(n.code,{children:"REGION=sg"})," and then executing build will eliminate any dead code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  if (false) {\n  } else if (true) {\n    return <EntryBar />;\n  } else {\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Unused components are not packaged into the product, and their external dependencies can be optimized accordingly, resulting in a destination with better size and performance."}),"\n",(0,s.jsxs)(n.h2,{id:"in-source-testing",children:["In-source testing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#in-source-testing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Vitest supports writing tests inside source files to test the behavior of private features without exporting them. Set up ",(0,s.jsx)(n.code,{children:"Define"})," to remove the test code from the production build. Please refer to the ",(0,s.jsx)(n.a,{href:"https://vitest.dev/guide/in-source.html",target:"_blank",rel:"noopener noreferrer",children:"Vitest's documentation"})," for detailed guidelines"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// the implementation\nfunction add(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}\n\n// in-source test suites\nif (import.meta.vitest) {\n  const { it, expect } = import.meta.vitest;\n  it('add', () => {\n    expect(add()).toBe(0);\n    expect(add(1)).toBe(1);\n    expect(add(1, 2, 3)).toBe(6);\n  });\n}\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);