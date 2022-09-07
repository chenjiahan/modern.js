import type { BuilderPlugin } from '../types';

export const PluginEntry = (): BuilderPlugin => ({
  name: 'webpack-builder-plugin-entry',

  setup(api) {
    api.modifyWebpackChain(async chain => {
      const { ensureArray } = await import('@modern-js/utils');

      const { entry } = api.context;
      const config = api.getBuilderConfig();

      const { preEntry } = config.source || {};
      const preEntries = preEntry ? ensureArray(preEntry) : [];

      Object.keys(entry).forEach(entryName => {
        const entryValue = entry[entryName];
        if (typeof entryValue === 'string' || Array.isArray(entryValue)) {
          preEntries.forEach(entry => {
            chain.entry(entryName).add(entry);
          });
          ensureArray(entryValue).forEach(item => {
            chain.entry(entryName).add(item);
          });
        } else {
          const mergedEntries = [
            ...preEntries,
            ...ensureArray(entryValue.import),
          ];
          chain.merge({
            entry: {
              ...chain.get('entry'),
              [entryName]: {
                ...entryValue,
                import: mergedEntries,
              },
            },
          });
        }
      });
    });
  },
});
