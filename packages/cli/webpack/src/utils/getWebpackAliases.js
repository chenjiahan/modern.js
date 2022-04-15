"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebpackAliases = void 0;
const utils_1 = require("@modern-js/utils");
const verifyTsConfigPaths = (root, userConfig) => {
    var _a, _b;
    const userAliases = (_a = userConfig.source) === null || _a === void 0 ? void 0 : _a.alias;
    if (!userAliases) {
        return;
    }
    const paths = Object.keys(((_b = (0, utils_1.readTsConfig)(root).compilerOptions) === null || _b === void 0 ? void 0 : _b.paths) || {}).map(key => key.replace(/\/\*$/, ''));
    Object.keys(userAliases).forEach(name => {
        if (paths.includes(name)) {
            throw new Error(utils_1.chalk.red(`It looks like you have configured the alias ${utils_1.chalk.bold(name)} in both the modern.config file and tsconfig.json.\n Please remove the configuration in modern.config file and just keep the configuration in tsconfig.json.`));
        }
    });
};
const getWebpackAliases = (appContext, userConfig) => {
    if ((0, utils_1.isTypescript)(appContext.appDirectory)) {
        verifyTsConfigPaths(appContext.appDirectory, userConfig);
    }
    return Object.assign({ [appContext.internalDirAlias]: appContext.internalDirectory, [appContext.internalSrcAlias]: appContext.srcDirectory, '@': appContext.srcDirectory, '@shared': appContext.sharedDirectory, 'react-native': 'react-native-web' }, ((0, utils_1.isProdProfile)() && {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
    }));
};
exports.getWebpackAliases = getWebpackAliases;
