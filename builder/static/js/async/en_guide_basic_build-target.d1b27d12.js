"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6785],{62745:function(e,n,r){r.r(n),r.d(n,{content:function(){return o},frontmatter:function(){return l},title:function(){return i},toc:function(){return t}});var s=r(39980);const l=void 0,t=[{id:"default-target",text:"Default Target",depth:2},{id:"optional-targets",text:"Optional Targets",depth:2},{id:"multiple-targets",text:"Multiple Targets",depth:2},{id:"node-target",text:"Node Target",depth:2},{id:"web-worker-target",text:"Web Worker Target",depth:2},{id:"modern-web-target",text:"Modern Web Target",depth:2}],i="Build Target",o="\"# Build Target\\n\\nBuilder supports build multiple target types for running in different target environments. After setting the correct target type, Builder will optimize the build results for the environment, and enable some plugins or configs for the target environment during the build process.\\n\\nYou can set the type through the `target` parameter of the [createBuilder](/en/api/builder-core.html#createbuilder) method.\\n\\n## Default Target\\n\\nBy default, the build target is `'web'`, and the build result can run in a browser environment.\\n\\nthe Builder will read the [Browserslist config](https://github.com/browserslist/browserslist) in the project to determine the range of browsers.\\n\\n## Optional Targets\\n\\n`target` can also be set to the following values:\\n\\n- `'node'`: Build for Node.js environment, usually used in SSR and other scenarios.\\n- `'web-worker'`: Build for Web Worker environment.\\n- `'modern-web'`: Build for modern browsers.\\n\\nFor example, to build for the Node.js environment:\\n\\n```ts\\nconst builder = await createBuilder(provider, {\\n  target: 'node',\\n});\\n```\\n\\n## Multiple Targets\\n\\nWhen target is an array containing multiple values, Builder will perform multiple builds at the same time.\\n\\nFor example, we can build a browser target and an node target at the same time:\\n\\n```ts\\nconst builder = await createBuilder(provider, {\\n  target: ['web', 'node'],\\n});\\n```\\n\\n## Node Target\\n\\nRefers to the build target running in the Node.js environment, usually used in scenarios such as SSR.\\n\\nWhen `target` is set to `'node'`, Builder will:\\n\\n- No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Node.js environment.\\n- CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle.\\n- The default code split strategy will be disabled, but dynamic import can still work.\\n- Disable the HMR.\\n- Adjust the default value of Browserslist to `['node >= 14']`\u3002\\n\\n:::tip\\nIf target is an array, such as building web and node targets at the same time, then the above processing will not affect the web target, The HTML, CSS and other files required for the web target will still be generated correctly.\\n:::\\n\\n## Web Worker Target\\n\\nRefers to the build target running in the [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) environment.\\n\\n:::tip Web Worker\\nA web worker is a type of JavaScript program that runs in the background, independently of other scripts, without affecting the performance of the page. This makes it possible to run long-running scripts, such as ones that handle complex calculations or access remote resources, without blocking the user interface or other scripts. Web workers provide an easy way to run tasks in the background and improve the overall performance of web applications.\\n:::\\n\\nWhen `target` is set to `'web-worker'`, Builder will:\\n\\n- No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Web Worker environment.\\n- CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle.\\n- The default code split strategy will be disabled, and **dynamic import can not work**, because the Web Worker only runs a single JavaScript file.\\n- Disable the HMR.\\n\\n## Modern Web Target\\n\\nRefers to the build target running in the modern browsers.\\n\\n:::tip What are modern browsers?\\nModern browsers are one of our conventions to refer to browsers that support [native ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).\\n:::\\n\\nWhen `target` is set to `'modern-web'`, Builder will:\\n\\n- Adjust the default value of Browserslist to\uff1a\\n\\n```js\\nconst browserslist = [\\n  'chrome > 61',\\n  'edge > 16',\\n  'firefox > 60',\\n  'safari > 11',\\n  'ios_saf > 11',\\n];\\n```\\n\"";function a(e){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span",strong:"strong"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"build-target",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-target",children:"#"}),"Build Target"]}),"\n",(0,s.jsx)(n.p,{children:"Builder supports build multiple target types for running in different target environments. After setting the correct target type, Builder will optimize the build results for the environment, and enable some plugins or configs for the target environment during the build process."}),"\n",(0,s.jsxs)(n.p,{children:["You can set the type through the ",(0,s.jsx)(n.code,{children:"target"})," parameter of the ",(0,s.jsx)(n.a,{href:"/builder/en/api/builder-core.html#createbuilder-11",children:"createBuilder"})," method."]}),"\n",(0,s.jsxs)(n.h2,{id:"default-target",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-target",children:"#"}),"Default Target"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the build target is ",(0,s.jsx)(n.code,{children:"'web'"}),", and the build result can run in a browser environment."]}),"\n",(0,s.jsxs)(n.p,{children:["the Builder will read the ",(0,s.jsx)(n.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"nofollow",children:"Browserslist config"})," in the project to determine the range of browsers."]}),"\n",(0,s.jsxs)(n.h2,{id:"optional-targets",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optional-targets",children:"#"}),"Optional Targets"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"target"})," can also be set to the following values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'node'"}),": Build for Node.js environment, usually used in SSR and other scenarios."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'web-worker'"}),": Build for Web Worker environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'modern-web'"}),": Build for modern browsers."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, to build for the Node.js environment:"}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,s.jsxs)(n.code,{children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"builder"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"await"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#88C0D0"},children:"createBuilder"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"provider"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"target"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"node"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"multiple-targets",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#multiple-targets",children:"#"}),"Multiple Targets"]}),"\n",(0,s.jsx)(n.p,{children:"When target is an array containing multiple values, Builder will perform multiple builds at the same time."}),"\n",(0,s.jsx)(n.p,{children:"For example, we can build a browser target and an node target at the same time:"}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,s.jsxs)(n.code,{children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"builder"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"await"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#88C0D0"},children:"createBuilder"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"provider"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"target"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"web"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"node"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"node-target",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#node-target",children:"#"}),"Node Target"]}),"\n",(0,s.jsx)(n.p,{children:"Refers to the build target running in the Node.js environment, usually used in scenarios such as SSR."}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"target"})," is set to ",(0,s.jsx)(n.code,{children:"'node'"}),", Builder will:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Node.js environment."}),"\n",(0,s.jsx)(n.li,{children:"CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle."}),"\n",(0,s.jsx)(n.li,{children:"The default code split strategy will be disabled, but dynamic import can still work."}),"\n",(0,s.jsx)(n.li,{children:"Disable the HMR."}),"\n",(0,s.jsxs)(n.li,{children:["Adjust the default value of Browserslist to ",(0,s.jsx)(n.code,{children:"['node >= 14']"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"\nIf target is an array, such as building web and node targets at the same time, then the above processing will not affect the web target, The HTML, CSS and other files required for the web target will still be generated correctly."})})]}),"\n",(0,s.jsxs)(n.h2,{id:"web-worker-target",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-target",children:"#"}),"Web Worker Target"]}),"\n",(0,s.jsxs)(n.p,{children:["Refers to the build target running in the ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",target:"_blank",rel:"nofollow",children:"Web Worker"})," environment."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"Web Worker"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"\nA web worker is a type of JavaScript program that runs in the background, independently of other scripts, without affecting the performance of the page. This makes it possible to run long-running scripts, such as ones that handle complex calculations or access remote resources, without blocking the user interface or other scripts. Web workers provide an easy way to run tasks in the background and improve the overall performance of web applications."})})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"target"})," is set to ",(0,s.jsx)(n.code,{children:"'web-worker'"}),", Builder will:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No HTML files will be generated, and HTML-related logic will not be executed, since HTML is not required by the Web Worker environment."}),"\n",(0,s.jsx)(n.li,{children:"CSS code will not be bundled or extracted, but the id information of CSS Modules will be included in the bundle."}),"\n",(0,s.jsxs)(n.li,{children:["The default code split strategy will be disabled, and ",(0,s.jsx)(n.strong,{children:"dynamic import can not work"}),", because the Web Worker only runs a single JavaScript file."]}),"\n",(0,s.jsx)(n.li,{children:"Disable the HMR."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-web-target",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-target",children:"#"}),"Modern Web Target"]}),"\n",(0,s.jsx)(n.p,{children:"Refers to the build target running in the modern browsers."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"What are modern browsers?"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\nModern browsers are one of our conventions to refer to browsers that support ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"nofollow",children:"native ES Modules"}),"."]})})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"target"})," is set to ",(0,s.jsx)(n.code,{children:"'modern-web'"}),", Builder will:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adjust the default value of Browserslist to\uff1a"}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"language-js",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,s.jsxs)(n.code,{children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9"},children:"browserslist"}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"chrome > 61"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"edge > 16"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"firefox > 60"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"safari > 11"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#A3BE8C"},children:"ios_saf > 11"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,s.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,s.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,s.jsx)(n.span,{className:"line"})]})})]})]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);