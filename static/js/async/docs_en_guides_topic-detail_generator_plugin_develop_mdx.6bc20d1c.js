(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_develop_mdx"],{20007:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return a},default:function(){return s}});var t=i("9880"),r=i("23169"),o={sidebar_position:3},d="How to develop generator plugins",a=[{text:"Create project",depth:2,id:"create-project"},{text:"Extension type",depth:3,id:"extension-type"},{text:"Customized type",depth:3,id:"customized-type"},{text:"Develop plugin logic",depth:2,id:"develop-plugin-logic"},{text:"Customize input",depth:3,id:"customize-input"},{text:"onForged",depth:3,id:"onforged"},{text:"afterForged",depth:3,id:"afterforged"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"how-to-develop-generator-plugins",children:["How to develop generator plugins",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-develop-generator-plugins",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"create-project",children:["Create project",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js provides a generator plugin to create a generator plugin project, you can directly execute the following command to create:"}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n"})})})}),"\n",(0,t.jsx)(n.p,{children:"Different plugin types will ask different questions. You can choose the plugin type according to your needs."}),"\n",(0,t.jsxs)(n.h3,{id:"extension-type",children:["Extension type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extension-type",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{children:"? Please select the solution you want to create: Npm Module\n? Please select the scene you want to create: Generator Plugin\n? Plugin Package Name: plugin\n? Development Language: TS\n? Package Manager: pnpm\n? Plugin Type: extend\n? Plugin Base Type: Web App\n"})})})}),"\n",(0,t.jsxs)(n.h3,{id:"customized-type",children:["Customized type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customized-type",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{children:"? Plugin Package Name: plugin\n? Development Language: TS\n? Package Manager: pnpm\n? Plugin Type: custom\n? Plugin Key: mobile-app\n? Plugin Show Name: Mobile App\n? Plugin Base Type: Web App\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["After the execution of the create project command is completed, a project for developing the generator plugin will be generated accordingly, and the ",(0,t.jsx)(n.code,{children:"meta"})," information will also be generated according to your selection in the ",(0,t.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For generator plugin development, please refer to ",(0,t.jsx)(n.code,{children:"@modern-js/generator-plugin-plugin"}),". ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/generator/plugins/generator-plugin",target:"_blank",rel:"noopener noreferrer",children:"Source Code"})]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"develop-plugin-logic",children:["Develop plugin logic",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-plugin-logic",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Complete plugin logic development in ",(0,t.jsx)(n.code,{children:"src/index.ts"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The plugin exports a function by default, the function parameter is ",(0,t.jsx)(n.code,{children:"context"}),", and some methods are provided on ",(0,t.jsx)(n.code,{children:"context"})," to directly operate on the current project."]}),"\n",(0,t.jsxs)(n.p,{children:["A brief introduction to the provided methods, the complete API list viewable ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/introduce",children:"Generator Plugin API"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"customize-input",children:["Customize input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-input",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"addInputBefore"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Add input before the default input, such as adding questions before the ",(0,t.jsx)(n.code,{children:"Select package manager"})," question."]}),"\n",(0,t.jsxs)(n.p,{children:["Specific Modern.js configuration viewable for each problem ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"Project Solution Configuration"}),"."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('input2', {\n  type: 'object',\n  properties: {\n    'input1.2': {\n      type: 'string',\n      title: 'input1.2',\n    },\n  },\n});\n"})})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"setInput"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Set attributes of existing problems."}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"context.setInput('test', 'type', 'number');\ncontext.setInput('test', 'enum', [{ value: 'option1', label: '选项一' }]);\n"})})})}),"\n",(0,t.jsxs)(n.h3,{id:"onforged",children:["onForged",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["After the implementation of the hook related operations of the project plan type file is completed, multiple extended inspection will execute its ",(0,t.jsx)(n.code,{children:"onForged"})," function in sequence according to the ",(0,t.jsx)(n.code,{children:"plugin"})," parameter order."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"onForged"})," parameter is a callback function, and the function parameters are ",(0,t.jsx)(n.code,{children:"api"})," and ",(0,t.jsx)(n.code,{children:"input"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Some file manipulation related methods are provided on the ",(0,t.jsx)(n.code,{children:"api"}),", which can operate on the current template file in this hook."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"input"})," is the current user input, which can be used to obtain the current input information and configuration information of the user."]}),"\n",(0,t.jsxs)(n.p,{children:["When you need a new template file, you can add it directly in the ",(0,t.jsx)(n.code,{children:"templates"})," directory. In the ",(0,t.jsx)(n.code,{children:"onForged"})," function, you can directly operate the ",(0,t.jsx)(n.code,{children:"templates"})," directory file. For example, the ",(0,t.jsx)(n.code,{children:"templateFile"})," parameter in the ",(0,t.jsx)(n.code,{children:"addFile"})," below is the file in the ",(0,t.jsx)(n.code,{children:"templates"})," directory. There is no need to display the declaration ",(0,t.jsx)(n.code,{children:"templates"})," here, just write the relative path relative to ",(0,t.jsx)(n.code,{children:"templates"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["API functions supported in ",(0,t.jsx)(n.code,{children:"onForged"})," can also be found in ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/hook/onForged",children:"Generator Plugin API"}),"."]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, input: Record<string, unknown>) => {\n  const { language } = input;\n  api.addFile({\n    type: FileType.Text,\n    file: `src/index.${language as string}`,\n    templateFile: `index.${language as string}.handlebars`,\n    force: true,\n  });\n});\n"})})})}),"\n",(0,t.jsxs)(n.h3,{id:"afterforged",children:["afterForged",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["After the ",(0,t.jsx)(n.code,{children:"onForged"})," function is executed, it can mainly install dependencies, Git operations, etc."]}),"\n",(0,t.jsx)(n.p,{children:"If your project plan is based on the three projects provided by the Modern.js, this hook function may not be required. The default project plan will automatically include the installation dependency and commit code logic."}),"\n",(0,t.jsxs)(n.p,{children:["The generator plugin also supports a customized ",(0,t.jsx)(n.code,{children:"custom"})," type, which only provides a small amount of development-level best practice code, such as ",(0,t.jsx)(n.code,{children:".gitignore"}),", ",(0,t.jsx)(n.code,{children:"editorConfig"})," and other files. In this case, you need to manually supplement the installation dependency and Git operation logic in the ",(0,t.jsx)(n.code,{children:"afterForged"})," function."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"afterForged"})," parameter is also a callback function, and the function parameters are ",(0,t.jsx)(n.code,{children:"api"})," and ",(0,t.jsx)(n.code,{children:"input"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"api"})," will provide some npm, Git and other methods, which can install dependency and Git operations in this hook."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"input"})," is the current user input, which can be used to obtain the current input information and configuration information of the user."]}),"\n",(0,t.jsxs)(n.p,{children:["The API functions supported in ",(0,t.jsx)(n.code,{children:"afterForged"})," can also be found in ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/hook/afterForged",children:"Generator Plugin API"}),"."]})]})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);