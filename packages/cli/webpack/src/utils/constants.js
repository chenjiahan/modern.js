"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CACHE_DIRECTORY = exports.JS_RESOLVE_EXTENSIONS = exports.SVG_REGEX = exports.ICON_EXTENSIONS = exports.ASSETS_REGEX = exports.TS_REGEX = exports.JS_REGEX = exports.GLOBAL_CSS_REGEX = exports.CSS_MODULE_REGEX = exports.CSS_REGEX = void 0;
exports.CSS_REGEX = /\.css$/;
exports.CSS_MODULE_REGEX = /\.module\.css$/;
exports.GLOBAL_CSS_REGEX = /\.global\.css$/;
exports.JS_REGEX = /\.(js|mjs|jsx)$/;
exports.TS_REGEX = /\.tsx?$/;
exports.ASSETS_REGEX = /\.(woff|woff2|eot|ttf|otf|ttc|gif|png|jpe?g|webp|bmp|ico)$/i;
exports.ICON_EXTENSIONS = ['png', 'jpg', 'jpeg', 'svg', 'ico'];
exports.SVG_REGEX = /\.svg$/;
exports.JS_RESOLVE_EXTENSIONS = [
    'web.mjs',
    'mjs',
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
].map(t => `.${t}`);
exports.CACHE_DIRECTORY = './node_modules/.cache';
