"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2870],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(m,a(a({ref:n},s),{},{components:t})):o.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(18249),r=(t(52983),t(44993));const i={sidebar_position:7},a=void 0,c={unversionedId:"apis/app/commands/inspect",id:"apis/app/commands/inspect",title:"inspect",description:"modern inspect command used to view the Modern.js Builder config and webpack config of the project.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/commands/inspect.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/inspect",permalink:"/v2/en/docs/apis/app/commands/inspect",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisAppSidebar",previous:{title:"serve",permalink:"/v2/en/docs/apis/app/commands/serve"},next:{title:"upgrade",permalink:"/v2/en/docs/apis/app/commands/upgrade"}},p={},l=[{value:"Configuration Env",id:"configuration-env",level:2},{value:"Verbose content",id:"verbose-content",level:2},{value:"SSR Configuration",id:"ssr-configuration",level:3}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Usage: modern inspect [options]\n\nOptions:\n  --env <env>           view the configuration in the target environment (default: "development")\n  --output <output>     Specify the path to output in the dist (default: "/")\n  --verbose             Show the full function in the result\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modern inspect")," command used to view the ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/en/guide/basic/builder-config.html"},"Modern.js Builder config")," and webpack config of the project."),(0,r.kt)("p",null,"After executing the command ",(0,r.kt)("inlineCode",{parentName:"p"},"npx modern inspect")," in the project root directory, the following files will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory of the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"builder.config.js"),": The Modern.js Builder config to use at build time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack.config.web.js"),": The webpack config used by to use at build time.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n")),(0,r.kt)("h2",{id:"configuration-env"},"Configuration Env"),(0,r.kt)("p",null,"By default, the inspect command will output the development configs, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--env production")," option to output the production configs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modern inspect --env production\n")),(0,r.kt)("h2",{id:"verbose-content"},"Verbose content"),(0,r.kt)("p",null,"By default, the inspect command will omit the function content in the config object, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--verbose")," option to output the full content of the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modern inspect --verbose\n")),(0,r.kt)("h3",{id:"ssr-configuration"},"SSR Configuration"),(0,r.kt)("p",null,"If the project has enabled SSR, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.node.js")," file will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/"),", corresponding to the webpack configuration at SSR build time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n  - Webpack Config (node): /root/my-project/dist/webpack.config.node.js\n")))}u.isMDXComponent=!0}}]);