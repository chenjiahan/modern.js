(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_troubleshooting_cli_mdx"],{75092:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return o},toc:function(){return t},default:function(){return i}});var a=s("12151"),c=s("21447");let r={sidebar_position:2},o="CLI FAQ",t=[{text:"Can't pass command line arguments correctly when using pnpm?",depth:3,id:"can't-pass-command-line-arguments-correctly-when-using-pnpm?"}];function d(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",div:"div",button:"button",pre:"pre",strong:"strong"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"cli-faq",children:["CLI FAQ",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-faq",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"can\\'t-pass-command-line-arguments-correctly-when-using-pnpm?",children:["Can't pass command line arguments correctly when using pnpm?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#can\\'t-pass-command-line-arguments-correctly-when-using-pnpm?",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"The pnpm v6 and pnpm v7 versions do not use the same posture when executing commands. The following should be noted:"}),"\n",(0,a.jsx)(n.p,{children:"pnpm v7:"}),"\n",(0,a.jsxs)(n.p,{children:["When using pnpm to invoke a command in ",(0,a.jsx)(n.code,{children:"package.json"}),", if you need to pass arguments to pnpm, you need to put the arguments before the command."]}),"\n",(0,a.jsx)(n.p,{children:"For example, execute the prepare command with the pnpm '--filter' parameter:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:'pnpm run --filter "./packages/**" prepare\n'})})]})}),"\n",(0,a.jsx)(n.p,{children:"If you need to pass parameters to a command, you need to put the parameters after the command."}),"\n",(0,a.jsxs)(n.p,{children:["For example, in the following ",(0,a.jsx)(n.code,{children:"package.json"})," configuration:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})})]})}),"\n",(0,a.jsx)(n.p,{children:"The way to carry parameters when executing the command command is:"}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run command --options\n"})})]})}),"\n",(0,a.jsx)(n.p,{children:"pnpm v6:"}),"\n",(0,a.jsxs)(n.p,{children:["In the following ",(0,a.jsx)(n.code,{children:"package.json"})," configuration:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsxs)(n.div,{className:"modern-code-content",children:[(0,a.jsx)(n.button,{className:"copy"}),(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})})]})}),"\n",(0,a.jsxs)(n.p,{children:["If you need to execute ",(0,a.jsx)(n.code,{children:"modern command --option"}),","]}),"\n",(0,a.jsxs)(n.p,{children:["When using pnpm, you need to execute the ",(0,a.jsx)(n.code,{children:"pnpm run command -- --option"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This is because pnpm does not handle command parameters the same as Yarn, but is similar to npm: when not adding a ",(0,a.jsx)(n.code,{children:"--"})," character string, the parameters of pnpm are passed; when using a ",(0,a.jsx)(n.code,{children:"--"})," character string, the parameters of the execution script are passed."]}),"\n",(0,a.jsxs)(n.p,{children:["In the above example the parameter ",(0,a.jsx)(n.code,{children:"--option"})," is passed to ",(0,a.jsx)(n.code,{children:"modern command"}),". If ",(0,a.jsx)(n.code,{children:"pnpm run command --option"})," is executed, the parameter ",(0,a.jsx)(n.code,{children:"--option"})," will be passed to pnpm."]}),"\n",(0,a.jsx)(n.p,{children:"Summary:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"When using pnpm v7, if you pass arguments to pnpm, you need to put the arguments before the command"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["When using pnpm v6, if the parameter passed to pnpm, you do not need to add ",(0,a.jsx)(n.code,{children:"--"}),"; if the parameter passed is for script use, you need to add ",(0,a.jsx)(n.code,{children:"--"})," character string"]}),"."]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);