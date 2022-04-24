import { join } from 'path';

export const ROOT_DIR = join(__dirname, '..', '..', '..');
export const PACKAGES_DIR = join(ROOT_DIR, 'packages');
export const DIST_DIR = 'compiled';

export type ImportMap = {
  path: string;
  content: string;
};

type Task = {
  packageDir: string;
  packageName: string;
  dependencies: Array<
    | string
    | {
        /** Name of dependency */
        name: string;
        /** Whether to minify the code. */
        minify?: boolean;
        /** External some sub-dependencies. */
        externals?: Record<string, string>;
        /** Extra entry files to map imports */
        emitFiles?: ImportMap[];
        /** Copy fields from original package.json to target package.json. */
        packageJsonField?: string[];
      }
  >;
};

/**
 * 1. 优先打「零依赖」的包，使 externals 能更好地生效
 * 2. 预打包的依赖请锁死到固定版本
 */
export const TASKS: Task[] = [
  {
    packageDir: 'toolkit/utils',
    packageName: '@modern-js/utils',
    dependencies: [
      // zero dependency
      'lodash',
      'upath',
      'filesize',
      'commander',
      'import-lazy',
      // a few dependencies
      'debug',
      'js-yaml',
      'strip-ansi',
      'gzip-size',
      'pkg-up',
      'recursive-readdir',
      // more dependencies
      'glob',
      'chalk',
      {
        name: 'signale',
        externals: {
          chalk: '../chalk',
          // ncc bundled wrong package.json, using external to avoid this problem
          './package.json': './package.json',
        },
        packageJsonField: ['options'],
      },
      'execa',
      'fs-extra',
      'browserslist',
      'chokidar',
    ],
  },
  {
    packageDir: 'cli/webpack',
    packageName: '@modern-js/webpack',
    dependencies: [
      {
        name: 'terser-webpack-plugin',
        externals: {
          'jest-worker': 'jest-worker',
        },
      },
      {
        name: 'webpack',
        minify: false,
        externals: {
          'terser-webpack-plugin': '../terser-webpack-plugin',
        },
        emitFiles: [
          {
            path: '/lib/NormalModule.js',
            content: `module.exports = require('../').NormalModule;`,
          },
          {
            path: '/lib/RuntimeGlobals.js',
            content: `module.exports = require('../').RuntimeGlobals;`,
          },
          {
            path: '/lib/RuntimeModule.js',
            content: `module.exports = require('../').RuntimeModule;`,
          },
          {
            path: '/lib/SingleEntryPlugin.js',
            content: `module.exports = require('../').SingleEntryPlugin;`,
          },
          {
            path: '/lib/ModuleFilenameHelpers.js',
            content: `module.exports = require('../').ModuleFilenameHelpers;`,
          },
        ],
      },
      {
        name: 'webpack-dev-middleware',
        externals: {
          webpack: '../webpack',
        },
      },
      {
        name: 'webpack-manifest-plugin',
        externals: {
          webpack: '../webpack',
          'webpack/lib/NormalModule': '../webpack/lib/NormalModule',
        },
      },
    ],
  },
];
