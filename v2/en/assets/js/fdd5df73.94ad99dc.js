"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1116],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99936:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(52983),r=n(14517);const l="tabItem_cygK";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},91657:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),l=n(14517),o=n(2137),s=n(91740),p=n(59040),i=n(747);const c="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:f,groupId:k,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:j}=(0,p.U)(),[x,w]=(0,r.useState)(g),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=k){const e=N[k];null!=e&&e!==x&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),a=h[n].value;a!==x&&(O(t),w(a),null!=k&&j(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>S.push(e),onKeyDown:E,onClick:C},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},86749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),l=n(91657),o=n(99936);const s={title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6"},p=void 0,i={unversionedId:"tutorials/first-app/c06-css-and-component/6.1-css-in-js",id:"tutorials/first-app/c06-css-and-component/6.1-css-in-js",title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 UI \u7ec4\u4ef6\u5e93\u3001\u6807\u51c6\u4e09\u65b9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c06-css-and-component/6.1-css-in-js.md",sourceDirName:"tutorials/first-app/c06-css-and-component",slug:"/tutorials/first-app/c06-css-and-component/6.1-css-in-js",permalink:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.1-css-in-js",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6"},sidebar:"tutorialsSidebar",previous:{title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6",permalink:"/v2/en/docs/tutorials/first-app/c05-component/5.2-use-standalone-component"},next:{title:"\u200b\u200b\u7528 Utility Class \u5199\u7ec4\u4ef6",permalink:"/v2/en/docs/tutorials/first-app/c06-css-and-component/6.2-utility-class"}},c={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 UI \u7ec4\u4ef6\u5e93\u3001\u6807\u51c6\u4e09\u65b9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5b9e\u73b0 UI \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5e0c\u671b\u81ea\u5df1\u63a7\u5236\u8054\u7cfb\u4eba\u5934\u50cf\u7684\u5c55\u793a\uff0c\u5b9e\u73b0\u8fd9\u79cd\u8bbe\u8ba1\u7a3f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design1.png",alt:"design"})),(0,r.kt)("p",null,"\u5047\u8bbe\u6ca1\u6709\u73b0\u6210\u7684\u7ec4\u4ef6\u53ef\u4ee5\u5b9e\u73b0\uff0c\u90a3\u5c31\u9700\u8981\u81ea\u5df1\u5199\u4e9b CSS \u4e86\uff0c\u4f20\u7edf\u4e0a\uff0c\u6211\u4eec\u6709\u5982\u4e0b\u9009\u62e9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5728\u5143\u7d20\u7684 style \u5c5e\u6027\u4e0a\u5199\u6837\u5f0f\uff0c\u7f3a\u70b9\u662f\uff1a\u4e0d\u65b9\u4fbf\u7ef4\u62a4\uff0cUI \u89c6\u89c9\u4e0a\u7684\u7ec6\u8282\u4e5f\u4f1a\u8ddf UI \u7ed3\u6784\u4e0a\u7684\u7ec6\u8282\u548c\u4e1a\u52a1\u903b\u8f91\u6df7\u5728\u4e00\u8d77\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 CSS \u4ee3\u7801\u91cc\u7528\u9009\u62e9\u5668\u627e\u5230\u8fd9\u4e2a\u5934\u50cf\u5143\u7d20\uff0c\u5199\u6837\u5f0f\uff0c\u907f\u514d\u4e86 1 \u7684\u7f3a\u70b9\uff0c\u4f46\u65b0\u7684\u7f3a\u70b9\u662f\uff1a\u4e0d\u65b9\u4fbf\u5728\u5176\u4ed6\u6709\u5934\u50cf\u51fa\u73b0\u7684\u5730\u65b9\u590d\u7528\uff0c\u96c6\u4e2d\u7ef4\u62a4\uff0c\u505a\u5230 ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Don't_repeat_yourself"},"DRY"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 CSS \u4ee3\u7801\u91cc\u5199\u4e00\u4e2a classname\uff0c\u5c01\u88c5\u8fd9\u4e2a\u6837\u5f0f\uff0c\u907f\u514d\u4e86 2 \u7684\u7f3a\u70b9\uff0c\u4f46\u65b0\u7684\u7f3a\u70b9\u662f\uff1a\u9700\u8981\u8003\u8651\u547d\u540d\u95ee\u9898\uff0c\u907f\u514d\u5728\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u4e0b\u91cd\u540d\uff0c\u53ef\u80fd\u8981\u7528\u5230 ",(0,r.kt)("a",{parentName:"li",href:"http://getbem.com/"},"BEM")," \u4e4b\u7c7b\u7684\u89c4\u8303\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7528 CSS Modules \u6280\u672f\uff0c\u8ba9 CSS \u6587\u4ef6\u548c\u5176\u4e2d\u7684 classname \u53d8\u5f97\u3010 \u6a21\u5757\u5316 \u3011\uff0c\u907f\u514d\u4e86 3 \u7684\u7f3a\u70b9\u3002")),(0,r.kt)("p",null,"Modern.js \u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 CSS Modules\uff0c\u4f46\u6211\u4eec\u66f4\u63a8\u8350\u4f18\u5148\u91c7\u7528 CSS Modules \u7684\u7ee7\u627f\u8005\u3001\u5728\u3010 \u6a21\u5757\u5316 \u3011\u4e0a\u66f4\u8fdb\u4e00\u6b65\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),"\uff0c\u6765\u5b9e\u73b0\u7c7b\u4f3c\u7684\u9700\u6c42\u3002"),(0,r.kt)("p",null,"Modern.js \u540c\u6837\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 styled-components\uff0c\u65e2\u4e0d\u9700\u8981\u5b89\u88c5\u4f9d\u8d56\uff0c\u4e5f\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u4fee\u6539\u9876\u90e8\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import styled from '@modern-js/runtime/styled';\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"List.Item.Meta")," \u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<List.Item.Meta\n  avatar={<Avatar src={avatar} />}\n  title={name}\n  description={email}\n/>\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9884\u671f\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result1.png",alt:"result"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u505a\u4e00\u70b9\u91cd\u6784\uff0c\u4e3a\u4e86\u589e\u5f3a\u53ef\u8bfb\u6027\uff0c\u8ba9\u4ee3\u7801\u66f4\u5bb9\u6613\u7ef4\u62a4\uff0c\u53ef\u4ee5\u628a Avatar \u7ec4\u4ef6\u62c6\u5206\u51fa\u53bb"),(0,r.kt)("p",null,"\u5728\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Avatar\ntouch src/components/Avatar/index.tsx\n"))),(0,r.kt)(o.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Avatar\nni src/components/Avatar/index.tsx\n")))),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u7684 Avatar \u5b9e\u73b0\u5220\u6389\uff0c\u6539\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Avatar from './components/Avatar';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Avatar/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import styled from '@modern-js/runtime/styled';\n\nconst Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n\nexport default Avatar;\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8fd0\u884c\u7ed3\u679c\u5e94\u8be5\u662f\u4e00\u6837\u7684\u3002"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u91c7\u7528\u76ee\u5f55\u5f62\u5f0f\uff08Avatar/index.tsx\uff09\u800c\u4e0d\u662f\u5355\u6587\u4ef6\u5f62\u5f0f\uff08Avatar.tsx\uff09\u7684\u539f\u56e0\u662f\uff0c\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5728\u76ee\u5f55\u5185\u90e8\u589e\u52a0\u5b50\u6587\u4ef6\uff0c\u5305\u62ec\u4e13\u7528\u7684\u8d44\u6e90\uff08\u56fe\u7247\u7b49\uff09\u3001\u4e13\u7528\u5b50\u7ec4\u4ef6\u3001CSS \u6587\u4ef6\u7b49\uff0c\u5728\u8fd9\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u9ed1\u76d2"),"\u5185\u90e8\u53ef\u4ee5\u968f\u610f\u91cd\u6784\uff0c\u53ea\u8003\u8651",(0,r.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u5c40\u90e8"),"\u3002")),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);