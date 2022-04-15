"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernWebpackConfig = void 0;
const babel_chain_1 = require("@modern-js/babel-chain");
const utils_1 = require("@modern-js/utils");
const client_1 = require("./client");
class ModernWebpackConfig extends client_1.ClientWebpackConfig {
    constructor(appContext, options) {
        super(appContext, options);
        this.htmlFilename = (name) => (0, utils_1.removeLeadingSlash)(`${this.options.output.htmlPath}/${this.options.output.disableHtmlFolder
            ? `${name}-es6`
            : `${name}/index-es6`}.html`);
        this.jsChunkname = this.jsChunkname.replace(/\.js$/, '-es6.js');
        this.jsFilename = this.jsFilename.replace(/\.js$/, '-es6.js');
        this.babelChain = (0, babel_chain_1.createBabelChain)();
    }
    name() {
        this.chain.name('modern');
    }
    plugins() {
        var _a;
        super.plugins();
        if ((_a = this.options.cliOptions) === null || _a === void 0 ? void 0 : _a.analyze) {
            this.chain.plugin('bundle-analyze').tap(() => [
                {
                    analyzerMode: 'static',
                    openAnalyzer: false,
                    reportFilename: 'report-modern.html',
                },
            ]);
        }
    }
    loaders() {
        var _a, _b;
        const loaders = super.loaders();
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
                        target: 'client',
                        useLegacyDecorators: !((_a = this.options.output) === null || _a === void 0 ? void 0 : _a.enableLatestDecorators),
                        useBuiltIns: false,
                        useModern: true,
                        chain: this.babelChain,
                        styledComponents: (0, utils_1.applyOptionsChain)({
                            pure: true,
                            displayName: true,
                            ssr: (0, utils_1.isUseSSRBundle)(this.options),
                            transpileTemplateLiterals: true,
                        }, (_b = this.options.tools) === null || _b === void 0 ? void 0 : _b.styledComponents),
                        userBabelConfig: this.options.tools.babel,
                    },
                ],
            ] }));
        return loaders;
    }
}
exports.ModernWebpackConfig = ModernWebpackConfig;
