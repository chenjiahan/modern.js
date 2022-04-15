"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebpackLogging = void 0;
const nodeConsole = require('webpack/lib/node/nodeConsole');
const webpackLogger = nodeConsole({
    colors: process.env.isTTY,
    appendOnly: !process.env.isTTY,
    stream: process.stderr,
});
const getWebpackLogging = () => ({
    level: 'info',
    console: Object.assign(Object.assign({}, webpackLogger), { info: (...args) => {
            const messages = args.filter(arg => !/\[webpack-dev-server\]/.test(arg));
            if (messages.length) {
                webpackLogger.info(...messages);
            }
        }, warn: (...args) => {
            const messages = args.filter(arg => !/\[webpack.cache.PackFileCacheStrategy/.test(arg) &&
                !/\[webpack-dev-server\]/.test(arg));
            if (messages.length) {
                webpackLogger.warn(...messages);
            }
        } }),
});
exports.getWebpackLogging = getWebpackLogging;
