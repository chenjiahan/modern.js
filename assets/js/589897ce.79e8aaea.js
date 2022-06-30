"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1690],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),v=r,u=d["".concat(o,".").concat(v)]||d[v]||c[v]||i;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(86215),r=(n(49231),n(54852));const i={title:"\u6d4b\u8bd5",sidebar_position:8},s="Electron Test",l={unversionedId:"guides/features/electron/test",id:"guides/features/electron/test",title:"\u6d4b\u8bd5",description:"\u5728\u6b64\u6d4b\u8bd5\u6846\u67b6\u4e2d\uff0c\u4e3b\u8981\u6d4b\u8bd5\u91cd\u70b9\u662f\uff1a\u6d4b\u8bd5\u5957\u4ef6\u516c\u5f00\u81ea\u5b9a\u4e49\u65b9\u6cd5\u3002\u8fd9\u6709\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a",source:"@site/docs/guides/features/electron/test.md",sourceDirName:"guides/features/electron",slug:"/guides/features/electron/test",permalink:"/docs/guides/features/electron/test",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u6d4b\u8bd5",sidebar_position:8},sidebar:"guidesSidebar",previous:{title:"\u5347\u7ea7",permalink:"/docs/guides/features/electron/upgrade"},next:{title:"\u5f00\u53d1\u73af\u5883\u91c7\u7528\u6587\u4ef6\u534f\u8bae\u52a0\u8f7d\u9875\u9762",permalink:"/docs/guides/features/electron/extra/use-file-protocol-in-dev"}},o={},p=[{value:"\u6d4b\u8bd5\u7528\u4f8b\u7f16\u5199\u57fa\u672c\u6d41\u7a0b",id:"\u6d4b\u8bd5\u7528\u4f8b\u7f16\u5199\u57fa\u672c\u6d41\u7a0b",level:2},{value:"\u6d4b\u8bd5\u7528\u4f8b\u7ec4\u7ec7",id:"\u6d4b\u8bd5\u7528\u4f8b\u7ec4\u7ec7",level:3},{value:"\u6d4b\u8bd5\u4e3b\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570",id:"\u6d4b\u8bd5\u4e3b\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570",level:3},{value:"\u6d4b\u8bd5\u6e32\u67d3\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570",id:"\u6d4b\u8bd5\u6e32\u67d3\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570",level:3},{value:"\u6d4b\u8bd5 webview \u529f\u80fd\u51fd\u6570",id:"\u6d4b\u8bd5-webview-\u529f\u80fd\u51fd\u6570",level:3},{value:"\u6d4b\u8bd5\u591a\u4e2a\u5b9e\u4f8b",id:"\u6d4b\u8bd5\u591a\u4e2a\u5b9e\u4f8b",level:3},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"electron-test"},"Electron Test"),(0,r.kt)("p",null,"\u5728\u6b64\u6d4b\u8bd5\u6846\u67b6\u4e2d\uff0c\u4e3b\u8981\u6d4b\u8bd5\u91cd\u70b9\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u5957\u4ef6\u516c\u5f00\u81ea\u5b9a\u4e49\u65b9\u6cd5"),"\u3002\u8fd9\u6709\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3b\u8fdb\u7a0b\u4e2d\u7684\u529f\u80fd\u51fd\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u7684\u529f\u80fd\u51fd\u6570"),(0,r.kt)("li",{parentName:"ol"},"Webview \u4e2d\u7684\u529f\u80fd\u51fd\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u8fdb\u7a0b\u4e4b\u95f4\u7684\u529f\u80fd\u51fd\u6570\u534f\u4f5c\u6d41\u7a0b"),(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u591a\u5e94\u7528\u540c\u65f6\u542f\u52a8\u7684\u573a\u666f")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u7528\u4f8b\u7f16\u5199\u57fa\u672c\u6d41\u7a0b"},"\u6d4b\u8bd5\u7528\u4f8b\u7f16\u5199\u57fa\u672c\u6d41\u7a0b"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u7528\u4f8b\u7ec4\u7ec7"},"\u6d4b\u8bd5\u7528\u4f8b\u7ec4\u7ec7"),(0,r.kt)("p",null,"\u6211\u4eec\u4f1a\u628a\u6240\u6709\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u7edf\u4e00\u5199\u5728\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"electron/tests"),"\u4e2d\u3002\n\u6211\u4eec\u4f1a\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"electron/tests/index.test.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/tests/index.test.ts'",title:"'electron/tests/index.test.ts'"},"/**\n * @jest-environment @modern-js/electron-test/dist/js/node/testEnvironment.js\n */\n\n jest.setTimeout(100000);\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837\u6ce8\u91ca\u7684\u5f62\u5f0f\u6dfb\u52a0\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6d4b\u8bd5\u73af\u5883\uff0c\u5219\u4f1a\u4e3a\u6211\u4eec\u542f\u52a8\u4e00\u4e2a Electron \u5b9e\u4f8b\u6765\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e00\u822c\uff0c\u6211\u4eec\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"electron/tests"),"\u76ee\u5f55\u4e0b\uff0c\u4ec5\u4f1a\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.test.ts")," \u7684\u6587\u4ef6\uff0c\u5e76\u5728\u5176\u4e2d\u52a0\u5165\u6ce8\u91ca\uff0c\u6ce8\u5165\u73af\u5883\u3002\u8fd9\u6837\uff0c\u8dd1\u6211\u4eec\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u7684\u65f6\u5019\uff0c\u53ea\u4f1a\u5f00\u542f\u4e00\u4e2a Electron \u5b9e\u4f8b\u3002\u82e5\u8981\u5f00\u542f\u591a\u4e2a\u5b9e\u4f8b\uff0c\u53ef\u770b\u4e0b\u65b9\u76f8\u5173\u793a\u4f8b\u3002"))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u4e3b\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570"},"\u6d4b\u8bd5\u4e3b\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u9700\u8981\u6d4b\u8bd5\u7684\u4e3b\u8fdb\u7a0b\u51fd\u6570\u3002"),(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u6211\u4eec\u5148\u6ce8\u518c\u9700\u8981\u6d4b\u8bd5\u7684\u4e3b\u8fdb\u7a0b\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"testMainFunc"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/main.ts"',title:'"electron/main.ts"'},"  import { testServices } from '@modern-js/electron-test/main';\n\n  const services = {\n    testMainFunc: (data: string) => data\n  }\n\n  testServices({\n    ...services,\n    winService,\n    updateService,\n    lifecycleService\n  });\n\n  const runtime = new Runtime({\n    windowsConfig,\n    mainServices: services,\n  });\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6211\u4eec\u9664\u4e86\u5c06\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u670d\u52a1\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"testServices"),"\u6ce8\u518c\u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u6ce8\u518c\u4e86\u6846\u67b6\u7684\u4e00\u4e9b\u670d\u52a1\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"winService"),"\u3002\u8fd9\u6837\u5728\u6211\u4eec\u7684\u6d4b\u8bd5\u7528\u4f8b\u91cc\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u57fa\u7840\u670d\u52a1\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u4e3b\u8fdb\u7a0b",(0,r.kt)("inlineCode",{parentName:"p"},"testMainFunc"),"\u51fd\u6570\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/tests/main-process/index.ts"',title:'"electron/tests/main-process/index.ts"'},"  // test main services\n\n  import TestDriver from '@modern-js/electron-test';\n\n  let testDriver: TestDriver | null = null;\n\n  jest.setTimeout(100000);\n\n  beforeAll(async () => {\n    testDriver = (global as  any).testDriver;\n\n    // \u5f53\u4e3b\u8fdb\u7a0b Ready \u4e4b\u540e\u3002\n    await testDriver?.whenReady();\n  });\n\n  describe('test main process services', () => {\n    it('test testMainFunc', async () => {\n      const data = 'test data';\n\n      // \u8bbf\u95ee\u4e3b\u8fdb\u7a0b\u670d\u52a1\u51fd\u6570\uff1atestMainFunc\n      const result = await testDriver?.call({\n        funcName: 'testMainFunc',\n        args: [data]\n      })\n      expect(result).toEqual(data);\n    })\n  })\n\n")))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u6e32\u67d3\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570"},"\u6d4b\u8bd5\u6e32\u67d3\u8fdb\u7a0b\u529f\u80fd\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u6e32\u67d3\u8fdb\u7a0b\u6240\u9700\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"testRenderFunc"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/preload/browserWindow/index.ts'",title:"'electron/preload/browserWindow/index.ts'"},"import {\n  exposeInMainWorld,\n  browserWindowPreloadApis,\n} from '@modern-js/runtime/electron-render';\n\nimport { testServices } from '@modern-js/electron-test/render';\n\nconst { callMain } = browserWindowPreloadApis;\n\nexport const apis = testServices({\n  ...browserWindowPreloadApis,\n  testRenderFunc: (data: string) => data,\n  openWindow: (winName: string) => {\n    return callMain('openWindow', winName);\n  }\n\n});\n\nexposeInMainWorld(apis);\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u7a97\u53e3\u4e2d\u6ce8\u518c\u7684\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"testRenderFunc"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/tests/render-process/index.ts'",title:"'electron/tests/render-process/index.ts'"},"// test render services\n\nimport TestDriver from '@modern-js/electron-test';\n\nlet testDriver: TestDriver | null = null;\n\njest.setTimeout(100000);\n\nbeforeAll(async () => {\n  testDriver = (global as  any).testDriver;\n  // \u5f53\u7a97\u53e3 main \u52a0\u8f7d\u5b8c\u6bd5\n  await testDriver?.whenReady('main');\n});\n\ndescribe('test render process services', () => {\n  it('test render func', async () => {\n    const data = 'test render func';\n    // \u6d4b\u8bd5\u7a97\u53e3\u4e2d\u6ce8\u518c\u7684\u51fd\u6570 testRenderFunc\n    const result = await testDriver?.call({\n      funcName: 'testRenderFunc',\n      winName: 'main',\n      args: [data]\n    })\n    expect(result).toEqual(data);\n  })\n})\n\n")))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5-webview-\u529f\u80fd\u51fd\u6570"},"\u6d4b\u8bd5 webview \u529f\u80fd\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u5efa webview \u7684\u9884\u52a0\u8f7d\u811a\u672c\uff0c\u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"p"},"testWebviewFunc")," \u51fd\u6570\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/preload/webview/index.ts'",title:"'electron/preload/webview/index.ts'"},"import {\n  webviewPreloadApis,\n  exposeInMainWorld,\n} from '@modern-js/runtime/electron-webview';\nimport { testServices } from '@modern-js/electron-test/webview';\n\nexport const apis = testServices({\n  ...webviewPreloadApis,\n  testWebviewFunc: (data: string) => data\n});\n\nexposeInMainWorld(apis);\n\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/preload/webview/index.dev.js'",title:"'electron/preload/webview/index.dev.js'"},"const { join } = require('path');\nconst babel = require('@babel/register');\nconst { babelConfig } = require('@modern-js/plugin-electron/tools');\n\nbabel(\n  Object.assign(babelConfig, {\n    extensions: ['.ts', '.js'],\n  }),\n);\nrequire(join(__dirname, 'index.ts'));\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9875\u9762\u4e2d\uff0c\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"webview"),"\uff0c\u5e76\u8bbe\u7f6e\u9884\u52a0\u8f7d\u811a\u672c\u8def\u5f84\u3002"),(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u6e32\u67d3\u8fdb\u7a0b\u9884\u52a0\u8f7d\u811a\u672c\u4e2d\u6ce8\u518c\u4e00\u4e2a\u83b7\u5f97\u8def\u5f84\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/browserWindow/index.ts"',title:'"electron/browserWindow/index.ts"'},"  ...\n  export const apis = testServices({\n    ...\n    getWebviewPreloadJs: () =>\n      join(\n        'file://',\n        __dirname,\n        '..',\n        'webview',\n        process.env.NODE_ENV === 'development' ? 'index.dev.js' : 'index.js',\n      ),\n  });\n")),(0,r.kt)("p",{parentName:"li"},"\u5176\u6b21\uff0c\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"webview"),"\u7ec4\u4ef6\uff0c\u52a0\u4e0a\u9884\u52a0\u8f7d\u811a\u672c\u8def\u5f84\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},"const App: React.FC = () => (\n  <div>\n    ...\n    <webview\n      src={'https://www.baidu.com'}\n      id=\"webview1\"\n      // @ts-expect-error\n      nodeintegration=\"true\"\n      preload={bridge.getWebviewPreloadJs()}\n      style={{\n        width: '100%',\n        height: 300,\n      }}></webview>\n  </div>\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import TestDriver from '@modern-js/electron-test';\n\nlet testDriver: TestDriver | null = null;\n\nconst webviewId1 = 'webview1';\n\nbeforeAll(() => {\n  testDriver = new TestDriver({\n    cwd: process.cwd(),\n    envs: {\n      TEST_FOLDER: 'webviewBridge',\n    },\n  });\n  return Promise.all(\n    [webviewId1].map(async x => {\n      await testDriver?.whenReady('main', {\n        webviewId: x,\n      });\n      await testDriver?.call({\n        funcName: 'webviewService.addWebview',\n        winName: 'main',\n        args: [x, true],\n      });\n    }),\n  );\n});\n\ndescribe('test webview bridge', () => {\n  it('test webview registerServices again', async () => {\n    const msg1 = 'this is msg from webview';\n\n    const result = await testDriver?.call({\n      funcName: 'webviewService.callWebview',\n      winName: 'main',\n      args: [webviewId1, 'testWebviewFunc', msg1],\n    });\n\n    expect(result).toBe(msg1);\n\n  });\n});\n\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5bf9\u4e8e webview \u4e2d\u7684\u670d\u52a1\u51fd\u6570\u6d4b\u8bd5\u8f83\u4e3a\u590d\u6742\uff0c\u4e00\u822c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll")," \u4e2d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b49\u5f85 ",(0,r.kt)("inlineCode",{parentName:"li"},"webview")," \u52a0\u8f7d\u5b8c\u6bd5\u3002")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await testDriver?.whenReady('main', {\n  webviewId: x,\n});\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"webview")," \u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"webviewService")," \u7684\u7ba1\u7406\u3002\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"webviewService.addWebview"),"\uff09\u3002")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await testDriver?.call({\n  funcName: 'webviewService.addWebview',\n  winName: 'main',\n  args: [x, true],\n});\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"webviewService.callWebview"),"\u6765\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"webview"),"\u4e2d\u6ce8\u518c\u7684\u670d\u52a1\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const result = await testDriver?.call({\n  funcName: 'webviewService.callWebview',\n  winName: 'main',\n  args: [webviewId1, 'testWebviewFunc', msg1],\n});\n")))))))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u591a\u4e2a\u5b9e\u4f8b"},"\u6d4b\u8bd5\u591a\u4e2a\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\uff0c\u65b0\u5efa\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  const winName = 'main';\n  let myDriver: TestDriver | null;\n  beforeAll(async () => {\n    myDriver = new TestDriver({\n      cwd: process.cwd(),\n      envs: {\n        TEST_FOLDER: 2,\n      },\n    });\n    await myDriver?.whenReady(winName);\n  });\n")),(0,r.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u6765\u6d4b\u8bd5\u6b64\u5b9e\u4f8b\u5173\u95ed\u7684\u8868\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  it(`will quit if set forceQuit=true`, async () => {\n    await myDriver?.call({\n      funcName: 'lifecycleService.quit',\n      args: [\n        {\n          forceQuit: true,\n        },\n      ],\n    });\n    return sleep(1).then(() => {\n      expect(myDriver?.isRunning()).toBe(false);\n    });\n  });\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/apis/runtime/electron/tests/test"},"\u66f4\u591a\u6d4b\u8bd5 API"),"\u3002"))),(0,r.kt)("h3",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"index.test.ts")," \u4e2d\u5f15\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/tests/index.test.ts"',title:'"electron/tests/index.test.ts"'},"\n/**\n * @jest-environment @modern-js/electron-test/dist/js/node/testEnvironment.js\n */\n\nimport './main-process';\nimport './render-process';\nimport './webview-process';\n\njest.setTimeout(100000);\n\n")),(0,r.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u76f4\u63a5\u8dd1\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," \u5373\u53ef\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002"))}c.isMDXComponent=!0}}]);