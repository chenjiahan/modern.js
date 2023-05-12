(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_get-started_glossary_mdx"],{66443:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return d}});var s=n("9880"),i=n("23169");function a(e){var r=Object.assign({p:"p",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Builder 指的是构建引擎，它的目标是「复用构建工具的最佳实践」。"}),"\n",(0,s.jsx)(r.p,{children:"因为 webpack 等打包工具是比较底层的，如果我们基于 webpack 来构建一个项目，需要充分理解 webpack 的各个配置项和三方插件，并进行繁琐的配置组合和调试工作。"}),"\n",(0,s.jsx)(r.p,{children:"而 Builder 比 Bundler 的封装程度更高，并默认集成代码转换、代码压缩等能力。通过接入 Builder，你可以快速获得构建 Web 应用的能力。"}),"\n",(0,s.jsx)(r.p,{children:"Modern.js Builder 内部的分层如下："}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png",alt:""})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},51905:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return d}});var s=n("9880"),i=n("23169");function a(e){var r=Object.assign({p:"p",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["指 ",(0,s.jsx)(r.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),"、",(0,s.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 等模块打包工具。"]}),"\n",(0,s.jsx)(r.p,{children:"打包工具的主要目标是将 JavaScript、CSS 等文件打包在一起，打包后的文件可以在浏览器、Node.js 等环境中使用。当 Bundler 处理 Web 应用时，它会构建一个依赖关系图，其中包含应用需要的各个模块，然后将所有模块打包成一个或多个 bundle。"})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},6016:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return h},title:function(){return l},toc:function(){return o},default:function(){return p}});var s=n("9880"),i=n("23169"),a=n.ir(n("51905")),d=n.ir(n("66443")),t=n.ir(n("24504")),c=n.ir(n("42011")),h={sidebar_position:4},l="名词解释",o=[{text:"BFF",depth:2,id:"bff"},{text:"Bundler",depth:2,id:"bundler"},{text:"Builder",depth:2,id:"builder"},{text:"CSR",depth:2,id:"csr"},{text:"Garfish",depth:2,id:"garfish"},{text:"Rspack",depth:2,id:"rspack"},{text:"SSR",depth:2,id:"ssr"},{text:"SSG",depth:2,id:"ssg"},{text:"SWC",depth:2,id:"swc"}];function u(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"名词解释",children:["名词解释",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#名词解释",children:"#"})]}),"\n",(0,s.jsxs)(r.h2,{id:"bff",children:["BFF",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bff",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:'BFF 是 "Backend For Frontend"（前端的后端） 的缩写。它是一种架构模式，表示为前端应用程序创建一个专门的后台服务。'}),"\n",(0,s.jsx)(r.p,{children:"BFF 服务作为前端应用程序和服务端 API 之间的中介，可以为前端提供定制的 API 供其使用。这允许前端开发者对需要的数据和功能有更多的控制，而不必依赖后端服务提供相应的能力。"}),"\n",(0,s.jsxs)(r.h2,{id:"bundler",children:["Bundler",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(r.h2,{id:"builder",children:["Builder",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(r.h2,{id:"csr",children:["CSR",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#csr",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:'CSR 是 "Client-Side Rendering"（客户端渲染）的缩写。它表示页面是在浏览器中通过 JavaScript 渲染的，数据获取、模板和路由等逻辑都在浏览器端完成，而不是在服务器上。'}),"\n",(0,s.jsx)(r.p,{children:"在 CSR 中，服务器会向浏览器端发送一个空的 HTML 外壳和一些 JavaScript 脚本，然后由浏览器端从服务器的 API 中拉取数据，并将动态内容渲染到页面中。"}),"\n",(0,s.jsxs)(r.h2,{id:"garfish",children:["Garfish",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#garfish",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://garfish.bytedance.net/",target:"_blank",rel:"noopener noreferrer",children:"Garfish"})," 是一套微前端解决方案，主要用于解决 web 应用的跨团队协作、技术体系多样化等问题。"]}),"\n",(0,s.jsx)(r.p,{children:"它从架构层面出发，将多个独立交付的前端应用组成整体，这些前端应用能够独立开发、独立测试、独立部署，但是在用户视角仍然是内聚的单个产品。"}),"\n",(0,s.jsxs)(r.h2,{id:"rspack",children:["Rspack",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(r.h2,{id:"ssr",children:["SSR",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:'SSR 是 "Server-Side Rendering"（服务器端渲染）的缩写。它表示由服务器生成网页的 HTML，并将其发送给客户端，而不是只发送一个空的 HTML 外壳，并依赖 JavaScript 来生成页面内容。'}),"\n",(0,s.jsx)(r.p,{children:"在传统的客户端渲染中，服务器会向客户端发送一个空的 HTML 外壳和一些 JavaScript 脚本，然后从服务器的 API 中获取数据，并用动态内容填充页面。这会导致页面的初始加载时间较慢，不利于用户体验和 SEO。"}),"\n",(0,s.jsx)(r.p,{children:"使用 SSR 后，服务器会生成已经包含动态内容的 HTML，并将其发送给客户端。这使得首屏加载速度更快，并对 SEO 更加友好，因为搜索引擎可以爬取到渲染后的页面。"}),"\n",(0,s.jsxs)(r.h2,{id:"ssg",children:["SSG",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ssg",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:'SSG 是 "Static Site Generation"（静态网站生成）的缩写。它表示网页被预先渲染成静态的 HTML，然后直接提供给客户端，而不需要服务器实时生成 HTML。'}),"\n",(0,s.jsx)(r.p,{children:"在传统的 SSR 中，每当用户请求一个页面时，服务器就会实时生成 HTML。有了 SSG，HTML 可以在构建过程中被提前生成，并被托管在 CDN 或其他静态资源服务中。"}),"\n",(0,s.jsx)(r.p,{children:"与传统的 SSR 相比，SSG 可以提供更快的加载速度以及更少的服务端开销，因为不需要维护一个服务器来实时生成 HTML。然而，SSG 不适合需要动态内容的网站，因为 HTML 是在构建过程中生成的，不支持实时更新。"}),"\n",(0,s.jsxs)(r.h2,{id:"swc",children:["SWC",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#swc",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}}}]);