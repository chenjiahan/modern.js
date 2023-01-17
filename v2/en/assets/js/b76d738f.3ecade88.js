"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4870,124],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=t(18249),r=(t(52983),t(44993)),o=t(94525),l=t(41362),i=t(98592);const p={sidebar_position:2,title:"\u4f53\u9a8c\u5fae\u524d\u7aef"},s=void 0,d={unversionedId:"guides/topic-detail/micro-frontend/c02-development",id:"guides/topic-detail/micro-frontend/c02-development",title:"\u4f53\u9a8c\u5fae\u524d\u7aef",description:"\u901a\u8fc7\u672c\u7ae0\u4f60\u53ef\u4ee5\u4e86\u89e3\u5230\uff1a",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/micro-frontend/c02-development.md",sourceDirName:"guides/topic-detail/micro-frontend",slug:"/guides/topic-detail/micro-frontend/c02-development",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/c02-development",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4f53\u9a8c\u5fae\u524d\u7aef"},sidebar:"guidesSidebar",previous:{title:"\u5fae\u524d\u7aef\u4ecb\u7ecd",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/c01-introduction"},next:{title:"\u5f00\u53d1\u4e3b\u5e94\u7528",permalink:"/v2/en/docs/guides/topic-detail/micro-frontend/c03-main-app"}},m={},u=[{value:"\u521b\u5efa\u5e94\u7528",id:"\u521b\u5efa\u5e94\u7528",level:2},{value:"\u521b\u5efa main \u4e3b\u5e94\u7528",id:"\u521b\u5efa-main-\u4e3b\u5e94\u7528",level:3},{value:"\u521b\u5efa dashboard \u5b50\u5e94\u7528",id:"\u521b\u5efa-dashboard-\u5b50\u5e94\u7528",level:3},{value:"\u521b\u5efa table \u5b50\u5e94\u7528",id:"\u521b\u5efa-table-\u5b50\u5e94\u7528",level:3},{value:"\u6dfb\u52a0\u4ee3\u7801",id:"\u6dfb\u52a0\u4ee3\u7801",level:2},{value:"main \u4e3b\u5e94\u7528",id:"main-\u4e3b\u5e94\u7528",level:3},{value:"dashboard \u5b50\u5e94\u7528",id:"dashboard-\u5b50\u5e94\u7528",level:3},{value:"table \u5b50\u5e94\u7528",id:"table-\u5b50\u5e94\u7528",level:3},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],c={toc:u};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7\u672c\u7ae0\u4f60\u53ef\u4ee5\u4e86\u89e3\u5230\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u521b\u5efa\u5fae\u524d\u7aef\u9879\u76ee\u7684\u4e3b\u5e94\u7528\u3001\u5b50\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fae\u524d\u7aef\u9879\u76ee\u5f00\u53d1\u7684\u57fa\u672c\u6d41\u7a0b\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa\u5e94\u7528"},"\u521b\u5efa\u5e94\u7528"),(0,r.kt)("p",null,"\u5728\u8fd9\u6b21\u7684\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e09\u4e2a\u5e94\u7528\uff0c\u5206\u522b\u4e3a 1 \u4e2a\u4e3b\u5e94\u7528\uff0c2 \u4e2a\u5b50\u5e94\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"main \u4e3b\u5e94\u7528"),(0,r.kt)("li",{parentName:"ul"},"dashboard \u5b50\u5e94\u7528"),(0,r.kt)("li",{parentName:"ul"},"table \u5b50\u5e94\u7528")),(0,r.kt)("h3",{id:"\u521b\u5efa-main-\u4e3b\u5e94\u7528"},"\u521b\u5efa main \u4e3b\u5e94\u7528"),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521d\u59cb\u5316\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir main && cd main\nnpx @modern-js/create\n")),(0,r.kt)(o.default,{mdxType:"DefaultMWAGenerate"}),(0,r.kt)("p",null,"\u5b8c\u6210\u9879\u76ee\u521b\u5efa\u540e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u6765\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5fae\u524d\u7aef")," \u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300c\u5fae\u524d\u7aef\u300d\u6a21\u5f0f\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u6ce8\u518c\u5fae\u524d\u7aef\u63d2\u4ef6\u5e76\u6dfb\u52a0\u5f00\u542f\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\uff0c\u5e76\u589e\u52a0\u5b50\u5e94\u7528\u5217\u8868\uff1a"),(0,r.kt)(l.ZP,{mdxType:"EnableMicroFrontend"}),(0,r.kt)(i.ZP,{mdxType:"MicroRuntimeConfig"}),(0,r.kt)("h3",{id:"\u521b\u5efa-dashboard-\u5b50\u5e94\u7528"},"\u521b\u5efa dashboard \u5b50\u5e94\u7528"),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521d\u59cb\u5316\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir dashboard && cd dashboard\nnpx @modern-js/create\n")),(0,r.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u9009\u62e9\uff0c\u751f\u6210\u9879\u76ee\uff1a"),(0,r.kt)(o.default,{mdxType:"DefaultMWAGenerate"}),(0,r.kt)("p",null,"\u6211\u4eec\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u6765\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5fae\u524d\u7aef")," \u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300c\u5fae\u524d\u7aef\u300d\u6a21\u5f0f\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u6ce8\u518c\u5fae\u524d\u7aef\u63d2\u4ef6\u5e76\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.ts"),"\uff0c\u6dfb\u52a0\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy.microFrontend"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport garfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n")),(0,r.kt)("h3",{id:"\u521b\u5efa-table-\u5b50\u5e94\u7528"},"\u521b\u5efa table \u5b50\u5e94\u7528"),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521d\u59cb\u5316\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir table && cd table\nnpx @modern-js/create\n")),(0,r.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u9009\u62e9\uff0c\u751f\u6210\u9879\u76ee\uff1a"),(0,r.kt)(o.default,{mdxType:"DefaultMWAGenerate"}),(0,r.kt)("p",null,"\u6211\u4eec\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u6765\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5fae\u524d\u7aef"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300c\u5fae\u524d\u7aef\u300d\u6a21\u5f0f\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u6ce8\u518c\u5fae\u524d\u7aef\u63d2\u4ef6\u5e76\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.ts"),"\uff0c\u6dfb\u52a0\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u7684\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy.microFrontend"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport garfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n")),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u4ee3\u7801"},"\u6dfb\u52a0\u4ee3\u7801"),(0,r.kt)("h3",{id:"main-\u4e3b\u5e94\u7528"},"main \u4e3b\u5e94\u7528"),(0,r.kt)("p",null,"\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routers")," \u76ee\u5f55, \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u5e76\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Link } from \'@modern-js/runtime/router\';\nimport { useModuleApps } from \'@modern-js/plugin-garfish/runtime\';\n\nconst App = () => {\n  const { DashBoard, TableList } = useModuleApps();\n  return (\n    <div>\n      <div>\n        <Link to="/dashboard">Dashboard</Link> &nbsp;\n        <Link to="/table">Table</Link>\n      </div>\n      <Route path="/dashboard">\n        <DashBoard />\n      </Route>\n      <Route path="/table">\n        <TableList />\n      </Route>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,r.kt)("h3",{id:"dashboard-\u5b50\u5e94\u7528"},"dashboard \u5b50\u5e94\u7528"),(0,r.kt)("p",null,"\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routers")," \u76ee\u5f55, \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u5e76\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default () => <div>Dashboard Page</div>;\n")),(0,r.kt)("h3",{id:"table-\u5b50\u5e94\u7528"},"table \u5b50\u5e94\u7528"),(0,r.kt)("p",null,"\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routers")," \u76ee\u5f55, \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u5e76\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default () => <div>Table Page</div>;\n")),(0,r.kt)("h2",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,r.kt)("p",null,"\u6309\u987a\u5e8f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," \u76ee\u5f55\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u547d\u4ee4\u542f\u52a8\u5e94\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"main      - ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080")),(0,r.kt)("li",{parentName:"ul"},"dashboard - ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8081")),(0,r.kt)("li",{parentName:"ul"},"table     - ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8082"))),(0,r.kt)("p",null,"\u8bbf\u95ee\u4e3b\u5e94\u7528\u5730\u5740 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"\uff0c\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/micro-demo.gif",alt:"demo"})),(0,r.kt)("p",null,"\u5728\u5b8c\u6210\u4e86\u5fae\u524d\u7aef\u6574\u4f53\u5f00\u53d1\u6d41\u7a0b\u7684\u4f53\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4e86\u89e3\u5982\u4f55 ",(0,r.kt)("a",{parentName:"p",href:"/v2/en/docs/guides/topic-detail/micro-frontend/c03-main-app"},"\u5f00\u53d1\u4e3b\u5e94\u7528")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"\u81ea\u67e5\u624b\u518c: ",(0,r.kt)("a",{parentName:"p",href:"https://www.garfishjs.org/issues/"},"https://www.garfishjs.org/issues/")))}k.isMDXComponent=!0},94525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(18249),r=(t(52983),t(44993));const o={},l=void 0,i={unversionedId:"components/default-mwa-generate",id:"components/default-mwa-generate",title:"default-mwa-generate",description:"",source:"@site/../../packages/toolkit/main-doc/zh/components/default-mwa-generate.md",sourceDirName:"components",slug:"/components/default-mwa-generate",permalink:"/v2/en/docs/components/default-mwa-generate",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[],d={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u5e94\u7528\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n")))}m.isMDXComponent=!0},41362:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(18249),r=(t(52983),t(44993));const o={toc:[]};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport garfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n")))}l.isMDXComponent=!0},98592:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(18249),r=(t(52983),t(44993));const o={toc:[]};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        name: 'DashBoard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n")))}l.isMDXComponent=!0}}]);