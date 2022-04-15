"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBabelOptions = void 0;
const path_1 = __importDefault(require("path"));
const utils_1 = require("@modern-js/utils");
const readPackageJson_1 = require("./readPackageJson");
const constants_1 = require("./constants");
const getBabelOptions = (metaName, appDirectory, config, name, chain) => {
    var _a, _b, _c, _d, _e, _f;
    return ({
        babelrc: false,
        configFile: false,
        cacheIdentifier: (0, utils_1.getCacheIdentifier)([
            {
                name: 'babel-loader',
                version: (0, readPackageJson_1.readPackageJson)(require.resolve('babel-loader')).version,
            },
            {
                name: '@modern-js/babel-preset-app',
                version: (0, readPackageJson_1.readPackageJson)(require.resolve('@modern-js/babel-preset-app'))
                    .version,
            },
        ]),
        cacheDirectory: path_1.default.resolve(appDirectory, constants_1.CACHE_DIRECTORY, `babel/${name}`),
        cacheCompression: false,
        compact: (0, utils_1.isProd)(),
        presets: [
            [
                require.resolve('@modern-js/babel-preset-app'),
                {
                    metaName,
                    appDirectory,
                    target: 'client',
                    lodash: (0, utils_1.applyOptionsChain)({ id: ['lodash', 'ramda'] }, (_a = config.tools) === null || _a === void 0 ? void 0 : _a.lodash),
                    useLegacyDecorators: !((_b = config.output) === null || _b === void 0 ? void 0 : _b.enableLatestDecorators),
                    useBuiltIns: ((_c = config.output) === null || _c === void 0 ? void 0 : _c.polyfill) === 'ua' || ((_d = config.output) === null || _d === void 0 ? void 0 : _d.polyfill) === 'off'
                        ? false
                        : (_e = config.output) === null || _e === void 0 ? void 0 : _e.polyfill,
                    chain,
                    styledComponents: (0, utils_1.applyOptionsChain)({
                        pure: true,
                        displayName: true,
                        ssr: (0, utils_1.isUseSSRBundle)(config),
                        transpileTemplateLiterals: true,
                    }, (_f = config.tools) === null || _f === void 0 ? void 0 : _f.styledComponents),
                    userBabelConfig: config.tools.babel,
                },
            ],
        ],
    });
};
exports.getBabelOptions = getBabelOptions;
