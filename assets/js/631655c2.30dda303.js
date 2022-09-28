"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[462,6178],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(29901);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(18249),i=(n(29901),n(57522)),o=n(27989);const r={sidebar_position:6,title:"Auto actions"},l=void 0,p={unversionedId:"apis/app/runtime/model/auto-actions",id:"apis/app/runtime/model/auto-actions",title:"Auto actions",description:"Reduck \u53ef\u4ee5\u6839\u636e State \u7684\u7c7b\u578b\uff0c\u81ea\u52a8\u751f\u6210\u76f8\u5e94\u7684 Actions\uff0c\u4e3a\u4fee\u6539 State \u63d0\u4f9b\u4fbf\u5229\u3002",source:"@site/docs/apis/app/runtime/model/auto-actions.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/auto-actions",permalink:"/docs/apis/app/runtime/model/auto-actions",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Auto actions"},sidebar:"apisAppSidebar",previous:{title:"connect",permalink:"/docs/apis/app/runtime/model/connect"},next:{title:"handleEffect",permalink:"/docs/apis/app/runtime/model/handle-effect"}},s={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",id:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",level:3},{value:"\u6570\u7ec4 Array",id:"\u6570\u7ec4-array",level:3},{value:"\u7b80\u5355\u5bf9\u8c61 PlainObject",id:"\u7b80\u5355\u5bf9\u8c61-plainobject",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"ReduckTip"}),(0,i.kt)("p",null,"Reduck \u53ef\u4ee5\u6839\u636e State \u7684\u7c7b\u578b\uff0c\u81ea\u52a8\u751f\u6210\u76f8\u5e94\u7684 Actions\uff0c\u4e3a\u4fee\u6539 State \u63d0\u4f9b\u4fbf\u5229\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/state#autoactions"},(0,i.kt)("inlineCode",{parentName:"a"},"runtime.state.autoActions"))," \u5173\u95ed auto actions \u529f\u80fd\u3002"))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("h3",{id:"\u57fa\u7840\u6570\u636e\u7c7b\u578b"},"\u57fa\u7840\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,"State \u7c7b\u578b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u65f6\uff0c\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," Action\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define({\n  state: 1,\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n      <button\n        type=\"button\"\n        onClick={() => {\n          // \u8c03\u7528\u81ea\u52a8\u751f\u6210\u7684 setState Action\n          actions.setState(state + 1);\n        }}\n      >\n        add\n      </button>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"\u6570\u7ec4-array"},"\u6570\u7ec4 Array"),(0,i.kt)("p",null,"State \u7c7b\u578b\u4e3a Array \u65f6\uff0c\u751f\u6210\u4e0b\u5217 Actions\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\uff1a\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u672b\u5c3e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pop"),"\uff1a\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shift"),"\uff1a\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unshift"),"\uff1a\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5f00\u5934\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"arr.unshift(element1, ..., elementN)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elementN"),"\uff1a\u8981\u6dfb\u52a0\u5230\u6570\u7ec4\u5f00\u5934\u7684\u5143\u7d20\u6216\u591a\u4e2a\u5143\u7d20\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),"\uff1a\u8fc7\u6ee4\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concat"),"\uff1a\u62fc\u63a5\u6570\u7ec4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"splice"),"\uff1a\u901a\u8fc7\u5220\u9664\u6216\u66ff\u6362\u73b0\u6709\u5143\u7d20\u6216\u8005\u539f\u5730\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4\uff0c\u5e76\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u4fee\u6539\u540e\u7684\u6570\u7ec4\uff08\u6ce8\u610f\u548c\u539f\u751f ",(0,i.kt)("inlineCode",{parentName:"li"},"splice")," \u8fd4\u56de\u503c\u4e0d\u540c\uff09\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"splice(start[, deleteCount[, item1[, item2[, ...]]]])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),"\uff1a\u6307\u5b9a\u4fee\u6539\u7684\u5f00\u59cb\u4f4d\u7f6e\uff08\u4ece0\u8ba1\u6570\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deleteCount"),"\uff1a\u53ef\u9009\uff0c\u6574\u6570\uff0c\u8868\u793a\u8981\u79fb\u9664\u7684\u6570\u7ec4\u5143\u7d20\u7684\u4e2a\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item, item2, ..."),"\uff1a\u53ef\u9009\uff0c\u8981\u6dfb\u52a0\u8fdb\u6570\u7ec4\u7684\u5143\u7d20\uff0c\u4ece start \u4f4d\u7f6e\u5f00\u59cb\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"li"},"splice")," \u5c06\u53ea\u5220\u9664\u6570\u7ec4\u5143\u7d20\u3002")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define({\n  state: [1, 2, 3],\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.push(4);\n    actions.pop();\n    actions.shift(0);\n    actions.unshift();\n    actions.filter(val => val <= 2);\n    actions.splice(0, 1, 1, 2);\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"\u7b80\u5355\u5bf9\u8c61-plainobject"},"\u7b80\u5355\u5bf9\u8c61 PlainObject"),(0,i.kt)("p",null,"State \u7c7b\u578b\u4e3a PlainObject \u65f6\uff0c\u6839\u636e State \u5305\u542b\u7684\u5c5e\u6027\u540d\uff0c\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"set${key}"),"\uff08\u5c0f\u9a7c\u5cf0\u547d\u540d\uff09Actions\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define({\n  state: {\n    a: 1,\n    b: { value: 1 },\n    c: 'c',\n  },\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB({ value: 2 });\n    actions.setC('d');\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0},27989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(18249),i=(n(29901),n(57522));const o={},r=void 0,l={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/docs/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/docs/components/reduck-tip",tags:[],version:"current",frontMatter:{}},p={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002"))))}d.isMDXComponent=!0}}]);