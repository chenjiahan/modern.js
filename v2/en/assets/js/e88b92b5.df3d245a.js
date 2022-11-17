"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7858],{44993:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(52983);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=p,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(18249),p=(n(52983),n(44993));const a={title:"bootstrap",sidebar_position:8},o=void 0,i={unversionedId:"apis/app/runtime/app/bootstrap",id:"apis/app/runtime/app/bootstrap",title:"bootstrap",description:"\u7528\u4e8e\u542f\u52a8\u5e76\u52a0\u8f7d\u5e94\u7528\u3002",source:"@site/docs/apis/app/runtime/app/bootstrap.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/bootstrap",permalink:"/v2/en/docs/apis/app/runtime/app/bootstrap",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"bootstrap",sidebar_position:8},sidebar:"apisAppSidebar",previous:{title:"useModuleApps",permalink:"/v2/en/docs/apis/app/runtime/app/use-module-apps"},next:{title:"createApp",permalink:"/v2/en/docs/apis/app/runtime/app/create-app"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u975e <code>SSR</code> \u9875\u9762\u4f7f\u7528",id:"\u975e-ssr-\u9875\u9762\u4f7f\u7528",level:3},{value:"<code>SSR</code> \u9875\u9762\u4f7f\u7528",id:"ssr-\u9875\u9762\u4f7f\u7528",level:3}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,p.kt)("p",{parentName:"admonition"},"\u7528\u4e8e\u542f\u52a8\u5e76\u52a0\u8f7d\u5e94\u7528\u3002"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { bootstrap } from '@modern-js/runtime';\n"))),(0,p.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,p.kt)("ul",{parentName:"admonition"},(0,p.kt)("li",{parentName:"ul"},"\u53ea\u6709\u81ea\u5b9a\u4e49\u5165\u53e3\uff0c\u5373\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"index.tsx")," \u800c\u975e ",(0,p.kt)("inlineCode",{parentName:"li"},"App.tsx")," \u65f6\uff0c\u624d\u9700\u8981\u4f7f\u7528\u8be5 API\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u9700\u8981\u7ed3\u5408 ",(0,p.kt)("a",{parentName:"li",href:"/v2/en/docs/apis/app/runtime/app/create-app"},(0,p.kt)("inlineCode",{parentName:"a"},"createApp"))," \u4f7f\u7528\u3002"))),(0,p.kt)("h2",{id:"api"},"API"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"bootstrap(AppComponent, rootElement) => React.ComponentType<any> | void")),(0,p.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"AppComponent\uff1a",(0,p.kt)("inlineCode",{parentName:"li"},"React.ComponentType<any>"),"\uff0c\u5e94\u7528\u6839\u7ec4\u4ef6\uff0c\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"li",href:"/v2/en/docs/apis/app/runtime/app/create-app"},(0,p.kt)("inlineCode",{parentName:"a"},"createApp"))," \u521b\u5efa\u3002"),(0,p.kt)("li",{parentName:"ul"},"rootElement\uff1a",(0,p.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u8981\u6302\u8f7d\u7684 DOM \u6839\u5143\u7d20 id\uff0c\u5982 ",(0,p.kt)("inlineCode",{parentName:"li"},'"root"'),"\u3002")),(0,p.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("h3",{id:"\u975e-ssr-\u9875\u9762\u4f7f\u7528"},"\u975e ",(0,p.kt)("inlineCode",{parentName:"h3"},"SSR")," \u9875\u9762\u4f7f\u7528"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp, bootstrap } from '@modern-js/runtime';\nimport { router, state } from '@modern-js/runtime/plugins';\nimport { effects, autoActions } from '@modern-js/runtime/model';\n\nfunction App() {\n  return <div>Hello Modern.js</div>\n}\n\nconst WrappedApp = createApp({\n  // \u4f20\u5165\u81ea\u5b9a\u4e49\u63d2\u4ef6\n  plugins: [\n    router({}),\n    state({\n      plugins: [autoActions(), effects()]\n    })\n  ]\n})(App);\n\nbootstrap(WrappedApp, 'root'));\n")),(0,p.kt)("h3",{id:"ssr-\u9875\u9762\u4f7f\u7528"},(0,p.kt)("inlineCode",{parentName:"h3"},"SSR")," \u9875\u9762\u4f7f\u7528"),(0,p.kt)("p",null,"\u5bf9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"SSR")," \u9875\u9762\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u4f1a\u6267\u884c\uff0c\u9700\u8981\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"typeof window !== 'undefined'")," \u533a\u5206\u73af\u5883\uff0c\u5e76\u66b4\u9732 ",(0,p.kt)("inlineCode",{parentName:"p"},"serverRender")," \u4f9b\u670d\u52a1\u7aef\u6e32\u67d3\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp, bootstrap } from '@modern-js/runtime';\nimport { router, state } from '@modern-js/runtime/plugins';\nimport { effects, autoActions } from '@modern-js/runtime/model';\n\nfunction App() {\n  return <div>Hello Modern.js</div>\n}\n\nconst WrappedApp = createApp({\n  // \u4f20\u5165\u81ea\u5b9a\u4e49\u63d2\u4ef6\n  plugins: [\n    router({}),\n    state({\n      plugins: [autoActions(), effects()]\n    })\n  ]\n})(App);\n\nif (typeof window !== 'undefined') {\n  bootstrap(WrappedApp, 'root');\n}\n\nexport function serverRender(context: any) {\n  return bootstrap(WrappedApp, context)\n}\n")))}u.isMDXComponent=!0}}]);