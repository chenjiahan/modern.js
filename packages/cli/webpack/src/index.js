"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeWebpackConfig = exports.ModernWebpackConfig = exports.ClientWebpackConfig = exports.getWebpackConfig = exports.WebpackConfigTarget = exports.BaseWebpackConfig = void 0;
const core_1 = require("@modern-js/core");
const config_1 = require("./config");
var base_1 = require("./config/base");
Object.defineProperty(exports, "BaseWebpackConfig", { enumerable: true, get: function () { return base_1.BaseWebpackConfig; } });
var WebpackConfigTarget;
(function (WebpackConfigTarget) {
    WebpackConfigTarget[WebpackConfigTarget["CLIENT"] = 0] = "CLIENT";
    WebpackConfigTarget[WebpackConfigTarget["NODE"] = 1] = "NODE";
    WebpackConfigTarget[WebpackConfigTarget["MODERN"] = 2] = "MODERN";
})(WebpackConfigTarget = exports.WebpackConfigTarget || (exports.WebpackConfigTarget = {}));
const getWebpackConfig = (target) => {
    let Config = null;
    switch (target) {
        case WebpackConfigTarget.CLIENT:
            Config = config_1.ClientWebpackConfig;
            break;
        case WebpackConfigTarget.MODERN:
            Config = config_1.ModernWebpackConfig;
            break;
        case WebpackConfigTarget.NODE:
            Config = config_1.NodeWebpackConfig;
            break;
        default:
            Config = null;
    }
    if (!Config) {
        return null;
    }
    /* eslint-disable react-hooks/rules-of-hooks */
    const appContext = (0, core_1.useAppContext)();
    const options = (0, core_1.useResolvedConfigContext)();
    /* eslint-enable react-hooks/rules-of-hooks */
    const config = new Config(appContext, options);
    return config.config();
};
exports.getWebpackConfig = getWebpackConfig;
var config_2 = require("./config");
Object.defineProperty(exports, "ClientWebpackConfig", { enumerable: true, get: function () { return config_2.ClientWebpackConfig; } });
Object.defineProperty(exports, "ModernWebpackConfig", { enumerable: true, get: function () { return config_2.ModernWebpackConfig; } });
Object.defineProperty(exports, "NodeWebpackConfig", { enumerable: true, get: function () { return config_2.NodeWebpackConfig; } });
