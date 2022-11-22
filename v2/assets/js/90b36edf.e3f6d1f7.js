"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9781],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return t?o.createElement(b,r(r({ref:n},c),{},{components:t})):o.createElement(b,r({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var o=t(18249),a=(t(52983),t(44993));const l={title:"loadable"},r=void 0,p={unversionedId:"apis/app/runtime/utility/loadable",id:"apis/app/runtime/utility/loadable",title:"loadable",description:"\u7528\u4e8e\u521b\u5efa Loadable \u7684\u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/utility/loadable.md",sourceDirName:"apis/app/runtime/utility",slug:"/apis/app/runtime/utility/loadable",permalink:"/v2/docs/apis/app/runtime/utility/loadable",draft:!1,tags:[],version:"current",frontMatter:{title:"loadable"},sidebar:"apisAppSidebar",previous:{title:"Head",permalink:"/v2/docs/apis/app/runtime/utility/head"},next:{title:"cleanup",permalink:"/v2/docs/apis/app/runtime/testing/cleanup"}},i={},s=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"loadFn",id:"loadfn",level:4},{value:"options.resolveComponent",id:"optionsresolvecomponent",level:4},{value:"options.fallback",id:"optionsfallback",level:4},{value:"options.ssr",id:"optionsssr",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"LoadableComponent",id:"loadablecomponent",level:4}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u4e8e\u521b\u5efa Loadable \u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable';\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  resolveComponent?: (\n    module: Module,\n    props: Props,\n  ) => React.ComponentType<Props>,\n  fallback?: JSX.Element;\n  ssr?: boolean;\n}\n\nfunction loadable(loadFn: Function, options?: Options) => LoadableComponent\n")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h4",{id:"loadfn"},"loadFn"),(0,a.kt)("p",null,"\u7528\u4e8e\u52a0\u8f7d\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'))\n")),(0,a.kt)("h4",{id:"optionsresolvecomponent"},"options.resolveComponent"),(0,a.kt)("p",null,"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"(module: Module, props: Props) => React.ComponentType<Props>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"module")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"loadFn")," \u8fd4\u56de\u7684\u7ec4\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u662f loadable \u8fd4\u56de\u7684\u7ec4\u4ef6\u63a5\u53d7\u7684 props \u53c2\u6570\u3002\u9ed8\u8ba4\u7684\u8bdd\uff0c\u6211\u4eec\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," \u7684\u6587\u4ef6\u90fd\u662f\u9ed8\u8ba4\u5bfc\u51fa react \u7ec4\u4ef6\uff0c\u8fd9\u65f6\u5019\u76f4\u63a5\u6e32\u67d3\u8be5\u7ec4\u4ef6\u5373\u53ef\u3002\u4f46\u5f53\u7ec4\u4ef6\u662f\u5177\u540d\u5bfc\u51fa\u7684\uff0c\u6216\u8005\u6211\u4eec\u9700\u8981\u6839\u636e\u5177\u4f53\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u52a8\u6001\u5224\u65ad\u9700\u8981\u6e32\u67d3\u54ea\u4e2a\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"resolveComponent")," \u6765\u5b9e\u73b0\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='component.js'",title:"'component.js'"},"export const Apple = () => 'Apple!'\nexport const Orange = () => 'Orange!'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='loadable.js'",title:"'loadable.js'"},"const LoadableApple = loadable(() => import('./components'), {\n  resolveComponent: (components) => components.Apple,\n})\nconst LoadableOrange = loadable(() => import('./components'), {\n  resolveComponent: (components) => components.Orange,\n})\nconst LoadableFruit = loadable(() => import('./components'), {\n  resolveComponent: (components, props) => components[props.fruit],\n})\n")),(0,a.kt)("h4",{id:"optionsfallback"},"options.fallback"),(0,a.kt)("p",null,"\u5728 loading \u9636\u6bb5\u663e\u793a fallback \u5185\u5bb9\u3002"),(0,a.kt)("h4",{id:"optionsssr"},"options.ssr"),(0,a.kt)("p",null,"\u662f\u5426\u652f\u6301 SSR\uff0c\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("h4",{id:"loadablecomponent"},"LoadableComponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type LoadableComponent<Props> =\n  React.ComponentType<\n    Props & { fallback?: JSX.Element; }>\n  & {\n    preload(props?: Props): void;\n    load(props?: Props): Promise<React.ComponentType<Props>>;\n  }\n")))}m.isMDXComponent=!0}}]);