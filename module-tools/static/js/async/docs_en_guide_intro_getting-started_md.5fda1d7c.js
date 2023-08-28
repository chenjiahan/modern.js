(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_en_guide_intro_getting-started_md"],{52326:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var o,s=i("15169"),d=i("43932"),r=i("9880"),t=i("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code",div:"div",blockquote:"blockquote",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"3-minute-demo",children:["3 minute demo",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-minute-demo",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Want to experience Module Tools in action? The only prerequisite you need is ",(0,r.jsx)(n.a,{href:"https://github.com/nodejs/Release",target:"_blank",rel:"noopener noreferrer",children:"Node.js LTS"})," and make sure your Node version is ",(0,r.jsx)(n.strong,{children:">= 14.18.0"}),".We recommend using the LTS version of Node.js 18."]}),"\n",(0,r.jsxs)(n.h3,{id:"create-new-project",children:["Create new project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-new-project",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If you want to create a complete module project, you can execute the following command:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create your-project-dir-name\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"npx @modern-js/create -h"})," for more command line arguments\n"]})})]}),"\n",(0,r.jsx)(n.p,{children:"Next, in the issue interaction, follow the options below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: library\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The project name is the value of the ",(0,r.jsx)(n.code,{children:'"name"'})," field in ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Then the process of initializing the project will start. After the project directory and files are generated and the dependencies are installed, a complete module project is created."}),"\n",(0,r.jsxs)(n.p,{children:["We can start the project build directly with the ",(0,r.jsx)(n.code,{children:"pnpm build"})," command, and start the build in watching mode with the ",(0,r.jsx)(n.code,{children:"pnpm build --watch"})," command."]}),"\n",(0,r.jsxs)(n.h3,{id:"add-to-an-existing-project",children:["Add to an existing project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-to-an-existing-project",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"From your shell, install the following dependencies in your project."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"@modern-js/module-tools"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'"typescript"'})," (omitted if not a TypeScript project)"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If it's a TypeScript project, add the ",(0,r.jsx)(n.code,{children:'"typescript"'})," dependency."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install -D @modern-js/module-tools typescript\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For projects that use pnpm or the Yarn package manager, just replace npm. ",(0,r.jsx)(n.strong,{children:"pnpm is recommended"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Next, create the ",(0,r.jsx)(n.code,{children:"modern.config.(t|j)s"})," file in the root of the project."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n    plugins: [moduleTools()],\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, add the command ",(0,r.jsx)(n.code,{children:'"build": "modern build"'})," to the project's ",(0,r.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "build": "modern build"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If your project has a ",(0,r.jsx)(n.code,{children:"src/index.(js|jsx)"})," file or both ",(0,r.jsx)(n.code,{children:"src/index.(ts|tsx)"})," and ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," files, then congratulations you can run the ",(0,r.jsx)(n.code,{children:"npm run build"})," command directly to build your project with Module Tools."]}),"\n",(0,r.jsxs)(n.h3,{id:"core-npm-package",children:["Core npm Package",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-npm-package",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@modern-js/module-tools"})," is the core npm package of Module Tools, providing the following capabilities:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["It offers commonly used CLI commands such as ",(0,r.jsx)(n.code,{children:"modern dev"}),", ",(0,r.jsx)(n.code,{children:"modern build"}),", and more."]}),"\n",(0,r.jsx)(n.li,{children:"It integrates Modern.js Core, providing capabilities for configuration parsing, plugin loading, and more."}),"\n",(0,r.jsx)(n.li,{children:"It integrates esbuild and SWC, providing build capabilities."}),"\n",(0,r.jsxs)(n.li,{children:["It integrates some commonly used plugins, such as ",(0,r.jsx)(n.code,{children:"plugin-lint"}),", ",(0,r.jsx)(n.code,{children:"plugin-changeset"}),", and others."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@modern-js/module-tools"})," is implemented based on the plugin system of Modern.js. Essentially, it is a plugin. Therefore, you need to register ",(0,r.jsx)(n.code,{children:"moduleTools"})," in the ",(0,r.jsx)(n.code,{children:"plugins"})," field of the configuration file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"view-official-example",children:["View official example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#view-official-example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"If you want to see the complete project using the modular engineering scheme, you can execute the following command"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/web-infra-dev/module-tools-examples\ncd module-tools-example/base\n\n## Execute the build.\npnpm build\n\n## Execute the build in listening mode.\npnpm build --watch\n\n## Start Storybook\npnpm dev storybook\n\n## Test\npnpm test\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"lets-get-started",children:["Let's get started",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lets-get-started",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Choose your tutorial scenario..."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["I'm a beginner and need to learn ",(0,r.jsx)(n.a,{href:"/en/guide/basic/before-getting-started",children:"basic usage"})," of Module Tools."]}),"\n",(0,r.jsxs)(n.li,{children:["I have learned the basic usage of Module Tools and can learn ",(0,r.jsx)(n.a,{href:"/en/guide/advance/in-depth-about-build",children:"advanced usage"})," of Module Tools."]}),"\n",(0,r.jsxs)(n.li,{children:["I need to expand my project capabilities and need to learn how to develop ",(0,r.jsx)(n.a,{href:"/en/plugins/guide/getting-started",children:"plugins"})," for Module Tools."]}),"\n"]})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fintro%2Fgetting-started.md"]={toc:[{text:"3 minute demo",id:"3-minute-demo",depth:2},{text:"Create new project",id:"create-new-project",depth:3},{text:"Add to an existing project",id:"add-to-an-existing-project",depth:3},{text:"Core npm Package",id:"core-npm-package",depth:3},{text:"View official example",id:"view-official-example",depth:3},{text:"Let\\'s get started",id:"lets-get-started",depth:2}],title:"Quick Start",frontmatter:{sidebar_position:3}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,d._)((0,s._)({},e),{children:(0,r.jsx)(l,(0,s._)({},e))})):l(e)}}}]);