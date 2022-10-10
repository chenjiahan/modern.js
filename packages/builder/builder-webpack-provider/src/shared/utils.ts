import { URLSearchParams } from 'url';
import {
  getBrowserslist,
  MODULE_PATH_REGEX,
  DEFAULT_BROWSERSLIST,
  DEFAULT_DATA_URL_SIZE,
} from '@modern-js/builder-shared';

import type Buffer from 'buffer';
import type webpack from 'webpack';
import type { SomeJSONSchema } from '@modern-js/utils/ajv/json-schema';
import type { BuilderConfig, DataUriLimit } from '../types';

export async function getBrowserslistWithDefault(
  path: string,
  config: BuilderConfig,
) {
  if (config?.output?.overrideBrowserslist) {
    return config.output.overrideBrowserslist;
  }

  const result = await getBrowserslist(path);
  return result || DEFAULT_BROWSERSLIST;
}

/** Preserving the details of schema by generic types. */
export const defineSchema = <T extends SomeJSONSchema>(schema: T): T => schema;

export const getDataUrlLimit = (
  config: BuilderConfig,
  type: keyof DataUriLimit,
) => {
  const { dataUriLimit = {} } = config.output || {};

  if (typeof dataUriLimit === 'number') {
    return dataUriLimit;
  }

  switch (type) {
    case 'svg':
      return dataUriLimit.svg ?? DEFAULT_DATA_URL_SIZE;
    case 'font':
      return dataUriLimit.font ?? DEFAULT_DATA_URL_SIZE;
    case 'media':
      return dataUriLimit.media ?? DEFAULT_DATA_URL_SIZE;
    case 'image':
      return dataUriLimit.image ?? DEFAULT_DATA_URL_SIZE;
    default:
      throw new Error(`unknown key ${type} in "output.dataUriLimit"`);
  }
};

export function getDataUrlCondition(
  config: BuilderConfig,
  type: keyof DataUriLimit,
) {
  return (source: Buffer, { filename }: { filename: string }): boolean => {
    const queryString = filename.split('?')[1];

    if (queryString) {
      const params = new URLSearchParams(queryString);

      // If a request has query like "foo.png?__inline=false" or "foo.png?url",
      // no matter how small the file is, it will still be treated as a resource instead of being inlined
      const url = params.get('url');
      const legacyInline = params.get('__inline');
      if (legacyInline === 'false' || url !== null) {
        return false;
      }

      // If a request has query like "foo?inline" or "foo?__inline", no matter how big the file is,
      // it will be inlined instead of treated as a resource
      const inline = params.get('inline');
      if (inline !== null || legacyInline !== null) {
        return true;
      }
    }

    return source.length <= getDataUrlLimit(config, type);
  };
}

/**
 * Check if a file handled by specific loader.
 * @author yangxingyuan
 * @param {Configuration} config - The webpack config.
 * @param {string} loader - The name of loader.
 * @param {string}  testFile - The name of test file that will be handled by webpack.
 * @returns {boolean} The result of the match.
 */
export function matchLoader({
  config,
  loader,
  testFile,
}: {
  config: webpack.Configuration;
  loader: string;
  testFile: string;
}): boolean {
  if (!config.module?.rules) {
    return false;
  }
  return config.module.rules.some(rule => {
    if (
      typeof rule === 'object' &&
      rule.test &&
      rule.test instanceof RegExp &&
      rule.test.test(testFile)
    ) {
      return (
        Array.isArray(rule.use) &&
        rule.use.some(useOptions => {
          if (typeof useOptions === 'object' && useOptions !== null) {
            return useOptions.loader?.includes(loader);
          } else if (typeof useOptions === 'string') {
            return useOptions.includes(loader);
          }
          return false;
        })
      );
    }
    return false;
  });
}

export function getPackageNameFromModulePath(modulePath: string) {
  const handleModuleContext = modulePath?.match(MODULE_PATH_REGEX);

  if (!handleModuleContext) {
    return false;
  }

  const [, , scope, name] = handleModuleContext;
  const packageName = ['npm', (scope ?? '').replace('@', ''), name]
    .filter(Boolean)
    .join('.');

  return packageName;
}

export async function stringifyConfig(config: unknown, verbose?: boolean) {
  const { default: WebpackChain } = await import(
    '../../compiled/webpack-5-chain'
  );

  // webpackChain.toString can be used as a common stringify method
  const stringify = WebpackChain.toString as (
    config: unknown,
    options: { verbose?: boolean },
  ) => string;

  return stringify(config as any, { verbose });
}
