(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-html_mdx13"],{42387:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return r},default:function(){return i}});var a=s("12151"),t=s("23169"),c={},l="",r=[{text:"示例",depth:3,id:"示例"}];function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"类型："})," ",(0,a.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"type DefaultParameters = {\n  meta: string; // 对应 html.meta 配置\n  title: string; // 对应 html.title 配置\n  mountId: string; // 对应 html.mountId 配置\n  entryName: string; // 入口名称\n  assetPrefix: string; // 对应 output.assetPrefix 配置\n  compilation: webpack.Compilation; // 对应 webpack 的 compilation 对象\n  webpackConfig: Configuration; // webpack 配置\n  // htmlWebpackPlugin 内置的参数\n  // 详见 https://github.com/jantimon/html-webpack-plugin\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["定义 HTML 模板中的参数，对应 ",(0,a.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," 的 ",(0,a.jsx)(n.code,{children:"templateParameters"})," 配置项。你可以使用配置为对象或者函数。"]}),"\n",(0,a.jsx)(n.p,{children:"如果是对象，会和默认参数合并。比如："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: {\n      title: 'My App',\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"如果是函数，会传入默认参数，你可以返回一个对象，用于覆盖默认参数。比如："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      console.log(defaultParameters.compilation);\n      console.log(defaultParameters.title);\n      return {\n        title: 'My App',\n      };\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(n.h3,{id:"示例",children:["示例",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["如果需要在 HTML 模板中使用 ",(0,a.jsx)(n.code,{children:"foo"})," 参数，可以添加如下设置："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: {\n      foo: 'bar',\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"或者使用函数配置："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      return {\n        foo: 'bar',\n      };\n    },\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["接下来，你可以在 HTML 模板中，通过 ",(0,a.jsx)(n.code,{children:"<%= foo %>"})," 来读取参数："]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"<script>window.foo = '<%= foo %>'</script>\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"经过编译后的最终 HTML 代码如下："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"<script>window.foo = 'bar'</script>\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}}}]);