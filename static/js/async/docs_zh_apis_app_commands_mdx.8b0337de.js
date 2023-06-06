(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_commands_mdx"],{33267:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return o},default:function(){return l}});var r=d("9880"),s=d("23169"),i={sidebar_position:1},c="命令",o=[{text:"modern dev",depth:2,id:"modern-dev"},{text:"编译部分页面",depth:3,id:"编译部分页面"},{text:"通过参数指定页面",depth:3,id:"通过参数指定页面"},{text:"modern start",depth:2,id:"modern-start"},{text:"modern build",depth:2,id:"modern-build"},{text:"分析构建产物体积",depth:3,id:"分析构建产物体积"},{text:"modern new",depth:2,id:"modern-new"},{text:"添加入口",depth:3,id:"添加入口"},{text:"启用可选功能",depth:3,id:"启用可选功能"},{text:"modern serve",depth:2,id:"modern-serve"},{text:"modern upgrade",depth:2,id:"modern-upgrade"},{text:"modern inspect",depth:2,id:"modern-inspect"},{text:"指定环境",depth:3,id:"指定环境"},{text:"完整内容",depth:3,id:"完整内容"},{text:"SSR 构建配置",depth:3,id:"ssr-构建配置"},{text:"modern lint",depth:2,id:"modern-lint"},{text:"modern test",depth:2,id:"modern-test"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",img:"img",blockquote:"blockquote",div:"div",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"命令",children:["命令",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#命令",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 内置了一些命令，可以帮助你快速启动开发服务器、构建生产环境代码等。"}),"\n",(0,r.jsx)(n.p,{children:"通过本章节，你可以了解到 Modern.js 内置的命令有哪些，以及如何使用这些命令。"}),"\n",(0,r.jsxs)(n.h2,{id:"modern-dev",children:["modern dev",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-dev",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern dev"})," 命令用于启动一个本地开发服务器，对源代码进行开发环境编译。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: modern dev [options]\n\nOptions:\n  -e --entry <entry>    指定入口，只编译特定的页面\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -h, --help            显示命令帮助\n  --analyze             分析构建产物体积，查看各个模块打包后的大小\n  --web-only            仅启动 Web 服务\n  --api-only            仅启动 API 接口服务\n"})}),"\n",(0,r.jsxs)(n.p,{children:["运行 ",(0,r.jsx)(n.code,{children:"modern dev"})," 后，Modern.js 会监听源文件变化并进行模块热更新。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"编译部分页面",children:["编译部分页面",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编译部分页面",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在多页面（MPA）项目中，可以添加 ",(0,r.jsx)(n.code,{children:"--entry"})," 参数来指定编译其中的一个或多个页面。这样可以只编译项目中的部分代码，从而提升 dev 启动速度。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如执行 ",(0,r.jsx)(n.code,{children:"modern dev --entry"}),"，在命令行界面中会展示入口选择框："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ modern dev --entry\n\n? 请选择需要构建的入口\n❯ ◯ foo\n  ◯ bar\n  ◯ baz\n"})}),"\n",(0,r.jsxs)(n.p,{children:["比如选择 ",(0,r.jsx)(n.code,{children:"foo"})," 入口，那么只有 ",(0,r.jsx)(n.code,{children:"foo"})," 入口相关的代码会进行编译，其他页面的代码将不会参与构建。"]}),"\n",(0,r.jsxs)(n.h3,{id:"通过参数指定页面",children:["通过参数指定页面",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过参数指定页面",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你也可以在 ",(0,r.jsx)(n.code,{children:"--entry"})," 后面通过参数来指定页面名称，多个页面的名称使用逗号分隔。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# 编译 foo 页面\nmodern dev --entry foo\n\n# 编译 foo 和 bar 页面\nmodern dev --entry foo,bar\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"modern-start",children:["modern start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-start",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern start"})," 是 ",(0,r.jsx)(n.code,{children:"modern dev"})," 命令的别名，两者的功能和用法完全一致。"]}),"\n",(0,r.jsxs)(n.h2,{id:"modern-build",children:["modern build",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-build",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern build"})," 命令默认会在 ",(0,r.jsx)(n.code,{children:"dist/"})," 目录下构建出可用于生产环境的产物。你可以通过修改配置 ",(0,r.jsx)(n.a,{href:"/configure/app/output/dist-path",children:(0,r.jsx)(n.code,{children:"output.distPath"})})," 指定产物的输出目录。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: modern build [options]\n\nOptions:\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -h, --help  显示命令帮助\n  --analyze   分析构建产物体积，查看各个模块打包后的大小\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"分析构建产物体积",children:["分析构建产物体积",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分析构建产物体积",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["执行 ",(0,r.jsx)(n.code,{children:"npx modern build --analyze"})," 命令，可以在打包生产环境代码的同时，产出一个分析构建产物体积的 HTML 文件："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Bundle Analyzer saved report to /example/dist/report.html\nFile sizes after production build:\n\n  122.35 KB  dist/static/js/885.1d4fbe5a.js\n  2.3 KB     dist/static/js/main.4b8e8d64.js\n  761 B      dist/static/js/runtime-main.edb7cf35.js\n  645 B      dist/static/css/main.0dd3ecc1.css\n"})}),"\n",(0,r.jsx)(n.p,{children:"手动在浏览器中打开上述 HTML 文件，可以看到打包产物的瓦片图，并进行包体积分析和优化："}),"\n",(0,r.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["该功能基于 ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"})," 实现。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"modern-new",children:["modern new",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-new",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern new"})," 命令用于在已有项目中添加项目元素。"]}),"\n",(0,r.jsx)(n.p,{children:"比如添加应用入口、启用启用一些可选功能如 Tailwind CSS、微前端开发模式等。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: modern new [options]\n\nOptions:\n  -d, --debug            开启 Debug 模式，打印调试日志信息 (default: false)\n  -c, --config <config>  生成器运行默认配置(JSON 字符串)\n  --dist-tag <tag>       生成器使用特殊的 npm Tag 版本\n  --registry             生成器运行过程中定制 npm Registry\n  -h, --help             显示命令帮助\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"添加入口",children:["添加入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加入口",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在应用工程中，执行 ",(0,r.jsx)(n.code,{children:"new"})," 命令添加入口如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? 请选择你想要的操作 创建工程元素\n? 请选择创建元素类型 新建「应用入口」\n? 请填写入口名称 entry\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"启用可选功能",children:["启用可选功能",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用可选功能",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在应用工程中，执行 ",(0,r.jsx)(n.code,{children:"new"})," 命令启用可选能力如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 (Use arrow keys)\n❯ 启用 「Tailwind CSS」 支持\n  启用「BFF」功能\n  启用「微前端」模式\n  启用「单元测试 / 集成测试」功能\n  启用「Visual Testing (Storybook)」模式\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--config"})," 参数对应参数值需要使用 JSON 字符串。"]}),"\n",(0,r.jsxs)(n.p,{children:["pnpm 暂不支持使用 JSON 字符串作为参数值，可使用 ",(0,r.jsx)(n.code,{children:"npm new"})," 开启相关功能。【",(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/3876",target:"_blank",rel:"noopener noreferrer",children:"相关 Issue"}),"】"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"modern-serve",children:["modern serve",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-serve",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern serve"})," 命令用于在生产环境下启用应用工程, 注意需要提前执行 ",(0,r.jsx)(n.a,{href:"/apis/app/commands#modern-build",children:(0,r.jsx)(n.code,{children:"build"})})," 命令构建出对应产物。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: modern serve [options]\n\nOptions:\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -h, --help            显示命令帮助\n  --web-only            仅启动 Web 服务\n  --api-only            仅启动 API 接口服务\n"})}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，应用将会在 ",(0,r.jsx)(n.code,{children:"localhost:8080"})," 启动，可以通过 ",(0,r.jsx)(n.code,{children:"server.port"})," 修改 Server 端口号："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  server: {\n    port: 8081,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"modern-upgrade",children:["modern upgrade",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-upgrade",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在项目根目录下执行命令 ",(0,r.jsx)(n.code,{children:"npx modern upgrade"}),"，会默认将当前执行命令项目的 ",(0,r.jsx)(n.code,{children:"package.json"})," 中的 Modern.js 相关依赖更新至最新版本。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Usage: modern upgrade [options]\n\nOptions:\n  --registry <registry>  定制 npm registry (default: "")\n  -d,--debug             开启 Debug 模式，打印调试日志信息 (default: false)\n  --cwd <cwd>            项目路径 (default: "")\n  -h, --help             display help for command\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"modern-inspect",children:["modern inspect",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-inspect",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern inspect"})," 命令用于查看项目的 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/builder-config.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder 配置"})," 以及 webpack 配置。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Usage: modern inspect [options]\n\nOptions:\n  --env <env>           查看指定环境下的配置 (default: "development")\n  --output <output>     指定在 dist 目录下输出的路径 (default: "/")\n  --verbose             在结果中展示函数的完整内容\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -h, --help            显示命令帮助\n'})}),"\n",(0,r.jsxs)(n.p,{children:["在项目根目录下执行命令 ",(0,r.jsx)(n.code,{children:"npx modern inspect"})," 后，会在项目的 ",(0,r.jsx)(n.code,{children:"dist"})," 目录生成以下文件："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"builder.config.js"}),": 表示在构建时使用的 Modern.js Builder 配置。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"webpack.config.web.js"}),": 表示在构建时使用的 webpack 配置。"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"➜ npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"指定环境",children:["指定环境",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#指定环境",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，inspect 命令会输出开发环境的配置，你可以添加 ",(0,r.jsx)(n.code,{children:"--env production"})," 选项来输出生产环境的配置："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"modern inspect --env production\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"完整内容",children:["完整内容",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#完整内容",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，inspect 命令会省略配置对象中的函数内容，你可以添加 ",(0,r.jsx)(n.code,{children:"--verbose"})," 选项来输出函数的完整内容："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"modern inspect --verbose\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"ssr-构建配置",children:["SSR 构建配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr-构建配置",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果项目开启了 SSR 能力，则在 ",(0,r.jsx)(n.code,{children:"dist"})," 目录会另外生成一份 ",(0,r.jsx)(n.code,{children:"webpack.config.node.js"})," 文件，对应 SSR 构建时的 webpack 配置。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"➜ npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n  - Webpack Config (node): /root/my-project/dist/webpack.config.node.js\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"modern-lint",children:["modern lint",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-lint",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["运行 ",(0,r.jsx)(n.code,{children:"ESLint"})," 进行代码语法检查。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: modern lint [options] [...files]\n\nlint and fix source files\n\nOptions:\n  --no-fix    disable auto fix source file\n  -h, --help  display help for command\n"})}),"\n",(0,r.jsxs)(n.p,{children:["通常情况下，我们只需要在 ",(0,r.jsx)(n.code,{children:"git commit"})," 阶段通过 ",(0,r.jsx)(n.code,{children:"lint-staged"})," 检查本次提交修改的部分代码。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["设置 ",(0,r.jsx)(n.code,{children:"--no-fix"})," 参数后可以关闭自动修复 lint 错误代码的能力。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"modern-test",children:["modern test",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-test",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modern test"})," 命令会自动运行项目下的测试用例。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: modern test [options]\n\nOptions:\n  -h, --help  显示命令帮助\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["在使用 ",(0,r.jsx)(n.code,{children:"modern test"})," 命令前，需要先通过 ",(0,r.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:(0,r.jsx)(n.code,{children:"new"})})," 命令启用「单元测试 / 集成测试」功能。\n"]})})]}),"\n",(0,r.jsx)(n.p,{children:"效果如下："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern test\n PASS  src/tests/index.test.ts\n  The add method\n    ✓ should work fine. (2ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.994 s, estimated 1 s\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"src"})," 和 ",(0,r.jsx)(n.code,{children:"api"})," 目录下面的 ",(0,r.jsx)(n.code,{children:"*.test.(js|ts)"})," 文件都会被识别为测试用例。\n"]})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);