import { useAppContext, useResolvedConfigContext } from '@modern-js/core';
import webpack from '../compiled/webpack';
import {
  ClientWebpackConfig,
  ModernWebpackConfig,
  NodeWebpackConfig,
} from './config';

export { webpack };
export type {
  Stats,
  Compiler,
  Compilation,
  MultiCompiler,
  LoaderContext,
  Configuration,
  StatsCompilation,
} from '../compiled/webpack';
export { BaseWebpackConfig } from './config/base';

export enum WebpackConfigTarget {
  CLIENT,
  NODE,
  MODERN,
}

export const getWebpackConfig = (target: WebpackConfigTarget) => {
  let Config = null;

  switch (target) {
    case WebpackConfigTarget.CLIENT:
      Config = ClientWebpackConfig;
      break;
    case WebpackConfigTarget.MODERN:
      Config = ModernWebpackConfig;
      break;
    case WebpackConfigTarget.NODE:
      Config = NodeWebpackConfig;
      break;
    default:
      Config = null;
  }

  if (!Config) {
    return null;
  }

  /* eslint-disable react-hooks/rules-of-hooks */
  const appContext = useAppContext();
  const options = useResolvedConfigContext();
  /* eslint-enable react-hooks/rules-of-hooks */

  const config = new Config(appContext, options);

  return config.config();
};

export {
  ClientWebpackConfig,
  ModernWebpackConfig,
  NodeWebpackConfig,
} from './config';
