(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_api_config-dev_mdx"],{20221:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169"),l=r("14842"),a=r("63725"),o=r("48367"),h=r("37852"),x=r("44941"),j=r("99167"),p=r("23150"),u=r("12725");function g(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"dev-config",children:["Dev Config",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"本章节描述了 Builder 中与本地开发有关的配置。"}),"\n",(0,c.jsxs)(n.h2,{id:"devassetprefix",children:["dev.assetPrefix",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n","\n",(0,c.jsx)(l.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devbeforestarturl",children:["dev.beforeStartUrl",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devbeforestarturl",children:"#"})]}),"\n","\n",(0,c.jsx)(a.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devhmr",children:["dev.hmr",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhmr",children:"#"})]}),"\n","\n",(0,c.jsx)(o.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devhost",children:["dev.host",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhost",children:"#"})]}),"\n","\n",(0,c.jsx)(h.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devhttps",children:["dev.https",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n","\n",(0,c.jsx)(x.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devport",children:["dev.port",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devport",children:"#"})]}),"\n","\n",(0,c.jsx)(j.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devprogressbar",children:["dev.progressBar",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devprogressbar",children:"#"})]}),"\n","\n",(0,c.jsx)(p.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"devstarturl",children:["dev.startUrl",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"})]}),"\n","\n",(0,c.jsx)(u.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapi%2Fconfig-dev.mdx"]={toc:[{text:"dev.assetPrefix",id:"devassetprefix",depth:2},{text:"dev.beforeStartUrl",id:"devbeforestarturl",depth:2},{text:"dev.hmr",id:"devhmr",depth:2},{text:"dev.host",id:"devhost",depth:2},{text:"dev.https",id:"devhttps",depth:2},{text:"dev.port",id:"devport",depth:2},{text:"dev.progressBar",id:"devprogressbar",depth:2},{text:"dev.startUrl",id:"devstarturl",depth:2}],title:"Dev Config",frontmatter:{extractApiHeaders:[2]}};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(g,(0,t._)({},e))})):g(e)}},14842:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | string"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["设置开发环境下的静态资源 URL 前缀，对应 webpack 的 ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," 配置。"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"assetPrefix"})," 会影响构建产物中绝大部分静态资源的 URL，包括 JavaScript 文件、CSS 文件、图片、视频等。如果指定了一个错误的值，则在加载这些资源时可能会出现 404 错误。"]}),"\n",(0,c.jsxs)(n.p,{children:["该配置项仅用于开发环境。在生产环境下，请使用 ",(0,c.jsx)(n.code,{children:"output.assetPrefix"})," 配置项进行设置。"]}),"\n",(0,c.jsxs)(n.h3,{id:"boolean-类型",children:["Boolean 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["如果设置 ",(0,c.jsx)(n.code,{children:"assetPrefix"})," 为 ",(0,c.jsx)(n.code,{children:"true"}),"，Builder 会使用 ",(0,c.jsx)(n.code,{children:"http://localhost:port/"})," 作为 URL 前缀："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"对应 JS 文件在浏览器中加载的地址如下："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"></script>\n'})}),"\n",(0,c.jsxs)(n.p,{children:["如果设置 ",(0,c.jsx)(n.code,{children:"assetPrefix"})," 为 ",(0,c.jsx)(n.code,{children:"false"})," 或不设置，则默认使用 ",(0,c.jsx)(n.code,{children:"/"})," 作为访问前缀。"]}),"\n",(0,c.jsxs)(n.h3,{id:"string-类型",children:["String 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"assetPrefix"})," 的值为 ",(0,c.jsx)(n.code,{children:"string"})," 类型时，字符串会作为前缀，自动拼接到静态资源访问 URL 上："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"对应 JS 文件在浏览器中加载的地址如下："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2FassetPrefix.md"]={toc:[{text:"Boolean 类型",id:"boolean-类型",depth:3},{text:"String 类型",id:"string-类型",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},63725:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"() => Promise<void> | void"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"dev.beforeStartUrl"})," 用于在打开 ",(0,c.jsx)(n.code,{children:"startUrl"})," 前执行一段回调函数，该配置项需要与 ",(0,c.jsx)(n.code,{children:"dev.startUrl"})," 一同使用。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: true,\n    beforeStartUrl: async () => {\n      await doSomeThing();\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2FbeforeStartUrl.md"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},48367:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"是否开启 Hot Module Replacement 热更新能力。"}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"hmr"})," 设置为 ",(0,c.jsx)(n.code,{children:"false"})," 时，将不再提供热更新和 react-refresh 功能。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    hmr: false,\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2Fhmr.md"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},37852:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"string"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"0.0.0.0"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"指定 dev server 启动时监听的 host。"}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，dev server 会监听 ",(0,c.jsx)(n.code,{children:"0.0.0.0"}),"，这代表监听所有的网络接口，包括 ",(0,c.jsx)(n.code,{children:"localhost"})," 和公网地址。"]}),"\n",(0,c.jsxs)(n.p,{children:["如果你希望 dev server 只监听 ",(0,c.jsx)(n.code,{children:"localhost"}),"，可以设置为："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    host: 'localhost',\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2Fhost.md"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},44941:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h4:"h4",a:"a",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"配置该选项后，可以开启 Dev Server 对 HTTPS 的支持，同时会禁用 HTTP 服务器。"}),"\n",(0,c.jsx)(n.p,{children:"开启前："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,c.jsx)(n.p,{children:"开启后："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"  > Local:    https://localhost:8080/\n  > Network:  https://192.168.0.1:8080/\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"自动生成证书",children:["自动生成证书",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动生成证书",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以直接将 ",(0,c.jsx)(n.code,{children:"https"})," 设置为 ",(0,c.jsx)(n.code,{children:"true"}),"，Builder 会基于 ",(0,c.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," 来自动生成 Dev Server 所需的 HTTPS 证书。"]}),"\n",(0,c.jsxs)(n.p,{children:["使用这种方式时，你需要在当前项目中手动安装 ",(0,c.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," 依赖："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n# yarn\nyarn add devcert@1.2.2 -D\n\n# pnpm\npnpm add devcert@1.2.2 -D\n"})}),"\n",(0,c.jsxs)(n.p,{children:["然后配置 ",(0,c.jsx)(n.code,{children:"dev.https"})," 为 ",(0,c.jsx)(n.code,{children:"true"})," 即可："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"该方式有一定局限性，由于 devcert 目前不支持 IP addresses，因此访问 Network 域名时，会遇到「您的连接不是私密连接」的问题。"}),"\n",(0,c.jsx)(n.p,{children:"此问题的解决方法为：点击 Chrome 浏览器问题页面的「高级」->「继续前往 192.168.0.1（不安全）」。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["https 代理自动安装证书需要获取 root 权限, 请根据提示输入密码即可。 ",(0,c.jsx)(n.strong,{children:"密码仅在信任证书时使用，不会泄漏或者用于其他环节"}),"。\n"]})})]}),"\n",(0,c.jsxs)(n.h4,{id:"手动设置证书",children:["手动设置证书",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#手动设置证书",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你也可以在 ",(0,c.jsx)(n.code,{children:"dev.https"})," 选项中手动传入 HTTPS 服务器所需要的证书和对应的私钥，这个参数将直接传递给 Node.js 中 https 模块的 createServer。"]}),"\n",(0,c.jsxs)(n.p,{children:["具体可以参考 ",(0,c.jsx)(n.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2Fhttps.md"]={toc:[{text:"自动生成证书",id:"自动生成证书",depth:4},{text:"手动设置证书",id:"手动设置证书",depth:4}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},99167:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"number"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"设置 Dev Server 监听的端口号。"}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，Dev Server 会监听 8080 端口，并在端口被占用时自动递增端口号。"}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["将端口设置为 ",(0,c.jsx)(n.code,{children:"3000"}),"："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    port: 3000,\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2Fport.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},23150:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type ProgressBar =\n  | boolean\n  | {\n      id?: string;\n    };\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"是否在编译过程中展示进度条。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    progressBar: false,\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["如果需要修改进度条左侧显示的文本内容，可以设置 ",(0,c.jsx)(n.code,{children:"id"})," 选项："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    progressBar: {\n      id: 'Some Text',\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2FprogressBar.md"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}},12725:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"dev.startUrl"})," 用于设置 Dev Server 启动时自动在浏览器中打开的页面 URL。"]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，Dev Server 启动时不会打开任何页面。"}),"\n",(0,c.jsx)(n.p,{children:"你可以设置为如下的值："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    // 打开项目的默认页面，等价于 `http://localhost:<port>`\n    startUrl: true,\n    // 打开指定的页面\n    startUrl: 'http://localhost:8080',\n    // 打开多个页面\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"端口号占位符",children:["端口号占位符",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#端口号占位符",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["由于端口号可能会发生变动，你可以使用 ",(0,c.jsx)(n.code,{children:"<port>"})," 占位符来指代当前端口号，Builder 会自动将占位符替换为实际监听的端口号。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2FstartUrl.md"]={toc:[{text:"端口号占位符",id:"端口号占位符",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}}}]);