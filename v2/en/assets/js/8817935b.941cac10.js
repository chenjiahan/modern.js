"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2998,711],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(18249),o=(n(52983),n(44993)),a=n(69346);const l={sidebar_label:"ssg"},i="output.ssg",u={unversionedId:"configure/app/output/ssg",id:"configure/app/output/ssg",title:"output.ssg",description:"- Type: boolean | object | function",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/ssg.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/ssg",permalink:"/v2/en/docs/configure/app/output/ssg",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ssg"},sidebar:"configsAppSidebar",previous:{title:"polyfill",permalink:"/v2/en/docs/configure/app/output/polyfill"},next:{title:"svgDefaultExport",permalink:"/v2/en/docs/configure/app/output/svg-default-export"}},p={},s=[{value:"Example",id:"example",level:2},{value:"Single Entry",id:"single-entry",level:3},{value:"Multi Entries",id:"multi-entries",level:3},{value:"Configure Route",id:"configure-route",level:3},{value:"Prevent Default",id:"prevent-default",level:3},{value:"Dynamic Params",id:"dynamic-params",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputssg"},"output.ssg"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"Enable the SSG for ",(0,o.kt)("strong",{parentName:"p"},"Self-controlled Routing")," or ",(0,o.kt)("strong",{parentName:"p"},"Conventional Routing"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more routes detail, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes"},"routes"),"\u3002")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"single-entry"},"Single Entry"),(0,o.kt)("p",null,"When the configuration is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the SSG of all entries will be enabled by default."),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"self-controlled routing"),", the root route of the entry will be rendered. For ",(0,o.kt)("strong",{parentName:"p"},"convention routing"),", every route in the entry will be rendered."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/")," directory has the following file structure that satisfies ",(0,o.kt)("strong",{parentName:"p"},"conventional routing"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251c\u2500\u2500 layout.tsx\n\u2502       \u251c\u2500\u2500 page.tsx\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u251c\u2500\u2500 layout.tsx\n\u2502           \u251c\u2500\u2500 page.tsx\n\u2502           \u2514\u2500\u2500 profile\n\u2502               \u2514\u2500\u2500 page.tsx\n")),(0,o.kt)("p",null,"Make the following config in ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.[tj]s"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default defineConfig({\n  output: {\n    ssg: true,\n  },\n});\n")),(0,o.kt)("p",null,"After executing ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build")," to build the application. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/")," directory will generate three HTML for each of the three routes (only one HTML if SSG not enabled), and all HTML has been rendered."),(0,o.kt)("p",null,"For example the following ",(0,o.kt)("strong",{parentName:"p"},"self-controlled routing"),":"),(0,o.kt)(a.default,{mdxType:"SelfRouteExample"}),(0,o.kt)("p",null,"Also using the above configuration, after executing ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run build"),", only the entry route ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," will generate the rendered HTML."),(0,o.kt)("h3",{id:"multi-entries"},"Multi Entries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"output.ssg")," can also be configured according to the entries, and the rules that the configuration takes effect are also determined by the entries routing method."),(0,o.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u3002\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 entryA\n\u2502   \u2502   \u2514\u2500\u2500 routes\n\u2502   \u2502       \u251c\u2500\u2500 layout.tsx\n\u2502   \u2502       \u251c\u2500\u2500 page.tsx\n\u2502   \u2502       \u2514\u2500\u2500 user\n\u2502   \u2502           \u251c\u2500\u2500 layout.tsx\n\u2502   \u2502           \u251c\u2500\u2500 page.tsx\n\u2502   \u2502           \u2514\u2500\u2500 profile\n\u2502   \u2502               \u2514\u2500\u2500 page.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 entryB\n\u2502\xa0\xa0     \u2514\u2500\u2500 App.tsx\n")),(0,o.kt)("p",null,"By default, all entryA entrances are rendered at build time after setting ",(0,o.kt)("inlineCode",{parentName:"p"},"output.ssg")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". You can configure ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to cancel the default behavior of the specified entries. For example, to cancel the rendering of the ",(0,o.kt)("inlineCode",{parentName:"p"},"entryA")," at build time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  output: {\n    ssg: {\n      entryA: true,\n      entryB: false,\n    },\n  },\n});\n")),(0,o.kt)("h3",{id:"configure-route"},"Configure Route"),(0,o.kt)("p",null,"As mentioned above, ",(0,o.kt)("strong",{parentName:"p"},"Self-Controlled Routing")," only enables SSG configuration for entries route by default."),(0,o.kt)("p",null,"Set specific routes in ",(0,o.kt)("inlineCode",{parentName:"p"},"output.ssg")," can tell Modern.js to enable the SSG of these client side routes. For example, the content of the above ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file is:"),(0,o.kt)(a.default,{mdxType:"SelfRouteExample"}),(0,o.kt)("p",null,"When set like this in ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.[jt]s"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"/about")," route will also enable SSG:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n")),(0,o.kt)("p",null,"Modern.js will automatically concat the complete URL according to the entry and hand it over to the SSG plugin to complete the rendering."),(0,o.kt)("p",null,"Request headers can also be configured for specific entries or routes, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  output: {\n    ssg: {\n      headers: {},\n      routes: [\n        '/',\n        {\n          url: '/about',\n          headers: {},\n        },\n      ],\n    },\n  },\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," set in the route override the ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," set in the entry.")),(0,o.kt)("h3",{id:"prevent-default"},"Prevent Default"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("strong",{parentName:"p"},"Conventional Routing")," all turn on SSG. Modern.js provides another field to prevent the default SSG behavior."),(0,o.kt)("p",null,"For example, the following directory structure \uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"/user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/profle")," all have SSG enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251c\u2500\u2500 layout.tsx\n\u2502       \u251c\u2500\u2500 page.tsx\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u251c\u2500\u2500 layout.tsx\n\u2502           \u251c\u2500\u2500 page.tsx\n\u2502           \u2514\u2500\u2500 profile\n\u2502               \u2514\u2500\u2500 page.tsx\n")),(0,o.kt)("p",null,"You can set this to disable the default behavior of a client-side route:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  output: {\n    preventDefault: ['/user'],\n  },\n});\n")),(0,o.kt)("h3",{id:"dynamic-params"},"Dynamic Params"),(0,o.kt)("p",null,"Some routes may be dynamic, such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/:id")," in a self-controlled route or the route generated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"user/[id]/page.tsx")," file in a conventional route."),(0,o.kt)("p",null,"configure specific parameters in ",(0,o.kt)("inlineCode",{parentName:"p"},"output.ssg")," to render the route of the specified parameters, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  output: {\n    ssg: {\n      routes: [\n        {\n          url: '/user/:id',\n          params: [\n            {\n              id: 'modernjs',\n            },\n          ],\n        },\n      ],\n    },\n  },\n});\n")),(0,o.kt)("p",null,"The features of dynamic routing and SSG is useful when generating static pages in real time based on CMS system."))}c.isMDXComponent=!0},69346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(18249),o=(n(52983),n(44993));const a={},l=void 0,i={unversionedId:"components/self-route-example",id:"components/self-route-example",title:"self-route-example",description:"",source:"@site/../../packages/toolkit/main-doc/zh/components/self-route-example.md",sourceDirName:"components",slug:"/components/self-route-example",permalink:"/v2/en/docs/components/self-route-example",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\nimport { StaticRouter } from '@modern-js/runtime/router/server';\nimport React from 'react';\nimport { useRuntimeContext } from '@modern-js/runtime';\n\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const pathname = context?.request?.pathname;\n  return (\n    <Router location={pathname}>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </Router>\n  );\n};\n")))}d.isMDXComponent=!0}}]);