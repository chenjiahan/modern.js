"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSSRule = exports.enableCssExtract = void 0;
const css_config_1 = require("@modern-js/css-config");
const enableCssExtract = (config) => {
    return config.output.disableCssExtract !== true;
};
exports.enableCssExtract = enableCssExtract;
const createCSSRule = (chain, { appDirectory, config }, { name, test, exclude, genTSD, }, options) => {
    const postcssOptions = (0, css_config_1.getPostcssConfig)(appDirectory, config);
    const loaders = chain.module.rule('loaders');
    const isExtractCSS = (0, exports.enableCssExtract)(config);
    loaders
        .oneOf(name)
        .test(test)
        .when(isExtractCSS, c => {
        c.use('mini-css-extract')
            .loader(require('mini-css-extract-plugin').loader)
            .options(chain.output.get('publicPath') === './'
            ? { publicPath: '../../' }
            : {})
            .end();
    })
        .when(!isExtractCSS, c => {
        c.use('style-loader').loader(require.resolve('style-loader')).end();
    })
        .when(Boolean(genTSD), c => {
        c.use('css-modules-typescript')
            .loader(require.resolve('css-modules-typescript-loader'))
            .end();
    })
        .use('css')
        .loader(require.resolve('css-loader'))
        .options(options)
        .end()
        .use('postcss')
        .loader(require.resolve('postcss-loader'))
        .options(postcssOptions);
    loaders.oneOf(name).merge({ sideEffects: true });
    if (exclude) {
        loaders.oneOf(name).exclude.add(exclude);
    }
};
exports.createCSSRule = createCSSRule;
