import webpack, { Compilation } from '../compiled/webpack';
import TerserWebpackPlugin from '../compiled/terser-webpack-plugin';
import webpackDevMiddleware from '../compiled/webpack-dev-middleware';

export {
  webpack,
  Compilation,
  TerserWebpackPlugin,
  webpackDevMiddleware,
};
export { HotModuleReplacementPlugin } from '../compiled/webpack';
export type {
  Stats,
  Compiler,
  RuleSetRule,
  MultiCompiler,
  LoaderContext,
  Configuration,
  RuleSetUseItem,
  StatsCompilation,
  WebpackPluginInstance,
  RuleSetConditionAbsolute,
} from '../compiled/webpack';
