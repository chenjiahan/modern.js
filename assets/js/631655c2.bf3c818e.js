"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[40462],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(86215),i=(n(49231),n(54852));const r={sidebar_position:5},o="auto-actions",l={unversionedId:"apis/app/runtime/model/auto-actions",id:"apis/app/runtime/model/auto-actions",title:"auto-actions",description:"\u7528\u4e8e\u81ea\u52a8\u751f\u6210 action\u3002",source:"@site/docs/apis/app/runtime/model/auto-actions.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/auto-actions",permalink:"/docs/apis/app/runtime/model/auto-actions",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisAppSidebar",previous:{title:"effects",permalink:"/docs/apis/app/runtime/model/effects"},next:{title:"createApp",permalink:"/docs/apis/app/runtime/model/create-app"}},p={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",id:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",level:3},{value:"\u6570\u7ec4 Array",id:"\u6570\u7ec4-array",level:3},{value:"\u5bf9\u8c61 Record&lt;string, any&gt;",id:"\u5bf9\u8c61-recordstring-any",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auto-actions"},"auto-actions"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u81ea\u52a8\u751f\u6210 ",(0,i.kt)("strong",{parentName:"p"},"action"),"\u3002"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@modern-js-reduck/plugin-auto-action")," \u5185\u7f6e\u4e8e Modern.js\uff0c\u9ed8\u8ba4\u5f00\u542f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("strong",{parentName:"a"},"modern.config.js"))," \u5173\u95ed\u63d2\u4ef6\u3002")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/plugin-auto-action")," \u662f Modern.js \u7684\u72b6\u6001\u7ba1\u7406\u63d2\u4ef6\uff0c\u5b83\u53ef\u4ee5\u6839\u636e ",(0,i.kt)("strong",{parentName:"p"},"state")," \u7684\u7c7b\u578b\uff0c\u81ea\u52a8\u751f\u6210\u76f8\u5e94\u7684 ",(0,i.kt)("strong",{parentName:"p"},"actions"),"\uff0c\u4e3a\u4fee\u6539 ",(0,i.kt)("strong",{parentName:"p"},"state")," \u63d0\u4f9b\u4fbf\u5229\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("h3",{id:"\u57fa\u7840\u6570\u636e\u7c7b\u578b"},"\u57fa\u7840\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"state")," \u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u65f6\uff0c\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," ",(0,i.kt)("strong",{parentName:"p"},"action"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: 1\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  return <div>\n    <div>State: {state}</div>\n    <button type=\"button\" onClick={() => {\n      actions.setState(state + 1);\n    }}>add</button>\n  </div>\n}\n")),(0,i.kt)("h3",{id:"\u6570\u7ec4-array"},"\u6570\u7ec4 Array"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"state")," \u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," \u65f6\uff0c\u751f\u6210\u4e0b\u5217 ",(0,i.kt)("strong",{parentName:"p"},"actions"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\uff1a\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u672b\u5c3e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pop"),"\uff1a\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shift"),"\uff1a\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unshift"),"\uff1a\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5f00\u5934\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"arr.unshift(element1, ..., elementN)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elementN"),"\uff1a\u8981\u6dfb\u52a0\u5230\u6570\u7ec4\u5f00\u5934\u7684\u5143\u7d20\u6216\u591a\u4e2a\u5143\u7d20\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),"\uff1a\u8fc7\u6ee4\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concat"),"\uff1a\u62fc\u63a5\u6570\u7ec4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"splice"),"\uff1a\u901a\u8fc7\u5220\u9664\u6216\u66ff\u6362\u73b0\u6709\u5143\u7d20\u6216\u8005\u539f\u5730\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4,\u5e76\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u88ab\u4fee\u6539\u7684\u5185\u5bb9\u3002\u6b64\u65b9\u6cd5\u4f1a\u6539\u53d8\u539f\u6570\u7ec4\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"splice(start[, deleteCount[, item1[, item2[, ...]]]])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),"\uff1a\u6307\u5b9a\u4fee\u6539\u7684\u5f00\u59cb\u4f4d\u7f6e\uff08\u4ece0\u8ba1\u6570\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deleteCount"),"\uff1a\u53ef\u9009\uff0c\u6574\u6570\uff0c\u8868\u793a\u8981\u79fb\u9664\u7684\u6570\u7ec4\u5143\u7d20\u7684\u4e2a\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item, item2, ..."),"\uff1a\u53ef\u9009\uff0c\u8981\u6dfb\u52a0\u8fdb\u6570\u7ec4\u7684\u5143\u7d20,\u4ecestart \u4f4d\u7f6e\u5f00\u59cb\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219 splice() \u5c06\u53ea\u5220\u9664\u6570\u7ec4\u5143\u7d20\u3002")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: [1, 2, 3]\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.push(4);\n    actions.pop();\n    actions.shift(0);\n    actions.unshift();\n    actions.filter(val => val <= 2);\n    actions.splice(0, 1, 1, 2);\n  }, []);\n\n  return <div>\n    <div>State: {state}</div>\n  </div>\n}\n")),(0,i.kt)("h3",{id:"\u5bf9\u8c61-recordstring-any"},"\u5bf9\u8c61 Record<string, any>"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"state")," \u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Record<string, any>")," \u65f6\uff0c\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"set${key}"),"\uff08\u5c0f\u9a7c\u5cf0\u547d\u540d\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: {\n    a: 1,\n    b: { value: 1 },\n    c: 'c'\n  }\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB({ value: 2 });\n    actions.setC('d');\n  }, []);\n\n  return <div>\n    <div>State: {state}</div>\n  </div>\n}\n")))}d.isMDXComponent=!0}}]);