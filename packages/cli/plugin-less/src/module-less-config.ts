import type { NormalizedConfig } from '@modern-js/core';
import { getLessLoaderOptions } from '@modern-js/css-config';
import { LessOption as ResolvedLessOption } from '@modern-js/style-compiler';

export const moduleLessConfig = ({
  modernConfig,
  npmImportPrefix = '~',
}: {
  modernConfig: NormalizedConfig;
  npmImportPrefix?: string;
}): ResolvedLessOption => {
  const { options } = getLessLoaderOptions(modernConfig);
  const NpmImportPlugin = require('@modern-js/webpack/less-plugin-npm-import');

  return {
    enableSourceMap: options.sourceMap || false,
    lessOption: {
      ...options.lessOptions,
      plugins: [
        new NpmImportPlugin({ prefix: npmImportPrefix }),
        ...(options.lessOptions?.plugins || []),
      ],
    },
  };
};
