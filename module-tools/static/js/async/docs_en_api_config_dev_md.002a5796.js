(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_en_api_config_dev_md"],{83668:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return d}});var r,s=o("15169"),i=o("43932"),c=o("9880"),a=o("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote",h3:"h3",img:"img",h4:"h4"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"dev",children:["dev",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"This section describes all configuration of Module Tools related to debugging tools."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      /* Storybook Config */\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"storybook",children:["storybook",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Requirements"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Turn on Storybook debugging or install the ",(0,c.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," plugin."]}),"\n",(0,c.jsxs)(n.li,{children:["Register the ",(0,c.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," plugin。"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["For more information on how to enable Storybook debugging, please refer to：",(0,c.jsx)(n.a,{href:"/guide/basic/use-micro-generator#storybook",children:'"Storybook"'})]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"storybookwebpack",children:["storybook.webpack",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybookwebpack",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type"}),": ",(0,c.jsx)(n.code,{children:"object | Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default"}),": ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      webpack(config) {\n        return config;\n      },\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can modify the webpack configuration of the Storybook Preview-iframe via ",(0,c.jsx)(n.code,{children:"dev.storybook.webpack"}),". The usage can be found in the ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpack",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"tools.webpack"})})," configuration of Modern.js Builder."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://storybook.js.org/71522ac365feaf3338d7c242e53378f6/manager-preview.png",alt:"Storybook"})}),"\n",(0,c.jsxs)(n.h4,{id:"configure-manager-app",children:["Configure Manager App",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-manager-app",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["For the webpack configuration of the Storybook Manager app section, you can configure it by adding the ",(0,c.jsx)(n.code,{children:"./config/storybook/main.js"})," file to configure it."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"storybookwebpackchain",children:["storybook.webpackChain",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybookwebpackchain",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type"}),": ",(0,c.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default"}),": ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      webpackChain(chain) {\n        return chain;\n      },\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["You can modify the webpack configuration of the Storybook Preview-iframe via ",(0,c.jsx)(n.code,{children:"dev.storybook.webpackChain"}),". You can refer to Modern.js Builder's ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"tools.webpackChain"})})," configuration for how to use it."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig%2Fdev.md"]={toc:[{text:"storybook",id:"storybook",depth:2},{text:"storybook.webpack",id:"storybookwebpack",depth:3},{text:"Configure Manager App",id:"configure-manager-app",depth:4},{text:"storybook.webpackChain",id:"storybookwebpackchain",depth:3}],title:"dev",frontmatter:{sidebar_position:3}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,c.jsx)(t,(0,s._)({},e))})):t(e)}}}]);