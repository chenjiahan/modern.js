"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeWebpackConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("@modern-js/utils");
const webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
const mergeRegex_1 = require("../utils/mergeRegex");
const getSourceIncludes_1 = require("../utils/getSourceIncludes");
const constants_1 = require("../utils/constants");
const base_1 = require("./base");
const shared_1 = require("./shared");
class NodeWebpackConfig extends base_1.BaseWebpackConfig {
    get externalsAllowlist() {
        const includes = (0, getSourceIncludes_1.getSourceIncludes)(this.appDirectory, this.options);
        return [
            (name) => {
                const ext = path_1.default.extname(name);
                return (name.includes('@modern-js/') ||
                    (ext !== '' && !constants_1.JS_RESOLVE_EXTENSIONS.includes(ext)));
            },
            includes.length && (0, mergeRegex_1.mergeRegex)(...includes),
        ].filter(Boolean);
    }
    name() {
        this.chain.name('server');
    }
    devtool() {
        this.chain.devtool(false);
    }
    output() {
        super.output();
        this.chain.output
            .libraryTarget('commonjs2')
            .filename(`${utils_1.SERVER_BUNDLE_DIRECTORY}/[name].js`);
        this.chain.output.delete('chunkFilename');
    }
    optimization() {
        super.optimization();
        this.chain.optimization.minimize(false);
        this.chain.optimization.splitChunks(false).runtimeChunk(false);
    }
    loaders() {
        var _a, _b, _c;
        const loaders = super.loaders();
        // css & css modules
        if (loaders.oneOfs.has('css')) {
            loaders.oneOf('css').uses.delete('mini-css-extract');
            loaders.oneOf('css').uses.delete('style-loader');
        }
        loaders
            .oneOf('css-modules')
            .uses.delete('mini-css-extract')
            .end()
            .uses.delete('style-loader')
            .end()
            .use('css')
            .options({
            sourceMap: (0, utils_1.isProd)() && !((_a = this.options.output) === null || _a === void 0 ? void 0 : _a.disableSourceMap),
            importLoaders: 1,
            modules: {
                localIdentName: this.options.output
                    ? this.options.output.cssModuleLocalIdentName
                    : '',
                exportLocalsConvention: 'camelCase',
                exportOnlyLocals: true,
            },
        });
        const babelOptions = loaders.oneOf('js').use('babel').get('options');
        loaders
            .oneOf('js')
            .use('babel')
            .options(Object.assign(Object.assign({}, babelOptions), { presets: [
                [
                    require.resolve('@modern-js/babel-preset-app'),
                    {
                        metaName: this.appContext.metaName,
                        appDirectory: this.appDirectory,
                        target: 'server',
                        useLegacyDecorators: !((_b = this.options.output) === null || _b === void 0 ? void 0 : _b.enableLatestDecorators),
                        useBuiltIns: false,
                        chain: this.babelChain,
                        styledComponents: (0, utils_1.applyOptionsChain)({
                            pure: true,
                            displayName: true,
                            ssr: (0, utils_1.isUseSSRBundle)(this.options),
                            transpileTemplateLiterals: true,
                        }, (_c = this.options.tools) === null || _c === void 0 ? void 0 : _c.styledComponents),
                        userBabelConfig: this.options.tools.babel,
                    },
                ],
            ] }));
        // TODO: ts-loader
        return loaders;
    }
    plugins() {
        var _a;
        super.plugins();
        if ((_a = this.options.cliOptions) === null || _a === void 0 ? void 0 : _a.analyze) {
            (0, shared_1.enableBundleAnalyzer)(this.chain, 'report-ssr.html');
        }
    }
    resolve() {
        super.resolve();
        for (const ext of [
            '.node.js',
            '.node.jsx',
            '.node.ts',
            '.node.tsx',
        ].reverse()) {
            this.chain.resolve.extensions.prepend(ext);
        }
        this.chain.resolve.mainFields.clear().add('main');
    }
    config() {
        var _a, _b;
        const config = super.config();
        config.target = 'node';
        // dsiable sourcemap
        config.devtool = false;
        // prod bundle all dependencies
        if ((0, utils_1.isProd)()) {
            config.externals = [];
            return config;
        }
        config.externals = config.externals || [];
        if (!Array.isArray(config.externals)) {
            config.externals = [config.externals].filter(Boolean);
        }
        // @modern-js/utils use typescript for peerDependency, but js project not depend it
        // if not externals, js ssr build error
        config.externals.push('typescript');
        (_b = (_a = config.resolve) === null || _a === void 0 ? void 0 : _a.modules) === null || _b === void 0 ? void 0 : _b.forEach((dir) => {
            if (fs_1.default.existsSync(dir)) {
                config.externals.push((0, webpack_node_externals_1.default)({
                    allowlist: this.externalsAllowlist,
                    modulesDir: dir,
                }));
            }
        });
        return config;
    }
}
exports.NodeWebpackConfig = NodeWebpackConfig;
