"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8421],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99936:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(52983),a=n(14517);const o="tabItem_cygK";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},91657:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(18249),a=n(52983),o=n(14517),l=n(2137),s=n(91740),i=n(59040),c=n(747);const u="tabList_N6AO",p="tabItem_Wt3n";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:b,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,s.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[T,N]=(0,a.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=b){const e=w[b];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==T&&(x(t),N(r),null!=b&&O(b,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},27070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(18249),a=(n(52983),n(44993)),o=n(91657),l=n(99936);const s={title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6"},i=void 0,c={unversionedId:"tutorials/first-app/c11-container/11.4-testing",id:"tutorials/first-app/c11-container/11.4-testing",title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6",description:"\u8ddf\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c11-container/11.4-testing.md",sourceDirName:"tutorials/first-app/c11-container",slug:"/tutorials/first-app/c11-container/11.4-testing",permalink:"/v2/en/docs/tutorials/first-app/c11-container/11.4-testing",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u4f7f\u7528 Loader",permalink:"/v2/en/docs/tutorials/first-app/c11-container/11.3-use-loader"}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ddf",(0,a.kt)("a",{parentName:"p",href:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.6-testing"},"\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"),"\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,a.kt)("p",null,"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/Contacts.tsx")," \u4e3a\u4f8b\uff0c\u6211\u4eec\u521b\u5efa\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".test")," \u6587\u4ef6\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/contacts/containers/contacts.test.tsx\n"))),(0,a.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/contacts/containers/contacts.test.tsx\n")))),(0,a.kt)("p",null,"\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u53ef\u4ee5\u4f7f\u7528 Modern.js \u63d0\u4f9b\u7684 API \u8fdb\u884c\u6e32\u67d3\uff0c\u5e76\u901a\u8fc7 API \u8fd4\u56de\u7684\u5de5\u5177\u51fd\u6570\u8fdb\u884c\u65ad\u8a00\u3002"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u7528\u4f8b\u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp, waitFor } from '@modern-js/runtime/testing';\nimport ContactContainer from './Contacts';\n\ndescribe('test contracts model', () => {\n  it('actions works well', async () => {\n    const { getByText } = renderApp(<ContactContainer source=\"items\" />);\n\n    await waitFor(() => {\n      expect(getByText('Pending...')).toBeInTheDocument();\n    });\n  });\n});\n")),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/testing/renderApp"},"Test API"),"\u3002")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern-4"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);