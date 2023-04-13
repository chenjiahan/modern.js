(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx22"],{91008:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},title:function(){return c},toc:function(){return i},default:function(){return l}});var r=n("12151"),t=n("23169"),a={},c="",i=[{text:"assetsRetry.max",depth:3,id:"assetsretry-max"},{text:"assetsRetry.domain",depth:3,id:"assetsretry-domain"},{text:"assetsRetry.type",depth:3,id:"assetsretry-type"},{text:"assetsRetry.test",depth:3,id:"assetsretry-test"},{text:"assetsRetry.crossOrigin",depth:3,id:"assetsretry-crossorigin"},{text:"assetsRetry.onRetry",depth:3,id:"assetsretry-onretry"},{text:"assetsRetry.onSuccess",depth:3,id:"assetsretry-onsuccess"},{text:"assetsRetry.onFail",depth:3,id:"assetsretry-onfail"},{text:"assetsRetry.inlineScript",depth:3,id:"assetsretry-inlinescript"}];function d(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"output.assetsRetry"})," 用于配置资源加载失败时的重试逻辑。配置类型如下:"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",children:"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n"})})]})}),"\n",(0,r.jsx)(s.p,{children:"由于该能力会往 HTML 中注入额外的一些运行时代码，因此我们默认关闭了该能力，如果需要开启该能力，你可以添加以下配置："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {},\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["当你开启该能力后，",(0,r.jsx)(s.code,{children:"assetsRetry"})," 的默认配置如下："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",children:"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n"})})]})}),"\n",(0,r.jsx)(s.p,{children:"同时你也可以使用以下的配置项，来定制你的重试逻辑。"}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-max",children:["assetsRetry.max",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-max",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"单个资源的最大重试次数。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      max: 3,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-domain",children:["assetsRetry.domain",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-domain",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"指定资源加载失败时的重试域名，如果为空则使用当前页面的域名。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.example.com', 'https://cdn2.example.com'],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-type",children:["assetsRetry.type",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-type",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"['script', 'link', 'img']"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"可重试的资源类型。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-test",children:["assetsRetry.test",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-test",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"string | ((url: string) => boolean) | undefined"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"匹配资源 URL 的正则表达式或函数，默认匹配所有资源。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-crossorigin",children:["assetsRetry.crossOrigin",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-crossorigin",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"undefined | boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," false"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["用于向 ",(0,r.jsx)(s.code,{children:"<script>"})," 资源标签中注入 crossorigin 属性，传入 true 则会启用默认值 anonymous。比如："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-onretry",children:["assetsRetry.onRetry",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-onretry",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"资源重试时的回调函数。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-onsuccess",children:["assetsRetry.onSuccess",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-onsuccess",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"资源重试成功时的回调函数。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-onfail",children:["assetsRetry.onFail",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-onfail",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"资源重试超过最大重试次数时的回调函数。比如："}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretry-inlinescript",children:["assetsRetry.inlineScript",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-inlinescript",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["是否将 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," 的运行时 JavaScript 代码内联到 HTML 文件中。"]}),"\n",(0,r.jsxs)(s.p,{children:["如果你不希望在 HTML 文件中插入相关代码，可以将 ",(0,r.jsx)(s.code,{children:"assetsRetry.inlineScript"})," 设置为 ",(0,r.jsx)(s.code,{children:"false"}),"："]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      inlineScript: false,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["添加以上配置后，",(0,r.jsx)(s.code,{children:"assetsRetry"})," 的运行时代码会被抽取为一个独立的 ",(0,r.jsx)(s.code,{children:"assets-retry.[version].js"})," 文件，并输出到产物目录下。"]}),"\n",(0,r.jsxs)(s.p,{children:["这种方式的弊端在于，",(0,r.jsx)(s.code,{children:"assets-retry.[version].js"})," 自身有加载失败的可能性。如果出现这种情况，静态资源重试的逻辑就无法生效。因此，我们更推荐将运行时代码内联到 HTML 文件中。"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);