import HtmlWebpackPlugin from 'html-webpack-plugin';
import { elements } from './elements';
import { matches, PLUGIN, shouldAddResourceHints } from './common';
import { normalizeOptions } from './config';
import { customAttributes } from './customAttributes';
import { addAsyncChunkResourceHints } from './asyncChunkResourceHints';
import { addInitialChunkResourceHints } from './initialChunkResourceHints';

const falsySafeConcat = arrays =>
  arrays.reduce(
    (combined, array) => (array ? combined.concat(array) : combined),
    [],
  );

const getHtmlWebpackOptions = pluginArgs =>
  pluginArgs && pluginArgs.plugin && pluginArgs.plugin.options
    ? pluginArgs.plugin.options
    : {};

const getCompilationOptions = compilation =>
  compilation && compilation.options ? compilation.options : {};

export class ScriptExtHtmlWebpackPlugin {
  constructor(options) {
    this.options = normalizeOptions(options);
  }

  apply(compiler) {
    const compile = this.compilationCallback.bind(this);
    const emit = this.emitCallback.bind(this);
    if (compiler.hooks) {
      compiler.hooks.compilation.tap(PLUGIN, compile);
      compiler.hooks.emit.tap(PLUGIN, emit);
    } else {
      compiler.plugin('compilation', compile);
      compiler.plugin('emit', emit);
    }
  }

  compilationCallback(compilation) {
    const alterAssetTags = this.alterAssetTagsCallback.bind(this, compilation);
    if (compilation.hooks) {
      const alterAssetTagGroups =
        compilation.hooks.htmlWebpackPluginAlterAssetTags ||
        HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups;
      alterAssetTagGroups.tap(PLUGIN, alterAssetTags);
    } else {
      compilation.plugin(EVENT, alterAssetTags);
    }
  }

  alterAssetTagsCallback(compilation, pluginArgs, callback) {
    const { options } = this;

    const headTagName = Object.prototype.hasOwnProperty.call(
      pluginArgs,
      'headTags',
    )
      ? 'headTags'
      : 'head';

    const bodyTagName = Object.prototype.hasOwnProperty.call(
      pluginArgs,
      'bodyTags',
    )
      ? 'bodyTags'
      : 'body';

    try {
      options.htmlWebpackOptions = getHtmlWebpackOptions(pluginArgs);
      options.compilationOptions = getCompilationOptions(compilation);
      if (elements.shouldUpdate(options)) {
        pluginArgs[headTagName] = elements.update(
          compilation.assets,
          options,
          pluginArgs[headTagName],
        );
        pluginArgs[bodyTagName] = elements.update(
          compilation.assets,
          options,
          pluginArgs[bodyTagName],
        );
      }

      if (shouldAddResourceHints(options)) {
        pluginArgs[headTagName] = falsySafeConcat([
          pluginArgs[headTagName],
          addInitialChunkResourceHints(options, pluginArgs[headTagName]),
          addInitialChunkResourceHints(options, pluginArgs[bodyTagName]),
          addAsyncChunkResourceHints(compilation.chunks, options),
        ]);
      }
      if (customAttributes.shouldAdd(options)) {
        pluginArgs[headTagName] = customAttributes.add(
          options,
          pluginArgs[headTagName],
        );
        pluginArgs[bodyTagName] = customAttributes.add(
          options,
          pluginArgs[bodyTagName],
        );
      }
      if (callback) {
        callback(null, pluginArgs);
      }
    } catch (err) {
      if (callback) {
        callback(err);
      } else {
        compilation.errors.push(err);
      }
    }
  }

  emitCallback(compilation, callback) {
    const { options } = this;
    if (options.inline.test.length > 0 && options.removeInlinedAssets) {
      Object.keys(compilation.assets).forEach(assetName => {
        if (matches(assetName, options.inline.test)) {
          delete compilation.assets[assetName];
        }
      });
    }
    if (callback) {
      callback();
    }
  }
}
