(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{247:function(e,t,a){"use strict";a.r(t);var s=a(4),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"exceptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[e._v("#")]),e._v(" Exceptions")]),e._v(" "),t("h2",{attrs:{id:"compilation-argument-error-when-webpack-compiling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compilation-argument-error-when-webpack-compiling"}},[e._v("#")]),e._v(" 'compilation' argument error when webpack compiling?")]),e._v(" "),t("p",[e._v("If the following error occurs when compiling, it is usually caused by installing the wrong version of webpack in the project, or installing multiple versions of webpack:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("TypeError: The "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'compilation'")]),e._v(" argument must be an instance of Compilation\n")])])]),t("p",[e._v("The webpack version problem has the following situations:")]),e._v(" "),t("ol",[t("li",[e._v("The webpack dependency is directly declared in the project's package.json, and the version range of the webpack that the Builder depends on is different and cannot match the same version.")]),e._v(" "),t("li",[e._v("Multiple npm packages installed in the project all depend on webpack, and the webpack version ranges they depend on are different and cannot match the same version.")]),e._v(" "),t("li",[e._v("Due to the lock mechanism of the package manager, multiple webpack versions are generated in the lock file.")])]),e._v(" "),t("p",[e._v("In the first case, it is recommended to remove the webpack dependency from the project's package.json. Because Builder encapsulates webpack-related capabilities by default, and will pass in the webpack object in the "),t("RouterLink",{attrs:{to:"/en/api/config-tools.html#tools-webpack"}},[e._v("tools.webpack")]),e._v(" configuration item. Therefore, in most cases, it is not recommended to install additional webpack dependencies in the project.")],1),e._v(" "),t("p",[e._v("In the second case, it is recommended to see if you can upgrade an npm package so that its dependent webpack version range is consistent with the Builder. It is also possible to manually unify versions through the ability of the package manager, e.g. using "),t("a",{attrs:{href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn resolutions"),t("OutboundLink")],1),e._v(" or [pnpm overrides](https 😕/pnpm.io/package_json#pnpmoverrides).")]),e._v(" "),t("p",[e._v("If it is the third case, you can use the two methods mentioned in the second case, or you can try to delete the lock file and reinstall it to solve it.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Deleting the lock file will automatically upgrade the dependency version in the project to the latest version under the specified scope, please test it thoroughly.")])]),e._v(" "),t("h2",{attrs:{id:"find-es6-code-in-the-compiled-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-es6-code-in-the-compiled-files"}},[e._v("#")]),e._v(" Find ES6+ code in the compiled files?")]),e._v(" "),t("p",[e._v("By default, Builder will not compile files under "),t("code",[e._v("node_modules")]),e._v(" through "),t("code",[e._v("babel-loader")]),e._v(" or "),t("code",[e._v("ts-loader")]),e._v(". If the npm package introduced by the project contains ES6+ syntax, it will be packaged into the product.")]),e._v(" "),t("p",[e._v("When this happens, you can specify directories or modules that need to be compiled additionally through the "),t("RouterLink",{attrs:{to:"/en/api/config-source.html#source-include"}},[e._v("source.include")]),e._v(" configuration item.")],1),e._v(" "),t("h2",{attrs:{id:"failed-import-other-modules-in-monorepo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failed-import-other-modules-in-monorepo"}},[e._v("#")]),e._v(" Failed import other modules in Monorepo?")]),e._v(" "),t("p",[e._v("For the sake of compilation performance, by default, Builder will not compile files under "),t("code",[e._v("node_modules")]),e._v(" through "),t("code",[e._v("babel-loader")]),e._v(" or "),t("code",[e._v("ts-loader")]),e._v(", nor will it compile files outside the current project directory.")]),e._v(" "),t("p",[e._v("Through the "),t("code",[e._v("source.include")]),e._v(" configuration item, you can specify directories or modules that require additional compilation.")]),e._v(" "),t("p",[e._v("For details, see "),t("RouterLink",{attrs:{to:"/en/api/config-source.html#source-include"}},[e._v("source.include usage introduction")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"compile-error-you-may-need-additional-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-error-you-may-need-additional-loader"}},[e._v("#")]),e._v(" Compile error "),t("code",[e._v("You may need additional loader")]),e._v("?")]),e._v(" "),t("p",[e._v("If the following error message is encountered during the compilation process, it means that there are individual files that cannot be compiled correctly.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Module parse failed: Unexpected token\nFile was processed with these loaders:\n * some-loader/index.js\n\nYou may need an additional loader to handle the result of these loaders.\n")])])]),t("p",[e._v("Solution:")]),e._v(" "),t("ul",[t("li",[e._v("If the "),t("code",[e._v(".ts")]),e._v(" file outside the current project is referenced, or the "),t("code",[e._v(".ts")]),e._v(" file under node_modules, please add the "),t("RouterLink",{attrs:{to:"/en/api/config-source.html#source-include"}},[e._v("source.include")]),e._v(" configuration Items that specify files that require additional compilation.")],1),e._v(" "),t("li",[e._v("If you refer to a file format that is not supported by Builder, please configure the corresponding webpack loader for compilation.")])]),e._v(" "),t("h2",{attrs:{id:"find-exports-is-not-defined-runtime-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-exports-is-not-defined-runtime-error"}},[e._v("#")]),e._v(" Find "),t("code",[e._v("exports is not defined")]),e._v(" runtime error?")]),e._v(" "),t("p",[e._v("If the compilation is succeed, but the "),t("code",[e._v("exports is not defined")]),e._v(" error appears after opening the page, it is usually because a CommonJS module is compiled by babel.")]),e._v(" "),t("p",[e._v("Under normal circumstances, Builder will not use babel to compile CommonJS modules. If the "),t("RouterLink",{attrs:{to:"/en/api/config-source.html#source-include"}},[e._v("source.include")]),e._v(" configuration item is used in the project, or the [tools.babel](/en/api/config-tools.html#tools -babel) "),t("code",[e._v("addIncludes")]),e._v(" method, some CommonJS modules may be added to the babel compilation.")],1),e._v(" "),t("p",[e._v("There are two workarounds for this problem:")]),e._v(" "),t("ol",[t("li",[e._v("Avoid adding CommonJS modules to babel compilation.")]),e._v(" "),t("li",[e._v("Set babel's "),t("code",[e._v("sourceType")]),e._v(" configuration item to "),t("code",[e._v("unambiguous")]),e._v(", for example:")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("tools")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("babel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sourceType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'unambiguous'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Setting "),t("code",[e._v("sourceType")]),e._v(" to "),t("code",[e._v("unambiguous")]),e._v(" may have some other effects, please refer to "),t("a",{attrs:{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel official documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"react-component-state-lost-after-hmr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-component-state-lost-after-hmr"}},[e._v("#")]),e._v(" React component state lost after HMR?")]),e._v(" "),t("p",[e._v("Builder uses React's official "),t("a",{attrs:{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fast Refresh"),t("OutboundLink")],1),e._v(" capability for component hot update.")]),e._v(" "),t("p",[e._v("When using Fast Refresh, it is required that the component cannot be an anonymous function, otherwise the state of the React component cannot be preserved after hot update.")]),e._v(" "),t("p",[e._v("The following spellings are incorrect:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// wrong spelling 1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// wrong spelling 2")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("The correct spelling is:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Correct spelling 1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("MyComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Correct spelling 2")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("MyComponent")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" MyComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"the-webpack-cache-does-not-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-webpack-cache-does-not-work"}},[e._v("#")]),e._v(" The webpack cache does not work?")]),e._v(" "),t("p",[e._v("Builder enables webpack's persistent cache by default.")]),e._v(" "),t("p",[e._v("After the first compilation is completed, the cache file will be automatically generated and output to the "),t("code",[e._v("./node_modules/.cache/webpack")]),e._v(" directory. When the second compilation is performed, the cache is hit and the compilation speed is greatly improved.")]),e._v(" "),t("p",[e._v("When configuration files such as "),t("code",[e._v("package.json")]),e._v(" are modified, the cache is automatically invalidated.")]),e._v(" "),t("p",[e._v("If the webpack compilation cache in the project has not taken effect, you can add the following configuration for troubleshooting:")]),e._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  tools"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("webpack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("infrastructureLogging "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("infrastructureLogging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        debug"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("After adding the above configuration, webpack will output logs for debugging. Please refer to the logs related to "),t("code",[e._v("PackFileCacheStrategy")]),e._v(" to understand the cause of cache invalidation.")]),e._v(" "),t("h2",{attrs:{id:"tree-shaking-does-not-take-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-does-not-take-effect"}},[e._v("#")]),e._v(" Tree Shaking does not take effect?")]),e._v(" "),t("p",[e._v("Builder will enable the Tree Shaking function of webpack by default during production construction. Whether Tree Shaking can take effect depends on whether the business code can meet the Tree Shaking conditions of webpack.")]),e._v(" "),t("p",[e._v("If you encounter the problem that Tree Shaking does not take effect, you can check whether the "),t("code",[e._v("sideEffects")]),e._v(" configuration of the relevant npm package is correct. If you don't know what "),t("code",[e._v("sideEffects")]),e._v(" is, you can read the following two documents:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack official documentation - Tree Shaking"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://bytedance.feishu.cn/docs/doccn8E1ldDct5uv1EEDQs8Ycwe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tree Shaking Troubleshooting Guide"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"javascript-heap-out-of-memory-when-compiling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-heap-out-of-memory-when-compiling"}},[e._v("#")]),e._v(" JavaScript heap out of memory when compiling?")]),e._v(" "),t("p",[e._v("This error indicates that there is a memory overflow problem during the packaging process. In most cases, it is because the packaged content exceeds the default memory limit of Node.js.")]),e._v(" "),t("p",[e._v("In case of OOM issues, the easiest way to fix this is by increasing the memory cap, Node.js provides the "),t("code",[e._v("--max-old-space-size")]),e._v(" option to set this. You can set this parameter by adding "),t("a",{attrs:{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("NODE_OPTIONS"),t("OutboundLink")],1),e._v(" before the CLI command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_OPTIONS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("--max_old_space_size"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("16384")]),e._v(" modern build\n")])])]),t("p",[e._v("The value of the parameter represents the upper limit of the memory size (MB). Generally, it can be set to "),t("code",[e._v("16384")]),e._v(" (16GB).")]),e._v(" "),t("p",[e._v("The following parameters are explained in more detail in the official Node.js documentation:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("NODE_OPTIONS"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",target:"_blank",rel:"noopener noreferrer"}},[e._v("--max-old-space-size"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("In addition to increasing the memory limit, it is also a solution to improve efficiency by enabling some compilation strategies.")]),e._v(" "),t("h2",{attrs:{id:"division-in-less-file-doesn-t-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#division-in-less-file-doesn-t-work"}},[e._v("#")]),e._v(" Division in Less file doesn't work?")]),e._v(" "),t("p",[e._v("Compared with the v3 version, the Less v4 version has some differences in the way of writing division:")]),e._v(" "),t("div",{staticClass:"language-less extra-class"},[t("pre",{pre:!0,attrs:{class:"language-less"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Less v3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".math")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2px "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1px")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2px ."),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1px")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("2px "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1px")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Less v4")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".math")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2px "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 2px / 2")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2px ."),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1px")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("2px "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1px")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("The built-in Less version of Builder is v4, and the writing method of the lower version will not take effect. Please pay attention to the distinction.")]),e._v(" "),t("p",[e._v("The writing of division in Less can also be modified through configuration items, see "),t("a",{attrs:{href:"https://lesscss.org/usage/#less-options-math",target:"_blank",rel:"noopener noreferrer"}},[e._v("Less - Math"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);