"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3476],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(86215),o=(n(49231),n(54852));const l={sidebar_position:1},r="\u7f16\u8bd1\u6784\u5efa\u95ee\u9898",s={unversionedId:"guides/troubleshooting/compile",id:"guides/troubleshooting/compile",title:"\u7f16\u8bd1\u6784\u5efa\u95ee\u9898",description:"\u4e00. \u914d\u7f6e\u7c7b\u95ee\u9898",source:"@site/docs/guides/troubleshooting/compile.md",sourceDirName:"guides/troubleshooting",slug:"/guides/troubleshooting/compile",permalink:"/docs/guides/troubleshooting/compile",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6",permalink:"/docs/guides/usages/compile-speed"},next:{title:"\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898",permalink:"/docs/guides/troubleshooting/dependencies"}},p={},i=[{value:"\u4e00. \u914d\u7f6e\u7c7b\u95ee\u9898",id:"\u4e00-\u914d\u7f6e\u7c7b\u95ee\u9898",level:2},{value:"\u5982\u4f55\u914d\u7f6e Webpack/Babel/PostCSS \u7b49\u5de5\u5177\uff1f",id:"\u5982\u4f55\u914d\u7f6e-webpackbabelpostcss-\u7b49\u5de5\u5177",level:3},{value:"\u5982\u4f55\u63d0\u5347\u7f16\u8bd1\u6784\u5efa\u901f\u5ea6\uff1f",id:"\u5982\u4f55\u63d0\u5347\u7f16\u8bd1\u6784\u5efa\u901f\u5ea6",level:3},{value:"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684 webpack \u914d\u7f6e\uff1f",id:"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684-webpack-\u914d\u7f6e",level:3},{value:"\u5982\u4f55\u914d\u7f6e\u7ec4\u4ef6\u5e93\u6309\u9700\u5f15\u5165\uff1f",id:"\u5982\u4f55\u914d\u7f6e\u7ec4\u4ef6\u5e93\u6309\u9700\u5f15\u5165",level:3},{value:"\u5982\u4f55\u79fb\u9664\u4ee3\u7801\u4e2d\u7684 console\uff1f",id:"\u5982\u4f55\u79fb\u9664\u4ee3\u7801\u4e2d\u7684-console",level:3},{value:"\u4e8c. \u7f16\u8bd1\u5f02\u5e38\u7c7b\u95ee\u9898",id:"\u4e8c-\u7f16\u8bd1\u5f02\u5e38\u7c7b\u95ee\u9898",level:2},{value:"Less/Sass \u4ee3\u7801\u6ca1\u6709\u88ab\u6b63\u786e\u7f16\u8bd1\uff1f",id:"lesssass-\u4ee3\u7801\u6ca1\u6709\u88ab\u6b63\u786e\u7f16\u8bd1",level:3},{value:"\u6253\u5305\u65f6\u51fa\u73b0 JavaScript heap out of memory?",id:"\u6253\u5305\u65f6\u51fa\u73b0-javascript-heap-out-of-memory",level:3},{value:"webpack \u7f16\u8bd1\u51fa\u73b0 &#39;compilation&#39; argument \u62a5\u9519",id:"webpack-\u7f16\u8bd1\u51fa\u73b0-compilation-argument-\u62a5\u9519",level:3},{value:"Less \u6587\u4ef6\u4e2d\u7684\u9664\u6cd5\u4e0d\u751f\u6548\uff1f",id:"less-\u6587\u4ef6\u4e2d\u7684\u9664\u6cd5\u4e0d\u751f\u6548",level:3},{value:"\u7f16\u8bd1\u4ea7\u7269\u4e2d\u5b58\u5728\u672a\u7f16\u8bd1\u7684 ES6+ \u4ee3\u7801\uff1f",id:"\u7f16\u8bd1\u4ea7\u7269\u4e2d\u5b58\u5728\u672a\u7f16\u8bd1\u7684-es6-\u4ee3\u7801",level:3},{value:"\u7f16\u8bd1\u65f6\u62a5\u9519 <code>You may need additional loader</code>\uff1f",id:"\u7f16\u8bd1\u65f6\u62a5\u9519-you-may-need-additional-loader",level:3},{value:"\u70ed\u66f4\u65b0\u540e React \u7ec4\u4ef6\u7684 state \u4e22\u5931\uff1f",id:"\u70ed\u66f4\u65b0\u540e-react-\u7ec4\u4ef6\u7684-state-\u4e22\u5931",level:3}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7f16\u8bd1\u6784\u5efa\u95ee\u9898"},"\u7f16\u8bd1\u6784\u5efa\u95ee\u9898"),(0,o.kt)("h2",{id:"\u4e00-\u914d\u7f6e\u7c7b\u95ee\u9898"},"\u4e00. \u914d\u7f6e\u7c7b\u95ee\u9898"),(0,o.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-webpackbabelpostcss-\u7b49\u5de5\u5177"},"\u5982\u4f55\u914d\u7f6e Webpack/Babel/PostCSS \u7b49\u5de5\u5177\uff1f"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/usages/low-level"},"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177"),"\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u63d0\u5347\u7f16\u8bd1\u6784\u5efa\u901f\u5ea6"},"\u5982\u4f55\u63d0\u5347\u7f16\u8bd1\u6784\u5efa\u901f\u5ea6\uff1f"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/usages/compile-speed"},"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6"),"\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684-webpack-\u914d\u7f6e"},"\u5982\u4f55\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684 webpack \u914d\u7f6e\uff1f"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/commands/mwa/inspect"},"modern inspect")," \u547d\u4ee4\u6765\u67e5\u770b\u6700\u7ec8\u751f\u6548\u7684 webpack \u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e\u7ec4\u4ef6\u5e93\u6309\u9700\u5f15\u5165"},"\u5982\u4f55\u914d\u7f6e\u7ec4\u4ef6\u5e93\u6309\u9700\u5f15\u5165\uff1f"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u5185\u7f6e\u4e86 antd \u7ec4\u4ef6\u5e93\u7684\u6309\u9700\u5f15\u5165\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u914d\u7f6e\u5176\u4ed6\u7ec4\u4ef6\u5e93\u7684\u6309\u9700\u5f15\u5165\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/babel"},"tools.babel")," \u914d\u7f6e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/umijs/babel-plugin-import"},"babel-plugin-import")," \u63d2\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { addPlugins }) => {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ]);\n    },\n  },\n});\n")),(0,o.kt)("h3",{id:"\u5982\u4f55\u79fb\u9664\u4ee3\u7801\u4e2d\u7684-console"},"\u5982\u4f55\u79fb\u9664\u4ee3\u7801\u4e2d\u7684 console\uff1f"),(0,o.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u6784\u5efa\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u79fb\u9664\u4ee3\u7801\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),"\uff0c\u4ece\u800c\u907f\u514d\u5f00\u53d1\u73af\u5883\u7684\u65e5\u5fd7\u88ab\u8f93\u51fa\u5230\u751f\u4ea7\u73af\u5883\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e Modern.js \u9ed8\u8ba4\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/terser/terser"},"terser")," \u8fdb\u884c\u4ee3\u7801\u538b\u7f29\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/terser"},"tools.terser")," \u914d\u7f6e\u9879\u6765\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    terser: opt => {\n      if (typeof opt.terserOptions?.compress === 'object') {\n        opt.terserOptions.compress.drop_console = true;\n      }\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u5e0c\u671b\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"console.warn"),"\uff0c\u4fdd\u7559 ",(0,o.kt)("inlineCode",{parentName:"p"},"console.error"),"\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    terser: opt => {\n      if (typeof opt.terserOptions?.compress === 'object') {\n        opt.terserOptions.compress.pure_funcs = ['console.log', 'console.warn'];\n      }\n    },\n  },\n});\n")),(0,o.kt)("h2",{id:"\u4e8c-\u7f16\u8bd1\u5f02\u5e38\u7c7b\u95ee\u9898"},"\u4e8c. \u7f16\u8bd1\u5f02\u5e38\u7c7b\u95ee\u9898"),(0,o.kt)("h3",{id:"lesssass-\u4ee3\u7801\u6ca1\u6709\u88ab\u6b63\u786e\u7f16\u8bd1"},"Less/Sass \u4ee3\u7801\u6ca1\u6709\u88ab\u6b63\u786e\u7f16\u8bd1\uff1f"),(0,o.kt)("p",null,"Modern.js \u901a\u8fc7\u63d2\u4ef6\u6765\u7f16\u8bd1 Less/Sass \u4ee3\u7801\uff0c\u8bf7\u786e\u8ba4\u4f60\u662f\u5426\u542f\u7528\u4e86\u5bf9\u5e94\u7684\u63d2\u4ef6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apis/config/tools/less#%E5%90%AF%E7%94%A8"},"\u542f\u7528 Less \u63d2\u4ef6\u6559\u7a0b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apis/config/tools/sass#%E5%90%AF%E7%94%A8"},"\u542f\u7528 Sass \u63d2\u4ef6\u6559\u7a0b"))),(0,o.kt)("h3",{id:"\u6253\u5305\u65f6\u51fa\u73b0-javascript-heap-out-of-memory"},"\u6253\u5305\u65f6\u51fa\u73b0 JavaScript heap out of memory?"),(0,o.kt)("p",null,"\u8be5\u62a5\u9519\u8868\u793a\u6253\u5305\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u5185\u5b58\u6ea2\u51fa\u95ee\u9898\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u662f\u7531\u4e8e\u6253\u5305\u7684\u5185\u5bb9\u8f83\u591a\uff0c\u8d85\u51fa\u4e86 Node.js \u9ed8\u8ba4\u7684\u5185\u5b58\u4e0a\u9650\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u51fa\u73b0 OOM \u95ee\u9898\uff0c\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u901a\u8fc7\u589e\u52a0\u5185\u5b58\u4e0a\u9650\u6765\u89e3\u51b3\uff0cNode.js \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"--max-old-space-size")," \u9009\u9879\u6765\u5bf9\u6b64\u8fdb\u884c\u8bbe\u7f6e\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern build")," \u547d\u4ee4\u524d\u6dfb\u52a0 ",(0,o.kt)("a",{parentName:"p",href:"http://nodejs.cn/api/cli/node_options_options.html"},"NODE_OPTIONS")," \u6765\u8bbe\u7f6e\u6b64\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_OPTIONS=--max_old_space_size=16384 modern build\n")),(0,o.kt)("p",null,"\u53c2\u6570\u7684\u503c\u4ee3\u8868\u5185\u5b58\u4e0a\u9650\u5927\u5c0f\uff08MB)\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"16384"),"\uff0816GB\uff09\u5373\u53ef\u3002"),(0,o.kt)("p",null,"Node.js \u5b98\u65b9\u6587\u6863\u4e2d\u6709\u5bf9\u4ee5\u4e0b\u53c2\u6570\u66f4\u8be6\u7ec6\u7684\u89e3\u91ca\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://nodejs.cn/api/cli/node_options_options.html"},"NODE_OPTIONS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://nodejs.cn/api/cli/max_old_space_size_size_in_megabytes.html"},"--max-old-space-size"))),(0,o.kt)("p",null,"\u9664\u4e86\u589e\u52a0\u5185\u5b58\u4e0a\u9650\uff0c\u901a\u8fc7\u5f00\u542f\u4e00\u4e9b\u7f16\u8bd1\u7b56\u7565\u6765\u63d0\u5347\u6548\u7387\u4e5f\u662f\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\uff0c\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/usages/compile-speed"},"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6"),"\u3002"),(0,o.kt)("h3",{id:"webpack-\u7f16\u8bd1\u51fa\u73b0-compilation-argument-\u62a5\u9519"},"webpack \u7f16\u8bd1\u51fa\u73b0 'compilation' argument \u62a5\u9519"),(0,o.kt)("p",null,"\u5982\u679c\u7f16\u8bd1\u65f6\u51fa\u73b0\u4ee5\u4e0b\u62a5\u9519\uff0c\u901a\u5e38\u662f\u7531\u4e8e\u9879\u76ee\u4e2d\u5b89\u88c5\u4e86\u9519\u8bef\u7684 webpack \u7248\u672c\uff0c\u6216\u8005\u5b89\u88c5\u4e86\u591a\u4e2a webpack \u7248\u672c\u5f15\u8d77\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"TypeError: The 'compilation' argument must be an instance of Compilation\n")),(0,o.kt)("p",null,"webpack \u7248\u672c\u95ee\u9898\u6709\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9879\u76ee\u7684 package.json \u4e2d\u76f4\u63a5\u58f0\u660e\u4e86 webpack \u4f9d\u8d56\uff0c\u5e76\u4e14\u4e0e Modern.js \u4f9d\u8d56\u7684 webpack \u7248\u672c\u8303\u56f4\u4e0d\u540c\uff0c\u65e0\u6cd5\u5339\u914d\u5230\u540c\u4e00\u4e2a\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9879\u76ee\u91cc\u5b89\u88c5\u7684\u591a\u4e2a npm \u5305\u90fd\u4f9d\u8d56\u4e86 webpack\uff0c\u5e76\u4e14\u5b83\u4eec\u4f9d\u8d56\u7684 webpack \u7248\u672c\u8303\u56f4\u4e0d\u540c\uff0c\u65e0\u6cd5\u5339\u914d\u5230\u540c\u4e00\u4e2a\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u5305\u7ba1\u7406\u5668\u7684 lock \u673a\u5236\uff0c\u5bfc\u81f4 lock \u6587\u4ef6\u4e2d\u4ea7\u751f\u4e86\u591a\u4e2a webpack \u7248\u672c\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u662f\u7b2c\u4e00\u79cd\u60c5\u51b5\uff0c\u5efa\u8bae\u4ece\u9879\u76ee\u7684 package.json \u4e2d\u79fb\u9664 webpack \u4f9d\u8d56\u3002\u56e0\u4e3a Modern.js \u9ed8\u8ba4\u5c01\u88c5\u4e86 webpack \u76f8\u5173\u80fd\u529b\uff0c\u5e76\u4e14\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.webpack")," \u914d\u7f6e\u9879\u4e2d\u4f20\u5165 webpack \u5bf9\u8c61\u3002\u56e0\u6b64\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5efa\u8bae\u5728\u9879\u76ee\u4e2d\u989d\u5916\u5b89\u88c5 webpack \u4f9d\u8d56\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u7b2c\u4e8c\u79cd\u60c5\u51b5\uff0c\u5efa\u8bae\u770b\u770b\u80fd\u5426\u5347\u7ea7\u67d0\u4e2a npm \u5305\uff0c\u4f7f\u5176\u4f9d\u8d56\u7684 webpack \u7248\u672c\u8303\u56f4\u4e0e Modern.js \u4fdd\u6301\u4e00\u81f4\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u7684\u80fd\u529b\u6765\u624b\u52a8\u7edf\u4e00\u7248\u672c\uff0c\u6bd4\u5982\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/"},"yarn resolutions")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/package_json#pnpmoverrides"},"pnpm overrides"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u7b2c\u4e09\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e8c\u79cd\u60c5\u51b5\u4e2d\u63d0\u5230\u7684\u4e24\u79cd\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u5220\u9664 lock \u6587\u4ef6\u540e\u91cd\u65b0\u5b89\u88c5\u6765\u89e3\u51b3\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5220\u9664 lock \u6587\u4ef6\u4f1a\u4f7f\u9879\u76ee\u4e2d\u7684\u4f9d\u8d56\u7248\u672c\u81ea\u52a8\u5347\u7ea7\u5230\u6307\u5b9a\u8303\u56f4\u4e0b\u7684\u6700\u65b0\u7248\uff0c\u8bf7\u8fdb\u884c\u5145\u5206\u7684\u6d4b\u8bd5\u3002"))),(0,o.kt)("h3",{id:"less-\u6587\u4ef6\u4e2d\u7684\u9664\u6cd5\u4e0d\u751f\u6548"},"Less \u6587\u4ef6\u4e2d\u7684\u9664\u6cd5\u4e0d\u751f\u6548\uff1f"),(0,o.kt)("p",null,"Less v4 \u7248\u672c\u4e0e v3 \u7248\u672c\u76f8\u6bd4\uff0c\u9664\u6cd5\u7684\u5199\u6cd5\u6709\u4e00\u4e9b\u533a\u522b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-less"},"// Less v3\n.math {\n  width: 2px / 2; // 1px\n  width: 2px ./ 2; // 1px\n  width: (2px / 2); // 1px\n}\n\n// Less v4\n.math {\n  width: 2px / 2; // 2px / 2\n  width: 2px ./ 2; // 1px\n  width: (2px / 2); // 1px\n}\n")),(0,o.kt)("p",null,"Modern.js \u5185\u7f6e\u7684 Less \u7248\u672c\u4e3a v4\uff0c\u4f4e\u7248\u672c\u7684\u5199\u6cd5\u4e0d\u4f1a\u751f\u6548\uff0c\u8bf7\u6ce8\u610f\u533a\u5206\u3002"),(0,o.kt)("p",null,"Less \u4e2d\u9664\u6cd5\u7684\u5199\u6cd5\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\u6765\u4fee\u6539\uff0c\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://lesscss.org/usage/#less-options-math"},"Less - Math"),"\u3002"),(0,o.kt)("h3",{id:"\u7f16\u8bd1\u4ea7\u7269\u4e2d\u5b58\u5728\u672a\u7f16\u8bd1\u7684-es6-\u4ee3\u7801"},"\u7f16\u8bd1\u4ea7\u7269\u4e2d\u5b58\u5728\u672a\u7f16\u8bd1\u7684 ES6+ \u4ee3\u7801\uff1f"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u4e0d\u4f1a\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u6765\u7f16\u8bd1 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e0b\u7684\u6587\u4ef6\u3002\u5982\u679c\u9879\u76ee\u5f15\u5165\u7684 npm \u5305\u4e2d\u542b\u6709 ES6+ \u8bed\u6cd5\uff0c\u4f1a\u88ab\u6253\u5305\u8fdb\u4ea7\u7269\u4e2d\u3002"),(0,o.kt)("p",null,"\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/config/source/include"},"source.include")," \u914d\u7f6e\u9879\u6765\u6307\u5b9a\u9700\u8981\u989d\u5916\u8fdb\u884c\u7f16\u8bd1\u7684\u76ee\u5f55\u6216\u6a21\u5757\u3002"),(0,o.kt)("h3",{id:"\u7f16\u8bd1\u65f6\u62a5\u9519-you-may-need-additional-loader"},"\u7f16\u8bd1\u65f6\u62a5\u9519 ",(0,o.kt)("inlineCode",{parentName:"h3"},"You may need additional loader"),"\uff1f"),(0,o.kt)("p",null,"\u5982\u679c\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4ee5\u4e0b\u62a5\u9519\u63d0\u793a\uff0c\u8868\u793a\u5b58\u5728\u4e2a\u522b\u6587\u4ef6\u65e0\u6cd5\u88ab\u6b63\u786e\u7f16\u8bd1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Module parse failed: Unexpected token\nFile was processed with these loaders:\n * some-loader/index.js\n\nYou may need an additional loader to handle the result of these loaders.\n")),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5f15\u7528\u4e86\u5f53\u524d\u5de5\u7a0b\u5916\u90e8\u6216 node_modules \u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," \u6587\u4ef6\uff0c\u8bf7\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"li",href:"/docs/apis/config/source/include"},"source.include")," \u914d\u7f6e\u9879\u6765\u6307\u5b9a\u9700\u8981\u989d\u5916\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5f15\u7528\u4e86 Modern.js \u4e0d\u652f\u6301\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u8bf7\u81ea\u884c\u914d\u7f6e\u5bf9\u5e94\u7684 webpack loader \u8fdb\u884c\u7f16\u8bd1\u3002")),(0,o.kt)("h3",{id:"\u70ed\u66f4\u65b0\u540e-react-\u7ec4\u4ef6\u7684-state-\u4e22\u5931"},"\u70ed\u66f4\u65b0\u540e React \u7ec4\u4ef6\u7684 state \u4e22\u5931\uff1f"),(0,o.kt)("p",null,"Modern.js \u4f7f\u7528 React \u5b98\u65b9\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"},"Fast Refresh")," \u80fd\u529b\u6765\u8fdb\u884c\u7ec4\u4ef6\u70ed\u66f4\u65b0\u3002"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 Fast Refresh \u65f6\uff0c\u8981\u6c42\u7ec4\u4ef6\u4e0d\u80fd\u4e3a\u533f\u540d\u51fd\u6570\uff0c\u5426\u5219\u70ed\u66f4\u65b0\u540e\u65e0\u6cd5\u4fdd\u7559 React \u7ec4\u4ef6\u7684 state\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5199\u6cd5\u90fd\u662f\u4e0d\u6b63\u786e\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u9519\u8bef\u5199\u6cd5 1\nexport default function () {\n  return <div>Hello World</div>;\n}\n\n// \u9519\u8bef\u5199\u6cd5 2\nexport default () => <div>Hello World</div>;\n")),(0,o.kt)("p",null,"\u6b63\u786e\u7684\u5199\u6cd5\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u6b63\u786e\u5199\u6cd5 1\nexport default function MyComponent() {\n  return <div>Hello World</div>;\n}\n\n// \u6b63\u786e\u5199\u6cd5 2\nconst MyComponent = () => <div>Hello World</div>\n\nexport default MyComponent;\n")))}d.isMDXComponent=!0}}]);