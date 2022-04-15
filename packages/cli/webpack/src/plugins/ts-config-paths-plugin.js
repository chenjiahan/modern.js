"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsConfigPathsPlugin = void 0;
const path_1 = __importDefault(require("path"));
const utils_1 = require("@modern-js/utils");
const tsconfig_paths_1 = require("tsconfig-paths");
const constants_1 = require("../utils/constants");
const debug = (0, utils_1.createDebugger)('ts-config-paths');
class TsConfigPathsPlugin {
    constructor(cwd) {
        var _a;
        this.cwd = cwd;
        this.source = 'described-resolve';
        this.target = 'resolve';
        this.compilerOptions = (0, utils_1.readTsConfig)(cwd).compilerOptions;
        this.absoluteBaseUrl = path_1.default.resolve(cwd, this.compilerOptions.baseUrl || './');
        this.matchPath = (0, tsconfig_paths_1.createMatchPath)(this.absoluteBaseUrl, ((_a = this.compilerOptions) === null || _a === void 0 ? void 0 : _a.paths) || {}, ['browser', 'module', 'main'], false);
        this.resolved = new Map();
    }
    apply(resolver) {
        if (!resolver) {
            utils_1.logger.warn('ts-config-paths-plugin: Found no resolver, not apply ts-config-paths-plugin');
        }
        const target = resolver.ensureHook(this.target);
        resolver
            .getHook('described-resolve')
            .tapAsync('TsConfigPathsPlugin', (request, resolveContext, callback) => {
            var _a, _b;
            const requestName = request.request;
            if (
            // If this resolves to a node_module, we don't care what happens next
            ((_a = request.descriptionFileRoot) === null || _a === void 0 ? void 0 : _a.includes('/node_modules/')) ||
                ((_b = request.descriptionFileRoot) === null || _b === void 0 ? void 0 : _b.includes('\\node_modules\\')) ||
                !requestName) {
                return callback();
            }
            if ((0, utils_1.isRelativePath)(requestName)) {
                return callback();
            }
            if (path_1.default.isAbsolute(requestName)) {
                return callback();
            }
            if (!this.resolved.has(requestName)) {
                const matched = this.matchPath(requestName, undefined, undefined, constants_1.JS_RESOLVE_EXTENSIONS);
                this.resolved.set(requestName, matched);
            }
            if (this.resolved.get(requestName) === undefined) {
                return callback();
            }
            debug(`resolved ${requestName} to ${this.resolved.get(requestName)}`);
            return resolver.doResolve(target, Object.assign(Object.assign({}, request), { request: this.resolved.get(requestName) }), `Aliased with tsconfig.json ${requestName} to ${this.resolved.get(requestName)}`, resolveContext, (resolverErr, resolvedResult) => {
                if (resolverErr) {
                    return callback(resolverErr);
                }
                if (!resolvedResult) {
                    return callback(undefined, undefined);
                }
                return callback(undefined, resolvedResult);
            });
        });
    }
}
exports.TsConfigPathsPlugin = TsConfigPathsPlugin;
