"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPackageJson = void 0;
const utils_1 = require("@modern-js/utils");
const readPackageJson = (cwd) => {
    const pkg = utils_1.pkgUp.sync({ cwd });
    return pkg ? require(pkg) : {};
};
exports.readPackageJson = readPackageJson;
