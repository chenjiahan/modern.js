"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[530],{57522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(18249),a=(n(29901),n(57522));const i={title:"act",sidebar_position:4},o=void 0,p={unversionedId:"apis/app/runtime/testing/act",id:"apis/app/runtime/testing/act",title:"act",description:"\u7528\u4e8e\u786e\u4fdd\u6e32\u67d3\u3001\u4e8b\u4ef6\u3001\u6570\u636e\u83b7\u53d6\u7b49\u884c\u4e3a\u5df2\u7ecf\u5e94\u7528\u5728 DOM \u4e0a\u3002",source:"@site/docs/apis/app/runtime/testing/act.md",sourceDirName:"apis/app/runtime/testing",slug:"/apis/app/runtime/testing/act",permalink:"/docs/apis/app/runtime/testing/act",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"act",sidebar_position:4},sidebar:"apisAppSidebar",previous:{title:"cleanup",permalink:"/docs/apis/app/runtime/testing/cleanup"},next:{title:"hook",permalink:"/docs/apis/app/runtime/web-server/hook"}},c={},s=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],l={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7528\u4e8e\u786e\u4fdd\u6e32\u67d3\u3001\u4e8b\u4ef6\u3001\u6570\u636e\u83b7\u53d6\u7b49\u884c\u4e3a\u5df2\u7ecf\u5e94\u7528\u5728 DOM \u4e0a\u3002"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { act } from '@modern-js/runtime/testing';\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"act")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/testing-recipes.html#act"},"react-dom/test-utils act \u51fd\u6570")," \u662f\u4e00\u81f4\u7684\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import ReactDOM from 'react-dom';\nimport { act } from '@modern-js/runtime/testing';\nimport { Foo } from '@/components/Foo';\n\ndescribe('test act', () => {\n  it('it should be foo', () => {\n    const el = document.createElement(\"div\");\n    act(() => {\n      ReactDOM.render(<Foo />, el);\n    })\n\n    expect(el.innerHTML).toBe('<div>Foo</div>');\n  })\n})\n")))}m.isMDXComponent=!0}}]);