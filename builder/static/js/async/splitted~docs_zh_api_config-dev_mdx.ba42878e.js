(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["splitted~docs_zh_api_config-dev_mdx"],{61874:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return l},toc:function(){return i},default:function(){return o}});var r=n("12151");let l=void 0,i=[{id:"自动生成证书",text:"自动生成证书",depth:4},{id:"手动设置证书",text:"手动设置证书",depth:4}];function c(s){let e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span",h4:"h4",a:"a"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," ",(0,r.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"配置该选项后，可以开启 Dev Server 对 HTTPS 的支持，同时会禁用 HTTP 服务器。"}),"\n",(0,r.jsx)(e.p,{children:"开启前："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    http://localhost:8080/"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  http://192.168.0.1:8080/"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"开启后："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    https://localhost:8080/"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  https://192.168.0.1:8080/"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h4,{id:"自动生成证书",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自动生成证书",children:"#"}),"自动生成证书"]}),"\n",(0,r.jsxs)(e.p,{children:["你可以直接将 ",(0,r.jsx)(e.code,{children:"https"})," 设置为 ",(0,r.jsx)(e.code,{children:"true"}),"，Builder 会基于 ",(0,r.jsx)(e.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"nofollow",children:"devcert"})," 来自动生成 Dev Server 所需的 HTTPS 证书。"]}),"\n",(0,r.jsxs)(e.p,{children:["使用这种方式时，你需要在当前项目中手动安装 ",(0,r.jsx)(e.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"nofollow",children:"devcert"})," 依赖："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# npm"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npm install devcert@1.2.2 -D"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# yarn"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"yarn add devcert@1.2.2 -D"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# pnpm"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm add devcert@1.2.2 -D"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["然后配置 ",(0,r.jsx)(e.code,{children:"dev.https"})," 为 ",(0,r.jsx)(e.code,{children:"true"})," 即可："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    https"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"该方式有一定局限性，由于 devcert 目前不支持 IP addresses，因此访问 Network 域名时，会遇到「您的连接不是私密连接」的问题。"}),"\n",(0,r.jsx)(e.p,{children:"此问题的解决方法为：点击 Chrome 浏览器问题页面的「高级」->「继续前往 192.168.0.1（不安全）」。"}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\nhttps 代理自动安装证书需要获取 root 权限, 请根据提示输入密码即可。 ",(0,r.jsx)(e.strong,{children:"密码仅在信任证书时使用，不会泄漏或者用于其他环节"}),"。"]})})]}),"\n",(0,r.jsxs)(e.h4,{id:"手动设置证书",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#手动设置证书",children:"#"}),"手动设置证书"]}),"\n",(0,r.jsxs)(e.p,{children:["你也可以在 ",(0,r.jsx)(e.code,{children:"dev.https"})," 选项中手动传入 HTTPS 服务器所需要的证书和对应的私钥，这个参数将直接传递给 Node.js 中 https 模块的 createServer。"]}),"\n",(0,r.jsxs)(e.p,{children:["具体可以参考 ",(0,r.jsx)(e.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"nofollow",children:"https.createServer"}),"。"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" fs "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'fs'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    https"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      key"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"fs"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".readFileSync"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'certificates/private.pem'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      cert"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"fs"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".readFileSync"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'certificates/public.pem'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);