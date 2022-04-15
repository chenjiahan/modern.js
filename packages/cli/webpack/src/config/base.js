"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWebpackConfig = void 0;
/* eslint-disable max-lines */
const path_1 = __importDefault(require("path"));
const webpack_chain_1 = __importDefault(require("webpack-chain"));
const utils_1 = require("@modern-js/utils");
const terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
const css_minimizer_webpack_plugin_1 = __importDefault(require("css-minimizer-webpack-plugin"));
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
const webpack_1 = __importStar(require("webpack"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const webpack_merge_1 = require("webpack-merge");
const webpackbar_1 = __importDefault(require("webpackbar"));
const babel_chain_1 = require("@modern-js/babel-chain");
const constants_1 = require("../utils/constants");
const createCSSRule_1 = require("../utils/createCSSRule");
const mergeRegex_1 = require("../utils/mergeRegex");
const getWebpackLogging_1 = require("../utils/getWebpackLogging");
const getBabelOptions_1 = require("../utils/getBabelOptions");
const module_scope_plugin_1 = require("../plugins/module-scope-plugin");
const getSourceIncludes_1 = require("../utils/getSourceIncludes");
const ts_config_paths_plugin_1 = require("../plugins/ts-config-paths-plugin");
const getWebpackAliases_1 = require("../utils/getWebpackAliases");
class BaseWebpackConfig {
    constructor(appContext, options) {
        var _a, _b, _c;
        this.appContext = appContext;
        this.appDirectory = this.appContext.appDirectory;
        this.metaName = this.appContext.metaName;
        this.options = options;
        this.chain = new webpack_chain_1.default();
        this.dist = (0, utils_1.ensureAbsolutePath)(this.appDirectory, this.options.output ? this.options.output.path : '');
        this.jsFilename = (0, utils_1.removeLeadingSlash)(`${(this.options.output
            ? this.options.output.jsPath
            : '').trim()}/[name]${(0, utils_1.isProd)() && !((_a = this.options.output) === null || _a === void 0 ? void 0 : _a.disableAssetsCache)
            ? '.[contenthash:8]'
            : ''}.js`);
        this.jsChunkname = (0, utils_1.removeLeadingSlash)(`${(this.options.output ? this.options.output.jsPath : '').trim()}/[id]${(0, utils_1.isProd)() && !this.options.output.disableAssetsCache
            ? '.[contenthash:8]'
            : ''}.js`);
        this.cssChunkname = (0, utils_1.removeLeadingSlash)(`${(this.options.output
            ? this.options.output.cssPath
            : '').trim()}/[name]${(0, utils_1.isProd)() && !((_b = this.options.output) === null || _b === void 0 ? void 0 : _b.disableAssetsCache)
            ? '.[contenthash:8]'
            : ''}.css`);
        this.mediaChunkname = (0, utils_1.removeLeadingSlash)(`${this.options.output ? this.options.output.mediaPath : ''}/[name]${((_c = this.options.output) === null || _c === void 0 ? void 0 : _c.disableAssetsCache) ? '' : '.[hash:8]'}[ext]`);
        this.babelChain = (0, babel_chain_1.createBabelChain)();
        this.isTsProject = (0, utils_1.isTypescript)(this.appDirectory);
    }
    name() {
        // empty
    }
    mode() {
        const mode = (0, utils_1.isProd)() ? 'production' : 'development';
        this.chain.mode(mode);
        return mode;
    }
    devtool() {
        const { output } = this.options;
        /* eslint-disable no-nested-ternary */
        this.chain.devtool((0, utils_1.isProd)()
            ? (output === null || output === void 0 ? void 0 : output.disableSourceMap)
                ? false
                : 'source-map'
            : 'cheap-module-source-map');
        /* eslint-enable no-nested-ternary */
    }
    entry() {
        const { entrypoints = [], checkedEntries } = this.appContext;
        for (const { entryName, entry } of entrypoints) {
            if (checkedEntries && !checkedEntries.includes(entryName)) {
                continue;
            }
            this.chain.entry(entryName).add(entry);
        }
    }
    output() {
        this.chain.output
            .hashFunction('xxhash64')
            .filename(this.jsFilename)
            .chunkFilename(this.jsChunkname)
            .globalObject('window')
            .path(this.dist)
            .pathinfo(!(0, utils_1.isProd)())
            .devtoolModuleFilenameTemplate(
        // eslint-disable-next-line no-nested-ternary
        (0, utils_1.isProd)()
            ? (info) => path_1.default
                .relative(this.appContext.srcDirectory, info.absoluteResourcePath)
                .replace(/\\/g, '/')
            : (0, utils_1.isDev)()
                ? (info) => path_1.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
                : undefined)
            .publicPath(this.publicPath());
        this.chain.output.merge({
            assetModuleFilename: this.mediaChunkname,
            environment: {
                arrowFunction: false,
                bigIntLiteral: false,
                const: false,
                destructuring: false,
                dynamicImport: false,
                forOf: false,
                module: false,
            },
        });
    }
    publicPath() {
        var _a;
        let publicPath = 
        /* eslint-disable no-nested-ternary */
        (0, utils_1.isProd)()
            ? this.options.output
                ? this.options.output.assetPrefix
                : ''
            : (0, utils_1.isString)((_a = this.options.dev) === null || _a === void 0 ? void 0 : _a.assetPrefix)
                ? this.options.dev.assetPrefix
                : (this.options.dev ? this.options.dev.assetPrefix : '')
                    ? `//${this.appContext.ip || 'localhost'}:${this.appContext.port || '8080'}/`
                    : '/';
        /* eslint-enable no-nested-ternary */
        if (!publicPath.endsWith('/')) {
            publicPath += '/';
        }
        return publicPath;
    }
    loaders() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.chain.module
            .rule('mjs')
            .test(/\.m?js/)
            .resolve.set('fullySpecified', false);
        const loaders = this.chain.module.rule('loaders');
        //  js、ts
        const useTsLoader = Boolean((_a = this.options.output) === null || _a === void 0 ? void 0 : _a.enableTsLoader);
        loaders
            .oneOf('js')
            .test(useTsLoader ? constants_1.JS_REGEX : (0, mergeRegex_1.mergeRegex)(constants_1.JS_REGEX, constants_1.TS_REGEX))
            .include.add(this.appContext.srcDirectory)
            .add(this.appContext.internalDirectory)
            .end()
            .use('babel')
            .loader(require.resolve('babel-loader'))
            .options((0, getBabelOptions_1.getBabelOptions)(this.metaName, this.appDirectory, this.options, this.chain.get('name'), this.babelChain));
        if (useTsLoader) {
            loaders
                .oneOf('ts')
                .test(constants_1.TS_REGEX)
                .include.add(this.appContext.srcDirectory)
                .add(this.appContext.internalDirectory)
                .end()
                .use('babel')
                .loader(require.resolve('babel-loader'))
                .options({
                presets: [
                    [
                        require.resolve('@modern-js/babel-preset-app'),
                        {
                            metaName: this.metaName,
                            appDirectory: this.appDirectory,
                            target: 'client',
                            useTsLoader: true,
                            useBuiltIns: this.options.output.polyfill === 'ua'
                                ? false
                                : this.options.output.polyfill,
                            userBabelConfig: this.options.tools.babel,
                        },
                    ],
                ],
            })
                .end()
                .use('ts')
                .loader(require.resolve('ts-loader'))
                .options((0, utils_1.applyOptionsChain)({
                compilerOptions: {
                    target: 'es5',
                    module: 'ESNext',
                },
                transpileOnly: false,
                allowTsInNodeModules: true,
            }, (_b = this.options.tools) === null || _b === void 0 ? void 0 : _b.tsLoader));
        }
        const includes = (0, getSourceIncludes_1.getSourceIncludes)(this.appDirectory, this.options);
        if (includes.length > 0) {
            const includeRegex = (0, mergeRegex_1.mergeRegex)(...includes);
            const testResource = (resource) => includeRegex.test(resource);
            loaders.oneOf('js').include.add(testResource);
            loaders.oneOfs.has('ts') && loaders.oneOf('ts').include.add(testResource);
        }
        const disableCssModuleExtension = (_d = (_c = this.options.output) === null || _c === void 0 ? void 0 : _c.disableCssModuleExtension) !== null && _d !== void 0 ? _d : false;
        // css
        (0, createCSSRule_1.createCSSRule)(this.chain, {
            appDirectory: this.appDirectory,
            config: this.options,
        }, {
            name: 'css',
            // when disableCssModuleExtension is true,
            // only transfer *.global.css in css-loader
            test: disableCssModuleExtension ? constants_1.GLOBAL_CSS_REGEX : constants_1.CSS_REGEX,
            exclude: [constants_1.CSS_MODULE_REGEX],
        }, {
            importLoaders: 1,
            esModule: false,
            sourceMap: (0, utils_1.isProd)() && !((_e = this.options.output) === null || _e === void 0 ? void 0 : _e.disableSourceMap),
        });
        // css modules
        (0, createCSSRule_1.createCSSRule)(this.chain, {
            appDirectory: this.appDirectory,
            config: this.options,
        }, {
            name: 'css-modules',
            test: disableCssModuleExtension ? constants_1.CSS_REGEX : constants_1.CSS_MODULE_REGEX,
            exclude: disableCssModuleExtension
                ? [/node_modules/, constants_1.GLOBAL_CSS_REGEX]
                : [],
            genTSD: (_f = this.options.output) === null || _f === void 0 ? void 0 : _f.enableCssModuleTSDeclaration,
        }, {
            importLoaders: 1,
            esModule: false,
            modules: {
                localIdentName: this.options.output
                    ? this.options.output.cssModuleLocalIdentName
                    : '',
                exportLocalsConvention: 'camelCase',
            },
            sourceMap: (0, utils_1.isProd)() && !((_g = this.options.output) === null || _g === void 0 ? void 0 : _g.disableSourceMap),
        });
        // svg
        loaders
            .oneOf('svg-inline')
            .test(constants_1.SVG_REGEX)
            .type('javascript/auto')
            .resourceQuery(/inline/)
            .use('svgr')
            .loader(require.resolve('@svgr/webpack'))
            .options({ svgo: false })
            .end()
            .use('url')
            .loader(require.resolve('url-loader'))
            .options({
            limit: Infinity,
            name: this.mediaChunkname.replace(/\[ext\]$/, '.[ext]'),
        });
        loaders
            .oneOf('svg-url')
            .test(constants_1.SVG_REGEX)
            .type('javascript/auto')
            .resourceQuery(/url/)
            .use('svgr')
            .loader(require.resolve('@svgr/webpack'))
            .options({ svgo: false })
            .end()
            .use('url')
            .loader(require.resolve('url-loader'))
            .options({
            limit: false,
            name: this.mediaChunkname.replace(/\[ext\]$/, '.[ext]'),
        });
        loaders
            .oneOf('svg')
            .test(constants_1.SVG_REGEX)
            .type('javascript/auto')
            .use('svgr')
            .loader(require.resolve('@svgr/webpack'))
            .options({ svgo: false })
            .end()
            .use('url')
            .loader(require.resolve('url-loader'))
            .options({
            limit: (_h = this.options.output) === null || _h === void 0 ? void 0 : _h.dataUriLimit,
            name: this.mediaChunkname.replace(/\[ext\]$/, '.[ext]'),
        });
        // img, font assets
        loaders
            .oneOf('assets-inline')
            .test(constants_1.ASSETS_REGEX)
            .type('asset/inline')
            .resourceQuery(/inline/);
        loaders
            .oneOf('assets-url')
            .test(constants_1.ASSETS_REGEX)
            .type('asset/resource')
            .resourceQuery(/url/);
        loaders
            .oneOf('assets')
            .test(constants_1.ASSETS_REGEX)
            .type('asset')
            .parser({
            dataUrlCondition: { maxSize: (_j = this.options.output) === null || _j === void 0 ? void 0 : _j.dataUriLimit },
        });
        // yml,toml, markdown
        loaders
            .oneOf('yml')
            .test(/\.ya?ml$/)
            .use('json')
            .loader(require.resolve('json-loader'))
            .end()
            .use('yaml')
            .loader('yaml-loader');
        loaders
            .oneOf('toml')
            .test(/\.toml$/)
            .use('toml')
            .loader(require.resolve('toml-loader'));
        loaders
            .oneOf('markdown')
            .test(/\.md$/)
            .use('html')
            .loader(require.resolve('html-loader'))
            .end()
            .use('markdown')
            .loader('markdown-loader');
        //  resource fallback
        loaders
            .oneOf('fallback')
            .exclude.add(/^$/)
            .add(constants_1.JS_REGEX)
            .add(constants_1.TS_REGEX)
            .add(constants_1.CSS_REGEX)
            .add(constants_1.CSS_MODULE_REGEX)
            .add(/\.(html?|json|wasm|ya?ml|toml|md)$/)
            .end()
            .use('file')
            .loader(require.resolve('file-loader'));
        return loaders;
    }
    plugins() {
        // progress bar
        process.stdout.isTTY &&
            this.chain
                .plugin('progress')
                .use(webpackbar_1.default, [{ name: this.chain.get('name') }]);
        if ((0, createCSSRule_1.enableCssExtract)(this.options)) {
            this.chain.plugin('mini-css-extract').use(mini_css_extract_plugin_1.default, [
                {
                    filename: this.cssChunkname,
                    chunkFilename: this.cssChunkname,
                    ignoreOrder: true,
                },
            ]);
        }
        this.chain.plugin('ignore').use(webpack_1.IgnorePlugin, [
            {
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
            },
        ]);
        const { output } = this.options;
        if (
        // only enable ts-checker plugin in ts project
        this.isTsProject &&
            // no need to use ts-checker plugin when using ts-loader
            !output.enableTsLoader &&
            !output.disableTsChecker) {
            this.chain.plugin('ts-checker').use(fork_ts_checker_webpack_plugin_1.default, [
                {
                    typescript: {
                        // avoid OOM issue
                        memoryLimit: 8192,
                        // use tsconfig of user project
                        configFile: path_1.default.resolve(this.appDirectory, './tsconfig.json'),
                        // use typescript of user project
                        typescriptPath: require.resolve('typescript'),
                    },
                    issue: {
                        include: [{ file: '**/src/**/*' }],
                        exclude: [{ file: '**/*.(spec|test).ts' }],
                    },
                },
            ]);
        }
    }
    resolve() {
        var _a, _b;
        // resolve extensions
        const extensions = constants_1.JS_RESOLVE_EXTENSIONS.filter(ext => this.isTsProject || !ext.includes('ts'));
        for (const ext of extensions) {
            this.chain.resolve.extensions.add(ext);
        }
        //  resolve alias
        const defaultAlias = (0, getWebpackAliases_1.getWebpackAliases)(this.appContext, this.options._raw);
        const alias = (0, utils_1.applyOptionsChain)(defaultAlias, (_a = this.options.source) === null || _a === void 0 ? void 0 : _a.alias);
        for (const name of Object.keys(alias)) {
            this.chain.resolve.alias.set(name, (Array.isArray(alias[name]) ? alias[name] : [alias[name]]).map(a => (0, utils_1.ensureAbsolutePath)(this.appDirectory, a)));
        }
        //  resolve modules
        this.chain.resolve.modules
            .add('node_modules')
            .add(this.appContext.nodeModulesDirectory);
        let defaultScopes = ['./src', /node_modules/, './shared'];
        const scopeOptions = (_b = this.options.source) === null || _b === void 0 ? void 0 : _b.moduleScopes;
        if (Array.isArray(scopeOptions)) {
            if (scopeOptions.some(s => typeof s === 'function')) {
                for (const scope of scopeOptions) {
                    if (typeof scope === 'function') {
                        const ret = scope(defaultScopes);
                        defaultScopes = ret ? ret : defaultScopes;
                    }
                    else {
                        defaultScopes.push(scope);
                    }
                }
            }
            else {
                defaultScopes.push(...scopeOptions);
            }
        }
        // resolve plugin(module scope)
        this.chain.resolve.plugin('module-scope').use(module_scope_plugin_1.ModuleScopePlugin, [
            {
                appSrc: defaultScopes.map((scope) => {
                    if ((0, utils_1.isString)(scope)) {
                        return (0, utils_1.ensureAbsolutePath)(this.appDirectory, scope);
                    }
                    return scope;
                }),
                allowedFiles: [path_1.default.resolve(this.appDirectory, './package.json')],
            },
        ]);
        if (this.isTsProject) {
            // aliases from tsconfig.json
            this.chain.resolve
                .plugin('ts-config-paths')
                .use(ts_config_paths_plugin_1.TsConfigPathsPlugin, [this.appDirectory]);
        }
    }
    cache() {
        this.chain.cache({
            type: 'filesystem',
            cacheDirectory: path_1.default.resolve(this.appDirectory, constants_1.CACHE_DIRECTORY, 'webpack'),
            buildDependencies: {
                defaultWebpack: [require.resolve('webpack/lib')],
                config: [__filename, this.appContext.configFile].filter(Boolean),
                tsconfig: [
                    this.isTsProject &&
                        path_1.default.resolve(this.appDirectory, './tsconfig.json'),
                ].filter(Boolean),
            },
        });
    }
    optimization() {
        var _a, _b, _c;
        this.chain.optimization
            .minimize((0, utils_1.isProd)() && !((_a = this.options.output) === null || _a === void 0 ? void 0 : _a.disableMinimize))
            .splitChunks({ chunks: 'all' })
            .runtimeChunk({ name: (entrypoint) => `runtime-${entrypoint.name}` })
            .minimizer('js')
            .use(terser_webpack_plugin_1.default, [
            // FIXME: any type
            (0, utils_1.applyOptionsChain)({
                terserOptions: {
                    parse: { ecma: 8 },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: { safari10: true },
                    // Added for profiling in devtools
                    keep_classnames: (0, utils_1.isProdProfile)(),
                    keep_fnames: (0, utils_1.isProdProfile)(),
                    output: {
                        ecma: 5,
                        ascii_only: true,
                    },
                },
            }, (_b = this.options.tools) === null || _b === void 0 ? void 0 : _b.terser),
        ])
            .end()
            .minimizer('css')
            // FIXME: add `<any>` reason: Since the css-minimizer-webpack-plugin has been updated
            .use(css_minimizer_webpack_plugin_1.default, [
            (0, utils_1.applyOptionsChain)({}, (_c = this.options.tools) === null || _c === void 0 ? void 0 : _c.minifyCss),
        ]);
    }
    stats() {
        this.chain.stats('none');
        this.chain.merge({ infrastructureLogging: (0, getWebpackLogging_1.getWebpackLogging)() });
    }
    config() {
        var _a, _b;
        const chainConfig = this.getChain().toConfig();
        if ((_a = this.options.tools) === null || _a === void 0 ? void 0 : _a.webpackFinal) {
            return (0, utils_1.applyOptionsChain)(chainConfig, (_b = this.options.tools) === null || _b === void 0 ? void 0 : _b.webpackFinal, {
                name: this.chain.get('name'),
                webpack: webpack_1.default,
            }, webpack_merge_1.merge);
        }
        return chainConfig;
    }
    getChain() {
        var _a;
        this.chain.context(this.appDirectory);
        this.chain.bail((0, utils_1.isProd)());
        this.chain.node.set('global', true);
        this.name();
        this.mode();
        this.devtool();
        this.entry();
        this.output();
        this.loaders();
        this.plugins();
        this.resolve();
        this.cache();
        this.optimization();
        this.stats();
        const config = this.chain.toConfig();
        (0, utils_1.applyOptionsChain)(config, (_a = this.options.tools) === null || _a === void 0 ? void 0 : _a.webpack, {
            chain: this.chain,
            name: this.chain.get('name'),
            webpack: webpack_1.default,
        }, webpack_merge_1.merge);
        return this.chain;
    }
}
exports.BaseWebpackConfig = BaseWebpackConfig;
/* eslint-enable max-lines */
