"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3133],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=p,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(18249),p=(n(52983),n(44993));const o={title:"renderApp"},a=void 0,i={unversionedId:"apis/app/runtime/testing/renderApp",id:"apis/app/runtime/testing/renderApp",title:"renderApp",description:"The render function is used to test normal components, and the renderApp function is used to test App components.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/testing/renderApp.md",sourceDirName:"apis/app/runtime/testing",slug:"/apis/app/runtime/testing/renderApp",permalink:"/v2/en/docs/apis/app/runtime/testing/renderApp",draft:!1,tags:[],version:"current",frontMatter:{title:"renderApp"},sidebar:"apisAppSidebar",previous:{title:"render",permalink:"/v2/en/docs/apis/app/runtime/testing/render"},next:{title:"\u6982\u89c8",permalink:"/v2/en/docs/apis/app/runtime/plugin/abstract"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"render")," function is used to test normal components, and the ",(0,p.kt)("inlineCode",{parentName:"p"},"renderApp")," function is used to test App components."),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp } from '@modern-js/runtime/testing';\n")),(0,p.kt)("p",null,"App components refer to components that contain some Modern.js contexts, such as App root components, Containers using Models, etc."),(0,p.kt)("p",null,"For the testing of such components, you can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"renderApp")," function, which will automatically wrap the context information according to the current ",(0,p.kt)("inlineCode",{parentName:"p"},"modern.config.js"),"."),(0,p.kt)("h2",{id:"function-signature"},"Function Signature"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"renderApp")," is the same as ",(0,p.kt)("a",{parentName:"p",href:"/v2/en/docs/apis/app/runtime/testing/render"},"render"),"."),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp } from '@modern-js/runtime/testing';\nimport App from './App';\n\ndescribe('test', () => {\n  it('test App', () => {\n    const { getByText } = renderApp(<App />);\n    expect(getByText('Hello Modern!')).toBeInTheDocument();\n  });\n});\n")))}l.isMDXComponent=!0}}]);