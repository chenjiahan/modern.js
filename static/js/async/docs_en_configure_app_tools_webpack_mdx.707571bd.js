(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_webpack_mdx"],{45848:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("12151"),c=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",blockquote:"blockquote",h3:"h3",div:"div",button:"button",pre:"pre",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})," | ",(0,r.jsx)(n.code,{children:"Function"})," | ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.webpack"})," is used to configure ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.webpackChain"})," is also used to modify the webpack configuration, and the function is more powerful. It is recommended to use ",(0,r.jsx)(n.code,{children:"tools.webpackChain"})," first."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can configure it as an object, which will be merged with the original webpack configuration through ",(0,r.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),". For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"You can also configure it as a function, which accepts one parameter, the original webpack configuration, you can modify this configuration, and then return a new configuration. For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"The second parameter of this function is an object that contains some information about the tool collection. Details are as follows:"}),"\n",(0,r.jsxs)(n.h3,{id:"utils",children:["Utils",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"env",children:["env",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"isProd"})," parameter can be used to determine whether the current environment is production. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"target",children:["target",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"target"})," parameter can be used to determine the current target. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"node"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"webpack",children:["webpack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"typeof import('webpack')"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The webpack instance. For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { webpack }) => {\n      config.plugins.push(new webpack.ProgressPlugin());\n      return config;\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"typeof import('html-webpack-plugin')"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The HtmlWebpackPlugin instance:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"addrules",children:["addRules",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addrules",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(rules: RuleSetRule | RuleSetRule[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Add additional ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#modulerules",target:"_blank",rel:"noopener noreferrer",children:"webpack rules"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { addRules }) => {\n      // add a single rule\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // Add multiple rules as an array\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"prependplugins",children:["prependPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prependplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Add additional plugins to the head of the internal webpack plugins array, and the plugin will be executed first."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { prependPlugins, webpack }) => {\n      // add a single plugin\n      prependPlugins(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n\n      // Add multiple plugins\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"appendplugins",children:["appendPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appendplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Add additional plugins at the end of the internal webpack plugins array, the plugin will be executed last."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { appendPlugins, webpack }) => {\n      // add a single plugin\n      appendPlugins([\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      ]);\n\n      // Add multiple plugins\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"removeplugin",children:["removePlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(name: string) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Remove the internal webpack plugin, the parameter is the ",(0,r.jsx)(n.code,{children:"constructor.name"})," of the plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, remove the internal ",(0,r.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { removePlugin }) => {\n      removePlugin('ForkTsCheckerWebpackPlugin');\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"mergeconfig",children:["mergeConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mergeconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(...configs: WebpackConfig[]) => WebpackConfig"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Used to merge multiple webpack configs, same as ",(0,r.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { mergeConfig }) => {\n      return mergeConfig(config, {\n        devtool: 'eval',\n      });\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"getcompiledpath",children:["getCompiledPath",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Get the path to the builder built-in dependencies, same as ",(0,r.jsx)(n.a,{href:"/api/config-tools.html#tools.webpackchain",children:"webpackChain#getCompiledPath"}),"."]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},30986:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return d},default:function(){return t}});var r=s("12151"),c=s("23169"),a=s.ir(s("45848")),l={sidebar_label:"webpack"},i="tools.webpack",d=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"tools-webpack",children:["tools.webpack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-webpack",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpack",target:"_blank",rel:"noopener noreferrer",children:"tools.webpack"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(a.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);