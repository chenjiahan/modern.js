"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5254],{57522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52880:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(29901);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},77123:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(18249),a=n(29901),o=n(1834),s=n(52400),l=n(25789);const c="tabItem_YENo";function i(e){var t,n,o;const{lazy:i,block:u,defaultValue:p,values:d,groupId:m,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,s.lx)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.UB)(),[x,C]=(0,a.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=m){const e=y[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==x&&(w(t),C(r),null!=m&&h(m,r))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,o.Z)();return a.createElement(i,(0,r.Z)({key:String(t)},e))}},93636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(18249),a=(n(29901),n(57522)),o=n(77123),s=n(52880);const l={title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09"},c=void 0,i={unversionedId:"guides/tutorials/c11-container/11.2-add-container",id:"guides/tutorials/c11-container/11.2-add-container",title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09",description:"\u524d\u4e24\u4e2a\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u9879\u76ee\u4e2d\u7684\u4e1a\u52a1\u903b\u8f91\u62c6\u5206\u6210\u4e86\u4e24\u4e2a layer\uff0c\u4e00\u4e2a\u662f\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\uff0c\u53e6\u4e00\u4e2a\u662f \u3010 \u4e1a\u52a1\u6a21\u5757 \u3011\u3002",source:"@site/docs/guides/tutorials/c11-container/11.2-add-container.md",sourceDirName:"guides/tutorials/c11-container",slug:"/guides/tutorials/c11-container/11.2-add-container",permalink:"/docs/guides/tutorials/c11-container/11.2-add-container",tags:[],version:"current",frontMatter:{title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09"},sidebar:"guidesSidebar",previous:{title:"\u200b\u5b8c\u6574\u4f7f\u7528 Model",permalink:"/docs/guides/tutorials/c11-container/11.1-use-model-with-app-state"},next:{title:"\u200b\u4f7f\u7528 Loader",permalink:"/docs/guides/tutorials/c11-container/11.3-use-loader"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u524d\u4e24\u4e2a\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u628a\u9879\u76ee\u4e2d\u7684\u4e1a\u52a1\u903b\u8f91\u62c6\u5206\u6210\u4e86\u4e24\u4e2a layer\uff0c\u4e00\u4e2a\u662f\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\uff0c\u53e6\u4e00\u4e2a\u662f \u3010 \u4e1a\u52a1\u6a21\u5757 \u3011\u3002"),(0,a.kt)("p",null,"\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011 \u8d1f\u8d23 UI \u5c55\u793a\u3001\u4ea4\u4e92\u7b49\uff1b\u3010 \u4e1a\u52a1\u6a21\u5757 \u3011\u8d1f\u8d23\u5b9e\u73b0 UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u4e13\u95e8\u7ba1\u7406\u72b6\u6001\uff0c\u65e2\u53ef\u4ee5\u662f\u7ec4\u4ef6\u72b6\u6001\uff08\u5c40\u90e8\uff0c\u4e0d\u552f\u4e00\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f\u5e94\u7528\u72b6\u6001\uff08\u5168\u5c40\uff0c\u552f\u4e00\uff09\u3002"),(0,a.kt)("p",null,"\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"components/Contacts/index.tsx")," \u8fd9\u6837\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModel")," API \u7684\u7ec4\u4ef6\uff0c\u5176\u5b9e\u5df2\u7ecf\u5728",(0,a.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u5e94\u7528\u67b6\u6784"),"\u4e2d\u626e\u6f14\u4e00\u79cd\u65b0\u7684\u89d2\u8272\uff0c\u8d1f\u8d23\u628a View \u548c Model \u8fd9\u4e24\u4e2a layer \u8fde\u63a5\u8d77\u6765\uff0c\u7c7b\u4f3c\u4f20\u7edf MVC \u67b6\u6784\u4e2d Controller \u7684\u89d2\u8272\uff0c\u4e5f\u7c7b\u4f3c\u4e00\u79cd ViewController\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u8fd9\u79cd\u7ec4\u4ef6\u5c5e\u4e8e\u4e00\u79cd\u65b0\u7684\u529f\u80fd\u6a21\u5757\uff0c\u5728 Modern.js \u91cc\u6211\u4eec\u6cbf\u7528\u4e60\u60ef\uff0c\u628a\u5b83\u4eec\u79f0\u4f5c\u3010 \u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09\u3011\u3002"),(0,a.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u63a8\u8350\u653e\u5728\u4e13\u95e8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/")," \u76ee\u5f55\u91cc\uff0c\u6211\u4eec\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/contacts/containers/\nmv src/contacts/components/Contacts/index.tsx src/contacts/containers/Contacts.tsx\nrm -r src/contacts/components/Contacts/\n"))),(0,a.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/contacts/containers/\nmv src/contacts/components/Contacts/index.tsx src/contacts/containers/Contacts.tsx\nrm -r src/contacts/components/Contacts/\n")))),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/Contacts.tsx")," \u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Item from '../components/Item';\nimport contacts from '../models/contacts';\n")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Contacts from './containers/Contacts';\n")),(0,a.kt)("p",null,"\u91cd\u6784\u5b8c\u6210\uff0c\u73b0\u5728\u7684\u9879\u76ee\u7ed3\u6784\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u251c\u2500\u2500 api/\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2514\u2500\u2500 contacts.ts\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 contacts/\n\u2502   \u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Avatar/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.stories.tsx\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Item/\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 index.test.tsx\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u251c\u2500\u2500 containers/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Contacts.tsx\n\u2502   \u2502   \u251c\u2500\u2500 models/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 contacts.test.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 contacts.ts\n\u2502   \u2502   \u251c\u2500\u2500 styles/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils.css\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 landing-page/\n\u2502   \u2502   \u2514\u2500\u2500 pages/\n\u2502   \u2502       \u251c\u2500\u2500 comments/\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 [commentTitle]/\n\u2502   \u2502       \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502       \u251c\u2500\u2500 _app.tsx\n\u2502   \u2502       \u251c\u2500\u2500 docs.tsx\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"components/")," \u91cc\u7684\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\uff0c\u90fd\u662f\u76ee\u5f55\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Avatar/index.tsx"),"\u3002\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/")," \u91cc\u7684\u3010 \u5bb9\u5668\u7ec4\u4ef6 \u3011\uff0c\u90fd\u662f\u5355\u6587\u4ef6\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"contacts.tsx"),"\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u6211\u4eec\u63a8\u8350\u7684\u4e00\u79cd\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,a.kt)("p",null,"\u5728\u200b ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c06-css-and-component/6.1-css-in-js"},"\u6dfb\u52a0 UI \u7ec4\u4ef6\uff08Component\uff09")," \u7ae0\u8282\u63d0\u5230\u8fc7\uff0c\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u7528\u76ee\u5f55\u5f62\u5f0f\uff0c\u662f\u56e0\u4e3a\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u8d1f\u8d23\u5b9e\u73b0 UI \u5c55\u793a\u548c\u4ea4\u4e92\u7ec6\u8282\uff0c\u53ef\u4ee5\u6f14\u53d8\u7684\u590d\u6742\uff0c\u7528\u76ee\u5f55\u5f62\u5f0f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u589e\u52a0\u5b50\u6587\u4ef6\uff0c\u5305\u62ec\u4e13\u7528\u7684\u8d44\u6e90\uff08\u56fe\u7247\u7b49\uff09\u3001\u4e13\u7528\u5b50\u7ec4\u4ef6\u3001CSS \u6587\u4ef6\u7b49\uff0c\u5728\u8fd9\u4e2a\u76ee\u5f55\u5185\u90e8\u53ef\u4ee5\u968f\u610f\u91cd\u6784\uff0c\u53ea\u8003\u8651\u6700\u5c0f\u5c40\u90e8\u3002"),(0,a.kt)("p",null,"\u800c\u3010 \u5bb9\u5668\u7ec4\u4ef6 \u3011\u53ea\u8d1f\u8d23\u8fde\u63a5\uff0c\u662f\u4e00\u4e2a\u80f6\u6c34\u5c42\uff0c\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u548c\u5b9e\u73b0\u7ec6\u8282\u90fd\u4ea4\u7ed9 View \u5c42\u548c Model \u5c42\u53bb\u5b9e\u73b0\uff0c\u3010 \u5bb9\u5668\u7ec4\u4ef6 \u3011\u81ea\u5df1\u5e94\u8be5\u4fdd\u6301\u7b80\u5355\u6e05\u6670\uff0c\u4e0d\u5e94\u8be5\u5305\u542b\u590d\u6742\u5b9e\u73b0\u7ec6\u8282\uff0c\u6240\u4ee5\u4e0d\u5e94\u8be5\u6709\u5185\u90e8\u7ed3\u6784\uff0c\u91c7\u7528\u5355\u6587\u4ef6\u5f62\u5f0f\u4e0d\u4f46\u66f4\u7b80\u6d01\uff0c\u4e5f\u80fd\u8d77\u5230\u7ea6\u675f\u4f5c\u7528\uff0c\u63d0\u9192\u5f00\u53d1\u8005\u4e0d\u8981\u628a\u5bb9\u5668\u7ec4\u4ef6\u5199\u590d\u6742\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);