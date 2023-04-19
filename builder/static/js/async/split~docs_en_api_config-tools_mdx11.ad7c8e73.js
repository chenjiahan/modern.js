(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-tools_mdx11"],{53499:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return l},toc:function(){return c},default:function(){return o}});var d=s("12151"),i=s("23169"),r={},l="",c=[{text:"Function Type",depth:3,id:"function-type"},{text:"Object Type",depth:3,id:"object-type"},{text:"Util Functions",depth:3,id:"util-functions"},{text:"addPlugins",depth:4,id:"addplugins"},{text:"addPresets",depth:4,id:"addpresets"},{text:"removePlugins",depth:4,id:"removeplugins"},{text:"removePresets",depth:4,id:"removepresets"},{text:"addIncludes",depth:4,id:"addincludes"},{text:"addExcludes",depth:4,id:"addexcludes"},{text:"modifyPresetEnvOptions",depth:4,id:"modifypresetenvoptions"},{text:"modifyPresetReactOptions",depth:4,id:"modifypresetreactoptions"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",button:"button",pre:"pre",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["By ",(0,d.jsx)(n.code,{children:"tools.babel"})," you can modify the options of ",(0,d.jsx)(n.a,{href:"https://github.com/babel/babel-loader",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"}),"."]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"When using Rspack as a packaging tool, using this configuration item will slow down Rspack builds a bit. Because Rspack uses SWC compilation by default, there will be additional compilation overhead when configuring the Babel."})})]}),"\n",(0,d.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"tools.babel"}),"'s type is Function, the default babel config will be passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result. The second parameter provides some util functions that can be called directly:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      // Add a babel plugin\n      // note: the plugin have been added to the default config to support antd load on demand\n      config.plugins.push([\n        'babel-plugin-import',\n        {\n          libraryName: 'xxx-components',\n          libraryDirectory: 'es',\n          style: true,\n        },\n      ]);\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["The above example is just for reference, usually you don't need to manually configure ",(0,d.jsx)(n.code,{children:"babel-plugin-import"}),", because the Builder already provides a more general ",(0,d.jsx)(n.code,{children:"source.transformImport"})," configuration.\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"tools.babel"}),"'s type is ",(0,d.jsx)(n.code,{children:"Object"}),", the config will be shallow merged with default config by ",(0,d.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive caution",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["Note that ",(0,d.jsx)(n.code,{children:"Object.assign"})," is a shallow copy and will completely overwrite the built-in ",(0,d.jsx)(n.code,{children:"presets"})," or ",(0,d.jsx)(n.code,{children:"plugins"})," array, please use it with caution.\n"]})})]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel: {\n      plugins: [\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ],\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.h3,{id:"util-functions",children:["Util Functions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"tools.babel"})," is a Function, the tool functions available for the second parameter are as follows:"]}),"\n",(0,d.jsxs)(n.h4,{id:"addplugins",children:["addPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(plugins: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add some Babel plugins. For example:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ]);\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"addpresets",children:["addPresets",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpresets",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(presets: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add Babel preset configuration. (No need to add presets in most cases)"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPresets }) {\n      addPresets(['@babel/preset-env']);\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"removeplugins",children:["removePlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(plugins: string | string[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"To remove the Babel plugin, just pass in the name of the plugin to be removed, you can pass in a single string or an array of strings."}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePlugins }) {\n      removePlugins('babel-plugin-import');\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"removepresets",children:["removePresets",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removepresets",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(presets: string | string[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"To remove the Babel preset configuration, pass in the name of the preset to be removed, you can pass in a single string or an array of strings."}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePresets }) {\n      removePresets('@babel/preset-env');\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(includes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["By default, Babel will only compile the application code in the src directory. With ",(0,d.jsx)(n.code,{children:"addIncludes"})," you can specify that Babel compile some files in node_modules. For example:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addIncludes }) {\n      addIncludes(/\\/query-string\\//);\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["The usage of the ",(0,d.jsx)(n.code,{children:"addIncludes"})," function is basically the same as the ",(0,d.jsx)(n.code,{children:"source.include"})," config, please see the ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceinclude",target:"_blank",rel:"noopener noreferrer",children:"source.include documentation"})," for a more detailed usage. You can also use ",(0,d.jsx)(n.code,{children:"source.include"})," directly instead of the ",(0,d.jsx)(n.code,{children:"addIncludes"})," function.\n"]})})]}),"\n",(0,d.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(excludes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Contrary to ",(0,d.jsx)(n.code,{children:"addIncludes"}),", specifies that certain files are excluded from Babel's compilation."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, without compiling files in the ",(0,d.jsx)(n.code,{children:"src/example"})," directory:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addExcludes }) {\n      addExcludes('src/example');\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["The usage of the ",(0,d.jsx)(n.code,{children:"addExcludes"})," function is basically the same as the ",(0,d.jsx)(n.code,{children:"source.exclude"})," config, please see the ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceexclude",target:"_blank",rel:"noopener noreferrer",children:"source.exclude documentation"})," for a more detailed usage. You can also use ",(0,d.jsx)(n.code,{children:"source.exclude"})," directly instead of the ",(0,d.jsx)(n.code,{children:"addExcludes"})," function.\n"]})})]}),"\n",(0,d.jsxs)(n.h4,{id:"modifypresetenvoptions",children:["modifyPresetEnvOptions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetenvoptions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(options: PresetEnvOptions) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Modify the configuration of ",(0,d.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"}),", the configuration you pass in will be shallowly merged with default config. For example:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetEnvOptions }) {\n      modifyPresetEnvOptions({\n        targets: {\n          browsers: ['last 2 versions'],\n        },\n      });\n    },\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.h4,{id:"modifypresetreactoptions",children:["modifyPresetReactOptions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetreactoptions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(options: PresetReactOptions) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Modify the configuration of ",(0,d.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-react",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-react"}),", the configuration you pass in will be shallowly merged with default config. For example:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetReactOptions }) {\n      modifyPresetReactOptions({\n        pragma: 'React.createElement',\n      });\n    },\n  },\n};\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);