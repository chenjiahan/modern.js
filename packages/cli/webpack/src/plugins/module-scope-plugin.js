"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleScopePlugin = void 0;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * modified from https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/ModuleScopePlugin.js
 */
const path_1 = __importDefault(require("path"));
const utils_1 = require("@modern-js/utils");
class ModuleScopePlugin {
    constructor({ appSrc, allowedFiles = [], }) {
        this.appSrcs = Array.isArray(appSrc) ? appSrc : [appSrc];
        this.allowedFiles = new Set(allowedFiles);
        this.allowedDirs = this.appSrcs.filter(src => typeof src === 'string');
        this.allowedPatterns = this.appSrcs.filter(src => Object.prototype.toString.call(src) === '[object RegExp]');
        this.relativeAllowedDirs = this.allowedDirs.map(allowedDir => `${path_1.default.relative(path_1.default.dirname(allowedDir), allowedDir)}/`);
    }
    apply(resolver) {
        const { allowedFiles, allowedDirs, allowedPatterns, relativeAllowedDirs } = this;
        resolver.hooks.file.tapAsync('ModuleScopePlugin', (request, contextResolver, callback) => {
            // Unknown issuer, probably webpack internals
            if (!request.context.issuer) {
                return callback();
            }
            if (
            // If this resolves to a node_module, we don't care what happens next
            request.descriptionFileRoot.indexOf('/node_modules/') !== -1 ||
                request.descriptionFileRoot.indexOf('\\node_modules\\') !== -1 ||
                !request.__innerRequest_request) {
                return callback();
            }
            // Resolve the issuer from our appSrc and make sure it's one of our files
            // Maybe an indexOf === 0 would be better?
            if (allowedDirs.every(allowedDir => {
                const relative = path_1.default.relative(allowedDir, request.context.issuer);
                // If it's not in one of our app src or a subdirectory, not our request!
                return relative.startsWith('../') || relative.startsWith('..\\');
            })) {
                return callback();
            }
            const requestFullPath = path_1.default.resolve(path_1.default.dirname(request.context.issuer), request.__innerRequest_request);
            // allowd pattern
            if (allowedPatterns.some(allowedPattern => allowedPattern.test(requestFullPath))) {
                return callback();
            }
            // allowed files
            if (allowedFiles.has(requestFullPath)) {
                return callback();
            }
            // Find path from src to the requested file
            // Error if in a parent directory of all given appSrcs
            if (allowedDirs.every(allowedDir => {
                const requestRelative = path_1.default.relative(allowedDir, requestFullPath);
                return (requestRelative.startsWith('../') ||
                    requestRelative.startsWith('..\\'));
            })) {
                let message = `You attempted to import ${utils_1.chalk.bold(request.__innerRequest_request)} which is not allowed. `;
                if (allowedDirs.length) {
                    message += `Allowed dirs: ${utils_1.chalk.bold(relativeAllowedDirs.join(','))}. `;
                }
                if (allowedPatterns.length) {
                    message += `Allowed patterns: ${utils_1.chalk.bold(allowedPatterns.map(p => p.toString()).join(','))}. `;
                }
                message += `Please check the source.moduleScopes configuration.`;
                const scopeError = new Error(message);
                Object.defineProperty(scopeError, '__module_scope_plugin', {
                    value: true,
                    writable: false,
                    enumerable: false,
                });
                return callback(scopeError, request);
            }
            else {
                return callback();
            }
        });
    }
}
exports.ModuleScopePlugin = ModuleScopePlugin;
