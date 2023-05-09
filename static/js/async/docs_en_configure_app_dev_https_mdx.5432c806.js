(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_dev_https_mdx"],{827:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=t("12151"),r=t("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h4:"h4",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After configuring this option, you can enable HTTPS Dev Server, and disabling the HTTP Dev Server."}),"\n",(0,s.jsx)(n.p,{children:"HTTP:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"  > Local: http://localhost:8080/\n  > Network: http://192.168.0.1:8080/\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"HTTPS:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"  > Local: https://localhost:8080/\n  > Network: https://192.168.0.1:8080/\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"automatically-generate-certificates",children:["Automatically generate certificates",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generate-certificates",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can directly set ",(0,s.jsx)(n.code,{children:"https"})," to ",(0,s.jsx)(n.code,{children:"true"}),", Builder will automatically generate the HTTPS certificate based on ",(0,s.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When using this method, you need to manually install the ",(0,s.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," dependency in your project:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n#yarn\nyarn add devcert@1.2.2 -D\n\n#pnpm\npnpm add devcert@1.2.2 -D\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Then configure ",(0,s.jsx)(n.code,{children:"dev.https"})," to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"The devcert has some limitations, it does not currently support IP addresses yet."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["The https proxy automatically installs the certificate and needs root authority, please enter the password according to the prompt.",(0,s.jsx)(n.strong,{children:"The password is only used to trust the certificate, and will not be leaked or be used elsewhere"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h4,{id:"manually-set-the-certificate",children:["Manually set the certificate",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-set-the-certificate",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can also manually pass in the certificate and the private key required in the ",(0,s.jsx)(n.code,{children:"dev.https"})," option. This parameter will be directly passed to the createServer method of the https module in Node.js."]}),"\n",(0,s.jsxs)(n.p,{children:["For details, please refer to ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},21827:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return d},default:function(){return o}});var s=t("12151"),r=t("23169"),a=t.ir(t("827")),c={sidebar_label:"https"},i="dev.https",d=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"dev-https",children:["dev.https",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-https",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-dev.html#devhttps",target:"_blank",rel:"noopener noreferrer",children:"dev.https"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(a.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);