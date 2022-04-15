"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWebpackConfig = void 0;
const path_1 = __importDefault(require("path"));
const utils_1 = require("@modern-js/utils");
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const webpack_manifest_plugin_1 = require("webpack-manifest-plugin");
const webpack_1 = require("webpack");
const copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
const lodash_1 = require("@modern-js/utils/lodash");
const inline_html_chunk_plugin_1 = require("../plugins/inline-html-chunk-plugin");
const app_icon_plugin_1 = require("../plugins/app-icon-plugin");
const bottom_template_plugin_1 = require("../plugins/bottom-template-plugin");
const constants_1 = require("../utils/constants");
const base_1 = require("./base");
const shared_1 = require("./shared");
const nodeLibsBrowser = require('node-libs-browser');
class ClientWebpackConfig extends base_1.BaseWebpackConfig {
    constructor(appContext, options) {
        super(appContext, options);
        this.htmlFilename = (name) => (0, utils_1.removeLeadingSlash)(`${this.options.output.htmlPath}/${this.options.output.disableHtmlFolder ? name : `${name}/index`}.html`);
    }
    name() {
        this.chain.name('client');
    }
    entry() {
        super.entry();
        const entrypoints = Object.keys(this.chain.entryPoints.entries() || {});
        for (const name of entrypoints) {
            if (this.options.output.polyfill !== 'off') {
                this.chain
                    .entry(name)
                    .prepend(require.resolve('regenerator-runtime/runtime'))
                    .prepend(require.resolve('core-js'));
            }
        }
    }
    resolve() {
        super.resolve();
        // FIXME: local node_modules (WTF?)
        const wtfPath = path_1.default.resolve(__dirname, '../../../../node_modules');
        this.chain.resolve.modules.add(wtfPath);
        // node polyfill
        if (!this.options.output.disableNodePolyfill) {
            this.chain.resolve.merge({
                fallback: this.getNodePolyfill(),
            });
        }
    }
    getNodePolyfill() {
        return Object.keys(nodeLibsBrowser).reduce((previous, name) => {
            if (nodeLibsBrowser[name]) {
                previous[name] = nodeLibsBrowser[name];
            }
            else {
                previous[name] = false;
            }
            return previous;
        }, {});
    }
    getCustomPublicEnv() {
        const { metaName } = this.appContext;
        const prefix = `${metaName.split(/[-_]/)[0]}_`.toUpperCase();
        const envReg = new RegExp(`^${prefix}`);
        return Object.keys(process.env).filter(key => envReg.test(key));
    }
    useDefinePlugin() {
        const { envVars, globalVars } = this.options.source || {};
        const publicEnvVars = this.getCustomPublicEnv();
        this.chain.plugin('define').use(webpack_1.DefinePlugin, [
            Object.assign(Object.assign({}, [
                'NODE_ENV',
                'BUILD_MODE',
                ...publicEnvVars,
                ...(envVars || []),
            ].reduce((memo, name) => {
                memo[`process.env.${name}`] = JSON.stringify(process.env[name]);
                return memo;
            }, {})), Object.keys(globalVars || {}).reduce((memo, name) => {
                memo[name] = globalVars ? JSON.stringify(globalVars[name]) : '';
                return memo;
            }, {})),
        ]);
    }
    plugins() {
        var _a;
        super.plugins();
        this.useDefinePlugin();
        (0, utils_1.isDev)() && this.chain.plugin('hmr').use(webpack_1.HotModuleReplacementPlugin);
        const { packageName } = this.appContext;
        // output html files
        const entrypoints = Object.keys(this.chain.entryPoints.entries() || {});
        for (const entryName of entrypoints) {
            const baseTemplateParams = Object.assign({ entryName, title: (0, utils_1.getEntryOptions)(entryName, this.options.output.title, this.options.output.titleByEntries, packageName), mountId: this.options.output.mountId, assetPrefix: (0, utils_1.removeTailSlash)(this.chain.output.get('publicPath')), meta: (0, utils_1.generateMetaTags)((0, utils_1.getEntryOptions)(entryName, this.options.output.meta, this.options.output.metaByEntries, packageName)) }, (0, utils_1.getEntryOptions)(entryName, this.options.output.templateParameters, this.options.output.templateParametersByEntries, packageName));
            this.chain.plugin(`html-${entryName}`).use(html_webpack_plugin_1.default, [
                {
                    __internal__: true,
                    filename: this.htmlFilename(entryName),
                    chunks: [entryName],
                    template: this.appContext.htmlTemplates[entryName],
                    minify: !(0, utils_1.isProd)()
                        ? false
                        : {
                            collapseWhitespace: true,
                            removeComments: false,
                            removeRedundantAttributes: true,
                            removeScriptTypeAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            useShortDoctype: true,
                        },
                    favicon: (0, utils_1.getEntryOptions)(entryName, this.options.output.favicon, this.options.output.faviconByEntries, packageName) ||
                        (0, utils_1.findExists)(constants_1.ICON_EXTENSIONS.map(ext => path_1.default.resolve(this.appContext.appDirectory, this.options.source.configDir, `favicon.${ext}`))),
                    inject: (0, utils_1.getEntryOptions)(entryName, this.options.output.inject, this.options.output.injectByEntries, packageName),
                    templateParameters: (compilation, assets, assetTags, pluginOptions) => (Object.assign({ webpackConfig: compilation.options, htmlWebpackPlugin: {
                            tags: assetTags,
                            files: assets,
                            options: pluginOptions,
                        } }, baseTemplateParams)),
                    bottomTemplate: this.appContext.htmlTemplates[`__${entryName}-bottom__`] &&
                        (0, lodash_1.template)(this.appContext.htmlTemplates[`__${entryName}-bottom__`])(baseTemplateParams),
                },
            ]);
        }
        this.chain
            .plugin('bottom-template')
            .use(bottom_template_plugin_1.BottomTemplatePlugin, [html_webpack_plugin_1.default]);
        // add app icon
        const appIcon = (0, utils_1.findExists)(constants_1.ICON_EXTENSIONS.map(ext => path_1.default.resolve(this.appContext.appDirectory, this.options.source.configDir, `icon.${ext}`)));
        if (appIcon) {
            this.chain
                .plugin('app-icon')
                .use(app_icon_plugin_1.AppIconPlugin, [html_webpack_plugin_1.default, appIcon]);
        }
        this.chain.plugin('webpack-manifest').use(webpack_manifest_plugin_1.WebpackManifestPlugin, [
            {
                fileName: 'asset-manifest.json',
                publicPath: this.chain.output.get('publicPath'),
                generate: (seed, files, entries) => {
                    const manifestFiles = files.reduce((manifest, file) => {
                        manifest[file.name] = file.path;
                        return manifest;
                    }, seed);
                    const entrypointFiles = Object.keys(entries).reduce((previous, name) => previous.concat(entries[name].filter(fileName => !fileName.endsWith('.map'))), []);
                    return {
                        files: manifestFiles,
                        entrypoints: entrypointFiles,
                    };
                },
            },
        ]);
        const configDir = path_1.default.resolve(this.appDirectory, this.options.source.configDir);
        this.chain.plugin('copy').use(copy_webpack_plugin_1.default, [
            {
                patterns: [
                    ...(this.options.output.copy || []),
                    {
                        from: '**/*',
                        to: 'public',
                        context: path_1.default.posix.join(configDir.replace(/\\/g, '/'), 'public'),
                        noErrorOnMissing: true,
                        // eslint-disable-next-line node/prefer-global/buffer
                        transform: (content, absoluteFrom) => {
                            if (!/\.html?$/.test(absoluteFrom)) {
                                return content;
                            }
                            return (0, lodash_1.template)(content.toString('utf8'))({
                                assetPrefix: (0, utils_1.removeTailSlash)(this.chain.output.get('publicPath')),
                            });
                        },
                    },
                    {
                        from: '**/*',
                        to: 'upload',
                        context: path_1.default.posix.join(configDir.replace(/\\/g, '/'), 'upload'),
                        noErrorOnMissing: true,
                    },
                ],
            },
        ]);
        if ((0, utils_1.isProd)()) {
            const { disableInlineRuntimeChunk, enableInlineStyles, enableInlineScripts, } = this.options.output;
            this.chain
                .plugin('inline-html')
                .use(inline_html_chunk_plugin_1.InlineChunkHtmlPlugin, [
                html_webpack_plugin_1.default,
                [
                    enableInlineScripts && /\.js$/,
                    enableInlineStyles && /\.css$/,
                    !disableInlineRuntimeChunk && /runtime-.+[.]js$/,
                ].filter(Boolean),
            ]);
        }
        // node polyfill
        if (!this.options.output.disableNodePolyfill) {
            this.chain.plugin('node-polyfill-provide').use(webpack_1.ProvidePlugin, [
                {
                    Buffer: [nodeLibsBrowser.buffer, 'Buffer'],
                    console: [nodeLibsBrowser.console],
                    process: [nodeLibsBrowser.process],
                },
            ]);
        }
        if ((_a = this.options.cliOptions) === null || _a === void 0 ? void 0 : _a.analyze) {
            (0, shared_1.enableBundleAnalyzer)(this.chain, 'report.html');
        }
    }
}
exports.ClientWebpackConfig = ClientWebpackConfig;
