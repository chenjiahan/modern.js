(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_quick-start_mdx"],{4446:function(e,s,n){e.exports={"next-steps":"qKm1u ",nextSteps:"qKm1u "}},82173:function(e,s,n){e.exports={description:"_1vcO ",description:"_1vcO ",step:"_2ddq ",step:"_2ddq ",title:"_74tj ",title:"_74tj "}},2976:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return a},title:function(){return c},default:function(){return h}});var r=n("12151"),i=n.ir(n("97108")),l=n.ir(n("70792")),t=n.ir(n("69571"));let o=void 0,a=[{id:"environment-preparation",text:"Environment preparation",depth:2},{id:"use-the-modernjs-framework",text:"Use the Modern.js Framework",depth:2},{id:"use-builder-in-a-front-end-framework",text:"Use Builder in a Front-end Framework",depth:2},{id:"1-install-builder",text:"1. Install Builder",depth:3},{id:"2-create-builder-instance",text:"2. Create Builder Instance",depth:3},{id:"3-call-builder-instance-method",text:"3. Call Builder Instance Method",depth:3},{id:"next-step",text:"Next Step",depth:2}],c="Quick Start";function d(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"quick-start",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"}),"Quick Start"]}),"\n",(0,r.jsxs)(s.h2,{id:"environment-preparation",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"}),"Environment preparation"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(s.h2,{id:"use-the-modernjs-framework",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-modernjs-framework",children:"#"}),"Use the Modern.js Framework"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"The Modern.js Framework uses Modern.js Builder as its build engine by default"}),". If you are a business developer, you do not need to manually install Builder, just create a Modern.js project and use all the features provided by Builder."]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create my-app"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/en/guides/get-started/introduction.html",target:"_blank",rel:"nofollow",children:"Modern.js - Introduction"})," and ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/en/guides/get-started/quick-start.html",target:"_blank",rel:"nofollow",children:"Modern.js - Quick Start"})," to learn how to use Modern.js framework."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"About the documentation"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nModern.js framework documentation and Modern.js Builder documentation are deployed under two separate sites. If you encounter any build-related problems while using the Modern.js framework, you can always refer to the documentation of Modern.js Builder to find solutions."})})]}),"\n",(0,r.jsxs)(s.h2,{id:"use-builder-in-a-front-end-framework",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"}),"Use Builder in a Front-end Framework"]}),"\n",(0,r.jsx)(s.p,{children:"If you are developing a front-end framework, you can use Builder by following these steps:"}),"\n",(0,r.jsxs)(s.h3,{id:"1-install-builder",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#1-install-builder",children:"#"}),"1. Install Builder"]}),"\n",(0,r.jsx)(s.p,{children:"You need to install two packages:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"@modern-js/builder"})," is the core package of Builder and exports the core API."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"@modern-js/builder-webpack-provider"})," is a provider for Builder, providing webpack-based building capabilities."]}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm add @modern-js/builder @modern-js/builder-webpack-provider -D"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"When upgrading the version, please make sure that Builder and Provider you are installing are the same version."}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"2-create-builder-instance",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#2-create-builder-instance",children:"#"}),"2. Create Builder Instance"]}),"\n",(0,r.jsx)(s.p,{children:"There are two steps to creating a Builder instance:"}),"\n",(0,r.jsxs)(s.p,{children:["First you need to initialize the Builder Provider and pass in the ",(0,r.jsx)(s.code,{children:"builderConfig"})," config object. Builder provides a lot of configs that allow you to customize the build behavior. At this point, you don't need to know the specific content of the config, just pass in an empty object. You can find all available configs in ",(0,r.jsx)(s.a,{href:"/builder/en/api/index.html#config",children:"API - config"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { createBuilder } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { builderWebpackProvider } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-webpack-provider'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"builderWebpackProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// some configs"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["After getting the provider object, you can call the ",(0,r.jsx)(s.code,{children:"createBuilder"})," method to create a Builder instance object:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createBuilder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  entry"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    index"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/index.ts'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Except the ",(0,r.jsx)(s.code,{children:"entry"})," option, the ",(0,r.jsx)(s.code,{children:"createBuilder"})," method also provides some other options, which you can learn more about in ",(0,r.jsx)(s.a,{href:"/builder/en/api/builder-core.html#createbuilder",children:"API - createBuilder"}),"."]}),"\n",(0,r.jsxs)(s.h3,{id:"3-call-builder-instance-method",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#3-call-builder-instance-method",children:"#"}),"3. Call Builder Instance Method"]}),"\n",(0,r.jsx)(s.p,{children:"The Builder instance provides some methods, which you can use it according to the usage scenarios."}),"\n",(0,r.jsxs)(s.p,{children:["To start local development, it is recommended to use the ",(0,r.jsx)(s.a,{href:"/builder/en/api/builder-instance.html#builder-startdevserver",children:"builder.startDevServer"})," method, which will start a local Dev Server."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".startDevServer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(s.p,{children:"After successfully starting Dev Server, you can see the following logs:"}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"info    Starting dev server..."})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"info    Dev server running at:"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    http://localhost:8081"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  http://192.168.0.1:8081"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["To deploy the App to production environment, it is recommended to use the ",(0,r.jsx)(s.a,{href:"/builder/en/api/builder-instance.html#builder-build",children:"builder.build"})," method, which will build the production outputs."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".build"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["For more introduction of Builder instance methods, please read the ",(0,r.jsx)(s.a,{href:"/builder/en/api/builder-instance.html",children:"Builder Instance"})," chapter."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"After completing the above three steps, you have learned the basic usage of Builder. Next, you can customize the build process through the Builder plugin and Builder configs."}),"\n",(0,r.jsxs)(s.h2,{id:"next-step",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"}),"Next Step"]}),"\n",(0,r.jsx)(s.p,{children:"You may want:"}),"\n","\n",(0,r.jsxs)(l.default,{children:[(0,r.jsx)(t.default,{href:"/guide/glossary.html",title:"Glossary",description:"Learn about Builder related concepts"}),(0,r.jsx)(t.default,{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}),(0,r.jsx)(t.default,{href:"/api/index.html",title:"API Reference",description:"View detailed API documentation"})]})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},97108:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return l},default:function(){return o}});var r=n("12151");let i=void 0,l=[];function t(e){let s=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Before getting started, you will need to install ",(0,r.jsx)(s.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow",children:"Node.js"}),", and ensure that your Node.js version is higher than 14.17.6. ",(0,r.jsx)(s.strong,{children:"We recommend using the LTS version of Node.js 16."})]}),"\n",(0,r.jsx)(s.p,{children:"You can check the currently used Node.js version with the following command:"}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# v16.19.1"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["If you do not have Node.js installed in your current environment, or the installed version is lower than 14.17.6, you can use ",(0,r.jsx)(s.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"nofollow",children:"nvm"})," or ",(0,r.jsx)(s.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"nofollow",children:"fnm"})," to install the required version."]}),"\n",(0,r.jsx)(s.p,{children:"Here is an example of how to install the Node.js 16 LTS version via nvm:"}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Install the long-term support version of Node.js 16"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16 --lts"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Make the newly installed Node.js 16 as the default version"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"nvm "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" default 16"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Switch to the newly installed Node.js 16"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"nvm and fnm"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nBoth nvm and fnm are Node.js version management tools. Relatively speaking, nvm is more mature and stable, while fnm is implemented using Rust, which provides better performance than nvm."})})]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},70792:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return t}});var r=n("12151"),i=n.ir(n("4446"));let l=e=>(0,r.jsx)("div",{className:i.default.nextSteps,children:e.children});var t=l},69571:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return o}});var r=n("12151"),i=n("96924"),l=n.ir(n("82173"));let t=e=>(0,r.jsxs)("a",{className:l.default.step,href:(0,i.useUrl)(e.href),children:[(0,r.jsx)("p",{className:l.default.title,children:e.title}),(0,r.jsx)("p",{className:l.default.description,children:e.description})]});var o=t},44110:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),n.es(n("23447"),s)},96924:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"useUrl",{enumerable:!0,get:function(){return i}});var r=n("12416");function i(e){let s=(0,r.useLang)();return(0,r.withBase)("zh"===s?e:"/en".concat(e))}},12416:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),n.es(n("44110"),s)}}]);