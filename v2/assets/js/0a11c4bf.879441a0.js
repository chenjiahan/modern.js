"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3792],{44993:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(52983);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(t),d=l,c=g["".concat(a,".").concat(d)]||g[d]||m[d]||i;return t?o.createElement(c,r(r({ref:n},u),{},{components:t})):o.createElement(c,r({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=g;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(18249),l=(t(52983),t(44993));const i={title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",sidebar_position:3},r=void 0,p={unversionedId:"guides/topic-detail/framework-plugin/implement",id:"guides/topic-detail/framework-plugin/implement",title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",description:"\u4e0a\u4e00\u5c0f\u8282\u4ecb\u7ecd\u4e86 Modern.js \u63d2\u4ef6\u7684 Hook \u6a21\u578b\uff0c\u8fd9\u4e00\u5c0f\u8282\u4ecb\u7ecd\u5982\u4f55\u7f16\u5199\u63d2\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/implement.md",sourceDirName:"guides/topic-detail/framework-plugin",slug:"/guides/topic-detail/framework-plugin/implement",permalink:"/v2/docs/guides/topic-detail/framework-plugin/implement",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Hook \u6a21\u578b",permalink:"/v2/docs/guides/topic-detail/framework-plugin/hook"},next:{title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/v2/docs/guides/topic-detail/framework-plugin/relationship"}},a={},s=[{value:"\u5b9e\u73b0\u63d2\u4ef6",id:"\u5b9e\u73b0\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u7c7b\u578b",id:"\u63d2\u4ef6\u7c7b\u578b",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e\u9879",id:"\u63d2\u4ef6\u914d\u7f6e\u9879",level:3},{value:"\u63d2\u4ef6 API",id:"\u63d2\u4ef6-api",level:3},{value:"\u5f02\u6b65 setup",id:"\u5f02\u6b65-setup",level:3},{value:"\u6dfb\u52a0\u63d2\u4ef6",id:"\u6dfb\u52a0\u63d2\u4ef6",level:2},{value:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6",id:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6",level:3},{value:"\u5728 npm \u4e0a\u53d1\u5e03\u63d2\u4ef6",id:"\u5728-npm-\u4e0a\u53d1\u5e03\u63d2\u4ef6",level:3}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4ecb\u7ecd\u4e86 Modern.js \u63d2\u4ef6\u7684 Hook \u6a21\u578b\uff0c\u8fd9\u4e00\u5c0f\u8282\u4ecb\u7ecd\u5982\u4f55\u7f16\u5199\u63d2\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u63d2\u4ef6"},"\u5b9e\u73b0\u63d2\u4ef6"),(0,l.kt)("p",null,"Modern.js \u63d2\u4ef6\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": \u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u552f\u4e00\u6807\u8bc6\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setup"),": \u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570\uff0c\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002setup \u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a Hooks \u5bf9\u8c61\uff0cModern.js \u4f1a\u5728\u7279\u5b9a\u7684\u65f6\u673a\u6267\u884c\u8fd9\u4e9b Hooks\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const myPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    // \u6267\u884c\u4e00\u4e9b\u521d\u59cb\u5316\u903b\u8f91\n    const foo = '1';\n\n    // \u8fd4\u56de\u4e00\u4e2a Hooks \u5bf9\u8c61\n    return {\n      afterBuild: () => {\n        // \u5728\u6784\u5efa\u5b8c\u6210\u540e\u6267\u884c\u903b\u8f91\n      },\n    };\n  },\n};\n")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5728\u63d2\u4ef6\u4e2d\uff0c\u5141\u8bb8\u914d\u7f6e\u4e0e\u5176\u4ed6\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u3002\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/framework-plugin/relationship"},"\u63d2\u4ef6\u5173\u7cfb"),"\u3002"),(0,l.kt)("h3",{id:"\u63d2\u4ef6\u7c7b\u578b"},"\u63d2\u4ef6\u7c7b\u578b"),(0,l.kt)("p",null,"Modern-js \u652f\u6301\u591a\u79cd\u5de5\u7a0b\u5f00\u53d1\uff0c\u5982\u5e94\u7528\u5de5\u7a0b(app-tools), \u6a21\u5757\u5de5\u7a0b(module-tools)\u7b49\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u517c\u987e\u4e0d\u540c\u5de5\u7a0b\u5f00\u53d1\u7684\u5dee\u5f02\u548c\u901a\u6027\uff0cModern-js \u5c06\u63d2\u4ef6\u5982\u4e0b\u56fe\u8fdb\u884c\u7ec4\u7ec7:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eeeh7uhbepxlpe/modern-website/plugin-relationship.jpg",alt:"plugin-relationship"})),(0,l.kt)("p",null,"\u4ece\u56fe\u53ef\u4ee5\u770b\u51fa\uff0cModern-js \u5c06\u63d2\u4ef6\u5927\u81f4\u5206\u4e3a\u4e24\u7c7b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u7528\u63d2\u4ef6: \u63d2\u4ef6\u53ea\u4f1a\u5305\u542b\u4e00\u4e9b\u57fa\u7840\u7684 Hooks")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5de5\u7a0b\u63d2\u4ef6: \u4e0d\u540c\u7684\u5de5\u7a0b\u5f00\u53d1\u4f1a\u5728\u901a\u7528\u63d2\u4ef6\u7684\u57fa\u7840\u4e0a\u6269\u5c55\u51fa\u81ea\u5df1\u7684 Hooks, Config \u7b49\u7c7b\u578b\u3002"))),(0,l.kt)("p",null,"\u4f7f\u7528 TypeScript \u65f6\uff0c\u53ef\u4ee5\u5f15\u5165\u5185\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"CliPlugin")," \u7b49\u7c7b\u578b\uff0c\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u6b63\u786e\u7684\u7c7b\u578b\u63a8\u5bfc\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nconst myPlugin: CliPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n        // \u5728\u6784\u5efa\u5b8c\u6210\u540e\u6267\u884c\u903b\u8f91\n      },\n    };\n  },\n};\n")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e3a\u901a\u7528\u63d2\u4ef6\uff0c\u53ea\u5305\u542b\u4e00\u4e9b\u57fa\u7840\u7684 Hooks\u3002 Modern.js \u652f\u6301\u901a\u8fc7\u6cdb\u578b\u5bf9\u63d2\u4ef6\u7684\u5b9a\u4e49\u8fdb\u884c\u6269\u5c55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nconst myPlugin: CliPlugin<AppTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n        // \u5728\u6784\u5efa\u5b8c\u6210\u540e\u6267\u884c\u903b\u8f91\n      },\n    };\n  },\n};\n")),(0,l.kt)("p",null,"\u5982\u679c\u4ed4\u7ec6\u89c2\u5bdf ",(0,l.kt)("inlineCode",{parentName:"p"},"AppTools")," \u8fd9\u4e2a\u7c7b\u578b\uff0c\u53ef\u4ee5\u53d1\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"AppTools")," \u7531 3 \u79cd\u7c7b\u578b\u6784\u6210."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type AppTools = {\n  hooks: AppToolsHooks;\n  userConfig: AppToolsUserConfig;\n  normalizedConfig: AppToolsNormalizedConfig;\n};\n")),(0,l.kt)("p",null,"\u5f53\u7f16\u5199\u63d2\u4ef6\u65f6\uff0c\u63d2\u4ef6\u901a\u8fc7\u6cdb\u578b\u6269\u5c55\u5728\u4e0d\u540c\u7684\u57fa\u7840\u4e0a\u6269\u5c55\u81ea\u5df1\u7684 Hooks \u7b49\u7c7b\u578b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u901a\u7528\u63d2\u4ef6\u4e0a\u6269\u5c55\nimport type { CliPlugin } from '@modern-js/core';\nimport type { MyPluginHook } from 'xxx';\n\nconst myPlugin: CliPlugin<{ hooks: MyPluginHook }> = {};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5728 @modern-js/app-tools \u57fa\u7840\u4e0a\u6269\u5c55\nimport type { CliPlugin, AppTools } from '@modern-js/app-tools';\nimport type { MyPluginHook } from 'xxx';\n\nconst myPlugin: CliPlugin<AppTools & { hooks: MyPluginHook }> = {};\n")),(0,l.kt)("p",null,"\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/framework-plugin/extend"},"\u6269\u5c55 Hook"),"\u3002"),(0,l.kt)("h3",{id:"\u63d2\u4ef6\u914d\u7f6e\u9879"},"\u63d2\u4ef6\u914d\u7f6e\u9879"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u5c06\u63d2\u4ef6\u5199\u6210\u51fd\u6570\u7684\u5f62\u5f0f"),"\uff0c\u4f7f\u63d2\u4ef6\u80fd\u901a\u8fc7\u51fd\u6570\u5165\u53c2\u6765\u63a5\u6536\u914d\u7f6e\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\ntype MyPluginOptions = {\n  foo: string;\n};\n\nconst myPlugin = (options: MyPluginOptions): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    console.log(options.foo);\n  },\n});\n")),(0,l.kt)("h3",{id:"\u63d2\u4ef6-api"},"\u63d2\u4ef6 API"),(0,l.kt)("p",null,"\u63d2\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"setup")," \u51fd\u6570\u4f1a\u63a5\u6536\u4e00\u4e2a api \u5165\u53c2\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 api \u4e0a\u63d0\u4f9b\u7684\u4e00\u4e9b\u65b9\u6cd5\u6765\u83b7\u53d6\u5230\u914d\u7f6e\u3001\u5e94\u7528\u4e0a\u4e0b\u6587\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // \u83b7\u53d6\u5e94\u7528\u539f\u59cb\u914d\u7f6e\n    const config = api.useConfigContext();\n    // \u83b7\u53d6\u5e94\u7528\u8fd0\u884c\u4e0a\u4e0b\u6587\n    const appContext = api.useAppContext();\n    // \u83b7\u53d6\u89e3\u6790\u4e4b\u540e\u7684\u6700\u7ec8\u914d\u7f6e\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n")),(0,l.kt)("p",null,"\u63d2\u4ef6 API \u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/framework-plugin/plugin-api"},"Plugin API"),"\u3002"),(0,l.kt)("h3",{id:"\u5f02\u6b65-setup"},"\u5f02\u6b65 setup"),(0,l.kt)("p",null,"CLI \u63d2\u4ef6\u7684 setup \u53ef\u4ee5\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u6267\u884c\u5f02\u6b65\u903b\u8f91\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    await doSomething();\n  },\n});\n")),(0,l.kt)("h2",{id:"\u6dfb\u52a0\u63d2\u4ef6"},"\u6dfb\u52a0\u63d2\u4ef6"),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/configure/app/plugins"},"plugins (\u6846\u67b6\u63d2\u4ef6)"),"\u3002\u4e0b\u9762\u4f1a\u4ecb\u7ecd Modern.js \u4e2d\u63a8\u8350\u7684\u63d2\u4ef6\u5b9e\u73b0\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6"},"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6"),(0,l.kt)("p",null,"\u672c\u5730\u63d2\u4ef6\u63a8\u8350\u5199\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config/plugin")," \u76ee\u5f55\u4e0b\uff0c\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"export default")," \u5bfc\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/myPlugin.ts",title:"config/plugin/myPlugin.ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // \u63d2\u4ef6\u521d\u59cb\u5316\n  },\n});\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6ce8\u518c\u5bf9\u5e94\u7684\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n")),(0,l.kt)("h3",{id:"\u5728-npm-\u4e0a\u53d1\u5e03\u63d2\u4ef6"},"\u5728 npm \u4e0a\u53d1\u5e03\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5c06 Modern.js \u63d2\u4ef6\u53d1\u5e03\u5230 npm\uff0c\u63a8\u8350\u4f7f\u7528 Modern.js \u4e2d\u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u6765\u7ba1\u7406\u548c\u6784\u5efa\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\uff0c\u8c03\u6574 npm \u5305\u540d\u79f0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin"\n  ...\n}\n')),(0,l.kt)("p",null,"\u7136\u540e\u65b0\u5efa\u5bf9\u5e94\u7684\u63d2\u4ef6\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts",title:"src/index.ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // \u63d2\u4ef6\u521d\u59cb\u5316\n  },\n});\n")),(0,l.kt)("p",null,"\u53d1\u5e03\u4e4b\u540e\uff0c\u5b89\u88c5\u5230\u9700\u8981\u4f7f\u7528\u7684\u9879\u76ee ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add my-plugin"),"\uff0c\u8fd9\u91cc\u4ee5\u4e00\u4e2a\u5e94\u7528\u9879\u76ee\u4e3a\u4f8b\uff0c\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6dfb\u52a0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53d1\u73b0\u76ee\u524d Modern.js \u5b58\u5728\u65e0\u6cd5\u6ee1\u8db3\u7684\u573a\u666f\uff0c\u6b22\u8fce\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u65b9\u5f0f"),"\u6765\u4e00\u8d77\u5efa\u8bbe Modern.js \u751f\u6001\u3002"))}m.isMDXComponent=!0}}]);