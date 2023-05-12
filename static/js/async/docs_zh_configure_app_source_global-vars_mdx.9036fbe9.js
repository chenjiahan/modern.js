(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_global-vars_mdx"],{88152:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",pre:"pre",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Record<string, JSONValue> | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Builder 默认会添加环境变量 `process.env.NODE_ENV`，因此你不需要手动添加它。\nconst defaultGlobalVars = {\n  'process.env.NODE_ENV': process.env.NODE_ENV,\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["用于在构建时将类似 ",(0,r.jsx)(n.code,{children:"process.env.FOO"})," 的全局变量表达式替换为指定的值，比如："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n\n// ⬇️ Turn into being...\nconsole.log('development');\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在下方示例中，会在代码中注入 ",(0,r.jsx)(n.code,{children:"ENABLE_VCONSOLE"})," 和 ",(0,r.jsx)(n.code,{children:"APP_CONTEXT"})," 两个环境变量："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      ENABLE_VCONSOLE: true,\n      APP_CONTEXT: { answer: 42 },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"你可以在代码中直接使用它们："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"if (ENABLE_VCONSOLE) {\n  // do something\n}\n\nconsole.log(APP_CONTEXT);\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"函数用法",children:["函数用法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数用法",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type GlobalVarsFn = (\n  obj: Record<string, JSONValue>,\n  utils: { env: NodeEnv; target: BuilderTarget },\n) => Record<string, JSONValue> | void;\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["你可以将 ",(0,r.jsx)(n.code,{children:"source.globalVars"})," 设置为一个函数，从而动态设置一些环境变量的值。"]}),"\n",(0,r.jsx)(n.p,{children:"比如，根据当前的构建产物类型进行动态设置："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars(obj, { target }) {\n      obj['MY_TARGET'] = target === 'node' ? 'server' : 'client';\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"与-define-的区别",children:["与 define 的区别",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#与-define-的区别",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"source.globalVars"})," 是 ",(0,r.jsx)(n.code,{children:"source.define"})," 的一个语法糖，它们之间唯一的区别是，",(0,r.jsx)(n.code,{children:"source.globalVars"})," 会自动将传入的值进行 JSON 序列化处理，这使得设置全局变量的值更加方便。注意 ",(0,r.jsx)(n.code,{children:"globalVars"})," 的每个值都需要是可以被 JSON 序列化的值。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.BUILD_VERSION': '0.0.1',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n    define: {\n      'process.env.BUILD_VERSION': JSON.stringify('0.0.1'),\n      'import.meta': {\n        foo: JSON.stringify({ bar: 42 }),\n        baz: JSON.stringify(false),\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"source.globalVars"})," 是通过字符串替换的形式来注入环境变量的，因此它无法对「解构赋值」等动态写法生效。"]}),"\n",(0,r.jsxs)(n.p,{children:["在使用解构赋值时，Builder 将无法判断变量 ",(0,r.jsx)(n.code,{children:"NODE_ENV"})," 是否与要替换的表达式 ",(0,r.jsx)(n.code,{children:"process.env.NODE_ENV"})," 存在关联，因此以下使用方式是无效的："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// ❌ Won't get a string.\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},87028:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return o},default:function(){return t}});var r=s("9880"),c=s("23169"),a=s.ir(s("88152")),l={sidebar_label:"globalVars"},d="source.globalVars",o=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceglobalvars",children:["source.globalVars",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceglobalvars",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceglobalvars",target:"_blank",rel:"noopener noreferrer",children:"source.globalVars"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(a.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);