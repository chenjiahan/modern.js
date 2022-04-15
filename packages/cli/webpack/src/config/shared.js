"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableBundleAnalyzer = void 0;
const webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
function enableBundleAnalyzer(config, reportFilename) {
    config.plugin('bundle-analyze').use(webpack_bundle_analyzer_1.BundleAnalyzerPlugin, [
        {
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename,
        },
    ]);
}
exports.enableBundleAnalyzer = enableBundleAnalyzer;
