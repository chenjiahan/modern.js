import { merge as deepMerge } from '@modern-js/utils/lodash';
import { VueLoaderPlugin } from 'vue-loader';
import type { BuilderPlugin } from '@modern-js/builder';
import type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';
import type { VueLoaderOptions } from 'vue-loader';

export type PluginVueOptions = {
  vueLoaderOptions?: VueLoaderOptions;
};

export function builderPluginVue(
  options?: PluginVueOptions,
): BuilderPlugin<BuilderPluginAPI> {
  return {
    name: 'builder-plugin-vue',

    async setup(api) {
      api.modifyBuilderConfig(config => {
        config.output ||= {};
        config.output.disableSvgr = true;
      });

      api.modifyBundlerChain(async (chain, { CHAIN_ID }) => {
        chain.resolve.extensions.add('.vue');

        const vueLoaderOptions = deepMerge(
          {
            compilerOptions: {
              preserveWhitespace: false,
            },
          },
          options?.vueLoaderOptions,
        );

        chain.module
          .rule(CHAIN_ID.RULE.VUE)
          .test(/\.vue$/)
          .use(CHAIN_ID.USE.VUE)
          .loader(require.resolve('vue-loader'))
          .options(vueLoaderOptions);

        chain.plugin(CHAIN_ID.PLUGIN.VUE_LOADER_PLUGIN).use(VueLoaderPlugin);
      });
    },
  };
}
