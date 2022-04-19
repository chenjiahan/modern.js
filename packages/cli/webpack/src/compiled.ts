import webpack from '../compiled/webpack';
import webpackDevMiddleware from '../compiled/webpack-dev-middleware';

export { webpack, webpackDevMiddleware };
export type {
  Stats,
  Compiler,
  Compilation,
  MultiCompiler,
  LoaderContext,
  Configuration,
  StatsCompilation,
} from '../compiled/webpack';
