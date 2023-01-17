"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7565],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(18249),r=(n(52983),n(44993));const o={title:"Fetch Data",sidebar_position:3},i=void 0,s={unversionedId:"guides/basic-features/data-fetch",id:"guides/basic-features/data-fetch",title:"Fetch Data",description:"Modern.js provides out of the box fetching data capabilities, developers can use these APIs to develop in CSR and SSR environments isomorphic.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/basic-features/data-fetch.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/data-fetch",permalink:"/v2/en/docs/guides/basic-features/data-fetch",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Fetch Data",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Builder",permalink:"/v2/en/docs/guides/basic-features/builder"},next:{title:"CSS-in-JS",permalink:"/v2/en/docs/guides/basic-features/css/css-in-js"}},l={},d=[{value:"Data loader(recommend)",id:"data-loaderrecommend",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"<code>loader</code> function",id:"loader-function",level:3},{value:"<code>Params</code>",id:"params",level:5},{value:"<code>request</code>",id:"request",level:4},{value:"Return value",id:"return-value",level:4},{value:"Request API",id:"request-api",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Get data from upper level components",id:"get-data-from-upper-level-components",level:3},{value:"(WIP)Loading UI",id:"wiploading-ui",level:3},{value:"Wrong usage",id:"wrong-usage",level:3},{value:"useLoader(Old)",id:"useloaderold",level:2},{value:"Route Loader",id:"route-loader",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js provides out of the box fetching data capabilities, developers can use these APIs to develop in CSR and SSR environments isomorphic."),(0,r.kt)("p",null,"It should be noted that these APIs do not help applications to initiate requests, but help developers better manage the relationship between data and routing."),(0,r.kt)("h2",{id:"data-loaderrecommend"},"Data loader(recommend)"),(0,r.kt)("p",null,"Modern.js recommends the use of conventional routing for route management. With Modern.js' ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes#conventional-routing"},"conventional (nested) routing"),", each routing component (",(0,r.kt)("inlineCode",{parentName:"p"},"layout.ts")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"page.ts"),") can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," file with the same name that can be executed before the component renders, providing data to the routing component."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Modern.js v1 supports getting data by ",(0,r.kt)("a",{parentName:"p",href:"#useloaderold"},"useLoader"),", which is no longer the recommended usage and it is not recommended to mix both except for migration process.")),(0,r.kt)("h3",{id:"basic-example"},"Basic example"),(0,r.kt)("p",null,"A routing component such as ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.ts")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"page.ts")," can define a ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," file with the same name. The ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," file exports a function that provides the data required by the component, which is then get data by the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoaderData")," function in the routing component, as in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 layout.tsx\n        \u251c\u2500\u2500 layout.loader.ts\n        \u251c\u2500\u2500 page.tsx\n        \u2514\u2500\u2500 page.loader.ts\n")),(0,r.kt)("p",null,"Define the following code in the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="routes/user/page.tsx"',title:'"routes/user/page.tsx"'},"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { ProfileData } from './page.loader.ts';\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="routes/user/page.loader.ts"',title:'"routes/user/page.loader.ts"'},"export type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Here the routing component and the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," file share a type, should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"import type")," syntax.")),(0,r.kt)("p",null,"In a CSR environment, the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function is executed on the client side, and the browser API can be used within the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function (but it is usually not needed and not recommended)."),(0,r.kt)("p",null,"In an SSR environment, the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function will only be executed on the server side, regardless of the first screen or the navigation on the client side, where any Node.js API can be called, and any dependencies and code used here will not be included in the client bundle."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In later versions, Modern.js may support ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," functions running on the server side as well in CSR environments to improve performance and security, so here it is recommended to keep the loader as pure as possible and only do data fetching scenarios.")),(0,r.kt)("p",null,"When navigating on the client side, all loader functions under ",(0,r.kt)("inlineCode",{parentName:"p"},"/user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/profile")," are executed (requested) in parallel based on Modern.js's ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes"},"conventional routing"),", i.e. when accessing ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/profile"),", the loader functions under ",(0,r.kt)("inlineCode",{parentName:"p"},"/user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/profile")," are executed (requested) in parallel to improve client-side performance."),(0,r.kt)("h3",{id:"loader-function"},(0,r.kt)("inlineCode",{parentName:"h3"},"loader")," function"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function has two input parameters\uff1a"),(0,r.kt)("h5",{id:"params"},(0,r.kt)("inlineCode",{parentName:"h5"},"Params")),(0,r.kt)("p",null,"When a routing file is passed through ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", it is passed as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes#dynamic-route"},"dynamic route")," and the dynamic route fragment is passed as an argument to the loader function\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// routes/user/[id]/page.loader.tsx\nimport { LoaderArgs } from '@modern-js/runtime/router';\n\nexport default async ({ params }: LoaderArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n")),(0,r.kt)("p",null,"\u5f53\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/123")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," \u51fd\u6570\u7684\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"{ params: { id: '123' } }"),"\u3002"),(0,r.kt)("h4",{id:"request"},(0,r.kt)("inlineCode",{parentName:"h4"},"request")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request"},"Fetch Request")," instance."),(0,r.kt)("p",null,"A common usage scenario is to obtain query parameters via ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// routes/user/[id]/page.loader.ts\nimport { LoaderArgs } from '@modern-js/runtime/router';\n\nexport default async ({ request }: LoaderArgs) => {\n  const url = new URL(request.url);\n  const userId = url.searchParams.get('id');\n  return queryUser(userId);\n};\n")),(0,r.kt)("h4",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"The return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function can be anything serializable, or it can be a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Fetch Response")," instance\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const loader = async (): Promise<ProfileData> => {\n  return {\n    message: 'hello world',\n  };\n};\nexport default loader;\n")),(0,r.kt)("p",null,"By default, the response ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-type")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," is 200, which you can set by customizing ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const loader = async (): Promise<ProfileData> => {\n  const data = { message: 'hello world' };\n  return new Response(JSON.stringify(data), {\n    status: 200,\n    headers: {\n      'Content-Type': 'application/json; utf-8',\n    },\n  });\n};\n")),(0,r.kt)("h3",{id:"request-api"},"Request API"),(0,r.kt)("p",null,"Modern.js does a polyfill of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API to initiate requests, which is consistent with the browser's ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API, but can also be used on the server side to initiate requests, meaning that both CSRs and SSRs can use the unified ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API for data fetching\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function loader() {\n  const res = await fetch('https://api/user/profile');\n}\n")),(0,r.kt)("h3",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function, errors can be handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"throw error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"throw response"),". When an error is thrown in the ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," function, Modern.js will stop executing the code in the current loader and switch the front-end UI to the defined ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes#errorboundary"},(0,r.kt)("inlineCode",{parentName:"a"},"ErrorBoundary"))," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// routes/user/profile/page.loader.tsx\nexport default async function loader() {\n  const res = await fetch('https://api/user/profile');\n  if (!res.ok) {\n    throw res;\n  }\n  return res.json();\n}\n\n// routes/user/profile/error.tsx\nimport { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError() as Response;\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.statusText}</h2>\n    </div>\n  );\n};\n\nexport default ErrorBoundary;\n")),(0,r.kt)("h3",{id:"get-data-from-upper-level-components"},"Get data from upper level components"),(0,r.kt)("p",null,"In many cases, the child component needs to access the data in the ancestor's loader, and you can easily access the ancestor's data with ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouteLoaderData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouteLoaderData"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// routes/user/profile/page.tsx\nimport { useRouteLoaderData } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  // Get the data returned by the loader in routes/user/layout.loader.ts\n  const data = useRouteLoaderData('user/layout');\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <h2>{data.age}</h2>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"userRouteLoaderData")," takes one parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"routeId"),",When using conventional routing, Modern.js will automatically generate ",(0,r.kt)("inlineCode",{parentName:"p"},"routeId")," for you. The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"routeId")," is the path of the corresponding component relative to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes"),", as in the example above, the child component wants to get the data returned by the loader in ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/user/layout.tsx"),", the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"routeId")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"user/layout"),"."),(0,r.kt)("p",null,"In a multi-entry (MPA) scenario, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"routeId")," needs to be added to the name of the corresponding entry, and the entry name is usually the entry directory name if not specified, such as the following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 entry1\n    \u2502     \u2514\u2500\u2500 routes\n    \u2502           \u2514\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 entry2\n          \u2514\u2500\u2500 routes\n                \u2514\u2500\u2500 layout.tsx\n")),(0,r.kt)("p",null,"If you want to get the data returned by the loader in ",(0,r.kt)("inlineCode",{parentName:"p"},"entry1/routes/layout.tsx"),", the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"routeId")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"entry1_layout"),"."),(0,r.kt)("h3",{id:"wiploading-ui"},"(WIP)Loading UI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature is currently experimental and the API may be adjusted in the future.\nCurrently, only CSR is supported, so stay tuned for Streaming SSR.")),(0,r.kt)("p",null,"Add the following code to ",(0,r.kt)("inlineCode",{parentName:"p"},"user/layout.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="routes/user/layout.tsx"',title:'"routes/user/layout.tsx"'},"import {\n  Await,\n  defer,\n  useLoaderData,\n  Outlet\n} from '@modern-js/runtime/router';\n\nexport const loader = () => {\n  return defer({\n    // fetchUserInfo \u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8fd4\u56de\u7528\u6237\u4fe1\u606f\n    userInfo: fetchUserInfo(),\n  })\n}\n\nexport default function UserLayout() {\n  const { userInfo } = useLoaderData() as {userInfo: Promise<UserInfo>};\n  return (\n    <div>\n      <React.Suspense\n        fallback={<p>Loading...</p>}\n      >\n        <Await resolve={userInfo} children={userInfo => (\n          <div>\n            <span>{userInfo.name}</span>\n            <span>{userInfo.age}</span>\n            <Outlet>\n          </div>\n        )}>\n        </Await>\n      </React.Suspense>\n    </div>\n  );\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For specific usage of the Await component, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/routes#await"},"Await")),(0,r.kt)("p",{parentName:"admonition"},"For specific usage of the defer function, see",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/guides/deferred"},"defer"))),(0,r.kt)("h3",{id:"wrong-usage"},"Wrong usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Only serializable data can be returned in ",(0,r.kt)("inlineCode",{parentName:"li"},"loader"),". In SSR environments, the return value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," function is serialized to a JSON string, which is then deserialized to an object on the client side. Therefore, no non-serializable data (such as functions) can be returned in the ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," function.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This restriction is not currently in place under CSR, but we strongly recommend that you follow it, and we may add it under CSR in the future.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// This won't work!\nexport default () => {\n  return {\n    user: {},\n    method: () => {},\n  };\n};\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Modern.js will call the ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," function for you, you shouldn't call it yourself in the component.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// This won't work!\nexport default async () => {\n  const res = fetch('https://api/user/profile');\n  return res.json();\n};\n\nimport loader from './page.loader.ts';\nexport default function RouteComp() {\n  const data = loader();\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You cannot import a ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," file from a routing component, nor can you import variables in a routing component from a ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Not allowed\n// routes/layout.tsx\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { ProfileData } from './page.loader.ts'; // should use \"import type\" instead\n\nexport const fetch = wrapFetch(fetch);\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n\n// routes/layout.loader.ts\nimport { fetch } from './layout.tsx'; // should not be imported from the routing component\nexport type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"When run on the server side, the ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," functions are packaged into a single bundle, so we do not recommend using ",(0,r.kt)("inlineCode",{parentName:"li"},"__filename")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"__dirname")," for server-side code.")),(0,r.kt)("h2",{id:"useloaderold"},"useLoader(Old)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"useLoader"))," is an API in Modern.js old version. The API is a React Hook specially provided for SSR applications, allowing developers to fetch data in components."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"CSR don't need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," to fetch data.")),(0,r.kt)("p",null,"Here is the simplest example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(async () => {\n    console.log('fetch in useLoader');\n\n    // No real request is sent here, just a hard coding data is returned.\n    // In a real project, the data obtained from the remote end should be returned.\n    return {\n      name: 'Modern.js',\n    };\n  });\n\n  return <div>Hello, {data?.name}</div>;\n};\n")),(0,r.kt)("p",null,"After the above code starts, visit the page. You can see that the log is printed at terminal, but not at console in browser."),(0,r.kt)("p",null,"This is because Modern.js server-side rendering, the data returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," is collected and injected into the HTML of the response. If SSR rendering succeeds, the following code snippet can be seen in the HTML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  window._SSR_DATA = {};\n<\/script>\n")),(0,r.kt)("p",null,"In this global variable, every piece of data is recorded, and this data will be used first in the process of rendering on the browser side. If the data does not exist, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," function will be re-executed."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"During the build phase, Modern.js will automatically generate a Loader ID for each ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," and inject it into the JS bundle of SSR and CSR, which is used to associate Loader and data.")),(0,r.kt)("p",null,"Compared with ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," in the Next.js, get data in advance before rendering. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader"),", you can get the data required by the local UI in the component without passing the data layer by layer. Similarly, it will not add redundant logic to the outermost data acquisition function because different routes require different data requests. Of course, ",(0,r.kt)("inlineCode",{parentName:"p"},"useLoader")," also has some problems, such as the difficulty of Treeshaking server-level code, and the need for one more pre-render at the server level."),(0,r.kt)("p",null,"Modern.js in the new version, a new Loader solution is designed. The new solution solves these problems and can cooperate with ",(0,r.kt)("strong",{parentName:"p"},"nested routing")," to optimize page performance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Detailed APIs can be found at ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/core/use-loader"},"useLoader"),".")),(0,r.kt)("h2",{id:"route-loader"},"Route Loader"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Stay tuned.")))}p.isMDXComponent=!0}}]);