"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1422],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82197:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(52983),r=n(14517);const s="tabItem_cygK";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},62501:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),s=n(14517),l=n(72070),o=n(99119),i=n(34909),c=n(6806);const p="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:y,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(t=null!=d?d:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:C}=(0,i.U)(),[w,O]=(0,r.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=y){const e=N[y];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==w&&(x(t),O(a),null!=y&&C(y,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:T,onClick:j},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},38676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),s=n(62501),l=n(82197);const o={title:"\u200b\u200b\u6dfb\u52a0\u65b0\u7684 Utility Class"},i=void 0,c={unversionedId:"tutorials/first-app/c06-css-and-component/6.3-postcss",id:"tutorials/first-app/c06-css-and-component/6.3-postcss",title:"\u200b\u200b\u6dfb\u52a0\u65b0\u7684 Utility Class",description:"\u4e0a\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u901a\u7528\u7684 Utility Class \u5de5\u5177\u5e93.",source:"@site/docs/tutorials/first-app/c06-css-and-component/6.3-postcss.md",sourceDirName:"tutorials/first-app/c06-css-and-component",slug:"/tutorials/first-app/c06-css-and-component/6.3-postcss",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.3-postcss",draft:!1,tags:[],version:"current",frontMatter:{title:"\u200b\u200b\u6dfb\u52a0\u65b0\u7684 Utility Class"},sidebar:"tutorialsSidebar",previous:{title:"\u200b\u200b\u7528 Utility Class \u5199\u7ec4\u4ef6",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.2-utility-class"},next:{title:"\u200b\u7ba1\u7406 Design System",permalink:"/v2/docs/tutorials/first-app/c06-css-and-component/6.4-design-system"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u901a\u7528\u7684 Utility Class \u5de5\u5177\u5e93."),(0,r.kt)("p",null,"\u6211\u4eec\u4e0d\u4f46\u53ef\u4ee5\u81ea\u5df1\u5199\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u65b0\u7684 Utility Class\uff0c\u65b9\u4fbf\u5728\u4ee3\u7801\u95f4\u590d\u7528\u3002"),(0,r.kt)("p",null,"Utility Class \u672c\u8eab\u4e5f\u662f\u4e00\u79cd",(0,r.kt)("strong",{parentName:"p"},"\u9762\u5411\u7ec4\u4ef6"),"\u7684\u6280\u672f\uff08\u5c06\u4e0d\u540c class \u7528\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\uff0c\u7b49\u4ef7\u4e8e\u7ed9\u8fd9\u4e2a\u7ec4\u4ef6\u8bbe\u7f6e\u4e86\u4e00\u4e9b\u6765\u81ea\u57fa\u7c7b\u7684\u5c5e\u6027\uff09\uff0c\u4f46 Utility Class \u7684 classname \u662f\u5168\u5c40\u7684\uff08\u56e0\u4e3a\u8981\u7528\u5728\u4efb\u610f\u7ec4\u4ef6/\u5143\u7d20\u4e0a\uff09\uff0c\u5f88\u9002\u5408\u7528\u72ec\u7acb CSS \u6587\u4ef6\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 CSS \u6587\u4ef6\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/styles\ntouch src/styles/utils.css\n"))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/styles\nni src/styles/utils.css\n")))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.css"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import './styles/utils.css';\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/styles/utils.css")," \u91cc\u5b9e\u73b0\u4e00\u4e2a\u53eb\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-text-gray")," \u7684 Utility Class\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --custom-text-color:rgb(113, 128, 150);\n}\n\n.custom-text-gray {\n  color: var(--custom-text-color);\n}\n")),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Modern.js \u96c6\u6210\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/css/postcss"},"PostCSS"),"\uff0c\u652f\u6301\u73b0\u4ee3 CSS \u8bed\u6cd5\u7279\u6027\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"custom properties"),"\u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Item/index.tsx")," \u91cc\u4f7f\u7528\uff0c\u628a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<div className="ml-4 flex-1 flex justify-between">\n')),(0,r.kt)("p",null,"\u6539\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<div className="ml-4 custom-text-gray flex-1 flex justify-between">\n')),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5b57\u4f53\u989c\u8272\u6539\u53d8\u4e86\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result3.png",alt:"design2"})),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u53ea\u662f\u4e3a\u4e86\u6f14\u793a Utility Class \u7528\u6cd5\u3002\u771f\u5b9e\u9879\u76ee\u4e2d\uff0c\u5728\u6709 Tailwind CSS \u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd Utility Class \u6ca1\u4ec0\u4e48\u4ef7\u503c\uff0c\u5e94\u8be5\u901a\u8fc7\u914d\u7f6e Design System \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/customizing-colors"},(0,r.kt)("strong",{parentName:"a"},"theme"))," \u6765\u589e\u52a0\u5b57\u4f53\u989c\u8272\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"utils.css")," \u4e5f\u53ef\u4ee5\u5199\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.scss")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.less"),"\uff0cModern.js \u5bf9 SCSS \u548c Less \u540c\u6837\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u8fc7\u5728 PostCSS \u7684\u652f\u6301\u4e0b\uff0c\u73b0\u4ee3 CSS \u5e94\u8be5\u8db3\u4ee5\u6ee1\u8db3\u8fd9\u4e9b\u5f00\u53d1\u9700\u6c42\uff0c\u6027\u80fd\u76f8\u8f83\u4e8e\u9884\u5904\u7406\u5668\u4e5f\u66f4\u597d\uff0c\u5efa\u8bae\u4f18\u5148\u7528 .css \u6587\u4ef6\u3002")),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);