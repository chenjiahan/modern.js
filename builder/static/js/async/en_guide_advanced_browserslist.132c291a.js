"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3431],{50222:function(e,s,n){n.r(s),n.d(s,{content:function(){return i},frontmatter:function(){return l},title:function(){return t},toc:function(){return o}});var r=n(39980);const l=void 0,o=[{id:"what-is-browserslist",text:"What is Browserslist",depth:2},{id:"set-browserslist",text:"Set Browserslist",depth:2},{id:"example",text:"Example",depth:3},{id:"use-outputoverridebrowserslist-config",text:"Use output.overrideBrowserslist config",depth:3},{id:"commonly-used-browserslist",text:"Commonly used Browserslist",depth:2},{id:"mobile-h5-scene",text:"Mobile H5 scene",depth:3},{id:"desktop-pc-scene",text:"Desktop PC scene",depth:3},{id:"default-browserslist",text:"Default Browserslist",depth:2},{id:"web-target",text:"Web Target",depth:3},{id:"node-target",text:"Node Target",depth:3},{id:"web-worker-target",text:"Web Worker Target",depth:3},{id:"modern-web-target",text:"Modern Web Target",depth:3},{id:"query-browser-support",text:"Query browser support",depth:2}],t="Browserslist",i="\"# Browserslist\\n\\nBuilder supports using [Browserslist](https://browsersl.ist/) to specify which browsers should be supported in your Web application.\\n\\n## What is Browserslist\\n\\nSince different browsers support ECMAScript and CSS differently, developers need to set the correct browser range for web applications.\\n\\n[Browserslist](https://browsersl.ist/) can specify which browsers your web application can run in, it provides a configuration for specifying browsers range. Browserslist has become a standard in the industry, it is used by libraries such as Autoprefixer, Babel, ESLint, PostCSS, SWC and Webpack.\\n\\nWhen you specify a browser range through Browserslist, Builder will compile JavaScript and CSS code to the specified syntax, and inject the corresponding polyfill code. **When you only need to be compatible with modern browsers, the compilation process will introduce less compatible code and polyfills, and the performance of the page will be better.**\\n\\nFor example, when you need to be compatible with IE11 browser, Builder will compile the code to ES5 and inject the polyfill required by IE11 through `core-js`.\\n\\n:::tip What is polyfill\\nA polyfill is a piece of code that provides the functionality of a newer feature to older browsers that do not support that feature natively. It is used to fill in the gaps in older browsers' implementations of web standards, allowing developers to use newer features safely without having to worry about whether or not they will work in older browsers. For example, if a browser does not support the Array.map() method, a polyfill can be used to provide that functionality, allowing code that uses `Array.prototype.flat()` to work in that browser. Polyfills are commonly used to ensure that web applications can work on a wide range of browsers, including older ones.\\n:::\\n\\n## Set Browserslist\\n\\nYou can set the Browserslist value in the `package.json` or `.browserslistrc` file in the root directory of the current project.\\n\\n### Example\\n\\nSet via `browserslist` in `package.json`:\\n\\n```json\\n{\\n  \\\"browserslist\\\": [\\n    \\\"iOS 9\\\",\\n    \\\"Android 4.4\\\",\\n    \\\"last 2 versions\\\",\\n    \\\"> 0.2%\\\",\\n    \\\"not dead\\\"\\n  ]\\n}\\n```\\n\\nSet via a separate `.browserslistrc` file:\\n\\n```\\niOS 9\\nAndroid 4.4\\nlast 2 versions\\n> 0.2%\\nnot dead\\n```\\n\\n### Use output.overrideBrowserslist config\\n\\nIn addition to the above standard usage, Builder also provides [output.overrideBrowserslist](/en/api/config-output.html#output-overridebrowserslist) config, which can also set the value of Browserslist.\\n\\n```ts\\nexport default {\\n  output: {\\n    overrideBrowserslist: [\\n      'iOS 9',\\n      'Android 4.4',\\n      'last 2 versions',\\n      '> 0.2%',\\n      'not dead',\\n    ],\\n  },\\n};\\n```\\n\\nWhen you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set `overrideBrowserslist` to an object whose key is the corresponding build target.\\n\\nFor example to set different ranges for `web` and `node`:\\n\\n```js\\nexport default {\\n  output: {\\n    overrideBrowserslist: {\\n      web: ['iOS 9', 'Android 4.4', 'last 2 versions', '> 0.2%', 'not dead'],\\n      node: ['node >= 14'],\\n    },\\n  },\\n};\\n```\\n\\nIn most cases, it is recommended to use the `.browserslistrc` file rather than the `overrideBrowserslist` config. Because the `.browserslistrc` file is the official config file, it is more general and can be recognized by other libraries in the community.\\n\\n## Commonly used Browserslist\\n\\nThe following are some commonly used Browserslist, you can choose according to your project type.\\n\\n### Mobile H5 scene\\n\\nThe mobile H5 scene is mainly compatible with `iOS` and `Android` systems, usually we set Browserslist as:\\n\\n```\\niOS 9\\nAndroid 4.4\\nlast 2 versions\\n0.2%\\nnot dead\\n```\\n\\nThe above Browserslist will compile the code to the ES5 specification, which is compatible with most mobile scenarios on the market. For the detailed browsers list, please check [browserslist.dev](https://browserslist.dev/?q=aU9TIDksIEFuZHJvaWQgNC40LCBsYXN0IDIgdmVyc2lvbnMsID4gMC4yJSwgbm90IGRlYWQ%3D).\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/browserslist-dev-1222.png)\\n\\nYou can also choose to use the ES6 specification in the H5 scene, which will make the performance of the page better. The corresponding Browserslist is as follows:\\n\\n```\\niOS 10\\nChrome 51\\n> 0.2%\\nnot dead\\nnot op_mini all\\n```\\n\\n### Desktop PC scene\\n\\nIn the desktop PC scenario, if you need to be compatible with IE 11 browsers, you can set Browserslist to:\\n\\n```\\n> 0.5%\\nnot dead\\nInternet Explorer 11\\n```\\n\\nThe above Browserslist will compile the code to the ES5 specification. For the specific browser list, please check [browserslist.dev](https://browserslist.dev/?q=PiAwLjUlLCBub3QgZGVhZCwgSUUgMTE%3D).\\n\\nIf you don't need to be compatible with IE 11 browsers, you can adjust Browserslist to get a more performant output, such as setting it to browsers that supports native ES Modules:\\n\\n```\\nchrome > 61\\nedge > 16\\nfirefox > 60\\nsafari > 11\\nios_saf > 11\\n```\\n\\n## Default Browserslist\\n\\nBuilder will set different default values of Browserslist according to [build target](/guide/basic/build-target.html), but we recommend that you explicitly set Browserslist in your project, which will make the compatible scope of the project more clear.\\n\\n### Web Target\\n\\nThe default values of web target are as follows:\\n\\n```bash\\n> 0.01%\\nnot dead\\nnot op_mini all\\n```\\n\\nUnder this browser range, JavaScript code will be compiled to ES5 syntax.\\n\\n### Node Target\\n\\nNode target will be compatible with Node.js 14.0 by default.\\n\\n```bash\\nnode >= 14\\n```\\n\\n### Web Worker Target\\n\\nThe default Browserslist of the Web Worker target is consistent with the Web target.\\n\\n```bash\\n> 0.01%\\nnot dead\\nnot op_mini all\\n```\\n\\n### Modern Web Target\\n\\nModern Web target will be compatible with browsers that support [native ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) by default.\\n\\n```bash\\nchrome > 61\\nedge > 16\\nfirefox > 60\\nsafari > 11\\nios_saf > 11\\n```\\n\\n## Query browser support\\n\\nWhen developing, we need to know the browser support of certain features or APIs. At this time, we can check on the [caniuse](https://caniuse.com/) website.\\n\\nFor example, we need to know the browser support of `Promise`, just enter `Promise` in [caniuse](https://caniuse.com/), and you can see the following results:\\n\\n![](https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/caniuse-demo-1222.png)\\n\\nAs can be seen from the above table, `Promise` is natively supported in Chrome 33 and iOS 8, but not in IE 11.\\n\"";function a(e){const s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",code:"code",div:"div",h3:"h3",button:"button",pre:"pre",span:"span",img:"img"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"browserslist",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist",children:"#"}),"Browserslist"]}),"\n",(0,r.jsxs)(s.p,{children:["Builder supports using ",(0,r.jsx)(s.a,{href:"https://browsersl.ist/",target:"_blank",rel:"nofollow",children:"Browserslist"})," to specify which browsers should be supported in your Web application."]}),"\n",(0,r.jsxs)(s.h2,{id:"what-is-browserslist",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-browserslist",children:"#"}),"What is Browserslist"]}),"\n",(0,r.jsx)(s.p,{children:"Since different browsers support ECMAScript and CSS differently, developers need to set the correct browser range for web applications."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://browsersl.ist/",target:"_blank",rel:"nofollow",children:"Browserslist"})," can specify which browsers your web application can run in, it provides a configuration for specifying browsers range. Browserslist has become a standard in the industry, it is used by libraries such as Autoprefixer, Babel, ESLint, PostCSS, SWC and Webpack."]}),"\n",(0,r.jsxs)(s.p,{children:["When you specify a browser range through Browserslist, Builder will compile JavaScript and CSS code to the specified syntax, and inject the corresponding polyfill code. ",(0,r.jsx)(s.strong,{children:"When you only need to be compatible with modern browsers, the compilation process will introduce less compatible code and polyfills, and the performance of the page will be better."})]}),"\n",(0,r.jsxs)(s.p,{children:["For example, when you need to be compatible with IE11 browser, Builder will compile the code to ES5 and inject the polyfill required by IE11 through ",(0,r.jsx)(s.code,{children:"core-js"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"What is polyfill"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nA polyfill is a piece of code that provides the functionality of a newer feature to older browsers that do not support that feature natively. It is used to fill in the gaps in older browsers' implementations of web standards, allowing developers to use newer features safely without having to worry about whether or not they will work in older browsers. For example, if a browser does not support the Array.map() method, a polyfill can be used to provide that functionality, allowing code that uses ",(0,r.jsx)(s.code,{children:"Array.prototype.flat()"}),"to work in that browser. Polyfills are commonly used to ensure that web applications can work on a wide range of browsers, including older ones."]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"set-browserslist",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#set-browserslist",children:"#"}),"Set Browserslist"]}),"\n",(0,r.jsxs)(s.p,{children:["You can set the Browserslist value in the ",(0,r.jsx)(s.code,{children:"package.json"})," or ",(0,r.jsx)(s.code,{children:".browserslistrc"})," file in the root directory of the current project."]}),"\n",(0,r.jsxs)(s.h3,{id:"example",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,r.jsxs)(s.p,{children:["Set via ",(0,r.jsx)(s.code,{children:"browserslist"})," in ",(0,r.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#8FBCBB"},children:"browserslist"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"["})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"iOS 9"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"Android 4.4"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"last 2 versions"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"> 0.2%"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"not dead"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:'"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"]"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Set via a separate ",(0,r.jsx)(s.code,{children:".browserslistrc"})," file:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"iOS 9\nAndroid 4.4\nlast 2 versions\n> 0.2%\nnot dead\n"})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"use-outputoverridebrowserslist-config",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-outputoverridebrowserslist-config",children:"#"}),"Use output.overrideBrowserslist config"]}),"\n",(0,r.jsxs)(s.p,{children:["In addition to the above standard usage, Builder also provides ",(0,r.jsx)(s.a,{href:"/builder/en/api/config-output.html#output-overridebrowserslist-7",children:"output.overrideBrowserslist"})," config, which can also set the value of Browserslist."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9"},children:"output"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9"},children:"overrideBrowserslist"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"iOS 9"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"Android 4.4"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"last 2 versions"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"> 0.2%"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"not dead"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    ]"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set ",(0,r.jsx)(s.code,{children:"overrideBrowserslist"})," to an object whose key is the corresponding build target."]}),"\n",(0,r.jsxs)(s.p,{children:["For example to set different ranges for ",(0,r.jsx)(s.code,{children:"web"})," and ",(0,r.jsx)(s.code,{children:"node"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#88C0D0"},children:"output"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#88C0D0"},children:"overrideBrowserslist"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#88C0D0"},children:"web"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"iOS 9"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"Android 4.4"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"last 2 versions"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"> 0.2%"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"not dead"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#88C0D0"},children:"node"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#A3BE8C"},children:"node >= 14"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["In most cases, it is recommended to use the ",(0,r.jsx)(s.code,{children:".browserslistrc"})," file rather than the ",(0,r.jsx)(s.code,{children:"overrideBrowserslist"})," config. Because the ",(0,r.jsx)(s.code,{children:".browserslistrc"})," file is the official config file, it is more general and can be recognized by other libraries in the community."]}),"\n",(0,r.jsxs)(s.h2,{id:"commonly-used-browserslist",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#commonly-used-browserslist",children:"#"}),"Commonly used Browserslist"]}),"\n",(0,r.jsx)(s.p,{children:"The following are some commonly used Browserslist, you can choose according to your project type."}),"\n",(0,r.jsxs)(s.h3,{id:"mobile-h5-scene",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#mobile-h5-scene",children:"#"}),"Mobile H5 scene"]}),"\n",(0,r.jsxs)(s.p,{children:["The mobile H5 scene is mainly compatible with ",(0,r.jsx)(s.code,{children:"iOS"})," and ",(0,r.jsx)(s.code,{children:"Android"})," systems, usually we set Browserslist as:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"iOS 9\nAndroid 4.4\nlast 2 versions\n0.2%\nnot dead\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["The above Browserslist will compile the code to the ES5 specification, which is compatible with most mobile scenarios on the market. For the detailed browsers list, please check ",(0,r.jsx)(s.a,{href:"https://browserslist.dev/",target:"_blank",rel:"nofollow",children:"browserslist.dev"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/browserslist-dev-1222.png",alt:""})}),"\n",(0,r.jsx)(s.p,{children:"You can also choose to use the ES6 specification in the H5 scene, which will make the performance of the page better. The corresponding Browserslist is as follows:"}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"iOS 10\nChrome 51\n> 0.2%\nnot dead\nnot op_mini all\n"})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"desktop-pc-scene",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#desktop-pc-scene",children:"#"}),"Desktop PC scene"]}),"\n",(0,r.jsx)(s.p,{children:"In the desktop PC scenario, if you need to be compatible with IE 11 browsers, you can set Browserslist to:"}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"> 0.5%\nnot dead\nInternet Explorer 11\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["The above Browserslist will compile the code to the ES5 specification. For the specific browser list, please check ",(0,r.jsx)(s.a,{href:"https://browserslist.dev/",target:"_blank",rel:"nofollow",children:"browserslist.dev"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"If you don't need to be compatible with IE 11 browsers, you can adjust Browserslist to get a more performant output, such as setting it to browsers that supports native ES Modules:"}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"chrome > 61\nedge > 16\nfirefox > 60\nsafari > 11\nios_saf > 11\n"})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"default-browserslist",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-browserslist",children:"#"}),"Default Browserslist"]}),"\n",(0,r.jsxs)(s.p,{children:["Builder will set different default values of Browserslist according to ",(0,r.jsx)(s.a,{href:"/builder/en/guide/basic/build-target.html",children:"build target"}),", but we recommend that you explicitly set Browserslist in your project, which will make the compatible scope of the project more clear."]}),"\n",(0,r.jsxs)(s.h3,{id:"web-target",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#web-target",children:"#"}),"Web Target"]}),"\n",(0,r.jsx)(s.p,{children:"The default values of web target are as follows:"}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 0.01%"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"not dead"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"not op_mini all"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(s.p,{children:"Under this browser range, JavaScript code will be compiled to ES5 syntax."}),"\n",(0,r.jsxs)(s.h3,{id:"node-target",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#node-target",children:"#"}),"Node Target"]}),"\n",(0,r.jsx)(s.p,{children:"Node target will be compatible with Node.js 14.0 by default."}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"node "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"= 14"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"web-worker-target",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-target",children:"#"}),"Web Worker Target"]}),"\n",(0,r.jsx)(s.p,{children:"The default Browserslist of the Web Worker target is consistent with the Web target."}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 0.01%"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"not dead"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"not op_mini all"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"modern-web-target",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-target",children:"#"}),"Modern Web Target"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern Web target will be compatible with browsers that support ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"nofollow",children:"native ES Modules"})," by default."]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"chrome "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 61"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"edge "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 16"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"firefox "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 60"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"safari "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 11"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"ios_saf "}),(0,r.jsx)(s.span,{style:{color:"#81A1C1"},children:">"}),(0,r.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" 11"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"query-browser-support",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#query-browser-support",children:"#"}),"Query browser support"]}),"\n",(0,r.jsxs)(s.p,{children:["When developing, we need to know the browser support of certain features or APIs. At this time, we can check on the ",(0,r.jsx)(s.a,{href:"https://caniuse.com/",target:"_blank",rel:"nofollow",children:"caniuse"})," website."]}),"\n",(0,r.jsxs)(s.p,{children:["For example, we need to know the browser support of ",(0,r.jsx)(s.code,{children:"Promise"}),", just enter ",(0,r.jsx)(s.code,{children:"Promise"})," in ",(0,r.jsx)(s.a,{href:"https://caniuse.com/",target:"_blank",rel:"nofollow",children:"caniuse"}),", and you can see the following results:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/caniuse-demo-1222.png",alt:""})}),"\n",(0,r.jsxs)(s.p,{children:["As can be seen from the above table, ",(0,r.jsx)(s.code,{children:"Promise"})," is natively supported in Chrome 33 and iOS 8, but not in IE 11."]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);