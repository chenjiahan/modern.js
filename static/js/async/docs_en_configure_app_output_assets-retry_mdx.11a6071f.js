(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_assets-retry_mdx"],{63983:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var t=n("12151"),r=n("23169");function a(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"output.assetsRetry"})," is used to configure the retry of assets.The type of ",(0,t.jsx)(s.code,{children:"AssetsRetryOptions"})," is as follows:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"Since the ability will inject some extra runtime code into HTML, we have disabled this ability by default. If you need to enable it, you can configure it in the form of an object, for example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {},\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["When you enable this ability, the default config of ",(0,t.jsx)(s.code,{children:"assetsRetry"})," is as follows:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"At the same time, you can also customize your retry logic using the following configurations."}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-max",children:["assetsRetry.max",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-max",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"number"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The maximum number of retries for a single asset. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      max: 3,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-domain",children:["assetsRetry.domain",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-domain",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"string[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The domain of the asset to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.example.com', 'https://cdn2.example.com'],\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-type",children:["assetsRetry.type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-type",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"string[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"['script', 'link', 'img']"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The type of the asset to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-test",children:["assetsRetry.test",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-test",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"string | ((url: string) => boolean) | undefined"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The test function of the asset to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-crossorigin",children:["assetsRetry.crossOrigin",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-crossorigin",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | boolean"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," false"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether to add the ",(0,t.jsx)(s.code,{children:"crossOrigin"})," attribute to the asset to be retried. For example:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-onretry",children:["assetsRetry.onRetry",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-onretry",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The callback function when the asset is being retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-onsuccess",children:["assetsRetry.onSuccess",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-onsuccess",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The callback function when the asset is successfully retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-onfail",children:["assetsRetry.onFail",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-onfail",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The callback function when the asset is failed to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry-inlinescript",children:["assetsRetry.inlineScript",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry-inlinescript",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether to inline the runtime JavaScript code of ",(0,t.jsx)(s.code,{children:"assetsRetry"})," into the HTML file."]}),"\n",(0,t.jsxs)(s.p,{children:["If you don't want to insert the code in the HTML file, you can set ",(0,t.jsx)(s.code,{children:"assetsRetry.inlineScript"})," to ",(0,t.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      inlineScript: false,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["After adding the above configuration, the runtime code of ",(0,t.jsx)(s.code,{children:"assetsRetry"})," will be extracted into a separate ",(0,t.jsx)(s.code,{children:"assets-retry.[version].js"})," file and output to the dist directory."]}),"\n",(0,t.jsxs)(s.p,{children:["The downside is that ",(0,t.jsx)(s.code,{children:"assets-retry.[version].js"})," itself may fail to load. If this happens, the assets retry will not work. Therefore, we prefer to inline the runtime code into the HTML file."]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},25359:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},title:function(){return c},toc:function(){return o},default:function(){return d}});var t=n("12151"),r=n("23169"),a=n.ir(n("63983")),i={sidebar_label:"assetsRetry"},c="output.assetsRetry",o=[];function l(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"output-assetsretry",children:["output.assetsRetry",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-assetsretry",children:"#"})]}),"\n",(0,t.jsxs)(s.div,{className:"modern-directive tip",children:[(0,t.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(s.div,{className:"modern-directive-content",children:(0,t.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputassetsretry",target:"_blank",rel:"noopener noreferrer",children:"output.assetsRetry"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(a.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);