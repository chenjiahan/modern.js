import type { LoaderContext } from 'webpack';
import type { Options } from '../../../compiled/less';

export type LessLoaderOptions = {
  lessOptions?: Options;
  additionalData?:
    | string
    | ((
        content: string,
        loaderContext: LoaderContext<LessLoaderOptions>,
      ) => string);
  sourceMap?: boolean;
  webpackImporter?: boolean;
  implementation?: boolean;
};

export type LessConfig =
  | LessLoaderOptions
  | ((
      options: LessLoaderOptions,
      utils: { addExcludes: (excludes: RegExp | RegExp[]) => void },
    ) => LessLoaderOptions | void);
