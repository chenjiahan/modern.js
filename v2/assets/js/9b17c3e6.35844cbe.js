"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6866],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70314:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(52983),a=n(14517);const o="tabItem_cygK";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},38005:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(18249),a=n(52983),o=n(14517),s=n(27250),l=n(62209),i=n(61748),c=n(34333);const p="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:f,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,l.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,i.U)(),[x,N]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=f){const e=g[f];null!=e&&e!==x&&k.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=w.indexOf(t),r=k[n].value;r!==x&&(O(t),N(r),null!=f&&T(f,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},k.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:j,onClick:I},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},10860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(18249),a=(n(52983),n(44993)),o=n(38005),s=n(70314);const l={title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"},i=void 0,c={unversionedId:"tutorials/first-app/c06-css-and-component/6.6-testing",id:"tutorials/first-app/c06-css-and-component/6.6-testing",title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b",description:"Modern.js \u96c6\u6210\u4e86 Jest\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7ec4\u4ef6\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c06-css-and-component/6.6-testing.md",sourceDirName:"tutorials/first-app/c06-css-and-component",slug:"/tutorials/first-app/c06-css-and-component/6.6-testing",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.6-testing",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.5-storybook"},next:{title:"\u5165\u53e3\u7684\u7528\u9014\u200b\u200b\u200b",permalink:"/v2/docs/tutorials/first-app/c07-app-entry/7.1-intro"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u96c6\u6210\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7ec4\u4ef6\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u5f00\u542f\u6d4b\u8bd5\u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n\u276f \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7ed9 Item \u7ec4\u4ef6\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/routes/components/Item/index.test.tsx\n"))),(0,a.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/routes/components/Item/index.test.tsx\n")))),(0,a.kt)("p",null,"\u6216"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/routes/components/Item/__tests__/\ntouch src/routes/components/Item/__tests__/index.tsx\n"))),(0,a.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/routes/components/Item/__tests__/\nni src/routes/components/Item/__tests__/index.tsx\n")))),(0,a.kt)("p",null,"\u4ee5\u524d\u8005\u4e3a\u4f8b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Item/index.test.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { render } from '@modern-js/runtime/testing';\nimport Item from '.';\n\nconst defaultProps = {\n  info: {\n    avatar: 'https://via.placeholder.com/350x350',\n    name: 'foo',\n    email: 'foo.bar@bytedance.com',\n    archived: false,\n  },\n};\n\ndescribe('Item', () => {\n  it('should have contents', () => {\n    const {\n      info: { name },\n    } = defaultProps;\n    const { getByText } = render(<Item {...defaultProps} />);\n    expect(getByText(name)).toBeInTheDocument();\n  });\n});\n")),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/testing/render"},"Test API"),"\u3002")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> modern test\n\n PASS  src/routes/components/Item/index.test.tsx\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.708 s\n")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-6"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);