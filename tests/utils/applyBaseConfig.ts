import {
  type AppTools,
  type UserConfig,
  appTools,
  mergeConfig,
} from '@modern-js/app-tools';

export const applyBaseConfig = (
  config: UserConfig<AppTools<'rspack'>> = {},
) => {
  return mergeConfig([
    {
      output: {
        // disable polyfill and ts checker to make test faster
        polyfill: 'off',
        disableTsChecker: true,
      },
      plugins: [
        appTools({
          bundler: process.env.BUNDLER === 'webpack' ? 'webpack' : 'rspack',
        }),
      ],
    },
    config,
  ]);
};
