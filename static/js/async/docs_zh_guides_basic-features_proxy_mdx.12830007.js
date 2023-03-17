(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_basic-features_proxy_mdx"],{45824:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var r=n("12151");function l(s){let e=Object.assign({p:"p",code:"code",a:"a",h3:"h3",div:"div",button:"button",pre:"pre",span:"span",img:"img"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["Modern.js 提供了开箱即用的全局代理插件 ",(0,r.jsx)(e.code,{children:"@modern-js/plugin-proxy"}),"，该插件底层基于 ",(0,r.jsx)(e.a,{href:"https://github.com/avwo/whistle",target:"_blank",rel:"nofollow",children:"whistle"}),"，可用来查看、修改 HTTP/HTTPS 的请求和响应，也可作为 HTTP 代理服务器使用。"]}),"\n",(0,r.jsxs)(e.h3,{id:"设置代理规则",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#设置代理规则",children:"#"}),"设置代理规则"]}),"\n",(0,r.jsxs)(e.p,{children:["引入代理插件并填写规则后，执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"}),"，Modern.js 会在开发服务器启动之后，自动启用代理服务器。"]}),"\n",(0,r.jsxs)(e.p,{children:["具体代理规则，可通过 ",(0,r.jsx)(e.a,{href:"/configure/app/dev/proxy.html",children:(0,r.jsx)(e.code,{children:"dev.proxy"})})," 选项或 ",(0,r.jsx)(e.code,{children:"config/proxy.js"})," 文件进行设置。"]}),"\n",(0,r.jsxs)(e.h3,{id:"代理服务器-ui-界面",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#代理服务器-ui-界面",children:"#"}),"代理服务器 UI 界面"]}),"\n",(0,r.jsxs)(e.p,{children:["安装代理插件并配置代理规则后， 执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"})," 命令："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  App running at:"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Local:    http://localhost:8080/"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Network:  http://192.168.0.1:8080/"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"ℹ  info      Starting the proxy server....."})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"✔  success   Proxy Server start on localhost:8899"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"在控制台中可以看到代理服务器成功启动。"}),"\n",(0,r.jsxs)(e.p,{children:["访问 ",(0,r.jsx)(e.code,{children:"http://localhost:8899"}),"，显示下图所示的 UI 界面后，即可通过界面设置规则。"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png",alt:"debug-proxy-ui"})})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(l,s)})):l(s)}},82457:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return t}});var r=n("12151"),l=n.ir(n("45824"));let i={title:"代理",sidebar_position:5},o=[{id:"本地代理",text:"本地代理",depth:2},{id:"全局代理",text:"全局代理",depth:2},{id:"bff-代理",text:"BFF 代理",depth:2}],c="代理";function a(s){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"代理",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#代理",children:"#"}),"代理"]}),"\n",(0,r.jsxs)(e.h2,{id:"本地代理",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#本地代理",children:"#"}),"本地代理"]}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js 在 ",(0,r.jsx)(e.a,{href:"/configure/app/tools/dev-server.html",children:(0,r.jsx)(e.code,{children:"tools.devServer"})})," 中提供了配置开发环境代理的方式。例如，将本地开发接口，代理到线上某个地址："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    devServer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      proxy"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/go/api'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          target"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'http://www.example.com/'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          changeOrigin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["请求 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/go/api"})," 时，会从 ",(0,r.jsx)(e.a,{href:"http://www.example.com/",target:"_blank",rel:"nofollow",children:"http://www.example.com/"})," 返回响应内容。"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"补充信息"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\n配置格式可参考：",(0,r.jsx)(e.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"nofollow",children:"http-proxy-middleware"}),"。"]})})]}),"\n",(0,r.jsxs)(e.h2,{id:"全局代理",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#全局代理",children:"#"}),"全局代理"]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"bff-代理",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-代理",children:"#"}),"BFF 代理"]}),"\n",(0,r.jsxs)(e.p,{children:["通过配置 ",(0,r.jsx)(e.a,{href:"/configure/app/bff/proxy.html",children:(0,r.jsx)(e.code,{children:"bff.proxy"})})," 可以代理 BFF API 请求到指定的服务上，上述两种代理不同，它同样可以用在生产环境："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  bff"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    proxy"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/api/v1'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://cnodejs.org'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["例如代码中使用一体化 BFF 调用时，最终请求 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/api/v1/topics"})," 会自动代理到 ",(0,r.jsx)(e.code,{children:"https://cnodejs.org/api/v1/topics"}),"："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" getTopics "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@api/v1/topics'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getTopics"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(a,s)})):a(s)}}}]);